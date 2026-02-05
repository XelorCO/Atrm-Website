'use client';

import { useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';
import ScrollReveal from '@/components/ScrollReveal';

export default function SolutionsPage() {
  const [openSolutionId, setOpenSolutionId] = useState<string | null>(null);

  const toggleSolution = (id: string) => {
    setOpenSolutionId((prevId) => (prevId === id ? null : id));
  };

  // =========================================================
  // 1. DONNÉES : ÉQUIPEMENTS DE MANUTENTION
  // =========================================================
  const equipementsData = [
    {
      id: 'extracteur',
      title: 'Extracteur pendulaire',
      images: [
        '/ext-pend1.jpg',
        '/ext-pend2.jpg',
        '/ext-pend3.jpg',
        '/ext-pend4.jpg',
      ],
      content:
        'Développé et fabriqué par nos soins, nos extracteurs pendulaires allient innovation, fiabilité et longévité. Grâce à des tolérances de fabrication précises et des composants adaptés, ils offrent une étanchéité optimisée et une durabilité nettement supérieure, garantissant des performances constantes même dans les conditions les plus exigeantes.',
    },
    {
      id: 'vis',
      title: "Vis d'Archimède",
      images: [
        "/vis-d'archi1.jpg",
        "/vis-d'archi2.jpg",
        "/vis-d'archi3.jpg",
        "/vis-d'archi4.jpg",
      ],
      content:
        "Nos vis d’Archimède (en auge/tubulaire) sont spécialement adaptées au transport des produits en vrac secs pulvérulents ou colmatants. Les capots démontables ou amovibles de ce type de vis permettent une grande accessibilité à ses organes internes (rotor, paliers intermédiaires). Il permet également de changer le rotor par le dessus et non en son extrémité, réduisant ainsi l'implantation et facilitant la maintenance.",
    },
    {
      id: 'chaine',
      title: 'Transporteur à chaîne',
      images: ['/tptr-a-chn1.JPG', '/tptr-a-chn2.jpg', '/tptr-a-chn3.jpg'],
      content:
        'Transporteurs polyvalents pour vrac et pièces. Disponibles en mono ou bi-chaîne (forgée ou marine) pour une robustesse maximale. Options de capotage isolé et maintenance simplifiée grâce aux capots rabattables. Une solution fiable, testée et sur mesure.',
    },
    {
      id: 'bande',
      title: 'Transporteur à bande',
      images: ['/tptr-a-bd1.jpg', '/tptr-a-bd2.png'],
      content:
        "Idéaux pour le déplacement de vrac ou de pièces diverses, nos transporteurs à bande s'adaptent à toutes vos contraintes logistiques. Disponibles en série légère (gain de place), série lourde (charges importantes) ou en auge (grands volumes), ils offrent une solution fiable, modulable et efficace pour chaque besoin industriel.",
    },
    {
      id: 'garde',
      title: 'Extracteurs à garde hydraulique',
      images: [
        '/ext-gad-hydro1.jpg',
        '/ext-gad-hydro2.jpg',
        '/ext-gad-hydro3.jpg',
        '/ext-gad-hydro4.jpg',
        '/ext-gad-hydro5.jpg',
        '/ext-gad-hydro6.jpg',
        '/ext-gad-hydro7.jpg',
        '/ext-gad-hydro8.jpg',
      ],
      content:
        "Conçus pour le déchargement étanche de fours, ces extracteurs capotés limitent poussières et émissions. Équipés de chaînes forgées ou marines, ils s'adaptent aux produits complexes (fins, collants). Dotés d'une boîte à eau avec sonde radar et limiteur de couple, ils garantissent un contrôle précis, une sécurité accrue et une maintenance facilitée.",
    },
    {
      id: 'tabliers',
      title: 'Tabliers métalliques à écaille',
      images: ['/tbl-met-eca1.jpg', '/tbl-met-eca2.jpg', '/tbl-met-eca3.jpg'],
      content:
        'Conçus pour le transport fiable de déchets (OM, DIB) et matériaux lourds ou abrasifs. Leur structure robuste résiste parfaitement à l’usure et aux conditions difficiles. Équipés d’un graissage automatique des chaînes, ils assurent un fonctionnement continu avec une maintenance réduite pour une longévité maximale.',
    },
    {
      id: 'Élevateurs à godets',
      title: 'Élevateurs à godets',
      images: ['/elev-godet1.JPG', '/elev-godet2.JPG', '/elev-godet3.JPG'],
      content:
        'Nos élévateurs à godets sont conçus pour le transport vertical de tous types de produits en vrac : carbone, charbon, sel, fines, pellets et matériaux similaires. Disponible en version à chaînes ou à bandes, il s’adapte aux contraintes de chaque installation industrielle. Équipé de chaînes marines ou mécaniques, il garantit robustesse, fiabilité et longévité, même dans des environnements exigeants.',
    },
    {
      id: 'Trommels',
      title: 'Trommels',
      images: ['/trommel1.png'],
      content:
        'Le crible trommel, ou crible rotatif, permet de séparer et prétrier les déchets par taille sur les sites de traitement, recyclage ou compostage. Adaptable à tous types de grilles et équipé de mélangeurs, il offre une solution efficace et modulable pour le tri des matériaux.',
    },
    {
      id: 'Convoyeur à bande en eau',
      title: 'Convoyeur à bande en eau',
      images: ['/conv-b-eau1.jpg', '/conv-b-eau2.jpg', '/conv-b-eau3.jpg'],
      content:
        'Nos convoyeurs à bande en eau offrent une solution innovante pour le transport de produits de combustion, issus des centrales thermiques et centrales biomasse. La bande permet de limiter les coûts de maintenance comparativement aux systèmes à chaîne, offrant un fonctionnement plus continu et moins exigeant en entretien. De plus, la caisse en inox ferritique assure une résistance durable à la corrosion, garantissant une longévité optimale même dans des conditions industrielles difficiles. Grâce à leur conception robuste, fermée et optimisée, ces convoyeurs assurent un transport fiable, sûr et respectueux de l’environnement, tout en limitant la poussière et les émissions, même pour les matériaux abrasifs ou chauds.',
    },
  ];

  // =========================================================
  // 2. DONNÉES : INTÉGRATION
  // =========================================================
  const integrationData = [
    {
      id: 'integration-item',
      title: "Intégration d'équipements",
      images: [
        '/inte-equipmt1.jpg',
        '/inte-equipmt2.jpg',
        '/inte-equipmt3.jpg',
      ],
      content:
        "Nos ensembles de manutention clés en main sont conçus pour s'adapter parfaitement aux besoins spécifiques de chaque client, optimisant le transport, le tri et le traitement des matériaux dans tous types d'industries. Nous proposons une gamme complète d'équipements modulables.",
    },
    {
      id: 'Trémie et Silo',
      title: 'Trémie et Silo',
      images: [
        '/tr-silo1.jpg',
        '/tr-silo2.jpg',
        '/tr-silo3.jpg',
        '/tr-silo4.jpg',
        '/tr-silo5.jpg',
        '/tr-silo6.jpg',
        '/tr-silo7.jpg',
        '/tr-silo8.jpg',
      ],
      content:
        'Nous concevons, adaptons et rénovons tout type de trémie et silo selon vos besoins spécifiques. Que ce soit pour résister à la chaleur, à la corrosion ou à l’abrasion, nous vous proposons des solutions sur mesure, optimisées pour vos contraintes et votre utilisation.',
    },
  ];

  // =========================================================
  // 3. DONNÉES : MAINTENANCE
  // =========================================================
  const maintenanceData = [
    {
      id: 'maintenance-item',
      title: 'Maintenance Industrielle',
      images: ['/maint1.jpg', '/maint2.jpg', '/maint3.jpg'],
      content:
        'Notre service de maintenance assure un entretien rapide et efficace de vos équipements industriels. Grâce à notre réactivité et notre expertise, nous intervenons dans des délais très courts pour minimiser vos arrêts de production.',
    },
  ];

  const renderGrid = (data: typeof equipementsData) => (
    <div className="solutions-grid">
      {data.map((item, index) => {
        const isOpen = openSolutionId === item.id;
        return (
          <ScrollReveal key={item.id} delay={index * 100}>
            <div className={`solution-card-modern ${isOpen ? 'is-open' : ''}`}>
              <div className="solution-card-image">
                <ImageCarousel images={item.images} alt={item.title} />
                <button
                  className="btn-overlay-read-more"
                  onClick={() => toggleSolution(item.id)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? 'Réduire -' : 'Lire plus +'}
                </button>
                <div className="image-gradient-overlay"></div>
              </div>
              <div className="solution-card-body">
                <h3>{item.title}</h3>
                <div className="solution-card-content">
                  <div className="content-inner">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );

  return (
    <>
      {/* HEADER */}
      <section className="page-header">
        <ScrollReveal delay={200}>
          <div className="container">
            <h1>Nos Solutions & Savoir-Faire</h1>
            <p>
              Quelques-uns des projets et solutions qui témoignent de notre
              expertise.
            </p>
          </div>
        </ScrollReveal>
      </section>
      <section id="equipements" className="solutions-grid-section">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ marginBottom: '50px' }}>
              Équipements de manutention et de convoyage
            </h2>
          </ScrollReveal>
          {renderGrid(equipementsData)}
        </div>
      </section>
      <section
        id="integration"
        className="solutions-grid-section"
        style={{ backgroundColor: 'var(--bg-color)' }}
      >
        <div className="container">
          <ScrollReveal>
            <h2 style={{ marginBottom: '50px' }}>
              Intégration d&apos;équipements
            </h2>
          </ScrollReveal>
          {renderGrid(integrationData)}
        </div>
      </section>
      <section id="maintenance" className="solutions-grid-section">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ marginBottom: '50px' }}>Maintenance</h2>
          </ScrollReveal>
          {renderGrid(maintenanceData)}
        </div>
      </section>
    </>
  );
}
