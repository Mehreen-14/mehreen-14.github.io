import { motion } from 'framer-motion'
import './PageStyles.css'

const experienceData = [
  {
    company: "OPlusDojo",
    companyUrl: "https://www.oplusdojo.com/",
    role: "Software Engineer",
    project: "AI-powered social services case management platform",
    period: "October 2025 – Present",
    color: "coral",
    icon: "code",
    highlights: [
      "Built a multi-tenant web application for social services case management featuring real-time session tracking, offline support, and AI-driven resource recommendations"
    ],
    techStack: ["TypeScript", "React", "Python", "PostgreSQL", "Pinecone", "AWS"]
  },
  {
    company: "Nifty Coders",
    companyUrl: "https://www.niftycoders.com/",
    role: "Trainee Engineer",
    project: "Training Program",
    period: "August 2025 – September 2025",
    color: "sky",
    icon: "learn",
    highlights: [
      "Gained hands-on experience with modern development tools and frameworks",
      "Worked with project management tools and followed agile development practices"
    ],
    techStack: ["C#", ".NET", "Angular", "Flutter", "Docker", "Kubernetes"]
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

function Experience() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner" variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon sky">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
            </svg>
          </div>
          <h1>Experience</h1>
          <p>Professional journey</p>
        </motion.header>

        <motion.section className="section" variants={itemVariants}>
          {/* <h2 className="section-title">Work Experience</h2> */}
          <div className="exp-grid">
            {experienceData.map((exp, index) => (
              <article key={index} className={`exp-card exp-card--${exp.color}`}>
                <div className={`exp-icon exp-icon--${exp.color}`}>
                  {exp.icon === "code" && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  )}
                  {exp.icon === "learn" && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  )}
                </div>
                <div className="exp-content">
                  <div className="exp-header">
                    <div className="exp-title">
                      <h3>{exp.role}</h3>
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`exp-company exp-company--${exp.color}`}
                      >
                        {exp.company}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </div>
                    <span className={`exp-period exp-period--${exp.color}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {exp.period}
                    </span>
                  </div>
                  <p className="exp-project">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    {exp.project}
                  </p>
                  <ul className="exp-highlights">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className={`exp-highlight exp-highlight--${exp.color}`}>
                        <span className="highlight-dot"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    <span className="exp-tech-label">Tech Stack</span>
                    <div className="exp-tech-list">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className={`exp-tech-tag exp-tech-tag--${exp.color}`}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}

export default Experience
