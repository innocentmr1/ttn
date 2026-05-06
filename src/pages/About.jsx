import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/about.css'

const values = [
  { icon: '✦', title: 'Prestige', text: 'We curate experiences that reflect the status and ambition of our guests at every touchpoint.' },
  { icon: '⬡', title: 'Integrity', text: 'Transparent, honest, and authentic — we stand by our commitment to genuine quality.' },
  { icon: '◈', title: 'Excellence', text: 'From the venue selection to the last pour, we settle for nothing less than extraordinary.' },
  { icon: '❋', title: 'Community', text: 'Building a network of impact-driven individuals who elevate one another beyond the room.' },
]

const team = [
  {
    name: 'Damilola Adesanya',
    role: 'Founder & Creative Director',
    bio: 'Serial entrepreneur and culture architect with a passion for building spaces that matter. Lagos born, globally inspired.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Ifeoma Chukwu',
    role: 'Head of Experiences',
    bio: 'A decade of event curation across West Africa. She ensures every Thirsty Thursday feels like the first and best time.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Kayode Balogun',
    role: 'Brand & Partnerships Director',
    bio: 'Former advertising executive turned nightlife strategist. The mind behind Thirsty Thursday\'s iconic brand presence.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
  },
]

const features = [
  { icon: '🥂', title: 'Premium Open Bar', text: 'Carefully selected spirits, wines, and cocktails — crafted by Lagos\' finest mixologists.' },
  { icon: '🎵', title: 'Curated Soundscapes', text: 'Live sets and DJ performances selected to set the perfect ambient tone for the evening.' },
  { icon: '🤝', title: 'Structured Networking', text: 'Guided conversation moments and introductions to meaningful connections in your field.' },
  { icon: '🍽️', title: 'Gourmet Canapés', text: 'An evolving menu of fine bites and signature dishes from acclaimed Lagos chefs.' },
]

const partners = [
  'Hennessy', 'Glenfiddich', 'Moët & Chandon', 'Lagos Business School',
  'The Marriott', 'Sterling Bank', 'ThisDay Style',
]

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function About() {
  const pageRef = useScrollAnimation()

  return (
    <div ref={pageRef}>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <span className="section-tag">Who We Are</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              More Than a Night Out.<br /><em>A Movement.</em>
            </h1>
          </div>
        </div>
      </div>

      {/* ---- Story ---- */}
      <section className="story section">
        <div className="container">
          <div className="story__grid">
            <div className="fade-up">
              <span className="section-tag">Our Beginning</span>
              <h2 className="section-title">How Thirsty Thursday<br /><em>Was Born</em></h2>
              <div className="gold-divider" />
              <div className="story__text">
                <p>
                  In 2021, a group of Lagos entrepreneurs sat around a dinner table and asked themselves
                  a simple question: why doesn't Lagos have a premium Thursday experience designed
                  specifically for people who've achieved something worth celebrating?
                </p>
                <p>
                  The existing nightlife scene was vibrant — but rarely refined. Loud venues, unvetted
                  crowds, and an atmosphere that prioritised volume over value. They decided to change that.
                </p>
                <p>
                  Thirsty Thursday launched its first edition in November 2021 with 80 carefully invited guests
                  at a private rooftop in Victoria Island. Word spread through Lekki, Ikoyi, and the
                  broader Lagos business community. By the third edition, there was a waiting list.
                </p>
                <p>
                  Three years later, it has grown into Lagos' most recognised monthly premium gathering —
                  a brand that stands for class, connection, and the celebration of success.
                </p>
              </div>
            </div>
            <div className="story__image-stack fade-up" style={{ transitionDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1528495612343-9ca9f755d5e2?auto=format&fit=crop&w=800&q=80"
                alt="The beginning"
                className="story__img story__img--a"
              />
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
                alt="Premium cocktails"
                className="story__img story__img--b"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Mission & Vision ---- */}
      <section className="mission section--dark">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Purpose Driven</span>
            <h2 className="section-title">Our Mission &amp; Vision</h2>
          </div>
          <div className="mission__grid">
            <div className="mission__card fade-up">
              <span className="mission__card-icon">🎯</span>
              <h3 className="mission__card-title">Our Mission</h3>
              <p className="mission__card-text">
                To create a monthly premium nightlife experience in Lagos that genuinely
                reflects the lifestyle, values, and ambitions of accomplished individuals —
                offering an environment where class is the baseline and connection is the reward.
                We curate every detail so our guests can simply show up and belong.
              </p>
            </div>
            <div className="mission__card fade-up" style={{ transitionDelay: '0.15s' }}>
              <span className="mission__card-icon">🔭</span>
              <h3 className="mission__card-title">Our Vision</h3>
              <p className="mission__card-text">
                To build Thirsty Thursday into one of West Africa's most recognisable premium
                lifestyle brands — a name synonymous with sophistication, social prestige, and
                meaningful connection. We see a future where every major Nigerian city has its
                own Thirsty Thursday chapter, united by one uncompromising standard of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- The Experience ---- */}
      <section className="experience section">
        <div className="container">
          <div className="experience__grid">
            <div className="fade-up">
              <span className="section-tag">What to Expect</span>
              <h2 className="section-title">An Evening<br /><em>Unlike Any Other</em></h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Every element of Thirsty Thursday is intentional. From the first welcome drink
                to the closing toast, the experience is designed to exceed your expectations.
              </p>
              <div className="experience__features">
                {features.map(({ icon, title, text }) => (
                  <div key={title} className="experience__feature">
                    <div className="experience__feature-icon-wrap">{icon}</div>
                    <div>
                      <p className="experience__feature-title">{title}</p>
                      <p className="experience__feature-text">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80"
                alt="The Thirsty Thursday experience"
                className="experience__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="values section--darker">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide every decision we make, every venue we choose, and every person we invite.
            </p>
          </div>
          <div className="values__grid">
            {values.map(({ icon, title, text }, i) => (
              <div key={title} className="value-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="value-card__icon">{icon}</span>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Team ---- */}
      <section className="team section">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">The People Behind It</span>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">
              Passionate curators who live and breathe the Thirsty Thursday ethos every single day.
            </p>
          </div>
          <div className="team__grid">
            {team.map(({ name, role, bio, image }, i) => (
              <div key={name} className="team-card fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                <img src={image} alt={name} className="team-card__img" />
                <div className="team-card__overlay">
                  <p className="team-card__name">{name}</p>
                  <p className="team-card__role">{role}</p>
                  <p className="team-card__bio">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Partners ---- */}
      <section className="partners section--dark">
        <div className="container">
          <div className="section-header section-header--center fade-up">
            <span className="section-tag">Our Partners</span>
            <h2 className="section-title">Backed by the Best</h2>
          </div>
          <div className="partners__logos fade-up">
            {partners.map((name) => (
              <span key={name} className="partners__logo">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section style={{ background: 'var(--dark-2)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="fade-up">
            <span className="section-tag">Join the Experience</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Ready to Be Part of<br /><em>Something Remarkable?</em>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              Limited spots available each month. Apply to attend or reach out to learn about partnership opportunities.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/events" className="btn btn-primary">View Upcoming Events</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
