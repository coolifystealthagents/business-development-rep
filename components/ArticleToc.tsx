export type TocItem = { id: string; label: string };

export const headingId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function TocLinks({ items }: { items: TocItem[] }) {
  return <ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ol>;
}

export function MobileToc({ items }: { items: TocItem[] }) {
  return <details className="mobile-toc"><summary>On this page <span>{items.length} sections</span></summary><nav aria-label="Table of contents"><TocLinks items={items} /></nav></details>;
}

export function DesktopToc({ items }: { items: TocItem[] }) {
  return <nav className="desktop-toc" aria-label="Table of contents"><strong>On this page</strong><TocLinks items={items} /></nav>;
}
