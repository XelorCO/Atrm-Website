'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partners = [
  { name: 'Partenaire 1', logo: '/logos/pe1.png' },
  { name: 'Partenaire 2', logo: '/logos/pe2.png' },
  { name: 'Partenaire 3', logo: '/logos/pe3.png' },
  { name: 'Partenaire 4', logo: '/logos/pe4.png' },
  { name: 'Partenaire 5', logo: '/logos/pe5.png' },
  { name: 'Partenaire 6', logo: '/logos/pe6.png' },
  { name: 'Partenaire 7', logo: '/logos/pe7.png' },
  { name: 'Partenaire 8', logo: '/logos/pe8.png' },
  { name: 'Partenaire 9', logo: '/logos/pe9.png' },
];

export default function PartnersLogos() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Dupliquer les logos pour un défilement infini
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    setIsDragging(true);
    setStartX(e.pageX - scroller.offsetLeft);
    setScrollLeft(scroller.scrollLeft);
    scroller.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 2; // Sensibilité du drag
    scroller.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      const scroller = scrollerRef.current;
      if (scroller) {
        scroller.style.cursor = 'grab';
      }
    }
  };

  return (
    <section className="partners-section">
      <div className="container">
        <h2>Ils nous font confiance</h2>

        <div className="partners-slider">
          <div
            className={`partners-track ${isDragging ? 'dragging' : ''}`}
            ref={scrollerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {partners.map((partner, index) => (
              <div key={index} className="partner-item">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="partner-logo"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
