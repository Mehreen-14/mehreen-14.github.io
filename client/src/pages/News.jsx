import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PageStyles.css'
import './News.css'
import { newsData } from './newsData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

function News() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="page-inner" variants={containerVariants} initial="hidden" animate="visible">

        <motion.header className="page-header" variants={itemVariants}>
          <div className="page-icon coral">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2"/>
              <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>
            </svg>
          </div>
          <h1>News</h1>
          <p>Milestones and recent updates</p>
        </motion.header>

        <motion.section className="section" variants={itemVariants}>
          <table className="news-table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {newsData.map((item) => (
                <tr key={item.date}>
                  <td className="news-table-date">
                    <time dateTime={item.date}>{item.label}</time>
                  </td>
                  <td className="news-table-info">
                    <span className="news-table-title">{item.title}</span>
                    {/* <Link to={item.link} className="news-table-link">Learn more</Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

      </motion.div>
    </motion.div>
  )
}

export default News
