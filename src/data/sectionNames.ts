// 5つのセクションの正式名（＝下のタブ名）。2026-10-23 決定。
// タブ・ページの見出し・道案内（breadcrumb）は、すべてここから取る。名前を変えるときはここだけ直す。
// 日本語を基準に、各言語で最も伝わりやすい表現にしている（直訳ではない）。
// 「と」は全言語で「＆」に統一（日本語・中国語は全角、それ以外は前後に空白を入れた半角）。
export type SiteLang = 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko' | 'ja';
export type SectionKey = 'rescue' | 'medical' | 'career' | 'kurashi' | 'apps';

export const SECTION_NAMES: Record<SectionKey, Record<SiteLang, string>> = {
  rescue:  { ja: '日常会話',           zh: '日常会话',       'zh-TW': '日常會話',       en: 'Daily Japanese',       ko: '일본어 회화',      vi: 'Tiếng Nhật giao tiếp' },
  medical: { ja: '病院＆医療',         zh: '就医＆医疗',     'zh-TW': '就醫＆醫療',     en: 'Health & Care',        ko: '병원 & 의료',      vi: 'Khám bệnh' },
  career:  { ja: '仕事＆ビザ',         zh: '工作＆签证',     'zh-TW': '工作＆簽證',     en: 'Work & Visa',          ko: '일 & 비자',        vi: 'Việc làm & visa' },
  kurashi: { ja: '暮らし＆お金の知恵', zh: '生活＆金钱智慧', 'zh-TW': '生活＆金錢智慧', en: 'Smart Living & Money', ko: '생활 & 돈의 지혜', vi: 'Sống & tiêu khéo' },
  apps:    { ja: 'アプリ',             zh: '应用',           'zh-TW': '應用程式',       en: 'Apps',                 ko: '앱',              vi: 'Ứng dụng' }
};

// タブで2行に分かれるときの区切り位置（入りきらないときだけ、この位置で折り返す）
export const TAB_BREAK_AFTER: Partial<Record<SectionKey, Partial<Record<SiteLang, string>>>> = {
  kurashi: { ja: '暮らし＆', zh: '生活＆', 'zh-TW': '生活＆' }
};

export function sectionName(key: SectionKey, lang: string): string {
  return SECTION_NAMES[key][lang as SiteLang] || SECTION_NAMES[key].en;
}
