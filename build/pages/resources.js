'use strict';
const L = require('../layout.js');
const { SITE, ROUTES, href, icon, arrow, pageHero, ctaBand, acc } = L;

module.exports = function resources(t, lang) {
  const c = t.resources;
  const toolHref = {
    contactCalc: href(lang, ROUTES.contact) + '#calculator',
    contact: href(lang, ROUTES.contact),
    loansEligibility: href(lang, ROUTES.loans) + '#eligibility'
  };

  const guides = `<section class="section">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${c.guides.badge}</span>
        <h2>${c.guides.h}</h2>
        <p>${c.guides.p}</p>
        <div class="rule"></div>
      </div>
      <div class="grid g3">
        ${c.guides.items.map(([ic, tt, p, r]) => `<article class="card reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <span class="badge badge--gold">${r}</span>
          <h3>${tt}</h3>
          <p>${p}</p>
          <p class="cardlink">${c.guides.cta} &rarr;</p>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const tools = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>${c.tools.h}</h2><p style="color:#b8cbe8">${c.tools.p}</p><div class="rule"></div></div>
      <div class="grid g3">
        ${c.tools.items.map(([ic, h, p, key, cta]) => `<a class="card card--dark reveal" href="${toolHref[key]}" style="display:block;color:inherit">
          <div class="icon-sq" style="background:rgba(43,134,245,.16);border-color:rgba(87,165,255,.36)">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
          <p class="cardlink" style="color:#8ecbff">${cta} &rarr;</p>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const glossary = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><span class="badge">${c.glossary.badge}</span><h2>${c.glossary.h}</h2><div class="rule"></div></div>
      <div class="tablewrap reveal">
        <table>
          <thead><tr>${c.glossary.cols.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${c.glossary.rows.map(([term, def]) => `<tr><td><strong>${term}</strong></td><td>${def}</td></tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;

  const faq = `<section class="section" id="faq">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${c.faq.badge}</span>
        <h2>${c.faq.h}</h2>
        <p>${c.faq.p.replace('{phone}', `<a href="${SITE.phoneHref}">${SITE.phone}</a>`)}</p>
        <div class="rule"></div>
      </div>
      <div class="narrow mx-auto">
        ${c.faq.groups.map(([groupTitle, items], gi) => `<h3 style="margin:${gi === 0 ? '32px' : '40px'} 0 14px">${groupTitle}</h3>
        ${items.map(([q, a]) => acc(q, a)).join('\n        ')}`).join('\n\n        ')}
      </div>
    </div>
  </section>`;

  return L.page({
    file: 'resources.html',
    route: ROUTES.resources,
    active: 'resources',
    t, lang,
    title: c.meta.title,
    description: c.meta.description,
    body: [pageHero(t, lang, c.hero.crumb, c.hero.h1, c.hero.sub), guides, tools, glossary, faq, ctaBand(t, lang, c.cta.h, c.cta.p)].join('\n')
  });
};
