import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import BlogCard from "../components/BlogCard/BlogCard";
import ArtThumb from "../components/ArtThumb/ArtThumb";
import { projects } from "../data/projects";
import { posts } from "../data/posts";
import { artworks } from "../data/artworks";
import "./Home.css";

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  const featuredArt = artworks.slice(0, 4);

  return (
    <div className="home">
      <Hero />

      {/* Projects */}
      <section className="home__section">
        <div className="home__section-header">
          <p className="section-label">Projects / Work</p>
          <Link to="/work" className="home__see-all">
            See all →
          </Link>
        </div>
        <div className="home__projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Blog + Art split */}
      <section className="home__split">
        <div className="home__split-blog">
          <div className="home__section-header">
            <p className="section-label">Recent writing</p>
            <Link to="/blog" className="home__see-all">
              View all →
            </Link>
          </div>
          <div className="home__blog-list">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </div>

        <div className="home__split-art">
          <div className="home__section-header">
            <p className="section-label">Art gallery</p>
            <Link to="/gallery" className="home__see-all">
              View all →
            </Link>
          </div>
          <div className="home__art-grid">
            {featuredArt.map((art) => (
              <ArtThumb key={art.id} artwork={art} size="small" />
            ))}
          </div>
          <Link to="/gallery" className="home__art-more">
            See all 24 pieces →
          </Link>
        </div>
      </section>

      {/* CTA bar */}
      <section className="home__cta glass">
        <div className="home__cta-text">
          <h2 className="home__cta-heading">Let's build something together</h2>
          <p className="home__cta-sub">
            Open to internship opportunities &amp; collabs
          </p>
        </div>
        <div className="home__cta-socials">
          {["GH", "in", "𝕏"].map((s) => (
            <span key={s} className="home__cta-social">
              {s}
            </span>
          ))}
        </div>
        <Link to="/contact" className="btn-primary">
          Get in touch ↗
        </Link>
      </section>
    </div>
  );
}
