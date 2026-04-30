# Out of Phase — Drop-in File Update

## What's in here

| File | Destination in your repo | What changed |
|------|--------------------------|--------------|
| `src/App.jsx` | `src/App.jsx` | Adds `/design-process` standalone route |
| `src/data.js` | `src/data.js` | Adds `designprocess` node + edges |
| `src/components/SystemMap.jsx` | `src/components/SystemMap.jsx` | Adds JuliaBackground + standalone link |
| `src/components/SectionPanel.jsx` | `src/components/SectionPanel.jsx` | Registers DesignProcess panel |
| `src/components/JuliaBackground.jsx` | `src/components/JuliaBackground.jsx` | **NEW** — subtle Julia set behind the node map |
| `src/sections/DesignProcess.jsx` | `src/sections/DesignProcess.jsx` | **NEW** — full interactive Julia/frost animation |

## Instructions

1. Copy every file from this zip into the matching path in your repo
2. Files marked **NEW** need to be created — the others replace existing files
3. Push to GitHub — Netlify will auto-deploy
4. Visit `/design-process` for the fullscreen standalone version

## The sireneum logo watermark

The logo is embedded as base64 directly inside `DesignProcess.jsx` — no extra image file needed.
It appears at 30% opacity in the bottom-right corner of every downloaded PNG.

## How the system map background works

- The Julia set renders at 1/5 resolution and scales up with smoothing
- Opacity is 16% when map is full-width, drops to 10% when a panel is open
- Your cursor movement across the map slowly shifts the Julia parameter c
- Different areas of the map show different mathematical structure
- Uses a separate ResizeObserver and only re-renders when c changes meaningfully
- Will NOT cause performance issues — it's a 160×90 pixel calculation

## The `/design-process` route

- Works as a fullscreen standalone page
- Linked from the bottom-left of the system map ("explore design process animation fullscreen")
- Also linked from the panel header when Design Process node is open ("fullscreen ↗")
- Back link returns to the main site
