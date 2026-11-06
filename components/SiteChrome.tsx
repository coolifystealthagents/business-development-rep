'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';
import { LeadForm } from './LeadForm';
import { ArrowIcon } from './Icons';

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', closeOnEscape); };
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={36} height={36} /><span>{site.name}</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}><span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true" /></button>
      <nav id="primary-navigation" aria-label="Primary navigation" data-open={open}>{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link className="mobile-nav-cta" href="/contact-us">Book a free call <ArrowIcon /></Link></nav>
      <Link id="cta-global-header-bookcall" className="button compact header-cta" href="/contact-us">Book a free call <ArrowIcon /></Link>
    </header>
  </>;
}
export function Footer() {
  return <footer><div><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Specialist remote staff for {site.audience}.</p></div><div className="footer-links">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><p className="copyright">© {new Date().getFullYear()} {site.name}</p></footer>;
}
export function TimedLeadModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (sessionStorage.getItem('lead-modal-seen')) return; const timer = window.setTimeout(() => { sessionStorage.setItem('lead-modal-seen', 'true'); setOpen(true); }, 8000); return () => clearTimeout(timer); }, []);
  useEffect(() => { const key = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false); window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, []);
  if (!open) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setOpen(false)} aria-label="Close form">×</button><p className="eyebrow">A calmer next step</p><h2 id="modal-title">Tell us what is taking too much of your day.</h2><p>We will help you map the right support role in a free consultation.</p><LeadForm source="timed-modal" /></section></div>;
}
