// 日常会話（rescue）のページの、検索結果用のタイトルと説明（0-S、2026-10-23）。
// 三要素問い ②「困ったその瞬間に、何をしてくれるのか」に合わせ、
// 検索結果を見た時点で「日本人が実際に言う文」と訳が見えるようにする。
// タイトルは、各言語の人が実際に検索するときの言い方に合わせる：
//   简体「看病日语」／繁體（台湾）「日文」／English「Japanese for …」／한국어「… 일본어」／Tiếng Việt「Tiếng Nhật …」
// 一つずつ手で書かず、各ページの実際の会話の文から、言語ごとの型で作る。

type Lang = 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko' | 'ja';

// 検索用の場面名（場面の表示名のままだと不自然になるものだけ置き換える）
const SEO_SCENE_NAME: Partial<Record<string, Partial<Record<Lang, string>>>> = {
  s00: { zh: '日常常用', 'zh-TW': '日常常用', en: 'Everyday Situations', ko: '기본', vi: 'cơ bản', ja: 'よく使う' },
  s16: { zh: '电话', ja: '電話' },
  s19: { 'zh-TW': '飯店' }
};

function sceneName(scene: any, lang: Lang): string {
  const o = SEO_SCENE_NAME[scene.id]?.[lang];
  if (o) return o;
  return scene[`title_${lang}`] || scene.title_zh || scene.title || '';
}

function subName(sub: any, lang: Lang): string {
  return sub[`title_${lang}`] || sub.title || '';
}

function translation(item: any, lang: Lang): string {
  if (lang === 'ja') return '';
  return item[lang] || '';
}

// 説明に入れる例文：その人（user）の文を優先し、文字数の上限まで入れる
function examples(items: any[], lang: Lang, limit: number): string[] {
  const ordered = [...items.filter((i) => i.role === 'user'), ...items.filter((i) => i.role !== 'user')];
  const out: string[] = [];
  let used = 0;
  for (const it of ordered) {
    const jp = String(it.jp || '').replace(/[。．.]$/, '');
    // 訳の最後にある補足（例：「（出示手机图片）」）は、検索結果では省く
    const tr = translation(it, lang).replace(/\s*[（(][^（）()]*[）)]\s*$/, '').replace(/[。．.]$/, '');
    if (!jp) continue;
    const piece = lang === 'ja' ? `「${jp}」`
      : (lang === 'en' || lang === 'vi') ? `"${jp}" (${tr})`
      : lang === 'ko' ? `「${jp}」(${tr})`
      : `「${jp}」（${tr}）`;
    if (out.length > 0 && used + piece.length > limit) break;
    out.push(piece);
    used += piece.length;
    if (out.length >= 3) break;
  }
  return out;
}

export function rescueSubSeo(scene: any, sub: any, items: any[], lang: Lang): { title: string; description: string } {
  const sc = sceneName(scene, lang);
  const sb = subName(sub, lang);
  const n = items.length;
  const isLatin = lang === 'en' || lang === 'vi';
  const ex = examples(items, lang, isLatin ? 70 : lang === 'ko' ? 55 : 60);
  const exText = ex.join(lang === 'ja' ? '' : (isLatin || lang === 'ko') ? ', ' : '、');
  const lowerVi = sc.charAt(0).toLowerCase() + sc.slice(1);
  // 英語・ベトナム語は長くなりやすいので、60文字を超えるときは件数の部分を省く
  const enT = `Japanese for ${sc}: ${sb} (${n} Real Phrases) | Kurawise`;
  const viT = `Tiếng Nhật ${lowerVi}: ${sb} – ${n} câu thực tế | Kurawise`;
  const T: Record<Lang, string> = {
    zh: `${sc}日语｜${sb}：日本人真实会说的${n}句｜Kurawise`,
    'zh-TW': `${sc}日文｜${sb}：日本人真的會說的${n}句｜Kurawise`,
    en: enT.length <= 60 ? enT : (`Japanese for ${sc}: ${sb} | Kurawise`.length <= 60 ? `Japanese for ${sc}: ${sb} | Kurawise` : `${sb} in Japanese | Kurawise`),
    ko: `${sc} 일본어｜${sb}: 실제로 쓰는 표현 ${n}개 | Kurawise`,
    vi: viT.length <= 60 ? viT : (`Tiếng Nhật ${lowerVi}: ${sb} | Kurawise`.length <= 60 ? `Tiếng Nhật ${lowerVi}: ${sb} | Kurawise` : `${sb} bằng tiếng Nhật | Kurawise`),
    ja: `${sc}の日本語｜${sb}：実際に使うフレーズ${n}選｜Kurawise`
  };
  const D: Record<Lang, string> = {
    zh: `日本人实际会说：${exText}……共${n}句，附读音和音频，可跟读练习。真人核实，免费。`,
    'zh-TW': `日本人實際會說：${exText}……共${n}句，附讀音和音檔，可跟讀練習。真人核實，免費。`,
    en: `What Japanese people actually say: ${exText}… ${n} phrases with audio for practice. Free.`,
    ko: `일본인이 실제로 하는 말: ${exText}… 모두 ${n}개, 음성으로 따라 말하기 연습. 무료.`,
    vi: `Người Nhật thực sự nói: ${exText}… ${n} câu có âm thanh để luyện nói. Miễn phí.`,
    ja: `${exText}など、${sc}の場面で実際に使う日本語${n}文を、読み方と音声つきで練習できます。無料。`
  };
  return { title: T[lang], description: D[lang] };
}

export function rescueSceneSeo(scene: any, items: any[], lang: Lang): { title: string; description: string } {
  const sc = sceneName(scene, lang);
  const n = items.length;
  const subs: string[] = (scene.subcategories || []).map((s: any) => subName(s, lang)).filter(Boolean);
  const isLatin = lang === 'en' || lang === 'vi';
  const subText = subs.slice(0, isLatin ? 3 : 6).join(isLatin || lang === 'ko' ? ', ' : '、');
  const lowerVi = sc.charAt(0).toLowerCase() + sc.slice(1);
  const T: Record<Lang, string> = {
    zh: `${sc}日语怎么说？${n}句日本人真实会说的对话｜Kurawise`,
    'zh-TW': `${sc}的日文怎麼說？${n}句日本人真的會說的對話｜Kurawise`,
    en: `Japanese for ${sc}: ${n} Real Phrases | Kurawise`,
    ko: `${sc} 일본어: 일본인이 실제로 쓰는 표현 ${n}개 | Kurawise`,
    vi: `Tiếng Nhật ${lowerVi}: ${n} câu thực tế | Kurawise`,
    ja: `${sc}の日本語：実際に使うフレーズ${n}選｜Kurawise`
  };
  const D: Record<Lang, string> = {
    zh: `${subText}……按场景整理的${n}句日语，附读音和音频，可跟读练习。真人核实，免费。`,
    'zh-TW': `${subText}……依情境整理的${n}句日文，附讀音和音檔，可跟讀練習。真人核實，免費。`,
    en: `${subText}… ${n} real Japanese phrases by situation, with audio for practice. Human-checked, free.`,
    ko: `${subText}… 상황별로 정리한 일본어 ${n}개, 읽는 법과 음성으로 따라 말하기 연습. 사람이 직접 확인, 무료.`,
    vi: `${subText}… ${n} câu tiếng Nhật theo tình huống, có âm thanh để luyện nói. Miễn phí.`,
    ja: `${subText}など、場面ごとにまとめた日本語${n}文を、読み方と音声つきで練習できます。無料。`
  };
  return { title: T[lang], description: D[lang] };
}
