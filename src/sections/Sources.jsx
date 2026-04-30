const sources = [
  {
    category: 'Architecture & Community Design',
    items: [
      { author: 'Dean, Andrea Oppenheimer, and Timothy Hursley.', year: '2005', title: 'Proceed and Be Bold: Rural Studio after Samuel Mockbee.', publisher: 'New York: Princeton Architectural Press.' },
      { author: 'Creadon, Patrick, Christine O\'Malley, and Neal Baer.', year: '2014', title: '"If You Build It."', publisher: 'Film. Tubitv.com.' },
      { author: 'Rural Studio.', year: 'n.d.', title: '"Rural Studio."', url: 'https://ruralstudio.org/', urlLabel: 'ruralstudio.org' },
      { author: 'The School of Innovation and Technology, Glasgow School of the Arts.', year: '2020', title: '"Social Studios, Dr. Cara Broadley."', url: 'https://sit.gsa.ac.uk/project/social-studios' },
    ]
  },
  {
    category: 'Systems, Complexity & Natural Phenomena',
    items: [
      { author: 'BBC Weather.', year: '2016', title: '"What Causes Different Frost Patterns?"', publisher: 'BBC Weather. November 30, 2016.', url: 'https://www.bbc.com/weather/weather-watcher/38144457' },
      { author: 'Morris, Stephen.', year: 'n.d.', title: 'Belousov Zhabotinsky Reaction.', publisher: 'CC BY 2.0. Creative Commons.', url: 'https://commons.wikimedia.org/w/index.php?curid=74846846', urlLabel: 'Wikimedia Commons' },
      { author: 'Pollan, Michael.', year: '2006', title: 'The Omnivore\'s Dilemma: A Natural History of Four Meals.', publisher: 'New York: Penguin Books.' },
    ]
  },
  {
    category: 'Curiosity, Creativity & Cognition',
    items: [
      { author: 'Gruber, Matthias J., and Charan Ranganath.', year: '2019', title: '"How Curiosity Enhances Hippocampus-Dependent Memory: The Prediction, Appraisal, Curiosity, and Exploration (PACE) Framework."', publisher: 'Trends in Cognitive Sciences 23 (12): 1014–25.', url: 'https://doi.org/10.1016/j.tics.2019.10.003' },
      { author: 'Klebahn, Perry, and Jeremy Utley.', year: '2023', title: '"Sparking Creativity Requires Walking Away."', publisher: 'Talent Development 77 (1): 70–71.' },
      { author: 'Utley, Jeremy, and Perry Klebahn.', year: '2022', title: '"The Brainstorm as We Know It Doesn\'t Work."', publisher: 'Entrepreneur.com, December 2022.' },
      { author: 'Utley, Jeremy.', year: '2025', title: '"Update Your Priors."', publisher: 'Medium.', url: 'https://medium.com/@jeremyutley/update-your-priors-ea57b104deac' },
      { author: 'Utley, Jeremy.', year: '2025', title: '"The AI Multiplier."', url: 'https://www.jeremyutley.com/blog/the-ai-multiplier' },
      { author: 'Utley, Jeremy.', year: '2026', title: '"Not Behind Enough to Panic. Too Afraid to Learn."', url: 'https://www.jeremyutley.com/blog/too-afraid-to-learn' },
      { author: 'Think Fast Talk Smart.', year: '2025', title: '"205. Say What Sucks: Catalyzing Organizational Change with AI."', url: 'https://www.fastersmarter.io/205-say-what-sucks-catalyzing-organizational-change-with-ai/' },
    ]
  },
  {
    category: 'Bruce Mau / Massive Change',
    items: [
      { author: 'Koolhaas, Rem, Bruce Mau, Jennifer Eigler, and Hans Werlemann.', year: '1997', title: 'S, M, L, XL: Office for Metropolitan Architecture.', publisher: 'Köln; London: Taschen.' },
      { author: 'Mau, Bruce.', year: '1998', title: '"An Incomplete Manifesto for Growth."', url: 'https://brucemaustudio.com/projects/an-incomplete-manifesto-for-growth/' },
      { author: 'Mau, Bruce, and Phaidon Verlag Gmbh.', year: '2020', title: 'Bruce Mau: MC24 Bruce Mau\'s 24 Principles for Designing Massive Change in Your Life and Work.', publisher: 'Berlin: Phaidon.' },
      { author: 'Bruce Mau Studio.', year: '2025', title: '"The Institute Without Boundaries (IwB) & the Massive Change Project."', url: 'https://brucemaustudio.com/projects/the-institute-without-boundaries/' },
      { author: 'Massive Change Network.', year: '2024', title: '"¡GUATEAMALA!"', url: 'https://www.massivechangenetwork.com/guateamala' },
      { author: 'Massive Change Network.', year: '2024', title: '"Incomplete Manifesto for Growth."', url: 'https://www.massivechangenetwork.com/incomplete-manifesto-for-growth' },
      { author: 'Martesko, Karol, et al.', year: '2021', title: '"Mau."', publisher: 'Documentary film. Plex.tv.' },
      { author: 'Proto.io.', year: '2019', title: '"66 Best Quotes about Design (of All Time)."', url: 'https://protoio.medium.com/66-best-quotes-about-design-of-all-time-60adedc13677' },
    ]
  },
  {
    category: 'Michael Pierre Johnson',
    items: [
      { author: 'Glasgow School of Art.', year: '2016', title: '"Michael Johnson — RADAR."', url: 'https://radar.gsa.ac.uk/profile/991' },
      { author: 'Johnson, Michael Pierre.', year: '2016', title: '"Mapping Design Things Making Design Explicit in the Discourse of Change."', url: 'https://radar.gsa.ac.uk/4386/7/Mapping%20Design%20Things%20%28FIN%29.pdf' },
      { author: 'Johnson, Michael Pierre.', year: '2023', title: '"A Co-Creative Climate: Participatory Design\'s Emerging Role for Glasgow\'s Sustainable Development."', publisher: 'Future Observatory, June.', url: 'https://futureobservatory.org/research/library?paper=a-co-creative-climate' },
      { author: 'Dodd, Sarah, et al.', year: '2025', title: '"Every Tree Tells a Story: The Treescape and Citizen Wellbeing."', publisher: 'Ecological Frontiers, November.', url: 'https://doi.org/10.1016/j.ecofro.2025.10.015' },
      { author: 'Fonseca, Liliana, et al.', year: '2024', title: '"Innovation Strategies for System-Level Transformation."', url: 'https://radar.gsa.ac.uk/9781/1/ISfSLT%20-%20Final%20Report%20-%20July%202024.pdf' },
      { author: 'Vega, Rodriguez.', year: '2024', title: '"Exploring Collaborative Design through Storytelling and Ideation."', url: 'https://hdl.handle.net/2286/R.2.N.193551' },
    ]
  },
  {
    category: 'Primary Research — Payson, AZ',
    items: [
      { author: 'Aleshire, Peter.', year: '2026', title: 'Guest Speaker and Interview. Designing Sustainable Solutions with Communities, January 28.', publisher: 'Arizona State University.' },
      { author: 'Smith, Jennifer.', year: '2026', title: 'Conversation on the History and Context of Payson. Interview by Rachel Dudley.', publisher: 'Personal Notes.' },
    ]
  },
]

export default function Sources() {
  return (
    <div>
      <div className="sec-block">
        <span className="sec-kicker">Bibliography</span>
        <h2 className="sec-title">Sources</h2>

        <div className="sec-body" style={{ marginBottom:'1.5rem' }}>
          <p>
            Research conducted January–April 2026. Sources listed by thematic category.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
          {sources.map(({ category, items }) => (
            <div key={category}>
              <div style={{
                fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase',
                color:'var(--accent)', fontFamily:'var(--font-sans)', fontWeight:500,
                marginBottom:'0.8rem', paddingBottom:'0.5rem',
                borderBottom:'1px solid var(--border)',
              }}>
                {category}
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {items.map(({ author, year, title, publisher, url, urlLabel }, i) => (
                  <div key={i} style={{ fontSize:'0.82rem', lineHeight:1.7, color:'var(--text-secondary)', paddingLeft:'0.85rem', borderLeft:'1px solid var(--border)' }}>
                    <span style={{ color:'var(--text-primary)' }}>{author}</span>{' '}
                    {year}.{' '}
                    <span style={{ fontStyle:'italic' }}>{title}</span>{' '}
                    {publisher && <span>{publisher} </span>}
                    {url && (
                      <a href={url} target="_blank" rel="noopener noreferrer"
                        style={{ color:'var(--accent)', fontSize:'0.75rem' }}>
                        {urlLabel || url}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sec-divider" />

        <div style={{
          padding:'1rem', background:'var(--surface-raise)',
          border:'1px solid var(--border)', borderRadius:'3px',
          fontSize:'0.8rem', lineHeight:1.7, color:'var(--text-secondary)',
          fontStyle:'italic',
        }}>
          Note: Portions of this work were developed with the assistance of AI-based language tools
          (ChatGPT, Gemini) and visualization tools (Midjourney, Firefly, Claude) for iterative
          drafting, editing, illustration, and refinement of written content. All ideas, positions,
          and conclusions are those of the author.
        </div>
      </div>
    </div>
  )
}
