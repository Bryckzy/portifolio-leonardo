import React, { useEffect, useMemo, useState } from 'react';
import type { NavLink, ContactLink } from '../../types';

interface HeaderProps {
  navLinks: NavLink[];
  profileImageUrl: string;
  contactLinks: ContactLink[];
}

type DockItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ios-dock-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.8 10.4 12 3.8l8.2 6.6" />
    <path d="M5.8 9.4v10.2h12.4V9.4" />
    <path d="M9.5 19.6v-5.8h5v5.8" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ios-dock-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="12" rx="3" />
    <path d="M8.5 7V5.7A1.7 1.7 0 0 1 10.2 4h3.6a1.7 1.7 0 0 1 1.7 1.7V7" />
    <path d="M3.4 11.5c2.5 1.6 5.4 2.4 8.6 2.4s6.1-.8 8.6-2.4" />
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ios-dock-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
  </svg>
);

const EducationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ios-dock-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-4.5L21 9l-9 4.5L3 9Z" />
    <path d="M6.3 10.7v4.7c2.9 2.3 8.5 2.3 11.4 0v-4.7" />
    <path d="M21 9v6" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ios-dock-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4.5" width="18" height="15" rx="3" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ navLinks, profileImageUrl, contactLinks }) => {
  const [activeHref, setActiveHref] = useState('#overview');
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileItems: DockItem[] = useMemo(() => [
    { href: '#overview', label: 'Início', icon: <HomeIcon /> },
    { href: '#experiencia', label: 'Carreira', icon: <BriefcaseIcon /> },
    { href: '#projetos', label: 'Projetos', icon: <ProjectsIcon /> },
    { href: '#formacao', label: 'Formação', icon: <EducationIcon /> },
    { href: '#contato', label: 'Contato', icon: <ContactIcon /> },
  ], []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
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
      {
        rootMargin: '-26% 0px -58% 0px',
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  const mobileActiveHref = useMemo(() => {
    if (activeHref === '#marketing') return '#projetos';
    if (mobileItems.some((item) => item.href === activeHref)) return activeHref;
    return '#overview';
  }, [activeHref, mobileItems]);

  return (
    <>
      <header className={`identity-header fixed inset-x-0 top-0 z-[110] ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="identity-header-inner container mx-auto px-4 sm:px-6">
          <a href="#overview" className="identity-brand" aria-label="Ir para o início do portfólio">
            L.BRYKCY<span>_PRODUCT</span>
          </a>

          <nav className="identity-desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeHref === link.href ? 'is-active' : ''}
                aria-current={activeHref === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="identity-header-actions">
            {contactLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.ariaLabel}
                className="identity-header-action"
              >
                {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4' })}
              </a>
            ))}
            <img className="identity-header-avatar" src={profileImageUrl} alt="" aria-hidden="true" />
          </div>
        </div>
      </header>

      <nav className="ios-liquid-dock" aria-label="Navegação principal no celular">
        <span className="ios-dock-surface" aria-hidden="true" />
        {mobileItems.map((item) => {
          const active = mobileActiveHref === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`ios-dock-tab ${active ? 'is-active' : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              <span className="ios-dock-lens" aria-hidden="true">
                <span className="ios-dock-lens-spectrum" />
                <span className="ios-dock-lens-highlight" />
              </span>
              <span className="ios-dock-content">
                {item.icon}
                <span className="ios-dock-label">{item.label}</span>
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
