import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>ATRM</h4>
            <p>
              Votre partenaire pour toutes vos solutions de convoyage industriel
              depuis 1990.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              251 Voie Vasco de Gama
              <br />
              ALPESPACE
              <br />
              73800 Saint Hélène du Lac
              <br />
              <a href="mailto:contact@atrm-tec.fr">
                contact@atrm-tec.fr <br />
                +33 6 14 88 89 83
              </a>
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/a-propos">À Propos</Link>
              </li>
              <li>
                <Link href="/solutions">Nos Solutions</Link>
              </li>
              <li>
                <Link href="/realisations">Nos Réalisations</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Légal</h4>
            <ul>
              <li>
                <Link href="/mentions-legales">Mentions Légales</Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 ATRM - Tous droits réservés - Fait avec ♥ par{' '}
            <a
              href="http://softpac.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soft Pac
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
