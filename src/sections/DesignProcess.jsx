import { useEffect, useRef, useState } from 'react'

// Images live in public/images/ — no base64 needed
const LOGO_URL = '/images/sireneum-logo.png'
const BZ_URL   = '/images/bz-reaction.jpg'

function BZHover() {
  const [show, setShow] = useState(false)
  return (
    <span style={{ position:'relative', display:'inline-block' }}>
      <a
        href="https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction"
        target="_blank" rel="noopener noreferrer"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ color:'rgba(200,180,154,0.7)', fontSize:'0.72rem', letterSpacing:'0.08em' }}
        onClick={e => e.stopPropagation()}
      >
        ↗ Wikipedia
      </a>
      {show && (
        <div style={{
          position:'absolute', bottom:'calc(100% + 8px)', left:0,
          width:'220px', zIndex:300,
          background:'rgba(6,6,6,0.96)',
          border:'1px solid rgba(200,180,154,0.25)',
          borderRadius:'4px', overflow:'hidden',
          boxShadow:'0 8px 24px rgba(0,0,0,0.7)',
          pointerEvents:'none',
        }}>
          <img src={BZ_URL} alt="BZ reaction in a Petri dish"
            style={{ width:'100%', display:'block' }}/>
          <div style={{ padding:'0.4rem 0.6rem', fontSize:'0.6rem', color:'rgba(200,180,154,0.45)', lineHeight:1.4 }}>
            Photo: Stephen Morris · CC BY 2.0 · Wikimedia Commons
          </div>
        </div>
      )}
    </span>
  )
}

function ExplanationContent({ compact }) {
  const px = compact ? '0.8rem 1.1rem' : '1rem 1.4rem'
  const bodySize = compact ? '0.8rem' : '0.85rem'

  return (
    <div style={{ overflowY:'auto', flex:1 }}>
      {/* Synthesis — at top */}
      <div style={{ padding:px, borderBottom:'1px solid rgba(235,225,205,0.08)' }}>
        <div style={{ fontFamily:'Georgia,serif', fontStyle:'italic',
          fontSize: compact ? '0.82rem' : '0.88rem', lineHeight:1.75,
          color:'rgba(220,215,205,0.82)' }}>
          Good design doesn't follow a predetermined sequence. It explores, disturbs, and
          responds — accumulating a record of decisions that together form something
          no single step could have predicted.
        </div>
      </div>

      {/* 01 */}
      <div style={{ padding:px, borderBottom:'1px solid rgba(235,225,205,0.07)' }}>
        <div style={{ display:'flex', gap:'0.5rem', alignItems:'baseline', marginBottom:'0.3rem' }}>
          <span style={{ fontFamily:'Georgia,serif', fontSize:compact?'1rem':'1.1rem',
            fontWeight:800, color:'rgba(200,180,154,0.4)', flexShrink:0 }}>01</span>
          <span style={{ fontSize:'0.62rem', letterSpacing:'0.14em', textTransform:'uppercase',
            color:'rgba(200,180,154,0.72)', fontFamily:'sans-serif', fontWeight:500 }}>
            The Belousov-Zhabotinsky Reaction
          </span>
        </div>
        <div style={{ fontSize:bodySize, lineHeight:1.7, color:'rgba(200,200,195,0.72)', marginBottom:'0.45rem' }}>
          A chemical system that exhibits oscillatory state behavior. In a Petri dish, such a
          system responds to external disturbance by producing self-organizing patterns of growth.
        </div>
        <div style={{ marginBottom:'0.45rem' }}><BZHover /></div>
        <div style={{ fontSize:compact?'0.76rem':'0.8rem', lineHeight:1.65,
          color:'rgba(200,180,154,0.55)', fontStyle:'italic',
          paddingLeft:'0.6rem', borderLeft:'1px solid rgba(200,180,154,0.2)' }}>
          Interpretation: your cursor position shifts the Julia parameter c, changing which
          mathematical structure the medium presents. Moving through the space changes the
          field itself.
        </div>
      </div>

      {/* 02 */}
      <div style={{ padding:px, borderBottom:'1px solid rgba(235,225,205,0.07)' }}>
        <div style={{ display:'flex', gap:'0.5rem', alignItems:'baseline', marginBottom:'0.3rem' }}>
          <span style={{ fontFamily:'Georgia,serif', fontSize:compact?'1rem':'1.1rem',
            fontWeight:800, color:'rgba(200,180,154,0.4)', flexShrink:0 }}>02</span>
          <span style={{ fontSize:'0.62rem', letterSpacing:'0.14em', textTransform:'uppercase',
            color:'rgba(200,180,154,0.72)', fontFamily:'sans-serif', fontWeight:500 }}>
            Roomba's Vacuuming Algorithm
          </span>
        </div>
        <div style={{ fontSize:bodySize, lineHeight:1.7, color:'rgba(200,200,195,0.72)', marginBottom:'0.45rem' }}>
          Non-linear coverage: straight paths interrupted by deliberate turns at boundaries,
          gradually covering the whole space through accumulated iteration rather than a
          predetermined route.
        </div>
        <div style={{ fontSize:compact?'0.76rem':'0.8rem', lineHeight:1.65,
          color:'rgba(200,180,154,0.55)', fontStyle:'italic',
          paddingLeft:'0.6rem', borderLeft:'1px solid rgba(200,180,154,0.2)' }}>
          Interpretation: move your cursor in any direction. The path you take — however
          indirect — becomes the record of exploration. There is no "wrong" way to navigate
          this space.
        </div>
      </div>

      {/* 03 */}
      <div style={{ padding:px, borderBottom:'1px solid rgba(235,225,205,0.07)' }}>
        <div style={{ display:'flex', gap:'0.5rem', alignItems:'baseline', marginBottom:'0.3rem' }}>
          <span style={{ fontFamily:'Georgia,serif', fontSize:compact?'1rem':'1.1rem',
            fontWeight:800, color:'rgba(200,180,154,0.4)', flexShrink:0 }}>03</span>
          <span style={{ fontSize:'0.62rem', letterSpacing:'0.14em', textTransform:'uppercase',
            color:'rgba(200,180,154,0.72)', fontFamily:'sans-serif', fontWeight:500 }}>
            Electrical Discharge &amp; Hyphal Networks
          </span>
        </div>
        <div style={{ fontSize:bodySize, lineHeight:1.7, color:'rgba(200,200,195,0.72)', marginBottom:'0.45rem' }}>
          Lightning finds its path through a complex field by following lines of least
          resistance, branching and rebranching at each junction. Fungal hyphae grow outward
          in a similar pattern — extending, forking, and tracing the hidden structure of their
          environment.
        </div>
        <div style={{ fontSize:compact?'0.76rem':'0.8rem', lineHeight:1.65,
          color:'rgba(200,180,154,0.55)', fontStyle:'italic',
          paddingLeft:'0.6rem', borderLeft:'1px solid rgba(200,180,154,0.2)' }}>
          Interpretation: each cursor position seeds dendritic growth along the Julia set's
          boundary curves. The branching network that accumulates is a permanent record of
          where you've been and what the field presented.
        </div>
      </div>

      <div style={{ padding:px }}>
        <div style={{ fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase',
          color:'rgba(235,225,205,0.16)', fontFamily:'sans-serif' }}>
          Press S to save · T to toggle trail · R to reset
        </div>
      </div>
    </div>
  )
}

export default function DesignProcess({ standalone = false }) {
  const wrapRef   = useRef(null)
  const stateRef  = useRef({})
  const [mouseActive, setMouseActive] = useState(false)
  const [showTrail,   setShowTrail]   = useState(true)
  const [paramText,   setParamText]   = useState('')
  const [saving,      setSaving]      = useState(false)
  const [showExplain, setShowExplain] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    // In panel mode, canvases are inside #dp-canvas-wrap
    // In standalone mode, they fill the whole wrap
    const canvasWrap = standalone
      ? wrap
      : (wrap.querySelector('#dp-canvas-wrap') || wrap)

    const jC   = canvasWrap.querySelector('#dp-jC')  || wrap.querySelector('#dp-jC')
    const frC  = canvasWrap.querySelector('#dp-frC') || wrap.querySelector('#dp-frC')
    const fgEl = canvasWrap.querySelector('#dp-fgC') || wrap.querySelector('#dp-fgC')
    if (!jC || !frC || !fgEl) return

    const jx = jC.getContext('2d')
    const fr = frC.getContext('2d')
    const fc = fgEl.getContext('2d')

    const s = stateRef.current
    Object.assign(s, {
      W:1, H:1, dpr:1,
      cx:-0.7269, cy:0.1889, tcx:-0.7269, tcy:0.1889,
      needsRender:true, mouseActive:false, showTrail:true,
      tips:[], blooms:[], trail:[],
      dropTimer:0, frame:0, mx:0, my:0, raf:null,
      logoImg: null,
    })

    // Load logo from public/images/
    const logo = new Image()
    logo.onload = () => { s.logoImg = logo }
    logo.src = LOGO_URL

    // ── Julia — warm sepia exterior, soft interior ─────────────
    const JW=220, JH=124
    const offC = document.createElement('canvas')
    offC.width=JW; offC.height=JH
    const ox = offC.getContext('2d')
    const imgData = ox.createImageData(JW,JH)
    const pd = imgData.data
    const MAX_ITER=72
    const CX_MIN=-0.85, CX_MAX=0.35, CY_MIN=-0.65, CY_MAX=0.65

    function renderJulia() {
      const {cx,cy} = s, scale=3.2, aspect=s.W/s.H
      for (let py=0; py<JH; py++) {
        for (let px=0; px<JW; px++) {
          let zx=(px/JW-0.5)*scale*aspect, zy=(py/JH-0.5)*scale, n=0
          while (n<MAX_ITER) {
            const zx2=zx*zx, zy2=zy*zy
            if (zx2+zy2>4) break
            zy=2*zx*zy+cy; zx=zx2-zy2+cx; n++
          }
          const i=(py*JW+px)*4
          if (n===MAX_ITER) {
            pd[i]=32; pd[i+1]=28; pd[i+2]=22; pd[i+3]=255
          } else {
            const t=Math.pow(n/MAX_ITER,0.38)
            const v=Math.round(t*225), w=Math.round(t*22*(1-t)*4)
            pd[i]=v+w; pd[i+1]=v+Math.round(w*.5); pd[i+2]=v; pd[i+3]=255
          }
        }
      }
      ox.putImageData(imgData,0,0)
      jx.clearRect(0,0,s.W,s.H)
      jx.filter='blur(2px)'
      jx.imageSmoothingEnabled=true; jx.imageSmoothingQuality='high'
      jx.drawImage(offC,0,0,s.W,s.H)
      jx.filter='none'
    }

    function escapeTime(zx0,zy0) {
      let zx=zx0,zy=zy0,n=0
      while (n<MAX_ITER) {
        const zx2=zx*zx,zy2=zy*zy
        if (zx2+zy2>4) break
        zy=2*zx*zy+s.cy; zx=zx2-zy2+s.cx; n++
      }
      return n
    }
    function canvasToZ(px,py) {
      const scale=3.2, aspect=s.W/s.H
      return {zx:(px/s.W-0.5)*scale*aspect, zy:(py/s.H-0.5)*scale}
    }
    function isoTangent(px,py) {
      const GD=3.5, p=canvasToZ(px,py), r=canvasToZ(px+GD,py), u=canvasToZ(px,py-GD)
      const nR=escapeTime(r.zx,r.zy), nU=escapeTime(u.zx,u.zy), nC=escapeTime(p.zx,p.zy)
      const gx=nR-nC, gy=nU-nC, len=Math.sqrt(gx*gx+gy*gy)
      if (len<0.001) return Math.random()*Math.PI*2
      return Math.atan2(-gx/len, gy/len)
    }

    const GEN=[
      {maxAge:900, forkP:0.0018, alpha:0.30, lw:0.56, wobble:0.052, guided:true},
      {maxAge:540, forkP:0.007,  alpha:0.18, lw:0.40, wobble:0.072, guided:true},
      {maxAge:300, forkP:0.02,   alpha:0.10, lw:0.28, wobble:0.10,  guided:false},
      {maxAge:150, forkP:0.05,   alpha:0.055,lw:0.18, wobble:0.14,  guided:false},
      {maxAge:75,  forkP:0,      alpha:0.026,lw:0.11, wobble:0.18,  guided:false},
    ]
    const STEP=0.38, MAX_TIPS=2800
    const blooms=[]

    function spawnTip(x,y,angle,gen) {
      if (s.tips.length>=MAX_TIPS) return
      s.tips.push({x,y,angle,gen,age:0,st:0})
    }
    function updateTips() {
      const segs=[[],[],[],[],[]], forks=[]
      for (let i=s.tips.length-1; i>=0; i--) {
        const t=s.tips[i]; t.age++
        const g=GEN[t.gen]
        if (t.age>g.maxAge||t.x<1||t.x>s.W-1||t.y<1||t.y>s.H-1) { s.tips.splice(i,1); continue }
        if (g.guided) {
          t.st++
          if (t.st>=18) { t.st=0; const iso=isoTangent(t.x,t.y); const da=((iso-t.angle+Math.PI*3)%(Math.PI*2))-Math.PI; t.angle+=da*0.32 }
        }
        t.angle+=(Math.random()-.5)*g.wobble
        const nx=t.x+Math.cos(t.angle)*STEP, ny=t.y+Math.sin(t.angle)*STEP
        segs[t.gen].push(t.x,t.y,nx,ny); t.x=nx; t.y=ny
        if (g.forkP>0&&Math.random()<g.forkP&&t.gen<4&&s.tips.length<MAX_TIPS)
          forks.push({x:t.x,y:t.y,angle:t.angle,gen:t.gen+1})
      }
      for (let g=0; g<5; g++) {
        const sg=segs[g]; if (!sg.length) continue
        fr.beginPath(); fr.lineWidth=GEN[g].lw
        fr.strokeStyle=`rgba(245,238,222,${GEN[g].alpha})`
        for (let i=0; i<sg.length; i+=4) { fr.moveTo(sg[i],sg[i+1]); fr.lineTo(sg[i+2],sg[i+3]) }
        fr.stroke()
      }
      for (const f of forks) {
        const da=(0.38+Math.random()*.42)*(Math.random()<.5?1:-1)
        spawnTip(f.x,f.y,f.angle+da,f.gen)
        if (Math.random()<.42) spawnTip(f.x,f.y,f.angle-da*.76,f.gen)
      }
    }
    function dropBloom(x,y) {
      blooms.push({x,y,age:0,maxAge:110,r:10+Math.random()*8,bright:true})
      blooms.push({x,y,age:0,maxAge:165,r:44+Math.random()*34,bright:false})
    }
    function updateBlooms() {
      for (let i=blooms.length-1; i>=0; i--) {
        const b=blooms[i]; b.age++
        if (b.age>b.maxAge) { blooms.splice(i,1); continue }
        const bp=b.age/b.maxAge, r=bp*b.r
        const peakA=b.bright?0.0072:0.002, ba=Math.pow(Math.sin(Math.PI*bp),.75)*peakA
        if (ba>.0007) {
          const g=fr.createRadialGradient(b.x,b.y,0,b.x,b.y,r)
          g.addColorStop(0,`rgba(192,184,168,${ba*1.7})`); g.addColorStop(.5,`rgba(172,165,152,${ba})`); g.addColorStop(1,`rgba(152,147,138,0)`)
          fr.beginPath(); fr.arc(b.x,b.y,r,0,Math.PI*2); fr.fillStyle=g; fr.fill()
        }
      }
    }

    function tick() {
      s.raf=requestAnimationFrame(tick); s.frame++
      const prevCx=s.cx, prevCy=s.cy
      s.cx+=(s.tcx-s.cx)*0.06; s.cy+=(s.tcy-s.cy)*0.06
      if (Math.abs(s.cx-prevCx)>0.0003||Math.abs(s.cy-prevCy)>0.0003||s.needsRender) {
        renderJulia(); s.needsRender=false
      }
      if (s.mouseActive) setParamText(`c = ${s.cx.toFixed(4)} + ${s.cy.toFixed(4)}i`)
      s.trail.push({x:s.mx,y:s.my})
      if (s.trail.length>900) s.trail.shift()
      s.dropTimer++
      if (s.dropTimer>=12&&s.mouseActive) {
        const tl=s.trail.length
        if (tl>2) {
          const prev=s.trail[tl-3]
          const angle=Math.atan2(s.my-prev.y,s.mx-prev.x), perp=angle+Math.PI/2
          spawnTip(s.mx,s.my,perp+(Math.random()-.5)*.32,0)
          spawnTip(s.mx,s.my,perp+Math.PI+(Math.random()-.5)*.32,0)
          spawnTip(s.mx,s.my,Math.random()*Math.PI*2,1)
        }
        dropBloom(s.mx,s.my); s.dropTimer=0
      }
      updateBlooms(); updateTips()
      fc.clearRect(0,0,s.W,s.H)
      if (s.showTrail) {
        const tl=s.trail.length
        if (tl>1) {
          const st=Math.max(0,tl-500)
          for (let i=st; i<tl-1; i++) {
            const t=(i-st)/500
            fc.beginPath(); fc.strokeStyle=`rgba(245,235,215,${t*.5})`; fc.lineWidth=.82
            fc.moveTo(s.trail[i].x,s.trail[i].y); fc.lineTo(s.trail[i+1].x,s.trail[i+1].y); fc.stroke()
          }
        }
      }
      if (s.mouseActive) {
        const pulse=.5+.5*Math.sin(s.frame*.08)
        fc.beginPath(); fc.arc(s.mx,s.my,2.8,0,Math.PI*2)
        fc.fillStyle=`rgba(255,252,248,${.9+pulse*.1})`; fc.fill()
        fc.beginPath(); fc.arc(s.mx,s.my,7+pulse*4,0,Math.PI*2)
        fc.strokeStyle=`rgba(240,228,205,${.15*pulse})`; fc.lineWidth=.8; fc.stroke()
      }
    }

    function handleResize() {
      s.dpr=Math.min(window.devicePixelRatio||1,2)
      const cw = standalone ? wrap : (wrap.querySelector('#dp-canvas-wrap')||wrap)
      const rect=cw.getBoundingClientRect()
      s.W=rect.width; s.H=rect.height
      for (const c of [jC,frC,fgEl]) { c.width=Math.round(s.W*s.dpr); c.height=Math.round(s.H*s.dpr) }
      jx.setTransform(s.dpr,0,0,s.dpr,0,0); fr.setTransform(s.dpr,0,0,s.dpr,0,0); fc.setTransform(s.dpr,0,0,s.dpr,0,0)
      s.needsRender=true
    }

    function handleMouseMove(e) {
      const cw = standalone ? wrap : (wrap.querySelector('#dp-canvas-wrap')||wrap)
      const rect=cw.getBoundingClientRect()
      s.mx=e.clientX-rect.left; s.my=e.clientY-rect.top
      s.tcx=CX_MIN+(s.mx/s.W)*(CX_MAX-CX_MIN)
      s.tcy=CY_MIN+(s.my/s.H)*(CY_MAX-CY_MIN)
      if (!s.mouseActive) { s.mouseActive=true; setMouseActive(true) }
    }

    wrap.addEventListener('mousemove',handleMouseMove)
    const ro=new ResizeObserver(handleResize)
    ro.observe(standalone ? wrap : (wrap.querySelector('#dp-canvas-wrap')||wrap))
    setTimeout(handleResize,50)
    tick()

    s.reset=()=>{
      s.tips.length=0; blooms.length=0; s.trail.length=0
      s.frame=0; s.dropTimer=0; s.mouseActive=false
      s.cx=-0.7269; s.cy=0.1889; s.tcx=s.cx; s.tcy=s.cy
      fr.clearRect(0,0,s.W,s.H); s.needsRender=true
      setMouseActive(false); setParamText('')
    }

    s.download=(withTrail)=>{
      setSaving(true)
      const out=document.createElement('canvas')
      out.width=Math.round(s.W*s.dpr); out.height=Math.round(s.H*s.dpr)
      const oc=out.getContext('2d')
      oc.drawImage(jC,0,0); oc.drawImage(frC,0,0)
      if (withTrail) oc.drawImage(fgEl,0,0)
      if (s.logoImg) {
        const pad=Math.round(out.width*0.018)
        const logoH=Math.round(out.height*0.085)
        const logoW=Math.round(logoH*(s.logoImg.naturalWidth/s.logoImg.naturalHeight))
        const lx=out.width-logoW-pad, ly=out.height-logoH-pad
        const bp=Math.round(logoH*0.22)
        oc.fillStyle='rgba(0,0,0,0.38)'; oc.fillRect(lx-bp,ly-bp,logoW+bp*2,logoH+bp*2)
        oc.globalAlpha=0.62; oc.drawImage(s.logoImg,lx,ly,logoW,logoH); oc.globalAlpha=1
      }
      out.toBlob(blob=>{
        const url=URL.createObjectURL(blob), a=document.createElement('a')
        const re=s.cx.toFixed(3).replace('-','n').replace('.','p')
        const im=s.cy.toFixed(3).replace('-','n').replace('.','p')
        a.download=`sireneum_outofphase_c${re}_${im}.png`; a.href=url; a.click()
        setTimeout(()=>URL.revokeObjectURL(url),2000); setSaving(false)
      },'image/png')
    }

    function handleKeyDown(e) {
      if ((e.key==='s'||e.key==='S')&&!e.metaKey&&!e.ctrlKey) { e.preventDefault(); s.download?.(stateRef.current.showTrail) }
      if ((e.key==='r'||e.key==='R')&&!e.metaKey&&!e.ctrlKey) { e.preventDefault(); s.reset?.() }
      if ((e.key==='t'||e.key==='T')&&!e.metaKey&&!e.ctrlKey) { e.preventDefault(); setShowTrail(v=>!v) }
    }
    window.addEventListener('keydown',handleKeyDown)

    return () => {
      cancelAnimationFrame(s.raf)
      wrap.removeEventListener('mousemove',handleMouseMove)
      window.removeEventListener('keydown',handleKeyDown)
      ro.disconnect()
    }
  }, [standalone])

  useEffect(() => { stateRef.current.showTrail=showTrail }, [showTrail])

  const ctrlBar = (
    <div style={{ display:'flex', gap:'6px', alignItems:'center' }}>
      <span style={{ fontSize:'7px', letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(235,225,205,.14)', marginRight:'2px' }}>
        <span style={{ color:'rgba(235,225,205,.28)' }}>S</span> save ·{' '}
        <span style={{ color:'rgba(235,225,205,.28)' }}>T</span> trail ·{' '}
        <span style={{ color:'rgba(235,225,205,.28)' }}>R</span> reset
      </span>
      {[
        {label:showTrail?'trail off':'trail on', color:showTrail?'rgba(235,225,205,.75)':'rgba(235,225,205,.3)', fn:()=>setShowTrail(v=>!v)},
        {label:saving?'saving…':'↓ save', color:'rgba(235,225,205,.3)', fn:()=>stateRef.current.download?.(showTrail), dis:saving},
        {label:'reset', color:'rgba(235,225,205,.3)', fn:()=>stateRef.current.reset?.()},
      ].map(({label,color,fn,dis})=>(
        <button key={label} onClick={fn} disabled={dis} style={{
          fontSize:'7.5px', letterSpacing:'.12em', textTransform:'uppercase',
          color, border:`1px solid ${color.replace(/[\d.]+\)$/,'0.2)')}`,
          background:'none', padding:'3px 8px', borderRadius:'2px', cursor:'pointer',
        }}>{label}</button>
      ))}
    </div>
  )

  // ── PANEL MODE ──────────────────────────────────────────────
  if (!standalone) {
    return (
      <div ref={wrapRef} style={{ display:'flex', flexDirection:'column', height:'100%', background:'#060606', overflow:'hidden' }}>

        {/* Header */}
        <div style={{ padding:'0.75rem 1.1rem 0.5rem', borderBottom:'1px solid rgba(235,225,205,0.09)', flexShrink:0 }}>
          <div style={{ fontSize:'0.56rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(200,180,154,0.52)', fontFamily:'sans-serif', marginBottom:'0.18rem' }}>
            Design Process
          </div>
          <div style={{ fontFamily:'Georgia,serif', fontSize:'1rem', fontWeight:700, color:'rgba(240,235,225,0.9)' }}>
            My Design Process
          </div>
        </div>

        {/* Explanation — always visible */}
        <div style={{ flex:'0 0 auto', maxHeight:'52%', overflowY:'auto', borderBottom:'1px solid rgba(235,225,205,0.09)' }}>
          <ExplanationContent compact={true} />
        </div>

        {/* Canvas animation */}
        <div id="dp-canvas-wrap" style={{ flex:1, position:'relative', overflow:'hidden', cursor:'crosshair', minHeight:'180px' }}>
          <canvas id="dp-jC"  style={{ position:'absolute',inset:0,width:'100%',height:'100%',display:'block' }}/>
          <canvas id="dp-frC" style={{ position:'absolute',inset:0,width:'100%',height:'100%',display:'block' }}/>
          <canvas id="dp-fgC" style={{ position:'absolute',inset:0,width:'100%',height:'100%',display:'block' }}/>

          {!mouseActive && (
            <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
              <span style={{ fontSize:'9px',letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(235,225,205,.22)',fontFamily:'sans-serif' }}>
                move cursor here
              </span>
            </div>
          )}

          <a href="/design-process" target="_blank" rel="noopener noreferrer" style={{
            position:'absolute', top:'0.6rem', right:'0.6rem',
            fontSize:'7.5px', letterSpacing:'.16em', textTransform:'uppercase',
            color:'rgba(200,180,154,0.68)', border:'1px solid rgba(200,180,154,0.3)',
            background:'rgba(6,6,6,0.75)', padding:'4px 10px', borderRadius:'2px',
            textDecoration:'none', zIndex:5, backdropFilter:'blur(4px)',
          }}
            onMouseEnter={e=>{ e.currentTarget.style.color='rgba(200,180,154,1)'; e.currentTarget.style.borderColor='rgba(200,180,154,0.75)' }}
            onMouseLeave={e=>{ e.currentTarget.style.color='rgba(200,180,154,0.68)'; e.currentTarget.style.borderColor='rgba(200,180,154,0.3)' }}
          >
            ↗ Explore fullscreen
          </a>

          {mouseActive && paramText && (
            <div style={{ position:'absolute',bottom:'2.5rem',right:'0.6rem',fontSize:'8px',color:'rgba(235,225,205,.18)',fontFamily:"'Courier New',monospace",pointerEvents:'none' }}>
              {paramText}
            </div>
          )}

          <div style={{ position:'absolute',bottom:0,left:0,right:0,
            padding:'.4rem 0.7rem', background:'linear-gradient(to top,rgba(6,6,6,.9) 60%,transparent)',
            display:'flex', alignItems:'center', justifyContent:'flex-end' }}>
            {ctrlBar}
          </div>
        </div>
      </div>
    )
  }

  // ── STANDALONE MODE ─────────────────────────────────────────
  return (
    <div ref={wrapRef} style={{ width:'100%', height:'100%', position:'relative', background:'#060606', overflow:'hidden', cursor:'crosshair' }}>

      <canvas id="dp-jC"  style={{ position:'absolute',inset:0,width:'100%',height:'100%',display:'block' }}/>
      <canvas id="dp-frC" style={{ position:'absolute',inset:0,width:'100%',height:'100%',display:'block' }}/>
      <canvas id="dp-fgC" style={{ position:'absolute',inset:0,width:'100%',height:'100%',display:'block' }}/>

      {showExplain && (
        <div style={{
          position:'absolute', top:0, left:0, bottom:0,
          width:'clamp(280px,32%,380px)',
          background:'rgba(6,6,6,0.93)', borderRight:'1px solid rgba(235,225,205,0.1)',
          zIndex:100, display:'flex', flexDirection:'column', backdropFilter:'blur(8px)',
          animation:'slideIn 0.3s ease',
        }}>
          <style>{`@keyframes slideIn{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}`}</style>
          <div style={{ padding:'0.9rem 1.4rem 0.6rem', borderBottom:'1px solid rgba(235,225,205,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
            <div>
              <div style={{ fontSize:'0.56rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(200,180,154,0.52)',fontFamily:'sans-serif',marginBottom:'0.18rem' }}>
                Design Process
              </div>
              <div style={{ fontFamily:'Georgia,serif',fontSize:'1.05rem',fontWeight:700,color:'rgba(240,235,225,0.9)' }}>
                My Design Process
              </div>
            </div>
            <button onClick={()=>setShowExplain(false)}
              style={{ background:'none',border:'none',cursor:'pointer',color:'rgba(235,225,205,.32)',fontSize:'1.1rem',lineHeight:1 }}
              onMouseEnter={e=>e.target.style.color='rgba(235,225,205,.8)'}
              onMouseLeave={e=>e.target.style.color='rgba(235,225,205,.32)'}
            >×</button>
          </div>
          <ExplanationContent compact={false} />
        </div>
      )}

      {!mouseActive && !showExplain && (
        <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'.6rem',pointerEvents:'none' }}>
          <div style={{ fontSize:'11px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(235,225,205,.28)',fontFamily:'sans-serif' }}>
            move your cursor to reshape the set
          </div>
          <div style={{ fontSize:'9px',color:'rgba(235,225,205,.14)',fontStyle:'italic',fontFamily:'Georgia,serif' }}>
            your position determines the mathematical structure · your path leaves a permanent record
          </div>
        </div>
      )}

      {mouseActive && paramText && (
        <div style={{ position:'absolute',top:'.75rem',right:'1rem',fontSize:'9px',color:'rgba(235,225,205,.22)',fontFamily:"'Courier New',monospace",letterSpacing:'.05em',pointerEvents:'none' }}>
          {paramText}
        </div>
      )}

      <button onClick={()=>setShowExplain(v=>!v)} style={{
        position:'absolute', bottom:'3rem', left:'1rem',
        fontSize:'8px', letterSpacing:'.16em', textTransform:'uppercase',
        color: showExplain?'rgba(200,180,154,.9)':'rgba(235,225,205,.4)',
        border:`1px solid ${showExplain?'rgba(200,180,154,.5)':'rgba(235,225,205,.18)'}`,
        background:'rgba(6,6,6,0.72)', padding:'5px 12px', borderRadius:'2px', cursor:'pointer', zIndex:101,
        backdropFilter:'blur(4px)', transition:'color .2s,border-color .2s',
      }}
        onMouseEnter={e=>{ e.currentTarget.style.color='rgba(200,180,154,.9)'; e.currentTarget.style.borderColor='rgba(200,180,154,.5)' }}
        onMouseLeave={e=>{ e.currentTarget.style.color=showExplain?'rgba(200,180,154,.9)':'rgba(235,225,205,.4)'; e.currentTarget.style.borderColor=showExplain?'rgba(200,180,154,.5)':'rgba(235,225,205,.18)' }}
      >
        {showExplain ? '× close' : '? about this visualization'}
      </button>

      <div style={{ position:'absolute',bottom:0,left:0,right:0,
        padding:'.65rem 1rem', background:'linear-gradient(to top,rgba(6,6,6,.9) 55%,transparent)',
        display:'flex', alignItems:'flex-end', justifyContent:'flex-end' }}>
        {ctrlBar}
      </div>
    </div>
  )
}
