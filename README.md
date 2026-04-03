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

## Using Claude Code (CLI) efficiently

Claude Code reads `CLAUDE.md` at session start — that file contains the full project map so Claude never has to rediscover context.

### Setup

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# From the project root
claude
```

### Token-efficiency rules

**1. Use `/compact` regularly**
After a long back-and-forth, run `/compact` — Claude summarizes the conversation and drops the raw transcript, cutting context in half.

**2. Start scoped sessions**
Instead of opening a long session, start targeted ones:
```bash
# Bad — vague, forces Claude to explore
claude "update the site"

# Good — Claude knows exactly what to touch
claude "implement the scroll-pin effect in About.tsx using the pattern in CLAUDE.md"
```

**3. Use `--files` to limit context**
```bash
# Only load the files Claude needs
claude --files src/sections/About.tsx src/hooks/useScrollPin.ts "fix the frame transition timing"
```

**4. Let CLAUDE.md do the heavy lifting**
The CLAUDE.md file contains:
- Full project structure
- All design tokens
- ScrollPin mechanic explained
- All image asset names
- DO NOT list (prevents Claude from going rogue)
- Current task list (tick off as you go)

Update the `## Current tasks` section in CLAUDE.md as you complete work — Claude reads it fresh each session.

**5. Keep sessions single-purpose**
One session = one feature or one bug. Don't combine "fix the nav" with "update the portfolio" in the same session. Context stays lean, output stays focused.

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
