# jamesespy.com — v2

Vite + React + TypeScript rebuild of jamesespy.com, with Aurora-style scroll-pin effects.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Download images from the existing site (one-time)
bash scripts/fetch-assets.sh

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## Deploy

The site is a static build — copy `dist/` to your host, or point Cloudflare Pages / Netlify to the repo.

```bash
npm run build
# Upload dist/ to your hosting provider
```

---

## Project structure

```
src/
  components/
    Nav.tsx / Nav.module.css
    ScrollPin.tsx / ScrollPin.module.css   ← reusable Aurora effect
  hooks/
    useScrollPin.ts                         ← scroll progress → activeFrame
  sections/
    Hero.tsx / Hero.module.css
    About.tsx / About.module.css           ← uses ScrollPin (4 hobby frames)
    Portfolio.tsx / Portfolio.module.css   ← uses ScrollPin (3 project frames)
    Stack.tsx / Stack.module.css
    Contact.tsx / Contact.module.css
  assets/                                  ← images (populated by fetch-assets.sh)
  App.tsx                                  ← assembles all sections
  main.tsx
  index.css                                ← design tokens / reset
scripts/
  fetch-assets.sh                          ← one-time image download
CLAUDE.md                                  ← Claude Code context file
.claudeignore                              ← excludes node_modules, dist, etc.
```
