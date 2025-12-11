'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/placeholder-logo.png"
            alt="Logo ATRM"
            width={125}
            height={100}
            priority
          />
        </Link>

        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                href="/"
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>

            <li
              className={`dropdown ${openDropdown === 'apropos' ? 'open' : ''}`}
            >
              <Link
                href="/a-propos"
                className={pathname?.startsWith('/a-propos') ? 'active' : ''}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('apropos');
                  } else {
                    closeMenu();
                  }
                }}
              >
                À Propos <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/a-propos#presentation" onClick={closeMenu}>
                    Présentation
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos#localisation" onClick={closeMenu}>
                    Localisation du site
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`dropdown ${
                openDropdown === 'solutions' ? 'open' : ''
              }`}
            >
              <Link
                href="/solutions"
                className={pathname?.startsWith('/solutions') ? 'active' : ''}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('solutions');
                  } else {
                    closeMenu();
                  }
                }}
              >
                Nos Solutions <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/solutions#equipements" onClick={closeMenu}>
                    Équipements de manutention et de convoyage
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#integration" onClick={closeMenu}>
                    Intégration d&apos;équipements
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#maintenance" onClick={closeMenu}>
                    Maintenance
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/realisations"
                className={isActive('/realisations') ? 'active' : ''}
                onClick={closeMenu}
              >
                Nos Réalisations
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/alpes-techniques-realisations-mecaniques/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin-btn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`mobile-nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </div>
    </header>
  );
}
