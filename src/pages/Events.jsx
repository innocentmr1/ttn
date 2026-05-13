import { useEffect, useRef, useState } from 'react'
import '../styles/events.css'
import ReserveModal from '../components/ReserveModal'

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

const pastEvents = [
  {
    edition: 'Edition 01',
    title: 'Inauguration Party',
    venue: 'Cubana Lagos',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    edition: 'Edition 02',
    title: 'Inauguration Party 2.0',
    venue: 'Vault Lagos',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80',
  },
  {
    edition: 'Edition 03',
    title: 'Thirsty Thursday',
    venue: 'Circa Lagos',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
  },
]

const steps = [
  { num: '01', title: 'Reserve a Spot', text: 'Submit your details through our website ahead of the event.' },
  { num: '02', title: 'Get Confirmed', text: 'Our team reviews and confirms your reservation via email or phone.' },
  { num: '03', title: 'Show Up in Style', text: 'Arrive dressed to impress — Smart Elegant or All Black.' },
  { num: '04', title: 'Enjoy the Night', text: 'Unwind, connect, and celebrate success in premium style.' },
]

export default function Events() {
  const pageRef = useScrollAnimation()
  const [showModal, setShowModal] = useState(false)

  return (
    <div ref={pageRef}>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1920&q=80')`,
        }} />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-tag fade-up">Events Diary</span>
          <h1 className="page-hero__title fade-up">Upcoming &amp;<br /><em>Past Events</em></h1>
          <div className="gold-divider fade-up" />
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="events-list">
        <div className="container">
          <div className="section-header fade-up" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Next Edition</span>
            <h2 className="section-title">What's coming up.</h2>
          </div>

          <div className="event-card fade-up">
            <div className="event-card__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80"
                alt="Thirsty Thursday Lagos Pre Launch"
                className="event-card__image"
              />
              <span className="event-card__tag">Upcoming</span>
            </div>
            <div className="event-card__body">
              <div className="event-card__date">
                <span>📅</span> Thursday, 4th June 2026
              </div>
              <h3 className="event-card__title">Thirsty Thursday<br />Lagos Pre Launch</h3>
              <p className="event-card__desc">
                The one that starts it all. Join us for an exclusive pre-launch edition of
                Thirsty Thursday, curated evening of premium hospitality, great music,
                and high-calibre company in the heart of Lagos.
              </p>
              <div className="event-card__meta">
                <div className="event-card__meta-item"><span>🕘</span> 9:00 PM — Until Dawn</div>
                <div className="event-card__meta-item"><span>📍</span> TBA — Victoria Island, Lagos</div>
                <div className="event-card__meta-item"><span>👔</span> Smart Elegant / All Black</div>
              </div>
              <div className="event-card__actions">
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                  Reserve a Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events section--dark">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Events Diary</span>
            <h2 className="section-title">Past events include.</h2>
          </div>
          <div className="past-events__grid">
            {pastEvents.map(({ edition, title, venue, image }, i) => (
              <div key={edition} className="past-event-card fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                <img src={image} alt={title} className="past-event-card__img" />
                <div className="past-event-card__overlay">
                  <p className="past-event-card__edition">{edition}</p>
                  <h3 className="past-event-card__title">{title}</h3>
                  <p className="past-event-card__guests">@ {venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Attend */}
      <section className="how-to">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">How to attend.</h2>
          </div>
          <div className="how-to__steps">
            {steps.map(({ num, title, text }, i) => (
              <div key={num} className="how-to__step fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="how-to__step-number">{num}</div>
                <h3 className="how-to__step-title">{title}</h3>
                <p className="how-to__step-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="cta-banner__overlay" />
        <div className="container">
          <div className="cta-banner__content fade-up">
            <span className="cta-banner__tag">See You There</span>
            <h2 className="cta-banner__title">
              Don't miss<br /><em>the next edition.</em>
            </h2>
            <p className="cta-banner__subtitle">
              Every First Thursday of the Month. Limited spots. Premium experience.
            </p>
            <div className="cta-banner__actions">
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>Reserve a Table</button>
            </div>
          </div>
        </div>
      </section>

      {showModal && <ReserveModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
