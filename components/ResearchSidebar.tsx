import Link from 'next/link';
import type { ArticleSection } from '@/lib/types';

export function ResearchSidebar({sections}:{sections:ArticleSection[]}){
  return <aside className="sidebar"><p className="eyebrow">Research brief</p><h3>Review the method and its limits.</h3>{sections.length>0&&<nav aria-label="Research sections">{sections.map((section)=><a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>{section.heading}</a>)}</nav>}<p>Measured findings remain separate from editorial interpretation and operating decisions.</p><Link id="cta-research-sidebar-schedulecall" className="button" href="/contact-us">Discuss the workflow</Link></aside>;
}
