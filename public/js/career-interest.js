/* career-interest.js（2026-10-27 改）
   仕事＆ビザの記事の「興味の登録」フォーム → Web3Forms → info@kurawise.com → Gmail。
   以前は Supabase に保存していたが、無料プランは使わないと止まるため、メールで直接届ける形に変えた。
   鍵は /js/web3forms-key.js（このファイルより先に読み込む）。 */
(function () {
  'use strict';
  var ENDPOINT = 'https://api.web3forms.com/submit';
  function key() { return window.KW_WEB3FORMS_KEY || ''; }
  function isConfigured() { return !!key(); }
  function submit(p) {
    if (!isConfigured()) return Promise.reject(new Error('not configured'));
    var contact = (p.contact || '').trim();
    var body = {
      access_key: key(),
      subject: '【Kurawise】仕事＆ビザ：興味の登録（' + (p.source_slug || '-') + '）',
      from_name: 'Kurawise 興味の登録',
      '知りたいこと': p.topic || '',
      '連絡先': contact,
      '記事': p.source_slug || '',
      '送信したページ': p.page_path || '',
      '送信日時': p.submitted_at || new Date().toISOString(),
      botcheck: p.botcheck ? true : ''
    };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) body.replyto = contact;
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (res) { return res.json().then(function (j) {
      if (!res.ok || !j.success) throw new Error('send failed: ' + res.status);
      return true;
    }); });
  }
  window.ljCareerInterest = { isConfigured: isConfigured, submit: submit };
})();
