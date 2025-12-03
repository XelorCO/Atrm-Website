'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { Publication, Category } from '@/lib/types';
import { CATEGORIES } from '@/lib/types';

interface FileWithPreview {
  file: File | null;
  id: string;
  preview?: string;
  progress: number;
  uploading: boolean;
  error?: string;
  name: string;
  type?: string;
  size: string;
  url?: string;
  isUrlFile?: boolean;
}

export interface FileItem {
  id: string;
  name: string;
  folder_id: string;
  storage_path: string;
  public_url: string;
  mime_type: string;
  size: number;
  uploaded_at: string;
}

export default function AdminDashboardPage() {
  const [view, setView] = useState<'dashboard' | 'add' | 'manage'>('dashboard');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [category, setCategory] = useState<Category>('Maintenance');
  const [images, setImages] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const router = useRouter();
  const supabase = createClient();

  // Check auth
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push('/admin');
    } else {
      setUser(user);
      loadPublications();
    }
  };

  const loadPublications = async () => {
    const { data } = await supabase
      .from('publications')
      .select('*')
      .order('project_date', { ascending: false });

    if (data) setPublications(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  const processFiles = (fileList: FileList) => {
    const imageFiles = Array.from(fileList).filter(
      (file) =>
        file.type.startsWith('image/') &&
        !images.some((img) => img.name === file.name)
    );
    const newFiles = imageFiles.map((file) => ({
      file,
      id: `${file.name}-${Date.now()}`,
      preview: URL.createObjectURL(file),
      progress: 0,
      uploading: false,
      name: file.name,
      type: 'image' as const,
      size: file.size.toString(),
    }));

    setImages((prev) => {
      const newState = [...prev, ...newFiles.map((f) => f.file)];
      console.log('Nouvel état des images:', newState);
      return newState;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setUploadStatus('Création en cours...');
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return router.push('/admin');

    try {
      let imagesUrl: string[] = [];
      if (images.length < 0)
        return setUploadStatus(`Aucune image sélectionnée`);
      setUploadStatus(`Upload de ${images.length} image(s)...`);

      await Promise.all(
        images.map(async (img) => {
          try {
            const fileExt = img.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random()
              .toString(36)
              .substring(2, 9)}.${fileExt}`;

            const { error: uploadError } = await supabase.storage
              .from('publications')
              .upload(`public/${fileName}`, img, {
                contentType: img.type,
                upsert: true,
                cacheControl: '3600',
              });

            if (uploadError) throw uploadError;

            const {
              data: { publicUrl },
            } = supabase.storage
              .from('publications')
              .getPublicUrl(`public/${fileName}`);

            imagesUrl.push(publicUrl);

            console.log(imagesUrl);
          } catch (e) {
            console.log(e);
            throw e;
          }
        })
      );

      const { error: uploadError2 } = await supabase
        .from('publications')
        .insert({
          title: title,
          description: description,
          project_date: projectDate,
          category: category,
          images: imagesUrl,
          cover_url: imagesUrl[0] || null,
        });
      if (uploadError2) throw uploadError2;

      setTitle('');
      setDescription('');
      setProjectDate('');
      setCategory('Maintenance');
      setImages([]);
      setUploadStatus('Publication créée ✅');
      imagesUrl = [];

      setTimeout(() => {
        setUploadStatus('');
        setView('manage');
        loadPublications();
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setUploadStatus(`Erreur: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, imageUrls: string[]) => {
    if (!confirm('Supprimer cette publication ?')) return;

    try {
      for (const url of imageUrls) {
        const fileName = url.split('/').pop()?.split('?')[0];

        console.log('Trying path:', fileName);

        const { data, error } = await supabase.storage
          .from('publications')
          .remove([`public/${fileName}`]);

        console.log('Remove result:', { data, error });
      }
      await supabase.from('publications').delete().eq('id', id);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setUploadStatus(`Erreur: ${message}`);
    }
  };

  if (!user) return <div>Chargement...</div>;

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Panneau d&apos;Administration</h1>
        </div>
      </section>

      <div
        className="container"
        style={{ paddingTop: '50px', paddingBottom: '50px' }}
      >
        {/* Dashboard Main */}
        {view === 'dashboard' && (
          <div className="admin-dashboard">
            <button className="dashboard-button" onClick={() => setView('add')}>
              <i className="fas fa-plus-circle"></i> Ajouter une nouvelle
              actualité
            </button>
            <button
              className="dashboard-button"
              onClick={() => setView('manage')}
            >
              <i className="fas fa-edit"></i> Gérer les actualités existantes
            </button>
          </div>
        )}

        {/* Add Panel */}
        {view === 'add' && (
          <div>
            <button
              className="back-to-dashboard-btn"
              onClick={() => setView('dashboard')}
            >
              <i className="fas fa-arrow-left"></i> Retour
            </button>

            <div className="admin-form-container">
              <h3>Ajouter une nouvelle actualité</h3>

              <form onSubmit={handleSubmit} className="contact-form-modern">
                <div className="form-group-modern full-width">
                  <input
                    type="text"
                    id="sujet"
                    className="form-input-modern"
                    placeholder=" "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <label htmlFor="sujet" className="form-label-modern">
                    Sujet / Titre
                  </label>
                </div>

                <div className="form-group-modern full-width">
                  <textarea
                    id="commentaire"
                    className="form-input-modern"
                    placeholder=" "
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                  <label htmlFor="commentaire" className="form-label-modern">
                    Commentaire / Contenu
                  </label>
                </div>

                <div className="form-group-modern full-width">
                  <label htmlFor="projetDate" className="form-label-static">
                    Date de réalisation
                  </label>
                  <input
                    type="date"
                    id="projetDate"
                    className="form-input-modern"
                    value={projectDate}
                    onChange={(e) => setProjectDate(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group-modern full-width">
                  <label htmlFor="categorie" className="form-label-static">
                    Catégorie
                  </label>
                  <select
                    id="categorie"
                    className="form-input-modern"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                    required
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group-modern full-width">
                  <label htmlFor="image" className="form-label-static">
                    Ajouter des images (optionnel)
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="form-input-modern"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) processFiles(files);
                    }}
                    style={{ paddingTop: '12px' }}
                  />
                </div>

                <div className="full-width">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Publication...' : "Publier l'actualité"}
                  </button>
                  {uploadStatus && (
                    <p
                      style={{ marginTop: '15px', color: 'var(--text-color)' }}
                    >
                      {uploadStatus}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Manage Panel */}
        {view === 'manage' && (
          <div>
            <button
              className="back-to-dashboard-btn"
              onClick={() => setView('dashboard')}
            >
              <i className="fas fa-arrow-left"></i> Retour
            </button>

            <div className="admin-list-container">
              <h3>Gérer les actualités existantes</h3>

              {publications.length === 0 ? (
                <p>Aucune publication.</p>
              ) : (
                publications.map((pub) => (
                  <div key={pub.id} className="publication-item">
                    <div className="publication-item-info">
                      {pub.cover_url && (
                        <img src={pub.cover_url} alt={pub.title} />
                      )}
                      <span>{pub.title}</span>
                      <small>{pub.category}</small>
                    </div>
                    <div className="publication-item-actions">
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(pub.id, pub.images)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Logout */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={handleLogout}
            className="btn"
            style={{
              backgroundColor: 'var(--dark-gray)',
              color: 'var(--white)',
            }}
          >
            Se Déconnecter
          </button>
        </div>
      </div>
    </main>
  );
}
