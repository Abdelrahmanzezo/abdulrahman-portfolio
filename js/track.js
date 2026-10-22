/* Privacy-friendly usage events (Vercel Web Analytics, no cookies). Read-only hooks:
   they only listen, they never change how the Hire Me form or any other feature works. */
(function () {
  function track(name, data) {
    try { if (window.va) window.va('event', data ? { name: name, data: data } : { name: name }); } catch (e) {}
  }
  var $ = function (s) { return document.querySelector(s); };
  var pg = $('#pg');
  if (pg) pg.addEventListener('click', function (e) {
    var c = e.target.closest('.card'); if (!c) return;
    var h = c.querySelector('h3,h2');
    track('project_open', { project: h ? h.textContent.trim().slice(0, 60) : 'unknown' });
  });
  var hire = $('#hire');
  if (hire && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { track('hire_section_viewed'); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(hire);
  }
  var f = $('#hf');
  if (f) f.addEventListener('submit', function () { track('hire_form_submit'); });
  document.addEventListener('click', function (e) {
    if (e.target.closest('a[download]')) track('cv_download');
  });
  var lab = $('#lab'), used = false;
  if (lab) lab.addEventListener('change', function () { if (!used) { used = true; track('data_lab_used'); } });
})();
