# Narrative Intelligence Website

This repository contains the Narrative Intelligence website built with Next.js (App Router), TypeScript, and Tailwind CSS (v4).

## Structure

- `narrative-intel-website/` – Next.js app
  - `src/app/` – routes and layouts
  - `src/components/hero/` – hero carousel and figure
  - `src/components/layout/` – header and footer
  - `src/components/sections/` – content sections (WhatIsNI, HowWeWork)
  - `public/` – static assets (e.g., images)

## Run locally

```bash
cd narrative-intel-website
npm install
npm run dev
# open http://127.0.0.1:3000
```

## Key pages/sections

- Hero with carousel (autoplay, accessible)
- What is Narrative Intelligence? (video + explainer)
- How we work (Sense → Map → Act rail + timeline)
- Services index and detail pages:
  - `/services`
  - `/services/niq-audit`
  - `/services/narrative-mapping`
  - `/services/building-capacity`

## Design system

- Inter font via `next/font`
- Sand background `#f6f3ea`
- 12‑column grid at `xl`, stacked before that
- Quiet CTAs (underlined links), rounded 12px surfaces, subtle borders

## Deploy

Deploy on Vercel for the best experience:

1. Connect this GitHub repo
2. Framework: Next.js; build command: `next build`; output: `.next`
3. Environment: Node 18+

## License

Copyright © Narrative Intelligence. All rights reserved.