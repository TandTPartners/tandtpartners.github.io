import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import MobileCtaBar from './components/layout/MobileCtaBar'
import SmoothScroll from './components/system/SmoothScroll'
import CustomCursor from './components/system/CustomCursor'
import RouteCurtain from './components/system/RouteCurtain'
import BrandFrame from './components/system/BrandFrame'
import Grain from './components/system/Grain'
import HomePage from './pages/HomePage'
import AiSeoPage from './pages/AiSeoPage'
import WebsitesPage from './pages/WebsitesPage'
import ProjectManagementPage from './pages/ProjectManagementPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])
  return null
}

function App() {
  const location = useLocation()

  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-x-clip bg-[var(--bg)]">
        <Grain />
        <BrandFrame />
        <CustomCursor />
        <RouteCurtain />
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
        <MobileCtaBar />
      </div>
    </SmoothScroll>
  )
}

export default App
