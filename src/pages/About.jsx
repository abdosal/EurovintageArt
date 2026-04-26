
import './About.css'
function About() {
  return (
    <div className="about-page container">
      <div className="page-header">
        <p className="section-subtitle">À propos</p>
        <h1>Une boutique centrée sur l'image et le voyage</h1>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <img
            src="/illustration/map_portugal.png"
            alt="Carte illustrée du Portugal"
            width="600"
            height="700"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <h2>Le concept</h2>
          <p>
            Pintakueca est une boutique d'illustrations numériques inspirées
            des grandes affiches touristiques européennes d'autrefois. Chaque
            affiche est pensée pour évoquer un lieu, une lumière, une ambiance.
          </p>

          <h2>Le créateur</h2>
          <p>
            Passionné par le design vintage, la typographie rétro et les voyages,
            je crée des visuels qui capturent l'essence des villes et paysages
            européens avec un regard contemporain.
          </p>

          <div className="about-values">
            <div className="value-item">
              <strong>🎨 Design</strong>
              <p>Chaque illustration est créée à la main, numérique et unique.</p>
            </div>
            <div className="value-item">
              <strong>✈️ Voyage</strong>
              <p>Des visuels qui donnent envie de partir ou de se souvenir.</p>
            </div>
            <div className="value-item">
              <strong>🖼️ Qualité</strong>
              <p>Impression haute résolution sur papier mat de qualité supérieure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About