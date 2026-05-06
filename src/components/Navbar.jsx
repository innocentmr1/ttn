import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <span className="navbar__logo-main">Thirsty Thursday</span>
            <span className="navbar__logo-sub">Naija &mdash; Lagos</span>
          </Link>

          <ul className="navbar__links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/events" className="btn btn-primary navbar__cta" style={{ display: 'none' }}>
            Get Tickets
          </Link>

          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? ' active' : ''}`
            }
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
          >
            {label}
          </NavLink>
        ))}
        <div className="navbar__mobile-divider" />
        <Link to="/events" className="btn btn-primary navbar__mobile-cta" onClick={closeMenu}>
          Reserve Your Spot
        </Link>
      </div>
    </>
  )
}
