import Link from 'next/link';
import type { ArticleSection } from '@/lib/types';

export function ResearchSidebar({sections}:{sections:ArticleSection[]}){
  return <aside className="sidebar"><p className="eyebrow">Research brief</p><h3>Review the method and its limits.</h3><p>Measured findings remain separate from editorial interpretation and operating decisions.</p><Link id="cta-research-sidebar-schedulecall" className="button" href="/contact-us">Discuss the workflow</Link></aside>;
}
