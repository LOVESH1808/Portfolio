import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import './BlogPost.css';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = posts.indexOf(post);
  const prev = posts[currentIndex - 1] ?? null;
  const next = posts[currentIndex + 1] ?? null;

  return (
    <div className="blog-post">
      {/* Back */}
      <Link to="/blog" className="blog-post__back btn-ghost">
        ← All posts
      </Link>

      <article className="blog-post__article glass">
        {/* Header */}
        <header className="blog-post__header">
          <span className="blog-post__tag tag">{post.tag}</span>
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            <span>{post.readTime}</span>
            <span className="blog-post__meta-sep">·</span>
            <span>{post.date}</span>
          </div>
        </header>

        <hr className="divider" />

        {/* Body */}
        <div className="blog-post__body">
          {post.body.map((block, i) => {
            if (block.type === 'h3') return <h3 key={i} className="blog-post__h3">{block.text}</h3>;
            if (block.type === 'p')  return <p  key={i} className="blog-post__p">{block.text}</p>;
            return null;
          })}
        </div>
      </article>

      {/* Prev / Next */}
      <nav className="blog-post__nav">
        {prev ? (
          <Link to={`/blog/${prev.id}`} className="blog-post__nav-item blog-post__nav-item--prev glass glass-hover">
            <span className="blog-post__nav-dir">← Previous</span>
            <span className="blog-post__nav-title">{prev.title}</span>
          </Link>
        ) : <div />}

        {next && (
          <Link to={`/blog/${next.id}`} className="blog-post__nav-item blog-post__nav-item--next glass glass-hover">
            <span className="blog-post__nav-dir">Next →</span>
            <span className="blog-post__nav-title">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
