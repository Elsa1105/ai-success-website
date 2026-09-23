'use strict';
const L = require('../layout.js');
const { ROUTES, href, icon, tick, arrow, pageHero, ctaBand } = L;

module.exports = function whyUs(t, lang) {
  const c = t.why;

  const stance = `<section class="section">
    <div class="wrap">
      <div class="featrow">
        <div class="reveal">
          <span class="badge">${c.stance.badge}</span>
          <h2 style="font-size:clamp(1.8rem,3.2vw,2.6rem)">${c.stance.h}</h2>
          ${c.stance.p.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}${i === c.stance.p.length - 1 ? ' style="margin-bottom:0"' : ''}>${p}</p>`).join('\n          ')}
        </div>
        <div class="reveal">
          <div class="card card--flat">
            <h3>${c.stance.listH}</h3>
            <ul class="checklist" style="margin-top:18px">
              ${c.stance.list.map(([s, d]) => `<li>${tick}<span><strong>${s}</strong>${d}</span></li>`).join('\n              ')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const pillars = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><h2>${c.pillars.h}</h2><div class="rule"></div></div>
      <div class="grid g5">
        ${c.pillars.items.map(([ic, h, p]) => L.card(ic, h, p)).join('\n        ')}
      </div>
    </div>
  </section>`;

  const numbers = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>${c.numbers.h}</h2><div class="rule"></div></div>
      <div class="stats stats--4 reveal">
        ${c.numbers.stats.map(([ic, n, suf, pre, l], i) => `<div class="stat" style="${i === 3 ? 'border-right:0' : ''}">
          ${icon(ic)}
          <div class="stat__n"><span data-count="${n}" data-prefix="${pre}" data-suffix="${suf}">${pre}${n}${suf}</span></div>
          <div class="stat__l">${l}</div>
        </div>`).join('\n        ')}
      </div>
      <p class="center srcnote" style="color:#8fb0dd">${c.numbers.note}</p>
    </div>
  </section>`;

  const process = `<section class="section">
    <div class="wrap">
      <div class="shead"><h2>${c.process.h}</h2><p>${c.process.p}</p><div class="rule"></div></div>
      <div class="grid g4">
        ${c.process.items.map(([tt, p], i) => `<div class="card reveal">
          <div style="font-family:var(--display);font-size:2.5rem;font-weight:800;color:var(--blue-100);line-height:1">0${i + 1}</div>
          <h3 style="margin-top:6px">${tt}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const team = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><span class="badge">${c.team.badge}</span><h2>${c.team.h}</h2><p>${c.team.p}</p><div class="rule"></div></div>
      <div class="grid g4">
        ${c.team.items.map(([ini, n, r, b]) => `<div class="card card--center reveal">
          <span class="avatar" style="width:74px;height:74px;font-size:1.5rem;margin:0 auto 16px">${ini}</span>
          <h3 style="margin-bottom:2px">${n}</h3>
          <p style="font-size:.78rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--blue-600);margin-bottom:10px">${r}</p>
          <p style="font-size:.93rem">${b}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const compliance = `<section class="section section--tight">
    <div class="wrap">
      <div class="grid g3">
        ${c.compliance.map(([ic, h, p]) => `<div class="card card--flat reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  return L.page({
    file: 'why-us.html',
    route: ROUTES.why,
    active: 'why',
    t, lang,
    title: c.meta.title,
    description: c.meta.description,
    body: [pageHero(t, lang, c.hero.crumb, c.hero.h1, c.hero.sub), stance, pillars, numbers, process, team, compliance, ctaBand(t, lang, c.cta.h, c.cta.p)].join('\n')
  });
};
