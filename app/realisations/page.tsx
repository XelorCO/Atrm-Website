import { createClient } from '@/lib/supabase/server';
import Filter from './components/Filter';
import ScrollReveal from '@/components/ScrollReveal';

export default async function RealisationsPage() {
  const supabase = await createClient();

  const { data: publications } = await supabase
    .from('publications')
    .select('*')
    .order('project_date', { ascending: false });

  return (
    <>
      <ScrollReveal delay={300}>
        <section className="page-header fade-in">
          <div className="container">
            <h1>Toutes nos réalisations</h1>
            <p>
              Retrouvez ici les dernières nouvelles concernant nos projets et
              notre entreprise.
            </p>
          </div>
        </section>

        <section className="news news--realisations">
          <div className="container">
            <h2 className="fade-in">Nos Dernières Réalisations</h2>
            <Filter publications={publications} />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
