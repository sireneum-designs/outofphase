import { useEffect, useRef } from 'react'
import { related, nodeLabels } from '../data.js'
import Thesis        from '../sections/Thesis.jsx'
import Background    from '../sections/Background.jsx'
import Relevance     from '../sections/Relevance.jsx'
import Questions     from '../sections/Questions.jsx'
import Methodology   from '../sections/Methodology.jsx'
import MiniPaths     from '../sections/MiniPaths.jsx'
import Findings      from '../sections/Findings.jsx'
import Peers         from '../sections/Peers.jsx'
import Contribution  from '../sections/Contribution.jsx'
import DesignProcess from '../sections/DesignProcess.jsx'

const SECTION_MAP = {
  thesis:        Thesis,
  background:    Background,
  relevance:     Relevance,
  questions:     Questions,
  methodology:   Methodology,
  minipaths:     MiniPaths,
  findings:      Findings,
  peers:         Peers,
  contribution:  Contribution,
  designprocess: DesignProcess,
}

export default function SectionPanel({ sectionId, onClose, onNavigate, visible }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [sectionId])

  const SectionContent = SECTION_MAP[sectionId] || (() => null)
  const relatedIds = related[sectionId] || []

  // Design Process gets a full-height panel with no scroll wrapper
  const isDesignProcess = sectionId === 'designprocess'

  return (
    <div style={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0,
      width: '62%',
      background: isDesignProcess ? '#060606' : 'var(--panel-bg)',
      borderLeft: '1px solid var(--border)',
      transform: visible ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--transition)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 50,
      overflowY: 'hidden',
    }}>
      {/* Panel header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        borderBottom: `1px solid ${isDesignProcess ? 'rgba(255,255,255,0.06)' : 'var(--border)'}`,
        flexShrink: 0,
        background: isDesignProcess ? 'rgba(6,6,6,0.9)' : 'var(--surface)',
        position: 'relative',
        zIndex: 10,
      }}>
        <button
          onClick={onClose}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.65rem', letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: isDesignProcess ? 'rgba(235,225,205,0.4)' : 'var(--text-muted)',
            transition: 'color var(--transition-fast)',
            background: 'none', border: 'none', cursor: 'pointer',
          }}
          onMouseEnter={e => e.target.style.color = isDesignProcess ? 'rgba(235,225,205,0.85)' : 'var(--text-primary)'}
          onMouseLeave={e => e.target.style.color = isDesignProcess ? 'rgba(235,225,205,0.4)' : 'var(--text-muted)'}
        >
          ← Map
        </button>

        <div style={{
          fontSize: '0.65rem', letterSpacing: '0.2em', textAlign: 'center',
          textTransform: 'uppercase', fontFamily: 'var(--font-sans)',
          color: isDesignProcess ? 'rgba(235,225,205,0.25)' : 'var(--text-muted)',
        }}>
          OUT OF PHASE
        </div>

        {/* Fullscreen link for design process */}
        {isDesignProcess ? (
          <a
            href="/design-process"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.6rem', letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(235,225,205,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color='rgba(200,180,154,0.85)'}
            onMouseLeave={e => e.currentTarget.style.color='rgba(235,225,205,0.35)'}
          >
            fullscreen ↗
          </a>
        ) : (
          <div style={{ width: '60px' }} />
        )}
      </div>

      {/* Content */}
      {isDesignProcess ? (
        // Design Process: no scroll wrapper, fills remaining height
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <SectionContent />
        </div>
      ) : (
        <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <SectionContent />

          {relatedIds.length > 0 && (
            <div className="related-nav">
              <div className="related-nav-label">Explore related</div>
              <div className="related-nodes">
                {relatedIds.map(id => (
                  <button key={id} className="related-node-btn" onClick={() => onNavigate(id)}>
                    {nodeLabels[id]}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div style={{ height: '3rem' }} />
        </div>
      )}
    </div>
  )
}
