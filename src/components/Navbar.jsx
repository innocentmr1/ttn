import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'
import logoSrc from '../assets/logo.jpeg'

/* Strip white / near-white pixels via canvas → transparent PNG */
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

const navLinks = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About' },
  { to: '/events',  label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const transparentLogo           = useTransparentImage(logoSrc)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

          <Link to="/" className="navbar__logo-link" onClick={closeMenu}>
            {transparentLogo
              ? <img src={transparentLogo} alt="Thirsty Thursday Naija" className="navbar__logo-img" />
              : <span className="navbar__logo-fallback">Thirsty Thursday</span>
            }
          </Link>

          <ul className="navbar__links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/events" className="btn btn-primary navbar__cta">
            Reserve a Table
          </Link>

          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {transparentLogo && (
          <img src={transparentLogo} alt="Thirsty Thursday Naija" className="navbar__mobile-logo" />
        )}
        {navLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `navbar__mobile-link${isActive ? ' active' : ''}`}
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
          >
            {label}
          </NavLink>
        ))}
        <div className="navbar__mobile-divider" />
        <Link to="/events" className="btn btn-primary navbar__mobile-cta" onClick={closeMenu}>
          Reserve a Table
        </Link>
      </div>
    </>
  )
}
