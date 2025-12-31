import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.2 } 
    }
  }

  return (
    <div className="home">
      {/* Decorative elements */}
      <div className="home-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        {/* Animated dots */}
        <div className="floating-dots">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="dot" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}></div>
          ))}
        </div>
      </div>

      <motion.div 
        className="home-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Education */}
        <motion.button
          className="card education"
          variants={itemVariants}
          onClick={() => navigate('/education')}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="card-content">
            <h2>Education & Skills</h2>
            <p>Academic journey & expertise</p>
          </div>
          <div className="card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <div className="card-glow"></div>
        </motion.button>

        {/* Hero */}
        <motion.div className="card hero" variants={itemVariants}>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
          <div className="hero-inner">
            <div className="hero-image">
              <div className="image-ring"></div>
              <div className="image-placeholder">
                <img src="/images/profile.jpg" alt="Mehreen Tabassum Maliha" />
              </div>
            </div>
            <div className="hero-text">
              
              <h1 className="serif">Mehreen Tabassum Maliha</h1>
              <p className="hero-label">Software Engineer</p>
              <p className="hero-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.button
          className="card projects"
          variants={itemVariants}
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <div className="card-content">
            <h2>Projects</h2>
            <p>Technical creations</p>
          </div>
          <div className="card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <div className="card-glow"></div>
        </motion.button>

        {/* Contact */}
        <motion.button
          className="card contact"
          variants={itemVariants}
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </div>
          <div className="card-content">
            <h2>Contact</h2>
            <p>Get in touch</p>
          </div>
          <div className="card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <div className="card-glow"></div>
        </motion.button>

        {/* Research */}
        <motion.button
          className="card research"
          variants={itemVariants}
          onClick={() => navigate('/research')}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
              <path d="M11 8v6M8 11h6"/>
            </svg>
          </div>
          <div className="card-content">
            <h2>Research</h2>
            <p>Publications</p>
          </div>
          <div className="card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <div className="card-glow"></div>
        </motion.button>

        {/* Experience */}
        <motion.button
          className="card experience"
          variants={itemVariants}
          onClick={() => navigate('/experience')}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
            </svg>
          </div>
          <div className="card-content">
            <h2>Experience</h2>
            <p>Professional journey</p>
          </div>
          <div className="card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <div className="card-glow"></div>
        </motion.button>

        {/* Leadership */}
        <motion.button
          className="card leadership"
          variants={itemVariants}
          onClick={() => navigate('/leadership')}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <div className="card-content">
            <h2>Leadership</h2>
            <p>Volunteering roles</p>
          </div>
          <div className="card-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
          <div className="card-glow"></div>
        </motion.button>
      </motion.div>

      <footer className="home-footer">
        <p>© 2026 Mehreen Tabassum Maliha. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
