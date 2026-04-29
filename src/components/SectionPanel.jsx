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

const SECTION_MAP = {
  thesis:       Thesis,
  background:   Background,
  relevance:    Relevance,
  questions:    Questions,
  methodology:  Methodology,
  minipaths:    MiniPaths,
  findings:     Findings,
  peers:        Peers,
  contribution: Contribution,
}

export default function SectionPanel({ sectionId, onClose, onNavigate, visible }) {
  const scrollRef = useRef(null)

  // scroll to top on section change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [sectionId])

  const SectionContent = SECTION_MAP[sectionId] || (() => null)
  const relatedIds = related[sectionId] || []

  return (
    <div
      style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        width: '62%',
        background: 'var(--panel-bg)',
        borderLeft: '1px solid var(--border)',
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--transition)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
        overflowY: 'hidden',
      }}
    >
      {/* Panel header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          flexShrink: 0,
          background: 'var(--surface)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >
          ← Map
        </button>

        <div
          className="t-label"
          style={{ letterSpacing: '0.2em', textAlign: 'center' }}
        >
          OUT OF PHASE
        </div>

        <div style={{ width: '60px' }} />
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}
      >
        <SectionContent />

        {/* Related navigation */}
        {relatedIds.length > 0 && (
          <div className="related-nav">
            <div className="related-nav-label">Explore related</div>
            <div className="related-nodes">
              {relatedIds.map((id) => (
                <button
                  key={id}
                  className="related-node-btn"
                  onClick={() => onNavigate(id)}
                >
                  {nodeLabels[id]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom padding */}
        <div style={{ height: '3rem' }} />
      </div>
    </div>
  )
}
