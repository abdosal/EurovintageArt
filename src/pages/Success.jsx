import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Success() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart() // vide le panier après paiement réussi
  }, [])

  return (
    <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
      <div className="success-icon">🎉</div>
      <h1 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
        Commande confirmée !
      </h1>
      <p className="muted" style={{ maxWidth: '40ch', margin: '0 auto 2rem' }}>
        Merci pour votre achat. Votre illustration EuroVintage Art
        sera expédiée sous 5 à 7 jours ouvrés.
      </p>
      <Link to="/shop" className="btn btn-primary">
        Continuer mes achats →
      </Link>
    </div>
  )
}

export default Success