'use client';

import { useState } from 'react';
import type { Publication } from '@/lib/types';

// Fonction pour obtenir la classe CSS selon la catégorie
const getCategoryClass = (category: string): string => {
  switch (category) {
    case 'Maintenance':
      return 'category-light-blue';
    case "Intégration d'équipements":
      return 'category-dark-blue';
    case 'Équipements de manutention et de convoyage':
      return 'category-very-dark-blue';
    default:
      return 'category-light-blue';
  }
};

export default function PublicationCard({
  publication,
}: {
  publication: Publication;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? publication.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === publication.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <article className="news-article fade-in">
      {publication.images.length > 0 && (
        <div className="news-carousel" id={`carousel-${publication.id}`}>
          <div className="carousel-track">
            <img
              src={publication.images[currentImageIndex]}
              alt={publication.title}
              className="news-article-image"
            />
          </div>

          {publication.images.length > 1 && (
            <>
              <button
                className="carousel-prev"
                onClick={handlePrevImage}
                aria-label="Précédent"
              >
                ‹
              </button>
              <button
                className="carousel-next"
                onClick={handleNextImage}
                aria-label="Suivant"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      <div className="news-information">
        <div>
          <h3>{publication.title}</h3>
          <small>{formatDate(publication.project_date)}</small>
          <p>{publication.description}</p>
        </div>

        {/* Badge catégorie EN BAS */}
        <span
          className={`category-badge ${getCategoryClass(publication.category)}`}
        >
          {publication.category}
        </span>
      </div>
    </article>
  );
}
