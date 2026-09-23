'use strict';
const { ROUTES } = require('../../layout.js');

module.exports = {
  lang: 'en',
  tagline: 'Smart Loans. Real Growth.',

  common: {
    home: 'Home',
    skip: 'Skip to content',
    learnMore: 'Learn more',
    readMore: 'Read the guide',
    viewDetails: 'View details'
  },

  nav: {
    ariaPrimary: 'Primary',
    ariaMenu: 'Toggle menu',
    home: 'Home',
    loans: 'Loan Solutions',
    why: 'Why Us',
    stories: 'Success Stories',
    resources: 'Resources',
    apply: 'Apply Now',
    allLoans: 'All Loan Solutions',
    allLoansSub: 'Compare every product',
    guides: 'Guides &amp; Tools',
    guidesSub: 'SME financing know-how',
    faq: 'FAQ',
    faqSub: 'Answers to common questions',
    estimator: 'Repayment Estimator',
    estimatorSub: 'Model your monthly cost',
    advisor: 'Talk to an Advisor',
    advisorSub: 'Get a same-day callback'
  },

  loanPages: [
    { route: ROUTES.workingCapital, title: 'Working Capital Loan', sub: 'Cover day-to-day cash needs' },
    { route: ROUTES.termLoan, title: 'Business Term Loan', sub: 'Lump sum for bigger moves' },
    { route: ROUTES.invoice, title: 'Invoice Financing', sub: 'Unlock cash tied up in invoices' },
    { route: ROUTES.equipment, title: 'Equipment Financing', sub: 'Fund machinery and vehicles' }
  ],

  cta: {
    h: 'Ready to take your business further?',
    p: 'Get a tailored financing recommendation from a Singapore-based advisor &mdash; no obligation, no impact on your credit standing.',
    apply: 'Apply Now',
    call: 'Call'
  },

  footer: {
    about: 'A Singapore SME financing specialist pairing seasoned credit advisors with smart technology, so growing businesses get funded faster.',
    uenLabel: 'UEN',
    loanSolutions: 'Loan Solutions',
    company: 'Company',
    resources: 'Resources',
    connect: 'Stay Connected',
    compareAll: 'Compare All',
    whyUs: 'Why AI Success',
    stories: 'Success Stories',
    guidesTools: 'Guides &amp; Tools',
    contactUs: 'Contact Us',
    smeGuides: 'SME Guides',
    faq: 'FAQ',
    estimator: 'Repayment Estimator',
    eligibility: 'Eligibility',
    rights: 'All rights reserved.',
    disclaimer: 'Licensed moneylending is not offered. Financing is arranged with our panel of regulated financial institutions.'
  }
};
