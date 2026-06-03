import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projects, experience } from '../data/projects';
import './Work.css';

export default function Work() {
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  return (
    <div className="work-page">
      <div className="work-page__header">
        <p className="section-label">Projects / Work</p>
        <h1 className="work-page__title">Things I've built</h1>
        <p className="work-page__sub">
          A mix of full-stack apps, machine learning experiments, and creative
          coding projects. Each one taught me something different.
        </p>
      </div>

      {/* Experience timeline */}
      <section className="work-page__section">
        <p className="work-page__section-label">Experience</p>
        <div className="work-page__timeline">
          {experience.map((exp, i) => (
            <div key={exp.id} className="work-page__exp glass glass-hover">
              <div className="work-page__exp-left">
                <div className="work-page__exp-dot" />
                {i < experience.length - 1 && (
                  <div className="work-page__exp-line" />
                )}
              </div>
              <div className="work-page__exp-body">
                <div className="work-page__exp-top">
                  <div>
                    <h3 className="work-page__exp-role">{exp.role}</h3>
                    <span className="work-page__exp-company">{exp.company}</span>
                  </div>
                  <div className="work-page__exp-meta">
                    <span className="work-page__exp-duration tag">{exp.duration}</span>
                    <span className="work-page__exp-location">{exp.location}</span>
                  </div>
                </div>
                <p className="work-page__exp-desc">{exp.description}</p>
                <div className="work-page__exp-tags">
                  {exp.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="work-page__section">
          <p className="work-page__section-label">Featured projects</p>
          <div className="work-page__featured-grid">
            {featured.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Other projects */}
      {rest.length > 0 && (
        <section className="work-page__section">
          <p className="work-page__section-label">Other projects</p>
          <div className="work-page__grid">
            {rest.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="work-page__cta glass">
        <div>
          <h3 className="work-page__cta-heading">Want to see more?</h3>
          <p className="work-page__cta-sub">
            Most of my work lives on GitHub. Feel free to explore or reach out.
          </p>
        </div>
        <div className="work-page__cta-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-primary">
            GitHub ↗
          </a>
          <Link to="/contact" className="btn-ghost">Get in touch</Link>
        </div>
      </div>
    </div>
  );
}