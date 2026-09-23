'use strict';

module.exports = {
  /* Shared chrome for the four product pages */
  productChrome: {
  suitedH: 'Best suited to',
    workedBadge: 'Worked example',
    workedNote: 'Illustrative only. Your own terms depend on credit assessment and are confirmed in writing before you accept.',
    stepsH: 'From application to funds',
    faqH: 'Questions about',
    relatedH: 'Also worth considering',
    learnMore: 'Learn more'
  },

  meta: {
    title: 'SME Loan Solutions in Singapore | AI Success Pte. Ltd.',
    description: 'Compare working capital loans, business term loans, invoice financing and equipment financing for Singapore SMEs. Amounts up to S$5 million with approval in 24 hours.'
  },
  hero: {
    crumb: 'Loan Solutions',
    h1: 'Loan solutions built around how you actually trade',
    sub: 'From a short-term cash-flow bridge to a five-year expansion facility &mdash; compare every option, see the real numbers, and apply once.'
  },
  intro: {
    badge: 'Four Facilities. One Application.',
    h: 'Match the facility to the need',
    p: 'Most SMEs do not need &ldquo;a loan&rdquo; &mdash; they need the right structure. A working capital line and a five-year term loan solve very different problems, and using the wrong one is expensive. Here is how they compare.',
    items: [
      ['cash', 'Working Capital Loan', 'Up to S$500,000 &middot; 6&ndash;24 months', 'Best when the gap is timing, not profitability: payroll before a big receivable lands, a bulk stock purchase ahead of peak season, or a supplier demanding shorter terms.', 'workingCapital'],
      ['building', 'Business Term Loan', 'Up to S$5,000,000 &middot; 12&ndash;60 months', 'Best for a defined investment with a payback period: a second outlet, an acquisition, a fit-out, or consolidating scattered short-term debt into one predictable repayment.', 'termLoan'],
      ['invoice', 'Invoice Financing', 'Up to 90% of invoice value', 'Best when your customers are creditworthy but slow. Advance against approved invoices instead of borrowing against your balance sheet.', 'invoice'],
      ['gear', 'Equipment Financing', 'Up to 100% of asset cost', 'Best when the asset itself generates the return. The equipment secures the facility, so pricing is typically sharper than an unsecured loan.', 'equipment']
    ]
  },
  compare: {
    h: 'Compare at a glance',
    cols: ['Facility', 'Amount', 'Tenure', 'Indicative rate', 'Typical use'],
    rows: [
      ['Working Capital Loan', 'S$50k &ndash; S$500k', '6 &ndash; 24 months', 'From 2.88% p.a.', 'Cash-flow gaps, stock, payroll'],
      ['Business Term Loan', 'S$100k &ndash; S$5m', '12 &ndash; 60 months', 'From 3.20% p.a.', 'Expansion, acquisition, refinancing'],
      ['Invoice Financing', 'Up to 90% of invoice', '30 &ndash; 120 days', 'From 0.7% / month', 'Long customer payment terms'],
      ['Equipment Financing', 'Up to 100% of asset', '12 &ndash; 84 months', 'From 2.98% p.a.', 'Machinery, vehicles, fit-out']
    ],
    note: 'Rates shown are indicative starting points for well-qualified applicants and vary with credit profile, tenure and security. Your final offer letter will state all rates and fees in full.'
  },
  eligibility: {
    badge: 'Eligibility',
    h: 'Do you qualify?',
    lead: 'Our baseline criteria are deliberately broad. If you fall just outside one of them, it is still worth a conversation &mdash; roughly a third of the businesses we fund did.',
    items: [
      ['Registered in Singapore', 'Company, LLP or sole proprietorship with a valid UEN.'],
      ['At least 6 months of trading', 'Younger businesses can still apply with a guarantor or contracts in hand.'],
      ['Annual revenue from S$120,000', 'Or a demonstrable forward order book.'],
      ['30% local shareholding', 'Required for certain government-assisted schemes only.'],
      ['Director aged 21 and above', 'Personal guarantee is typical for unsecured facilities.']
    ],
    docH: 'What you will need to submit',
    docP: 'Everything is uploaded through a secure portal &mdash; no printing, no branch visit.',
    docs: [
      ['ACRA business profile', 'Dated within the last 6 months.'],
      ['6 months of bank statements', 'Operating accounts, PDF direct from your bank.'],
      ['Latest financial statements', 'Or management accounts if unaudited.'],
      ['Director&rsquo;s NRIC and Notice of Assessment', 'Two most recent years.']
    ],
    cta: 'Start your application'
  },
  support: {
    h: 'Beyond the loan',
    p: 'Financing is one decision inside a bigger plan. Our advisors help you get the rest right too.',
    items: [
      ['scale', 'Structure Review', 'We model two or three structures side by side so you can see the true cost of each before committing.'],
      ['globe', 'Government Schemes', 'Where you qualify, we route the application through Enterprise Singapore-backed programmes for better pricing.'],
      ['target', 'Refinancing Health Checks', 'A free annual review of your existing facilities &mdash; many clients cut monthly outgoings without borrowing more.']
    ]
  },
  cta: {
    h: 'Not sure which facility fits?',
    p: 'Tell us what the money is for and we will come back with a recommendation, a rate, and the honest trade-offs of each option.'
  }
};
