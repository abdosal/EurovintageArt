import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/products'

function Home() {
  const featured = products.slice(0, 3)
  const { addToCart } = useCart()

  return (
    <div>

      {/* ══════════════════════════════
          HERO — vidéo plein écran
      ══════════════════════════════ */}
      <section className="hero">
        <div className="hero-bg">
          <video
            className="hero-bg-img"
            autoPlay
            muted
            loop
            playsInline
            poster="/background.jpg"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            <img
              src="/background.jpg"
              alt="Pintacueca"
              className="hero-bg-img"
            />
          </video>
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content container">
          <div className="hero-tag">
            Pintacueca — Collection 2026
          </div>
          <h1 className="hero-title">
            L'Europe <em>vintage</em><br />à votre mur
          </h1>
          <p className="hero-desc">
            Affiches rétro originales inspirées des plus belles villes d'Europe.
            100% illustrées à la main par Rémi.
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn btn-hero-primary">
              Voir la boutique
            </Link>
            <Link to="/about" className="btn btn-hero-secondary">
              Notre histoire
            </Link>
          </div>
          <div className="hero-numbers">
            <div className="hero-number">
              <strong>+20</strong>
              <span>Illustrations</span>
            </div>
            <div className="hero-number-sep" />
            <div className="hero-number">
              <strong>100%</strong>
              <span>Originales</span>
            </div>
            <div className="hero-number-sep" />
            <div className="hero-number">
              <strong>5★</strong>
              <span>Qualité</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Découvrir</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          BANDEAU VALEURS
      ══════════════════════════════ */}
      <div className="strip">
        <div className="container strip-inner">
          <div className="strip-item"><span>🖼️</span> Illustrations originales</div>
          <div className="strip-sep" />
          <div className="strip-item"><span>📦</span> Livraison 1-3 jours</div>
          <div className="strip-sep" />
          <div className="strip-item"><span>🔒</span> Paiement sécurisé</div>
          <div className="strip-sep" />
          <div className="strip-item"><span>✉️</span> Support email</div>
        </div>
      </div>

      {/* ══════════════════════════════
          FEATURED
      ══════════════════════════════ */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Sélection</p>
            <h2>Illustrations mises en avant</h2>
            <p>Découvrez l'univers Pintacueca à travers nos meilleures affiches.</p>
          </div>

          <div className="featured-grid">
            {featured.map((product, i) => (
              <div
                className={`featured-card ${i === 0 ? 'featured-card-large' : ''}`}
                key={product.id}
              >
                <Link to={`/product/${product.id}`} className="featured-card-img-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="400"
                    height="533"
                    loading="lazy"
                  />
                  <div className="featured-card-hover">Voir l'illustration →</div>
                </Link>
                <div className="featured-card-body">
                  <div className="featured-card-top">
                    <span className="tag">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.shortDesc}</p>
                  </div>
                  <div className="featured-card-footer">
                    <span className="price">{product.price} €</span>
                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => addToCart(product)}
                      >
                        + Panier
                      </button>
                      <Link to={`/product/${product.id}`} className="btn btn-sm btn-primary">
                        Voir
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/shop" className="btn btn-secondary">
              Toute la collection →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONCEPT
      ══════════════════════════════ */}
      <section className="concept-section">
        <div className="container concept-inner">
          <div className="concept-text">
            <p className="section-subtitle">Notre concept</p>
            <h2>L'art du voyage, encadré chez vous</h2>
            <p>
              Chaque affiche Pintacueca est dessinée dans le style des
              grandes affiches de voyage des années 1930-1960 —
              typographie rétro, couleurs chaudes, compositions épurées.
            </p>
            <p>
              Toutes les œuvres sont <strong>100% originales</strong>,
              illustrées par Rémi et protégées par le droit d'auteur.
            </p>
            <Link
              to="/about"
              className="btn btn-primary"
              style={{ marginTop: 'var(--space-4)', width: 'fit-content' }}
            >
              Découvrir l'histoire →
            </Link>
          </div>

          <div className="concept-mosaic">
            {products.slice(3, 7).map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className="concept-tile">
                <img src={p.image} alt={p.name} width="200" height="267" loading="lazy" />
                <div className="concept-tile-label">{p.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA FINAL — background.jpg
      ══════════════════════════════ */}
      <section className="cta-banner">

        {/* ✅ Image de fond */}
        <div className="cta-banner-bg">
          <img
            src="/backraound.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="cta-banner-overlay" />
        </div>

        <div className="container cta-banner-inner">
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Prêt à décorer ?
          </p>
          <h2>Trouvez l'illustration qui vous ressemble</h2>
          <p>Livraison rapide · Impression premium · Paiement sécurisé</p>
          <div className="cta-banner-btns">
            <Link to="/shop" className="btn btn-hero-primary">
              Explorer la boutique
            </Link>
            <Link to="/contact" className="btn btn-hero-secondary">
              Nous contacter
            </Link>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home