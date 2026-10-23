// 仕事＆ビザの「探し方」の定義（2026-10-23）。まとめページ・目的別ページ・カテゴリのページで共通に使う。
// 記事を足すときは public/data/career/index.json に1行足し、group（visa / prep / interview / decide / onboard）、
// situations（下の目的のキー、複数可）、featured（まとめページに代表として出すか）を付ける。
import careerIndex from '../../public/data/career/index.json';
import { VR_COPY, type VRLang } from './visaReminderCopy';

export type L = 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko' | 'ja';
export const LANGS: L[] = ['zh', 'zh-TW', 'en', 'vi', 'ko', 'ja'];
export const pick = (m: Record<string, string>, lang: string) => m[lang] || m.en;
export const prefix = (lang: string) => (lang === 'zh' ? '' : `/${lang}`);

export const SITUATIONS: { key: string; icon: string; label: Record<L, string> }[] = [
  { key: 'renew', icon: '📅', label: { ja: '更新が近い', zh: '快要更新签证', 'zh-TW': '快要更新簽證', en: 'Renewing soon', vi: 'Sắp gia hạn', ko: '곧 갱신' } },
  { key: 'change', icon: '💼', label: { ja: '転職・退職する', zh: '换工作・辞职', 'zh-TW': '換工作・離職', en: 'Changing or leaving a job', vi: 'Chuyển việc・nghỉ việc', ko: '이직·퇴직' } },
  { key: 'pr', icon: '🏠', label: { ja: '永住を考えている', zh: '考虑申请永住', 'zh-TW': '考慮申請永住', en: 'Thinking about permanent residence', vi: 'Muốn xin vĩnh trú', ko: '영주를 생각 중' } },
  { key: 'family', icon: '👨‍👩‍👧', label: { ja: '家族の手続き', zh: '家人的手续', 'zh-TW': '家人的手續', en: 'Family procedures', vi: 'Thủ tục cho gia đình', ko: '가족 수속' } },
  { key: 'jobhunt', icon: '🔍', label: { ja: '仕事を探している', zh: '正在找工作', 'zh-TW': '正在找工作', en: 'Looking for a job', vi: 'Đang tìm việc', ko: '일자리를 찾는 중' } },
  { key: 'newjob', icon: '🌱', label: { ja: '働き始めた', zh: '刚开始工作', 'zh-TW': '剛開始工作', en: 'Just started working', vi: 'Mới bắt đầu đi làm', ko: '막 일을 시작함' } }
];

// 道具（使うもの）。situations で目的別ページにも出る
export function tools(lang: string) {
  const vr = VR_COPY[lang as VRLang] || VR_COPY.en;
  return [{ key: 'visa-reminder', icon: '📅', title: vr.title, sub: vr.cardSub, href: `${prefix(lang)}/career/visa-reminder/`, situations: ['renew', 'pr', 'change'] }];
}

export const CATS: { key: string; groups: string[]; label: Record<L, string> }[] = [
  { key: 'visa', groups: ['visa'], label: { ja: 'ビザ・在留の手続き', zh: '签证・在留手续', 'zh-TW': '簽證・在留手續', en: 'Visa & Residence', vi: 'Visa & lưu trú', ko: '비자·체류 수속' } },
  { key: 'job', groups: ['prep', 'interview', 'decide', 'onboard'], label: { ja: '就職・転職', zh: '求职・转职', 'zh-TW': '求職・轉職', en: 'Job Hunting & Career', vi: 'Xin việc & chuyển việc', ko: '취업·이직' } }
];

export const SUB: Record<string, Record<L, string>> = {
  prep: { zh: '简历准备', 'zh-TW': '履歷準備', en: 'Resume Prep', vi: 'Chuẩn bị hồ sơ', ko: '이력서 준비', ja: '履歴書準備' },
  interview: { zh: '面试应对', 'zh-TW': '面試應對', en: 'Interviews', vi: 'Phỏng vấn', ko: '면접 대응', ja: '面接対応' },
  decide: { zh: '职位判断', 'zh-TW': '職位判斷', en: 'Evaluating Offers', vi: 'Đánh giá công việc', ko: '직무 판단', ja: '職務判断' },
  onboard: { zh: '入职适应', 'zh-TW': '到職適應', en: 'Onboarding', vi: 'Hòa nhập công việc', ko: '입사 적응', ja: '入社適応' }
};

export const UI: Record<string, Record<L, string>> = {
  find: { ja: '目的から探す', zh: '按情况找', 'zh-TW': '依情況找', en: 'Find by situation', vi: 'Tìm theo tình huống', ko: '상황별로 찾기' },
  tools: { ja: '便利な道具', zh: '实用工具', 'zh-TW': '實用工具', en: 'Tools', vi: 'Công cụ', ko: '도구' },
  latest: { ja: '新着・更新', zh: '最新・更新', 'zh-TW': '最新・更新', en: 'New & updated', vi: 'Mới & cập nhật', ko: '새 글·업데이트' },
  all: { ja: 'すべて見る', zh: '查看全部', 'zh-TW': '查看全部', en: 'See all', vi: 'Xem tất cả', ko: '모두 보기' },
  updated: { ja: '更新', zh: '更新', 'zh-TW': '更新', en: 'Updated', vi: 'Cập nhật', ko: '업데이트' },
  forIntro: { ja: '「{x}」ときに役立つ記事と道具をまとめました。', zh: '「{x}」时用得上的文章和工具。', 'zh-TW': '「{x}」時用得上的文章和工具。', en: 'Articles and tools for: {x}.', vi: 'Bài viết và công cụ cho: {x}.', ko: '「{x}」일 때 도움이 되는 기사와 도구입니다.' },
  catIntro: { ja: 'このカテゴリのすべての記事です。', zh: '这个分类的全部文章。', 'zh-TW': '這個分類的全部文章。', en: 'All articles in this category.', vi: 'Tất cả bài viết trong chuyên mục này.', ko: '이 분류의 모든 기사입니다.' },
  others: { ja: 'ほかの目的から探す', zh: '按其他情况找', 'zh-TW': '依其他情況找', en: 'Other situations', vi: 'Tình huống khác', ko: '다른 상황으로 찾기' }
};

export type Article = { id: string; group: string; title: string; desc: string; href: string; updated?: string; featured?: boolean; situations: string[] };

export function articles(lang: string): Article[] {
  return (careerIndex.pages as any[]).map((p) => ({
    id: p.id, group: p.group, featured: !!p.featured, updated: p.updated, situations: p.situations || [],
    title: (lang === 'zh' ? p.title : p[`title_${lang}`]) || p.title,
    desc: (lang === 'zh' ? p.description : p[`description_${lang}`]) || p.description,
    href: `${prefix(lang)}${p.url}`
  }));
}
