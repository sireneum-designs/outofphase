export default function Thesis() {
  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">02 · Thesis</span>
        <h2 className="sec-title">Engage the Tension</h2>

        <div className="sec-body">
          <p>
            Change is not driven only by ideas. Change is driven by how systems respond to ideas.
            The designer cannot control this response. The designer must structure the
            conditions of engagement to maximize best outcomes — and so, understanding the
            existing system state is critical.
          </p>
        </div>

        <div className="sec-divider" />

        {/* Thesis / Antithesis / Synthesis */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            {
              role: 'Antithesis',
              text: 'Architectural practice commonly assumes that better ideas produce better outcomes. The absence of successful architectural intervention in certain social or spatial contexts is understood as a limitation of the context — not the practice.',
            },
            {
              role: 'Thesis',
              text: 'Change is not driven solely by the quality of an idea. It is driven by how the system into which that idea is introduced responds to it. The designer cannot control this response — but can structure the conditions that make engagement possible.',
              highlight: true,
            },
            {
              role: 'Synthesis',
              text: 'The success of an architectural intervention is not determined solely by the quality of the proposal, nor by the limitations of the context, but by the relationship between them. By understanding how a system is likely to respond to disruption, architecture can move from avoiding resistance to engaging it.',
            },
          ].map(({ role, text, highlight }) => (
            <div
              key={role}
              style={{
                padding: '1rem 1.25rem',
                background: highlight ? 'var(--accent-dim)' : 'var(--surface-raise)',
                border: `1px solid ${highlight ? 'rgba(200,180,154,0.3)' : 'var(--border)'}`,
                borderRadius: '3px',
              }}
            >
              <div
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: highlight ? 'var(--accent)' : 'var(--text-muted)',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                }}
              >
                {role}
              </div>
              <div
                style={{
                  fontSize: highlight ? '0.97rem' : '0.88rem',
                  lineHeight: 1.7,
                  color: highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: highlight ? 400 : 300,
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        {/* The PACE model */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div className="t-label-accent" style={{ marginBottom: '0.75rem' }}>
            The PACE Model — Curiosity as Catalyst
          </div>
          <div className="sec-body">
            <p>
              Curiosity is not a fixed personality trait — it is a fluid neurological state that
              emerges under specific conditions. Researchers Gruber and Ranganath articulate this
              through the PACE model:
            </p>
          </div>
          <div className="grid-2" style={{ marginTop: '1rem', gap: '0.75rem' }}>
            {[
              { letter: 'P', word: 'Prediction',  text: 'Am I missing something? Awareness that a gap exists is the critical first step.' },
              { letter: 'A', word: 'Appraisal',   text: 'Is it safe to challenge my current model? Psychological safety is required to proceed.' },
              { letter: 'C', word: 'Curiosity',   text: 'Why doesn\'t this match my expectations? Dopamine fires, inviting exploration.' },
              { letter: 'E', word: 'Exploration', text: 'How can I test for more information? Iteration drives prediction error down.' },
            ].map(({ letter, word, text }) => (
              <div key={letter} className="card" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '28px', height: '28px', flexShrink: 0,
                    borderRadius: '2px', background: 'var(--accent-dim)',
                    border: '1px solid var(--accent-deep)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 700,
                    fontFamily: 'var(--font-serif)', color: 'var(--accent)',
                  }}
                >
                  {letter}
                </div>
                <div>
                  <div className="card-title" style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                    {word}
                  </div>
                  <div className="card-body">{text}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="sec-body"
            style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--accent)' }}
          >
            <p>
              When psychological safety is absent, PACE becomes PASS: Prediction → Appraisal →
              Shut Down / Story Tell. The system protects itself by reinterpreting dissonant
              information to fit its existing model rather than updating that model.
            </p>
          </div>
        </div>

        <div className="sec-divider" />

        <blockquote className="blockquote">
          The designer cannot control the response. The designer must structure
          the conditions of engagement.
          <cite>— Core claim of this research</cite>
        </blockquote>
      </div>
    </div>
  )
}
