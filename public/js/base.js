/* ══════════════════════════════
   base.js — 全局共用函数
   Kurawise（Astro SSG）
   职责：语言/工具函数/语音初始化
   不包含：任何HTML渲染/模块加载
══════════════════════════════ */

/* ── i18n ── */
let currentLang = 'zh';
let LOCALE = {};

function detectLang() {
  // そのページの言語が決まっている場合（単一URLのページ以外）は、それを最優先にする
  const pageLang = document.documentElement.getAttribute('data-page-lang');
  if (pageLang) return pageLang;
  const path = window.location.pathname;
  if (path.startsWith('/en/'))    return 'en';
  if (path.startsWith('/zh-TW/')) return 'zh-TW';
  if (path.startsWith('/vi/'))    return 'vi';
  if (path.startsWith('/ko/'))    return 'ko';
  if (path.startsWith('/ja/'))    return 'ja';
  const saved = localStorage.getItem('lj_lang');
  if (saved) return saved;
  const sys = (navigator.language || 'en').toLowerCase();
  if (sys.startsWith('zh-tw') || sys.startsWith('zh-hk')) return 'zh-TW';
  if (sys.startsWith('zh')) return 'zh';
  if (sys.startsWith('vi')) return 'vi';
  if (sys.startsWith('ko')) return 'ko';
  if (sys.startsWith('ja')) return 'ja';
  return 'en';
}

async function loadLocale(lang) {
  try {
    LOCALE = await fetch(`/locales/${lang}.json`).then(r => r.json());
    currentLang = lang;
    // 页面自己指定了语言（如 /kuraphoto/ 各语言页）时，不覆盖 <html lang>
    if (!document.documentElement.hasAttribute('data-lang-fixed')) {
      document.documentElement.lang = lang;
    }
  } catch(e) {
    LOCALE = await fetch('/locales/zh.json').then(r => r.json());
    currentLang = 'zh';
  }
}

function t(key) {
  return LOCALE[key] || key;
}

function switchLang(lang) {
  localStorage.setItem('lj_lang', lang);
  // 🌐ボタンで自分で選んだ言語（言語の案内を出すかどうかの判断に使う）
  try { localStorage.setItem('lj_lang_chosen', lang); } catch (e) {}
  const langPaths = {
    'zh': '/', 'zh-TW': '/zh-TW/',
    'en': '/en/', 'vi': '/vi/', 'ko': '/ko/', 'ja': '/ja/'
  };
  const path = window.location.pathname;
  const subMatch = path.match(/\/rescue\/(s\d+)\/(sub\d+)\//);
  const sceneMatch = path.match(/\/rescue\/(s\d+)\//);
  // /medical/ 整个家族（就医指南首页、8个分类子页面、症状指认词库列表页与详情页）
  // 都是构建时按语言各自生成好的独立静态页面（中文版无前缀，其他语言版有 /lang/ 前缀），
  // 不是客户端动态换语言的页面，所以切换语言要跳转到"同一子路径对应语言版本"，
  // 而不是走 loadLocale() 原地刷新那一套（那一套只适用于 about 这种单一路径页面）。
  const medicalMatch = path.match(/^(?:\/(?:zh-TW|en|vi|ko|ja))?\/medical(\/.*)?\/?$/);
  // career 同 medical，[lang]/career/* 目录已按语言各自生成静态页面，
  // 切换语言时跳转到"同一子路径对应语言版本"，而不是原地刷新。
  const careerMatch = path.match(/^(?:\/(?:zh-TW|en|vi|ko|ja))?\/career(\/.*)?\/?$/);
  // about 是单一路径（无语言子目录），页面内容按 currentLang 在客户端动态显示，
  // 不需要跳转页面——只需重新 loadLocale 并重新渲染，原地刷新即可
  const singlePathMatch = path.match(/^\/(about|kurashi|apps|ad-policy|privacy)\/?$/);
  if (subMatch) {
    const prefix = langPaths[lang] === '/' ? '' : langPaths[lang].slice(0, -1);
    window.location.href = `${prefix}/rescue/${subMatch[1]}/${subMatch[2]}/`;
  } else if (sceneMatch) {
    const prefix = langPaths[lang] === '/' ? '' : langPaths[lang].slice(0, -1);
    window.location.href = `${prefix}/rescue/${sceneMatch[1]}/`;
  } else if (medicalMatch) {
    const prefix = langPaths[lang] === '/' ? '' : langPaths[lang].slice(0, -1);
    const subPath = medicalMatch[1] || '/';
    window.location.href = `${prefix}/medical${subPath}`;
  } else if (careerMatch) {
    const prefix = langPaths[lang] === '/' ? '' : langPaths[lang].slice(0, -1);
    const subPath = careerMatch[1] || '/';
    window.location.href = `${prefix}/career${subPath}`;
  } else if (singlePathMatch) {
    loadLocale(lang).then(() => {
      document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
    });
  } else {
    window.location.href = langPaths[lang] || '/';
  }
}

/* ── 言語の案内 ──
   ブラウザ（システム）の言語とページの言語が違うとき、その言語の版への案内を1行出す。
   自動では移動しない（Googleのクローラーや共有リンクのため）。
   次の場合は出さない：🌐ボタンで今のページの言語を自分で選んでいる／案内を✕で閉じたことがある */
function systemSiteLang() {
  const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
  for (const raw of list) {
    const l = String(raw).toLowerCase();
    if (l.startsWith('zh-tw') || l.startsWith('zh-hk') || l.startsWith('zh-mo') || l.startsWith('zh-hant')) return 'zh-TW';
    if (l.startsWith('zh')) return 'zh';
    if (l.startsWith('ja')) return 'ja';
    if (l.startsWith('ko')) return 'ko';
    if (l.startsWith('vi')) return 'vi';
    if (l.startsWith('en')) return 'en';
  }
  return 'en';
}
function initLangSuggest(pageLang) {
  const box = document.getElementById('langSuggest');
  if (!box) return;
  const sys = systemSiteLang();
  if (!sys || sys === pageLang) return;
  let chosen = null, dismissed = null;
  try { chosen = localStorage.getItem('lj_lang_chosen'); dismissed = localStorage.getItem('lj_lang_suggest_dismissed'); } catch (e) {}
  if (chosen === pageLang) return;
  if (dismissed === sys) return;
  const texts = {
    zh:      ['本页面也有简体中文版。', '查看中文 →'],
    'zh-TW': ['本頁面也有繁體中文版。', '查看繁體中文 →'],
    en:      ['This page is also available in English.', 'View in English →'],
    ja:      ['このページは日本語でも読めます。', '日本語で見る →'],
    ko:      ['이 페이지는 한국어로도 볼 수 있습니다.', '한국어로 보기 →'],
    vi:      ['Trang này có bản tiếng Việt.', 'Xem tiếng Việt →']
  };
  const t = texts[sys];
  if (!t) return;
  const stripped = window.location.pathname.replace(/^\/(en|zh-TW|vi|ko|ja)(?=\/|$)/, '') || '/';
  const target = (sys === 'zh' ? '' : '/' + sys) + stripped + window.location.search + window.location.hash;
  box.querySelector('.lang-suggest-text').textContent = t[0];
  const link = box.querySelector('.lang-suggest-link');
  link.textContent = t[1];
  link.setAttribute('href', target);
  link.setAttribute('lang', sys);
  link.addEventListener('click', function () {
    try { localStorage.setItem('lj_lang_chosen', sys); } catch (e) {}
    if (typeof window.gtag === 'function') window.gtag('event', 'lang_suggest_click', { from_lang: pageLang, to_lang: sys, page_path: window.location.pathname });
  });
  box.querySelector('.lang-suggest-close').addEventListener('click', function () {
    box.hidden = true;
    try { localStorage.setItem('lj_lang_suggest_dismissed', sys); } catch (e) {}
  });
  box.hidden = false;
}

/* ── HTML转义 ── */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c])
  );
}

/* ── Toast ── */
let _tt = null;
function showToast(msg, ms = 1800) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(_tt);
  _tt = setTimeout(() => el.classList.remove('on'), ms);
}

/* ── 语音（全局共享，rescue-ui.js直接使用）── */
var jaVoice = null;
var zhVoice = null;

function initVoices() {
  function find() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return;
    for (const n of ['Kyoko', 'Otoya', 'O-ren', 'Hattori']) {
      jaVoice = voices.find(x => x.name.includes(n) && x.lang.startsWith('ja'));
      if (jaVoice) break;
    }
    if (!jaVoice) jaVoice = voices.find(x => x.lang.startsWith('ja')) || null;
    for (const n of ['Ting-Ting', 'Sin-ji', 'Mei-Jia', 'Tian-Tian']) {
      zhVoice = voices.find(x => x.name.includes(n));
      if (zhVoice) break;
    }
    if (!zhVoice) zhVoice = voices.find(x => x.lang.startsWith('zh')) || null;
  }
  find();
  window.speechSynthesis.onvoiceschanged = find;
}

/* ── 页面加载时初始化 ── */
document.addEventListener('DOMContentLoaded', async () => {
  const lang = detectLang();
  await loadLocale(lang);
  const fixedLang = document.documentElement.getAttribute('data-page-lang');
  if (fixedLang) {
    // 言語が決まっているページを見たら、その言語を覚えておく。
    // 次に単一URLのページ（/kurashi/・/apps/・/about/）へ移ったとき、同じ言語で表示するため
    try { localStorage.setItem('lj_lang', fixedLang); } catch (e) {}
    initLangSuggest(fixedLang);
  } else {
    // 単一URLのページ：言語の読み込みが終わってから、ページの文章とタブを、その言語で描き直す
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: currentLang } }));
  }
  initVoices();

  // 回到顶部按钮
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backTop');
    if (btn) btn.classList.toggle('on', window.scrollY > 300);
  });

  // 页面隐藏时暂停朗读
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) window.speechSynthesis.pause();
  });
});