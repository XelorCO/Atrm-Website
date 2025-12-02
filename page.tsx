export default function ContactPage() {
  return (
    <>
      <section className="page-header fade-in">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Une question ? Un projet ? Notre équipe est à votre écoute.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container fade-in">
          <div className="contact-wrapper-modern">
            <div className="contact-info-modern">
              <img src="/placeholder-logo.png" alt="Logo ATRM" className="contact-logo-modern" />
              <h3>Informations de contact</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  251 Voie Vasco de Gama<br />
                  ALPESPACE, 73800 St Hélène du Lac
                </span>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:contact@atrm-tec.fr">contact@atrm-tec.fr</a>
              </p>
              <p>
                <i className="fas fa-info-circle"></i>
                <span>
                  Nous sommes prêts à étudier votre projet et à vous fournir une solution sur mesure.
                </span>
              </p>
            </div>

            <form
              action="https://formsubmit.co/contact@atrm-tec.fr"
              method="POST"
              className="contact-form-modern"
            >
              <h3>Envoyez-nous un message</h3>

              <input type="hidden" name="_subject" value="Nouveau message depuis le site ATRM !" />
              <input type="hidden" name="_next" value="https://votre-site.vercel.app/merci" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-group-modern">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input-modern"
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="form-label-modern">
                  Nom complet *
                </label>
              </div>

              <div className="form-group-modern">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input-modern"
                  placeholder=" "
                />
                <label htmlFor="company" className="form-label-modern">
                  Entreprise
                </label>
              </div>

              <div className="form-group-modern">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input-modern"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="form-label-modern">
                  Email *
                </label>
              </div>

              <div className="form-group-modern">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input-modern"
                  placeholder=" "
                />
                <label htmlFor="phone" className="form-label-modern">
                  Téléphone
                </label>
              </div>

              <div className="form-group-modern full-width">
                <textarea
                  id="message"
                  name="message"
                  className="form-input-modern"
                  placeholder=" "
                  rows={5}
                  required
                ></textarea>
                <label htmlFor="message" className="form-label-modern">
                  Votre message *
                </label>
              </div>

              <div className="full-width">
                <button type="submit" className="btn btn-primary">
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}