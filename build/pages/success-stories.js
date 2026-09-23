'use strict';
const L = require('../layout.js');
const { ROUTES, icon, arrow, pageHero, ctaBand, testimonial } = L;

module.exports = function successStories(t, lang) {
  const c = t.stories;

  const stats = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>${c.statsH1} <span style="color:var(--gold)">${c.statsH2}</span></h2><div class="rule"></div></div>
      <div class="stats stats--4 reveal">
        ${c.stats.map(([ic, n, suf, pre, l], i) => `<div class="stat" style="${i === 3 ? 'border-right:0' : ''}">
          ${icon(ic)}
          <div class="stat__n"><span data-count="${n}" data-prefix="${pre}" data-suffix="${suf}">${pre}${n}${suf}</span></div>
          <div class="stat__l">${l}</div>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const caseBlock = (k, i) => `<section class="section${i % 2 === 1 ? ' section--surface' : ''}">
    <div class="wrap">
      <div class="featrow" style="align-items:start">
        <div class="reveal">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span class="icon-sq" style="margin:0;width:46px;height:46px;border-radius:12px">${icon(k.ic)}</span>
            <span class="badge" style="margin:0">${k.ind}</span>
          </div>
          <h2 style="font-size:clamp(1.6rem,2.8vw,2.2rem)">${k.head}</h2>
          <p class="caselabel">${c.labels.challenge}</p>
          <p>${k.challenge}</p>
          <p class="caselabel">${c.labels.solution}</p>
          <p>${k.solution}</p>
          <p class="caselabel">${c.labels.result}</p>
          <p style="margin-bottom:0">${k.result}</p>
        </div>
        <div class="reveal stack">
          <div class="grid g2" style="gap:14px">
            ${k.figures.map(([n, l]) => `<div class="card card--center card--flat" style="padding:22px 14px">
              <div style="font-family:var(--display);font-size:1.7rem;font-weight:800;color:var(--navy-700);line-height:1">${n}</div>
              <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);margin-top:6px">${l}</div>
            </div>`).join('\n            ')}
          </div>
          <div class="tcard">
            <div class="stars" aria-label="5/5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>${k.quote}</blockquote>
            <div class="byline"><span class="avatar">${k.ini}</span><span><strong>${k.who}</strong><span>${k.role}</span></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const more = `<section class="section">
    <div class="wrap">
      <div class="shead"><h2>${c.moreH}</h2><div class="rule"></div></div>
      <div class="grid g3">
        ${c.more.map(([q, ini, n, r]) => testimonial(q, ini, n, r)).join('\n        ')}
      </div>
    </div>
  </section>`;

  return L.page({
    file: 'success-stories.html',
    route: ROUTES.stories,
    active: 'stories',
    t, lang,
    title: c.meta.title,
    description: c.meta.description,
    body: [pageHero(t, lang, c.hero.crumb, c.hero.h1, c.hero.sub), stats, ...c.cases.map(caseBlock), more, ctaBand(t, lang, c.cta.h, c.cta.p)].join('\n')
  });
};
