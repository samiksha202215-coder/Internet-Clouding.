/**
 * InternetClouding — main.js (Final)
 * Database: Google Sheets via SheetDB API
 * SheetDB endpoint: https://sheetdb.io/api/v1/8114z3ywq3wok
 */

/* ══ SheetDB API URL ══ */
var SHEETS_WEBHOOK_URL = 'https://sheetdb.io/api/v1/8114z3ywq3wok';
/* ════════════════════ */

/* ── Inject geometric SVG background ──────── */
(function () {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1440 900');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  svg.style.cssText = 'position:fixed;inset:0;z-index:-1;width:100%;height:100%;pointer-events:none;';
  svg.innerHTML = [
    '<defs>',
    '<linearGradient id="gDark"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e5c28"/><stop offset="100%" stop-color="#2d7a3a"/></linearGradient>',
    '<linearGradient id="gMid"   x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2d7a3a"/><stop offset="100%" stop-color="#52a860"/></linearGradient>',
    '<linearGradient id="gSoft"  x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#52a860"/><stop offset="100%" stop-color="#8fcc8f"/></linearGradient>',
    '<linearGradient id="gTeal"  x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#1e5c45"/><stop offset="100%" stop-color="#2a8a70"/></linearGradient>',
    '<linearGradient id="gAmber" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8883a"/><stop offset="100%" stop-color="#a0602a"/></linearGradient>',
    '<linearGradient id="gLight" x1="1" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#8fcc8f"/><stop offset="100%" stop-color="#c8e6c8"/></linearGradient>',
    '</defs>',
    '<polygon points="1440,0 1100,0 1440,320"            fill="url(#gDark)"  opacity="0.72"/>',
    '<polygon points="1440,320 1100,0 940,200 1160,400"  fill="url(#gMid)"   opacity="0.60"/>',
    '<polygon points="1160,400 940,200 1060,460 1280,520" fill="url(#gSoft)"  opacity="0.52"/>',
    '<polygon points="1440,320 1440,560 1280,520 1160,400" fill="url(#gTeal)" opacity="0.48"/>',
    '<polygon points="1280,0 1440,0 1440,180"             fill="url(#gAmber)" opacity="0.38"/>',
    '<polygon points="1380,0 1440,0 1440,80"              fill="url(#gLight)" opacity="0.50"/>',
    '<polygon points="0,900 0,600 300,900"                fill="url(#gDark)"  opacity="0.65"/>',
    '<polygon points="0,600 300,900 480,700 240,500"      fill="url(#gMid)"   opacity="0.55"/>',
    '<polygon points="240,500 480,700 580,560 340,380"    fill="url(#gSoft)"  opacity="0.45"/>',
    '<polygon points="0,900 300,900 160,1000"             fill="url(#gTeal)"  opacity="0.42"/>',
    '<polygon points="0,760 0,900 120,900"                fill="url(#gAmber)" opacity="0.40"/>',
    '<polygon points="0,0 180,0 0,200"                    fill="url(#gMid)"   opacity="0.42"/>',
    '<polygon points="0,200 180,0 220,160 60,280"         fill="url(#gSoft)"  opacity="0.32"/>',
    '<polygon points="0,0 80,0 0,90"                      fill="url(#gAmber)" opacity="0.38"/>',
    '<polygon points="1440,900 1200,900 1440,720"         fill="url(#gMid)"   opacity="0.38"/>',
    '<polygon points="1440,720 1200,900 1100,820"         fill="url(#gTeal)"  opacity="0.32"/>',
    '<polygon points="620,900 820,640 1020,900"           fill="url(#gSoft)"  opacity="0.22"/>',
    '<polygon points="700,900 820,680 940,900"            fill="url(#gTeal)"  opacity="0.20"/>',
    '<circle cx="940"  cy="200" r="10" fill="#2d7a3a" opacity="0.50"/>',
    '<circle cx="940"  cy="200" r="24" fill="#2d7a3a" opacity="0.12"/>',
    '<circle cx="480"  cy="700" r="9"  fill="#52a860" opacity="0.45"/>',
    '<circle cx="480"  cy="700" r="22" fill="#52a860" opacity="0.10"/>',
    '<circle cx="580"  cy="90"  r="6"  fill="#c8883a" opacity="0.55"/>',
    '<circle cx="300"  cy="820" r="6"  fill="#c8883a" opacity="0.50"/>',
    '<circle cx="820"  cy="640" r="7"  fill="#2a8a70" opacity="0.40"/>',
    '<circle cx="240"  cy="500" r="5"  fill="#8fcc8f" opacity="0.50"/>',
    '<circle cx="1060" cy="460" r="5"  fill="#8fcc8f" opacity="0.45"/>',
    '<line x1="1100" y1="0"   x2="1440" y2="320" stroke="#1e5c28" stroke-width="1.5" opacity="0.18"/>',
    '<line x1="940"  y1="200" x2="1160" y2="400" stroke="#2d7a3a" stroke-width="1"   opacity="0.15"/>',
    '<line x1="0"    y1="600" x2="300"  y2="900" stroke="#1e5c28" stroke-width="1.5" opacity="0.18"/>',
    '<line x1="240"  y1="500" x2="480"  y2="700" stroke="#2d7a3a" stroke-width="1"   opacity="0.15"/>',
  ].join('');
  document.body.insertBefore(svg, document.body.firstChild);
})();

/* ── Nav scroll ────────────────────────────── */
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  function check() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();

/* ── Mobile hamburger ──────────────────────── */
(function () {
  var btn   = document.getElementById('hamburger');
  var links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    var s = btn.querySelectorAll('span');
    if (open) {
      s[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      s[1].style.opacity   = '0';
      s[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      s[0].style.transform = s[2].style.transform = '';
      s[1].style.opacity   = '';
    }
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      var s = btn.querySelectorAll('span');
      s[0].style.transform = s[2].style.transform = '';
      s[1].style.opacity   = '';
    });
  });
})();

/* ── Scroll fade-in ────────────────────────── */
(function () {
  var els = document.querySelectorAll(
    '.service-card,.step,.testimonial-card,.portfolio-card,' +
    '.pricing-card,.addon-card,.service-detail-card,.faq-item,.quote-reason'
  );
  if (!els.length) return;
  els.forEach(function (el) { el.classList.add('fade-in'); });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(function (el) { obs.observe(el); });
})();

/* ── FAQ accordion ─────────────────────────── */
function toggleFaq(btn) {
  var ans    = btn.nextElementSibling;
  var isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(function (q) {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('visible');
  });
  if (!isOpen) { btn.classList.add('open'); ans.classList.add('visible'); }
}

/* ── Portfolio filter ──────────────────────── */
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-card').forEach(function (c) {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.category !== cat);
  });
}

/* ── Pre-select service/plan from URL ──────── */
(function () {
  var p   = new URLSearchParams(window.location.search);
  var sel = document.getElementById('service');
  if (sel && p.get('service')) sel.value = p.get('service');
})();

/* ══════════════════════════════════════════════
   GOOGLE SHEETS — Contact Form Submission
   ══════════════════════════════════════════════ */
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Collect values */
    var name       = (form.querySelector('#name')       || {}).value || '';
    var email      = (form.querySelector('#email')      || {}).value || '';
    var phone      = (form.querySelector('#phone')      || {}).value || '';
    var service    = (form.querySelector('#service')    || {}).value || '';
    var budget     = (form.querySelector('#budget')     || {}).value || '';
    var message    = (form.querySelector('#message')    || {}).value || '';
    var newsletter = form.querySelector('[name="newsletter"]');
    name    = name.trim(); email = email.trim(); message = message.trim();

    var msgBox     = document.getElementById('formMsg');
    var submitBtn  = document.getElementById('submitBtn');
    var submitText = document.getElementById('submitText');
    var submitLoad = document.getElementById('submitLoader');

    /* Validate */
    var errors = [];
    if (name.length < 2)   errors.push('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email.');
    if (!service)          errors.push('Please select a service.');
    if (message.length < 20) errors.push('Please describe your project (at least 20 characters).');
    if (errors.length) { showMsg(msgBox, errors.join(' '), 'error'); return; }

    /* Loading */
    submitBtn.disabled       = true;
    submitText.style.display = 'none';
    submitLoad.style.display = 'inline';

    /* Build payload */
    var serviceLabels = {
      website:'Website Design', ecommerce:'E-Commerce', landing:'Landing Page',
      webapp:'Web Application', seo:'SEO & Performance', maintenance:'Maintenance', other:'Other'
    };
    var budgetLabels = {
      'under10k':'Under ₹10,000','10-25k':'₹10,000–₹25,000',
      '25-60k':'₹25,000–₹60,000','60k+':'₹60,000+','unsure':'Not sure yet'
    };

    /* SheetDB format: { "data": { ColumnHeader: value } } */
    var payload = JSON.stringify({
      data: {
        Timestamp:  new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        Name:       name,
        Email:      email,
        Phone:      phone || '',
        Service:    serviceLabels[service] || service,
        Budget:     budgetLabels[budget]   || budget || '',
        Message:    message,
        Newsletter: newsletter && newsletter.checked ? 'Yes' : 'No',
        Status:     'New',
        Notes:      ''
      }
    });

    /* Send to Google Sheets via SheetDB */
    fetch(SHEETS_WEBHOOK_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    payload
    })
    .then(function (res) {
      if (res.ok) {
        showMsg(msgBox, "Thanks " + name + "! We've received your message and will reply within 24 hours. 🎉", 'success');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    })
    .catch(function () {
      /* Fallback to mailto if fetch fails */
      fallbackEmail(name, email, service, message);
      showMsg(msgBox, "Couldn't save automatically — we've opened your email app as a backup.", 'error');
    })
    .finally(resetBtn);
  });

  function fallbackEmail(name, email, service, message) {
    var subject = encodeURIComponent('Website enquiry from ' + name + ' — ' + service);
    var body    = encodeURIComponent(
      'Name: ' + name + '\nEmail: ' + email +
      '\nService: ' + service + '\n\nMessage:\n' + message
    );
    window.location.href = 'mailto:samiksha06@internetclouding.in?subject=' + subject + '&body=' + body;
  }

  function resetBtn() {
    var sb = document.getElementById('submitBtn');
    var st = document.getElementById('submitText');
    var sl = document.getElementById('submitLoader');
    if (sb) sb.disabled       = false;
    if (st) st.style.display  = 'inline';
    if (sl) sl.style.display  = 'none';
  }

  function showMsg(el, text, type) {
    if (!el) return;
    el.textContent   = text;
    el.className     = 'form-message ' + type;
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();
