import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero glass">
      <div className="hero__text">
        <span className="hero__tag tag">✦ Software Engineer Intern</span>
        <h1 className="hero__name">
          Hey, I'm
          <br />
          <span className="hero__name-highlight">Your Name</span> 👋
        </h1>
        <p className="hero__bio">
          I build things, write about ideas, and make art when the mood strikes.
          Exploring the intersection of code and creativity.
        </p>
        <div className="hero__actions">
          <Link to="/gallery" className="btn-primary">
            See my work
          </Link>
          <Link to="/contact" className="btn-ghost">
            Say hello
          </Link>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">12+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">8</span>
            <span className="hero__stat-label">Blog posts</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">24</span>
            <span className="hero__stat-label">Art pieces</span>
          </div>
        </div>
      </div>

      <div className="hero__avatar" aria-hidden="true">
        <div className="hero__avatar-ring" />
        <div className="hero__avatar-inner">
          <span className="hero__avatar-emoji">🧑‍💻</span>
        </div>
      </div>
    </section>
  );
}
