'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TasteMotion() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const groups = gsap.utils.toArray<HTMLElement>('.section-heading, .service-row, .article-card, .content-card, .process li, .path-list > a');
      groups.forEach((element) => gsap.fromTo(element, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: .65, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }));
      gsap.utils.toArray<HTMLElement>('.editorial-hero > img').forEach((image) => gsap.fromTo(image, { scale: 1.02 }, { scale: 1.09, ease: 'none', scrollTrigger: { trigger: image.parentElement, start: 'top top+=68', end: 'bottom top+=68', scrub: .8 } }));
      gsap.fromTo('.signal-node', { autoAlpha: 0, scale: .88 }, { autoAlpha: 1, scale: 1, duration: .55, stagger: .12, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.signal-map', start: 'top 75%', once: true } });
    });
    return () => media.revert();
  }, [pathname]);
  return null;
}
