import { useEffect, useRef } from 'react'

/**
 * Lightweight Julia background for the system map.
 * - Renders at 1/5 resolution, scales up with smoothing
 * - Very low opacity so node graph stays readable
 * - Cursor position shifts the Julia parameter slowly
 * - No frost tips — pure mathematical structure only
 */
export default function JuliaBackground({ opacity = 0.18 }) {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)
  const stateRef  = useRef({
    cx: -0.7269, cy: 0.1889,
    tcx: -0.7269, tcy: 0.1889,
    W: 1, H: 1, dpr: 1,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const s   = stateRef.current

    // Off-screen buffer at low res
    const JW = 160, JH = 90
    const off = document.createElement('canvas')
    off.width = JW; off.height = JH
    const ox  = off.getContext('2d')
    const img = ox.createImageData(JW, JH)
    const pd  = img.data
    const MAX = 68

    // Julia c parameter range — same as DesignProcess
    const CX_MIN = -0.85, CX_MAX = 0.35
    const CY_MIN = -0.65, CY_MAX = 0.65

    function render() {
      const { cx, cy } = s
      const scale = 3.2, aspect = s.W / s.H
      for (let py = 0; py < JH; py++) {
        for (let px = 0; px < JW; px++) {
          let zx = (px/JW - 0.5) * scale * aspect
          let zy = (py/JH - 0.5) * scale
          let n  = 0
          while (n < MAX) {
            const zx2=zx*zx, zy2=zy*zy
            if (zx2+zy2 > 4) break
            zy=2*zx*zy+cy; zx=zx2-zy2+cx; n++
          }
          const i = (py*JW+px)*4
          if (n === MAX) {
            pd[i]=4; pd[i+1]=4; pd[i+2]=4; pd[i+3]=255
          } else {
            const t = Math.pow(n/MAX, 0.4)
            const v = Math.round(t * 200)
            const w = Math.round(t*18*(1-t)*4)
            pd[i]=v+w; pd[i+1]=v+Math.round(w*.4); pd[i+2]=v; pd[i+3]=255
          }
        }
      }
      ox.putImageData(img, 0, 0)
      ctx.clearRect(0, 0, s.W, s.H)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(off, 0, 0, s.W, s.H)
    }

    let needsRender = true
    function tick() {
      rafRef.current = requestAnimationFrame(tick)
      const prevCx = s.cx, prevCy = s.cy
      s.cx += (s.tcx - s.cx) * 0.025   // very slow lerp — dreamy drift
      s.cy += (s.tcy - s.cy) * 0.025
      if (Math.abs(s.cx-prevCx)>0.0004||Math.abs(s.cy-prevCy)>0.0004||needsRender) {
        render(); needsRender = false
      }
    }

    function resize() {
      s.dpr = Math.min(window.devicePixelRatio||1, 2)
      const rect = canvas.parentElement.getBoundingClientRect()
      s.W = rect.width; s.H = rect.height
      canvas.width  = Math.round(s.W * s.dpr)
      canvas.height = Math.round(s.H * s.dpr)
      ctx.setTransform(s.dpr, 0, 0, s.dpr, 0, 0)
      needsRender = true
    }

    function handleMouseMove(e) {
      const rect = canvas.parentElement.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width
      const ny = (e.clientY - rect.top)  / rect.height
      s.tcx = CX_MIN + nx * (CX_MAX - CX_MIN)
      s.tcy = CY_MIN + ny * (CY_MAX - CY_MIN)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    window.addEventListener('mousemove', handleMouseMove)
    tick()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        opacity,
        pointerEvents: 'none',
        transition: 'opacity 1s ease',
      }}
    />
  )
}
