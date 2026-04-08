import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { totalItems } = useCart()
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/shop', label: 'Boutique' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-inner container">

        <Link to="/" className="navbar-brand">
          <img
            src="/eurovintage.png"
            alt="EuroVintage Art"
            className="navbar-logo"
          />
        </Link>

        <nav className="navbar-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname === link.path
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/cart" className="cart-icon" aria-label="Voir le panier">
          🛒
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>

      </div>
    </header>
  )
}

export default Navbar