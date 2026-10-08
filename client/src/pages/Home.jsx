import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import { newsData } from './newsData'

const RESUME_URL = "/resume/mtm_resume.pdf"
const GITHUB_URL = "https://github.com/Mehreen-14"
const LINKEDIN_URL = "https://www.linkedin.com/in/mehreentabassum14/"

// Same "About Me" text as the Education & Skills page
const ABOUT_TEXT = `Hi! I'm a Software Engineer at OPlusDojo. I graduated from BUET with undergraduate degree in Computer Science & Engineering (CSE), and since then I've been diving deep into full-stack development—building web apps, exploring cloud platforms, and always learning something new. I enjoy the entire journey from writing clean code to seeing users interact with what I've built. Outside of coding, I've had the chance to lead teams and organize events, which taught me just as much about collaboration and communication as any technical skill. When I'm not at my keyboard, you'll find me painting, working on craft project, or out capturing moments through photography. I'm curious, creative, and always looking for the next challenge to grow.`

const highlights = ["React", "Node.js", "Python", "AWS", "Docker"]
const tickerItems = newsData.slice(0, 3)

// Top navbar links. Add or remove links here.
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/leadership", label: "Leadership" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

function Home() {
  const [tickerIndex, setTickerIndex] = useState(0)

  // Generate the floating dots once so they don't jump on re-render
  const dots = useMemo(
    () =>
      [...Array(26)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${15 + Math.random() * 20}s`
      })),
    []
  )

  // Rotate the latest-news strip (skipped when the user prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setTickerIndex((i) => (i + 1) % tickerItems.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const latest = tickerItems[tickerIndex]

  return (
    <div className="home">
      {/* Decorative background */}
      <div className="home-bg" aria-hidden="true">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="floating-dots">
          {dots.map((style, i) => (
            <div key={i} className="dot" style={style}></div>
          ))}
        </div>
      </div>

      {/* Long top navbar */}
      <motion.nav
        className="home-nav"
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="home-nav-brand" aria-label="Home">
          <span className="logo-name">Mehreen</span>
        </Link>
        <div className="home-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`home-nav-link${link.to === '/' ? ' is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="home-nav-cta"
        >
          Resume
        </a>
      </motion.nav>

      {/* Main split: photo left, About Me right */}
      <motion.main
        className="home-split"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT: image */}
        <motion.section className="home-photo-col" variants={fromLeft} aria-label="Profile photo">
          <div className="photo-frame">
            {/* <div className="photo-ring" aria-hidden="true"></div> */}
            <div className="photo-glow" aria-hidden="true"></div>
            <div className="photo-img">
              <img src="/images/profile.jpg" alt="Mehreen Tabassum Maliha" />
            </div>
            {/* <div className="photo-badge photo-badge--top">
              <span className="status-dot" aria-hidden="true"></span>
              Currently at OPlusDojo
            </div> */}
            <div className="photo-badge photo-badge--bottom">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Dhaka, Bangladesh
            </div>
          </div>
        </motion.section>

        {/* RIGHT: about me */}
        <motion.section className="home-about-col" variants={itemVariants} aria-label="About me">
          <p className="about-eyebrow">Hello, I'm</p>
          <h1 className="about-name">Mehreen Tabassum Maliha</h1>
          <p className="about-role">Software Engineer</p>

          <div className="about-panel">
            <h2 className="about-title">About Me</h2>
            <p className="about-body">{ABOUT_TEXT}</p>
            {/* <div className="about-chips" aria-label="Core skills">
              {highlights.map((s) => (
                <span key={s} className="about-chip">{s}</span>
              ))}
            </div> */}
          </div>

          {/* <div className="about-actions">
            <Link to="/projects" className="cta-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
            <Link to="/contact" className="cta-secondary">Contact Me</Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary cta-icon"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary cta-icon"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div> */}

          {/* Latest news strip */}
          {/* <Link to="/news" className="news-strip" aria-label="Open News page">
            <span className="news-strip-tag">Latest</span>
            <span className="news-strip-body" aria-live="off">
              <AnimatePresence mode="wait">
                <motion.span
                  key={latest.date}
                  className="news-strip-item"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="news-strip-date">{latest.label}</span>
                  <span className="news-strip-title">{latest.title}</span>
                </motion.span>
              </AnimatePresence>
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </Link> */}
        </motion.section>
      </motion.main>

      <footer className="home-footer">
        <p>© 2026 Mehreen Tabassum Maliha. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
