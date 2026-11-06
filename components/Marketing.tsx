import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, BoundaryIcon, CheckIcon, HandoffIcon, ReviewIcon, SparkIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;

function ServiceCards() { return <div className="service-directory">{site.services.map((service) => <Link className="service-row" href={`/services/${service.slug}`} key={service.slug}><div><h3>{service.name}</h3><p>{service.short}</p></div><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>; }
function Principles() { return <div className="principles">{site.principles.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }
function HeroSignalBar() { const signals = ['Research approved markets', 'Map decision makers', 'Prepare partner context', 'Maintain CRM records', 'Coordinate next steps']; return <div className="hero-signal-bar" aria-label="Business development support workflow"><div className="hero-signal-track">{signals.map((signal) => <span key={signal}>{signal}</span>)}<div className="hero-signal-copy" aria-hidden="true">{signals.map((signal) => <span key={`duplicate-${signal}`}>{signal}</span>)}</div></div></div>; }

export function HomePage() {
  const design = site.design;
  return <main className={`home design-${design}`}>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div>
      <div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div>
      <HeroSignalBar />
    </section>
    {design === 'conversation' && <section className="conversation-band"><div className="bubble one">Clear replies</div><div className="bubble two">Useful context</div><div className="bubble three">Thoughtful escalation</div></section>}
    <section className="section intro"><p className="eyebrow">Specialist support, shaped around your work</p><div><h2>Build capacity without lowering the bar.</h2><p>{site.manifesto} Your assistant works from documented priorities, clear decision rights, and a practical review rhythm.</p></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose the support your team can actually use.</h2><p>Start with the bottleneck, not a generic job description. Each role has a distinct operating purpose and a direct path to its full scope.</p></div><ServiceCards /></section>
    <section className="section method"><div className="signal-map" aria-label="A reviewed business development workflow"><span className="signal-orbit orbit-one"/><span className="signal-orbit orbit-two"/><div className="signal-node signal-source"><strong>Source</strong><small>Approved inputs</small></div><div className="signal-node signal-prepare"><strong>Prepare</strong><small>Relevant context</small></div><div className="signal-node signal-review"><strong>Review</strong><small>Human judgment</small></div><div className="signal-node signal-conversation"><strong>Connect</strong><small>Authorized outreach</small></div></div><div><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with recurring opportunity work that already has an owner, a standard, and a clear escalation path. Then create a small review loop that makes the handoff stronger over time.</p><ol className="method-steps"><li><BoundaryIcon /><span><strong>Define the boundary.</strong> Separate preparation and coordination from strategic or commercial judgment.</span></li><li><HandoffIcon /><span><strong>Document the handoff.</strong> Set inputs, output format, review points, and exception rules.</span></li><li><ReviewIcon /><span><strong>Improve with evidence.</strong> Review a focused sample and update the process when patterns emerge.</span></li></ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div></section>
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for better delegation.</h2></div><Latest /></section>
    <section className="closing"><p className="eyebrow">Make room for the work only you can do</p><h2>Let us map your first specialist support role.</h2><p>A focused conversation can turn scattered tasks into a clear, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></section>
  </main>;
}
