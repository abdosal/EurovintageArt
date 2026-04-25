import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/products'
import './Product.css'

function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find(p => p.id === id)

  // Produits similaires : même catégorie, sauf le produit actuel
  const related = products
    .filter(p => p.id !== id && p.category === product?.category)
    .slice(0, 3)

  // Si pas assez dans la même catégorie, compléter avec d'autres
  const suggestions = related.length >= 3
    ? related
    : [
        ...related,
        ...products
          .filter(p => p.id !== id && !related.includes(p))
          .slice(0, 3 - related.length)
      ]

  if (!product) {
    return (
      <div className="product-page container">
        <div className="not-found">
          <p style={{ fontSize: '3rem' }}>🖼️</p>
          <h2>Illustration introuvable</h2>
          <Link to="/shop" className="btn btn-primary">Retour boutique</Link>
        </div>
      </div>
    )
  }

  function handleAddToCart() {
    addToCart(product)
    navigate('/cart')
  }

  return (
    <div className="product-page container">

      {/* Bouton retour */}
      <Link to="/shop" className="back-link">← Retour à la boutique</Link>

      {/* Détail produit */}
      <div className="product-detail">
        <div className="product-detail-image">
          <img
            src={product.image}
            alt={product.name}
            width="600"
            height="800"
            loading="lazy"
          />
        </div>

        <div className="product-detail-info">
          <span className="tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-city">📍 {product.city}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-price-row">
            <span className="price price-lg">{product.price} €</span>
          </div>

          <ul className="product-features">
            <li>Format affiche vintage rétro</li>
            <li>Impression sur papier mat de qualité</li>
            <li>Livraison sécurisée sous 5 à 7 jours</li>
          </ul>

          <button className="btn btn-primary btn-full" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
          <Link to="/cart" className="btn btn-secondary btn-full">
            Voir le panier
          </Link>
        </div>
      </div>

      {/* ✅ SECTION PRODUITS SUGGÉRÉS */}
      {suggestions.length > 0 && (
        <section className="related-section">
          <div className="related-header">
            <h2>Vous aimerez aussi</h2>
            <Link to="/shop" className="related-see-all">Voir tout →</Link>
          </div>

          <div className="related-grid">
            {suggestions.map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className="related-card">
                <div className="related-card-image">
                  <img
                    src={p.image}
                    alt={p.name}
                    width="400"
                    height="533"
                    loading="lazy"
                  />
                </div>
                <div className="related-card-body">
                  <h3>{p.name}</h3>
                  <span className="price">{p.price} €</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}

export default Product