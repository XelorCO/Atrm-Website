export default function AProposPage() {
  return (
    <>
      <section className="page-header fade-in">
        <div className="container">
          <h1>Notre histoire, au service de l&apos;industrie</h1>
        </div>
      </section>

      {/* Présentation */}
      <section id="presentation" style={{ paddingTop: 0 }}>
        <div className="container content-section">
          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <h2>Présentation</h2>
            <p>
              La force d’ATRM réside dans son bureau d’études et la réactivité
              de ses équipes, engagées dans la réussite de vos projets.
            </p>

            <div className="means-grid" role="list">
              <article className="mean-item" role="listitem">
                <div className="mean-icon" aria-hidden="true">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className="mean-body">
                  <h3>Équipe d&apos;experts</h3>
                  <p>
                    Un bureau d&apos;études de 2 ingénieurs et 1
                    dessinateur-projeteur, en lien direct avec la production et
                    la pose.
                  </p>
                </div>
              </article>

              <article className="mean-item" role="listitem">
                <div className="mean-icon" aria-hidden="true">
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <div className="mean-body">
                  <h3>Outils de conception</h3>
                  <p>
                    3 postes CAO-DAO (SolidWorks, DraftSight, AutoCAD 2D/3D).
                  </p>
                </div>
              </article>

              <article className="mean-item" role="listitem">
                <div className="mean-icon" aria-hidden="true">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="mean-body">
                  <h3>Nos points forts</h3>
                  <p>
                    Une réactivitée à toute épreuve, nous répondons à toutes vos
                    urgences et vos besoins dans les meilleurs délais.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section id="localisation" style={{ paddingTop: 0 }}>
        <div className="container content-section">
          <div className="fade-in" style={{ transitionDelay: '0.4s' }}>
            <h2>Localisation du site</h2>
            <p>
              Nous sommes situés dans la zone d&apos;activités ALPESPACE de
              Montmélian (73), au carrefour de Chambéry, Grenoble et
              Albertville.
            </p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5875357828445!2d6.034067076703589!3d45.478112132509736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bb2874793d33f%3A0x37933c3f045bb2a1!2s251%20Voie%20Vasco%20de%20Gama%2C%2073800%20Sainte-H%C3%A9l%C3%A8ne-du-Lac!5e0!3m2!1sfr!2sfr!4v1753225296618!5m2!1sfr!2sfr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ border: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
