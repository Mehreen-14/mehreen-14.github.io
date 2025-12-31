import { motion } from 'framer-motion'
import './PageStyles.css'

const projects = [
  {
    name: "Bhromor-Chatbot",
    desc: "Built an AI-powered chatbot using React, Node.js, and OpenRouter API to deliver contextual responses via large language models.",
    tech: ["React.js", "Node.js", "OpenRouter API", "MongoDB"],
    github: "https://github.com/Mehreen-14/Bhromor-chatbot",
    color: "coral"
  },
  {
    name: "Multilabel Facial Expression & Intensity Detection",
    desc: "Developed a deep learning model (ML-CNN, ResNet50) to classify multiple emotions and estimate intensity from facial images.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
    github: "https://github.com/Mehreen-14/Multilabel-Facial-Expression-Recognition-and-Intensity-Estimation-from-Facial-Images-",
    color: "lavender"
  },
  {
    name: "DiaMate",
    desc: "Created a healthcare management mobile app enabling diabetic patients to track metrics, book appointments, and interact with doctors.",
    tech: ["Flutter", "JavaScript", "Firebase", "Azure", "Node.js"],
    github: "https://github.com/anion-hawk/DiaMate",
    color: "sky"
  },
  {
    name: "FoodXpress",
    desc: "Developed a food delivery platform supporting multi-restaurant orders, improving user flexibility and experience.",
    tech: ["ReactJS", "NodeJS", "PostgreSQL"],
    github: "https://github.com/Mehreen-14/FoodXpress",
    color: "cream"
  },
  {
    name: "FoodnPleasure",
    desc: "Developed a restaurant management system supporting four restaurants with online orders, reservations, and integrated special offers.",
    tech: ["HTML/CSS", "Bootstrap", "Oracle", "NodeJS"],
    github: "https://github.com/Mehreen-14/FoodnPleasure",
    color: "coral"
  },
  {
    name: "Harassment Complaint Management System",
    desc: "This complaint system helps victims inform admins about their sufferings and admins will try to solve these cases.",
    tech: ["Java", "JavaFX", "HTML/CSS", "Scene Builder"],
    github: "https://github.com/Mehreen-14/Harrassment-Complaint-Management-System",
    color: "lavender"
  },
  {
    name: "Football Manager",
    desc: "A JavaFX desktop application for managing football club players. Users can view detailed profiles of players from five clubs, including age, salary, and attributes. Features a marketplace for buying and selling players.",
    tech: ["Java", "JavaFX", "HTML/CSS", "Scene Builder"],
    github: "https://github.com/Mehreen-14/Football-Manager",
    color: "sky"
  },
  {
    name: "DX-Ball",
    desc: "A modern adaptation of the classic brick-breaking arcade game. Retains the core gameplay mechanics while incorporating improved visuals, additional features, and enhanced functionality.",
    tech: ["C", "C++", "OpenGL", "IGraphics"],
    github: "https://github.com/Mehreen-14/DX-Ball",
    color: "cream"
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

function Projects() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner" variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon cream">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <h1>Projects</h1>
          <p>Featured work and case studies</p>
        </motion.header>

        <motion.section className="section" variants={itemVariants}>
          {/* <h2 className="section-title">My Projects</h2> */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className={`project-card project-card--${project.color}`}>
                <div className="project-card-header">
                  <div className={`project-icon project-icon--${project.color}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`github-link github-link--${project.color}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.desc}</p>
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <span key={t} className={`project-tag project-tag--${project.color}`}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}

export default Projects
