'use strict';

module.exports = {
  meta: {
    title: 'Apply Now &amp; Contact Us | AI Success Pte. Ltd. Singapore',
    description: 'Apply for an SME loan in five minutes or speak to a Singapore-based advisor on 8857 8585. Includes a free repayment estimator for business loans up to S$5 million.'
  },
  hero: { crumb: 'Contact', h1: 'Let&rsquo;s get you funded', sub: 'Apply online in five minutes, or call and speak to an advisor directly. Either way, you will know where you stand within one working day.' },
  form: {
    badge: 'Apply in 5 minutes',
    h: 'Start your application',
    p: 'No documents needed yet. We will confirm what is required once we know which facility fits.',
    name: 'Full name', namePh: 'e.g. Sarah Lim',
    company: 'Company name', companyPh: 'e.g. The Green Pantry Pte Ltd',
    email: 'Business email', emailPh: 'you@company.com.sg',
    phone: 'Mobile number', phonePh: 'e.g. 9123 4567',
    uen: 'UEN', uenOptional: '(optional)', uenPh: 'e.g. 202412345K',
    trading: 'Years trading',
    tradingOpts: ['Less than 6 months', '6 &ndash; 12 months', '1 &ndash; 3 years', '3 &ndash; 5 years', 'More than 5 years'],
    facility: 'Facility of interest',
    facilityOpts: ['Working Capital Loan', 'Business Term Loan', 'Invoice Financing', 'Equipment Financing', 'Not sure &mdash; please advise'],
    amount: 'Amount required',
    amountOpts: ['Under S$100,000', 'S$100,000 &ndash; S$300,000', 'S$300,000 &ndash; S$500,000', 'S$500,000 &ndash; S$1 million', 'Above S$1 million'],
    msg: 'What is the funding for?',
    msgPh: 'A sentence or two is plenty &mdash; e.g. fitting out a second outlet opening in November.',
    select: 'Select&hellip;',
    submit: 'Submit application',
    note: 'By submitting you agree to be contacted about your enquiry. We never sell your data, and an enquiry does not affect your credit standing.',
    success: 'Thank you &mdash; your enquiry has been received. An advisor will call you within one working day. For anything urgent, call {phone}.'
  },
  tiles: {
    call: 'Call us', callSub: 'Mon&ndash;Fri, 9.00am &ndash; 6.00pm (SGT)',
    whatsapp: 'WhatsApp', whatsappSub: 'Fastest for quick questions.',
    email: 'Email', emailSub: 'Replies within one working day.',
    office: 'Office', officeSub: 'By appointment.'
  },
  next: {
    h: 'What happens next',
    items: [
      ['Within 1 working day', 'An advisor calls to confirm your requirement.'],
      ['Within 24 hours of documents', 'An indicative offer with the full cost breakdown.'],
      ['3&ndash;7 working days', 'Formal approval, e-signing and drawdown.']
    ]
  },
  calc: {
    badge: 'Tool',
    h: 'Repayment estimator',
    p: 'Move the numbers around to see what a facility would cost each month. Calculated on a flat-rate basis, as SME term loans are commonly quoted in Singapore.',
    amount: 'Loan amount (S$)',
    tenure: 'Tenure (months)',
    monthsSuffix: 'months',
    rate: 'Indicative flat rate (% p.a.)',
    resultLabel: 'Estimated monthly repayment',
    interest: 'Total interest',
    total: 'Total repayable',
    note: 'Indicative only and not an offer of credit. Your actual rate depends on credit assessment and is confirmed in writing.'
  },
  reassure: [
    ['lock', 'Encrypted and private', 'Your documents are transmitted securely and shared only with lenders you authorise.'],
    ['eye', 'No obligation', 'An indicative offer is exactly that. Walk away at any point before signing, at no cost.'],
    ['headset', 'A named advisor', 'One person owns your case from first call through to renewal.']
  ],
  cta: { h: 'Prefer to talk it through first?', p: 'Call {phone} between 9am and 6pm on weekdays. No script, no queue &mdash; an advisor picks up.' }
};
