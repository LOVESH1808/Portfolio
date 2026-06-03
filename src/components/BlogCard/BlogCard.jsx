// BlogCard.jsx
import { Link } from 'react-router-dom';
import './BlogCard.css';

const ICONS = {
  'Deep dive': (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 4h10M2 7h7M2 10h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  'Tutorial': (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 3l4 4-4 4M8 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Journal': (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2.5" y="1.5" width="9" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 5h4M5 7.5h2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
};

export default function BlogCard({ post, variant = 'default' }) {
  const { id, tag, title, excerpt, readTime, date } = post;

  if (variant === 'compact') {
    return (
      <Link to={`/blog/${id}`} className="blog-card-compact">
        <span className="blog-card-compact__icon">
          {ICONS[tag] ?? ICONS['Journal']}
        </span>
        <span className="blog-card-compact__title">{title}</span>
        <span className="blog-card-compact__meta">{readTime} · {date}</span>
        <svg className="blog-card-compact__arrow" width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${id}`} className="blog-card glass glass-hover">
      <span className="blog-card__tag tag">{tag}</span>
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__excerpt">{excerpt}</p>
      <div className="blog-card__footer">
        <span className="blog-card__meta">
          <span className="blog-card__dot" />
          {readTime}
        </span>
        <span className="blog-card__meta">{date}</span>
        <span className="blog-card__read-more">
          Read post
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}