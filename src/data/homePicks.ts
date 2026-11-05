// トップページ「人気・おすすめの記事」のおすすめの並び（2026-11-05）。上から順に入れる。
// 選ぶ基準（どちらかを満たす記事）：
//   ① 収益につながる：広告のボタンがある、または同行サービスへの入口になっている
//   ② 重要性が高い：読まないと損をする・困る、しかも他のサイトに少ない情報
// 入れ替えるときは、この並びを書き換えるだけ（path は言語を除いた部分）。月に1回か、振り返りのときに見直す。
export const HOME_PICKS: { path: string; reason: string }[] = [
  { path: '/kurashi/remit-family-tax/', reason: '② 扶養で税金が減る・2026年の永住の新基準（独自性が高い）' },
  { path: '/medical/kansai-guide/', reason: '① 同行サービスへの入口' },
  { path: '/kurashi/first-credit-card/', reason: '① 広告（クレジットカード）' },
  { path: '/kurashi/remit-first-time/', reason: '① 広告（Wise）・計算機' },
  { path: '/medical/calling-ambulance/', reason: '② 命に関わる' }
];
// 人気の枠の数（最大）と、全体の数。人気の記事が少ないときは、おすすめで埋める
export const POPULAR_MAX = 3;
export const TOTAL = 5;
