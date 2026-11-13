import type { Metadata } from 'next';
import Script from 'next/script';
import {SiteHeader as Header,SiteFooter as Footer} from './experience';
import { site } from '@/lib/site';
import './globals.css';
import './experience.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Specialist remote staff`, template: `%s | ${site.name}` },
  description: site.heroBody,
  applicationName: site.name,
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }], shortcut: '/icon.svg' },
  openGraph: { type: 'website', siteName: site.name, title: site.name, description: site.heroBody, images: [{ url: '/refresh-20261113/home.webp', width: 1672, height: 941, alt: site.heroAlt }] },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}><Header /><div tabIndex={-1}>{children}</div><Footer /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
  <Script
    id="databull-analytics"
    src="https://databull.stealthagents.us/js/script.js"
    data-website-id="dc_3vnzywzgtnq458"
    data-domain="businessdevelopmentrep.com"
    strategy="afterInteractive"
  /></body></html>;
}
