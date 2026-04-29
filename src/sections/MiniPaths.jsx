export default function MiniPaths() {
  const topKeywords = [
    { label: 'Natural Beauty / Scenery', count: 10 },
    { label: 'Economic Development',     count: 10 },
    { label: 'Trails / Outdoor Recreation', count: 8 },
    { label: 'Affordable Housing',       count: 8 },
    { label: 'Trees / Forest',           count: 7 },
    { label: 'Arts / Public Art',        count: 7 },
    { label: 'Parks / Green Spaces',     count: 5 },
    { label: 'Community / Connection',   count: 5 },
  ]
  const max = 10

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">14 · Live Case Study</span>
        <h2 className="sec-title">The Mini Paths of Payson</h2>

        {/* Prominent access link */}
        <div
          style={{
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-deep)',
            borderRadius: '4px',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div>
            <div className="t-label-accent" style={{ marginBottom: '0.3rem' }}>
              Interactive Research Interface
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Explore participant paths, postcard responses, and research data
            </div>
          </div>
          <a
            href="https://minipaths-payson.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
          >
            Visit Interface <span className="arrow">→</span>
          </a>
        </div>

        {/* Three-column event summary */}
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          {[
            { n: '01', label: 'What Happened', text: 'April 25, 2026 — Community event in Payson, AZ. Participants marked paths meaningful to them on a large-format A0 map, then completed individual 5×7 postcards describing why.' },
            { n: '02', label: 'What Was Gathered', text: 'Spatial data: path selections across 21 outdoor and civic sites. Qualitative data: participant language describing place attachment, habit, and meaning. Both data sets are codable and comparable.' },
            { n: '03', label: 'What It Reveals', text: 'The activity functions as a low-risk, high-curiosity intervention — the same kind this research proposes as a means of priming a system for engagement with tension.' },
          ].map(({ n, label, text }) => (
            <div key={n} className="card">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', opacity: 0.5, marginBottom: '0.5rem' }}>{n}</div>
              <div className="card-label">{label}</div>
              <div className="card-body">{text}</div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        {/* Mentimeter keyword data */}
        <div>
          <div className="t-label-accent" style={{ marginBottom: '0.25rem' }}>
            Community Input Survey — March 7, 2026
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Top keyword mentions from community input meeting (96 total)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {topKeywords.map(({ label, count }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '160px', flexShrink: 0, fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                  {label}
                </div>
                <div style={{ flex: 1, height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${(count / max) * 100}%`, height: '100%', background: 'var(--accent)', borderRadius: '3px', transition: 'width 0.6s ease' }} />
                </div>
                <div style={{ width: '20px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sec-divider" />

        <div className="sec-body">
          <p style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            A participatory intervention · community journaling + mapping project · low-risk entry, engagement test
          </p>
        </div>
      </div>
    </div>
  )
}
