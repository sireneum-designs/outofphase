export default function Findings() {
  const findings = [
    {
      source: 'Mentimeter Survey · March 2026',
      title: 'The System Already Has Assets',
      body: 'Community members consistently name natural beauty, trails, outdoor access, and community connection as defining strengths — alongside economic development as a stated priority. These values do not appear to be in conflict within the community\'s own self-perception.',
      implication: '→  The tension is not between "development" and "nature." It is between asset awareness and the infrastructure to activate those assets.',
    },
    {
      source: 'Interviews · Aleshire + Smith · Jan–Apr 2026',
      title: 'Relationships Shape Response',
      body: 'Long-standing social structures and trust networks within Payson mediate how new ideas are received. Both informants independently described the outsized influence of a relatively small number of key relational nodes on community decision-making.',
      implication: '→  Change in low-density systems is not blocked by the absence of good ideas. It is shaped by the topology of trust.',
    },
    {
      source: 'Mini Paths · April 2026',
      title: 'Movement Reveals Identity',
      body: 'The paths community members already take — and their language for describing why — reveal patterns of place attachment not captured in formal planning data. Outdoor spaces function as connective tissue between individual routine and community identity.',
      implication: '→  Architecture\'s entry point in this context is not the building. It is the path that leads to it.',
    },
  ]

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">Synthesis · Emerging Findings</span>
        <h2 className="sec-title">What the Research Is Revealing</h2>

        <div className="sec-body" style={{ marginBottom: '1.5rem' }}>
          <p>
            These findings synthesize across multimethod research conducted January–April 2026,
            drawing on community surveys, direct interviews, and participatory interventions.
            They are preliminary — and will be refined through continued engagement with the data.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {findings.map(({ source, title, body, implication }) => (
            <div
              key={title}
              style={{
                background: 'var(--surface-raise)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: 'var(--accent-dim)',
                  borderBottom: '1px solid var(--border)',
                  padding: '0.5rem 1.25rem',
                }}
              >
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>
                  {source}
                </div>
              </div>
              <div style={{ padding: '1.1rem 1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {title}
                </div>
                <div style={{ fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                  {body}
                </div>
                <div className="implication">{implication}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        <div style={{ padding: '1rem 1.25rem', background: 'var(--accent-dim)', borderRadius: '3px', border: '1px solid rgba(200,180,154,0.2)' }}>
          <div className="t-label-accent" style={{ marginBottom: '0.5rem' }}>Connecting to the Thesis</div>
          <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'italic' }}>
            Each finding confirms the same principle: the conditions that allow engagement to happen precede — and determine — the quality of the outcome. Architecture's leverage is in structuring those conditions.
          </div>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Full data sets compiled in research documentation. Interactive interface available at minipaths-payson.netlify.app.
        </div>
      </div>
    </div>
  )
}
