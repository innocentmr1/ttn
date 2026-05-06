import { useEffect, useRef, useState } from 'react'
import '../styles/gallery.css'

const categories = ['All', 'VIP Moments', 'Cocktails', 'Networking', 'Performances', 'Atmosphere']

const allPhotos = [
  { src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80', cat: 'Atmosphere', caption: 'Setting the Tone', edition: 'April 2025' },
  { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80', cat: 'Performances', caption: 'Live DJ Set', edition: 'March 2025' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=700&q=80', cat: 'Cocktails', caption: 'Signature Mixology', edition: 'April 2025' },
  { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80', cat: 'VIP Moments', caption: 'VIP Experience', edition: 'February 2025' },
  { src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=700&q=80', cat: 'Networking', caption: 'Connections Made', edition: 'March 2025' },
  { src: 'https://images.unsplash.com/photo-1528495612343-9ca9f755d5e2?auto=format&fit=crop&w=700&q=80', cat: 'Cocktails', caption: 'Premium Pours', edition: 'January 2025' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80', cat: 'Atmosphere', caption: 'Electric Energy', edition: 'December 2024' },
  { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80', cat: 'VIP Moments', caption: 'Exclusive Access', edition: 'November 2024' },
  { src: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=700&q=80', cat: 'Cocktails', caption: 'Crafted Cocktails', edition: 'February 2025' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&q=80', cat: 'Networking', caption: 'High-Level Conversations', edition: 'April 2025' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80', cat: 'Atmosphere', caption: 'Luxury in Motion', edition: 'December 2024' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80', cat: 'Networking', caption: 'Tastemakers Gathering', edition: 'March 2025' },
  { src: 'https://images.unsplash.com/photo-1559329373-5f3f12900b77?auto=format&fit=crop&w=700&q=80', cat: 'Performances', caption: 'Live Entertainment', edition: 'January 2025' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80', cat: 'Performances', caption: 'Stage Presence', edition: 'November 2024' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80', cat: 'VIP Moments', caption: 'Behind the Velvet Rope', edition: 'April 2025' },
]

export default function Gallery() {
  const pageRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeFilter === 'All'
    ? allPhotos
    : allPhotos.filter(p => p.cat === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const el = pageRef.current
    if (el) el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % filtered.length)
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, filtered.length])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <div ref={pageRef}>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <span className="section-tag">Visual Diary</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              A Glimpse of<br /><em>Our World</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="gallery-stats">
        <div className="gallery-stats__inner">
          <div className="gallery-stat">
            <span className="gallery-stat__number">36+</span>
            <span className="gallery-stat__label">Events Captured</span>
          </div>
          <div className="gallery-stat">
            <span className="gallery-stat__number">2K+</span>
            <span className="gallery-stat__label">Photos in Archive</span>
          </div>
          <div className="gallery-stat">
            <span className="gallery-stat__number">500+</span>
            <span className="gallery-stat__label">Faces & Stories</span>
          </div>
          <div className="gallery-stat">
            <span className="gallery-stat__number">3</span>
            <span className="gallery-stat__label">Years Documented</span>
          </div>
        </div>
      </div>

      {/* ---- Gallery ---- */}
      <section className="gallery-section">
        <div className="container container--wide">

          <div className="section-header fade-up">
            <span className="section-tag">Browse by Category</span>
            <h2 className="section-title">Our Finest Moments</h2>
          </div>

          <div className="gallery-filters fade-up">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((photo, i) => (
              <div
                key={`${photo.src}-${i}`}
                className="gallery-item fade-up"
                style={{ transitionDelay: `${(i % 9) * 0.07}s` }}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={photo.src} alt={photo.caption} className="gallery-item__img" loading="lazy" />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__caption">{photo.cat}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {currentPhoto && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox__close" onClick={() => setLightboxIndex(null)}>×</button>
          <button
            className="lightbox__prev"
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length) }}
          >‹</button>
          <button
            className="lightbox__next"
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % filtered.length) }}
          >›</button>

          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={currentPhoto.src} alt={currentPhoto.caption} className="lightbox__img" />
            <div className="lightbox__caption">
              <span className="lightbox__caption-tag">{currentPhoto.cat}</span>
              <span className="lightbox__caption-text">
                {currentPhoto.caption} &mdash; {currentPhoto.edition}
              </span>
            </div>
          </div>

          <span className="lightbox__counter">
            {lightboxIndex + 1} / {filtered.length}
          </span>
        </div>
      )}

    </div>
  )
}
