import { useState } from 'react';
import ArtThumb from '../components/ArtThumb/ArtThumb';
import { artworks, categories } from '../data/artworks';
import './Gallery.css';

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? artworks
    : artworks.filter(a => a.category === active);

  return (
    <div className="gallery-page">
      <div className="gallery-page__header">
        <p className="section-label">Art gallery</p>
        <h1 className="gallery-page__title">Visual work</h1>
        <p className="gallery-page__sub">
          Digital illustrations, generative pieces, and quiet experiments
          in form and colour. {artworks.length} works across illustration,
          gen‑art, and study.
        </p>
      </div>

      {/* Filter pills */}
      <div className="gallery-page__filters" role="group" aria-label="Filter by category">
        {categories.map(cat => (
          <button
            key={cat}
            className={`gallery-page__filter ${active === cat ? 'gallery-page__filter--active' : ''}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-page__grid">
        {filtered.map(art => (
          <ArtThumb key={art.id} artwork={art} />
        ))}
      </div>
    </div>
  );
}
