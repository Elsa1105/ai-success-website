'use strict';
module.exports = Object.assign({}, require('./chrome.js'), {
  home: require('./home.js'),
  loans: require('./loans.js'),
  products: require('./products.js'),
  why: require('./company.js').why,
  stories: require('./company.js').stories,
  resources: require('./resources.js'),
  contact: require('./contact.js')
});
