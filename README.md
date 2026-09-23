# AI Success Pte. Ltd. — Website

Marketing site for **AI Success Pte. Ltd.**, a Singapore SME financing specialist.
*Smart Loans. Real Growth. — Success together.*

Static HTML/CSS/JS, no framework, no build dependencies beyond Node itself.
Published in **English** (`/`) and **Simplified Chinese** (`/zh/`) — 20 pages in total.

## The 10 pages (each built in both languages)

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, why-choose-us, product overview, how it works, results, testimonials |
| `/loan-solutions` | Overview, comparison table and eligibility criteria |
| `/working-capital-loan` | Product page — unsecured short-term facility |
| `/business-term-loan` | Product page — up to S$5m over 60 months |
| `/invoice-financing` | Product page — receivables finance |
| `/equipment-financing` | Product page — hire purchase and leasing |
| `/why-us` | Positioning, numbers, process and team |
| `/success-stories` | Four case studies plus testimonials |
| `/resources` | Guides, tools, glossary and the full FAQ (`/resources#faq`) |
| `/contact` | Application form and repayment estimator (`/contact#calculator`) |

Every route has a Chinese counterpart under `/zh` — e.g. `/zh/loan-solutions`. The
header carries an EN / 中文 toggle that links to the current page's counterpart, and
every page emits `hreflang` alternates.

## Working on it

Pages are **generated**, not hand-edited. Every `.html` file in the root is build output.

```
build/layout.js          shell, header, footer, nav, language toggle, icon set,
                         shared blocks, SITE constants and the ROUTES table
build/i18n/en/*.js       all English copy
build/i18n/zh/*.js       all Simplified Chinese copy (same shape as en/)
build/pages/*.js         one template per page — pure layout, no copy
build.js                 renders every template once per language
assets/css/styles.css    the whole design system, incl. the .lang-zh type overrides
assets/js/main.js        nav, accordions, scroll reveal, counters, forms,
                         hero calculator, repayment estimator
```

**Templates hold no copy.** To change wording, edit the matching file under
`build/i18n/<lang>/` — never the generated HTML and never a template. The two
language packs are structurally identical: if you add an item to an array in
`en/`, add the same item to `zh/` or the page will render short.

```bash
npm run build     # regenerate all 10 pages
npm run dev       # build, then serve on http://localhost:8080
```

Edit the pack or template under `build/`, run the build, and commit both the source
and the generated HTML.

## Design

Taken from the supplied brand mark and homepage mockup (`assets/img/`).

- Navy `#04102b` → `#0f3a86`, electric blue `#1263e0`, gold `#ffc20e`
- Barlow Condensed for display headings, Inter for body
- All iconography is inline SVG; no icon font, no image requests
- Simplified Chinese sets Noto Sans SC and drops the uppercase/letter-spacing
  treatment that only suits Latin type (`.lang-zh` in the stylesheet)
- Responsive from 320px up; respects `prefers-reduced-motion`

## Deployment

Vercel, static. `vercel.json` sets `cleanUrls` (so `/contact` serves `contact.html`),
long-lived caching for `/assets/*` and baseline security headers.

## Content note

Contact details are real. **Rates, statistics, case studies, the UEN, and the
government-scheme figures are not** — they were written to match the reference
designs and need approved sources before this is promoted. The financial
institution names on the homepage are set as text, not logos; see `PRD.md`.
