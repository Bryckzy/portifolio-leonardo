import React, { useLayoutEffect } from 'react';

const MOBILE_MAX = 767;
const MAX_DOCK_WIDTH = 408;
const SIDE_GAP = 12;
const MIN_BOTTOM_GAP = 12;

const readSafeAreaBottom = () => {
  const probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;padding-bottom:env(safe-area-inset-bottom);';
  document.body.appendChild(probe);
  const value = Number.parseFloat(getComputedStyle(probe).paddingBottom) || 0;
  probe.remove();
  return value;
};

const MobileViewportDockRuntime: React.FC = () => {
  useLayoutEffect(() => {
    let frame = 0;
    let safeBottom = 0;
    let dock: HTMLElement | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const findDock = () => document.querySelector<HTMLElement>('.mobile-glass-tabbar');

    const sync = () => {
      frame = 0;
      dock ??= findDock();
      if (!dock) return;

      if (window.innerWidth > MOBILE_MAX) {
        dock.style.removeProperty('left');
        dock.style.removeProperty('top');
        dock.style.removeProperty('width');
        return;
      }

      const viewport = window.visualViewport;
      const viewportWidth = viewport?.width ?? window.innerWidth;
      const viewportHeight = viewport?.height ?? window.innerHeight;
      const viewportOffsetLeft = viewport?.offsetLeft ?? 0;
      const viewportOffsetTop = viewport?.offsetTop ?? 0;
      const railWidth = Math.min(MAX_DOCK_WIDTH, Math.max(0, viewportWidth - SIDE_GAP * 2));
      const railHeight = dock.getBoundingClientRect().height || 64;
      const bottomGap = Math.max(MIN_BOTTOM_GAP, safeBottom);

      const left = window.scrollX + viewportOffsetLeft + Math.max(SIDE_GAP, (viewportWidth - railWidth) / 2);
      const top = window.scrollY + viewportOffsetTop + viewportHeight - railHeight - bottomGap;

      dock.style.left = `${Math.round(left * 100) / 100}px`;
      dock.style.top = `${Math.round(top * 100) / 100}px`;
      dock.style.width = `${Math.round(railWidth * 100) / 100}px`;
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    const bindDock = () => {
      dock = findDock();
      if (!dock) return false;
      safeBottom = readSafeAreaBottom();
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(schedule);
        resizeObserver.observe(dock);
      }
      sync();
      return true;
    };

    const onResize = () => {
      safeBottom = readSafeAreaBottom();
      schedule();
    };

    if (!bindDock()) {
      const observer = new MutationObserver(() => {
        if (bindDock()) observer.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
      window.setTimeout(() => observer.disconnect(), 3000);
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });
    window.visualViewport?.addEventListener('scroll', schedule, { passive: true });
    window.visualViewport?.addEventListener('resize', onResize, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      window.visualViewport?.removeEventListener('scroll', schedule);
      window.visualViewport?.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
};

export default MobileViewportDockRuntime;
