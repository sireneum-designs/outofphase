import { useState, useCallback } from 'react'
import { mapNodes, mapEdges } from '../data.js'

const VB_W = 880
const VB_H = 480

export default function SystemMap({ activeSection, onSelectSection, compressed }) {
  const [hoveredId, setHoveredId] = useState(null)

  const nodeById = useCallback(
    (id) => mapNodes.find((n) => n.id === id),
    []
  )

  const isConnected = useCallback(
    (id) => {
      if (!activeSection) return false
      return mapEdges.some(
        ([a, b]) => (a === activeSection && b === id) || (b === activeSection && a === id)
      )
    },
    [activeSection]
  )

  const getNodeState = (node) => {
    if (node.id === activeSection) return 'active'
    if (node.id === hoveredId)     return 'hovered'
    if (activeSection && isConnected(node.id)) return 'connected'
    if (activeSection) return 'dimmed'
    return 'idle'
  }

  const getEdgeOpacity = (a, b) => {
    if (!activeSection) return 0.5
    if (a === activeSection || b === activeSection) return 0.85
    return 0.12
  }

  const nodeColor = {
    active:    'var(--node-active)',
    hovered:   'var(--node-hover)',
    connected: 'var(--accent-deep)',
    dimmed:    'var(--node-idle)',
    idle:      'var(--node-idle)',
  }

  const nodeR = { active: 9, hovered: 8, connected: 7, dimmed: 5, idle: 6 }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: compressed ? '4rem 1rem 1rem' : '5rem 2rem 2rem',
        transition: 'padding var(--transition)',
      }}
    >
      {/* Header — only when not compressed */}
      {!compressed && (
        <div
          style={{
            position: 'absolute',
            top: '1.8rem',
            left: '2rem',
            right: '2rem',
          }}
        >
          <div className="t-label" style={{ marginBottom: '0.3rem' }}>
            System Map — click any node to explore
          </div>
        </div>
      )}

      {/* SVG Map */}
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        style={{
          width: '100%',
          maxHeight: '100%',
          overflow: 'visible',
        }}
      >
        {/* ── EDGES ── */}
        {mapEdges.map(([aId, bId]) => {
          const a = nodeById(aId)
          const b = nodeById(bId)
          if (!a || !b) return null
          const op = getEdgeOpacity(aId, bId)
          const isActiveEdge =
            aId === activeSection || bId === activeSection ||
            aId === hoveredId    || bId === hoveredId
          return (
            <line
              key={`${aId}-${bId}`}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={isActiveEdge ? 'var(--line-active)' : 'var(--line-color)'}
              strokeWidth={isActiveEdge ? 1.2 : 0.8}
              opacity={op}
              style={{ transition: 'opacity 0.3s, stroke 0.3s' }}
            />
          )
        })}

        {/* ── NODES ── */}
        {mapNodes.map((node) => {
          const state = getNodeState(node)
          const r     = nodeR[state]
          const color = nodeColor[state]
          const isActive   = state === 'active'
          const isHovered  = state === 'hovered'
          const showDetail = isActive || isHovered

          return (
            <g
              key={node.id}
              onClick={() => onSelectSection(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Glow ring for active/hovered */}
              {showDetail && (
                <circle
                  cx={node.x} cy={node.y}
                  r={r + 8}
                  fill="none"
                  stroke={color}
                  strokeWidth="0.6"
                  opacity="0.25"
                />
              )}

              {/* Main dot */}
              <circle
                cx={node.x} cy={node.y}
                r={r}
                fill={color}
                style={{
                  transition: 'r 0.2s, fill 0.2s',
                  filter: isActive || node.emphasis
                    ? `drop-shadow(0 0 6px ${isActive ? 'var(--accent)' : color})`
                    : 'none',
                }}
              />

              {/* Node label */}
              <text
                x={node.x}
                y={node.y - r - 8}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: compressed ? '9px' : '10px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fill: isActive
                    ? 'var(--accent)'
                    : (state === 'dimmed' ? 'var(--text-muted)' : 'var(--text-secondary)'),
                  transition: 'fill 0.2s',
                  userSelect: 'none',
                }}
              >
                {node.label}
              </text>

              {/* Hover tagline */}
              {isHovered && !isActive && (
                <text
                  x={node.x}
                  y={node.y + r + 18}
                  textAnchor="middle"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    fontStyle: 'italic',
                    fill: 'var(--text-muted)',
                    userSelect: 'none',
                  }}
                >
                  {node.tagline}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* Hover tooltip panel */}
      {hoveredId && !activeSection && (
        <HoverPanel node={nodeById(hoveredId)} />
      )}
    </div>
  )
}

function HoverPanel({ node }) {
  if (!node) return null
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--surface-raise)',
        border: '1px solid var(--border-light)',
        borderRadius: '4px',
        padding: '0.75rem 1.25rem',
        maxWidth: '340px',
        textAlign: 'center',
        pointerEvents: 'none',
        animation: 'fadeUp 0.18s ease',
      }}
    >
      <div className="t-label-accent" style={{ marginBottom: '0.35rem' }}>
        {node.tagline}
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
        {node.desc}
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  )
}
