import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/products'
import './Shop.css'

function Shop() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const { addToCart } = useCart()

  const categories = ['Tous', ...new Set(products.map(p => p.category))]

  const filtered = activeFilter === 'Tous'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <div className="shop-page container">
      <div className="page-header">
        <p className="section-subtitle">Catalogue</p>
        <h1>Boutique d'illustrations</h1>
        <p>{filtered.length} illustration{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}</p>
      </div>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="shop-grid">
        {filtered.map(product => (
          <article className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-card-image">
              <img
                src={product.image}
                alt={product.imageAlt}
                width="400"
                height="533"
                loading="lazy"
              />
              <span className="product-tag">{product.category}</span>
            </Link>
            <div className="product-card-body">
              <h3>{product.name}</h3>
              <p>{product.shortDesc}</p>
              <div className="product-card-footer">
                <span className="price">{product.price} €</span>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addToCart(product)}
                >
                  + Panier
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Shop