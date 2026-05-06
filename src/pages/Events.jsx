import { useEffect, useRef, useState } from 'react'
import '../styles/events.css'

const upcomingEvents = [
  {
    id: 1,
    tag: 'Upcoming',
    date: 'Thursday, 29th May 2025',
    title: 'Thirsty Thursday — May Edition',
    desc: 'The May edition promises to be an unforgettable evening of elegance, music, and curated connections. We\'re partnering with Moët & Chandon for an exclusive champagne experience in the heart of Victoria Island.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80',
    time: '9:00 PM – Until Dawn',
    venue: 'The Latitude Bar & Lounge, V.I',
    dress: 'Smart Elegant / All Black',
    capacity: 'Limited to 300 Guests',
    price: '₦25,000',
    priceLabel: 'Regular Entry',
    soldOut: false,
  },
  {
    id: 2,
    tag: 'Coming Soon',
    date: 'Thursday, 26th June 2025',
    title: 'Thirsty Thursday — June Edition',
    desc: 'Mid-year celebrations call for an elevated experience. The June edition marks our summer spectacular — a curated night of indulgence featuring live jazz, premium spirits, and our most exclusive roster of tastemakers yet.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80',
    time: '9:00 PM – Until Dawn',
    venue: 'Eko Atlantic Skyline Terrace',
    dress: 'All White & Gold',
    capacity: 'Limited to 250 Guests',
    price: '₦35,000',
    priceLabel: 'Early Bird',
    soldOut: false,
  },
]

const packages = [
  {
    tier: 'Standard',
    name: 'Classic',
    price: '₦25K',
    period: 'per person',
    features: [
      'General admission',
      'Welcome cocktail on arrival',
      'Access to open bar',
      'Access to canapés & bites',
      'Access to all event areas',
      'Photo opportunity wall',
    ],
    featured: false,
  },
  {
    tier: 'Premium',
    name: 'VIP',
    price: '₦60K',
    period: 'per person',
    features: [
      'Priority entry (no queue)',
      'Dedicated VIP lounge access',
      'Premium bottle service',
      'Reserved seating',
      'Curated 5-course canapé menu',
      'Complimentary Moët on arrival',
      'Post-event networking session',
    ],
    featured: true,
  },
  {
    tier: 'Exclusive',
    name: 'Table',
    price: '₦350K',
    period: 'per table (8 guests)',
    features: [
      'Premium table (8 seats)',
      'Two bottles of choice spirits',
      'Dedicated table host',
      'Personalised menu card',
      'VIP entry for all guests',
      'Branded gift for each guest',
      'Early access from 8 PM',
    ],
    featured: false,
  },
]

const pastEvents = [
  {
    edition: 'April 2025',
    title: 'Spring Soirée Edition',
    guests: '310 Guests Attended',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=700&q=80',
  },
  {
    edition: 'March 2025',
    title: 'The Lagos Masters Edition',
    guests: '290 Guests Attended',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80',
  },
  {
    edition: 'February 2025',
    title: 'Red & Gold Valentine Edition',
    guests: '280 Guests Attended',
    image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=700&q=80',
  },
  {
    edition: 'January 2025',
    title: 'New Year Elevation Edition',
    guests: '300 Guests Attended',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80',
  },
  {
    edition: 'December 2024',
    title: 'Grand Finale Gala Edition',
    guests: '350 Guests Attended',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=700&q=80',
  },
  {
    edition: 'November 2024',
    title: 'The Executive Edition',
    guests: '265 Guests Attended',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80',
  },
]

const steps = [
  { n: '01', title: 'Browse Events', text: 'Check our upcoming events and choose the edition that works for you.' },
  { n: '02', title: 'Select Package', text: 'Pick a ticket tier that suits your preference — Classic, VIP, or Table.' },
  { n: '03', title: 'Complete Payment', text: 'Secure your spot with a quick and seamless payment process.' },
  { n: '04', title: 'Show Up in Style', text: 'Receive your e-ticket, dress to impress, and enjoy the experience.' },
]

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Events() {
  const pageRef = useScrollAnimation()
  const [ticketModal, setTicketModal] = useState(null)

  const handleReserve = (event) => {
    setTicketModal(event)
  }

  return (
    <div ref={pageRef}>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <span className="section-tag">This Month & Beyond</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Upcoming <em>Events</em>
            </h1>
          </div>
        </div>
      </div>

      {/* ---- Upcoming Events ---- */}
      <section className="events-list section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-tag">Don't Miss Out</span>
            <h2 className="section-title">Reserve Your Spot</h2>
            <p className="section-subtitle">
              Spots are limited each month to preserve the quality and intimacy of the experience.
              Book early to avoid disappointment.
            </p>
          </div>

          {upcomingEvents.map((event, i) => (
            <div key={event.id} className="event-card fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="event-card__image-wrap">
                <img src={event.image} alt={event.title} className="event-card__image" />
                <span className={`event-card__tag${event.soldOut ? ' event-card__sold-out' : ''}`}>
                  {event.soldOut ? 'Sold Out' : event.tag}
                </span>
              </div>
              <div className="event-card__body">
                <p className="event-card__date">
                  <span>📅</span> {event.date}
                </p>
                <h3 className="event-card__title">{event.title}</h3>
                <p className="event-card__desc">{event.desc}</p>
                <div className="event-card__meta">
                  <span className="event-card__meta-item"><span>🕘</span> {event.time}</span>
                  <span className="event-card__meta-item"><span>📍</span> {event.venue}</span>
                  <span className="event-card__meta-item"><span>👔</span> {event.dress}</span>
                  <span className="event-card__meta-item"><span>👥</span> {event.capacity}</span>
                </div>
                <div className="event-card__actions">
                  <div>
                    <p className="event-card__price">{event.price}</p>
                    <p className="event-card__price-label">{event.priceLabel}</p>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleReserve(event)}
                    disabled={event.soldOut}
                    style={event.soldOut ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                  >
                    {event.soldOut ? 'Sold Out' : 'Reserve a Spot'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Ticket Packages ---- */}
      <section className="packages section--dark">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Choose Your Experience</span>
            <h2 className="section-title">Ticket Packages</h2>
            <p className="section-subtitle">
              Every tier is designed to offer exceptional value, with each level unlocking a more
              personalised and elevated experience.
            </p>
          </div>
          <div className="packages__grid">
            {packages.map(({ tier, name, price, period, features, featured }, i) => (
              <div
                key={name}
                className={`package-card fade-up${featured ? ' package-card--featured' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <p className="package-card__tier">{tier}</p>
                <h3 className="package-card__name">{name}</h3>
                <p className="package-card__price">{price}</p>
                <p className="package-card__price-period">{period}</p>
                <div className="package-divider" />
                <ul className="package-card__features">
                  {features.map(f => (
                    <li key={f} className="package-card__feature">
                      <span className="package-card__feature-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn package-card__cta ${featured ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => alert(`Booking ${name} ticket... Payment integration coming soon!`)}
                >
                  Book {name} Ticket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How to Attend ---- */}
      <section className="how-to section">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Simple Process</span>
            <h2 className="section-title">How to Attend</h2>
          </div>
          <div className="how-to__steps">
            {steps.map(({ n, title, text }, i) => (
              <div key={n} className="how-to__step fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="how-to__step-number">{n}</div>
                <h4 className="how-to__step-title">{title}</h4>
                <p className="how-to__step-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Past Events ---- */}
      <section className="past-events section--darker">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-tag">In Retrospect</span>
            <h2 className="section-title">Past Editions</h2>
            <p className="section-subtitle">A glimpse at the moments that have defined Thirsty Thursday.</p>
          </div>
          <div className="past-events__grid">
            {pastEvents.map(({ edition, title, guests, image }, i) => (
              <div key={edition} className="past-event-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <img src={image} alt={title} className="past-event-card__img" />
                <div className="past-event-card__overlay">
                  <p className="past-event-card__edition">{edition}</p>
                  <p className="past-event-card__title">{title}</p>
                  <p className="past-event-card__guests">{guests}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Modal */}
      {ticketModal && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)', zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24
          }}
          onClick={() => setTicketModal(null)}
        >
          <div
            style={{
              background: 'var(--dark-2)', border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 16, padding: '48px 44px', maxWidth: 520, width: '100%',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setTicketModal(null)}
              style={{ position: 'absolute', top: 20, right: 20, color: 'var(--grey)', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
            >×</button>
            <span style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700 }}>
              Reserve Your Spot
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--white)', margin: '12px 0 28px' }}>
              {ticketModal.title}
            </h2>
            <p style={{ color: 'var(--grey-light)', fontSize: '0.9rem', marginBottom: 32, lineHeight: 1.7 }}>
              Select a ticket package and provide your details. Our team will confirm your reservation within 24 hours.
            </p>
            <select
              style={{ width: '100%', background: 'var(--dark-3)', border: '1px solid var(--dark-4)', borderRadius: 4, padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', marginBottom: 14, outline: 'none' }}
            >
              <option>Classic — ₦25,000</option>
              <option>VIP — ₦60,000</option>
              <option>Table (8 Guests) — ₦350,000</option>
            </select>
            <input
              type="text"
              placeholder="Full Name"
              style={{ width: '100%', background: 'var(--dark-3)', border: '1px solid var(--dark-4)', borderRadius: 4, padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', marginBottom: 14, outline: 'none' }}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={{ width: '100%', background: 'var(--dark-3)', border: '1px solid var(--dark-4)', borderRadius: 4, padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', marginBottom: 14, outline: 'none' }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              style={{ width: '100%', background: 'var(--dark-3)', border: '1px solid var(--dark-4)', borderRadius: 4, padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', marginBottom: 24, outline: 'none' }}
            />
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => { alert('Reservation received! We\'ll confirm within 24 hours.'); setTicketModal(null) }}
            >
              Confirm Reservation
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
