/* consult-form.js（2026-10-27 改）
   同行サービス（医療コーディネート）の相談フォーム → Web3Forms → info@kurawise.com → Gmail。
   以前は Supabase に保存していたが、無料プランは使わないと止まるため、メールで直接届ける形に変えた。
   鍵は /js/web3forms-key.js（このファイルより先に読み込む）。 */
(function () {
  'use strict';
  var ENDPOINT = 'https://api.web3forms.com/submit';
  var URGENCY = { urgent: '急ぎ', soon: '近いうち', planning: '予定・まだ先' };
  function key() { return window.KW_WEB3FORMS_KEY || ''; }
  function isConfigured() { return !!key(); }
  function submit(p) {
    if (!isConfigured()) return Promise.reject(new Error('not configured'));
    var contact = (p.contact || '').trim();
    var body = {
      access_key: key(),
      subject: '【Kurawise】同行サービスの相談（' + (URGENCY[p.urgency] || p.urgency || '-') + '・' + (p.lang || '-') + '）',
      from_name: 'Kurawise 相談フォーム',
      'お名前': p.name || '',
      '連絡先': contact,
      '急ぎ具合': (URGENCY[p.urgency] || '') + '（' + (p.urgency || '') + '）',
      'ご相談の内容': p.message || '',
      'ページの言語': p.lang || '',
      '同意': p.consent === 'yes' ? 'あり' : 'なし',
      '送信したページ': p.page_path || '',
      '来た元': p.source_page || '',
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
  window.ljConsult = { isConfigured: isConfigured, submit: submit };
})();
