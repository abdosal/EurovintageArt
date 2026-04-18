import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-page container">
      <div className="page-header">
        <p className="section-subtitle">Contact</p>
        <h1>Parlons de votre projet</h1>
        <p>Commande sur mesure, collaboration ou simple question — écrivez-moi.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Coordonnées</h2>
          <div className="info-item">
            <strong>Email</strong>
            <p>contact@pintacueca.com</p>
          </div>
          <div className="info-item">
            <strong>Délai de réponse</strong>
            <p>24 à 48 heures ouvrées</p>
          </div>
          <div className="info-item">
            <strong>Sujets</strong>
            <p>Commandes, impressions, partenariats, séries personnalisées</p>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <p className="success-icon">✅</p>
              <h2>Message envoyé !</h2>
              <p>Je vous répondrai dans les plus brefs délais.</p>
              <button className="btn btn-secondary" onClick={() => setSent(false)}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" type="text" placeholder="Votre nom" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="vous@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Décrivez votre demande..." rows="5" required />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact