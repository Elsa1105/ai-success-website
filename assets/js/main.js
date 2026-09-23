/* AI SUCCESS PTE. LTD. — site interactions */
(function () {
  'use strict';

  /* Sticky header shadow */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile navigation */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    /* On small screens, a parent link taps open its dropdown instead of navigating */
    nav.querySelectorAll('.nav__item.has-drop > .nav__link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          link.parentElement.classList.toggle('is-open');
        }
      });
    });
  }

  /* FAQ / accordions */
  document.querySelectorAll('.acc__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc');
      var panel = item.querySelector('.acc__a');
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
    });
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.acc.is-open .acc__a').forEach(function (p) {
      p.style.maxHeight = p.scrollHeight + 'px';
    });
  });

  /* Scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            setTimeout(function () { el.classList.add('is-in'); }, i * 70);
            io.unobserve(el);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* Animated counters */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        co.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var prefix = el.getAttribute('data-prefix') || '';
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1400, start = null;
        var step = function (ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = target * eased;
          var out = target % 1 !== 0 ? val.toFixed(1) : Math.round(val).toLocaleString('en-SG');
          el.textContent = prefix + out + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* Forms — client-side validation + confirmation (no backend wired yet) */
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var msg = form.querySelector('.formmsg');
      if (msg) {
        msg.classList.add('is-on');
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  /* Loan repayment estimator (contact / apply page) */
  var calc = document.getElementById('calc');
  if (calc) {
    var amount = document.getElementById('calc-amount');
    var months = document.getElementById('calc-months');
    var rate = document.getElementById('calc-rate');
    var outMonthly = document.getElementById('calc-monthly');
    var outTotal = document.getElementById('calc-total');
    var outInterest = document.getElementById('calc-interest');
    var fmt = function (n) {
      return 'S$' + Math.round(n).toLocaleString('en-SG');
    };
    var recalc = function () {
      var p = parseFloat(amount.value) || 0;
      var m = parseInt(months.value, 10) || 12;
      var r = parseFloat(rate.value) || 0;
      /* Flat-rate basis, as commonly quoted for SG SME term loans */
      var interest = p * (r / 100) * (m / 12);
      var total = p + interest;
      outMonthly.textContent = fmt(total / m);
      outTotal.textContent = fmt(total);
      outInterest.textContent = fmt(interest);
    };
    [amount, months, rate].forEach(function (el) {
      if (el) { el.addEventListener('input', recalc); el.addEventListener('change', recalc); }
    });
    recalc();
  }

  /* Hero loan calculator (homepage) */
  var hcalc = document.getElementById('hcalc');
  if (hcalc) {
    var HERO_FLAT_RATE = 2.88; /* % p.a., flat basis - matches the advertised headline rate */
    var hAmount = document.getElementById('hcalc-amount');
    var hMonths = document.getElementById('hcalc-months');
    var hAmountOut = document.getElementById('hcalc-amount-out');
    var hMonthsOut = document.getElementById('hcalc-months-out');
    var hMonthly = document.getElementById('hcalc-monthly');
    var monthsWordEl = document.getElementById('hcalc-months-word');
    var monthsWord = monthsWordEl ? monthsWordEl.textContent : 'months';
    var sgd = function (n) { return 'S$' + Math.round(n).toLocaleString('en-SG'); };

    /* Paint the filled portion of each track */
    var paint = function (el) {
      var min = parseFloat(el.min), max = parseFloat(el.max);
      var pct = ((parseFloat(el.value) - min) / (max - min)) * 100;
      el.style.setProperty('--pct', pct + '%');
    };

    var hRecalc = function () {
      var p = parseFloat(hAmount.value) || 0;
      var m = parseInt(hMonths.value, 10) || 12;
      var interest = p * (HERO_FLAT_RATE / 100) * (m / 12);
      hAmountOut.textContent = sgd(p);
      hMonthsOut.textContent = m + ' ' + monthsWord;
      hMonthly.textContent = sgd((p + interest) / m);
      paint(hAmount);
      paint(hMonths);
    };

    [hAmount, hMonths].forEach(function (el) {
      el.addEventListener('input', hRecalc);
      el.addEventListener('change', hRecalc);
    });
    hRecalc();
  }

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
