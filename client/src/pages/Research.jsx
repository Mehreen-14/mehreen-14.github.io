import { motion } from 'framer-motion'
import './PageStyles.css'

const researchData = [
  // {
  //   type: "Undergrad Thesis",
  //   title: "WiFi Received Signal Strength (RSS) Based Automated Attendance System",
  //   period: "November 2023 – March 2025",
  //   description: "Designed an attendance system leveraging WiFi signal data; applied k-NN classification to detect presence.",
  //   color: "lavender"
  // }
]

const publicationsData = [
  {
    authors: "Sidratul Muntaha Khan, Mehreen Tabassum Maliha, Md Shahedul Haque, and Ashikur Rahman",
    title: "WiFi Received Signal Strength (RSS) Based Automated Attendance System for Educational Institutions",
    venue: "In Proceedings of the 11th International Conference on Networking, Systems, and Security",
    date: "03 January, 2025",
    type: "Conference",
    link: "https://dl.acm.org/doi/10.1145/3704522.3704523",
    color: "coral"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

function Research() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner" variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon lavender">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
              <path d="M11 8v6M8 11h6"/>
            </svg>
          </div>
          <h1>Research</h1>
          <p>Academic research and publications</p>
        </motion.header>

        {researchData.length > 0 && (
          <motion.section className="section" variants={itemVariants}>
            <h2 className="section-title">Research Experience</h2>
            <div className="research-grid">
              {researchData.map((item, index) => (
                <article key={index} className={`research-card research-card--${item.color}`}>
                  <div className={`research-icon research-icon--${item.color}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </div>
                  <div className="research-content">
                    <div className="research-header">
                      <span className={`research-type research-type--${item.color}`}>{item.type}</span>
                      <span className={`research-period research-period--${item.color}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {item.period}
                      </span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="research-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">Publications</h2>
          <div className="publications-grid">
            {publicationsData.map((pub, index) => (
              <a 
                key={index} 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`publication-card publication-card--${pub.color}`}
              >
                <div className="publication-badge">
                  <span className={`pub-type pub-type--${pub.color}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <path d="M14 2v6h6"/>
                    </svg>
                    {pub.type}
                  </span>
                  <span className="pub-date">{pub.date}</span>
                </div>
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <p className="publication-venue">{pub.venue}</p>
                <div className={`publication-link publication-link--${pub.color}`}>
                  <span>View Publication</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}

export default Research
