import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { NavLink, ContactLink } from '../../types';
import './MobileLiquidTabBar.css';

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
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.7 10.5 12 3.8l8.3 6.7" />
    <path d="M5.8 9.4v10.1h12.4V9.4" />
    <path d="M9.6 19.5v-5.6h4.8v5.6" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="12" rx="3" />
    <path d="M8.5 7V5.7A1.7 1.7 0 0 1 10.2 4h3.6a1.7 1.7 0 0 1 1.7 1.7V7" />
    <path d="M3.4 11.4c2.5 1.6 5.4 2.4 8.6 2.4s6.1-.8 8.6-2.4" />
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
  </svg>
);

const EducationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-4.5L21 9l-9 4.5L3 9Z" />
    <path d="M6.3 10.7v4.7c2.9 2.3 8.5 2.3 11.4 0v-4.7" />
    <path d="M21 9v6" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4.5" width="18" height="15" rx="3" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ navLinks, profileImageUrl, contactLinks }) => {
  const [activeHref, setActiveHref] = useState('#overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lensX, setLensX] = useState(0);
  const [isLensAnimating, setIsLensAnimating] = useState(false);
  const scrollFrameRef = useRef<number | null>(null);
  const clickLockUntilRef = useRef(0);
  const reduceMotionRef = useRef(false);
  const navigationSequenceRef = useRef(0);
  const navigationCleanupRef = useRef<(() => void) | null>(null);
  const dockRef = useRef<HTMLElement | null>(null);
  const lensInitializedRef = useRef(false);
  const lensAnimationTimerRef = useRef<number | null>(null);

  const mobileItems: DockItem[] = useMemo(() => [
    { href: '#overview', label: 'Início', icon: <HomeIcon /> },
    { href: '#experiencia', label: 'Carreira', icon: <BriefcaseIcon /> },
    { href: '#projetos', label: 'Projetos', icon: <ProjectsIcon /> },
    { href: '#formacao', label: 'Formação', icon: <EducationIcon /> },
    { href: '#contato', label: 'Contato', icon: <ContactIcon /> },
  ], []);

  const mobileHrefForSection = useCallback((href: string) => {
    if (href === '#marketing') return '#projetos';
    if (mobileItems.some((item) => item.href === href)) return href;
    return '#overview';
  }, [mobileItems]);

  const mobileActiveHref = mobileHrefForSection(activeHref);
  const activeIndex = Math.max(0, mobileItems.findIndex((item) => item.href === mobileActiveHref));

  const calculateLensX = useCallback((index: number) => {
    const dock = dockRef.current;
    if (!dock) return 0;

    const railWidth = dock.getBoundingClientRect().width;
    const innerWidth = Math.max(0, railWidth - 8);
    const step = innerWidth / mobileItems.length;
    const lensMultiplier = window.innerWidth <= 370 ? 1.78 : 1.92;
    const lensWidth = step * lensMultiplier;
    const centered = index * step + (step - lensWidth) / 2;
    return Math.max(0, Math.min(centered, innerWidth - lensWidth));
  }, [mobileItems.length]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      reduceMotionRef.current = media.matches;
    };
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => () => {
    navigationCleanupRef.current?.();
    if (lensAnimationTimerRef.current !== null) window.clearTimeout(lensAnimationTimerRef.current);
  }, []);

  useLayoutEffect(() => {
    const nextX = calculateLensX(activeIndex);
    setLensX(nextX);

    if (!lensInitializedRef.current) {
      lensInitializedRef.current = true;
      return;
    }

    setIsLensAnimating(true);
    if (lensAnimationTimerRef.current !== null) window.clearTimeout(lensAnimationTimerRef.current);
    lensAnimationTimerRef.current = window.setTimeout(() => {
      setIsLensAnimating(false);
      lensAnimationTimerRef.current = null;
    }, reduceMotionRef.current ? 240 : 620);
  }, [activeIndex, calculateLensX]);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock || typeof ResizeObserver === 'undefined') return;

    let lastWidth = dock.getBoundingClientRect().width;
    const observer = new ResizeObserver(() => {
      const nextWidth = dock.getBoundingClientRect().width;
      if (Math.abs(nextWidth - lastWidth) < 0.5) return;
      lastWidth = nextWidth;
      setIsLensAnimating(false);
      setLensX(calculateLensX(activeIndex));
    });

    observer.observe(dock);
    return () => observer.disconnect();
  }, [activeIndex, calculateLensX]);

  useEffect(() => {
    const updateFromScroll = () => {
      scrollFrameRef.current = null;
      setIsScrolled(window.scrollY > 24);
      if (Date.now() < clickLockUntilRef.current) return;

      const anchorY = Math.min(window.innerHeight * 0.42, 360);
      const sections = navLinks
        .map((link) => ({ link, element: document.querySelector<HTMLElement>(link.href) }))
        .filter((item): item is { link: NavLink; element: HTMLElement } => Boolean(item.element));

      if (!sections.length) return;

      let current = sections[0];
      for (const item of sections) {
        const rect = item.element.getBoundingClientRect();
        if (rect.top <= anchorY) current = item;
        if (rect.top > anchorY) break;
      }

      const last = sections[sections.length - 1];
      const bodyPaddingBottom = Number.parseFloat(window.getComputedStyle(document.body).paddingBottom) || 0;
      const bottomTolerance = Math.max(18, bodyPaddingBottom + 24);
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - bottomTolerance) {
        current = last;
      }

      setActiveHref(current.link.href);
    };

    const onScroll = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [navLinks]);

  const navigateTo = useCallback((href: string) => {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    navigationCleanupRef.current?.();
    navigationSequenceRef.current += 1;
    const sequence = navigationSequenceRef.current;

    clickLockUntilRef.current = Number.POSITIVE_INFINITY;
    setActiveHref(href);
    window.history.replaceState(null, '', href);

    if (reduceMotionRef.current) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      clickLockUntilRef.current = 0;
      window.requestAnimationFrame(() => window.dispatchEvent(new Event('scroll')));
      return;
    }

    let fallbackTimer: number | null = null;

    const cleanup = () => {
      window.removeEventListener('scrollend', releaseLock);
      if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
      if (navigationCleanupRef.current === cleanup) navigationCleanupRef.current = null;
    };

    const releaseLock = () => {
      if (sequence !== navigationSequenceRef.current) return;
      cleanup();
      clickLockUntilRef.current = 0;
      window.requestAnimationFrame(() => window.dispatchEvent(new Event('scroll')));
    };

    navigationCleanupRef.current = cleanup;
    window.addEventListener('scrollend', releaseLock, { once: true });
    fallbackTimer = window.setTimeout(releaseLock, 5000);

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const dockStyle = {
    '--active-index': activeIndex,
  } as React.CSSProperties;

  const lensStyle: React.CSSProperties = {
    left: `calc(4px + ${lensX}px)`,
    transform: 'none',
  };

  return (
    <>
      <header className={`identity-header fixed inset-x-0 top-0 z-[110] ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="identity-header-inner container mx-auto px-4 sm:px-6">
          <a
            href="#overview"
            className="identity-brand"
            aria-label="Ir para o início do portfólio"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('#overview');
            }}
          >
            L.BRYKCY<span>_PRODUCT</span>
          </a>

          <nav className="identity-desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeHref === link.href ? 'is-active' : ''}
                aria-current={activeHref === link.href ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(link.href);
                }}
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

      <nav ref={dockRef} className={`mobile-glass-tabbar ${isLensAnimating ? 'is-animating' : ''}`} style={dockStyle} aria-label="Navegação principal no celular">
        <span className="mobile-glass-tabbar__surface" aria-hidden="true" />
        <span className="mobile-glass-tabbar__lens" style={lensStyle} aria-hidden="true" />
        <div className="mobile-glass-tabbar__tabs">
          {mobileItems.map((item, index) => {
            const selected = activeIndex === index;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={selected ? 'page' : undefined}
                aria-label={item.label}
                className={`mobile-glass-tabbar__tab ${selected ? 'is-active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.href);
                }}
              >
                <span className="mobile-glass-tabbar__content">
                  {item.icon}
                  <span className="mobile-glass-tabbar__label">{item.label}</span>
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
