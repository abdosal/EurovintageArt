import { Link } from 'react-router-dom'
import products from '../data/products'

function Home() {
  const featured = products.slice(0, 3)

  return (
    <div>
      <section className="home-hero">
        <div className="hero-text">
          <p className="hero-subtitle">
            <span className="euro-text">Euro</span>Vintage Art
          </p>
          <h1>Illustrations vintage inspirées du Portugal</h1>
          <p>
            Une collection d'affiches rétro pensées pour la décoration,
            le souvenir et l'amour du style ancien revisité avec une touche moderne.
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">Voir la boutique</Link>
            <Link to="/about" className="btn btn-secondary">À propos</Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/illustration/porto2_illustration.jpg"
            alt="Illustration vintage Porto"
            width="500"
            height="667"
            loading="eager"
          />
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <p className="section-subtitle">Sélection</p>
          <h2>Illustrations mises en avant</h2>
          <p>Une sélection de nos meilleures affiches pour découvrir l'univers EuroVintage Art.</p>
        </div>

        <div className="featured-grid container">
          {featured.map(product => (
            <div className="featured-card" key={product.id}>
              <img
                src={product.image}
                alt={product.imageAlt}
                width="400"
                height="533"
                loading="lazy"
              />
              <div className="featured-card-body">
                <span className="tag">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.shortDesc}</p>
                <div className="featured-card-footer">
                  <span className="price">{product.price} €</span>
                  <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
                    Voir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/shop" className="btn btn-secondary">
            Voir toutes les illustrations →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home