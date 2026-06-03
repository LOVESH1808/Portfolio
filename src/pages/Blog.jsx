import BlogCard from '../components/BlogCard/BlogCard';
import { posts } from '../data/posts';
import './Blog.css';

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-page__header">
        <p className="section-label">Writing</p>
        <h1 className="blog-page__title">Words &amp; ideas</h1>
        <p className="blog-page__sub">
          Thoughts on code, creativity, and learning in public.
          {' '}{posts.length} posts so far.
        </p>
      </div>

      <div className="blog-page__grid">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
