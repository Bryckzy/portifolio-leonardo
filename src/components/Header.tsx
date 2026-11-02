import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.7 10.5 12 3.8l8.3 6.7" />
    <path d="M5.8 9.4v10.1h12.4V9.4" />
    <path d="M9.6 19.5v-5.6h4.8v5.6" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="12" rx="3" />
    <path d="M8.5 7V5.7A1.7 1.7 0 0 1 10.2 4h3.6a1.7 1.7 0 0 1 1.7 1.7V7" />
    <path d="M3.4 11.4c2.5 1.6 5.4 2.4 8.6 2.4s6.1-.8 8.6-2.4" />
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-glass-tabbar__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4.5" width="18" height="15" rx="3" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ navLinks, profileImageUrl, contactLinks }) => {
  const [activeHref, setActiveHref] = useState('#overview');
  const [isScrolled, setIsScrolled] = useState(false);

  const dockRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const lensInnerRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const clickLockUntilRef = useRef(0);
  const activeIndexRef = useRef(0);
  const reduceMotionRef = useRef(false);
  const springRef = useRef({ x: 0, v: 0, target: 0, last: 0, ready: false });

  const mobileItems: DockItem[] = useMemo(() => [
    { href: '#overview', label: 'Início', icon: <HomeIcon /> },
    { href: '#experiencia', label: 'Carreira', icon: <BriefcaseIcon /> },
    { href: '#projetos', label: 'Projetos', icon: <ProjectsIcon /> },
    { href: '#contato', label: 'Contato', icon: <ContactIcon /> },
  ], []);

  const mobileHrefForSection = useCallback((href: string) => {
    if (href === '#experiencia' || href === '#formacao') return '#experiencia';
    if (href === '#marketing' || href === '#projetos') return '#projetos';
    if (href === '#contato') return '#contato';
    return '#overview';
  }, []);

  const mobileActiveHref = mobileHrefForSection(activeHref);
  const activeIndex = Math.max(0, mobileItems.findIndex((item) => item.href === mobileActiveHref));
  activeIndexRef.current = activeIndex;

  const getLiveTabs = useCallback(() => {
    if (!tabsRef.current) return [] as HTMLElement[];
    return Array.from(tabsRef.current.querySelectorAll<HTMLElement>('[data-live-tab]'));
  }, []);

  const centerOf = useCallback((index: number) => {
    const tabs = getLiveTabs();
    const tab = tabs[index];
    return tab ? tab.offsetLeft + tab.offsetWidth / 2 : 0;
  }, [getLiveTabs]);

  const syncSpringTarget = useCallback((index: number, snap = false) => {
    const next = centerOf(index);
    if (!next) return;
    const spring = springRef.current;
    spring.target = next;
    if (snap || !spring.ready || reduceMotionRef.current) {
      spring.x = next;
      spring.v = 0;
      spring.ready = true;
    }
  }, [centerOf]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      reduceMotionRef.current = media.matches;
      if (media.matches) syncSpringTarget(activeIndexRef.current, true);
    };
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, [syncSpringTarget]);

  useEffect(() => {
    const updateFromScroll = () => {
      scrollFrameRef.current = null;
      setIsScrolled(window.scrollY > 24);
      if (Date.now() < clickLockUntilRef.current) return;

      const anchorY = Math.min(window.innerHeight * 0.38, 340);
      const sections = navLinks
        .map((link) => ({ link, element: document.querySelector<HTMLElement>(link.href) }))
        .filter((item): item is { link: NavLink; element: HTMLElement } => Boolean(item.element));

      if (!sections.length) return;

      let current = sections[0];
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const item of sections) {
        const rect = item.element.getBoundingClientRect();
        if (rect.top <= anchorY && rect.bottom > anchorY) {
          current = item;
          nearestDistance = 0;
          break;
        }
        const distance = Math.min(Math.abs(rect.top - anchorY), Math.abs(rect.bottom - anchorY));
        if (distance < nearestDistance) {
          nearestDistance = distance;
          current = item;
        }
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

  useEffect(() => {
    syncSpringTarget(activeIndex, !springRef.current.ready);
  }, [activeIndex, syncSpringTarget]);

  useEffect(() => {
    const dock = dockRef.current;
    const lens = lensRef.current;
    const lensInner = lensInnerRef.current;
    if (!dock || !lens || !lensInner) return;

    const MAGNIFICATION = 1.34;
    const STIFFNESS = 380;
    const DAMPING = 26;

    const paint = () => {
      const tabs = getLiveTabs();
      const activeTab = tabs[activeIndexRef.current];
      if (!activeTab) return;

      const spring = springRef.current;
      const width = dock.clientWidth;
      const height = dock.clientHeight;
      const speed = Math.abs(spring.v);
      const baseWidth = Math.max(74, activeTab.offsetWidth - 5);
      const lensWidth = baseWidth + Math.min(54, speed / 14);
      const lensHeight = 58 - Math.min(7, speed / 120);
      const x = Math.max(lensWidth / 2 + 4, Math.min(width - lensWidth / 2 - 4, spring.x));
      const y = height / 2;
      const left = x - lensWidth / 2;
      const top = y - lensHeight / 2;

      lens.style.width = `${lensWidth}px`;
      lens.style.height = `${lensHeight}px`;
      lens.style.borderRadius = `${Math.min(lensWidth, lensHeight) / 2}px`;
      lens.style.transform = `translate3d(${left}px, ${top}px, 0)`;
      lens.style.setProperty('--lens-speed', `${Math.min(1, speed / 900)}`);

      lensInner.style.width = `${width}px`;
      lensInner.style.height = `${height}px`;
      lensInner.style.transform = `translate3d(${-left + x - MAGNIFICATION * x}px, ${-top + y - MAGNIFICATION * y}px, 0) scale(${MAGNIFICATION})`;
    };

    let animationFrame = 0;
    const frame = (now: number) => {
      const spring = springRef.current;
      if (!spring.last) spring.last = now;
      const dt = Math.min(0.032, (now - spring.last) / 1000);
      spring.last = now;

      if (reduceMotionRef.current) {
        spring.x = spring.target;
        spring.v = 0;
      } else {
        const acceleration = -STIFFNESS * (spring.x - spring.target) - DAMPING * spring.v;
        spring.v += acceleration * dt;
        spring.x += spring.v * dt;
      }

      paint();
      animationFrame = window.requestAnimationFrame(frame);
    };

    const resizeObserver = new ResizeObserver(() => {
      syncSpringTarget(activeIndexRef.current, true);
      paint();
    });
    resizeObserver.observe(dock);

    syncSpringTarget(activeIndexRef.current, true);
    animationFrame = window.requestAnimationFrame(frame);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [getLiveTabs, syncSpringTarget]);

  const navigateTo = useCallback((href: string, index?: number) => {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    clickLockUntilRef.current = Date.now() + 900;
    setActiveHref(href);
    if (typeof index === 'number') syncSpringTarget(index);

    target.scrollIntoView({
      behavior: reduceMotionRef.current ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', href);

    window.setTimeout(() => {
      clickLockUntilRef.current = 0;
    }, 950);
  }, [syncSpringTarget]);

  const handleDockKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (activeIndexRef.current + direction + mobileItems.length) % mobileItems.length;
    const nextItem = mobileItems[nextIndex];
    navigateTo(nextItem.href, nextIndex);
    getLiveTabs()[nextIndex]?.focus();
  };

  const renderDockTab = (item: DockItem, index: number, copy = false) => {
    const selected = activeIndex === index;
    if (copy) {
      return (
        <span key={`copy-${item.href}`} className="mobile-glass-tabbar__tab mobile-glass-tabbar__tab--copy" aria-hidden="true">
          <span className="mobile-glass-tabbar__content">
            {item.icon}
            <span className="mobile-glass-tabbar__label">{item.label}</span>
          </span>
        </span>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        data-live-tab
        role="tab"
        aria-selected={selected}
        aria-current={selected ? 'page' : undefined}
        tabIndex={selected ? 0 : -1}
        className={`mobile-glass-tabbar__tab ${selected ? 'is-active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          navigateTo(item.href, index);
        }}
      >
        <span className="mobile-glass-tabbar__content">
          {item.icon}
          <span className="mobile-glass-tabbar__label">{item.label}</span>
        </span>
      </a>
    );
  };

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

      <nav ref={dockRef} className="mobile-glass-tabbar" aria-label="Navegação principal no celular">
        <span className="mobile-glass-tabbar__surface" aria-hidden="true" />

        <div ref={tabsRef} className="mobile-glass-tabbar__tabs" role="tablist" onKeyDown={handleDockKeyDown}>
          {mobileItems.map((item, index) => renderDockTab(item, index))}
        </div>

        <div ref={lensRef} className="mobile-glass-tabbar__lens" aria-hidden="true">
          <span className="mobile-glass-tabbar__lens-rim" />
          <span className="mobile-glass-tabbar__lens-highlight" />
          <div ref={lensInnerRef} className="mobile-glass-tabbar__lens-inner">
            <div className="mobile-glass-tabbar__tabs mobile-glass-tabbar__tabs--copy">
              {mobileItems.map((item, index) => renderDockTab(item, index, true))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
