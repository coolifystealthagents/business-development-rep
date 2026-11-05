'use client';

import { useEffect } from 'react';

export default function TocSync() {
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>('.prose section[id] > h2, .prose h2[id]')).map((el) => ({ id: el.id || el.parentElement?.id || '', el })).filter((item) => item.id);
    if (!headings.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = 112;
      let current = headings[0].id;
      for (const heading of headings) { if (heading.el.getBoundingClientRect().top - offset <= 0) current = heading.id; else break; }
      document.querySelectorAll<HTMLAnchorElement>('.desktop-toc a, .mobile-toc a').forEach((link) => {
        if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    const onScroll = () => { if (frame) return; frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
