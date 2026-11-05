import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
export const metadata:Metadata={title:'Research',description:'Source-led operational research for leaders designing specialist support roles.'};
const words=(post:(typeof researchPosts)[number])=>post.sections?post.sections.reduce((n,s)=>n+s.paragraphs.join(' ').split(/\s+/).filter(Boolean).length,0):0;
const readTime=(post:(typeof researchPosts)[number])=>`${Math.max(1,Math.round(words(post)/220))} min read`;
export default function ResearchPage(){return <main><header className="page-hero"><p className="eyebrow">Research library</p><h1>Evidence for better operating decisions.</h1><p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p></header><section className="content-wrap content-grid">{researchPosts.map((post)=><Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>{post.thumbnail&&<Image className="card-thumb" src={post.thumbnail} width={1200} height={675} alt={post.title}/>}<div className="card-body"><span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta">Published <time dateTime={post.publishedAt}>{post.publishedAt}</time> · {readTime(post)}</p><span className="text-link">Review the brief</span></div></Link>)}</section></main>}
