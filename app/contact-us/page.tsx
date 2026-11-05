import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Business Development Staffing Consultation',
  description: 'Talk with Business Development Rep about market research, account mapping, partnership research, outreach operations, CRM support, and meeting coordination.',
  alternates: { canonical: '/contact-us' }
};

const steps = [
  ['Workflow discovery', 'Map research, account mapping, approved outreach, CRM updates, meeting coordination, handoffs, and sensitive responses.'],
  ['Role design', 'Define focused responsibilities with clear sources, messages, access, decision rights, and escalation points.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit your market, systems, research standards, and communication needs.'],
  ['Controlled launch', 'Begin with approved segments, documented messages, measured handoffs, sampled quality, and accountable growth leadership.']
];
const faqs = [
  ['What business development work can a remote specialist support?', 'A specialist can research approved markets, map accounts and stakeholders, prepare partnership context, maintain outreach queues, update authorized CRM fields, and coordinate meetings.'],
  ['Can a specialist negotiate or commit the company?', 'No. Strategy, pricing, commercial terms, legal representations, contracts, partnership commitments, regulated communications, and final relationship decisions stay with authorized leaders.'],
  ['How do you handle outreach and customer data?', 'The role should use approved sources, messages, channels, consent rules, suppression lists, access controls, and escalation paths defined by your organization and applicable law.'],
  ['How should we prepare for the consultation?', 'Bring target segments, recurring workflows, approved channels, current ownership, systems, service standards, and examples without confidential prospect or customer data.']
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Business development staffing consultation.', breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `https://${site.domain}/contact-us` }] } };
  return <main className="contact-page">
    <section className="contact-intake"><div className="contact-container intake-grid">
      <div className="intake-copy"><p className="eyebrow">Business development staffing consultation</p><h1>Build a clearer path to the next valuable conversation.</h1><p className="intake-lede">Bring the recurring opportunity work slowing your growth team. We will help separate delegable research, preparation, coordination, and record upkeep from strategy, negotiation, pricing, and relationship decisions.</p><div className="reassurance-list" aria-label="Consultation reassurances"><span>Business email required</span><span>No credentials or confidential lists</span><span>Human decisions stay with your leaders</span></div><div className="proof-note"><strong>What to expect</strong><p>A practical review of your workflow, source and access boundaries, candidate matching needs, and a controlled launch path.</p></div></div>
      <div className="contact-form-card"><h2>Book a free consultation</h2><p>Share enough to prepare a useful staffing conversation. Do not include sensitive prospect, customer, credential, or deal information.</p><LeadForm source="contact-page-consultation" /></div>
    </div></section>
    <section className="contact-section credibility"><div className="contact-container credibility-grid"><div className="credibility-image"><Image src={site.heroImage} alt="Opportunity signals organized into a reviewed business development workflow" fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div><p className="eyebrow">Powered by Stealth Agents</p><h2>Specialist growth support with clear operating boundaries.</h2><p>Stealth Agents helps businesses add carefully matched remote professionals around documented workflows, clear ownership, accountable handoffs, and practical quality review. That operating discipline supports consistent capacity while strategy, commercial authority, and key relationships stay with your leaders.</p><p><strong>{site.name} is a subsidiary of Stealth Agents.</strong></p><Link className="button primary" href="#consultation-calendar">Choose a consultation time</Link></div></div></section>
    <section className="contact-section process"><div className="contact-container process-layout"><div><p className="eyebrow">A controlled path forward</p><h2>From bottleneck to reviewable role.</h2></div><ol>{steps.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}</ol></div></section>
    <section className="contact-section boundary-band"><div className="contact-container boundary-layout"><div><p className="eyebrow">Preparation before the call</p><h2>Bring the workflow, not sensitive data.</h2></div><div className="prep-list"><p><strong>Recurring work:</strong> group research, account mapping, outreach, CRM, meeting, reporting, and follow-through workflows.</p><p><strong>Current ownership:</strong> identify who researches, drafts, reviews, approves, negotiates, decides, and escalates today.</p><p><strong>Systems and access:</strong> list approved tools and data classes without sharing credentials.</p><p><strong>Service standard:</strong> define timely, accurate, documented, secure, and reviewable completion.</p></div></div></section>
    <section id="consultation-calendar" className="contact-section booking"><div className="contact-container booking-copy"><p className="eyebrow">Choose a time directly</p><h2>Book the conversation now.</h2><p>Choose a time to discuss markets, opportunity workflows, systems, owners, outreach controls, and staffing priorities.</p><iframe className="booking-frame" title="Book a business development staffing consultation" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy" /></div></section>
    <section className="contact-section common-starts"><div className="contact-container"><div className="section-heading"><p className="eyebrow">Explore focused support</p><h2>Common starting points.</h2></div><div className="path-list"><Link href="/services/market-research"><h3>Market research support</h3><p>Prepare focused market context from approved sources.</p></Link><Link href="/services/account-mapping"><h3>Account mapping</h3><p>Organize target organizations, stakeholders, and known relationships.</p></Link><Link href="/services/partnership-research"><h3>Partnership research</h3><p>Prepare context for relevant partner conversations.</p></Link><Link href="/services/outreach-operations"><h3>Outreach operations support</h3><p>Maintain approved queues, drafts, and response routing.</p></Link></div><Link className="text-link all-services" href="/services">View the full services collection</Link></div></section>
    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Business development staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
