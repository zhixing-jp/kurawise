// 人気の記事（2026-11-05）：直近30日の閲覧数の合計が多い記事を返す。トップページ（HomeHub）が使う。
// 一定の回数（MIN）に届いた記事だけを返す。届いた記事がなければ空の一覧を返し、トップはおすすめだけを表示する。
const MIN = 10;
const LANG = /^(zh-TW|zh|en|vi|ko|ja)$/;

export async function onRequestGet({ request, env }) {
  const lang = new URL(request.url).searchParams.get('lang') || '';
  let items = [];
  try {
    if (env.DB && LANG.test(lang)) {
      const r = await env.DB.prepare(
        "SELECT path, SUM(n) AS total FROM views WHERE day >= date('now', '+9 hours', '-30 days') AND path LIKE ?1 GROUP BY path HAVING total >= ?2 ORDER BY total DESC LIMIT 20"
      ).bind(`/${lang}/%`, MIN).all();
      items = (r.results || []).map((x) => x.path);
    }
  } catch (e) { items = []; }
  return new Response(JSON.stringify({ items }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=600' }
  });
}
