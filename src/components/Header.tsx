import React, { useEffect, useRef, useState } from 'react';
import type { NavLink, ContactLink } from '../../types';
import { MenuIcon } from '../../components/Icons';

interface HeaderProps {
  navLinks: NavLink[];
  profileImageUrl: string;
  contactLinks: ContactLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks, profileImageUrl, contactLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const updateGlassFocus = (element: HTMLElement, clientX: number, clientY: number) => {
    const rect = element.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
    element.style.setProperty('--glass-x', `${x}%`);
    element.style.setProperty('--glass-y', `${y}%`);
    element.style.setProperty('--glass-rx', `${(y - 50) / 40}deg`);
    element.style.setProperty('--glass-ry', `${(50 - x) / 48}deg`);
  };

  const moveHighlight = (event: React.PointerEvent<HTMLDivElement>) => {
    updateGlassFocus(event.currentTarget, event.clientX, event.clientY);
  };

  const resetHighlight = (ref: React.RefObject<HTMLDivElement | null>, y = '22%') => {
    ref.current?.style.setProperty('--glass-x', '50%');
    ref.current?.style.setProperty('--glass-y', y);
    ref.current?.style.setProperty('--glass-rx', '0deg');
    ref.current?.style.setProperty('--glass-ry', '0deg');
  };

  return (
    <>
      <header
        className={`liquid-glass-header fixed top-0 left-0 right-0 z-[110] transition-all duration-300 apple-header-blur border-b ${isScrolled ? 'is-scrolled border-apple/5 shadow-sm h-14' : 'border-transparent h-20'}`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div
            ref={shellRef}
            onPointerMove={moveHighlight}
            onPointerLeave={() => resetHighlight(shellRef, '20%')}
            className="liquid-glass-nav-shell w-full h-full flex items-center justify-between"
          >
            <span className="liquid-glass-caustic" aria-hidden="true" />
            <span className="liquid-glass-refraction" aria-hidden="true" />
            <span className="liquid-glass-specular" aria-hidden="true" />

            <a
              href="#overview"
              className="relative z-10 text-sm font-black tracking-[0.2em] text-apple group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 rounded-md"
              aria-label="Ir para o início do portfólio"
            >
              L.BRYKCY
              <span className="text-pistachio-dark font-medium transition-colors group-hover:text-apple">_PRODUCT</span>
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              className="liquid-glass-menu-button relative z-10 p-2 focus:outline-none flex items-center justify-center transition-transform active:scale-90"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="portfolio-navigation"
            >
              <span className="liquid-glass-button-shine" aria-hidden="true" />
              <MenuIcon isOpen={isMenuOpen} className="relative z-10 w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`liquid-glass-overlay fixed inset-0 z-[105] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id="portfolio-navigation"
        onPointerMove={moveHighlight}
        onPointerLeave={() => resetHighlight(panelRef, '8%')}
        className={`liquid-glass-menu-panel fixed ${isScrolled ? 'top-14' : 'top-20'} left-0 right-0 border-b border-apple/5 shadow-lg transition-all duration-300 z-[106] max-h-[calc(100vh-5rem)] overflow-y-auto ${isMenuOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-[0.985] pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <span className="liquid-glass-caustic liquid-glass-caustic-panel" aria-hidden="true" />
        <span className="liquid-glass-refraction" aria-hidden="true" />
        <span className="liquid-glass-specular liquid-glass-specular-panel" aria-hidden="true" />

        <div className="container relative z-10 mx-auto px-6 py-7 md:py-8">
          <nav className="flex flex-col" aria-label="Navegação principal">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${idx * 34}ms` }}
                className={`liquid-glass-menu-link text-2xl font-black tracking-tighter text-apple transition-all duration-300 group ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="text-pistachio-dark ml-1 inline-block transform group-hover:scale-150 transition-transform duration-300">.</span>
              </a>
            ))}
          </nav>

          <div className={`mt-7 pt-6 border-t border-white/45 flex flex-col items-start transition-all duration-500 delay-150 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={profileImageUrl}
                alt="Leonardo Brykcy"
                className="liquid-glass-avatar w-12 h-12 rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-black text-apple tracking-widest uppercase leading-none">Leonardo Brykcy</p>
                <p className="text-[10px] font-medium text-gray-500 mt-1.5 uppercase tracking-widest">Product Strategy & Ops</p>
              </div>
            </div>

            <div className="flex gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="liquid-glass-contact-button w-10 h-10 rounded-2xl flex items-center justify-center text-apple/60 hover:text-apple transform hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                  aria-label={link.ariaLabel}
                >
                  {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
