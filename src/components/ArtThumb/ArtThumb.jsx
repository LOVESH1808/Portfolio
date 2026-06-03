import { Link } from 'react-router-dom';
import './ArtThumb.css';

/* Maps category → a background gradient using palette vars */
const CATEGORY_STYLES = {
  Illustration: 'art-thumb--illustration',
  'Gen-art':    'art-thumb--genart',
  Study:        'art-thumb--study',
};

export default function ArtThumb({ artwork, size = 'default' }) {
  const { id, title, category, medium, palette } = artwork;
  const categoryClass = CATEGORY_STYLES[category] || '';

  return (
    <Link
      to={`/gallery/${id}`}
      className={`art-thumb ${categoryClass} art-thumb--${size}`}
      aria-label={`View ${title}`}
    >
      {/* Colour swatch preview from the artwork's palette */}
      <div className="art-thumb__canvas">
        {palette.map((color, i) => (
          <div
            key={i}
            className="art-thumb__swatch"
            style={{ background: color, opacity: 0.7 + i * 0.1 }}
          />
        ))}
        <div className="art-thumb__overlay">
          <span className="art-thumb__medium">{medium}</span>
        </div>
      </div>

      <div className="art-thumb__info">
        <span className="art-thumb__title">{title}</span>
        <span className="art-thumb__category tag">{category}</span>
      </div>
    </Link>
  );
}
