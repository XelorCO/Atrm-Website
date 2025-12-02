-- ===================================
-- ATRM - Configuration Supabase
-- ===================================

-- 1. Création de la table publications
CREATE TABLE publications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  project_date DATE NOT NULL,
  category TEXT NOT NULL CHECK (
    category IN (
      'Maintenance',
      'Intégration d''équipements',
      'Équipements de manutention et de convoyage'
    )
  ),
  images TEXT[] DEFAULT '{}',
  cover_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Index pour optimiser les performances
CREATE INDEX idx_publications_project_date ON publications(project_date DESC);
CREATE INDEX idx_publications_category ON publications(category);

-- 3. Activer RLS
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- 4. Policies 
CREATE POLICY "Public read access"
ON publications FOR SELECT
USING (true);

-- 5. Policies 
CREATE POLICY "Authenticated users can insert"
ON publications FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update"
ON publications FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete"
ON publications FOR DELETE
TO authenticated
USING (true);

-- 6. Création du bucket Storage pour les images
INSERT INTO storage.buckets (id, name, public)
VALUES ('publications', 'publications', true);

-- 7. Policies Storage 
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'publications');

-- 8. Policies Storage
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'publications');

CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'publications');