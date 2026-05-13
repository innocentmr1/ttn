import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/about.css'

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

const pillars = [
  { icon: '✦', title: 'Class', text: 'An atmosphere built on taste, presence, and standards that speak for themselves.' },
  { icon: '🤝', title: 'Connection', text: 'Meaningful conversations that turn into opportunities and relationships that last beyond the night.' },
  { icon: '🥂', title: 'Indulgence', text: 'Premium hospitality, luxury bottle experiences, and curated moments worth celebrating.' },
  { icon: '👑', title: 'Social Prestige', text: 'A room that reflects your lifestyle  surrounded by high-level professionals, entrepreneurs, and tastemakers.' },
]

export default function About() {
  const pageRef = useScrollAnimation()

  return (
    <div ref={pageRef}>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1920&q=80')`,
        }} />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-tag fade-up">Our Story</span>
          <h1 className="page-hero__title fade-up">A New Kind of<br /><em>Thursday Culture</em></h1>
          <div className="gold-divider fade-up" />
        </div>
      </section>

      {/* Story */}
      <section className="story">
        <div className="container">
          <div className="story__grid">
            <div className="story__text fade-up">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title" style={{ marginBottom: '28px' }}>
                Built around what<br /><em>matters.</em>
                
              </h2>
              <div className="gold-divider" style={{ marginBottom: '32px' }} />
              <p>
                Thirsty Thursday is a premium nightlife experience designed to introduce a new kind
                of Thursday culture in Lagos.
              </p>
              <p>
                Unlike traditional nightlife events that focus purely on loud entertainment,
                Thirsty Thursday is built around <strong>class, connection, indulgence,
                and social prestige.</strong>
              </p>
              <p><strong>The concept is simple but powerful:</strong></p>
              <p>
                Create a carefully curated monthly gathering
                for accomplished individuals who want to unwind, network, and celebrate success
                in an environment that reflects their lifestyle and status.
              </p>
              <p>
                Our ambition is to build Thirsty Thursday into one of Lagos' most recognisable
                premium nightlife brands, known for attracting high-level professionals,
                entrepreneurs, celebrities, and tastemakers.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '12px' }}>
                Get in Touch
              </Link>
            </div>

            <div className="story__image-stack fade-up" style={{ transitionDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80"
                alt="Thirsty Thursday atmosphere"
                className="story__img story__img--a"
              />
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80"
                alt="Premium nightlife"
                className="story__img story__img--b"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="values">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title">What we're built on.</h2>
          </div>
          <div className="values__grid">
            {pillars.map(({ icon, title, text }, i) => (
              <div key={title} className="value-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="value-card__icon">{icon}</span>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambition */}
      <section className="mission">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">The Ambition</span>
            <h2 className="section-title">Lagos' most recognisable<br /><em>premium nightlife brand.</em></h2>
          </div>
          <div className="mission__grid">
            <div className="mission__card fade-up">
              <span className="mission__card-icon">🏙️</span>
              <h3 className="mission__card-title">Lagos First</h3>
              <p className="mission__card-text">
                We're starting in Lagos Nigeria's commercial and cultural capital where ambition,
                taste, and nightlife collide at the highest level. Thirsty Thursday is built for
                this city and the people who drive it.
              </p>
            </div>
            <div className="mission__card fade-up" style={{ transitionDelay: '0.15s' }}>
              <span className="mission__card-icon">🌍</span>
              <h3 className="mission__card-title">The Bigger Vision</h3>
              <p className="mission__card-text">
                Our goal is to grow Thirsty Thursday into one of Africa's most recognisable premium
                nightlife brands  a name synonymous with quality, exclusivity, and the very best
                of what a night out should feel like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="cta-banner__overlay" />
        <div className="container">
          <div className="cta-banner__content fade-up">
            <span className="cta-banner__tag">Join Us</span>
            <h2 className="cta-banner__title">
              Ready to be part of<br /><em>the experience?</em>
            </h2>
            <div className="cta-banner__actions">
              <Link to="/events" className="btn btn-primary">View Upcoming Events</Link>
              <Link to="/contact" className="btn btn-ghost">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
