'use strict';
const L = require('../layout.js');
const { ROUTES, href, icon, tick, arrow, pageHero, ctaBand } = L;

module.exports = function loanSolutions(t, lang) {
  const c = t.loans;
  const R = (k) => href(lang, ROUTES[k]);

  const intro = `<section class="section">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${c.intro.badge}</span>
        <h2>${c.intro.h}</h2>
        <p>${c.intro.p}</p>
        <div class="rule"></div>
      </div>
      <div class="grid g2">
        ${c.intro.items.map(([ic, tt, amt, d, key]) => `<div class="card reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <span class="badge badge--gold">${amt}</span>
          <h3>${tt}</h3>
          <p>${d}</p>
          <a class="btn btn--outline btn--sm" href="${R(key)}" style="margin-top:8px">${t.common.viewDetails} ${arrow}</a>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const compare = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><h2>${c.compare.h}</h2><div class="rule"></div></div>
      <div class="tablewrap reveal">
        <table>
          <thead><tr>${c.compare.cols.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${c.compare.rows.map((r) => `<tr><td><strong>${r[0]}</strong></td>${r.slice(1).map((d) => `<td>${d}</td>`).join('')}</tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
      <p class="srcnote">${c.compare.note}</p>
    </div>
  </section>`;

  const eligibility = `<section class="section" id="eligibility">
    <div class="wrap">
      <div class="featrow">
        <div class="reveal">
          <span class="badge">${c.eligibility.badge}</span>
          <h2 style="font-size:clamp(1.8rem,3.2vw,2.6rem)">${c.eligibility.h}</h2>
          <p class="lead">${c.eligibility.lead}</p>
          <ul class="checklist" style="margin-top:24px">
            ${c.eligibility.items.map(([s, d]) => `<li>${tick}<span><strong>${s}</strong>${d}</span></li>`).join('\n            ')}
          </ul>
        </div>
        <div class="reveal">
          <div class="card card--flat">
            <h3>${c.eligibility.docH}</h3>
            <p>${c.eligibility.docP}</p>
            <ul class="checklist" style="margin-top:18px">
              ${c.eligibility.docs.map(([s, d]) => `<li>${tick}<span><strong>${s}</strong>${d}</span></li>`).join('\n              ')}
            </ul>
            <a class="btn btn--blue btn--wide" href="${R('contact')}" style="margin-top:8px">${c.eligibility.cta} ${arrow}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const support = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>${c.support.h}</h2><p style="color:#b8cbe8">${c.support.p}</p><div class="rule"></div></div>
      <div class="grid g3">
        ${c.support.items.map(([ic, h, p]) => `<div class="card card--dark reveal">
          <div class="icon-sq" style="background:rgba(43,134,245,.16);border-color:rgba(87,165,255,.36)">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  return L.page({
    file: 'loan-solutions.html',
    route: ROUTES.loans,
    active: 'loans',
    t, lang,
    title: c.meta.title,
    description: c.meta.description,
    body: [pageHero(t, lang, c.hero.crumb, c.hero.h1, c.hero.sub), intro, compare, eligibility, support, ctaBand(t, lang, c.cta.h, c.cta.p)].join('\n')
  });
};
