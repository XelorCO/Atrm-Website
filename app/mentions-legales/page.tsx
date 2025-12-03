export default function MentionsLegalesPage() {
  return (
    <>
      <section className="page-header fade-in">
        <div className="container">
          <h1>Mentions Légales</h1>
        </div>
      </section>

      <section
        className="container content-section fade-in"
        style={{ paddingTop: '80px' }}
      >
        <h3>Éditeur du site</h3>
        <p>
          <strong>Raison sociale :</strong> Soft Pac
          <br />
          <strong>Forme juridique :</strong> Autoentrepreneur
          <br />
          <strong>Adresse du siège social :</strong> 144 route de villard péron,
          73290, La Motte Servolex
          <br />
          <strong>Email :</strong>{' '}
          <a href="mailto:contact@softpac.fr">contact@softpac.fr</a>
        </p>

        <h3>Directeur de la publication</h3>
        <p>
          Le directeur de la publication est M. Olivier GUYOT, en qualité
          d&apos;employé.
        </p>

        <h3>Hébergement</h3>
        <p>
          <strong>Hébergeur :</strong> Soft Pac
          <br />
          <strong>Adresse :</strong> 144 route de villard péron, 73290, La Motte
          Servolex
          <br />
          <strong>Site web :</strong>{' '}
          <a
            href="https://www.softpac.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.softpac.fr/
          </a>
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          L&apos;ensemble de ce site relève de la législation française et
          internationale sur le droit d&apos;auteur et la propriété
          intellectuelle. Tous les droits de reproduction sont réservés, y
          compris pour les documents téléchargeables et les représentations
          iconographiques et photographiques.
        </p>
      </section>
    </>
  );
}
