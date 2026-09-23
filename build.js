#!/usr/bin/env node
'use strict';
/* Builds the static AI Success site in English and Simplified Chinese. */
const fs = require('fs');
const path = require('path');

/* Output to the repo root by default; set OUT_DIR=dist for a clean deploy bundle. */
const root = process.env.OUT_DIR ? path.join(__dirname, process.env.OUT_DIR) : __dirname;
fs.mkdirSync(root, { recursive: true });

const { SITE, LANGS, ROUTES, href } = require('./build/layout.js');
const packs = require('./build/i18n/index.js');

const templates = {
  home: require('./build/pages/home.js'),
  loans: require('./build/pages/loan-solutions.js'),
  product: require('./build/pages/product.js'),
  why: require('./build/pages/why-us.js'),
  stories: require('./build/pages/success-stories.js'),
  resources: require('./build/pages/resources.js'),
  contact: require('./build/pages/contact.js')
};

const written = [];

LANGS.forEach((lang) => {
  const t = packs[lang];
  const dir = lang === 'en' ? root : path.join(root, lang);
  fs.mkdirSync(dir, { recursive: true });

  const pages = [
    ['index.html', templates.home(t, lang)],
    ['loan-solutions.html', templates.loans(t, lang)],
    ...t.products.map((d) => [d.file, templates.product(d, t, lang)]),
    ['why-us.html', templates.why(t, lang)],
    ['success-stories.html', templates.stories(t, lang)],
    ['resources.html', templates.resources(t, lang)],
    ['contact.html', templates.contact(t, lang)]
  ];

  pages.forEach(([file, html]) => {
    fs.writeFileSync(path.join(dir, file), html);
    written.push((lang === 'en' ? '' : lang + '/') + file);
  });
  console.log('  ' + lang + ': ' + pages.length + ' pages');
});

/* Favicon — the "Ai" mark on a navy tile */
fs.writeFileSync(path.join(root, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="13" fill="#04102b"/>
<linearGradient id="a" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2b86f5"/><stop offset="1" stop-color="#8ecbff"/></linearGradient>
<path d="M23 50h-9L26 14h8l12 36h-9l-2.2-7H25.2L23 50Zm4-14h6.2L30.2 25.6h-.2L27 36Z" fill="url(#a)"/>
<circle cx="48" cy="17" r="5" fill="#ffc20e"/>
</svg>
`);

/* Sitemap with hreflang alternates, and robots */
const routeList = Object.values(ROUTES);
const alt = (r) => LANGS.map((l) =>
  `    <xhtml:link rel="alternate" hreflang="${l === 'zh' ? 'zh-Hans' : 'en-SG'}" href="${SITE.url}${href(l, r)}"/>`).join('\n');

fs.writeFileSync(path.join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  LANGS.map((l) => routeList.map((r) =>
    `  <url>\n    <loc>${SITE.url}${href(l, r)}</loc>\n${alt(r)}\n    <changefreq>monthly</changefreq>\n    <priority>${r === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
  ).join('\n')).join('\n') +
  `\n</urlset>\n`);

fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log('  favicon.svg, sitemap.xml, robots.txt');

/* When building into a separate directory, bring the static assets along. */
if (process.env.OUT_DIR) {
  fs.cpSync(path.join(__dirname, 'assets'), path.join(root, 'assets'), { recursive: true });
  console.log('  copied assets/');
}
console.log('\nDone — ' + written.length + ' pages across ' + LANGS.length + ' languages.');
