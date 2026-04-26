import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Colonne 1 — Brand */}
        <div className="footer-brand">
          <Link to="/">
            <img src="/Pintakueca.png" alt="Pintakueca" className="footer-logo" />
          </Link>
          <p>Illustrations vintage inspirées des paysages et villes d'Europe. Chaque affiche raconte un voyage.</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.132-1.867 3.132-4.562 0-2.387-1.715-4.057-4.163-4.057-2.838 0-4.502 2.129-4.502 4.332 0 .857.33 1.776.741 2.279a.3.3 0 0 1 .069.286c-.076.315-.243.995-.276 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
            <a href="mailto:contact@Pintakueca.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/shop">Boutique</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne 3 — Collections */}
        <div className="footer-col">
          <h4 className="footer-col-title">Collections</h4>
          <ul className="footer-links">
            <li><Link to="/shop">Portugal</Link></li>
            <li><Link to="/shop">Algarve</Link></li>
            <li><Link to="/shop">Lisbonne</Link></li>
            <li><Link to="/shop">Porto</Link></li>
          </ul>
        </div>

        {/* Colonne 4 — Infos */}
        <div className="footer-col">
          <h4 className="footer-col-title">Informations</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Livraison</Link></li>
            <li><Link to="/contact">Retours</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
            <li><Link to="/legal">Mentions légales</Link></li>
          </ul>
        </div>

      </div>

      {/* Barre du bas */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Pintakueca — Tous droits réservés</p>
          <div className="footer-bottom-badges">
            <span>🔒 Paiement sécurisé</span>
            <span>📦 Livraison rapide</span>
            <span>🎨 Illustrations originales</span>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer