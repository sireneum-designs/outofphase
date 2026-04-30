import { useEffect, useRef, useState } from 'react'

// ── Embedded logo (base64) for watermark ─────────────────────
const LOGO_B64 = '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'

export default function DesignProcess({ standalone = false }) {
  const wrapRef  = useRef(null)
  const stateRef = useRef({})
  const [mouseActive, setMouseActive] = useState(false)
  const [showTrail,   setShowTrail]   = useState(true)
  const [paramText,   setParamText]   = useState('')
  const [saving,      setSaving]      = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const jC  = wrap.querySelector('#dp-jC')
    const frC = wrap.querySelector('#dp-frC')
    const fgEl = wrap.querySelector('#dp-fgC')
    const jx  = jC.getContext('2d')
    const fr  = frC.getContext('2d')
    const fc  = fgEl.getContext('2d')

    const s = stateRef.current
    s.W = 1; s.H = 1; s.dpr = 1
    s.cx = -0.7269; s.cy = 0.1889
    s.tcx = -0.7269; s.tcy = 0.1889
    s.needsRender = true
    s.mouseActive = false
    s.showTrail = true
    s.tips = []; s.blooms = []; s.trail = []
    s.dropTimer = 0; s.frame = 0
    s.mx = 0; s.my = 0
    s.raf = null
    s.logoImg = null

    // Load logo image for watermark
    const logo = new Image()
    logo.onload = () => { s.logoImg = logo }
    logo.src = `data:image/png;base64,${LOGO_B64}`

    // ── Julia set ──────────────────────────────────────────────
    const JW = 220, JH = 124
    const offC = document.createElement('canvas')
    offC.width = JW; offC.height = JH
    const ox = offC.getContext('2d')
    const imgData = ox.createImageData(JW, JH)
    const pd = imgData.data
    const MAX_ITER = 72
    const CX_MIN = -0.85, CX_MAX = 0.35
    const CY_MIN = -0.65, CY_MAX = 0.65

    function renderJulia() {
      const { cx, cy } = s
      const scale = 3.2, aspect = s.W / s.H
      for (let py = 0; py < JH; py++) {
        for (let px2 = 0; px2 < JW; px2++) {
          let zx = (px2/JW - 0.5) * scale * aspect
          let zy = (py/JH - 0.5) * scale
          let n = 0
          while (n < MAX_ITER) {
            const zx2=zx*zx, zy2=zy*zy
            if (zx2+zy2>4) break
            zy=2*zx*zy+cy; zx=zx2-zy2+cx; n++
          }
          const i = (py*JW+px2)*4
          if (n===MAX_ITER) {
            pd[i]=6; pd[i+1]=5; pd[i+2]=5; pd[i+3]=255
          } else {
            const t = Math.pow(n/MAX_ITER, 0.38)
            const v = Math.round(t*225)
            const w = Math.round(t*22*(1-t)*4)
            pd[i]=v+w; pd[i+1]=v+Math.round(w*.5); pd[i+2]=v; pd[i+3]=255
          }
        }
      }
      ox.putImageData(imgData, 0, 0)
      jx.clearRect(0, 0, s.W, s.H)
      jx.imageSmoothingEnabled = true
      jx.imageSmoothingQuality = 'high'
      jx.drawImage(offC, 0, 0, s.W, s.H)
    }

    // ── Iso-contour sensing ────────────────────────────────────
    function escapeTime(zx0, zy0) {
      let zx=zx0, zy=zy0, n=0
      while (n < MAX_ITER) {
        const zx2=zx*zx, zy2=zy*zy
        if (zx2+zy2>4) break
        zy=2*zx*zy+s.cy; zx=zx2-zy2+s.cx; n++
      }
      return n
    }
    function canvasToZ(px2, py) {
      const scale=3.2, aspect=s.W/s.H
      return { zx:(px2/s.W-0.5)*scale*aspect, zy:(py/s.H-0.5)*scale }
    }
    function isoTangent(px2, py) {
      const GD = 3.5
      const p = canvasToZ(px2, py)
      const r = canvasToZ(px2+GD, py)
      const u = canvasToZ(px2, py-GD)
      const nR = escapeTime(r.zx, r.zy)
      const nU = escapeTime(u.zx, u.zy)
      const nC = escapeTime(p.zx, p.zy)
      const gx=nR-nC, gy=nU-nC
      const len = Math.sqrt(gx*gx+gy*gy)
      if (len < 0.001) return Math.random()*Math.PI*2
      return Math.atan2(-gx/len, gy/len)
    }

    // ── Tips ───────────────────────────────────────────────────
    const GEN = [
      {maxAge:900,  forkP:0.0018, alpha:0.30, lw:0.56, wobble:0.052, guided:true},
      {maxAge:540,  forkP:0.007,  alpha:0.18, lw:0.40, wobble:0.072, guided:true},
      {maxAge:300,  forkP:0.02,   alpha:0.10, lw:0.28, wobble:0.10,  guided:false},
      {maxAge:150,  forkP:0.05,   alpha:0.055,lw:0.18, wobble:0.14,  guided:false},
      {maxAge:75,   forkP:0,      alpha:0.026,lw:0.11, wobble:0.18,  guided:false},
    ]
    const STEP = 0.38, MAX_TIPS = 2800

    function spawnTip(x, y, angle, gen) {
      if (s.tips.length >= MAX_TIPS) return
      s.tips.push({x, y, angle, gen, age:0, st:0})
    }

    function updateTips() {
      const segs = [[],[],[],[],[]]
      const forks = []
      for (let i = s.tips.length-1; i >= 0; i--) {
        const t = s.tips[i]; t.age++
        const g = GEN[t.gen]
        if (t.age>g.maxAge||t.x<1||t.x>s.W-1||t.y<1||t.y>s.H-1) {
          s.tips.splice(i,1); continue
        }
        if (g.guided) {
          t.st++
          if (t.st >= 18) {
            t.st = 0
            const iso = isoTangent(t.x, t.y)
            const da = ((iso-t.angle+Math.PI*3)%(Math.PI*2))-Math.PI
            t.angle += da*0.32
          }
        }
        t.angle += (Math.random()-.5)*g.wobble
        const nx = t.x+Math.cos(t.angle)*STEP
        const ny = t.y+Math.sin(t.angle)*STEP
        segs[t.gen].push(t.x, t.y, nx, ny)
        t.x = nx; t.y = ny
        if (g.forkP>0&&Math.random()<g.forkP&&t.gen<4&&s.tips.length<MAX_TIPS) {
          forks.push({x:t.x, y:t.y, angle:t.angle, gen:t.gen+1})
        }
      }
      for (let g=0; g<5; g++) {
        const sg = segs[g]; if (!sg.length) continue
        fr.beginPath(); fr.lineWidth = GEN[g].lw
        fr.strokeStyle = `rgba(245,238,222,${GEN[g].alpha})`
        for (let i=0; i<sg.length; i+=4) { fr.moveTo(sg[i],sg[i+1]); fr.lineTo(sg[i+2],sg[i+3]) }
        fr.stroke()
      }
      for (const f of forks) {
        const da = (0.38+Math.random()*.42)*(Math.random()<.5?1:-1)
        spawnTip(f.x, f.y, f.angle+da, f.gen)
        if (Math.random()<.42) spawnTip(f.x, f.y, f.angle-da*.76, f.gen)
      }
    }

    // ── Blooms ─────────────────────────────────────────────────
    function dropBloom(x, y) {
      s.blooms.push({x,y,age:0,maxAge:110,r:10+Math.random()*8,bright:true})
      s.blooms.push({x,y,age:0,maxAge:165,r:44+Math.random()*34,bright:false})
    }
    function updateBlooms() {
      for (let i = s.blooms.length-1; i >= 0; i--) {
        const b = s.blooms[i]; b.age++
        if (b.age > b.maxAge) { s.blooms.splice(i,1); continue }
        const bp = b.age/b.maxAge
        const r  = bp*b.r
        const peakA = b.bright ? 0.0072 : 0.002
        const ba = Math.pow(Math.sin(Math.PI*bp),.75)*peakA
        if (ba > .0007) {
          const g = fr.createRadialGradient(b.x,b.y,0,b.x,b.y,r)
          g.addColorStop(0,  `rgba(192,184,168,${ba*1.7})`)
          g.addColorStop(.5, `rgba(172,165,152,${ba})`)
          g.addColorStop(1,  `rgba(152,147,138,0)`)
          fr.beginPath(); fr.arc(b.x,b.y,r,0,Math.PI*2)
          fr.fillStyle = g; fr.fill()
        }
      }
    }

    // ── Main loop ──────────────────────────────────────────────
    function tick() {
      s.raf = requestAnimationFrame(tick)
      s.frame++

      const prevCx = s.cx, prevCy = s.cy
      s.cx += (s.tcx - s.cx) * 0.06
      s.cy += (s.tcy - s.cy) * 0.06
      if (Math.abs(s.cx-prevCx)>0.0003||Math.abs(s.cy-prevCy)>0.0003||s.needsRender) {
        renderJulia(); s.needsRender = false
      }

      if (s.mouseActive) {
        setParamText(`c = ${s.cx.toFixed(4)} + ${s.cy.toFixed(4)}i`)
      }

      s.trail.push({x:s.mx, y:s.my})
      if (s.trail.length > 900) s.trail.shift()

      s.dropTimer++
      if (s.dropTimer >= 12 && s.mouseActive) {
        const tl = s.trail.length
        if (tl > 2) {
          const prev = s.trail[tl-3]
          const angle = Math.atan2(s.my-prev.y, s.mx-prev.x)
          const perp  = angle + Math.PI/2
          spawnTip(s.mx, s.my, perp+(Math.random()-.5)*.32, 0)
          spawnTip(s.mx, s.my, perp+Math.PI+(Math.random()-.5)*.32, 0)
          spawnTip(s.mx, s.my, Math.random()*Math.PI*2, 1)
        }
        dropBloom(s.mx, s.my)
        s.dropTimer = 0
      }

      updateBlooms(); updateTips()

      fc.clearRect(0, 0, s.W, s.H)
      if (s.showTrail) {
        const tl = s.trail.length
        if (tl > 1) {
          const st = Math.max(0, tl-500)
          for (let i=st; i<tl-1; i++) {
            const t = (i-st)/500
            fc.beginPath()
            fc.strokeStyle = `rgba(245,235,215,${t*.5})`
            fc.lineWidth = .82
            fc.moveTo(s.trail[i].x, s.trail[i].y)
            fc.lineTo(s.trail[i+1].x, s.trail[i+1].y)
            fc.stroke()
          }
        }
      }
      if (s.mouseActive) {
        const pulse = .5+.5*Math.sin(s.frame*.08)
        fc.beginPath(); fc.arc(s.mx, s.my, 2.8, 0, Math.PI*2)
        fc.fillStyle = `rgba(255,252,248,${.9+pulse*.1})`; fc.fill()
        fc.beginPath(); fc.arc(s.mx, s.my, 7+pulse*4, 0, Math.PI*2)
        fc.strokeStyle = `rgba(240,228,205,${.15*pulse})`; fc.lineWidth = .8; fc.stroke()
      }
    }

    // ── Resize ─────────────────────────────────────────────────
    function handleResize() {
      s.dpr = Math.min(window.devicePixelRatio||1, 2)
      const rect = wrap.getBoundingClientRect()
      s.W = rect.width; s.H = rect.height
      for (const c of [jC, frC, fgEl]) {
        c.width  = Math.round(s.W * s.dpr)
        c.height = Math.round(s.H * s.dpr)
      }
      jx.setTransform(s.dpr,0,0,s.dpr,0,0)
      fr.setTransform(s.dpr,0,0,s.dpr,0,0)
      fc.setTransform(s.dpr,0,0,s.dpr,0,0)
      s.needsRender = true
    }

    // ── Mouse ──────────────────────────────────────────────────
    function handleMouseMove(e) {
      const rect = wrap.getBoundingClientRect()
      s.mx = e.clientX - rect.left
      s.my = e.clientY - rect.top
      s.tcx = CX_MIN + (s.mx/s.W)*(CX_MAX-CX_MIN)
      s.tcy = CY_MIN + (s.my/s.H)*(CY_MAX-CY_MIN)
      if (!s.mouseActive) {
        s.mouseActive = true
        setMouseActive(true)
      }
    }

    wrap.addEventListener('mousemove', handleMouseMove)
    handleResize()
    const ro = new ResizeObserver(handleResize)
    ro.observe(wrap)
    tick()

    // Expose reset and download to stateRef for buttons
    s.reset = () => {
      s.tips.length=0; s.blooms.length=0; s.trail.length=0
      s.frame=0; s.dropTimer=0; s.mouseActive=false
      s.cx=-0.7269; s.cy=0.1889; s.tcx=s.cx; s.tcy=s.cy
      fr.clearRect(0,0,s.W,s.H)
      s.needsRender=true
      setMouseActive(false); setParamText('')
    }

    s.download = (withTrail) => {
      setSaving(true)
      const out = document.createElement('canvas')
      out.width  = Math.round(s.W * s.dpr)
      out.height = Math.round(s.H * s.dpr)
      const oc = out.getContext('2d')
      oc.drawImage(jC,  0, 0)
      oc.drawImage(frC, 0, 0)
      if (withTrail) oc.drawImage(fgEl, 0, 0)

      // Logo watermark — bottom right
      if (s.logoImg) {
        const logoH = Math.round(out.height * 0.055)
        const logoW = Math.round(logoH * (s.logoImg.naturalWidth/s.logoImg.naturalHeight))
        const pad   = Math.round(out.width * 0.018)
        oc.globalAlpha = 0.30
        oc.drawImage(s.logoImg, out.width-logoW-pad, out.height-logoH-pad, logoW, logoH)
        oc.globalAlpha = 1
      } else {
        // Fallback: text watermark
        const fs = Math.round(11 * s.dpr)
        oc.font = `300 ${fs}px 'Georgia', serif`
        oc.fillStyle = 'rgba(200,185,165,0.32)'
        oc.textAlign = 'right'
        oc.textBaseline = 'bottom'
        oc.fillText(
          `sireneum  ·  c = ${s.cx.toFixed(4)} + ${s.cy.toFixed(4)}i`,
          out.width - Math.round(14*s.dpr),
          out.height - Math.round(12*s.dpr)
        )
      }

      out.toBlob(blob => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        const re = s.cx.toFixed(3).replace('-','n').replace('.','p')
        const im = s.cy.toFixed(3).replace('-','n').replace('.','p')
        a.download = `sireneum_outofphase_c${re}_${im}.png`
        a.href = url; a.click()
        setTimeout(() => URL.revokeObjectURL(url), 2000)
        setSaving(false)
      }, 'image/png')
    }

    return () => {
      cancelAnimationFrame(s.raf)
      wrap.removeEventListener('mousemove', handleMouseMove)
      ro.disconnect()
    }
  }, [])

  // Keep showTrail in sync with stateRef
  useEffect(() => {
    stateRef.current.showTrail = showTrail
  }, [showTrail])

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: standalone ? '0' : '62%',
        height: standalone ? '100%' : undefined,
        background: '#060606',
        borderRadius: standalone ? '0' : '6px',
        overflow: 'hidden',
        cursor: 'crosshair',
        minHeight: standalone ? '100vh' : undefined,
      }}
    >
      <canvas id="dp-jC"  style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block'}} />
      <canvas id="dp-frC" style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block'}} />
      <canvas id="dp-fgC" style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block'}} />

      {/* Hint overlay */}
      {!mouseActive && (
        <div style={{
          position:'absolute',inset:0,
          display:'flex',flexDirection:'column',
          alignItems:'center',justifyContent:'center',
          gap:'.6rem',pointerEvents:'none',
        }}>
          <div style={{fontSize:'11px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(235,225,205,.3)',fontFamily:'var(--font-sans)'}}>
            move your cursor to reshape the set
          </div>
          <div style={{fontSize:'9px',color:'rgba(235,225,205,.15)',fontStyle:'italic',fontFamily:'var(--font-serif)'}}>
            your position determines the mathematical structure · your path leaves a permanent record
          </div>
        </div>
      )}

      {/* Param label */}
      {mouseActive && paramText && (
        <div style={{
          position:'absolute',top:'.75rem',right:'1rem',
          fontSize:'9px',color:'rgba(235,225,205,.22)',
          fontFamily:"'Courier New',monospace",letterSpacing:'.05em',
          pointerEvents:'none',
        }}>
          {paramText}
        </div>
      )}

      {/* Controls */}
      <div style={{
        position:'absolute',bottom:0,left:0,right:0,
        padding:'.65rem 1.2rem',
        background:'linear-gradient(to top,rgba(6,6,6,.92) 55%,transparent)',
        display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'.8rem',
      }}>
        <div style={{fontSize:'9px',color:'rgba(235,225,205,.14)',fontStyle:'italic',maxWidth:'380px',lineHeight:1.6,fontFamily:'var(--font-serif)'}}>
          cursor position = Julia parameter <em>c</em> · frost accumulates as a permanent record of your path
        </div>
        <div style={{display:'flex',gap:'7px',flexShrink:0}}>
          <button
            onClick={() => setShowTrail(v => !v)}
            style={btnStyle(showTrail ? 'rgba(235,225,205,.75)' : 'rgba(235,225,205,.3)')}
          >
            {showTrail ? 'trail off' : 'trail on'}
          </button>
          <button
            onClick={() => stateRef.current.download?.(showTrail)}
            disabled={saving}
            style={btnStyle(saving ? 'rgba(235,225,205,.55)' : 'rgba(235,225,205,.3)')}
          >
            {saving ? 'saving…' : '↓ save'}
          </button>
          <button
            onClick={() => stateRef.current.reset?.()}
            style={btnStyle('rgba(235,225,205,.3)')}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  )
}

function btnStyle(color) {
  return {
    fontSize:'8px', letterSpacing:'.12em', textTransform:'uppercase',
    color, border:`1px solid ${color.replace(/[\d.]+\)$/, '0.25)')}`,
    background:'none', padding:'4px 10px', borderRadius:'2px', cursor:'pointer',
    transition:'color .2s',
  }
}
