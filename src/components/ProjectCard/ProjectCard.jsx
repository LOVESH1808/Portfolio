import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { icon, title, description, tags, github, live } = project;

  return (
    <article className="project-card glass glass-hover">
      <div className="project-card__icon">{icon}</div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__tags">
        {tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="project-card__links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="project-card__link">
            GitHub ↗
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--primary">
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}
