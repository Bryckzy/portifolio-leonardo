import React, { useEffect, useState } from 'react';
import type { NavLink } from '../../types';

interface HeaderProps {
  navLinks: NavLink[];
}

const NavGlyph: React.FC<{ href: string }> = ({ href }) => {
  if (href === '#overview') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 10.7 12 3.8l8.5 6.9v8.1a1.7 1.7 0 0 1-1.7 1.7h-4.6v-6.2H9.8v6.2H5.2a1.7 1.7 0 0 1-1.7-1.7v-8.1Z" />
      </svg>
    );
  }

  if (href === '#experiencia') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 6.2V4.9c0-1 .8-1.8 1.8-1.8h4c1 0 1.8.8 1.8 1.8v1.3" />
        <path d="M4.5 6.2h15A1.8 1.8 0 0 1 21.3 8v9.9a2 2 0 0 1-2 2H4.7a2 2 0 0 1-2-2V8a1.8 1.8 0 0 1 1.8-1.8Z" />
        <path d="M2.8 11.7c2.5 1.2 5.6 1.8 9.2 1.8s6.7-.6 9.2-1.8" />
        <path d="M10.2 12.3h3.6v2.5h-3.6z" />
      </svg>
    );
  }

  if (href === '#projetos') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7.4" height="7.4" rx="2" />
        <rect x="13.6" y="3" width="7.4" height="7.4" rx="2" />
        <rect x="3" y="13.6" width="7.4" height="7.4" rx="2" />
        <rect x="13.6" y="13.6" width="7.4" height="7.4" rx="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.8h16v12.4H4z" />
      <path d="m4.8 7 7.2 5.7L19.2 7" />
    </svg>
  );
};

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [activeHref, setActiveHref] = useState('#overview');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.01, 0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  const handleNav = (href: string) => {
    setActiveHref(href);
  };

  return (
    <>
      <header className={`desktop-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="desktop-brand" href="#overview" onClick={() => handleNav('#overview')} aria-label="Leonardo Brykcy — início">
          <span className="brand-mark">LB</span>
          <span className="brand-copy">
            <strong>Leonardo Brykcy</strong>
            <small>Product · Systems · AI</small>
          </span>
        </a>

        <nav className="desktop-liquid-nav" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const active = activeHref === link.href;
            return (
              <a
                key={link.href}
                className={`desktop-nav-item ${active ? 'is-active' : ''}`}
                href={link.href}
                onClick={() => handleNav(link.href)}
                aria-current={active ? 'page' : undefined}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <a className="desktop-contact" href="#contato" onClick={() => handleNav('#contato')}>
          Falar comigo <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="mobile-brandbar" aria-hidden="true">
        <span>Leonardo Brykcy</span>
        <span>Product · Systems · AI</span>
      </div>

      <nav className={`mobile-liquid-nav ${isScrolled ? 'is-scrolled' : ''}`} aria-label="Navegação principal mobile">
        <span className="liquid-rim liquid-rim-top" aria-hidden="true" />
        <span className="liquid-rim liquid-rim-bottom" aria-hidden="true" />
        {navLinks.map((link) => {
          const active = activeHref === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-item ${active ? 'is-active' : ''}`}
              onClick={() => handleNav(link.href)}
              aria-current={active ? 'page' : undefined}
            >
              <span className="mobile-nav-lens" aria-hidden="true">
                <span className="lens-specular" />
                <span className="lens-refraction" />
              </span>
              <span className="mobile-nav-icon"><NavGlyph href={link.href} /></span>
              <span className="mobile-nav-label">{link.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
