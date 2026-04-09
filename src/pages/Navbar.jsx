import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartCount } = useCart()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Ferme le menu au changement de page
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Bloque le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { path: '/',        label: 'Accueil' },
    { path: '/shop',    label: 'Boutique' },
    { path: '/about',   label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner container">

          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img
              src="/eurovintage.png"
              alt="EuroVintage Art"
              className="navbar-logo"
            />
          </Link>

          {/* Liens desktop */}
          <nav className="navbar-links" aria-label="Navigation principale">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? 'nav-link active' : 'nav-link'}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Droite : panier + hamburger */}
          <div className="navbar-right">
            <Link to="/cart" className="cart-icon" aria-label="Voir le panier">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>

            {/* Bouton hamburger — mobile seulement */}
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </header>

      {/* Overlay fond sombre */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer mobile */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Menu mobile">
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">
            <span className="euro-text">Euro</span>Vintage Art
          </span>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <Link to="/cart" className="btn btn-primary btn-full" onClick={() => setMenuOpen(false)}>
            🛒 Voir le panier {cartCount > 0 && `(${cartCount})`}
          </Link>
          <p className="mobile-menu-copy">
            © {new Date().getFullYear()} <span className="euro-text">Euro</span>Vintage Art
          </p>
        </div>
      </nav>
    </>
  )
}

export default Navbar