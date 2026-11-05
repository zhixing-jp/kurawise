/* 記事の閲覧数を数える（2026-11-05）。記事のページで、ページのアドレスだけを /api/view に送る。
   運営者の閲覧を数えないようにするには、どのページでもアドレスの最後に ?kw_me=1 を付けて1回開く（このブラウザだけ有効）。
   元に戻すときは ?kw_me=0。個人の情報は送らない。 */
(function () {
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('kw_me') === '1') localStorage.setItem('kw_me', '1');
    if (q.get('kw_me') === '0') localStorage.removeItem('kw_me');
    if (localStorage.getItem('kw_me') === '1') return;
  } catch (e) { /* 保存できない環境でも数える */ }
  if (navigator.webdriver) return;
  if (/bot|crawl|spider|headless|lighthouse/i.test(navigator.userAgent)) return;
  var path = location.pathname;
  if (!/^\/(zh-TW|zh|en|vi|ko|ja)\/(kurashi|medical|career|rescue)\/[a-z0-9-]+\/([a-z0-9-]+\/)?$/.test(path)) return;
  if (/^\/[^/]+\/(medical\/service|career\/(for|c|interest))\//.test(path)) return;
  var data = JSON.stringify({ path: path });
  try {
    if (navigator.sendBeacon && navigator.sendBeacon('/api/view', new Blob([data], { type: 'application/json' }))) return;
  } catch (e) {}
  try { fetch('/api/view', { method: 'POST', headers: { 'content-type': 'application/json' }, body: data, keepalive: true }); } catch (e) {}
})();
