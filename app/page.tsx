import { createClient } from '@/lib/supabase/server';
import PublicationCard from '@/components/PublicationCard';
import PartnersLogos from '@/components/PartnersLogos';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  const supabase = await createClient();

  const { data: publications } = await supabase
    .from('publications')
    .select('*')
    .order('project_date', { ascending: false })
    .limit(3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container fade-in">
          <h1>Solutions de Convoyage industrielles</h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <Link
              href="/solutions#equipements"
              className="feature-link fade-in"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="feature-item">
                <h3>Équipement de manutention et de convoyage</h3>
              </div>
            </Link>

            <Link
              href="/solutions#integration"
              className="feature-link fade-in"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="feature-item">
                <h3>Intégration d&apos;équipements</h3>
              </div>
            </Link>

            <Link
              href="/solutions#maintenance"
              className="feature-link fade-in"
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="feature-item">
                <h3>Maintenance</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image fade-in">
              <Image
                src="/20250408_201653.jpg"
                alt="Installation d'équipements de convoyage par l'équipe ATRM"
                width={600}
                height={450}
                className="rounded-lg"
              />
            </div>
            <div
              className="about-preview-content fade-in"
              style={{ transitionDelay: '0.2s' }}
            >
              <h2>
                <span className="initial">A</span>lpes{' '}
                <span className="initial">T</span>echniques{' '}
                <span className="initial">R</span>éalisations{' '}
                <span className="initial">M</span>écaniques
              </h2>
              <p>
                Fondée en 1990, la société ATRM est spécialisée dans la
                conception et la fabrication d&apos;équipements de convoyage
                robustes et fiables pour les usines d&apos;incinération, les
                centrales biomasses et toutes autres industries.
              </p>
              <Link href="/a-propos" className="btn btn-secondary">
                En savoir +
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section - Dernières Réalisations */}
      <section className="news">
        <div className="container">
          <h2 className="fade-in">Nos Dernières Réalisations</h2>
          <div
            className="news-grid fade-in"
            style={{ transitionDelay: '0.2s' }}
          >
            {publications && publications.length > 0 ? (
              publications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))
            ) : (
              <p style={{ color: '#fff', textAlign: 'center' }}>
                Aucune réalisation pour le moment.
              </p>
            )}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/realisations" className="btn btn-secondary">
              Toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Partenaires - ILS NOUS FONT CONFIANCE */}
      <PartnersLogos />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à démarrer votre projet avec nous ?</h2>
          <p style={{ marginBottom: '30px' }}>
            Contactez-nous dès aujourd&apos;hui pour obtenir une solution sur
            mesure.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Discutons de votre projet
          </Link>
        </div>
      </section>
    </>
  );
}
