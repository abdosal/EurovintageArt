import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartItems = [], removeFromCart, updateQuantity, cartTotal = 0, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleStripeCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Erreur lors de la création de la session.')
      }
    } catch (err) {
      setError('Impossible de contacter le serveur de paiement.')
    } finally {
      setLoading(false)
    }
  }

  // ── Panier vide ──
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-page container">
        <div className="empty-cart">
          <div className="empty-state">
            <div className="empty-icon">🛒</div>
            <h2>Votre panier est vide</h2>
            <p>Ajoutez des illustrations depuis la boutique.</p>
            <Link to="/shop" className="btn btn-primary">Voir la boutique</Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Panier avec articles ──
  return (
    <div className="cart-page container">
      <div className="page-header">
        <p className="section-subtitle">Panier</p>
        <h1>Vos illustrations sélectionnées</h1>
      </div>

      <div className="cart-layout">

        {/* ── Articles ── */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="100"
                height="133"
                loading="lazy"
              />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="muted">{item.category}</p>
              </div>
              <div className="cart-item-right">
                <span className="price">
                  {(item.price * item.quantity).toFixed(2)} €
                </span>
                <div className="qty-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Diminuer la quantité"
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Augmenter la quantité"
                  >+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Récapitulatif ── */}
        <div className="cart-summary">
          <h2>Récapitulatif</h2>

          <div className="summary-line">
            <span>Sous-total</span>
            <span>{cartTotal.toFixed(2)} €</span>
          </div>
          <div className="summary-line">
            <span>Livraison</span>
            <strong>Offerte</strong>
          </div>
          <div className="summary-line summary-total">
            <span>Total</span>
            <span>{cartTotal.toFixed(2)} €</span>
          </div>

          {error && (
            <p style={{
              color: 'var(--color-accent)',
              fontSize: 'var(--text-xs)',
              textAlign: 'center',
              padding: '0.5rem',
              background: 'rgba(181,99,30,0.08)',
              borderRadius: 'var(--radius-md)'
            }}>
              ⚠️ {error}
            </p>
          )}

          <button
            className="btn btn-primary btn-full"
            onClick={handleStripeCheckout}
            disabled={loading}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner" /> Chargement...
              </span>
            ) : (
              '💳 Payer avec Stripe'
            )}
          </button>

          <p className="cart-note muted">
            🔒 Paiement 100% sécurisé via Stripe.<br />
            Carte test : <strong>4242 4242 4242 4242</strong>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Cart