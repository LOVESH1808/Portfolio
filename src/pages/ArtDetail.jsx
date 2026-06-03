import { useParams, Link, Navigate } from 'react-router-dom';
import { artworks } from '../data/artworks';
import ArtThumb from '../components/ArtThumb/ArtThumb';
import './ArtDetail.css';

export default function ArtDetail() {
  const { id } = useParams();
  const artwork = artworks.find(a => a.id === id);

  if (!artwork) return <Navigate to="/gallery" replace />;

  const { title, category, year, medium, description, palette } = artwork;

  // Related: same category, excluding current
  const related = artworks
    .filter(a => a.category === category && a.id !== id)
    .slice(0, 3);

  return (
    <div className="art-detail">
      <Link to="/gallery" className="art-detail__back btn-ghost">
        ← Gallery
      </Link>

      <div className="art-detail__layout">
        {/* Canvas */}
        <div className="art-detail__canvas glass">
          <div className="art-detail__palette-display">
            {palette.map((color, i) => (
              <div
                key={i}
                className="art-detail__palette-strip"
                style={{ background: color }}
              />
            ))}
          </div>
          <div className="art-detail__canvas-label">
            <span className="tag">{medium}</span>
          </div>
        </div>

        {/* Info */}
        <div className="art-detail__info">
          <span className="art-detail__category tag">{category}</span>
          <h1 className="art-detail__title">{title}</h1>

          <div className="art-detail__meta glass-sm">
            <div className="art-detail__meta-row">
              <span className="art-detail__meta-label">Year</span>
              <span className="art-detail__meta-value">{year}</span>
            </div>
            <div className="art-detail__meta-row">
              <span className="art-detail__meta-label">Medium</span>
              <span className="art-detail__meta-value">{medium}</span>
            </div>
            <div className="art-detail__meta-row">
              <span className="art-detail__meta-label">Category</span>
              <span className="art-detail__meta-value">{category}</span>
            </div>
          </div>

          <p className="art-detail__desc">{description}</p>

          {/* Palette swatches */}
          <div className="art-detail__swatches">
            <span className="art-detail__swatches-label">Palette</span>
            <div className="art-detail__swatches-row">
              {palette.map((color, i) => (
                <div
                  key={i}
                  className="art-detail__swatch"
                  style={{ background: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="art-detail__related">
          <p className="section-label">More {category}</p>
          <div className="art-detail__related-grid">
            {related.map(art => (
              <ArtThumb key={art.id} artwork={art} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
