'use strict';

module.exports = {
  meta: {
    title: 'SME Financing Guides, Tools &amp; FAQ | AI Success Singapore',
    description: 'Practical guides, a repayment estimator, a plain-language glossary and answers to the questions Singapore SMEs ask most about business loans and financing.'
  },
  hero: { crumb: 'Resources', h1: 'Guides, tools and straight answers', sub: 'Everything we would tell you on the phone, written down &mdash; so you can compare offers properly and walk into the conversation already knowing the numbers.' },
  guides: {
    badge: 'Guides',
    h: 'SME financing, explained without the jargon',
    p: 'Short, practical reading written by our credit team &mdash; the things we find ourselves explaining on the phone every week.',
    cta: 'Read the guide',
    items: [
      ['calc', 'Flat rate vs effective interest rate', 'Why a 3% flat rate is not a 3% loan, how EIR is calculated, and the one comparison that actually tells you which offer is cheaper.', '8 min read'],
      ['scale', 'How much should an SME actually borrow?', 'A simple debt-service coverage test you can run on your own management accounts before you speak to any lender.', '6 min read'],
      ['form', 'The document pack that gets approved faster', 'What credit officers look for in six months of bank statements, and the three formatting mistakes that stall applications.', '5 min read'],
      ['globe', 'Government-assisted schemes for Singapore SMEs', 'An overview of Enterprise Financing Scheme categories, who qualifies, and where the pricing advantage really sits.', '9 min read'],
      ['invoice', 'Factoring vs invoice discounting', 'Disclosed or confidential, recourse or non-recourse &mdash; the four choices that determine your cost and your customer relationship.', '7 min read'],
      ['shield', 'What a personal guarantee actually commits you to', 'Plain-language coverage of joint and several liability, what lenders can and cannot pursue, and how to limit exposure.', '6 min read']
    ]
  },
  tools: {
    h: 'Tools',
    p: 'Model the numbers yourself before you talk to anyone.',
    items: [
      ['calc', 'Repayment Estimator', 'Enter an amount, tenure and rate to see the indicative monthly repayment and total interest.', 'contactCalc', 'Open the estimator'],
      ['target', 'Eligibility Check', 'Five questions that tell you which of our four facilities you are most likely to qualify for.', 'contact', 'Check eligibility'],
      ['scale', 'Facility Comparison', 'Amounts, tenures and indicative rates for every product on one page.', 'loansEligibility', 'Compare facilities']
    ]
  },
  glossary: {
    badge: 'Glossary',
    h: 'Terms worth knowing before you sign',
    cols: ['Term', 'What it actually means'],
    rows: [
      ['Flat rate', 'Interest charged on the full original principal for the whole tenure, regardless of how much you have repaid. Always lower-looking than the effective rate.'],
      ['Effective Interest Rate (EIR)', 'The true annualised cost, accounting for the reducing balance. Use this, and only this, to compare offers.'],
      ['Personal guarantee', 'A director&rsquo;s personal promise to repay if the company cannot. Standard on unsecured SME facilities in Singapore.'],
      ['Advance rate', 'In invoice financing, the percentage of an invoice released to you up front &mdash; typically 80&ndash;90%.'],
      ['Recourse', 'Whether you must repay the advance if your customer does not pay. With recourse is the market default and is cheaper.'],
      ['Debt service coverage ratio', 'Operating cash flow divided by total debt repayments. Lenders generally want to see comfortably above 1.0.'],
      ['Hire purchase', 'Asset finance where you own the equipment outright once the final instalment is paid.'],
      ['Conditions precedent', 'The items a lender requires before releasing funds &mdash; signed guarantees, insurance, or a valuation report.']
    ]
  },
  faq: {
    badge: 'FAQ',
    h: 'Frequently asked questions',
    p: 'If your question is not here, call us on {phone} &mdash; a person answers.',
    groups: [
      ['Applying', [
        ['How long does an application take?', '<p>The online form takes about five minutes. Once your documents are uploaded, an indicative decision usually follows within 24 hours on working days. Formal approval and drawdown typically complete within three to seven working days, depending on the facility size and any conditions the lender attaches.</p>'],
        ['What documents do I need?', '<p>For most facilities: your ACRA business profile dated within six months, six months of operating bank statements, your latest financial or management accounts, and the director&rsquo;s NRIC plus two years of Notice of Assessment. Larger term loans and equipment financing may also need a supplier quotation, projections or a valuation report.</p>'],
        ['Does checking eligibility affect my credit standing?', '<p>No. An eligibility check is an internal assessment and leaves no mark. A credit bureau search is only performed when you have seen an indicative offer and asked us to submit a formal application.</p>'],
        ['Can I apply for more than one facility?', '<p>Yes, and it is often the better structure &mdash; for example equipment financing for an asset alongside a working capital line for the operating costs around it. We will assess total affordability across everything before recommending it.</p>']
      ]],
      ['Eligibility', [
        ['My company is only eight months old. Can I still apply?', '<p>Yes. Our baseline is six months of trading. Younger companies are typically offered a smaller starting limit, and a director with relevant industry experience or a signed forward order book strengthens the case considerably.</p>'],
        ['My bank declined us. Does that rule us out?', '<p>Not at all &mdash; it is one of the most common reasons businesses come to us. A single bank applies a single credit policy. We place the case with the lender on our panel whose policy actually fits your profile, and we will explain what drove the original decline.</p>'],
        ['Do you finance sole proprietorships?', '<p>Yes, subject to the same trading history and revenue criteria. Some lenders on our panel and certain government-assisted schemes are restricted to incorporated entities, which we will flag if it affects your options.</p>'],
        ['Is foreign shareholding a problem?', '<p>For our commercial facilities, no. Certain Enterprise Singapore-backed schemes require at least 30% local shareholding, so foreign-owned companies may not access those specific programmes &mdash; but the rest of the panel remains open.</p>']
      ]],
      ['Rates, fees and repayment', [
        ['How are your rates set?', '<p>By your trading history, the facility type, the tenure, and any security offered. Advertised rates from 2.88% p.a. are starting points for well-qualified applicants. Your offer letter states the exact rate, the processing fee and the effective interest rate in full before you sign anything.</p>'],
        ['What fees should I expect?', '<p>A one-time processing fee, disclosed in your offer letter, and where applicable a valuation or legal fee for secured facilities. There are no ongoing account fees, and we do not charge you separately for arranging the placement.</p>'],
        ['Can I settle a loan early?', '<p>Yes. On most facilities there is no penalty after the sixth instalment and interest is rebated pro-rata for the unexpired term. Settlement inside the first six months attracts a small administrative fee, stated up front.</p>'],
        ['What happens if I miss a payment?', '<p>Contact your advisor before the due date rather than after. Late payment triggers a fee and is reported to the credit bureau, but a restructured schedule agreed in advance avoids both. We have arranged repayment holidays and term extensions for clients who raised the issue early.</p>']
      ]],
      ['About AI Success', [
        ['Are you a lender or a broker?', '<p>We are a financing advisory. We arrange facilities with a panel of banks and regulated financial institutions rather than lending our own balance sheet. That is precisely why one application can be matched to the lender most likely to approve it.</p>'],
        ['Do you charge me a fee for your service?', '<p>No. Our remuneration comes from the lender on successful completion, and we disclose it. You are never charged for an application that does not complete.</p>'],
        ['Do you offer personal loans?', '<p>No. We arrange business financing for Singapore-registered entities only. We are not a licensed moneylender and do not offer consumer or payday lending of any kind.</p>'],
        ['How is my information handled?', '<p>Documents are transmitted over an encrypted connection and shared only with the specific lenders you authorise for your case. We do not sell data, and we do not pass your details to parties outside an application you have approved.</p>']
      ]]
    ]
  },
  cta: { h: 'Still have a question?', p: 'Our advisors answer the phone between 9am and 6pm on weekdays, and reply to email within one working day.' }
};
