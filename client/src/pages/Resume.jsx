import { motion } from 'framer-motion'
import './PageStyles.css'
import './Resume.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

function Resume() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner resume-page" variants={containerVariants} initial="hidden" animate="visible">
        
        {/* Screen Header */}
        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon cream">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
          </div>
          <h1>Resume</h1>
          <p>Download my professional resume</p>
        </motion.header>

        {/* Download Section */}
        <motion.div className="resume-download-section" variants={itemVariants}>
          <div className="resume-preview-card">
            <div className="resume-preview-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <path d="M14 2v6h6"/>
                <path d="M16 13H8M16 17H8M10 9H8"/>
              </svg>
            </div>
            <h3>Mehreen Tabassum Maliha</h3>
            <p>Software Engineer</p>
            <span className="file-type">PDF Document</span>
          </div>

          <div className="resume-actions">
            <a 
              href="/resume/mtm_resume.pdf" 
              download="Mehreen_Tabassum_Maliha_Resume.pdf"
              className="download-btn download-btn--primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a 
              href="/resume/mtm_resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn download-btn--secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View in Browser
            </a>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Resume
