import { useState } from 'react'

const mentimeterKeywords = [
  { label: 'Natural Beauty / Scenery',       count: 10 },
  { label: 'Economic Development',           count: 10 },
  { label: 'Trails / Outdoor Recreation',    count: 8  },
  { label: 'Affordable Housing',             count: 8  },
  { label: 'Trees / Forest',                 count: 7  },
  { label: 'Arts / Public Art',              count: 7  },
  { label: 'Parks / Green Spaces',           count: 5  },
  { label: 'Community / Connection',         count: 5  },
]

const miniPathsPatterns = [
  { label: 'Natural trails and paths',       pct: 76 },
  { label: 'Outdoor recreation access',      pct: 62 },
  { label: 'Civic gathering spaces',         pct: 48 },
  { label: 'Water features / riparian',      pct: 35 },
  { label: 'Historic downtown corridor',     pct: 31 },
]

function KeyTakeaways({ onClose }) {
  return (
    <div className="sec-block">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.5rem' }}>
        <div>
          <span className="sec-kicker">Key Takeaways</span>
          <h3 className="t-heading" style={{ fontSize:'1.4rem', color:'var(--text-primary)', marginTop:'0.3rem' }}>
            What the Research Reveals
          </h3>
        </div>
        <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer',
          fontSize:'0.7rem', letterSpacing:'0.14em', textTransform:'uppercase',
          color:'var(--text-muted)', padding:0 }}>
          ← back
        </button>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}>
        {[
          {
            source: 'Mentimeter Survey · March 2026',
            title: 'The System Already Has Assets',
            body: 'Community members consistently name natural beauty, trails, outdoor access, and community connection as defining strengths — alongside economic development as a stated priority. These values do not appear to be in conflict within the community\'s own self-perception.',
            arrow: 'The tension is not between "development" and "nature." It is between asset awareness and the infrastructure to activate those assets.',
          },
          {
            source: 'Interviews · Aleshire + Smith · Jan–Apr 2026',
            title: 'Relationships Shape Response',
            body: 'Long-standing social structures and trust networks within Payson mediate how new ideas are received. Both informants independently described the outsized influence of a relatively small number of key relational nodes on community decision-making.',
            arrow: 'Change in low-density systems is not blocked by the absence of good ideas. It is shaped by the topology of trust.',
          },
          {
            source: 'Mini Paths of Payson · April 2026',
            title: 'Movement Reveals Identity',
            body: 'The paths community members already take — and their language for describing why — reveal patterns of place attachment not captured in formal planning data. Outdoor spaces function as connective tissue between individual routine and community identity.',
            arrow: 'Architecture\'s entry point in this context is not the building. It is the path that leads to it.',
          },
        ].map(({ source, title, body, arrow }) => (
          <div key={title} style={{ background:'var(--surface-raise)', border:'1px solid var(--border)', borderRadius:'4px', overflow:'hidden' }}>
            <div style={{ padding:'0.5rem 1.1rem', background:'var(--accent-dim)', borderBottom:'1px solid var(--border)' }}>
              <span style={{ fontSize:'0.62rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--accent)', fontWeight:500 }}>
                {source}
              </span>
            </div>
            <div style={{ padding:'1rem 1.1rem' }}>
              <div className="t-heading" style={{ fontSize:'0.95rem', color:'var(--text-primary)', marginBottom:'0.5rem' }}>{title}</div>
              <div className="t-body" style={{ marginBottom:'0.75rem' }}>{body}</div>
              <div style={{ borderTop:'1px solid var(--border)', paddingTop:'0.6rem', fontSize:'0.85rem', fontStyle:'italic', color:'var(--accent)' }}>
                → {arrow}
              </div>
            </div>
          </div>
        ))}

        <div style={{ padding:'1rem', background:'var(--accent-dim)', border:'1px solid rgba(200,180,154,0.2)', borderRadius:'3px', marginTop:'0.5rem' }}>
          <div style={{ fontSize:'0.85rem', lineHeight:1.75, color:'var(--text-primary)', fontStyle:'italic' }}>
            Each finding confirms the same principle: the conditions that allow engagement to happen precede — and determine — the quality of the outcome. Architecture's leverage is in structuring those conditions.
          </div>
        </div>

        <div style={{ fontSize:'0.72rem', color:'var(--text-muted)', marginTop:'0.25rem' }}>
          Full data sets compiled in research documentation. Interactive interface at{' '}
          <a href="https://minipaths-payson.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color:'var(--accent)' }}>
            minipaths-payson.netlify.app
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Results() {
  const [showTakeaways, setShowTakeaways] = useState(false)
  const max = Math.max(...mentimeterKeywords.map(k => k.count))

  if (showTakeaways) return <KeyTakeaways onClose={() => setShowTakeaways(false)} />

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">Research Results</span>
        <h2 className="sec-title">What the Community Said</h2>

        {/* Word Cloud */}
        <div style={{ marginBottom:'1.5rem' }}>
          <div className="t-label-accent" style={{ marginBottom:'0.6rem' }}>
            Community Input Survey — Mentimeter Word Cloud · March 7, 2026 · 96 responses
          </div>
          <div style={{
            borderRadius:'4px', overflow:'hidden',
            border:'1px solid var(--border)',
            background:'var(--surface-raise)',
            lineHeight: 0,
          }}>
            <video
              autoPlay loop muted playsInline
              style={{ width:'100%', display:'block', maxHeight:'240px', objectFit:'cover' }}
            >
              <source src="/videos/community-word-cloud.webm" type="video/webm" />
              <div style={{ padding:'2rem', textAlign:'center', color:'var(--text-muted)', fontSize:'0.8rem' }}>
                Word cloud video — place community-word-cloud.webm in public/videos/
              </div>
            </video>
          </div>
        </div>

        {/* Keyword bar chart */}
        <div style={{ marginBottom:'1.75rem' }}>
          <div className="t-label-accent" style={{ marginBottom:'0.75rem' }}>Top keyword mentions</div>
          <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
            {mentimeterKeywords.map(({ label, count }) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                <div style={{ width:'170px', flexShrink:0, fontSize:'0.73rem', color:'var(--text-secondary)', textAlign:'right', lineHeight:1.3 }}>
                  {label}
                </div>
                <div style={{ flex:1, height:'8px', background:'var(--border)', borderRadius:'4px', overflow:'hidden' }}>
                  <div style={{
                    width:`${(count/max)*100}%`, height:'100%',
                    background:'var(--accent)', borderRadius:'4px',
                    transition:'width 0.8s ease',
                  }}/>
                </div>
                <div style={{ width:'22px', fontSize:'0.72rem', color:'var(--text-muted)', fontWeight:500 }}>{count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sec-divider" />

        {/* Mini Paths Summary */}
        <div style={{ marginBottom:'1.5rem' }}>
          <div className="t-label-accent" style={{ marginBottom:'0.6rem' }}>
            The Mini Paths of Payson · April 25, 2026
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'0.75rem', marginBottom:'1rem' }}>
            {[
              { n:'21', label:'Outdoor & civic sites mapped' },
              { n:'∞',  label:'Unique path combinations recorded' },
              { n:'3',  label:'Primary themes in postcard language' },
            ].map(({ n, label }) => (
              <div key={label} className="card" style={{ textAlign:'center', padding:'1rem 0.75rem' }}>
                <div style={{ fontFamily:'var(--font-serif)', fontSize:'2rem', fontWeight:800, color:'var(--accent)', marginBottom:'0.3rem' }}>{n}</div>
                <div className="card-body" style={{ fontSize:'0.75rem', lineHeight:1.4 }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="t-label-accent" style={{ marginBottom:'0.6rem', marginTop:'1rem' }}>
            Most-selected path types
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem', marginBottom:'1rem' }}>
            {miniPathsPatterns.map(({ label, pct }) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                <div style={{ width:'180px', flexShrink:0, fontSize:'0.73rem', color:'var(--text-secondary)', textAlign:'right' }}>
                  {label}
                </div>
                <div style={{ flex:1, height:'6px', background:'var(--border)', borderRadius:'3px', overflow:'hidden' }}>
                  <div style={{ width:`${pct}%`, height:'100%', background:'var(--accent)', opacity:0.7, borderRadius:'3px' }}/>
                </div>
                <div style={{ width:'32px', fontSize:'0.7rem', color:'var(--text-muted)' }}>{pct}%</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize:'0.72rem', color:'var(--text-muted)', fontStyle:'italic', marginBottom:'1rem' }}>
            Note: Mini Paths data is preliminary. Percentages are estimated from postcard and map annotation review.
          </div>

          <a
            href="https://minipaths-payson.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
            style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem' }}
          >
            Explore the interactive research interface <span>→</span>
          </a>
        </div>

        <div className="sec-divider" />

        {/* Key Takeaways CTA */}
        <button
          onClick={() => setShowTakeaways(true)}
          style={{
            width:'100%', padding:'0.9rem 1rem',
            background:'var(--accent-dim)',
            border:'1px solid rgba(200,180,154,0.25)',
            borderRadius:'4px', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'space-between',
            transition:'border-color 0.2s',
          }}
          onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(200,180,154,0.55)'}
          onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(200,180,154,0.25)'}
        >
          <div style={{ textAlign:'left' }}>
            <div style={{ fontSize:'0.68rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'0.2rem', fontFamily:'var(--font-sans)' }}>
              Key Takeaways
            </div>
            <div style={{ fontSize:'0.85rem', color:'var(--text-primary)' }}>
              What the research is revealing →
            </div>
          </div>
          <div style={{ fontSize:'1.2rem', color:'var(--accent)' }}>→</div>
        </button>
      </div>
    </div>
  )
}
