import { useState, useCallback } from 'react'
import Landing      from './components/Landing.jsx'
import SystemMap    from './components/SystemMap.jsx'
import SectionPanel from './components/SectionPanel.jsx'

export default function App() {
  const [view,           setView]           = useState('landing')  // 'landing' | 'exploring'
  const [activeSection,  setActiveSection]  = useState(null)
  const [portfolioMode,  setPortfolioMode]  = useState(false)
  const [panelVisible,   setPanelVisible]   = useState(false)

  const enterMap = useCallback(() => {
    setView('exploring')
  }, [])

  const openSection = useCallback((id) => {
    setActiveSection(id)
    // slight delay so map can compress first
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

  return (
    <div
      className="app"
      data-mode={portfolioMode ? 'portfolio' : 'research'}
    >
      {/* ── PORTFOLIO BAR (portfolio mode only) ── */}
      {portfolioMode && (
        <div className="portfolio-bar" style={{ top: 0 }}>
          <span className="portfolio-bar-text">
            <span className="portfolio-bar-name">Rachel Dudley</span>
          </span>
          <div className="portfolio-bar-divider" />
          <span className="portfolio-bar-text">ARC 651 · Research Proposal</span>
          <div className="portfolio-bar-divider" />
          <span className="portfolio-bar-text">Spring 2026 · Arizona State University</span>
        </div>
      )}

      {/* ── MODE TOGGLE ── */}
      {view !== 'landing' && (
        <button
          className="mode-toggle"
          onClick={() => setPortfolioMode((m) => !m)}
          style={{ top: portfolioMode ? '57px' : '1.1rem' }}
        >
          <span className="mode-toggle-dot" />
          {portfolioMode ? 'Research View' : 'Portfolio View'}
        </button>
      )}

      {/* ── LANDING ── */}
      {view === 'landing' && (
        <Landing onEnter={enterMap} />
      )}

      {/* ── MAIN EXPLORE VIEW ── */}
      {view === 'exploring' && (
        <>
          {/* System Map — always present, compresses left when panel opens */}
          <div
            style={{
              position: 'absolute',
              top: portfolioMode ? '44px' : 0,
              left: 0, bottom: 0,
              width: panelOpen ? '38%' : '100%',
              transition: 'width var(--transition)',
              overflow: 'hidden',
            }}
          >
            <SystemMap
              activeSection={activeSection}
              onSelectSection={openSection}
              compressed={panelOpen}
            />
          </div>

          {/* Section panel */}
          <SectionPanel
            sectionId={activeSection}
            visible={panelVisible}
            onClose={closeSection}
            onNavigate={navigateSection}
          />

          {/* Collapsed map hint when panel open */}
          {panelOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '19%',
                transform: 'translateX(-50%)',
                fontSize: '0.58rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                pointerEvents: 'none',
              }}
            >
              click a node to navigate
            </div>
          )}
        </>
      )}
    </div>
  )
}
