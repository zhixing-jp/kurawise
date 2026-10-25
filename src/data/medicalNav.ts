// 病院＆医療のまとめページの並び（2026-10-23）。仕事＆ビザと同じ形（ブロック＋iOS 風の一覧）。
// 記事は「使う場面」（今すぐ／病院に行く／知っておく）でまとめる。記事の題名は public/data/medical/index.json から取る。
type L = 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko' | 'ja';
export const pickM = (m: Record<string, string>, lang: string) => m[lang] || m.en;

export const MED_UI: Record<string, Record<L, string>> = {
  now: { ja: '今どうしたい？', zh: '现在要做什么？', 'zh-TW': '現在要做什麼？', en: 'What do you need now?', vi: 'Bạn cần gì lúc này?', ko: '지금 무엇이 필요한가요?' },
  phone: { ja: '困ったときの電話', zh: '紧急电话', 'zh-TW': '緊急電話', en: 'Phone numbers to know', vi: 'Số điện thoại cần biết', ko: '긴급 전화' },
  phoneNote: { ja: '#7119・#8000 は、通常は日本語のみの対応です。', zh: '#7119・#8000 通常只支持日语。', 'zh-TW': '#7119・#8000 通常只支援日語。', en: '#7119 and #8000 are usually Japanese only.', vi: '#7119 và #8000 thường chỉ hỗ trợ tiếng Nhật.', ko: '#7119·#8000은 보통 일본어만 지원합니다.' },
  service: { ja: '通訳・同行を頼む', zh: '请人翻译・陪同', 'zh-TW': '請人翻譯・陪同', en: 'Interpreter & companion', vi: 'Phiên dịch & đi cùng', ko: '통역·동행 요청' }
};

export const MED_GROUPS: { key: string; label: Record<L, string> }[] = [
  { key: 'urgent', label: { ja: '今すぐ必要', zh: '紧急时', 'zh-TW': '緊急時', en: 'Urgent', vi: 'Khẩn cấp', ko: '급할 때' } },
  { key: 'visit', label: { ja: '病院に行く', zh: '去医院看病', 'zh-TW': '去醫院看病', en: 'At the hospital', vi: 'Đi khám bệnh', ko: '병원에 갈 때' } },
  { key: 'before', label: { ja: '知っておく', zh: '提前了解', 'zh-TW': '事先了解', en: 'Good to know', vi: 'Nên biết trước', ko: '미리 알아 두기' } }
];

export const MED_ROWS: { id: string; group: string; icon: string; tone: string; sub: Record<L, string> }[] = [
  { id: 'calling-ambulance', group: 'urgent', icon: '🚑', tone: 'red', sub: { ja: '呼ぶか迷ったら・聞かれること', zh: '要不要叫・会被问什么', 'zh-TW': '要不要叫・會被問什麼', en: 'When to call, what they ask', vi: 'Khi nào gọi, sẽ hỏi gì', ko: '부를지 판단·질문 내용' } },
  { id: 'night-emergency-clinic', group: 'urgent', icon: '🌙', tone: 'indigo', sub: { ja: '診療時間外の探し方', zh: '非工作时间怎么找', 'zh-TW': '非上班時間怎麼找', en: 'Finding care after hours', vi: 'Tìm nơi khám ngoài giờ', ko: '진료 시간 외 찾는 법' } },
  { id: 'kansai-guide', group: 'visit', icon: '🧭', tone: 'orange', sub: { ja: 'まずどこへ・費用・中国語対応の実際', zh: '先去哪里・多少钱・中文服务真相', 'zh-TW': '', en: '', vi: '', ko: '' } },
  { id: 'hospital-registration', group: 'visit', icon: '🏥', tone: 'blue', sub: { ja: '保険証・初診の言い方', zh: '保险证・初诊怎么说', 'zh-TW': '保險證・初診怎麼說', en: 'Insurance card, first-visit phrases', vi: 'Thẻ bảo hiểm, câu nói lần đầu', ko: '보험증·초진 표현' } },
  { id: 'symptom-dictionary', group: 'visit', icon: '🗣️', tone: 'teal', sub: { ja: '指さしで症状を伝える', zh: '指着词库说明症状', 'zh-TW': '指著詞庫說明症狀', en: 'Point to describe symptoms', vi: 'Chỉ để mô tả triệu chứng', ko: '가리켜서 증상 전달' } },
  { id: 'payment-and-pharmacy', group: 'visit', icon: '💊', tone: 'green', sub: { ja: '会計と処方薬の受け取り', zh: '结账和领处方药', 'zh-TW': '結帳和領處方藥', en: 'Paying and getting prescriptions', vi: 'Thanh toán và lấy thuốc kê đơn', ko: '수납과 처방약 받기' } },
  { id: 'pharmacy-otc-medicine', group: 'before', icon: '🏪', tone: 'orange', sub: { ja: '病院に行かないとき', zh: '不去医院时自己买药', 'zh-TW': '不去醫院時自己買藥', en: 'When you skip the hospital', vi: 'Khi không đi bệnh viện', ko: '병원에 안 갈 때' } },
  { id: 'system-and-cost', group: 'before', icon: '💴', tone: 'yellow', sub: { ja: '保険・費用・病院の選び方', zh: '保险・费用・怎么选医院', 'zh-TW': '保險・費用・怎麼選醫院', en: 'Insurance, costs, choosing a clinic', vi: 'Bảo hiểm, chi phí, chọn nơi khám', ko: '보험·비용·병원 고르기' } },
  { id: 'special-groups', group: 'before', icon: '👶', tone: 'pink', sub: { ja: '子ども・妊婦・高齢者・心のこと', zh: '儿童・孕妇・老人・心理', 'zh-TW': '兒童・孕婦・長者・心理', en: 'Children, pregnancy, seniors, mental health', vi: 'Trẻ em, thai phụ, người già, tâm lý', ko: '아이·임산부·노인·마음' } },
  { id: 'faq', group: 'before', icon: '❓', tone: 'gray', sub: { ja: '言葉・費用・証明書', zh: '语言・费用・证件', 'zh-TW': '語言・費用・證件', en: 'Language, costs, documents', vi: 'Ngôn ngữ, chi phí, giấy tờ', ko: '언어·비용·서류' } }
];

export const PHONES: { num: string; tel: string; tone: string; label: Record<L, string> }[] = [
  { num: '119', tel: '119', tone: 'red', label: { ja: '救急車・火事', zh: '救护车・火灾', 'zh-TW': '救護車・火災', en: 'Ambulance & fire', vi: 'Cấp cứu & cháy', ko: '구급차·화재' } },
  { num: '#7119', tel: '%237119', tone: 'orange', label: { ja: '救急車を呼ぶか迷ったら（実施地域のみ）', zh: '不确定要不要叫救护车（部分地区）', 'zh-TW': '不確定要不要叫救護車（部分地區）', en: 'Unsure if you need an ambulance (some areas)', vi: 'Phân vân có nên gọi cấp cứu (một số vùng)', ko: '구급차를 부를지 망설일 때(일부 지역)' } },
  { num: '#8000', tel: '%238000', tone: 'pink', label: { ja: '子どもの急な病気の相談', zh: '孩子突发疾病咨询', 'zh-TW': '孩子突發疾病諮詢', en: 'Advice line for sick children', vi: 'Tư vấn khi trẻ ốm đột ngột', ko: '어린이 급한 병 상담' } }
];
