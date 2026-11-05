import Link from 'next/link';
import { DesktopToc, type TocItem } from './ArticleToc';

export function ResearchSidebar({items}:{items:TocItem[]}){
  return <aside className="sidebar"><DesktopToc items={items}/><div className="sidebar-cta"><p className="eyebrow">Research brief</p><h3>Review the method and its limits.</h3><p>Measured findings remain separate from editorial interpretation and operating decisions.</p><Link id="cta-research-sidebar-schedulecall" className="button" href="/contact-us">Discuss the workflow</Link></div></aside>;
}
