'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Si une seule image, pas besoin de carrousel
  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        width={600}
        height={400}
        className="rounded-lg solution-single-image"
      />
    );
  }

  return (
    <div className="solution-carousel">
      <div className="solution-carousel-track">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={goToPrevious}
        className="solution-carousel-prev"
        aria-label="Image précédente"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="solution-carousel-next"
        aria-label="Image suivante"
      >
        ›
      </button>

      {/* Indicateurs (points) */}
      <div className="solution-carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`solution-carousel-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Compteur */}
      <div className="solution-carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
