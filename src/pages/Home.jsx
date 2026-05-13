import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import ReserveModal from '../components/ReserveModal'

/* ---- Canvas-based white-background removal ---- */
function useTransparentImage(src) {
  const [processed, setProcessed] = useState(null)
  useEffect(() => {
    if (!src) return
    const img = new window.Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = imageData.data
      for (let i = 0; i < d.length; i += 4) {
        if (d[i] > 230 && d[i + 1] > 230 && d[i + 2] > 230) {
          d[i + 3] = 0
        }
      }
      ctx.putImageData(imageData, 0, 0)
      setProcessed(canvas.toDataURL('image/png'))
    }
    img.src = src
  }, [src])
  return processed
}

/* ---- Data ---- */
const stats = [
  { number: '500+', label: 'Guests Monthly' },
  { number: '9+',   label: 'Years Running' },
  { number: '36+',  label: 'Events Hosted' },
  { number: '12+',  label: 'Premium Venues' },
]

const pillars = [
  {
    number: '01',
    title: 'Class',
    desc: 'An atmosphere built on taste, presence, and standards that speak for themselves.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '02',
    title: 'Connection',
    desc: 'Meaningful conversations that turn into opportunities and relationships that last beyond the night.',
    image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '03',
    title: 'Celebration',
    desc: 'A space to unwind, enjoy the moment, and celebrate how far you\'ve come.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80',
  },
]

const experiences = [
  { icon: '🍾', title: 'Premium Bottle Experiences', desc: 'Luxury spirits and curated selections served with ceremony.' },
  { icon: '🎵', title: 'Curated Music & Ambience',   desc: 'Sound design crafted to move you — not overwhelm you.' },
  { icon: '🤝', title: 'High-Value Social Setting',  desc: 'A room full of people worth knowing. Every single time.' },
]

const testimonials = [
  {
    text: "Thirsty Thursday isn't just an event — it's a room where the right people happen to be in the same place at the right time. I've closed two deals at these gatherings.",
    name: 'Emeka Okonkwo',
    role: 'CEO, Pinnacle Capital Lagos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    text: "As someone who travels frequently, I always make sure I'm in Lagos on the last Thursday of the month. The atmosphere is unmatched — sophisticated without being stiff.",
    name: 'Adaeze Nwosu',
    role: 'Creative Director, Brand Studio NG',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80',
  },
  {
    text: "The calibre of people in that room is remarkable. It's become my favourite networking event in the city — effortless, elegant, and genuinely inspiring.",
    name: 'Tunde Fashola',
    role: 'Founder, TechBridge Africa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
]

const faqs = [
  { q: 'What is the location?',                       a: 'Location may change for each edition but announcements are made beforehand.' },
  { q: 'Is attendance open to everyone?',             a: 'Entry is selective to maintain the quality of the experience and overall atmosphere.' },
  { q: 'What kind of experience should guests expect?', a: 'Premium hospitality, elevated ambience, curated music, luxury bottle experiences, and high-quality social interactions.' },
  { q: 'How often does Thirsty Thursday happen?',     a: 'Monthly.' },
  { q: 'How do I reserve a table?',                   a: 'Reservations can be made through our website ahead of each edition.' },
]

import logoSrc from '../assets/logo.jpeg'

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.13 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const pageRef = useScrollAnimation()
  const transparentLogo = useTransparentImage(logoSrc)
  const [openFaq, setOpenFaq] = useState(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div ref={pageRef}>

      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />

        <div className="hero__particles" aria-hidden>
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="hero__particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--duration': `${5 + Math.random() * 6}s`,
              '--delay': `${Math.random() * 4}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }} />
          ))}
        </div>

        <div className="container hero__content">
          {transparentLogo && (
            <div className="hero__logo-wrap fade-up">
              <img src={transparentLogo} alt="Thirsty Thursday Naija" className="hero__logo" />
            </div>
          )}
          <h1 className="hero__title">
            Where Naija's biggest<br /><em>achievers gather.</em>
          </h1>
          <p className="hero__desc">
            A premium monthly nightlife experience for those who work hard,
            celebrate success proudly, and value meaningful social presence.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Reserve a Table</button>
            <Link to="/contact" className="btn btn-ghost">Partner With Us</Link>
          </div>
        </div>

        <div className="hero__scroll" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-bar" />
        </div>
      </section>

      {/* ============================================================
          STATS
      ============================================================ */}
      <section className="stats">
        <div className="container">
          <div className="stats__powered fade-up">
            <span className="stats__powered-by">Powered by</span>
            <span className="stats__vinyl-line" />
            <span className="stats__vinyl-name">Vinyl</span>
            <span className="stats__vinyl-line" />
            <span className="stats__powered-tag">#lovemusic</span>
          </div>
          <div className="stats__grid">
            {stats.map(({ number, label }) => (
              <div key={label} className="stats__item fade-up">
                <span className="stats__number">{number}</span>
                <span className="stats__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR STORY — Section 2
      ============================================================ */}
      <section className="about-snippet">
        <div className="container">
          <div className="about-snippet__grid">
            <div className="about-snippet__images fade-up">
              <img
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80"
                alt="Thirsty Thursday atmosphere"
                className="about-snippet__img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80"
                alt="Premium cocktails"
                className="about-snippet__img-secondary"
              />
              <div className="about-snippet__badge">
                <span className="about-snippet__badge-number">2021</span>
                <span className="about-snippet__badge-text">Est. Lagos</span>
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">
                A New Kind of<br /><em>Thursday Culture</em>
              </h2>
              <div className="gold-divider" />
              <blockquote className="about-snippet__quote">
                "We created Thirsty Thursday for people who take pride in both the work they do
                and the life they live."
              </blockquote>
              <p className="about-snippet__text">
                Thirsty Thursday is a premium experience where accomplished people come together
                to unwind, connect, and celebrate success in an atmosphere that feels elevated,
                intentional, and effortless.
              </p>
              <p className="about-snippet__text">
                We're all about good energy, great company, and experiences that match your ambitions.
              </p>
              <Link to="/about" className="btn btn-outline">Read Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOUNDATION — Section 3
      ============================================================ */}
      <section className="pillars">
        <div className="container container--wide">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title">Built around what matters.</h2>
          </div>
          <div className="pillars__grid">
            {pillars.map(({ number, title, desc, image }) => (
              <div key={title} className="pillar">
                <div className="pillar__bg" style={{ backgroundImage: `url('${image}')` }} />
                <div className="pillar__overlay" />
                <span className="pillar__number">{number}</span>
                <div className="pillar__content">
                  <h3 className="pillar__title">{title}</h3>
                  <p className="pillar__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE EXPERIENCE — Section 4
      ============================================================ */}
      <section className="experience-strip section">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">The Experience</span>
            <h2 className="section-title">
              Where success is<br /><em>celebrated in style.</em>
            </h2>
            <p className="section-subtitle">
              Every edition of Thirsty Thursday is made to feel immersive, stylish, and socially magnetic.
            </p>
          </div>
          <div className="experience-strip__grid">
            {experiences.map(({ icon, title, desc }, i) => (
              <div key={title} className="experience-strip__card fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                <span className="experience-strip__icon">{icon}</span>
                <h3 className="experience-strip__title">{title}</h3>
                <p className="experience-strip__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NEXT EDITION — Section 5 (leave structure as-is)
      ============================================================ */}
      <section className="upcoming section--dark">
        <div className="container">
          <div className="upcoming__grid">
            <div className="fade-up">
              <div className="upcoming__image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80"
                  alt="Upcoming edition"
                  className="upcoming__image"
                />
                <div className="upcoming__date-badge">
                  <span className="upcoming__date-day">4</span>
                  <span className="upcoming__date-month">Jun</span>
                </div>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <span className="section-tag">Next Edition</span>
              <h2 className="section-title">
                Thirsty Thursday<br /><em>Lagos Pre Launch</em>
              </h2>
              <div className="gold-divider" />
              <div className="upcoming__meta">
                <div className="upcoming__meta-item">
                  <span className="upcoming__meta-icon">📅</span>
                  <div>
                    <p className="upcoming__meta-label">Date</p>
                    <p className="upcoming__meta-value">Thursday, 4th June 2026</p>
                  </div>
                </div>
                <div className="upcoming__meta-item">
                  <span className="upcoming__meta-icon">🕘</span>
                  <div>
                    <p className="upcoming__meta-label">Time</p>
                    <p className="upcoming__meta-value">9:00 PM — Until Dawn</p>
                  </div>
                </div>
                <div className="upcoming__meta-item">
                  <span className="upcoming__meta-icon">📍</span>
                  <div>
                    <p className="upcoming__meta-label">Venue</p>
                    <p className="upcoming__meta-value">TBA — Victoria Island, Lagos</p>
                  </div>
                </div>
                <div className="upcoming__meta-item">
                  <span className="upcoming__meta-icon">👔</span>
                  <div>
                    <p className="upcoming__meta-label">Dress Code</p>
                    <p className="upcoming__meta-value">Smart Elegant / All Black</p>
                  </div>
                </div>
              </div>
              <div className="upcoming__actions">
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>Reserve a Spot</button>
                <Link to="/events" className="btn btn-outline">View All Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experiences — hidden until launch */}

      {/* ============================================================
          VISUAL STORIES — Section 7
      ============================================================ */}
      <section className="gallery-preview section">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Visual Stories</span>
            <h2 className="section-title">
              How the Thirsty Thursday<br /><em>night unfolds.</em>
            </h2>
          </div>
          <div className="gallery-preview__grid fade-up">
            {galleryImages.map((src, i) => (
              <div key={i} className="gallery-preview__item">
                <img src={src} alt={`Gallery ${i + 1}`} className="gallery-preview__img" />
                <div className="gallery-preview__overlay">
                  <span className="gallery-preview__icon">+</span>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-preview__cta fade-up">
            <Link to="/gallery" className="btn btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          READY TO JOIN — Section 8
      ============================================================ */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="cta-banner__overlay" />
        <div className="container">
          <div className="cta-banner__content fade-up">
            <span className="cta-banner__tag">Exclusive Access</span>
            <h2 className="cta-banner__title">
              Ready to be part<br />of <em>the experience?</em>
            </h2>
            <p className="cta-banner__subtitle">
              Come on in. Limited slots are available each month to preserve the
              intimacy and quality of the experience.
            </p>
            <div className="cta-banner__actions">
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>Reserve Your Spot</button>
              <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ — Section 9
      ============================================================ */}
      <section className="home-faq section--dark">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Quick Answers</h2>
          </div>
          <div className="home-faq__list fade-up">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`home-faq__item${openFaq === i ? ' open' : ''}`}
                onClick={() => setOpenFaq(v => v === i ? null : i)}
              >
                <div className="home-faq__question">
                  <span>{q}</span>
                  <span className="home-faq__toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                <p className="home-faq__answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && <ReserveModal onClose={() => setShowModal(false)} />}

    </div>
  )
}
