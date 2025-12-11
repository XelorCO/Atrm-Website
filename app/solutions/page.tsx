import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import ScrollReveal from '@/components/ScrollReveal';

export default function SolutionsPage() {
  return (
    <>
      <ScrollReveal delay={300}>
        <section className="page-header fade-in">
          <div className="container">
            <h1>Nos Solutions & Savoir-Faire</h1>
            <p>
              Quelques-uns des projets et solutions qui témoignent de notre
              expertise.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== ÉQUIPEMENTS DE MANUTENTION ========== */}
      <section
        id="equipements"
        className="solutions-list"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div className="solution-content" style={{ padding: '60px 0' }}>
            <h2>Équipements de manutention et de convoyage</h2>
          </div>
          {/* Extracteur pendulaire */}
          <div className="solution-item fade-in">
            <div className="solution-image">
              <ImageCarousel
                images={['/ext-pend1.jpg', '/ext-pend2.jpg']}
                alt="Extracteur pendulaire"
              />
            </div>
            <div className="solution-content">
              <h3>Extracteur pendulaire</h3>
              <p>
                Développé et fabriqué par nos soins, nos extracteurs pendulaires
                allient innovation, fiabilité et longévité. Grâce à des
                tolérances de fabrication précises et des composants adaptés,
                ils offrent une étanchéité optimisée et une durabilité nettement
                supérieure, garantissant des performances constantes même dans
                les conditions les plus exigeantes.
              </p>
            </div>
          </div>

          {/* Vis d'Archimède */}
          <div className="solution-item fade-in">
            <div className="solution-image">
              <ImageCarousel
                images={[
                  "/vis-d'archi.png",
                  "/vis-d'archi1.png",
                  "/vis-d'archi2.png",
                ]}
                alt="Vis d'Archimède"
              />
            </div>
            <div className="solution-content">
              <h3>Vis d&apos;Archimède</h3>
              <p>
                Les convoyeurs à vis en auge sont spécialement adaptés au
                transport des produits en vrac secs pulvérulents ou colmatant
                (pulpe de betterave, pulpe de bois, déchets organiques, etc.).
                Le capot démontable ou amovible de ce type de convoyeur permet
                une grande accessibilité à ses organes internes (rotor, paliers
                intermédiaires). Il permet également de changer le rotor par le
                dessus et non en son extrémité réduisant ainsi
                l&apos;implantation et facilitant la maintenance.
              </p>
            </div>
          </div>
          {/* Transporteur à chaîne */}
          <div className="solution-item fade-in">
            <div className="solution-image">
              <ImageCarousel
                images={[
                  '/tptr-a-chn1.png',
                  '/tptr-a-chn2.png',
                  '/tptr-a-chn3.png',
                ]}
                alt="Transporteur à chaîne"
              />
            </div>
            <div className="solution-content">
              <h3>Transporteur à chaîne</h3>
              <p>
                Les convoyeurs à chaîne sont spécialement conçus pour le
                transport de produits en vrac variés tels que le carbone, le
                charbon, le sel, les fines ou les pellets. Leur conception mono
                ou bi-chaîne assure une grande résistance à l&apos;abrasion et
                permet un transport efficace même sur de fortes inclinaisons. La
                gamme de matériel couvre des débits allant de 20 à 400 m³/heure.
                Le guidage des rails entièrement boulonné facilite la
                maintenance, tandis que l&apos;atténuation des bruits et des
                vibrations assure un fonctionnement plus silencieux et durable.
                Ces convoyeurs trouvent leur application dans des secteurs tels
                que l&apos;industrie du bois, la bioénergie, ainsi que le
                recyclage et la valorisation des matières.
              </p>
            </div>
          </div>

          {/* Extracteurs à garde hydraulique */}
          <div className="solution-item fade-in">
            <div className="solution-image">
              <ImageCarousel
                images={[
                  '/ext-gad-hydro1.png',
                  '/ext-gad-hydro2.png',
                  '/ext-gad-hydro3.png',
                  '/ext-gad-hydro4.png',
                ]}
                alt="Extracteurs à garde hydraulique"
              />
            </div>
            <div className="solution-content">
              <h3>Les extracteurs à garde hydraulique / à bande en eau</h3>
              <p>
                Les extracteurs à garde hydraulique ou à bande en eau sont
                spécialement conçus pour le déchargement efficace de silos,
                fours ou autres installations industrielles. Leur construction
                compacte, robuste et fermée garantit un fonctionnement sûr et
                respectueux de l&apos;environnement, tout en limitant les
                émissions et la poussière. Le système modulaire et les
                dispositions variables permettent une adaptation optimale à
                différents types de produits, qu&apos;ils soient poussiéreux,
                fins, coulants ou légèrement collants. L&apos;usure est réduite
                grâce au palier d&apos;arbre externe et aux mesures de
                protection contre l&apos;usure sélectionnables, assurant ainsi
                une longue durée de vie et une grande fiabilité.
              </p>
            </div>
          </div>

          {/* Tabliers métalliques */}
          <div className="solution-item fade-in">
            <div className="solution-image">
              <ImageCarousel
                images={['/tbl-met-eca1.png', '/tbl-met-eca2.png']}
                alt="Tabliers métalliques à écaille"
              />
            </div>
            <div className="solution-content">
              <h3>Tabliers métalliques à écaille</h3>
              <p>
                Les tabliers métalliques à écaille sont spécialement conçus pour
                le transport et le convoyage de produits lourds sur de courtes
                ou moyennes distances, ainsi que pour les fonctions
                d&apos;extraction en fosse, d&apos;alimentation via trémie et de
                transfert. Leur conception robuste et modulaire, associée à des
                composants de haute qualité, garantit un équipement industriel
                fiable et durable. Les moteurs à économie d&apos;énergie, la
                maintenance simplifiée et la haute fiabilité globale font de ces
                tabliers un choix performant pour les applications industrielles
                exigeantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTÉGRATION D'ÉQUIPEMENTS ========== */}
      <section
        id="integration"
        className="solutions-list"
        style={{ paddingTop: 0, backgroundColor: 'var(--bg-color)' }}
      >
        <div className="container">
          <div className="solution-content" style={{ padding: '60px 0' }}>
            <h2>Intégration d&apos;équipements</h2>
          </div>

          <div className="solution-item fade-in">
            <div className="solution-image">
              <Image
                src="/20250328_160151.jpg"
                alt="Intégration d'équipements"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="solution-content">
              <p>
                Nos ensembles de manutention clés en main sont conçus pour
                s&apos;adapter parfaitement aux besoins spécifiques de chaque
                client, optimisant le transport, le tri et le traitement des
                matériaux dans tous types d&apos;industries. Nous proposons une
                gamme complète d&apos;équipements modulables : over bandes,
                machines à courant de Foucault, SAS alvéolaires ou à double
                clapet, guillotines, trémies, cribles, anses de déchargement et
                couloirs vibrants. Chaque solution peut être entièrement
                personnalisée selon le type de produit, le flux, les contraintes
                d&apos;implantation, ainsi que les charpentes et passerelles,
                afin de garantir une intégration optimale dans vos
                installations. Cette approche assure un fonctionnement fiable,
                une maintenance simplifiée, une durabilité maximale et des
                performances sécurisées, entièrement adaptées à vos besoins
                industriels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAINTENANCE ========== */}
      <section
        id="maintenance"
        className="solutions-list"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div className="solution-content" style={{ padding: '100px 0' }}>
            <h2>Maintenance</h2>
          </div>

          <div className="solution-item fade-in">
            <div className="solution-image">
              <Image
                src="/20250403_102853.jpg"
                alt="Maintenance"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="solution-content">
              <p>
                Notre service de maintenance assure un entretien rapide et
                efficace de vos équipements industriels. Grâce à notre
                réactivité et notre expertise, nous intervenons dans des délais
                très courts pour minimiser vos arrêts de production. Chaque
                intervention est adaptée à vos besoins spécifiques, garantissant
                fiabilité, performance et durabilité de vos installations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
