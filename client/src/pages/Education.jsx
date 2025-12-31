import { motion } from 'framer-motion'
import './PageStyles.css'

const educationData = [
  {
    institution: "Bangladesh University of Engineering and Technology",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering",
    gpa: "3.61 / 4.00",
    period: "Feb 2020 – March 2025",
    color: "coral",
    icon: "university"
  },
  {
    institution: "Barishal Govt. Women's College",
    location: "Barishal, Bangladesh",
    degree: "Higher Secondary School Certificate (HSC)",
    gpa: "5.00 / 5.00",
    period: "2017 – 2019",
    color: "sky",
    icon: "college"
  },
  {
    institution: "Barishal Govt. Girls' High School",
    location: "Barishal, Bangladesh",
    degree: "Secondary School Certificate (SSC)",
    gpa: "5.00 / 5.00",
    period: "2015 – 2017",
    color: "lavender",
    icon: "school"
  }
]

const skillsData = [
  {
    category: "Programming Languages",
    icon: "code",
    color: "coral",
    skills: ["C/C++", "C#", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Frameworks & Technologies",
    icon: "layers",
    color: "sky",
    skills: ["React", "Next.js", "Node.js", "Angular", ".NET", "Flutter", "MongoDB", "MySQL", "Oracle", "HTML/CSS", "Bootstrap", "Hugo"]
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    color: "cream",
    skills: ["AWS", "Docker", "Kubernetes", "Git"]
  },
  {
    category: "Tools & Software",
    icon: "tool",
    color: "lavender",
    skills: ["VS Code", "IntelliJ IDEA", "Adobe Illustrator", "Photoshop", "Navicat", "JavaFX"]
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

function Education() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner" variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon coral">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <h1>Education & Skills</h1>
          <p>Academic background and technical expertise</p>
        </motion.header>

        <motion.section className="section about-section" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p className="about-text">
              Hi! I'm a Software Engineer at OPlusDojo. 
              I graduated from BUET with undergraduate degree in Computer Science & Engineering (CSE), and since then I've been 
              diving deep into full-stack development—building web apps, exploring cloud platforms, and always 
              learning something new. I enjoy the entire journey from writing clean code to seeing users interact 
              with what I've built. Outside of coding, I've had the chance to lead teams and organize events, 
              which taught me just as much about collaboration and communication as any technical skill. When I'm 
              not at my keyboard, you'll find me painting, working on craft project, 
              or out capturing moments through photography. I'm curious, creative, and always 
              looking for the next challenge to grow.
            </p>
          </div>
        </motion.section>

        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">Education</h2>
          <div className="edu-grid">
            {educationData.map((edu, index) => (
              <article key={index} className={`edu-card edu-card--${edu.color}`}>
                <div className={`edu-icon edu-icon--${edu.color}`}>
                  {edu.icon === "university" && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  )}
                  {edu.icon === "college" && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 21h18"/>
                      <path d="M5 21V7l7-4 7 4v14"/>
                      <path d="M9 21v-6h6v6"/>
                      <path d="M10 9h4"/>
                      <path d="M10 13h4"/>
                    </svg>
                  )}
                  {edu.icon === "school" && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      <path d="M8 7h8"/>
                      <path d="M8 11h6"/>
                    </svg>
                  )}
                </div>
                <div className="edu-content">
                  <h3>{edu.institution}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {edu.location}
                  </p>
                </div>
                <div className="edu-meta">
                  <span className={`edu-period edu-period--${edu.color}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {edu.period}
                  </span>
                  <span className={`edu-gpa edu-gpa--${edu.color}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    GPA: {edu.gpa}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skillsData.map((group) => (
              <div key={group.category} className={`skill-group skill-group--${group.color}`}>
                <div className="skill-header">
                  <div className={`skill-icon skill-icon--${group.color}`}>
                    {group.icon === "code" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                    )}
                    {group.icon === "layers" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                        <polyline points="2 17 12 22 22 17"/>
                        <polyline points="2 12 12 17 22 12"/>
                      </svg>
                    )}
                    {group.icon === "cloud" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                      </svg>
                    )}
                    {group.icon === "tool" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      </svg>
                    )}
                  </div>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`skill-tag skill-tag--${group.color}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">Coding Profiles</h2>
          <div className="coding-profiles">
            
            
            <a 
              href="https://leetcode.com/u/Mehreen14/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-card profile-card--cream"
            >
              <div className="profile-icon profile-icon--cream">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </div>
              <div className="profile-content">
                <h3>LeetCode</h3>
                <p className="profile-desc">Data structures & algorithms practice</p>
                <div className="profile-badges">
                  <span className="profile-badge">Algorithms</span>
                  <span className="profile-badge">Data Structures</span>
                  <span className="profile-badge">Contest</span>
                </div>
              </div>
              <div className="profile-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </a>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}

export default Education
