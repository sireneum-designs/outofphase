import { useState, useCallback, useRef } from 'react'
import { mapNodes, mapEdges } from '../data.js'
import JuliaBackground from './JuliaBackground.jsx'

const VB_W = 880
const VB_H = 480

export default function SystemMap({ activeSection, onSelectSection, compressed, portfolioMode }) {
  const [hoveredId, setHoveredId] = useState(null)
  const bgResetRef = useRef(null)  // receives reset fn from JuliaBackground

  const nodeById = useCallback((id) => mapNodes.find((n) => n.id === id), [])

  const isConnected = useCallback((id) => {
    if (!activeSection) return false
    return mapEdges.some(([a,b]) => (a===activeSection&&b===id)||(b===activeSection&&a===id))
  }, [activeSection])

  const getNodeState = (node) => {
    if (node.id === activeSection) return 'active'
    if (node.id === hoveredId)     return 'hovered'
    if (activeSection && isConnected(node.id)) return 'connected'
    if (activeSection) return 'dimmed'
    return 'idle'
  }

  const isHoveredEdge = (aId, bId) =>
    hoveredId && ((aId===hoveredId||bId===hoveredId))

  const isActiveEdge = (aId, bId) =>
    activeSection && ((aId===activeSection||bId===activeSection))

  const getEdgeStyle = (aId, bId) => {
    if (isHoveredEdge(aId,bId)) return {
      stroke: 'rgba(245,235,210,0.88)',
      width:  2.2,
      // CSS filter can't go on SVG line directly, use feGlow
      glow: true,
    }
    if (isActiveEdge(aId,bId)) return {
      stroke: 'rgba(210,192,162,0.65)',
      width:  1.8,
      glow: false,
    }
    if (activeSection || hoveredId) return {
      stroke: 'rgba(255,255,255,0.05)',
      width:  0.7,
      glow: false,
    }
    return { stroke: 'rgba(255,255,255,0.10)', width: 0.8, glow: false }
  }

  const nodeColor = {
    active:    'var(--node-active)',
    hovered:   'var(--node-hover)',
    connected: 'var(--accent-deep)',
    dimmed:    'var(--node-idle)',
    idle:      'var(--node-idle)',
  }
  const nodeR = { active:9, hovered:8, connected:7, dimmed:5, idle:6 }

  return (
    <div style={{
      position:'absolute', inset:0,
      display:'flex', flexDirection:'column',
      justifyContent:'center', alignItems:'center',
      padding: compressed ? '4rem 1rem 1rem' : '5rem 2rem 2rem',
      transition:'padding var(--transition)',
    }}>
      {/* Julia background — Julia subtle, frost + trail clearly visible */}
      <JuliaBackground
        juliaOpacity={compressed ? 0.10 : 0.18}
        frostOpacity={compressed ? 0.45 : 0.60}
        trailOpacity={compressed ? 0.65 : 0.85}
        resetRef={bgResetRef}
      />

      {/* Header */}
      {!compressed && (
        <div style={{position:'absolute',top:'1.8rem',left:'2rem',right:'2rem'}}>
          <div className="t-label" style={{marginBottom:'0.3rem'}}>
            System Map — click any node to explore
          </div>
        </div>
      )}

      {/* SVG Map */}
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        style={{width:'100%',maxHeight:'100%',overflow:'visible',position:'relative',zIndex:1}}
      >
        <defs>
          {/* Glow filter for hovered edges */}
          <filter id="edge-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {mapEdges.map(([aId,bId]) => {
          const a=nodeById(aId), b=nodeById(bId)
          if(!a||!b) return null
          const es=getEdgeStyle(aId,bId)
          return (
            <line
              key={`${aId}-${bId}`}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={es.stroke}
              strokeWidth={es.width}
              filter={es.glow ? 'url(#edge-glow)' : undefined}
              style={{transition:'stroke 0.25s, stroke-width 0.25s'}}
            />
          )
        })}

        {/* Nodes */}
        {mapNodes.map((node) => {
          const state=getNodeState(node)
          const r=nodeR[state]
          const color=nodeColor[state]
          const isActive=state==='active'
          const isHovered=state==='hovered'
          const showDetail=isActive||isHovered

          return (
            <g
              key={node.id}
              onClick={()=>onSelectSection(node.id)}
              onMouseEnter={()=>setHoveredId(node.id)}
              onMouseLeave={()=>setHoveredId(null)}
              style={{cursor:'pointer'}}
            >
              {showDetail && (
                <circle cx={node.x} cy={node.y} r={r+8}
                  fill="none" stroke={color} strokeWidth="0.6" opacity="0.25"/>
              )}
              <circle
                cx={node.x} cy={node.y} r={r}
                fill={color}
                style={{
                  transition:'r 0.2s, fill 0.2s',
                  filter: isActive||node.emphasis
                    ? `drop-shadow(0 0 6px ${isActive?'var(--accent)':color})`
                    : 'none',
                }}
              />
              <text
                x={node.x} y={node.y-r-8}
                textAnchor="middle"
                style={{
                  fontFamily:'var(--font-sans)',
                  fontSize:compressed?'9px':'10px',
                  fontWeight:500,
                  letterSpacing:'0.12em',
                  textTransform:'uppercase',
                  fill: isActive?'var(--accent)'
                    :state==='dimmed'?'var(--text-muted)':'var(--text-secondary)',
                  transition:'fill 0.2s',
                  userSelect:'none',
                }}
              >
                {node.label}
              </text>
              {isHovered&&!isActive&&(
                <text x={node.x} y={node.y+r+18} textAnchor="middle"
                  style={{fontFamily:'var(--font-sans)',fontSize:'9px',fontStyle:'italic',
                    fill:'var(--text-muted)',userSelect:'none'}}>
                  {node.tagline}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* Hover tooltip */}
      {hoveredId&&!activeSection&&<HoverPanel node={nodeById(hoveredId)}/>}

      {/* Standalone link + Reset button */}
      {!compressed && (
        <div style={{
          position: 'absolute', bottom: '1.4rem', left: '2rem',
          display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2,
        }}>
          <a
            href="/design-process"
            style={{
              fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(200,180,154,0.50)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color='rgba(200,180,154,0.90)'}
            onMouseLeave={e => e.currentTarget.style.color='rgba(200,180,154,0.50)'}
          >
            ◇ explore design process fullscreen
          </a>
          <button
            onClick={() => bgResetRef.current?.()}
            style={{
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(200,180,154,0.38)', background: 'none',
              border: '1px solid rgba(200,180,154,0.18)',
              padding: '3px 9px', borderRadius: '2px', cursor: 'pointer',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color='rgba(200,180,154,0.80)'; e.currentTarget.style.borderColor='rgba(200,180,154,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.color='rgba(200,180,154,0.38)'; e.currentTarget.style.borderColor='rgba(200,180,154,0.18)' }}
          >
            reset animation
          </button>
          <button
            onClick={() => onSelectSection('sources')}
            style={{
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(200,180,154,0.30)', background: 'none', border: 'none',
              padding: 0, cursor: 'pointer', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color='rgba(200,180,154,0.75)'}
            onMouseLeave={e => e.currentTarget.style.color='rgba(200,180,154,0.30)'}
          >
            sources
          </button>
        </div>
      )}
    </div>
  )
}

function HoverPanel({node}){
  if(!node) return null
  return(
    <div style={{
      position:'absolute',bottom:'2rem',left:'50%',
      transform:'translateX(-50%)',
      background:'var(--surface-raise)',
      border:'1px solid var(--border-light)',
      borderRadius:'4px',padding:'0.75rem 1.25rem',
      maxWidth:'340px',textAlign:'center',pointerEvents:'none',
      animation:'fadeUp 0.18s ease',zIndex:2,
    }}>
      <div className="t-label-accent" style={{marginBottom:'0.35rem'}}>{node.tagline}</div>
      <div style={{fontSize:'0.8rem',color:'var(--text-secondary)',lineHeight:1.5}}>{node.desc}</div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translate(-50%,6px)}to{opacity:1;transform:translate(-50%,0)}}`}</style>
    </div>
  )
}
