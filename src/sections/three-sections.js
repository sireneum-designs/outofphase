// ── RELEVANCE ──────────────────────────────────────────────────
export function Relevance() {
  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">08 · Relevance</span>
        <h2 className="sec-title">Architecture as Soil Science</h2>

        <blockquote className="blockquote">
          Farming is not the business of growing crops; it's the business of growing soil.
          <cite>— paraphrased from Joel Salatin, as described in The Omnivore's Dilemma (Pollan, 2006)</cite>
        </blockquote>

        <div className="sec-body">
          <p>
            Architecture is not just the business of building buildings. It's the business of
            designing the cultures that build buildings. Like the regenerative farmers who
            understand soil health determines crop yields, understanding and engaging with the
            complex dynamics of cultural 'soil' must be of utmost importance to the architect.
          </p>
          <p>
            Contemporary architectural practice often positions itself as collaborative,
            cross-disciplinary, and systems-oriented. But without a clear understanding of how
            meaningful change occurs across an array of complex social systems, these ambitions
            often fail to translate into effective outcomes.
          </p>
          <p>
            When proposed architectural interventions fail to gain traction, the result is not
            simply ineffective design. Such rupture affects the kinds of perceptions that impede
            the success of future outcomes as well.
          </p>
          <p>
            In low-density, high-interdependency contexts — where systems rely heavily on
            relatively few but long-standing relationships — these effects are amplified.
          </p>
        </div>

        <div className="sec-divider" />

        <div style={{ padding: '1rem', background: 'var(--surface-raise)', borderRadius: '3px', border: '1px solid var(--border)' }}>
          <div className="t-label-accent" style={{ marginBottom: '0.5rem' }}>The Central Claim</div>
          <div style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'italic' }}>
            By understanding how systems engage with tension, architects gain leverage, create influence, and make change possible.
          </div>
        </div>
      </div>
    </div>
  )
}

// ── QUESTIONS ──────────────────────────────────────────────────
export function Questions() {
  const questions = [
    {
      n: '01',
      text: 'What characterizes successful architectural interventions serving low-density, high-interdependence social systems, and what role does architecture play in enabling or constraining those outcomes?',
    },
    {
      n: '02',
      text: 'What conditions trigger protective or defensive posturing on the part of any system (community, client, architect) and what conditions enable openness and collaborative success?',
    },
    {
      n: '03',
      text: 'How might engagement with low-density, high-interdependency contexts reveal current limitations and opportunities within contemporary architectural practice?',
    },
  ]

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">07 · Research Questions</span>
        <h2 className="sec-title">Question Everything</h2>

        <div className="sec-body" style={{ marginBottom: '1.5rem' }}>
          <p>
            When existing systems encounter new ideas, the response is never neutral. Such an
            interaction creates a tension that commonly leads to either unproductive conflict or
            avoidance. Only engagement has the power to create integrative balance.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {questions.map(({ n, text }) => (
            <div
              key={n}
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                padding: '1.1rem 1.25rem',
                background: 'var(--surface-raise)',
                border: '1px solid var(--border)',
                borderRadius: '3px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  opacity: 0.6,
                  flexShrink: 0,
                  minWidth: '2rem',
                  paddingTop: '0.1rem',
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.75,
                  color: 'var(--text-primary)',
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        <div className="sec-body">
          <p>
            These questions are not answered by the end of this research — they are activated by
            it. Every project, every client, every community encountered in practice will present
            a version of the same dynamic: a new idea meeting an existing system.
          </p>
        </div>
      </div>
    </div>
  )
}

// ── METHODOLOGY ────────────────────────────────────────────────
export function Methodology() {
  const methods = [
    {
      label: 'Observation',
      text: 'Participation in the Payson Learning Landscape project provides access to live interactions between stakeholders and an interdisciplinary co-design community. Data is collected through community surveys and participatory projects.',
    },
    {
      label: 'Dialectics',
      text: 'Many repeating patterns of polarization without synthesized resolution are observable within the Payson community. This research examines why these patterns recur and whether they should evolve.',
    },
    {
      label: 'Synthesis',
      text: 'Recurring patterns across interactions are synthesized into conceptual frameworks that describe how systems respond to intervention — clarifying conditions that enable engagement with tension.',
    },
    {
      label: 'Learning as Doing',
      text: 'A practice-based approach grounded in direct engagement with a live community design project. Rather than studying intervention from a distance, the work is embedded within ongoing processes.',
    },
  ]

  const approaches = [
    'Speculative Design (Research-by-Design)', 'Literature Review', 'Theoretical Inquiry',
    'Case Study Research', 'Contextual Analysis', 'Ethnographic Observation',
    'Phenomenological Observation', 'Relational Mapping', 'Cross-Disciplinary Synthesis',
    'Conceptual Modeling', 'Practice-Based Research', 'Prototyping',
  ]

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">12–13 · Methodology</span>
        <h2 className="sec-title">Learning as Doing</h2>

        <blockquote className="blockquote">
          Though this be madness, there is method in it.
          <cite>— Hamlet</cite>
        </blockquote>

        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          {methods.map(({ label, text }) => (
            <div key={label} className="card">
              <div className="card-label">{label}</div>
              <div className="card-body">{text}</div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        <div>
          <div className="t-label-accent" style={{ marginBottom: '0.75rem' }}>
            Research Approaches Applied
          </div>
          <div className="pill-row">
            {approaches.map((a) => (
              <span key={a} className="tag">{a}</span>
            ))}
          </div>
        </div>

        <div className="sec-divider" />

        <div>
          <div className="t-label-accent" style={{ marginBottom: '0.75rem' }}>
            Ethical Considerations — A Culture of Consent
          </div>
          <div className="pill-row">
            {['Informed participation', 'Anonymity in data interpretation', 'Transparency of intent', 'Non-manipulative engagement'].map(e => (
              <span key={e} className="tag">{e}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
