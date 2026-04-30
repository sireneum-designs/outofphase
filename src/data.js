// ── MAP NODES ────────────────────────────────────────────────────
export const mapNodes = [
  {
    id: 'thesis',
    label: 'Thesis',
    tagline: 'Engage the Tension',
    desc: 'Change is driven by how systems respond to ideas — not just the quality of those ideas.',
    x: 440, y: 80,
  },
  {
    id: 'background',
    label: 'Background',
    tagline: 'Know From Whence You Came',
    desc: 'Personal experience as progenitor of research — rural systems, direct community practice.',
    x: 165, y: 130,
  },
  {
    id: 'designprocess',
    label: 'Design Process',
    tagline: 'Roots of Curiosity',
    desc: 'An interactive diagram — your cursor position shapes the mathematical structure. Your path leaves a permanent record.',
    x: 80,  y: 200,
    emphasis: true,
  },
  {
    id: 'relevance',
    label: 'Relevance',
    tagline: 'Architecture as Soil Science',
    desc: 'Understanding and engaging with cultural soil must be of utmost importance to the architect.',
    x: 75, y: 275,
  },
  {
    id: 'questions',
    label: 'Questions',
    tagline: 'Question Everything',
    desc: 'Three interlocking research questions about architectural intervention in complex social systems.',
    x: 685, y: 130,
  },
  {
    id: 'methodology',
    label: 'Methodology',
    tagline: 'Learning as Doing',
    desc: 'Multi-method practice-based research embedded within live community design processes.',
    x: 355, y: 255,
  },
  {
    id: 'minipaths',
    label: 'Mini Paths',
    tagline: 'Live Research in Payson',
    desc: 'A participatory community mapping event — and interactive research interface.',
    x: 520, y: 375,
    emphasis: true,
  },
  {
    id: 'findings',
    label: 'Results',
    tagline: 'What the Research Reveals',
    desc: 'Emerging patterns across community surveys, interviews, and participatory interventions.',
    x: 215, y: 378,
  },
  {
    id: 'peers',
    label: 'Peers',
    tagline: 'Mau · Utley · Johnson',
    desc: 'Three practitioners whose work informs and contextualizes this research.',
    x: 700, y: 285,
  },
  {
    id: 'contribution',
    label: 'Contribution',
    tagline: 'Intended Impact',
    desc: 'From framework to practice — implications for architecture in complex social systems.',
    x: 635, y: 415,
  },
]

// ── MAP EDGES ────────────────────────────────────────────────────
export const mapEdges = [
  ['thesis',        'background'],
  ['thesis',        'questions'],
  ['thesis',        'contribution'],
  ['background',    'relevance'],
  ['background',    'methodology'],
  ['background',    'designprocess'],
  ['designprocess', 'relevance'],
  ['questions',     'methodology'],
  ['methodology',   'minipaths'],
  ['methodology',   'findings'],
  ['methodology',   'peers'],
  ['minipaths',     'findings'],
  ['minipaths',     'contribution'],
  ['peers',         'contribution'],
  ['findings',      'contribution'],
]

// ── RELATED SECTIONS ─────────────────────────────────────────────
export const related = {
  thesis:        ['questions', 'background', 'contribution'],
  background:    ['thesis', 'relevance', 'methodology', 'designprocess'],
  designprocess: ['background', 'relevance', 'methodology'],
  relevance:     ['background', 'thesis'],
  questions:     ['thesis', 'methodology', 'findings'],
  methodology:   ['questions', 'minipaths', 'findings'],
  minipaths:     ['methodology', 'findings', 'contribution'],
  findings:      ['minipaths', 'methodology', 'contribution'],
  peers:         ['methodology', 'contribution'],
  contribution:  ['findings', 'thesis', 'peers'],
}

// ── NODE LABEL MAP ───────────────────────────────────────────────
export const nodeLabels = {
  thesis:        'Thesis',
  background:    'Background',
  designprocess: 'Design Process',
  relevance:     'Relevance',
  questions:     'Questions',
  methodology:   'Methodology',
  minipaths:     'Mini Paths',
  findings:      'Results',
  peers:         'Peers',
  contribution:  'Contribution',
}
