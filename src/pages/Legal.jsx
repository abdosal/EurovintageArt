import { Link } from 'react-router-dom'
import './Legal.css'

function Legal() {
  const year = new Date().getFullYear()

  return (
    <div className="legal-page container">

      <div className="page-header">
        <p className="section-subtitle">Informations légales</p>
        <h1>Mentions légales</h1>
        <p>
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique (LCEN).
        </p>
      </div>

      <div className="legal-content">

        {/* ── 1. Éditeur ── */}
        <section className="legal-section">
          <h2>1. Éditeur du site</h2>
          <p>Le site <strong>Pintakueca</strong> est édité par :</p>
          <ul>
            <li><strong>Nom :</strong> Rémi</li>
            <li><strong>Statut :</strong> Entrepreneur individuel (EI)</li>
            <li><strong>Adresse :</strong> porto, Portugal</li>
            <li><strong>Email :</strong> contact@Pintakueca.com</li>
          </ul>
        </section>

        {/* ── 2. Directeur de publication ── */}
        <section className="legal-section">
          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication est <strong>Rémi</strong>,
            propriétaire et créateur du site <strong>Pintakueca</strong>.
          </p>
        </section>

        {/* ── 3. Hébergement ── */}
        <section className="legal-section">
          <h2>3. Hébergement</h2>
          <p>Ce site est hébergé par :</p>
          <ul>
            <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</li>
            <li><strong>Site web :</strong> vercel.com</li>
          </ul>
        </section>

        {/* ── 4. Propriété intellectuelle ── */}
        <section className="legal-section">
          <h2>4. Propriété intellectuelle & Droits d'auteur</h2>
          <div className="legal-copyright-box">
            <p>
              L'ensemble des illustrations, visuels, affiches vintage et œuvres graphiques
              présentes sur le site <strong>Pintakueca</strong> sont des créations
              <strong> originales et uniques</strong>, conçues et réalisées
              exclusivement par <strong>Rémi</strong>.
            </p>
            <p>
              Ces œuvres sont protégées par le droit d'auteur en vertu du{' '}
              <strong>Code de la Propriété Intellectuelle</strong> (articles L111-1 et suivants).
              Toute reproduction, diffusion, modification, publication ou exploitation
              commerciale — partielle ou totale — est <strong>strictement interdite</strong>{' '}
              sans autorisation écrite préalable du propriétaire.
            </p>
            <p>
              Les designs Pintakueca sont <strong>100 % originaux</strong> et ne peuvent
              être assimilés à aucune autre œuvre existante. Toute violation des droits d'auteur
              fera l'objet de poursuites judiciaires.
            </p>
          </div>
        </section>

        {/* ── 5. CGV ── */}
        <section className="legal-section">
          <h2>5. Conditions générales de vente</h2>
          <p>En passant une commande sur Pintakueca, le client accepte les conditions suivantes :</p>
          <ul>
            <li>Les prix sont indiqués en euros (€) toutes taxes comprises.</li>
            <li>Le paiement est sécurisé via la plateforme <strong>Stripe</strong>.</li>
            <li>La livraison est effectuée sous <strong>5 à 7 jours ouvrés</strong> après confirmation.</li>
            <li>Le client dispose d'un <strong>délai de rétractation de 14 jours</strong> après réception.</li>
            <li>Les produits numériques déjà téléchargés ne sont pas remboursables.</li>
          </ul>
        </section>

        {/* ── 6. RGPD ── */}
        <section className="legal-section">
          <h2>6. Données personnelles & RGPD</h2>
          <p>
            Les données collectées via le formulaire de contact (nom, email, message)
            sont utilisées uniquement pour répondre aux demandes des utilisateurs.
            Elles ne sont jamais revendues ni partagées avec des tiers.
          </p>
          <p>
            Conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>,
            vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            Pour exercer ce droit : <strong>contact@Pintakueca.com</strong>
          </p>
        </section>

        {/* ── 7. Cookies ── */}
        <section className="legal-section">
          <h2>7. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement
            du panier d'achat (localStorage). Aucun cookie publicitaire ou de suivi tiers n'est utilisé.
          </p>
        </section>

        {/* ── 8. Responsabilité ── */}
        <section className="legal-section">
          <h2>8. Responsabilité</h2>
          <p>
            L'éditeur s'efforce de maintenir les informations publiées exactes et à jour.
            Toutefois, il ne peut être tenu responsable des erreurs ou omissions,
            ni des dommages directs ou indirects résultant de l'utilisation du site.
          </p>
        </section>

        {/* ── Signature ── */}
        <div className="legal-signature">
          <div className="legal-signature-inner">

            <div className="legal-stamp">
              Pintakueca
            </div>

            <div className="legal-signature-text">
              <p className="legal-signature-label">Créateur & Propriétaire des illustrations</p>
              <p className="legal-signature-name">Rémi</p>
              <p className="legal-signature-copy">
                © {year} <strong>Pintakueca</strong> — Toutes les illustrations
                sont des œuvres originales protégées par le droit d'auteur.
                Reproduction interdite sans autorisation.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                Nous contacter
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Legal