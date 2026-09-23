'use strict';
const L = require('../layout.js');
const { SITE, ROUTES, href, icon, tick, arrow, phoneIcon, ctaBand, testimonial } = L;

const heroArt = `<div class="hero__art" aria-hidden="true">
      <svg viewBox="0 0 900 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#0a2a63" stop-opacity=".95"/>
            <stop offset="1" stop-color="#0a2a63" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="arw" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stop-color="#0b4fc0"/><stop offset=".55" stop-color="#2b86f5"/><stop offset="1" stop-color="#8ecbff"/>
          </linearGradient>
          <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="9"/></filter>
        </defs>
        <g fill="url(#sky)">
          <rect x="20" y="330" width="58" height="190"/><rect x="88" y="286" width="44" height="234"/>
          <rect x="142" y="360" width="66" height="160"/><rect x="218" y="250" width="52" height="270"/>
          <rect x="280" y="318" width="40" height="202"/><rect x="330" y="212" width="62" height="308"/>
          <rect x="402" y="300" width="48" height="220"/><rect x="460" y="266" width="70" height="254"/>
          <rect x="540" y="336" width="44" height="184"/><rect x="594" y="238" width="58" height="282"/>
          <rect x="662" y="308" width="50" height="212"/><rect x="722" y="278" width="66" height="242"/>
          <rect x="798" y="344" width="46" height="176"/><rect x="854" y="300" width="40" height="220"/>
        </g>
        <g fill="#8ecbff" opacity=".5">
          <rect x="232" y="268" width="6" height="8"/><rect x="248" y="290" width="6" height="8"/><rect x="344" y="232" width="6" height="8"/>
          <rect x="366" y="262" width="6" height="8"/><rect x="474" y="286" width="6" height="8"/><rect x="500" y="320" width="6" height="8"/>
          <rect x="608" y="258" width="6" height="8"/><rect x="630" y="300" width="6" height="8"/><rect x="738" y="298" width="6" height="8"/>
          <rect x="762" y="340" width="6" height="8"/><rect x="104" y="308" width="6" height="8"/><rect x="118" y="344" width="6" height="8"/>
        </g>
        <path d="M40 460 L190 402 L268 438 L372 318 L452 352 L560 232 L648 268 L800 96" stroke="url(#arw)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" filter="url(#soft)" opacity=".75"/>
        <path d="M40 460 L190 402 L268 438 L372 318 L452 352 L560 232 L648 268 L800 96" stroke="url(#arw)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M742 92 L812 84 L804 156" stroke="#a9d8ff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <g fill="#a9d8ff">
          <circle cx="190" cy="402" r="7"/><circle cx="372" cy="318" r="7"/><circle cx="560" cy="232" r="7"/><circle cx="648" cy="268" r="7"/>
        </g>
      </svg>
    </div>`;

module.exports = function home(t, lang) {
  const c = t.home;
  const R = (k) => href(lang, ROUTES[k]);

  const hero = `<section class="hero circuit">
    <div class="hero__glow" aria-hidden="true"></div>
    ${heroArt}
    <div class="wrap">
      <div class="hero__grid">
        <div>
          <span class="eyebrow">${c.hero.eyebrow}</span>
          <h1>${c.hero.h1a}<br>${c.hero.h1b} <span class="gold">${c.hero.h1gold}</span></h1>
          <p class="hero__lede">${c.hero.lede}</p>

          <div class="trio">
            ${c.hero.trio.map(([ic, tt, ss]) => `<div class="trio__i">
              <div class="trio__ic">${icon(ic)}</div>
              <div class="trio__t">${tt}</div>
              <div class="trio__s">${ss}</div>
            </div>`).join('\n            ')}
          </div>

          <div class="hero__actions">
            <a class="btn btn--gold" href="${R('contact')}">${c.hero.ctaPrimary} ${arrow}</a>
            <a class="btn btn--ghost" href="${SITE.phoneHref}">${c.hero.ctaSecondary} ${phoneIcon}</a>
          </div>
        </div>

        <div class="calccard" id="hcalc">
          <h2 class="calccard__h">${c.calc.title}</h2>
          <p class="calccard__sub">${c.calc.sub}</p>

          <div class="calcrow">
            <label for="hcalc-amount">${c.calc.amountLabel}</label>
            <output id="hcalc-amount-out" for="hcalc-amount">S$100,000</output>
          </div>
          <input class="rng" id="hcalc-amount" type="range" min="20000" max="1000000" step="10000" value="100000" aria-label="${c.calc.amountLabel}">

          <div class="calcrow">
            <label for="hcalc-months">${c.calc.tenureLabel}</label>
            <output id="hcalc-months-out" for="hcalc-months">60 ${c.calc.months}</output>
          </div>
          <input class="rng" id="hcalc-months" type="range" min="6" max="60" step="6" value="60" aria-label="${c.calc.tenureLabel}">
          <span hidden id="hcalc-months-word">${c.calc.months}</span>

          <div class="calccard__result">
            <div class="calccard__rlabel">${c.calc.resultLabel}</div>
            <div class="calccard__amt" id="hcalc-monthly">S$1,907</div>
          </div>

          <a class="btn btn--gold btn--wide" href="${R('contact')}">${c.calc.cta} ${arrow}</a>
          <p class="calccard__note">${c.calc.note}</p>
        </div>
      </div>
    </div>
  </section>`;

  const why = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead">
        <h2>${c.why.h}<br><span class="brandmark">${c.why.brand}</span></h2>
        <div class="rule"></div>
      </div>
      <div class="grid g5">
        ${c.why.cards.map(([ic, h, p]) => L.card(ic, h, p)).join('\n        ')}
      </div>
    </div>
  </section>`;

  const products = `<section class="section">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${c.products.badge}</span>
        <h2>${c.products.h}</h2>
        <p>${c.products.p}</p>
        <div class="rule"></div>
      </div>
      <div class="grid g4">
        ${c.products.items.map(([ic, tt, amt, d, key]) => `<a class="card reveal" href="${R(key)}" style="display:block;color:inherit">
          <div class="icon-sq">${icon(ic)}</div>
          <span class="badge badge--gold">${amt}</span>
          <h3>${tt}</h3>
          <p>${d}</p>
          <p class="cardlink">${t.common.learnMore} &rarr;</p>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const wcl = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>${c.wcl.h}</h2><p style="color:#b8cbe8">${c.wcl.p}</p><div class="rule"></div></div>
      <div class="grid g3">
        ${c.wcl.items.map(([ic, h, p]) => `<div class="card card--dark card--center reveal">
          <div class="icon-circle">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const gov = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead">
        <span class="badge badge--gold">${c.gov.badge}</span>
        <h2>${c.gov.h}</h2>
        <div class="rule"></div>
      </div>
      <div class="featrow" style="align-items:start">
        <div class="grid g2 reveal" style="gap:20px">
          ${c.gov.cards.map((k) => `<div class="govcard">
            <div class="icon-sq">${icon(k.icon)}</div>
            <h3>${k.title}</h3>
            <p class="govcard__period">${k.period}</p>
            <ul class="govlist">${k.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
          </div>`).join('\n          ')}
        </div>
        <div class="reveal">
          ${c.gov.body.map((p) => `<p class="lead">${p}</p>`).join('\n          ')}
          <a class="btn btn--blue" href="${R('contact')}">${c.gov.cta} ${arrow}</a>
          <p class="srcnote">${c.gov.source}</p>
        </div>
      </div>
    </div>
  </section>`;

  const institutions = `<section class="section">
    <div class="wrap">
      <div class="shead"><h2>${c.institutions.h}</h2><div class="rule"></div></div>
      <ul class="fis reveal">
        ${c.institutions.items.map((f) => `<li class="fi"><img class="fi__logo${/\.png$/.test(f.logo) ? ' fi__logo--raster' : ''}" src="/assets/img/logos/${f.logo}" alt="${f.name.replace(/&amp;/g, '&')}" loading="lazy" decoding="async">${f.cn ? `<span class="fi__cn">${f.cn}</span>` : ''}</li>`).join('\n        ')}
      </ul>
      <p class="center srcnote" style="max-width:70ch;margin:26px auto 0">${c.institutions.caption}<br>${c.institutions.trademark}</p>
    </div>
  </section>`;

  const how = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>${c.how.h}</h2><div class="rule"></div></div>
      <div class="steps">
        ${c.how.steps.map(([ic, tt, d], i) => `<div class="step reveal">
          <div class="step__ring"><span class="step__num">${i + 1}</span>${icon(ic)}</div>
          <h4>${tt}</h4>
          <p>${d}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const results = `<section class="section section--blue circuit" style="padding-top:0">
    <div class="wrap">
      <div class="grid g-results">
        <div class="reveal">
          <h2 style="font-size:clamp(1.7rem,3vw,2.4rem);margin-bottom:20px">${c.results.h1}<br><span style="color:var(--gold)">${c.results.h2}</span></h2>
          <div class="quote">
            <p>${c.results.quote}</p>
            <div class="byline">
              <span class="avatar">${c.results.ini}</span>
              <span><strong>${c.results.who}</strong><span>${c.results.role}</span></span>
            </div>
          </div>
        </div>

        <div class="stats reveal">
          ${c.results.stats.map(([ic, n, suf, pre, l]) => `<div class="stat">
            ${icon(ic)}
            <div class="stat__n"><span data-count="${n}" data-prefix="${pre}" data-suffix="${suf}">${pre}${n}${suf}</span></div>
            <div class="stat__l">${l}</div>
          </div>`).join('\n          ')}
        </div>

        <div class="ctapanel reveal">
          <h3>${c.results.panelH}</h3>
          <p>${c.results.panelP}</p>
          <a class="btn btn--gold" href="${R('contact')}">${c.results.panelCta} ${arrow}</a>
          <a class="btn btn--outline" href="${SITE.phoneHref}">${phoneIcon} ${c.results.panelCall} ${SITE.phone}</a>
        </div>
      </div>
    </div>
  </section>`;

  const video = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${c.video.badge}</span>
        <h2>${c.video.h}</h2>
        <p>${c.video.p}</p>
        <div class="rule"></div>
      </div>
      <div class="videobox reveal${c.video.src ? ' videobox--v' : ''}">
        ${c.video.src
          ? `<video controls preload="metadata"${c.video.poster ? ` poster="${c.video.poster}"` : ''} playsinline>
          <source src="${c.video.src}" type="video/mp4">
        </video>`
          : `<div class="videobox__ph">
          <span class="videobox__ic">${icon('play')}</span>
          <p class="videobox__t">${c.video.placeholder}</p>
          <p class="videobox__n">${c.video.placeholderNote}</p>
        </div>`}
      </div>
    </div>
  </section>`;

  const industries = `<section class="section section--tight">
    <div class="wrap">
      <p class="center eyebrow-flat">${c.industries.h}</p>
      <div class="industries">
        ${c.industries.items.map(([ic, a, b]) => `<div class="ind">${icon(ic)}<span><b>${a}</b><span>${b}</span></span></div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  const voices = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${c.voices.badge}</span>
        <h2>${c.voices.h}</h2>
        <div class="rule"></div>
      </div>
      <div class="grid g3">
        ${c.voices.items.map(([q, ini, n, r]) => testimonial(q, ini, n, r)).join('\n        ')}
      </div>
      <p class="center" style="margin-top:34px"><a class="btn btn--outline" href="${R('stories')}">${c.voices.cta} ${arrow}</a></p>
    </div>
  </section>`;

  return L.page({
    file: 'index.html',
    route: ROUTES.home,
    active: 'home',
    t, lang,
    title: c.meta.title,
    description: c.meta.description,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      name: SITE.name,
      slogan: t.tagline,
      url: SITE.url,
      telephone: '+65 8857 8585',
      email: SITE.email,
      areaServed: 'SG',
      address: { '@type': 'PostalAddress', streetAddress: '200 Jln Sultan, #03-31C', addressLocality: 'Singapore', postalCode: '199018', addressCountry: 'SG' }
    },
    body: [hero, why, products, wcl, gov, institutions, how, results, video, industries, voices, ctaBand(t, lang)].join('\n')
  });
};
