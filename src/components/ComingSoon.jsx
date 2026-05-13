import { Link } from 'react-router-dom'
import './ComingSoon.css'

export default function ComingSoon({ page }) {
  return (
    <div className="coming-soon">
      <div className="coming-soon__bg" />
      <div className="coming-soon__overlay" />
      <div className="coming-soon__content">
        <span className="coming-soon__tag">— {page} —</span>
        <h1 className="coming-soon__title">Coming Soon.</h1>
        <div className="coming-soon__divider" />
        <p className="coming-soon__text">
          We're putting the finishing touches on this page.<br />
          Check back soon.
        </p>
        <Link to="/" className="btn btn-primary coming-soon__cta">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
