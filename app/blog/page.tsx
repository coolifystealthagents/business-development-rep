import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts } from '@/lib/content';
import { BlogDirectory } from '@/components/BlogDirectory';
export const metadata:Metadata={title:'Blog',description:'Practical guides for designing, delegating, and reviewing specialist remote support.'};
export default function BlogPage(){return <main className="editorial-index"><header className="editorial-hero blog-hero"><Image src="/images/blog-outreach-planning-hero.png" alt="Business development team planning practical prospecting and outreach around a shared table" fill priority sizes="100vw"/><div className="editorial-hero-shade"/><div className="editorial-hero-copy"><p className="eyebrow">Practical field notes</p><h1>Clearer roles. Better handoffs.</h1><p>Guides for owners and managers who want to delegate recurring work without losing visibility or control.</p></div></header><section className="content-wrap"><BlogDirectory posts={blogPosts}/></section></main>}
