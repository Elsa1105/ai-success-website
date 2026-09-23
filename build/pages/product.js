'use strict';
const L = require('../layout.js');
const { SITE, ROUTES, href, icon, tick, arrow, pageHero, ctaBand, acc } = L;

module.exports = function product(d, t, lang) {
  const pc = t.loans.productChrome;
  const R = (k) => href(lang, ROUTES[k]);
  const faqHeading = pc.faqHSuffix ? `${pc.faqH}${d.shortName}${pc.faqHSuffix}` : `${pc.faqH} ${d.shortName}`;

  const specs = `<section class="section section--tight" style="margin-top:-1px">
    <div class="wrap">
      <div class="grid g4">
        ${d.specs.map(([k, v]) => `<div class="card card--center card--flat reveal" style="padding:26px 20px">
          <div style="font-size:.7rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:var(--muted)">${k}</div>
          <div style="font-family:var(--display);font-size:1.85rem;font-weight:800;color:var(--navy-700);line-height:1.1;margin-top:6px">${v}</div>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const overview = `<section class="section" style="padding-top:26px">
    <div class="wrap">
      <div class="featrow">
        <div class="reveal">
          <span class="badge">${d.badge}</span>
          <h2 style="font-size:clamp(1.8rem,3.2vw,2.6rem)">${d.overviewH}</h2>
          ${d.overviewP.map((p) => `<p class="lead">${p}</p>`).join('\n          ')}
        </div>
        <div class="reveal">
          <div class="card card--flat">
            <h3>${d.suitedH || pc.suitedH || 'Best suited to'}</h3>
            <ul class="checklist" style="margin-top:16px">
              ${d.suited.map(([s, x]) => `<li>${tick}<span><strong>${s}</strong>${x}</span></li>`).join('\n              ')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const benefits = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><h2>${d.benefitsH}</h2><div class="rule"></div></div>
      <div class="grid g3">
        ${d.benefits.map(([ic, h, p]) => `<div class="card reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const example = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="featrow">
        <div class="reveal">
          <span class="eyebrow">${pc.workedBadge}</span>
          <h2 style="font-size:clamp(1.7rem,3vw,2.4rem)">${d.example.title}</h2>
          <p style="color:#b8cbe8;font-size:1.06rem">${d.example.blurb}</p>
          <p class="srcnote" style="color:#8fb0dd">${pc.workedNote}</p>
        </div>
        <div class="reveal">
          <div class="stats stats--2">
            ${d.example.figures.map(([n, l], i) => `<div class="stat" style="${i % 2 === 0 ? '' : 'border-right:0'}">
              <div class="stat__n">${n}</div>
              <div class="stat__l">${l}</div>
            </div>`).join('\n            ')}
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const steps = `<section class="section">
    <div class="wrap">
      <div class="shead"><h2>${pc.stepsH}</h2><div class="rule"></div></div>
      <div class="grid g4">
        ${d.steps.map(([tt, p], i) => `<div class="card reveal">
          <div style="font-family:var(--display);font-size:2.5rem;font-weight:800;color:var(--blue-100);line-height:1">0${i + 1}</div>
          <h3 style="margin-top:6px">${tt}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const faq = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><h2>${faqHeading}</h2><div class="rule"></div></div>
      <div class="narrow mx-auto">
        ${d.faq.map(([q, a]) => acc(q, a)).join('\n        ')}
      </div>
    </div>
  </section>`;

  const related = `<section class="section section--tight">
    <div class="wrap">
      <div class="shead" style="margin-bottom:34px"><h2 style="font-size:clamp(1.5rem,2.6vw,2rem)">${pc.relatedH}</h2></div>
      <div class="grid g3">
        ${d.related.map(([ic, tt, p, key]) => `<a class="card reveal" href="${R(key)}" style="display:block;color:inherit">
          <div class="icon-sq">${icon(ic)}</div>
          <h3>${tt}</h3>
          <p>${p}</p>
          <p class="cardlink">${pc.learnMore} &rarr;</p>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  return L.page({
    file: d.file,
    route: ROUTES[d.key],
    active: 'loans',
    t, lang,
    title: d.title,
    description: d.description,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: d.name,
      provider: { '@type': 'FinancialService', name: SITE.name, url: SITE.url },
      description: d.description,
      areaServed: 'SG'
    },
    body: [
      pageHero(t, lang, d.name, d.h1, d.sub),
      specs, overview, benefits, example, steps, faq, related,
      ctaBand(t, lang, d.ctaH, d.ctaP)
    ].join('\n')
  });
};
