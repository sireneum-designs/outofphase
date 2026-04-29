export default function Methodology() {
  const methods = [
    { label: 'Observation', text: 'Participation in the Payson Learning Landscape project provides access to live interactions between stakeholders and an interdisciplinary co-design community. Data collected through community surveys and participatory projects.' },
    { label: 'Dialectics', text: 'Many repeating patterns of polarization without synthesized resolution are observable within the Payson community. Why? How might these patterns evolve? Should they?' },
    { label: 'Synthesis', text: 'Recurring patterns across interactions are synthesized into conceptual frameworks that describe how systems respond to intervention — clarifying conditions that enable engagement with tension.' },
    { label: 'Learning as Doing', text: 'A practice-based approach grounded in direct engagement with a live community design project. Rather than studying intervention from a distance, the work is embedded within ongoing processes.' },
  ]

  const approaches = [
    'Speculative Design', 'Literature Review', 'Theoretical Inquiry', 'Case Study Research',
    'Contextual Analysis', 'Ethnographic Observation', 'Phenomenological Observation',
    'Relational Mapping', 'Cross-Disciplinary Synthesis', 'Conceptual Modeling',
    'Practice-Based Research', 'Prototyping',
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

        <div className="t-label-accent" style={{ marginBottom: '0.75rem' }}>Research Approaches Applied</div>
        <div className="pill-row">
          {approaches.map(a => <span key={a} className="tag">{a}</span>)}
        </div>

        <div className="sec-divider" />

        <div className="t-label-accent" style={{ marginBottom: '0.75rem' }}>Ethical Considerations — A Culture of Consent</div>
        <div className="pill-row">
          {['Informed participation', 'Anonymity in data interpretation', 'Transparency of intent', 'Non-manipulative engagement'].map(e => (
            <span key={e} className="tag">{e}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
