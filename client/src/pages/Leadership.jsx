import { motion } from 'framer-motion'
import './PageStyles.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const leadershipData = [
  { 
    organization: "Bangladesh Women in Computer Science and Engineering (BWCSE)", 
    totalDuration: "3 yrs",
    location: "Dhaka, Bangladesh",
    color: "coral",
    roles: [
      { 
        role: "President", 
        period: "2024 – Feb 2025",
        duration: "~1 yr"
      },
      { 
        role: "General Secretary", 
        period: "2023 – 2024",
        duration: "1 yr"
      },
      { 
        role: "Content Creator", 
        period: "2022 – 2023",
        duration: "1 yr"
      }
    ]
  },
  { 
    organization: "IEEE Computer Society BUET Student Branch Chapter", 
    totalDuration: "1 yr 10 mos",
    location: "Dhaka, Bangladesh",
    color: "sky",
    roles: [
      { 
        role: "Design Committee Chair", 
        period: "May 2024 – Feb 2025",
        duration: "10 mos"
      },
      { 
        role: "Program Committee Coordinator", 
        period: "2023 – 2024",
        duration: "1 yr"
      }
    ]
  },
  { 
    organization: "BUET Self Defense Club", 
    totalDuration: "8 mos",
    location: "Dhaka, Bangladesh",
    color: "lavender",
    roles: [
      { 
        role: "Vice President", 
        period: "July 2024 – Feb 2025",
        duration: "8 mos"
      }
    ]
  },
  { 
    organization: "BUET Origami Club", 
    totalDuration: "8 mos",
    location: "Dhaka, Bangladesh",
    color: "cream",
    roles: [
      { 
        role: "Vice President", 
        period: "July 2024 – Feb 2025",
        duration: "8 mos"
      }
    ]
  },
  { 
    organization: "Charcoal - BUET Artista Society", 
    totalDuration: "5 mos",
    location: "Dhaka, Bangladesh",
    color: "coral",
    roles: [
      { 
        role: "Associate General Secretary", 
        period: "Oct 2024 – Feb 2025",
        duration: "5 mos"
      }
    ]
  }
]

function Leadership() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner" variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon lavender">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <h1>Leadership & Volunteering</h1>
          <p>Community involvement and organizational roles</p>
        </motion.header>

        <motion.section className="section" variants={itemVariants}>
          <div className="leadership-grid">
            {leadershipData.map((item, index) => (
              <motion.div 
                key={index} 
                className={`leadership-card leadership-card--${item.color}`}
                variants={itemVariants}
              >
                {/* Organization Header */}
                <div className="leadership-org-header">
                  <div className={`leadership-org-icon leadership-icon--${item.color}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8"/>
                      <path d="M12 17v4"/>
                    </svg>
                  </div>
                  <div className="leadership-org-info">
                    <h3 className="leadership-org">{item.organization}</h3>
                    <p className="leadership-org-meta">
                      <span>{item.totalDuration}</span>
                      <span className="meta-dot">•</span>
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                {/* Roles List */}
                <div className="leadership-roles">
                  {item.roles.map((roleItem, roleIndex) => (
                    <div key={roleIndex} className="leadership-role-entry">
                      <div className="role-timeline">
                        <div className={`role-dot role-dot--${item.color}`}></div>
                        {roleIndex < item.roles.length - 1 && <div className="role-line"></div>}
                      </div>
                      <div className="role-content">
                        <h4 className="role-title">{roleItem.role}</h4>
                        <p className="role-period">{roleItem.period} · {roleItem.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </motion.div>
  )
}

export default Leadership
