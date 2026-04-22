import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import HomePage from './pages/HomePage'
import AiSeoPage from './pages/AiSeoPage'
import WebsitesPage from './pages/WebsitesPage'
import ProjectManagementPage from './pages/ProjectManagementPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return null
}

function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)]">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/website-creation"
            element={
              <PageTransition>
                <WebsitesPage />
              </PageTransition>
            }
          />
          <Route
            path="/ai-seo-optimization"
            element={
              <PageTransition>
                <AiSeoPage />
              </PageTransition>
            }
          />
          <Route
            path="/project-management-consulting"
            element={
              <PageTransition>
                <ProjectManagementPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
