'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type DirectoryPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  thumbnail?: string;
};

const allCategory = 'All';

export function BlogDirectory({ posts }: { posts: DirectoryPost[] }) {
  const categories = useMemo(() => [allCategory, ...Array.from(new Set(posts.map((post) => post.category)))], [posts]);
  const [activeCategory, setActiveCategory] = useState(allCategory);

  useEffect(() => {
    const syncFromUrl = () => {
      const requested = new URL(window.location.href).searchParams.get('category');
      setActiveCategory(requested && categories.includes(requested) ? requested : allCategory);
    };
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [categories]);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    const url = new URL(window.location.href);
    if (category === allCategory) url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const visiblePosts = activeCategory === allCategory ? posts : posts.filter((post) => post.category === activeCategory);

  return <>
    <div className="editorial-filters" role="toolbar" aria-label="Filter articles by category">
      {categories.map((category) => {
        const count = category === allCategory ? posts.length : posts.filter((post) => post.category === category).length;
        return <button className="category-filter" type="button" key={category} aria-pressed={activeCategory === category} onClick={() => selectCategory(category)}>{category} <span>({count})</span></button>;
      })}
    </div>
    <p className="filter-status" role="status" aria-live="polite">Showing {visiblePosts.length} {activeCategory === allCategory ? 'articles' : `${activeCategory} articles`}.</p>
    {visiblePosts.length > 0 ? <div className="article-grid">
      {visiblePosts.map((post, index) => {
        const image = post.thumbnail || '/images/blog-outreach-planning-hero.png';
        const alt = post.thumbnail ? `Editorial illustration for ${post.title}` : 'Business development team planning a reviewed outreach workflow';
        return <Link className="article-card" href={`/blog/${post.slug}`} key={`${post.slug}-${post.publishedAt}-${index}`}>
          <Image className="card-thumb" src={image} width={1200} height={675} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" alt={alt} />
          <div className="card-body"><span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta">Published <time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readTime}</p><span className="text-link">Read article</span></div>
        </Link>;
      })}
    </div> : <div className="empty-state"><h2>No published articles in this category yet.</h2><p>Choose another category or return to All.</p></div>}
  </>;
}
