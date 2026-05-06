import { useEffect, useRef, useState } from 'react'
import '../styles/contact.css'

const faqs = [
  {
    q: 'How do I get tickets to Thirsty Thursday?',
    a: 'You can reserve your spot directly on our Events page. Select your preferred ticket package, fill in your details, and our team will confirm your booking within 24 hours.',
  },
  {
    q: 'Is there a dress code?',
    a: 'Yes. Thirsty Thursday enforces a strict dress code — Smart Elegant or All Black, depending on the edition. Guests who do not meet the dress code will be refused entry without a refund.',
  },
  {
    q: 'How many people attend each event?',
    a: 'We cap attendance at 250–350 guests per edition, depending on the venue. This ensures an intimate, high-quality experience for everyone in the room.',
  },
  {
    q: 'Can I bring a plus-one or a group?',
    a: 'Absolutely. Each guest must purchase their own ticket. For groups of 8 or more, we recommend our Table Package for the best experience.',
  },
  {
    q: 'Are there partnership or sponsorship opportunities?',
    a: 'Yes. We are always open to brand partnerships, venue collaborations, and sponsorship discussions. Please use the contact form and select "Partnership Enquiry" to get started.',
  },
  {
    q: 'What time does the event typically end?',
    a: 'Thirsty Thursday officially runs from 9 PM until dawn (typically 3–4 AM). Entry is open until midnight, after which the doors close.',
  },
  {
    q: 'Is Thirsty Thursday only in Lagos?',
    a: 'Currently, yes — we operate exclusively in Lagos. However, expansion to Abuja, Port Harcourt, and beyond is in our roadmap for 2025–2026.',
  },
  {
    q: 'Can I get a refund if I cannot attend?',
    a: 'Ticket purchases are non-refundable. However, you may transfer your ticket to another guest up to 48 hours before the event. Please contact us to arrange this.',
  },
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

export default function Contact() {
  const pageRef = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    subject: '', message: ''
  })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleFaq = (i) => {
    setOpenFaq(open => open === i ? null : i)
  }

  return (
    <div ref={pageRef}>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <span className="section-tag">Let's Connect</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Get In <em>Touch</em>
            </h1>
          </div>
        </div>
      </div>

      {/* ---- Contact Section ---- */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Info */}
            <div className="contact-info fade-up">
              <span className="section-tag">Reach Us</span>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
                We'd Love to<br /><em>Hear From You</em>
              </h2>
              <div className="gold-divider" />
              <p className="contact-info__text">
                Whether you're looking to attend an upcoming event, explore partnership opportunities,
                or simply want to learn more about what we do. our team is here for you.
              </p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">📍</div>
                  <div>
                    <p className="contact-info__label">Location</p>
                    <p className="contact-info__value">Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">✉️</div>
                  <div>
                    <p className="contact-info__label">Email</p>
                    <p className="contact-info__value">hello@thirstythursdaynaija.com<br />bookings@thirstythursdaynaija.com</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">📞</div>
                  <div>
                    <p className="contact-info__label">Phone / WhatsApp</p>
                    <p className="contact-info__value">+234 901 000 0000<br />+234 812 000 0000</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">📅</div>
                  <div>
                    <p className="contact-info__label">Office Hours</p>
                    <p className="contact-info__value">Mon – Fri: 9 AM – 6 PM WAT<br />Saturdays: 10 AM – 2 PM WAT</p>
                  </div>
                </div>
              </div>

              <div className="contact-info__social">
                <p className="contact-info__social-title">Follow Us</p>
                <div className="contact-info__social-links">
                  {['📸', '🐦', '👥', '🎵'].map((icon, i) => (
                    <a key={i} href="#" className="contact-info__social-link">{icon}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap fade-up" style={{ transitionDelay: '0.2s' }}>
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">🥂</div>
                  <h3 className="form-success__title">Message Received!</h3>
                  <p className="form-success__text">
                    Thank you for reaching out. Our team will get back to you within 24–48 hours.
                    We look forward to connecting with you.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="contact-form__title">Send a Message</h3>
                  <p className="contact-form__subtitle">All fields marked are required. We respond within 24–48 hours.</p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input
                          className="form-input"
                          type="text"
                          name="firstName"
                          placeholder="e.g. Damilola"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input
                          className="form-input"
                          type="text"
                          name="lastName"
                          placeholder="e.g. Adesanya"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          className="form-input"
                          type="tel"
                          name="phone"
                          placeholder="+234 800 000 0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject / Enquiry Type *</label>
                      <select
                        className="form-select"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option>Ticket & Reservation Enquiry</option>
                        <option>Partnership & Sponsorship</option>
                        <option>Press & Media</option>
                        <option>Venue & Vendor Collaboration</option>
                        <option>General Enquiry</option>
                        <option>VIP Table Booking</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary form-submit">
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ---- Map placeholder ---- */}
      <div className="map-section">
        <div className="map-placeholder">
          <div className="map-placeholder__inner">
            <div className="map-placeholder__icon">🗺️</div>
            <p className="map-placeholder__text">
              Victoria Island, Lagos — Our Home Base
            </p>
            <a
              href="https://www.google.com/maps/search/Victoria+Island+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* ---- FAQ ---- */}
      <section className="faq-section section--dark">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before attending your first Thirsty Thursday.
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`faq-item fade-up${openFaq === i ? ' open' : ''}`}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-question">
                  <span className="faq-question-text">{q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
