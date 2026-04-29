export default function Peers() {
  const peers = [
    {
      name: 'Bruce Mau',
      location: 'Global Practice',
      focus: 'Systems-scale design · Massive Change Network · Institute Without Boundaries',
      connection: 'For Mau, design operates as a catalyst — not a final product or solution. His emphasis on openness, iteration, and emergent outcomes aligns with architecture as interstitium.',
      works: [
        { title: 'An Incomplete Manifesto for Growth (1998)', note: 'First attempt to answer: How does one sustain a creative life? This research attempts a similar question at the scale of community.' },
        { title: '¡GuateAmala!', note: 'The will to change already existed within the culture. Mau galvanized it through narrative — directly analogous to the intent of this research.' },
        { title: 'Institute Without Boundaries (IwB)', note: '"The teacher admits, \'I don\'t know the answers, we\'ll search for them together.\'"' },
      ],
    },
    {
      name: 'Jeremy Utley',
      location: 'Stanford d.school',
      focus: 'Creativity systems · Ideation methodology · AI as design partner',
      connection: 'Utley frames design and creativity as an accessible process that depends highly on ideation. His work on how AI can enhance curiosity for both individuals and cultural systems informs how this research considers the PACE model at community scale.',
      works: [
        { title: 'Ideaflow (with Perry Klebahn)', note: 'Quantitative framework for creativity: increased idea volume correlates with higher-quality outcomes. Empirical studies, case studies, behavioral research.' },
        { title: 'The Brainstorm as We Know It Doesn\'t Work', note: 'Proposes a structured ideation process that alternates individual and group work to optimize outcomes.' },
        { title: 'Sparking Creativity Requires Walking Away', note: 'Applies practice-based experimentation — "tactical withdrawal" — to leverage subconscious processing.' },
      ],
    },
    {
      name: 'Michael Pierre Johnson',
      location: 'Glasgow School of Art',
      focus: 'Rural spatial practice · Community engagement · Relational mapping',
      connection: 'Johnson\'s work parallels this research\'s interest in architecture as a system for making relationships visible and actionable. His methods of relational mapping and modelling make design\'s creative value explicit in complex collaborative contexts.',
      works: [
        { title: 'Every Tree Tells a Story: The treescape and citizen wellbeing', note: 'Activates awareness of shared experience — using the natural environment as a relational agent to influence community perception.' },
        { title: 'A Co-Creative Climate (Future Observatory)', note: 'Design as continuous process of shared responsibility; creative value emerges through relationships, not isolated interventions.' },
        { title: 'Mapping Design Things', note: 'Tools for understanding how ideas move, evolve, and gain meaning across networks of actors.' },
      ],
    },
  ]

  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">16 · Peers & Precedents</span>
        <h2 className="sec-title">In Conversation With</h2>

        <div className="sec-body" style={{ marginBottom: '1.5rem' }}>
          <p>
            These three practitioners — working across very different scales and contexts — share
            a common orientation: that design is most powerful when it operates as a catalyst for
            systemic change rather than a deliverable of formal solutions.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {peers.map(({ name, location, focus, connection, works }) => (
            <div
              key={name}
              style={{
                border: '1px solid var(--border)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {/* Peer header */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  background: 'var(--surface-raise)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                    {location}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.1rem 1.25rem' }}>
                {/* Focus */}
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                  {focus}
                </div>

                {/* Connection */}
                <div style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic', borderLeft: '2px solid var(--accent)', paddingLeft: '0.85rem' }}>
                  {connection}
                </div>

                {/* Key works */}
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  Key Works
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {works.map(({ title, note }) => (
                    <div key={title} style={{ display: 'flex', gap: '0.75rem' }}>
                      <div style={{ color: 'var(--accent)', flexShrink: 0, paddingTop: '0.05rem' }}>—</div>
                      <div>
                        <div style={{ fontSize: '0.83rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{title}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
