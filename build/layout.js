'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

/* vercel.json serves /assets/* with a one-year immutable cache, so every asset URL
   must change whenever its content does. A short content hash on the query string
   does that; browsers and the Vercel edge both key their caches on the full URL. */
const assetUrl = (rel) => {
  const hash = crypto.createHash('md5').update(fs.readFileSync(path.join(__dirname, '..', rel))).digest('hex').slice(0, 10);
  return '/' + rel + '?v=' + hash;
};
const CSS_URL = assetUrl('assets/css/styles.css');
const JS_URL = assetUrl('assets/js/main.js');

const SITE = {
  name: 'AI Success Pte. Ltd.',
  tagline: 'Smart Loans. Real Growth.',
  phone: '8857 8585',
  phoneHref: 'tel:+6588578585',
  whatsapp: '+65 8857 8585',
  whatsappHref: 'https://wa.me/6588578585',
  email: 'loan@sgvvip.com',
  address: '200 Jln Sultan, #03-31C, Singapore 199018',
  uen: '202412345K',
  url: 'https://aisuccess.sg'
};

const LANGS = ['en', 'zh'];

/* Language-neutral route for every page. The zh build prefixes these with /zh. */
const ROUTES = {
  home: '/',
  loans: '/loan-solutions',
  workingCapital: '/working-capital-loan',
  termLoan: '/business-term-loan',
  invoice: '/invoice-financing',
  equipment: '/equipment-financing',
  why: '/why-us',
  stories: '/success-stories',
  resources: '/resources',
  contact: '/contact'
};

/* Prefix a route for the given language. */
/* vercel.json sets trailingSlash:false, so the zh home is /zh (not /zh/) -
   linking to /zh/ would cost every visitor a 308 redirect. */
const href = (lang, route) => (lang === 'zh' ? (route === '/' ? '/zh' : '/zh' + route) : route);

/* ---------- Logo ---------- */
const LOGO = `<svg viewBox="0 0 62 46" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="lgA" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#0a2a63"/><stop offset="1" stop-color="#2b86f5"/>
    </linearGradient>
    <linearGradient id="lgI" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#0b4fc0"/><stop offset="1" stop-color="#57a5ff"/>
    </linearGradient>
  </defs>
  <path d="M20.5 42H10.8L3 42 18.2 5h9.6L43 42h-9.9l-2.6-7.1H23.1L20.5 42Zm5.1-14.2h6.9L29 17.6h-.2l-2.6 8.4-.6 1.8Z" fill="url(#lgA)"/>
  <rect x="46.5" y="16.5" width="9.5" height="25.5" rx="2.4" fill="url(#lgI)"/>
  <path d="M51.2 3.2l1.9 4.3 4.7.5-3.5 3.2 1 4.6-4.1-2.4-4.1 2.4 1-4.6-3.5-3.2 4.7-.5 1.9-4.3Z" fill="#ffc20e"/>
</svg>`;

const brandBlock = (lang, tagline) => `<a class="logo" href="${href(lang, ROUTES.home)}" aria-label="${SITE.name}">
        ${LOGO}
        <span class="logo__txt">
          <span class="logo__name">AI Success</span>
          <span class="logo__tag">${tagline}</span>
        </span>
      </a>`;

/* ---------- Icon library (24x24, stroke) ---------- */
const I = {
  bolt: '<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
  handshake: '<path d="m11 17 2 2 3-3 3 3 2-2-6.5-6.5"/><path d="M3 12 8 7l3 2.5L8.5 12 11 14.5"/><path d="m13 6-2 2"/><path d="M16 5h3l2 4"/><path d="M8 5H5L3 9"/>',
  stopwatch: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6M19 6l1.5-1.5"/>',
  medal: '<circle cx="12" cy="14" r="6"/><path d="m8.5 9-3-7h5l2 4M15.5 9l3-7h-5"/><path d="m12 11.5.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.9Z"/>',
  shield: '<path d="M12 2.5 4.5 6v6c0 5 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.5 7.5-9.5V6L12 2.5Z"/><path d="m8.8 12 2.3 2.3 4.1-4.6"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5ZM20 13h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5Z"/><path d="M18 19v.5a2.5 2.5 0 0 1-2.5 2.5H13"/>',
  chartup: '<path d="M4 20V9M10 20V4M16 20v-7M22 20H2"/><path d="M4 9 10 4l6 9 5-5"/>',
  form: '<path d="M15 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"/><path d="M8 8h6M8 12h6M8 16h4"/><path d="m17.5 13.5 3.2-3.2a1.6 1.6 0 1 1 2.3 2.3L19.8 15.8 17 16.5l.5-3Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>',
  docsign: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/><path d="M14 3v5h5"/><path d="m9 15 2 2 5-5.5"/>',
  rocket: '<path d="M12 2.5c3.5 2.2 5.5 6 5.5 10L15 15H9l-2.5-2.5c0-4 2-7.8 5.5-10Z"/><circle cx="12" cy="9.5" r="1.8"/><path d="m9 15-2.5 4L9 18.5 10 21l1.2-3M15 15l2.5 4L15 18.5 14 21l-1.2-3"/>',
  users: '<circle cx="9" cy="8" r="3.4"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4A6.5 6.5 0 0 1 21.5 20"/>',
  dollar: '<circle cx="12" cy="12" r="9.2"/><path d="M15 8.6A3 3 0 0 0 12.3 7h-.6a2.4 2.4 0 0 0-.4 4.8h1.4a2.5 2.5 0 0 1 .4 5h-.7A3 3 0 0 1 9 15.3M12 5.2v1.7M12 17v1.8"/>',
  thumb: '<path d="M7 21V10l4.5-7.5a2 2 0 0 1 3 2.3L13.5 9H19a2.5 2.5 0 0 1 2.4 3.1l-1.8 7A2.5 2.5 0 0 1 17.2 21H7Z"/><path d="M7 10H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3"/>',
  cash: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>',
  building: '<path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M15 10h3a2 2 0 0 1 2 2v9"/><path d="M8 7h3M8 11h3M8 15h3"/>',
  invoice: '<path d="M6 2.5h12v19l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4v-19Z"/><path d="M9 7.5h6M9 11h6M9 14.5h3"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"/>',
  utensils: '<path d="M5 2.5v7a2.5 2.5 0 0 0 5 0v-7M7.5 12v9.5"/><path d="M16.5 2.5c-1.6 1.4-2.5 3.4-2.5 5.6V13h4V2.5Zm1.5 10.5v8.5"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 2.5v3M14 2.5v3M10 18.5v3M14 18.5v3M2.5 10h3M2.5 14h3M18.5 10h3M18.5 14h3"/>',
  leaf: '<path d="M20.5 3.5c0 9-5 14-11 14a5.5 5.5 0 0 1-5.5-5.5c0-6 5-8.5 16.5-8.5Z"/><path d="M4 20.5c2.5-5 6.5-9 12-11.5"/>',
  truck: '<path d="M2.5 6.5h11v9h-11z"/><path d="M13.5 10h4l3 3v2.5h-7Z"/><circle cx="7" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
  bag: '<path d="M4.5 8h15l-1.2 12.5a1.5 1.5 0 0 1-1.5 1.3H7.2a1.5 1.5 0 0 1-1.5-1.3L4.5 8Z"/><path d="M8.5 10.5V6.5a3.5 3.5 0 1 1 7 0v4"/>',
  phone: '<path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5C10.4 19.4 4.6 13.6 4 5.7A2.5 2.5 0 0 1 6.5 3Z"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21.5S4.5 15.4 4.5 10a7.5 7.5 0 0 1 15 0c0 5.4-7.5 11.5-7.5 11.5Z"/><circle cx="12" cy="10" r="2.8"/>',
  chat: '<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12Z"/>',
  book: '<path d="M4 4.5A2 2 0 0 1 6 2.5h13v16H6a2 2 0 0 0-2 2v-16Z"/><path d="M4 20.5a2 2 0 0 1 2-2h13v3H6a2 2 0 0 1-2-2Z"/>',
  calc: '<rect x="4.5" y="2.5" width="15" height="19" rx="2"/><path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  scale: '<path d="M12 3v18M7 21h10M3 8h18M3 8l-2 6a3.2 3.2 0 0 0 6.4 0L5 8M19 8l-2 6a3.2 3.2 0 0 0 6.4 0L21 8"/><circle cx="12" cy="4" r="1.2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  eye: '<path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  flag: '<path d="M5 21V3.5h10.5l-1.5 4 1.5 4H5"/><path d="M5 3.5V21"/>',
  lock: '<rect x="4.5" y="10" width="15" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/><path d="M12 14.5v2.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.9 5.7 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.7-3.9-9S9.4 5.6 12 3Z"/>',
  bank: '<path d="M3 9.5 12 4l9 5.5"/><path d="M4.5 9.5v9M9 9.5v9M15 9.5v9M19.5 9.5v9M2.5 21h19"/>',
  gift: '<rect x="3" y="8.5" width="18" height="4" rx="1"/><path d="M4.5 12.5V21h15v-8.5M12 8.5V21"/><path d="M12 8.5S10.5 3 8 3a2.5 2.5 0 0 0 0 5.5h4Zm0 0S13.5 3 16 3a2.5 2.5 0 0 1 0 5.5h-4Z"/>',
  play: '<circle cx="12" cy="12" r="9.5"/><path d="M10 8.5v7l6-3.5-6-3.5Z"/>',
  sparkle: '<path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z"/><path d="M19 3v3M17.5 4.5h3"/>'
};
const icon = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[name] || ''}</svg>`;
const tick = `<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg></span>`;
const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`;
const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I.phone}</svg>`;

/* ---------- Language toggle ---------- */
function langToggle(lang, route) {
  return `<div class="langtog" role="group" aria-label="Language">
          ${LANGS.map((l) => {
            const active = l === lang;
            const label = l === 'en' ? 'EN' : '中文';
            return active
              ? `<span class="langtog__i is-on" aria-current="true">${label}</span>`
              : `<a class="langtog__i" href="${href(l, route)}" hreflang="${l === 'zh' ? 'zh-Hans' : 'en'}">${label}</a>`;
          }).join('')}
        </div>`;
}

/* ---------- Navigation ---------- */
function nav(active, t, lang, route) {
  const on = (slug) => (active === slug ? ' is-active' : '');
  const caret = `<svg class="nav__caret" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m2.5 4.5 3.5 3.5 3.5-3.5"/></svg>`;
  const drop = t.loanPages.map((p) => `<a href="${href(lang, p.route)}">${p.title}<span>${p.sub}</span></a>`).join('\n            ');
  return `<nav class="nav" id="nav" aria-label="${t.nav.ariaPrimary}">
        <div class="nav__item"><a class="nav__link${on('home')}" href="${href(lang, ROUTES.home)}">${t.nav.home}</a></div>
        <div class="nav__item has-drop">
          <a class="nav__link${on('loans')}" href="${href(lang, ROUTES.loans)}">${t.nav.loans}${caret}</a>
          <div class="drop">
            <a href="${href(lang, ROUTES.loans)}">${t.nav.allLoans}<span>${t.nav.allLoansSub}</span></a>
            ${drop}
          </div>
        </div>
        <div class="nav__item"><a class="nav__link${on('why')}" href="${href(lang, ROUTES.why)}">${t.nav.why}</a></div>
        <div class="nav__item"><a class="nav__link${on('stories')}" href="${href(lang, ROUTES.stories)}">${t.nav.stories}</a></div>
        <div class="nav__item has-drop">
          <a class="nav__link${on('resources')}" href="${href(lang, ROUTES.resources)}">${t.nav.resources}${caret}</a>
          <div class="drop">
            <a href="${href(lang, ROUTES.resources)}">${t.nav.guides}<span>${t.nav.guidesSub}</span></a>
            <a href="${href(lang, ROUTES.resources)}#faq">${t.nav.faq}<span>${t.nav.faqSub}</span></a>
            <a href="${href(lang, ROUTES.contact)}#calculator">${t.nav.estimator}<span>${t.nav.estimatorSub}</span></a>
            <a href="${href(lang, ROUTES.contact)}">${t.nav.advisor}<span>${t.nav.advisorSub}</span></a>
          </div>
        </div>
        ${langToggle(lang, route)}
        <a class="btn btn--blue btn--sm" href="${href(lang, ROUTES.contact)}">${t.nav.apply}</a>
      </nav>`;
}

/* ---------- CTA band ---------- */
const ctaBand = (t, lang, heading, copy) => `<section class="ctaband circuit">
    <div class="wrap">
      <div class="ctaband__in">
        <div>
          <h2>${heading || t.cta.h}</h2>
          <p>${copy || t.cta.p}</p>
        </div>
        <div class="ctaband__btns">
          <a class="btn btn--gold" href="${href(lang, ROUTES.contact)}">${t.cta.apply} ${arrow}</a>
          <a class="btn btn--ghost" href="${SITE.phoneHref}">${phoneIcon} ${t.cta.call} ${SITE.phone}</a>
        </div>
      </div>
    </div>
  </section>`;

/* ---------- Footer ---------- */
const social = [
  ['Facebook', 'M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6A21 21 0 0 0 14.3 4.5c-2.4 0-4 1.46-4 4.14v2.3H7.6V14h2.7v8h3.2Z'],
  ['LinkedIn', 'M6.94 8.5V20H3.5V8.5h3.44Zm.23-3.28a1.96 1.96 0 1 1-3.92 0 1.96 1.96 0 0 1 3.92 0ZM20.5 13.6V20h-3.43v-6c0-1.5-.54-2.53-1.88-2.53-1.03 0-1.64.69-1.9 1.36-.1.24-.13.57-.13.9V20H9.72s.05-10.4 0-11.5h3.44v1.63c.46-.7 1.28-1.72 3.1-1.72 2.26 0 3.96 1.48 3.96 4.67Z'],
  ['Instagram', 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.14A6.66 6.66 0 1 0 18.66 12 6.66 6.66 0 0 0 12 5.34Zm0 10.98A4.32 4.32 0 1 1 16.32 12 4.32 4.32 0 0 1 12 16.32Zm8.48-11.24a1.56 1.56 0 1 1-1.56-1.56 1.56 1.56 0 0 1 1.56 1.56Z'],
  ['YouTube', 'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z']
];

function footer(t, lang) {
  const f = t.footer;
  return `<footer class="footer circuit">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          ${brandBlock(lang, t.tagline)}
          <p class="footer__about">${f.about}</p>
          <p class="footer__about" style="margin-top:12px">${f.uenLabel} ${SITE.uen}</p>
        </div>
        <div>
          <h5>${f.loanSolutions}</h5>
          <ul>
            ${t.loanPages.map((p) => `<li><a href="${href(lang, p.route)}">${p.title}</a></li>`).join('\n            ')}
            <li><a href="${href(lang, ROUTES.loans)}">${f.compareAll}</a></li>
          </ul>
        </div>
        <div>
          <h5>${f.company}</h5>
          <ul>
            <li><a href="${href(lang, ROUTES.why)}">${f.whyUs}</a></li>
            <li><a href="${href(lang, ROUTES.stories)}">${f.stories}</a></li>
            <li><a href="${href(lang, ROUTES.resources)}">${f.guidesTools}</a></li>
            <li><a href="${href(lang, ROUTES.contact)}">${f.contactUs}</a></li>
          </ul>
        </div>
        <div>
          <h5>${f.resources}</h5>
          <ul>
            <li><a href="${href(lang, ROUTES.resources)}">${f.smeGuides}</a></li>
            <li><a href="${href(lang, ROUTES.resources)}#faq">${f.faq}</a></li>
            <li><a href="${href(lang, ROUTES.contact)}#calculator">${f.estimator}</a></li>
            <li><a href="${href(lang, ROUTES.loans)}#eligibility">${f.eligibility}</a></li>
          </ul>
        </div>
        <div>
          <h5>${f.connect}</h5>
          <ul>
            <li><a href="${SITE.phoneHref}">${SITE.phone}</a></li>
            <li><a href="${SITE.whatsappHref}" rel="noopener">WhatsApp ${SITE.whatsapp}</a></li>
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li style="max-width:30ch">${SITE.address}</li>
          </ul>
          <div class="social">
            ${social.map(([n, d]) => `<a href="#" aria-label="${n}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg></a>`).join('\n            ')}
          </div>
        </div>
      </div>
      <div class="footer__bot">
        <div>&copy; <span data-year>2026</span> ${SITE.name}. ${f.rights}</div>
        <div>${f.disclaimer}</div>
      </div>
    </div>
  </footer>`;
}

/* ---------- Page shell ---------- */
function page({ file, route, title, description, active, body, jsonld, t, lang }) {
  const path = href(lang, route);
  const canonical = SITE.url + path;
  const htmlLang = lang === 'zh' ? 'zh-Hans-SG' : 'en-SG';
  const fontFamilies = lang === 'zh'
    ? 'family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700;900'
    : 'family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700;800';
  return `<!doctype html>
<html lang="${htmlLang}"${lang === 'zh' ? ' class="lang-zh"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en-SG" href="${SITE.url}${href('en', route)}">
<link rel="alternate" hreflang="zh-Hans" href="${SITE.url}${href('zh', route)}">
<link rel="alternate" hreflang="x-default" href="${SITE.url}${href('en', route)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${lang === 'zh' ? 'zh_CN' : 'en_SG'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#04102b">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${fontFamilies}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${CSS_URL}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>
<body>
<a class="skip" href="#main">${t.common.skip}</a>
<header class="header">
  <div class="wrap">
    <div class="header__inner">
      ${brandBlock(lang, t.tagline)}
      ${nav(active, t, lang, route)}
      <button class="burger" type="button" aria-label="${t.nav.ariaMenu}" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
${footer(t, lang)}
<script src="${JS_URL}" defer></script>
</body>
</html>
`;
}

/* ---------- Small reusable blocks ---------- */
const pageHero = (t, lang, crumb, h1, sub) => `<section class="phero circuit">
    <div class="wrap">
      <div class="crumbs"><a href="${href(lang, ROUTES.home)}">${t.common.home}</a> &nbsp;/&nbsp; <span>${crumb}</span></div>
      <h1>${h1}</h1>
      <p>${sub}</p>
    </div>
  </section>`;

const card = (ic, h, p) => `<div class="card card--center reveal">
          <div class="icon-circle">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`;

const featCard = (ic, h, p) => `<div class="card reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`;

const acc = (q, a) => `<div class="acc">
        <button class="acc__q" type="button" aria-expanded="false"><span>${q}</span><span class="acc__ic" aria-hidden="true">+</span></button>
        <div class="acc__a"><div>${a}</div></div>
      </div>`;

const testimonial = (quote, initials, name, role) => `<div class="tcard reveal">
          <div class="stars" aria-label="5/5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote>${quote}</blockquote>
          <div class="byline"><span class="avatar">${initials}</span><span><strong>${name}</strong><span>${role}</span></span></div>
        </div>`;

module.exports = {
  SITE, LANGS, ROUTES, href, CSS_URL, JS_URL, LOGO, icon, tick, arrow, phoneIcon,
  page, pageHero, ctaBand, card, featCard, acc, testimonial
};
