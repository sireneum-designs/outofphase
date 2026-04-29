import { useEffect, useRef, useState } from 'react'

export default function Landing({ onEnter }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const [ready, setReady] = useState(false)

  // ── canvas wave animation ────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0

    function resize() {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    function draw() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      const drawWave = (A, freq, phaseOff, alpha, width) => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(200,180,154,${alpha})`
        ctx.lineWidth   = width
        for (let x = 0; x <= W; x += 2) {
          const y = H / 2 + A * Math.sin(freq * x - t + phaseOff)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      drawWave(32, 0.007, 0,          0.35, 1.2)   // primary wave
      drawWave(20, 0.007, Math.PI * 0.65, 0.18, 0.9) // out-of-phase wave
      drawWave(14, 0.012, Math.PI * 1.2,  0.1,  0.7) // harmonic

      t += 0.018
      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()
    setTimeout(() => setReady(true), 200)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      onClick={onEnter}
      style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        background: 'var(--bg)',
        zIndex: 100,
      }}
    >
      {/* Wave canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center',
          padding: '2rem',
          opacity: ready ? 1 : 0,
          transform: ready ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <div
          className="t-label"
          style={{ marginBottom: '1.2rem', letterSpacing: '0.25em' }}
        >
          ARC 651 · Research Proposal · Spring 2026
        </div>

        <h1
          className="t-display"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            color: 'var(--text-primary)',
            marginBottom: '1.25rem',
            letterSpacing: '0.05em',
          }}
        >
          OUT OF PHASE
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            fontStyle: 'italic',
            color: 'var(--accent)',
            marginBottom: '3.5rem',
            maxWidth: '480px',
            margin: '0 auto 3.5rem',
          }}
        >
          how systems change. and what architecture can do about it.
        </p>

        <div
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
          }}
        >
          <span style={{
            display: 'inline-block',
            animation: 'pulse 2.4s ease-in-out infinite',
          }}>◦</span>
          click anywhere to explore
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        Rachel Dudley
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
