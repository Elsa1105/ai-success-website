'use strict';

module.exports = {
  meta: {
    title: 'AI Success Pte. Ltd. | Smart SME Loans in Singapore — Fast Approval, Real Growth',
    description: 'Fast, flexible SME loans in Singapore. Working capital, term loans, invoice and equipment financing up to S$5 million. Approval in 24 hours, rates from 2.88% p.a.'
  },

  hero: {
    eyebrow: 'Smart SME loans for ambitious businesses',
    h1a: 'Fuel your business.',
    h1b: 'Achieve',
    h1gold: 'success.',
    lede: 'Fast, flexible and hassle-free SME loans to help you seize opportunities and grow your business to the next level.',
    trio: [
      ['bolt', 'Fast Approval', 'In 24 hours'],
      ['percent', 'Competitive Rates', 'From 2.88% p.a.'],
      ['handshake', 'Flexible Repayment', 'Up to 60 months']
    ],
    ctaPrimary: 'Check Eligibility',
    ctaSecondary: 'Talk to an Advisor'
  },

  /* Hero loan calculator */
  calc: {
    title: 'Loan calculator',
    sub: 'Estimate your monthly repayment',
    amountLabel: 'Loan amount',
    tenureLabel: 'Tenure',
    months: 'months',
    resultLabel: 'Your monthly repayment',
    cta: 'Do I qualify?',
    note: 'Calculations are indicative and intended only as a guide, based on typical rates for lower-risk businesses. Your actual rate is confirmed in writing before you accept.'
  },

  why: {
    h: 'Why businesses choose',
    brand: 'AI <em>Success</em>',
    cards: [
      ['stopwatch', 'Quick &amp; Easy Application', 'Simple process, minimal paperwork &mdash; most applications take under five minutes.'],
      ['medal', 'High Approval Rate', 'We say YES when banks say NO, because we read your business, not just a score.'],
      ['shield', 'No Hidden Fees', 'Transparent terms, no surprises. Every cost is on the table before you sign.'],
      ['headset', 'Dedicated Support', 'Expert advisors who understand your industry and stay with you after drawdown.'],
      ['chartup', 'Built For Your Growth', 'Facilities that scale with your business as revenue and ambition increase.']
    ]
  },

  products: {
    badge: 'Loan Solutions',
    h: 'Financing shaped around your next move',
    p: 'Four core facilities, one application. Our advisors match you to the structure that fits your cash-flow cycle &mdash; not the other way round.',
    items: [
      ['cash', 'Working Capital Loan', 'Up to S$500,000', 'Smooth out payroll, rent and supplier payments through seasonal dips.', 'workingCapital'],
      ['building', 'Business Term Loan', 'Up to S$5 million', 'A lump sum with fixed monthly repayments for expansion and big moves.', 'termLoan'],
      ['invoice', 'Invoice Financing', 'Up to 90% of invoice', 'Turn 60 to 120-day payment terms into cash within 48 hours.', 'invoice'],
      ['gear', 'Equipment Financing', 'Up to 100% of asset', 'Acquire machinery, vehicles and fit-outs without draining reserves.', 'equipment']
    ]
  },

  /* SME Working Capital Loan features */
  wcl: {
    h: 'SME Working Capital Loan features',
    p: 'The Enterprise Singapore scheme our advisors most often route SME applications through.',
    items: [
      ['cash', 'Up to S$500K financing', 'Access up to S$500,000 of working capital financing under the scheme.'],
      ['clock', 'Up to 5 years repayment', 'Maximum repayment period of 5 years, with no early redemption penalty.'],
      ['users', 'Government risk sharing', '50% government risk sharing, rising to 70% for young companies.']
    ]
  },

  /* Enhanced government support */
  gov: {
    badge: 'New measures announced in July 2026',
    h: 'Enhanced government support for the SME Working Capital Loan &mdash; till March 2027',
    cards: [
      {
        icon: 'building',
        title: 'Enterprise Financing Scheme enhancements',
        period: 'Sep 2026 &ndash; Mar 2027',
        points: [
          'SME Working Capital Loan: government risk-share raised to 70%',
          'Project Loan: government risk-share raised to 70%; covers domestic construction projects'
        ]
      },
      {
        icon: 'gift',
        title: 'One-off SME Cash Grant 2026',
        period: 'Nov 2026',
        points: [
          'S$500 per local employee for eligible SMEs',
          'Capped at S$2,500 per SME'
        ]
      }
    ],
    body: [
      'In July 2026 the government announced a new enhancement to the SME Working Capital Loan, in response to the Middle East conflict. Government risk sharing with participating financial institutions rises from 50% to <strong>70% until March 2027</strong>.',
      'What does this mean for SMEs? Credit conditions are likely to be more accommodative. Businesses exploring financing should look at the scheme before March 2027, while the enhanced risk-share is in place.'
    ],
    source: 'Scheme details are published by Enterprise Singapore and are subject to change. Confirm current terms with your advisor before relying on them.',
    cta: 'Check if you qualify'
  },

  /* Participating financial institutions */
  institutions: {
    h: 'SME financing institutions',
    caption: 'These are some of the participating financial institutions in the Enterprise Singapore SME Working Capital Loan.',
    trademark: 'Logos are trademarks of their respective owners and are shown for identification only.',
    items: [
      { name: 'DBS', logo: 'dbs.svg' }, { name: 'OCBC Bank', logo: 'ocbc.svg' }, { name: 'UOB', logo: 'uob.svg' }, { name: 'Maybank', logo: 'maybank.svg' },
      { name: 'Standard Chartered', logo: 'scb.svg' }, { name: 'HSBC', logo: 'hsbc.svg' }, { name: 'CIMB Bank', logo: 'cimb.svg' }, { name: 'RHB', logo: 'rhb.svg' },
      { name: 'GXS', logo: 'gxs.svg' }, { name: 'ORIX', logo: 'orix.svg' }, { name: 'Hong Leong Finance', logo: 'hong-leong-finance.png' }, { name: 'ETHOZ', logo: 'ethoz.png' },
      { name: 'Singapura Finance', logo: 'singapura-finance.png' }, { name: 'Sing Investments &amp; Finance', logo: 'sing-investments.png' }, { name: 'IFS Capital', logo: 'ifs-capital.svg' }
    ]
  },

  /* Company video */
  video: {
    badge: 'Watch',
    h: 'Meet AI Success',
    p: 'A short introduction to how we work, who we work with, and what happens after you apply.',
    src: '/assets/video/company.mp4',
    poster: '/assets/video/company-poster.jpg',
    placeholder: 'Company video coming soon.',
    placeholderNote: 'Drop the file at <code>assets/video/company.mp4</code> and set <code>video.src</code> in the language pack to publish it.'
  },

  how: {
    h: 'How it works',
    steps: [
      ['form', 'Apply Online', 'Fill in a simple form in less than 5 minutes.'],
      ['clock', 'Get Quick Approval', 'Receive an indicative offer within 24 hours.'],
      ['docsign', 'Sign &amp; Disbursement', 'E-sign and receive funds fast.'],
      ['rocket', 'Grow Your Business', 'Focus on what matters most &mdash; growing your business!']
    ]
  },

  results: {
    h1: 'Real businesses.',
    h2: 'Real results.',
    quote: 'AI Success helped us secure the funds we needed to expand our operations. The process was fast, easy and hassle-free.',
    who: 'Sarah Lim',
    role: 'Founder, The Green Pantry',
    ini: 'SL',
    stats: [
      ['users', '10000', '+', '', 'Businesses Financed'],
      ['dollar', '1', 'B+', '$', 'Loans Disbursed'],
      ['thumb', '98', '%', '', 'Customer Satisfaction']
    ],
    panelH: 'Ready to take your business further?',
    panelP: 'Get the right financing solution tailored to your needs.',
    panelCta: 'Apply Now',
    panelCall: 'Call us:'
  },

  industries: {
    h: 'Trusted by SMEs across various industries',
    items: [
      ['utensils', 'F&amp;B', 'Solutions'], ['chip', 'Tech', 'Innovations'], ['leaf', 'Green', 'Solutions'],
      ['building', 'Build', 'Right'], ['truck', 'Logis', 'Express'], ['bag', 'Retail', 'Hub']
    ]
  },

  voices: {
    badge: 'Success Stories',
    h: 'What Singapore SMEs say',
    items: [
      ['We were quoted six weeks by our bank. AI Success had an indicative offer on the table the next morning and funds in the account inside a week.', 'RT', 'Raymond Tan', 'Managing Director, Precision Metalworks'],
      ['Invoice financing changed how we bid for jobs. We stopped turning away contracts just because payment terms were 90 days.', 'NK', 'Nurul Kamal', 'Director, Skyline Interiors'],
      ['The advisor actually understood our seasonality and structured repayments around it. That is not something a portal can do.', 'JW', 'Jason Wong', 'Owner, Harbour Cafe Group']
    ],
    cta: 'Read the full stories'
  }
};
