import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Leadership from './pages/Leadership'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarHidden, setSidebarHidden] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // Add/remove class for home page (no scroll)
  useEffect(() => {
    if (isHomePage) {
      document.body.classList.add('home-page')
      setSidebarHidden(false) // Reset when going to home
    } else {
      document.body.classList.remove('home-page')
    }
    return () => {
      document.body.classList.remove('home-page')
    }
  }, [isHomePage])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={`app-layout ${isHomePage ? 'no-sidebar' : ''} ${sidebarHidden ? 'sidebar-hidden' : ''}`}>
      {/* Only show sidebar on inner pages */}
      {!isHomePage && !sidebarHidden && (
        <>
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            onHide={() => setSidebarHidden(true)}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          
          {/* Mobile menu button */}
        <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
        </button>
        </>
      )}

      {/* Show sidebar toggle when hidden */}
      {!isHomePage && sidebarHidden && (
        <button
          className="sidebar-show-btn"
          onClick={() => setSidebarHidden(false)}
          aria-label="Show sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
        </button>
      )}

      {/* Theme toggle for home page */}
      {isHomePage && (
        <button
          className="home-theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
