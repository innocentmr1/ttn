import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const stats = [
  { number: '500+', label: 'Guests Monthly' },
  { number: '3+', label: 'Years Running' },
  { number: '36+', label: 'Events Hosted' },
  { number: '12+', label: 'Premium Venues' },
]

const pillars = [
  {
    number: '01',
    icon: '✦',
    title: 'Class',
    desc: 'An uncompromising standard of elegance in every detail, from the venue dress code to the curated playlist.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '02',
    icon: '⬡',
    title: 'Connection',
    desc: 'Meaningful encounters between high-achieving professionals, entrepreneurs, and creatives who shape the city.',
    image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '03',
    icon: '◈',
    title: 'Celebration',
    desc: 'Every Thursday is a toast to success, ambition, and the audacity to live life at the highest level.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    text: "Thirsty Thursday isn't just an event  it's a room where the right people happen to be in the same place at the right time. I've closed two deals at these gatherings.",
    name: 'Innocent',
    role: 'CEO, Pinnacle Capital Lagos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
  {
    text: "As someone who travels frequently, I always make sure I'm in Lagos on the last Thursday of the month. The atmosphere is unmatched — sophisticated without being stiff.",
    name: 'Kemi',
    role: 'Creative Director, Brand Studio NG',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
  {
    text: "The calibre of people in that room is remarkable. It's become my favourite networking event in the city — effortless, elegant, and genuinely inspiring.",
    name: 'Ola vinyl',
    role: 'Founder, TechBridge Africa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    stars: 5,
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
]

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    const el = ref.current
    if (el) {
      el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const pageRef = useScrollAnimation()

  return (
    <div ref={pageRef}>

      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />

        <div className="hero__particles" aria-hidden>
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="hero__particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--duration': `${5 + Math.random() * 6}s`,
                '--delay': `${Math.random() * 4}s`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
              }}
            />
          ))}
        </div>

        <div className="container hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">Lagos Premium Nightlife Experience</span>
          </div>
          <h1 className="hero__title">
            Every Thursday<br />
            <em>Is a Statement.</em>
          </h1>
          <p className="hero__desc">
            A carefully curated monthly gathering for accomplished professionals, entrepreneurs,
            celebrities, and tastemakers, where class meets connection and success is celebrated
            in style.
          </p>
          <div className="hero__actions">
            <Link to="/events" className="btn btn-primary">
              Reserve Your Table
            </Link>
            <Link to="/about" className="btn btn-ghost">
              Discover Our Story
            </Link>
          </div>
        </div>

        <div className="hero__scroll" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-bar" />
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="stats">
        <div className="container">
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

      {/* ---- About Snippet ---- */}
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

            <div className="about-snippet__text-side fade-up" style={{ transitionDelay: '0.2s' }}>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">
                A New Kind of<br /><em>Thursday Culture</em>
              </h2>
              <div className="gold-divider" />
              <blockquote className="about-snippet__quote">
                "We didn't want another loud event. We wanted a room where people of substance
                could breathe, connect, and feel exactly where they belong."
              </blockquote>
              <p className="about-snippet__text">
                Thirsty Thursday was born from a simple observation, Lagos has countless nightlife
                options, but very few true sanctuaries for accomplished individuals who crave
                sophistication alongside their social life.
              </p>
              <p className="about-snippet__text">
                We built an environment where high-level professionals, entrepreneurs, creatives,
                and influencers come together monthly to unwind, elevate each other, and celebrate
                what they've built.
              </p>
              <Link to="/about" className="btn btn-outline">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Three Pillars ---- */}
      <section className="pillars">
        <div className="container container--wide">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title">Built on Three Pillars</h2>
          </div>
          <div className="pillars__grid">
            {pillars.map(({ number, icon, title, desc, image }) => (
              <div key={title} className="pillar">
                <div
                  className="pillar__bg"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="pillar__overlay" />
                <span className="pillar__number">{number}</span>
                <div className="pillar__content">
                  <span className="pillar__icon">{icon}</span>
                  <h3 className="pillar__title">{title}</h3>
                  <p className="pillar__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Upcoming Event ---- */}
      <section className="upcoming">
        <div className="container">
          <div className="upcoming__grid">
            <div className="fade-up">
              <div className="upcoming__image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80"
                  alt="Upcoming Thirsty Thursday"
                  className="upcoming__image"
                />
                <div className="upcoming__date-badge">
                  <span className="upcoming__date-day">29</span>
                  <span className="upcoming__date-month">May</span>
                </div>
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <span className="section-tag">Next Edition</span>
              <h2 className="section-title">
                Thirsty Thursday<br /><em>May Edition</em>
              </h2>
              <div className="gold-divider" />

              <div className="upcoming__meta">
                <div className="upcoming__meta-item">
                  <span className="upcoming__meta-icon">📅</span>
                  <div>
                    <p className="upcoming__meta-label">Date</p>
                    <p className="upcoming__meta-value">Thursday, 29th May 2025</p>
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
                    <p className="upcoming__meta-value">The Latitude Bar & Lounge, V.I Lagos</p>
                  </div>
                </div>
                <div className="upcoming__meta-item">
                  <span className="upcoming__meta-icon">🎟</span>
                  <div>
                    <p className="upcoming__meta-label">Dress Code</p>
                    <p className="upcoming__meta-value">Smart Elegant / All Black</p>
                  </div>
                </div>
              </div>

              <div className="upcoming__actions">
                <Link to="/events" className="btn btn-primary">
                  Reserve a Spot
                </Link>
                <Link to="/events" className="btn btn-outline">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Guest Experiences</span>
            <h2 className="section-title">What Our Guests Say</h2>
            <p className="section-subtitle">
              Hear from the accomplished individuals who make every Thirsty Thursday extraordinary.
            </p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map(({ text, name, role, avatar, stars }) => (
              <div key={name} className="testimonial fade-up">
                <div className="testimonial__stars">{'★'.repeat(stars)}</div>
                <p className="testimonial__text">{text}</p>
                <div className="testimonial__author">
                  <img src={avatar} alt={name} className="testimonial__avatar" />
                  <div>
                    <p className="testimonial__name">{name}</p>
                    <p className="testimonial__role">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Gallery Preview ---- */}
      <section className="gallery-preview">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Visual Stories</span>
            <h2 className="section-title">Moments Worth Remembering</h2>
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
            <Link to="/gallery" className="btn btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ---- CTA Banner ---- */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="cta-banner__overlay" />
        <div className="container">
          <div className="cta-banner__content fade-up">
            <span className="cta-banner__tag">Exclusive Access</span>
            <h2 className="cta-banner__title">
              Ready to Join<br /><em>Lagos' Finest?</em>
            </h2>
            <p className="cta-banner__subtitle">
              Secure your place at the table. Limited spots are available each month to
              preserve the intimacy and quality of the experience.
            </p>
            <div className="cta-banner__actions">
              <Link to="/events" className="btn btn-primary">
                Reserve Your Spot
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
