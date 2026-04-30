import { useEffect, useRef } from 'react'

/**
 * Julia background for the system map.
 * - Julia set at low resolution, updated as cursor moves
 * - Frost tip system on a persistent accumulation canvas
 * - Bloom field so unvisited areas stay dark (void blobs)
 * - Lightweight: MAX_TIPS capped at 1400, drops every 16 frames
 */
export default function JuliaBackground({ opacity = 0.18 }) {
  const wrapRef = useRef(null)
  const rafRef  = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const jC  = wrap.querySelector('#jbg-j')
    const frC = wrap.querySelector('#jbg-fr')
    const jx  = jC.getContext('2d')
    const fr  = frC.getContext('2d')

    const s = {
      cx:-0.7269, cy:0.1889, tcx:-0.7269, tcy:0.1889,
      W:1, H:1, dpr:1,
      mx:0, my:0, prevMx:0, prevMy:0,
      tips:[], blooms:[],
      dropTimer:0, frame:0,
      needsRender:true,
    }

    // ── Julia at 1/5 res ──────────────────────────────────────
    const JW=160, JH=90
    const off=document.createElement('canvas')
    off.width=JW; off.height=JH
    const ox=off.getContext('2d')
    const imgData=ox.createImageData(JW,JH)
    const pd=imgData.data
    const MAX=68
    const CX_MIN=-0.85,CX_MAX=0.35,CY_MIN=-0.65,CY_MAX=0.65

    function renderJulia(){
      const scale=3.2,aspect=s.W/s.H,{cx,cy}=s
      for(let py=0;py<JH;py++){
        for(let px=0;px<JW;px++){
          let zx=(px/JW-0.5)*scale*aspect,zy=(py/JH-0.5)*scale,n=0
          while(n<MAX){const zx2=zx*zx,zy2=zy*zy;if(zx2+zy2>4)break;zy=2*zx*zy+cy;zx=zx2-zy2+cx;n++}
          const i=(py*JW+px)*4
          if(n===MAX){pd[i]=4;pd[i+1]=4;pd[i+2]=4;pd[i+3]=255}
          else{const t=Math.pow(n/MAX,0.4),v=Math.round(t*200),w=Math.round(t*18*(1-t)*4);pd[i]=v+w;pd[i+1]=v+Math.round(w*.4);pd[i+2]=v;pd[i+3]=255}
        }
      }
      ox.putImageData(imgData,0,0)
      jx.clearRect(0,0,s.W,s.H)
      jx.imageSmoothingEnabled=true;jx.imageSmoothingQuality='high'
      jx.drawImage(off,0,0,s.W,s.H)
    }

    // ── Iso-contour sensing ───────────────────────────────────
    function escapeTime(zx0,zy0){
      let zx=zx0,zy=zy0,n=0
      while(n<MAX){const zx2=zx*zx,zy2=zy*zy;if(zx2+zy2>4)break;zy=2*zx*zy+s.cy;zx=zx2-zy2+s.cx;n++}
      return n
    }
    function canvasToZ(px,py){const scale=3.2,aspect=s.W/s.H;return{zx:(px/s.W-0.5)*scale*aspect,zy:(py/s.H-0.5)*scale}}
    function isoTangent(px,py){
      const GD=4,p=canvasToZ(px,py),r=canvasToZ(px+GD,py),u=canvasToZ(px,py-GD)
      const nR=escapeTime(r.zx,r.zy),nU=escapeTime(u.zx,u.zy),nC=escapeTime(p.zx,p.zy)
      const gx=nR-nC,gy=nU-nC,len=Math.sqrt(gx*gx+gy*gy)
      if(len<0.001)return Math.random()*Math.PI*2
      return Math.atan2(-gx/len,gy/len)
    }

    // ── Tips ──────────────────────────────────────────────────
    const GEN=[
      {maxAge:700, forkP:0.002,  alpha:0.22,lw:0.48,wobble:0.055,guided:true},
      {maxAge:420, forkP:0.008,  alpha:0.13,lw:0.34,wobble:0.075,guided:true},
      {maxAge:240, forkP:0.022,  alpha:0.075,lw:0.24,wobble:0.10,guided:false},
      {maxAge:120, forkP:0.055,  alpha:0.040,lw:0.16,wobble:0.14,guided:false},
      {maxAge:60,  forkP:0,      alpha:0.020,lw:0.10,wobble:0.18,guided:false},
    ]
    const STEP=0.36,MAX_TIPS=1400

    function spawnTip(x,y,angle,gen){if(s.tips.length>=MAX_TIPS)return;s.tips.push({x,y,angle,gen,age:0,st:0})}

    function updateTips(){
      const segs=[[],[],[],[],[]], forks=[]
      for(let i=s.tips.length-1;i>=0;i--){
        const t=s.tips[i];t.age++
        const g=GEN[t.gen]
        if(t.age>g.maxAge||t.x<1||t.x>s.W-1||t.y<1||t.y>s.H-1){s.tips.splice(i,1);continue}
        if(g.guided){t.st++;if(t.st>=22){t.st=0;const iso=isoTangent(t.x,t.y);const da=((iso-t.angle+Math.PI*3)%(Math.PI*2))-Math.PI;t.angle+=da*0.30}}
        t.angle+=(Math.random()-.5)*g.wobble
        const nx=t.x+Math.cos(t.angle)*STEP,ny=t.y+Math.sin(t.angle)*STEP
        segs[t.gen].push(t.x,t.y,nx,ny);t.x=nx;t.y=ny
        if(g.forkP>0&&Math.random()<g.forkP&&t.gen<4&&s.tips.length<MAX_TIPS)forks.push({x:t.x,y:t.y,angle:t.angle,gen:t.gen+1})
      }
      for(let g=0;g<5;g++){
        const sg=segs[g];if(!sg.length)continue
        fr.beginPath();fr.lineWidth=GEN[g].lw
        fr.strokeStyle=`rgba(245,238,222,${GEN[g].alpha})`
        for(let i=0;i<sg.length;i+=4){fr.moveTo(sg[i],sg[i+1]);fr.lineTo(sg[i+2],sg[i+3])}
        fr.stroke()
      }
      for(const f of forks){
        const da=(0.38+Math.random()*.42)*(Math.random()<.5?1:-1)
        spawnTip(f.x,f.y,f.angle+da,f.gen)
        if(Math.random()<.40)spawnTip(f.x,f.y,f.angle-da*.76,f.gen)
      }
    }

    // ── Blooms ────────────────────────────────────────────────
    function dropBloom(x,y){
      s.blooms.push({x,y,age:0,maxAge:100,r:9+Math.random()*7,bright:true})
      s.blooms.push({x,y,age:0,maxAge:150,r:38+Math.random()*28,bright:false})
    }
    function updateBlooms(){
      for(let i=s.blooms.length-1;i>=0;i--){
        const b=s.blooms[i];b.age++
        if(b.age>b.maxAge){s.blooms.splice(i,1);continue}
        const bp=b.age/b.maxAge,r=bp*b.r
        const peakA=b.bright?0.0062:0.0018
        const ba=Math.pow(Math.sin(Math.PI*bp),.75)*peakA
        if(ba>.0006){
          const g=fr.createRadialGradient(b.x,b.y,0,b.x,b.y,r)
          g.addColorStop(0,`rgba(192,184,168,${ba*1.6})`);g.addColorStop(.5,`rgba(172,165,152,${ba})`);g.addColorStop(1,`rgba(152,147,138,0)`)
          fr.beginPath();fr.arc(b.x,b.y,r,0,Math.PI*2);fr.fillStyle=g;fr.fill()
        }
      }
    }

    // ── Main loop ─────────────────────────────────────────────
    function tick(){
      rafRef.current=requestAnimationFrame(tick);s.frame++
      const prevCx=s.cx,prevCy=s.cy
      s.cx+=(s.tcx-s.cx)*0.025;s.cy+=(s.tcy-s.cy)*0.025
      if(Math.abs(s.cx-prevCx)>0.0004||Math.abs(s.cy-prevCy)>0.0004||s.needsRender){renderJulia();s.needsRender=false}
      s.dropTimer++
      if(s.dropTimer>=16){
        const angle=Math.atan2(s.my-s.prevMy,s.mx-s.prevMx)
        const perp=angle+Math.PI/2
        spawnTip(s.mx,s.my,perp+(Math.random()-.5)*.35,0)
        spawnTip(s.mx,s.my,perp+Math.PI+(Math.random()-.5)*.35,0)
        spawnTip(s.mx,s.my,Math.random()*Math.PI*2,1)
        dropBloom(s.mx,s.my)
        s.dropTimer=0
      }
      s.prevMx=s.mx;s.prevMy=s.my
      updateBlooms();updateTips()
    }

    function resize(){
      s.dpr=Math.min(window.devicePixelRatio||1,2)
      const rect=wrap.getBoundingClientRect()
      s.W=rect.width;s.H=rect.height
      for(const c of[jC,frC]){c.width=Math.round(s.W*s.dpr);c.height=Math.round(s.H*s.dpr)}
      jx.setTransform(s.dpr,0,0,s.dpr,0,0);fr.setTransform(s.dpr,0,0,s.dpr,0,0)
      s.needsRender=true
    }

    function handleMouseMove(e){
      const rect=wrap.getBoundingClientRect()
      s.mx=e.clientX-rect.left;s.my=e.clientY-rect.top
      s.tcx=CX_MIN+(s.mx/s.W)*(CX_MAX-CX_MIN)
      s.tcy=CY_MIN+(s.my/s.H)*(CY_MAX-CY_MIN)
    }

    resize()
    const ro=new ResizeObserver(resize)
    ro.observe(wrap)
    window.addEventListener('mousemove',handleMouseMove)
    tick()

    return()=>{
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove',handleMouseMove)
      ro.disconnect()
    }
  },[])

  return(
    <div
      ref={wrapRef}
      style={{position:'absolute',inset:0,pointerEvents:'none',opacity,transition:'opacity 1s ease'}}
    >
      <canvas id="jbg-j"  style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block'}}/>
      <canvas id="jbg-fr" style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block'}}/>
    </div>
  )
}
