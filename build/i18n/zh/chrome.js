'use strict';
const { ROUTES } = require('../../layout.js');

module.exports = {
  lang: 'zh',
  tagline: '智慧贷款 · 实在增长',

  common: {
    home: '首页',
    skip: '跳至正文',
    learnMore: '了解更多',
    readMore: '阅读指南',
    viewDetails: '查看详情'
  },

  nav: {
    ariaPrimary: '主导航',
    ariaMenu: '开关菜单',
    home: '首页',
    loans: '贷款方案',
    why: '为何选择我们',
    stories: '成功案例',
    resources: '资源中心',
    apply: '立即申请',
    allLoans: '全部贷款方案',
    allLoansSub: '比较所有产品',
    guides: '指南与工具',
    guidesSub: '中小企业融资知识',
    faq: '常见问题',
    faqSub: '常见疑问解答',
    estimator: '还款试算',
    estimatorSub: '估算每月还款额',
    advisor: '咨询顾问',
    advisorSub: '当天回电'
  },

  loanPages: [
    { route: ROUTES.workingCapital, title: '营运资金贷款', sub: '应付日常现金需求' },
    { route: ROUTES.termLoan, title: '企业定期贷款', sub: '一次性资金，助您扩张' },
    { route: ROUTES.invoice, title: '发票融资', sub: '盘活应收账款' },
    { route: ROUTES.equipment, title: '设备融资', sub: '购置机器与车辆' }
  ],

  cta: {
    h: '准备让业务更进一步？',
    p: '由新加坡本地顾问为您量身推荐融资方案 —— 无任何义务，也不影响您的信用记录。',
    apply: '立即申请',
    call: '致电'
  },

  footer: {
    about: '新加坡中小企业融资专家。我们以资深信贷顾问搭配智能科技，让成长中的企业更快获得资金。',
    uenLabel: '企业注册号',
    loanSolutions: '贷款方案',
    company: '公司',
    resources: '资源中心',
    connect: '联系我们',
    compareAll: '比较全部方案',
    whyUs: '为何选择 AI Success',
    stories: '成功案例',
    guidesTools: '指南与工具',
    contactUs: '联系我们',
    smeGuides: '中小企业指南',
    faq: '常见问题',
    estimator: '还款试算',
    eligibility: '申请条件',
    rights: '版权所有。',
    disclaimer: '本公司不提供持牌放债服务。所有融资均由我们合作的受监管金融机构安排。'
  }
};
