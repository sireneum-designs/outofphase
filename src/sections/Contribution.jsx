export default function Contribution() {
  const contributions = [
    {
      type: 'Theoretical',
      text: 'Frames change as the product of system response, not design intent. Architecture is positioned within a broader field of relational dynamics — not as the driver of outcomes, but as a structuring agent of conditions.',
    },
    {
      type: 'Practical',
      text: 'Shifts architectural practice from delivering solutions to designing the conditions under which systems can meaningfully engage with change and new ideas.',
    },
    {
      type: 'Future Possibilities',
      text: 'Suggests new forms of practice where iterative, participatory interventions function as probes for understanding and shaping complex social systems — and points toward a doctoral research agenda integrating systems theory, identity, and architecture.',
    },
  ]

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">28 · Intended Contribution</span>
        <h2 className="sec-title">What This Research Offers</h2>

        <div className="sec-body" style={{ marginBottom: '1.5rem' }}>
          <p>
            The intent of this study is to offer insight in the same way that a geotechnical
            investigation enables structural design to advance beyond what is possible with
            standard assumptions. A geotechnical investigation does not change the soil — it
            changes what you can build on it. This research, carried forward, changes what
            architecture can offer and who it can offer itself to.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
          {contributions.map(({ type, text }, i) => (
            <div
              key={type}
              style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '1.1rem 1.25rem',
                background: 'var(--surface-raise)',
                border: '1px solid var(--border)',
                borderRadius: '3px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  opacity: 0.5,
                  flexShrink: 0,
                  minWidth: '1.5rem',
                  paddingTop: '0.1rem',
                  lineHeight: 1,
                }}
              >
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  {type}
                </div>
                <div style={{ fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-secondary)' }}>
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        <div>
          <div className="t-label-accent" style={{ marginBottom: '1rem' }}>Low-Density Systems — A Note on Scope</div>
          <div className="grid-2">
            {[
              {
                label: 'Rural',
                text: 'A systemic context characterized by low-density — both spatial and social. Relationships are highly interdependent, reducing resilience to disruption. Interdependencies remain highly legible.',
              },
              {
                label: 'Urban',
                text: 'A systemic context characterized by high-density. Relationships are multiplicitous, enhancing resilience. Interdependencies become less visible as systems layer and mediate.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="card">
                <div className="card-label">{label}</div>
                <div className="card-body">{text}</div>
              </div>
            ))}
          </div>
          <div className="sec-body" style={{ marginTop: '1rem' }}>
            <p>
              While this study is grounded in a rural spatial context, low-density,
              high-interdependence social systems exist across a much broader range of conditions —
              including the nuclear family. This research aims to inform architectural approaches
              that can operate effectively beyond predominantly urban contexts.
            </p>
          </div>
        </div>

        <div className="sec-divider" />

        <blockquote className="blockquote">
          The architect who understands how a new idea meets an existing system — who can read it,
          structure it, and engage it — operates with a fundamentally different kind of leverage.
          <cite>— from the research proposal</cite>
        </blockquote>
      </div>
    </div>
  )
}
