/* SAMPLE / DEMO DATA. Fictional branches, products and numbers. Not real company data.
   Generated with a fixed seed so the numbers are the same on every visit. */
(function () {
  var BRANCHES = ['Cairo', 'Alexandria', 'Giza', 'Riyadh'];
  var CATS = {
    'Bedroom': [['Queen Bed Frame', 9500], ['Wardrobe 3-Door', 12800], ['Memory Foam Mattress', 7200]],
    'Living Room': [['3-Seater Sofa', 15500], ['Coffee Table', 3200], ['TV Unit', 5400]],
    'Office': [['Ergonomic Chair', 4800], ['Standing Desk', 8900], ['Bookshelf', 3600]],
    'Kitchen': [['Dining Table Set', 11200], ['Bar Stool', 1700], ['Storage Cabinet', 4300]]
  };
  var seed = 20250101;
  function rnd() { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }
  function pick(list, w) {
    var t = 0, i; for (i = 0; i < w.length; i++) t += w[i];
    var r = rnd() * t; for (i = 0; i < w.length; i++) { r -= w[i]; if (r <= 0) return list[i]; }
    return list[list.length - 1];
  }
  var products = [];
  Object.keys(CATS).forEach(function (c) { CATS[c].forEach(function (p) { products.push({ n: p[0], c: c, price: p[1], w: 1 / Math.sqrt(p[1]) }); }); });
  var rows = [];
  for (var m = 0; m < 24; m++) {
    var y = 2024 + Math.floor(m / 12), mon = m % 12;
    var n = Math.round((52 + m * 1.1) * (1 + 0.18 * Math.sin((mon - 8) / 12 * 2 * Math.PI)));
    var dim = new Date(y, mon + 1, 0).getDate();
    var bw = [1.3, 0.9, 1.1 - 0.012 * m, 0.45 + 0.025 * m];
    for (var i = 0; i < n; i++) {
      var p = pick(products, products.map(function (x) { return x.w; }));
      var q = p.price < 5000 ? 1 + Math.floor(rnd() * 3) : 1 + Math.floor(rnd() * 2);
      var d = 1 + Math.floor(rnd() * dim);
      rows.push({
        date: y + '-' + ('0' + (mon + 1)).slice(-2) + '-' + ('0' + d).slice(-2),
        branch: pick(BRANCHES, bw), product: p.n, category: p.c, quantity: q,
        sales: Math.round(p.price * q * (0.92 + rnd() * 0.16))
      });
    }
  }
  rows.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  window.LAB_DATA = { rows: rows, branches: BRANCHES, categories: Object.keys(CATS), currency: 'EGP' };
})();
