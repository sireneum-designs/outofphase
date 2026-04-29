export default function Questions() {
  const questions = [
    { n: '01', text: 'What characterizes successful architectural interventions serving low-density, high-interdependence social systems, and what role does architecture play in enabling or constraining those outcomes?' },
    { n: '02', text: 'What conditions trigger protective or defensive posturing on the part of any system (community, client, architect) and what conditions enable openness and collaborative success?' },
    { n: '03', text: 'How might engagement with low-density, high-interdependency contexts reveal current limitations and opportunities within contemporary architectural practice?' },
  ]

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">07 · Research Questions</span>
        <h2 className="sec-title">Question Everything</h2>

        <div className="sec-body" style={{ marginBottom: '1.5rem' }}>
          <p>When existing systems encounter new ideas, the response is never neutral. Such an interaction creates a tension that commonly leads to either unproductive conflict or avoidance. Only engagement has the power to create integrative balance.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {questions.map(({ n, text }) => (
            <div key={n} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.1rem 1.25rem', background: 'var(--surface-raise)', border: '1px solid var(--border)', borderRadius: '3px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, opacity: 0.6, flexShrink: 0, minWidth: '2rem', paddingTop: '0.1rem' }}>
                {n}
              </div>
              <div style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
                {text}
              </div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />
        <div className="sec-body">
          <p>These questions are not answered by the end of this research — they are activated by it. Every project, every client, every community encountered in practice will present a version of the same dynamic: a new idea meeting an existing system.</p>
        </div>
      </div>
    </div>
  )
}
