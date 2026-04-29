export default function Background() {
  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">03–05 · Background</span>
        <h2 className="sec-title">Know From Whence You Came</h2>

        <div className="sec-body">
          <p>
            Hi, I'm Rachel. I'm a composite waveform, full of contradictions.
          </p>
          <p>
            I am often loquacious but always listening deeply. I am a generalist who loves getting
            into the weeds. I am light — both a particle and a wave.
          </p>
          <p>
            My dominant frequency is curiosity. I will not be growing out of my "why?" phase.
            My mind lives in the interstitial spaces between neurology, psychology, sociology,
            biology, physics, history, philosophy, and storytelling.
          </p>
          <p>
            I am a daughter, wife, parent, friend, and colleague. I am consumed by a persistent
            desire to turn meaning into matter — and I intend to use my time to design systems and
            spaces where others feel enabled to do the same.
          </p>
        </div>

        <div className="sec-divider" />

        {/* Research Interest */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="t-label-accent" style={{ marginBottom: '0.75rem' }}>
            Research Interest — Progenitor of Space
          </div>
          <div className="sec-body">
            <p>
              I grew up in a rural community, where systems of interdependence were highly visible.
              Although I left that environment shortly after high school, it remains a reference
              point for how I understand complexity and relationship within systems.
            </p>
            <p>
              I have noticed that engagement with the rural context seems largely absent from
              modern architectural discourse and pedagogy. At the same time, observable patterns
              in small-scale community systems suggest that the potential for change in such a
              context is shaped by complex dynamics that are not immediately visible.
            </p>
            <p>
              Direct experience in community design projects — including St. John's Innovation
              Center (SJIC) and Rim Country Learning Landscape — has revealed a persistent
              tension between contemporary architectural practices and the realities of rural
              community systems.
            </p>
          </div>
        </div>

        <div className="sec-divider" />

        {/* Career trajectory */}
        <div>
          <div className="t-label-accent" style={{ marginBottom: '1rem' }}>
            Career Trajectory
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                phase: 'Now',
                items: 'M.Arch · ARC 651 Thesis · ARE Exam',
                desc: 'This research is underway. The Mini Paths community event is the first structured test of whether low-risk, high-curiosity interventions can shift conditions of engagement in a real system.',
              },
              {
                phase: 'Near Term',
                items: 'Registered Architect · Community-Embedded Design',
                desc: 'Licensure opens the door to practice that can operate where the research says it is most needed — engaging the tension between architecture and low-density systems from the inside.',
              },
              {
                phase: 'Developing',
                items: 'PhD Research · Published Framework · Expanded Research',
                desc: 'Translating the framework into a teachable, transferable methodology for architectural education and practice.',
              },
              {
                phase: 'Long Term',
                items: 'PhD Research · Design Practice · Systemic Change',
                desc: 'Building the evidence base that can shift what the discipline assumes is possible in under-resourced, under-theorized social contexts.',
              },
            ].map(({ phase, items, desc }, i, arr) => (
              <div
                key={phase}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: i < arr.length - 1 ? '1.25rem' : 0,
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingTop: i > 0 ? '1.25rem' : 0,
                }}
              >
                <div
                  style={{
                    width: '80px',
                    flexShrink: 0,
                    paddingTop: '0.1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      fontWeight: 500,
                    }}
                  >
                    {phase}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {items}
                  </div>
                  <div
                    style={{
                      fontSize: '0.83rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
