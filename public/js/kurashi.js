/* 暮らし＆お金の知恵の記事の動き（2026-10-26）：30秒診断・年間ポイントの計算・ボタンのクリックの計測。
   どれも画面の中だけで動き、入力した内容は保存・送信しない（クリックの計測は「どのボタンが押されたか」だけ）。 */
(function () {
  function fmt(n) { return Math.round(n).toLocaleString('ja-JP'); }
  // 30秒診断
  document.querySelectorAll('[data-ob-quiz]').forEach(function (box) {
    var data = JSON.parse(box.getAttribute('data-quiz'));
    function val(n) { var el = box.querySelector('input[name="' + n + '"]:checked'); return el ? el.value : null; }
    function decide() {
      var a = val('q1'), u = val('q2'), tr = val('q3');
      if (!a || !u || !tr) return;
      var id, why;
      if (u === 'net') { id = 'rakuten-card'; why = data.why.net; }
      else if (u === 'conv') id = 'smbc-nl';
      else if (u === 'paypay') id = 'paypay-card';
      else if (u === 'aeon') id = 'aeon-select';
      else id = (a === 'y') ? 'jcb-w' : 'rakuten-card';
      if (u === 'none' && tr === 'y' && a === 'y') id = 'jcb-w';
      var r = box.querySelector('[data-result]');
      r.querySelector('[data-name]').textContent = data.names[id];
      r.querySelector('[data-why]').textContent = why || data.why[id];
      var btn = r.querySelector('[data-btn]');
      btn.setAttribute('href', data.hrefs[id]); btn.setAttribute('data-ga-offer', id);
      r.hidden = false;
    }
    box.addEventListener('change', decide);
  });
  // 年間ポイントの計算
  document.querySelectorAll('[data-ob-calc]').forEach(function (box) {
    var rates = JSON.parse(box.getAttribute('data-rates'));
    var input = box.querySelector('[data-monthly]'), bars = box.querySelector('[data-bars]');
    function draw() {
      var m = Math.max(0, Number(input.value) || 0);
      var vals = rates.map(function (r) { return { name: r.name, v: m * 12 * r.rate / 100 }; });
      var max = Math.max.apply(null, vals.map(function (x) { return x.v; })) || 1;
      bars.innerHTML = vals.map(function (x) {
        return '<div class="cb-bar-row"><span class="cb-bar-label">' + x.name + '</span><span class="cb-bar-track"><span class="cb-bar-fill" style="width:' + Math.max(4, Math.round(x.v / max * 100)) + '%"></span></span><span class="cb-bar-value">' + fmt(x.v) + '円</span></div>';
      }).join('');
    }
    input.addEventListener('input', draw); draw();
  });
  // ボタンのクリックの計測
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-ga-offer]');
    if (!a || typeof window.gtag !== 'function') return;
    window.gtag('event', 'kurashi_offer_click', {
      offer_id: a.getAttribute('data-ga-offer'), place: a.getAttribute('data-ga-place') || '',
      page_lang: document.documentElement.getAttribute('data-page-lang') || '', page_path: location.pathname
    });
  });
})();
