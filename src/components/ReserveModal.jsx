import { useState, useEffect } from 'react'
import './ReserveModal.css'

export default function ReserveModal({ onClose }) {
  const [form, setForm] = useState({ email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="reserve-modal__backdrop" onClick={onClose}>
      <div className="reserve-modal" onClick={e => e.stopPropagation()}>

        <button className="reserve-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {submitted ? (
          <div className="reserve-modal__success">
            <span className="reserve-modal__success-icon">🥂</span>
            <h3 className="reserve-modal__success-title">You're on the list.</h3>
            <p className="reserve-modal__success-text">
              We'll be in touch with all the details closer to the date.<br />
              See you on the 4th of June.
            </p>
            <button className="btn btn-outline reserve-modal__done" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="reserve-modal__tag">Thirsty Thursday Lagos Pre Launch</span>
            <h2 className="reserve-modal__title">Reserve a Table</h2>
            <p className="reserve-modal__date">Thursday, 4th June 2026</p>
            <div className="reserve-modal__divider" />
            <p className="reserve-modal__subtitle">
              Drop your details and we'll reach out with everything you need to know.
            </p>

            <form className="reserve-modal__form" onSubmit={handleSubmit}>
              <div className="reserve-modal__field">
                <label className="reserve-modal__label">Email Address</label>
                <input
                  className="reserve-modal__input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>

              <div className="reserve-modal__field">
                <label className="reserve-modal__label">Phone Number</label>
                <input
                  className="reserve-modal__input"
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary reserve-modal__submit">
                Reserve My Spot
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  )
}
