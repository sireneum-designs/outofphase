import { useState, useCallback, useEffect } from 'react'
import Landing       from './components/Landing.jsx'
import SystemMap     from './components/SystemMap.jsx'
import SectionPanel  from './components/SectionPanel.jsx'
import DesignProcess from './sections/DesignProcess.jsx'

export default function App() {
  const [view,          setView]          = useState('landing')
  const [activeSection, setActiveSection] = useState(null)
  const [portfolioMode, setPortfolioMode] = useState(false)
  const [panelVisible,  setPanelVisible]  = useState(false)

  // ── Route: /design-process → fullscreen standalone ──────────
  const [standaloneMode, setStandaloneMode] = useState(false)
  useEffect(() => {
    if (window.location.pathname === '/design-process') {
      setStandaloneMode(true)
    }
  }, [])

  const enterMap = useCallback(() => setView('exploring'), [])

  const openSection = useCallback((id) => {
    setActiveSection(id)
    setTimeout(() => setPanelVisible(true), 30)
  }, [])

  const closeSection = useCallback(() => {
    setPanelVisible(false)
    setTimeout(() => setActiveSection(null), 450)
  }, [])

  const navigateSection = useCallback((id) => {
    setPanelVisible(false)
    setTimeout(() => {
      setActiveSection(id)
      setTimeout(() => setPanelVisible(true), 60)
    }, 280)
  }, [])

  const panelOpen = !!activeSection

  // ── Standalone design process page ──────────────────────────
  if (standaloneMode) {
    return (
      <div style={{ width:'100vw', height:'100vh', background:'#060606', overflow:'hidden' }}>
        <DesignProcess standalone={true} />
        {/* Back link */}
        <a
          href="/"
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1.2rem',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(235,225,205,.28)',
            textDecoration: 'none',
            zIndex: 999,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color='rgba(235,225,205,.7)'}
          onMouseLeave={e => e.currentTarget.style.color='rgba(235,225,205,.28)'}
        >
          ← out of phase
        </a>
        <div style={{
          position: 'fixed',
          top: '0.9rem',
          right: '1.2rem',
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(235,225,205,.18)',
          pointerEvents: 'none',
          fontFamily: 'var(--font-sans)',
        }}>
          Design Process · Rachel Dudley
        </div>
      </div>
    )
  }

  return (
    <div className="app" data-mode={portfolioMode ? 'portfolio' : 'research'}>

      {/* Portfolio bar */}
      {portfolioMode && (
        <div className="portfolio-bar">
          <span className="portfolio-bar-text">
            <span className="portfolio-bar-name">Rachel Dudley</span>
          </span>
          <div className="portfolio-bar-divider" />
          <span className="portfolio-bar-text">ARC 651 · Research Proposal</span>
          <div className="portfolio-bar-divider" />
          <span className="portfolio-bar-text">Spring 2026 · Arizona State University</span>
        </div>
      )}

      {/* Mode toggle */}
      {view !== 'landing' && (
        <button
          className="mode-toggle"
          onClick={() => setPortfolioMode(m => !m)}
          style={{ top: portfolioMode ? '57px' : '1.1rem' }}
        >
          <span className="mode-toggle-dot" />
          {portfolioMode ? 'Research View' : 'Portfolio View'}
        </button>
      )}

      {/* Landing */}
      {view === 'landing' && <Landing onEnter={enterMap} />}

      {/* Main explore view */}
      {view === 'exploring' && (
        <>
          <div style={{
            position: 'absolute',
            top: portfolioMode ? '44px' : 0,
            left: 0, bottom: 0,
            width: panelOpen ? '38%' : '100%',
            transition: 'width var(--transition)',
            overflow: 'hidden',
          }}>
            <SystemMap
              activeSection={activeSection}
              onSelectSection={openSection}
              compressed={panelOpen}
              portfolioMode={portfolioMode}
            />
          </div>

          <SectionPanel
            sectionId={activeSection}
            visible={panelVisible}
            onClose={closeSection}
            onNavigate={navigateSection}
          />

          {panelOpen && (
            <div style={{
              position: 'absolute', bottom: '1.25rem', left: '19%',
              transform: 'translateX(-50%)',
              fontSize: '0.58rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
              pointerEvents: 'none',
            }}>
              click a node to navigate
            </div>
          )}
        </>
      )}
    </div>
  )
}
