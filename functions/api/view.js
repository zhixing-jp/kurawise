// 記事の閲覧数を数える（2026-11-05）。Cloudflare Pages Functions ＋ D1（変数名 DB、データベース kurawise-views）。
// 保存するのは「ページのアドレス・日付・回数」だけ。IP アドレス・Cookie・個人を特定する情報は保存しない。
// 記事のページで読み込まれるたびに1増える。ロボットの巡回は数えない。運営者の閲覧は、ページ側（/js/views.js）で送らない。
const ARTICLE = /^\/(zh-TW|zh|en|vi|ko|ja)\/(kurashi|medical|career|rescue)\/[a-z0-9-]+\/([a-z0-9-]+\/)?$/;
const NOT_ARTICLE = /^\/[^/]+\/(medical\/service|career\/(for|c|interest))\//;
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit|embedly|curl|wget|python|monitor/i;
const SCHEMA = 'CREATE TABLE IF NOT EXISTS views (path TEXT NOT NULL, day TEXT NOT NULL, n INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (path, day))';

export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) return new Response(null, { status: 204 });
    if (BOT.test(request.headers.get('user-agent') || '')) return new Response(null, { status: 204 });
    const body = await request.json().catch(() => ({}));
    const path = String(body.path || '');
    if (path.length > 120 || !ARTICLE.test(path) || NOT_ARTICLE.test(path)) return new Response(null, { status: 204 });
    const day = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); // 日本時間の日付
    const sql = 'INSERT INTO views (path, day, n) VALUES (?1, ?2, 1) ON CONFLICT(path, day) DO UPDATE SET n = n + 1';
    try {
      await env.DB.prepare(sql).bind(path, day).run();
    } catch (e) {
      if (!/no such table/i.test(String(e))) throw e;
      await env.DB.prepare(SCHEMA).run();   // 最初の1回だけ、表を作る
      await env.DB.prepare(sql).bind(path, day).run();
    }
  } catch (e) { /* 数え損ねても、ページの表示には影響させない */ }
  return new Response(null, { status: 204 });
}
