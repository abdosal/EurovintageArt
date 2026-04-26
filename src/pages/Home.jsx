import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCart } from '../context/CartContext'
import products from '../data/products'
import './Home.css'

/* ─────────────────────────────────────────
   Hook : détection entrée dans le viewport
───────────────────────────────────────────*/
function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.15, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}

/* ─────────────────────────────────────────
   Icônes inline (pas de dépendance externe)
───────────────────────────────────────────*/
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const IconDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
)

/* ══════════════════════════════════════════
   COMPOSANT PRINCIPAL
══════════════════════════════════════════ */
export default function Home() {
  const { t } = useTranslation()
  const featured = products.slice(0, 3)
  const mosaic   = products.slice(3, 7)
  const { addToCart } = useCart()

  // Traductions des étapes
  const STEPS = [
    { num: '01', titleKey: 'papier.step1_title',  subKey: 'papier.step1_sub' },
    { num: '02', titleKey: 'papier.step2_title',  subKey: 'papier.step2_sub' },
    { num: '03', titleKey: 'papier.step3_title',  subKey: 'papier.step3_sub' },
    { num: '04', titleKey: 'papier.step4_title',  subKey: 'papier.step4_sub' },
  ]

  // Traductions des valeurs
  const VALUES = [
    { icon: '🖼️', labelKey: 'strip.illustrations' },
    { icon: '📦', labelKey: 'strip.shipping' },
    { icon: '🔒', labelKey: 'strip.payment' },
    { icon: '✉️', labelKey: 'strip.support' },
  ]

  /* refs pour animations scroll */
  const [featRef, featIn]     = useInView()
  const [conceptRef, conceptIn] = useInView()
  const [papierRef, papierIn] = useInView()
  const [ctaRef, ctaIn]       = useInView()

  /* Parallaxe légère sur hero */
  const heroRef = useRef(null)
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onScroll = () => {
      const y = window.scrollY
      const bg = hero.querySelector('.hero-video-el')
      if (bg) bg.style.transform = `scale(1.08) translateY(${y * 0.18}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="home">

      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className="hero" ref={heroRef}>

        {/* Fond vidéo */}
        <div className="hero-media">
          <video
            className="hero-video-el"
            autoPlay muted loop playsInline
            poster="/background.jpg"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            <img src="/background.jpg" alt="" className="hero-video-el" />
          </video>
          <div className="hero-overlay-gradient" />
          <div className="hero-overlay-vignette" />
        </div>

        {/* Contenu */}
        <div className="container hero-layout">
          <div className="hero-body">

            {/* Tag animé */}
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              {t('hero.tag')}
            </div>

            <h1 className="hero-title">
              {t('hero.title')}
            </h1>

            <p className="hero-desc">
              {t('hero.description')}
            </p>

            <div className="hero-cta">
              <Link to="/shop" className="btn btn-hero-primary">
                {t('hero.cta')} <IconArrow />
              </Link>
              <Link to="/about" className="btn btn-hero-ghost">
                {t('hero.story')}
              </Link>
            </div>

            {/* Chiffres clés */}
            <div className="hero-stats">
              {[
                { value: t('hero.stat1'),  label: t('hero.stat1_label') },
                { value: t('hero.stat2'), label: t('hero.stat2_label') },
                { value: t('hero.stat3'),   label: t('hero.stat3_label') },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="hero-stats-sep" />}
                  <div className="hero-stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* Carte flottante */}
          <div className="hero-card">
            <img src={products[0]?.image} alt={products[0]?.name} />
            <div className="hero-card-info">
              <span className="tag">{products[0]?.category}</span>
              <p>{products[0]?.name}</p>
              <strong>{products[0]?.price}&nbsp;€</strong>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button className="hero-scroll" aria-label={t('hero.discover')}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span>{t('hero.scroll_hint')}</span>
          <div className="hero-scroll-track"><div className="hero-scroll-thumb" /></div>
        </button>

        {/* Numéro de collection rotatif */}
        <div className="hero-badge" aria-hidden="true">
          <svg viewBox="0 0 120 120" className="hero-badge-ring">
            <defs>
              <path id="circle-text"
                d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
            </defs>
            <text fontSize="10.5" fontWeight="700" letterSpacing="4" fill="rgba(255,255,255,0.35)"
              fontFamily="'DM Sans', sans-serif" textAnchor="start">
              <textPath href="#circle-text">
                COLLECTION 2026 · Pintakueca · VINTAGE ·
              </textPath>
            </text>
          </svg>
        </div>

      </section>


      {/* ══════════════════════════════
          2. STRIP VALEURS
      ══════════════════════════════ */}
      <div className="strip">
        <div className="container strip-inner">
          {VALUES.map((v, i) => (
            <React.Fragment key={v.labelKey}>
              {i > 0 && <div className="strip-sep" />}
              <div className="strip-item">
                <span className="strip-icon">{v.icon}</span>
                {t(v.labelKey)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>


      {/* ══════════════════════════════
          3. FEATURED
      ══════════════════════════════ */}
      <section
        className={`featured-section reveal-section${featIn ? ' is-visible' : ''}`}
        ref={featRef}
      >
        <div className="container">

          <header className="section-header">
            <span className="section-eyebrow">
              <span className="eyebrow-line" />{t('featured.eyebrow')}<span className="eyebrow-line" />
            </span>
            <h2>{t('featured.title')}</h2>
            <p>{t('featured.description')}</p>
          </header>

          <div className="featured-grid">
            {featured.map((product, i) => (
              <article
                className="featured-card"
                key={product.id}
                style={{ '--delay': `${i * 0.12}s` }}
              >
                <Link to={`/product/${product.id}`} className="featured-card-media">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="400" height="533"
                    loading="lazy"
                  />
                  <div className="featured-card-overlay">
                    <span>{t('featured.view')} <IconArrow /></span>
                  </div>
                </Link>

                <div className="featured-card-body">
                  <div>
                    <span className="tag">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="featured-card-desc">{product.shortDesc}</p>
                  </div>
                  <footer className="featured-card-footer">
                    <span className="price">{product.price}&nbsp;€</span>
                    <div className="featured-card-actions">
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => addToCart(product)}
                        aria-label={`${t('featured.addToCart')} ${product.name}`}
                      >
                        {t('featured.addToCart')}
                      </button>
                      <Link to={`/product/${product.id}`} className="btn btn-sm btn-primary">
                        {t('featured.view')}
                      </Link>
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/shop" className="btn btn-outline-dark">
              {t('featured.cta')} <IconArrow />
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════
          4. CONCEPT
      ══════════════════════════════ */}
      <section
        className={`concept-section reveal-section${conceptIn ? ' is-visible' : ''}`}
        ref={conceptRef}
      >
        <div className="container concept-grid">

          {/* Texte */}
          <div className="concept-text reveal-child" style={{ '--delay': '0s' }}>
            <span className="section-eyebrow">
              <span className="eyebrow-line" />{t('concept.eyebrow')}<span className="eyebrow-line" />
            </span>
            <h2>{t('concept.title')}</h2>
            <p>
              {t('concept.description1')}
            </p>
            <p>
              {t('concept.description2')}
            </p>

            {/* Points différenciants */}
            <ul className="concept-points">
              {[
                t('concept.point1'),
                t('concept.point2'),
                t('concept.point3'),
              ].map(pt => (
                <li key={pt}>
                  <span className="concept-point-dot" />
                  {pt}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn btn-primary concept-cta">
              {t('concept.cta')} <IconArrow />
            </Link>
          </div>

          {/* Mosaïque */}
          <div className="concept-mosaic reveal-child" style={{ '--delay': '0.15s' }}>
            {mosaic.map((p, i) => (
              <Link
                to={`/product/${p.id}`}
                key={p.id}
                className="concept-tile"
                style={{ '--tile-delay': `${i * 0.08}s` }}
              >
                <img src={p.image} alt={p.name} width="200" height="267" loading="lazy" />
                <div className="concept-tile-label">{p.name}</div>
                <div className="concept-tile-hover">
                  <IconArrow />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════
          5. PAPIER ARTISANAL — split layout
      ══════════════════════════════ */}
      <section
        className={`papier-section reveal-section${papierIn ? ' is-visible' : ''}`}
        ref={papierRef}
      >
        <div className="papier-split">

          {/* ── Gauche : vidéo ── */}
          <div className="papier-video-col reveal-child" style={{ '--delay': '0s' }}>
            <video
              className="papier-video-el"
              autoPlay muted loop playsInline preload="auto"
            >
              <source src="/paperartisanal.mp4" type="video/mp4" />
            </video>

            {/* Badge rotatif sur la vidéo */}
            <div className="papier-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120" className="papier-badge-ring">
                <defs>
                  <path id="papier-circle"
                    d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                </defs>
                <text fontSize="9.5" fontWeight="700" letterSpacing="4"
                  fill="rgba(255,255,255,0.55)"
                  fontFamily="'DM Sans', sans-serif">
                  <textPath href="#papier-circle">
                    ARTISANAL · FAIT MAIN · NATUREL ·
                  </textPath>
                </text>
              </svg>
              <span className="papier-badge-core" />
            </div>
          </div>

          {/* ── Droite : texte + étapes ── */}
          <div className="papier-text-col reveal-child" style={{ '--delay': '0.15s' }}>

            <div className="papier-text-header">
              <p className="papier-eyebrow">
                <span className="eyebrow-line" />{t('papier.eyebrow')}<span className="eyebrow-line" />
              </p>
              <h2 className="papier-title">
                {t('papier.title')}
              </h2>
              <p className="papier-intro">
                {t('papier.description')}
              </p>
            </div>

            {/* Étapes verticales */}
            <ol className="papier-steps-list" role="list">
              {STEPS.map((step, i) => (
                <li key={step.num} className="papier-step-item" role="listitem"
                  style={{ '--step-delay': `${0.18 + i * 0.1}s` }}>
                  <div className="papier-step-marker">
                    <span className="papier-step-num-v">{step.num}</span>
                    {i < STEPS.length - 1 && <div className="papier-step-connector" />}
                  </div>
                  <div className="papier-step-content">
                    <strong>{t(step.titleKey)}</strong>
                    <span>{t(step.subKey)}</span>
                  </div>
                </li>
              ))}
            </ol>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════
          6. CTA BANNER
      ══════════════════════════════ */}
      <section
        className={`cta-section reveal-section${ctaIn ? ' is-visible' : ''}`}
        ref={ctaRef}
      >
        <div className="cta-media">
          <img src="/background.jpg" alt="" aria-hidden="true" loading="lazy" />
          <div className="cta-overlay" />
          <div className="cta-overlay-bottom" />
        </div>

        <div className="container cta-inner">

          <div className="cta-label">
            <span className="eyebrow-line" />
            <span>{t('cta.label')}</span>
            <span className="eyebrow-line" />
          </div>

          <h2 className="cta-title">
            {t('cta.title')}
          </h2>

          <p className="cta-sub">
            {t('cta.description')}
          </p>

          <div className="cta-btns">
            <Link to="/shop" className="btn btn-hero-primary">
              {t('cta.shop')} <IconArrow />
            </Link>
            <Link to="/contact" className="btn btn-hero-ghost">
              {t('cta.contact')}
            </Link>
          </div>

          {/* Grille de miniatures décorative */}
          <div className="cta-thumbnails" aria-hidden="true">
            {products.slice(0, 5).map(p => (
              <div key={p.id} className="cta-thumb">
                <img src={p.image} alt="" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
