'use strict';
const L = require('../layout.js');
const { SITE, ROUTES, href, icon, tick, arrow, phoneIcon, pageHero, ctaBand } = L;

module.exports = function contact(t, lang) {
  const c = t.contact;
  const f = c.form;
  const opts = (list) => `<option value="">${f.select}</option>` + list.map((o) => `<option>${o}</option>`).join('');

  const form = `<section class="section">
    <div class="wrap">
      <div class="grid g-form">
        <div class="reveal">
          <form class="form" data-form novalidate>
            <span class="badge">${f.badge}</span>
            <h2 style="font-size:clamp(1.6rem,2.8vw,2.1rem)">${f.h}</h2>
            <p>${f.p}</p>

            <div class="field--row">
              <div class="field">
                <label for="f-name">${f.name}</label>
                <input id="f-name" name="name" type="text" autocomplete="name" placeholder="${f.namePh}" required>
              </div>
              <div class="field">
                <label for="f-company">${f.company}</label>
                <input id="f-company" name="company" type="text" autocomplete="organization" placeholder="${f.companyPh}" required>
              </div>
            </div>

            <div class="field--row">
              <div class="field">
                <label for="f-email">${f.email}</label>
                <input id="f-email" name="email" type="email" autocomplete="email" placeholder="${f.emailPh}" required>
              </div>
              <div class="field">
                <label for="f-phone">${f.phone}</label>
                <input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="${f.phonePh}" required>
              </div>
            </div>

            <div class="field--row">
              <div class="field">
                <label for="f-uen">${f.uen} <span style="color:var(--muted);font-weight:500;text-transform:none;letter-spacing:0">${f.uenOptional}</span></label>
                <input id="f-uen" name="uen" type="text" placeholder="${f.uenPh}">
              </div>
              <div class="field">
                <label for="f-trading">${f.trading}</label>
                <select id="f-trading" name="trading" required>${opts(f.tradingOpts)}</select>
              </div>
            </div>

            <div class="field--row">
              <div class="field">
                <label for="f-facility">${f.facility}</label>
                <select id="f-facility" name="facility" required>${opts(f.facilityOpts)}</select>
              </div>
              <div class="field">
                <label for="f-amount">${f.amount}</label>
                <select id="f-amount" name="amount" required>${opts(f.amountOpts)}</select>
              </div>
            </div>

            <div class="field">
              <label for="f-msg">${f.msg}</label>
              <textarea id="f-msg" name="message" placeholder="${f.msgPh}"></textarea>
            </div>

            <button class="btn btn--gold btn--wide" type="submit">${f.submit} ${arrow}</button>
            <p class="formnote">${f.note}</p>
            <div class="formmsg" role="status">${f.success.replace('{phone}', SITE.phone)}</div>
          </form>
        </div>

        <div class="reveal stack">
          <div class="ctile">
            ${icon('phone')}
            <div><h4>${c.tiles.call}</h4><p><a href="${SITE.phoneHref}">${SITE.phone}</a><br>${c.tiles.callSub}</p></div>
          </div>
          <div class="ctile">
            ${icon('chat')}
            <div><h4>${c.tiles.whatsapp}</h4><p><a href="${SITE.whatsappHref}" rel="noopener">${SITE.whatsapp}</a><br>${c.tiles.whatsappSub}</p></div>
          </div>
          <div class="ctile">
            ${icon('mail')}
            <div><h4>${c.tiles.email}</h4><p><a href="mailto:${SITE.email}">${SITE.email}</a><br>${c.tiles.emailSub}</p></div>
          </div>
          <div class="ctile">
            ${icon('pin')}
            <div><h4>${c.tiles.office}</h4><p>${SITE.address}<br>${c.tiles.officeSub}</p></div>
          </div>
          <div class="card card--flat">
            <h3>${c.next.h}</h3>
            <ul class="checklist" style="margin-top:16px">
              ${c.next.items.map(([s, d]) => `<li>${tick}<span><strong>${s}</strong>${d}</span></li>`).join('\n              ')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const cc = c.calc;
  const calculator = `<section class="section section--surface" id="calculator">
    <div class="wrap">
      <div class="shead">
        <span class="badge">${cc.badge}</span>
        <h2>${cc.h}</h2>
        <p>${cc.p}</p>
        <div class="rule"></div>
      </div>
      <div class="grid g-calc" id="calc">
        <div class="form reveal">
          <div class="field">
            <label for="calc-amount">${cc.amount}</label>
            <input id="calc-amount" type="number" min="10000" max="5000000" step="10000" value="150000">
          </div>
          <div class="field">
            <label for="calc-months">${cc.tenure}</label>
            <select id="calc-months">
              ${[6, 12, 18, 24, 36, 48, 60].map((m) => `<option value="${m}"${m === 12 ? ' selected' : ''}>${m} ${cc.monthsSuffix}</option>`).join('\n              ')}
            </select>
          </div>
          <div class="field" style="margin-bottom:0">
            <label for="calc-rate">${cc.rate}</label>
            <input id="calc-rate" type="number" min="1" max="20" step="0.01" value="2.88">
          </div>
        </div>
        <div class="card card--flat reveal" style="display:flex;flex-direction:column;justify-content:center;text-align:center;background:linear-gradient(160deg,var(--navy-800),var(--navy-700));border-color:rgba(87,165,255,.35)">
          <div style="font-size:.76rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#bcd8ff">${cc.resultLabel}</div>
          <div id="calc-monthly" style="font-family:var(--display);font-size:clamp(2.6rem,5vw,3.6rem);font-weight:800;color:var(--gold);line-height:1;margin:10px 0 24px">S$12,860</div>
          <div class="grid g2" style="gap:14px">
            <div style="padding:16px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(139,175,231,.2)">
              <div style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:#a3bee0;font-weight:700">${cc.interest}</div>
              <div id="calc-interest" style="font-family:var(--display);font-size:1.5rem;font-weight:800;color:#fff;margin-top:4px">S$4,320</div>
            </div>
            <div style="padding:16px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(139,175,231,.2)">
              <div style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:#a3bee0;font-weight:700">${cc.total}</div>
              <div id="calc-total" style="font-family:var(--display);font-size:1.5rem;font-weight:800;color:#fff;margin-top:4px">S$154,320</div>
            </div>
          </div>
          <p class="srcnote" style="color:#8fb0dd">${cc.note}</p>
        </div>
      </div>
    </div>
  </section>`;

  const reassure = `<section class="section section--tight">
    <div class="wrap">
      <div class="grid g3">
        ${c.reassure.map(([ic, h, p]) => `<div class="card card--flat card--center reveal">
          <div class="icon-circle">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

  return L.page({
    file: 'contact.html',
    route: ROUTES.contact,
    active: 'contact',
    t, lang,
    title: c.meta.title,
    description: c.meta.description,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: c.meta.title.replace(/&amp;/g, '&'),
      url: SITE.url + href(lang, ROUTES.contact)
    },
    body: [
      pageHero(t, lang, c.hero.crumb, c.hero.h1, c.hero.sub),
      form, calculator, reassure,
      ctaBand(t, lang, c.cta.h, c.cta.p.replace('{phone}', SITE.phone))
    ].join('\n')
  });
};
