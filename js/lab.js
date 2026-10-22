/* Data Lab: filters, KPIs, charts, insights, CSV export. Independent of the Hire Me form. */
(function () {
  var MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function mLabel(k) { return MN[+k.slice(5) - 1] + ' ' + k.slice(0, 4); }

  /* ---------- core calculations (one place, used by KPIs, charts, insights and CSV) ---------- */
  function filterRows(rows, f) {
    return rows.filter(function (r) {
      var k = r.date.slice(0, 7);
      return k >= f.from && k <= f.to && (f.branch === 'all' || r.branch === f.branch) && (f.cat === 'all' || r.category === f.cat);
    });
  }
  function add(o, k, s, q) { var x = o[k] || (o[k] = { s: 0, o: 0, q: 0 }); x.s += s; x.o += 1; x.q += q; }
  function summarize(rows) {
    var t = { sales: 0, orders: rows.length, aov: 0, m: {}, b: {}, p: {}, c: {} };
    rows.forEach(function (r) {
      t.sales += r.sales; add(t.m, r.date.slice(0, 7), r.sales, r.quantity); add(t.b, r.branch, r.sales, r.quantity);
      add(t.p, r.product, r.sales, r.quantity); add(t.c, r.category, r.sales, r.quantity);
    });
    t.aov = t.orders ? t.sales / t.orders : 0;
    return t;
  }
  function prevRange(months, from, to) {
    var i = months.indexOf(from), j = months.indexOf(to), len = j - i + 1;
    return i - len < 0 ? null : { from: months[i - len], to: months[i - 1] };
  }
  function pct(cur, prev) { return prev > 0 ? (cur - prev) / prev * 100 : null; }
  function top(obj) {
    var best = null; Object.keys(obj).forEach(function (k) { if (!best || obj[k].s > obj[best].s) best = k; }); return best;
  }
  function growth(all, f, months, cur) {
    var pr = prevRange(months, f.from, f.to);
    if (!pr) return { state: 'none' };
    var prevRows = filterRows(all, { from: pr.from, to: pr.to, branch: f.branch, cat: f.cat }), prev = summarize(prevRows);
    if (prev.sales === 0) return { state: 'zero', range: pr };
    return { state: 'ok', pct: pct(cur.sales, prev.sales), range: pr, prev: prev };
  }
  function money(n) { return Math.round(n).toLocaleString('en-US'); }
  function insights(cur, g, f, cur_label) {
    var out = [], C = window.LAB_DATA.currency;
    if (!cur.orders) return out;
    var tb = top(cur.b), tp = top(cur.p), tm = top(cur.m);
    out.push('Highest-performing branch: ' + tb + ', with ' + C + ' ' + money(cur.b[tb].s) + ' (' + (cur.b[tb].s / cur.sales * 100).toFixed(1) + '% of sales).');
    out.push('Best-selling product by sales: ' + tp + ', with ' + C + ' ' + money(cur.p[tp].s) + ' from ' + cur.p[tp].q + ' units.');
    out.push(Object.keys(cur.m).length > 1 ? 'Strongest month: ' + mLabel(tm) + ', with ' + C + ' ' + money(cur.m[tm].s) + '.' : 'Only one month is selected, so there is no month comparison.');
    if (g.state === 'ok') {
      out.push('Sales ' + (g.pct >= 0 ? 'grew ' : 'declined ') + Math.abs(g.pct).toFixed(1) + '% versus the previous period (' + mLabel(g.range.from) + ' to ' + mLabel(g.range.to) + ').');
      var drops = [];
      [['b', 'branch'], ['p', 'product']].forEach(function (a) {
        Object.keys(cur[a[0]]).forEach(function (k) {
          var pv = g.prev[a[0]][k], ch = pv ? pct(cur[a[0]][k].s, pv.s) : null;
          if (ch !== null && ch < 0) drops.push({ k: k, t: a[1], ch: ch });
        });
      });
      drops.sort(function (x, y) { return x.ch - y.ch; });
      out.push(drops.length ? 'Worth a closer look: ' + drops.slice(0, 2).map(function (d) { return d.k + ' (' + d.t + ', ' + d.ch.toFixed(1) + '%)'; }).join(' and ') + ' fell versus the previous period. The data shows what changed, not why.' : 'No branch or product in this view fell versus the previous period.');
    } else {
      out.push(g.state === 'zero' ? 'The previous period has no sales, so growth is undefined.' : 'There is no earlier period of the same length in the data, so growth cannot be calculated.');
    }
    return out;
  }
  function toCSV(rows) {
    var H = ['date', 'branch', 'product', 'category', 'quantity', 'sales'];
    var q = function (v) { v = String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    return '\ufeff' + [H.join(',')].concat(rows.map(function (r) { return H.map(function (h) { return q(r[h]); }).join(','); })).join('\r\n');
  }
  var core = { filterRows: filterRows, summarize: summarize, prevRange: prevRange, growth: growth, insights: insights, toCSV: toCSV, pct: pct };
  if (typeof module !== 'undefined' && module.exports) module.exports = core;
  if (typeof document === 'undefined' || !document.getElementById('lab')) return;
  window.LabCore = core;

  /* ---------- page ---------- */
  var $ = function (s) { return document.getElementById(s); };
  var D = window.LAB_DATA, C = D.currency, all = D.rows, root = document.documentElement;
  var months = []; all.forEach(function (r) { var k = r.date.slice(0, 7); if (months.indexOf(k) < 0) months.push(k); });
  var DEF = { from: months[months.length - 12], to: months[months.length - 1], branch: 'all', cat: 'all' };
  var f = { from: DEF.from, to: DEF.to, branch: 'all', cat: 'all' }, charts = {}, view = [];

  function opts(sel, list, label) { sel.innerHTML = list.map(function (v) { return '<option value="' + v[0] + '">' + (label ? label(v) : v[1]) + '</option>'; }).join(''); }
  opts($('labFrom'), months.map(function (k) { return [k, mLabel(k)]; })); opts($('labTo'), months.map(function (k) { return [k, mLabel(k)]; }));
  opts($('labBranch'), [['all', 'All branches']].concat(D.branches.map(function (b) { return [b, b]; })));
  opts($('labCat'), [['all', 'All categories']].concat(D.categories.map(function (c) { return [c, c]; })));
  function sync() { $('labFrom').value = f.from; $('labTo').value = f.to; $('labBranch').value = f.branch; $('labCat').value = f.cat; }

  function pal() { var s = getComputedStyle(root); return { ink: s.getPropertyValue('--muted').trim() || '#5b5b7a', line: s.getPropertyValue('--line').trim() || '#e4e2f5', c: ['--c1', '--c2', '--c3', '--c4', '--c5'].map(function (v) { return s.getPropertyValue(v).trim(); }) }; }
  function kill() { Object.keys(charts).forEach(function (k) { charts[k].destroy(); }); charts = {}; }
  function chart(id, type, labels, data, o) {
    var P = pal(), horiz = o && o.horiz, ds = { data: data, borderRadius: 6 };
    if (charts[id]) { var ch = charts[id]; ch.data.labels = labels; ch.data.datasets[0].data = data; ch.update(); return; }
    if (type === 'line') { ds.borderColor = P.c[0]; ds.backgroundColor = P.c[0] + '33'; ds.fill = true; ds.tension = .3; ds.pointRadius = 3; }
    else if (type === 'doughnut') { ds.backgroundColor = P.c; ds.borderWidth = 0; }
    else ds.backgroundColor = P.c[horiz ? 1 : 0];
    var sc = type === 'doughnut' ? {} : { x: { ticks: { color: P.ink }, grid: { color: P.line } }, y: { ticks: { color: P.ink }, grid: { color: P.line }, beginAtZero: true } };
    charts[id] = new Chart($(id), { type: type, data: { labels: labels, datasets: [ds] }, options: { indexAxis: horiz ? 'y' : 'x', responsive: true, maintainAspectRatio: false, animation: { duration: 300 }, scales: sc,
      plugins: { legend: { display: type === 'doughnut', position: 'bottom', labels: { color: P.ink } }, tooltip: { callbacks: { label: function (c) { var v = type === 'doughnut' ? c.parsed : (horiz ? c.parsed.x : c.parsed.y); return ' ' + C + ' ' + money(v); } } } } } });
  }
  function sorted(obj, n) { var k = Object.keys(obj).sort(function (a, b) { return obj[b].s - obj[a].s; }); return n ? k.slice(0, n) : k; }

  function render() {
    view = filterRows(all, f);
    var cur = summarize(view), has = view.length > 0, g = growth(all, f, months, cur);
    $('labEmpty').hidden = has; $('labBody').hidden = !has; $('labExport').disabled = !has;
    $('kSales').textContent = has ? C + ' ' + Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(cur.sales) : '-';
    $('kOrders').textContent = has ? cur.orders.toLocaleString('en-US') : '-';
    $('kAov').textContent = has ? C + ' ' + money(cur.aov) : '-';
    var gp = $('kGrowth'), gs = $('kGrowthSub'); gp.className = '';
    if (has && g.state === 'ok') { gp.textContent = (g.pct >= 0 ? '+' : '') + g.pct.toFixed(1) + '%'; gp.className = g.pct >= 0 ? 'up' : 'down'; gs.textContent = 'vs ' + mLabel(g.range.from) + ' to ' + mLabel(g.range.to); }
    else { gp.textContent = 'n/a'; gs.textContent = !has ? '' : g.state === 'zero' ? 'Previous period has no sales' : 'No earlier period to compare'; }
    $('labInsights').innerHTML = insights(cur, g, f).map(function (t) { return '<li>' + t.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</li>'; }).join('');
    if (!has) return;
    if (typeof Chart === 'undefined') { $('labError').hidden = false; return; }
    $('labError').hidden = true;
    var mk = Object.keys(cur.m).sort(), bk = sorted(cur.b), pk = sorted(cur.p, 5), ck = sorted(cur.c);
    chart('cTrend', 'line', mk.map(mLabel), mk.map(function (k) { return cur.m[k].s; }));
    chart('cBranch', 'bar', bk, bk.map(function (k) { return cur.b[k].s; }));
    chart('cProd', 'bar', pk, pk.map(function (k) { return cur.p[k].s; }), { horiz: true });
    chart('cCat', 'doughnut', ck, ck.map(function (k) { return cur.c[k].s; }));
  }

  function onChange(e) {
    f.from = $('labFrom').value; f.to = $('labTo').value; f.branch = $('labBranch').value; f.cat = $('labCat').value;
    if (f.from > f.to) { if (e && e.target.id === 'labTo') f.from = f.to; else f.to = f.from; sync(); }
    render();
  }
  ['labFrom', 'labTo', 'labBranch', 'labCat'].forEach(function (id) { $(id).addEventListener('change', onChange); });
  $('labReset').addEventListener('click', function () { f = { from: DEF.from, to: DEF.to, branch: 'all', cat: 'all' }; sync(); render(); });
  $('labExport').addEventListener('click', function () {
    if (!view.length) return;
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([toCSV(view)], { type: 'text/csv;charset=utf-8' }));
    a.download = 'sample-sales-' + f.from + '_to_' + f.to + '.csv'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });
  function retheme() { kill(); render(); }
  new MutationObserver(retheme).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  if (matchMedia) matchMedia('(prefers-color-scheme:dark)').addEventListener('change', retheme);
  sync(); render();
})();
