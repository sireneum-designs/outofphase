import { useState, useCallback, useEffect } from 'react'
import Landing       from './components/Landing.jsx'
import SystemMap     from './components/SystemMap.jsx'
import SectionPanel  from './components/SectionPanel.jsx'
import DesignProcess from './sections/DesignProcess.jsx'

const YEAR = new Date().getFullYear()

// Persistent copyright line — appears on all views
function Copyright({ light = false }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0.7rem',
        right: '1.1rem',
        fontSize: '0.64rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: light
          ? 'rgba(26,25,21,0.42)'
          : 'rgba(235,225,205,0.32)',
        fontFamily: 'var(--font-sans)',
        pointerEvents: 'none',
        zIndex: 9999,
        userSelect: 'none',
        transition: 'color 0.6s',
      }}
    >
      © {YEAR} Sireneum Designs
    </div>
  )
}

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
        <Copyright />
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

      {/* Persistent copyright */}
      <Copyright light={portfolioMode} />

      {/* Portfolio bar */}
      {portfolioMode && (
        <div className="portfolio-bar">
          {/* Back to map — only when a panel is open */}
          {panelVisible && activeSection ? (
            <>
              <button
                onClick={() => { setPanelVisible(false); setTimeout(() => setActiveSection(null), 450) }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)',
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  transition: 'color 0.2s', padding: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                ← Map
              </button>
              <div className="portfolio-bar-divider" />
            </>
          ) : null}
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
