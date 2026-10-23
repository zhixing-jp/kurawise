// 在留期限リマインダー（/career/visa-reminder/）の文言。段階1（2026-10-23）。
// 日本語が基準。制度の説明は出入国在留管理庁のページで確認（確認日：2026-10-23）。
//   在留期間更新許可申請：https://www.moj.go.jp/isa/applications/procedures/16-3.html
//   ・6か月以上の在留期間は、満了の3か月前から申請できる（やむを得ない事情があれば、それより前も可）
//   ・2026年10月1日から手数料が改定（窓口：許可期間に応じて 10,000円〜75,000円）。オンライン申請も可
//   ・特例期間（満了日までに申請すれば、処分の時か満了日から2か月を経過する日の早い方まで在留できる。入管法20条6項）
//   ・永住者の在留カード：有効期間の満了の2か月前から更新の申請ができる（16歳以上）
// 文の中の {d} は日付、{n} は日数に置き換える。

export const VR_LANGS = ['ja', 'zh', 'zh-TW', 'en', 'vi', 'ko'] as const;
export type VRLang = typeof VR_LANGS[number];

export interface VRCopy {
  title: string;
  description: string;
  lead: string;
  privacy: string;
  typeLabel: string;
  typeRenew: string;
  typePr: string;
  dateLabel: string;
  dateHintRenew: string;
  dateHintPr: string;
  daysLeft: string;      // {n}
  expired: string;
  canApplyNow: string;
  stepOpenRenew: string; // {d}
  stepOpenPr: string;    // {d}
  stepMonth: string;     // {d}
  stepLast: string;      // {d}
  addIcs: string;
  addIcsNote: string;
  addGoogle: string;
  evOpenRenew: string;
  evOpenPr: string;
  evMonth: string;
  evLast: string;
  evDetails: string;
  infoTitle: string;
  info: string[];        // HTML 可
  disclaimer: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  checked: string;
  cardSub: string;      // 仕事＆ビザのまとめページの一番上のカード
}

const ISA = 'https://www.moj.go.jp/isa/applications/procedures/16-3.html';

export const VR_COPY: Record<VRLang, VRCopy> = {
  ja: {
    title: '在留期限リマインダー',
    description: '在留カードの期限を入れるだけで、更新の申請ができるようになる日と、期限の1か月前を、スマホのカレンダーに登録できます。無料、登録不要。',
    lead: '在留カードの期限を入れると、更新の申請ができるようになる日と、期限の1か月前を、スマホのカレンダーに登録できます。',
    privacy: '入力した日付は、このページの中だけで計算します。どこにも送信・保存しません。',
    typeLabel: '何の期限ですか',
    typeRenew: '在留期間の満了日（在留期間の更新）',
    typePr: '永住者の在留カードの有効期限（カードの更新）',
    dateLabel: '期限の日',
    dateHintRenew: '在留カードの表面「在留期間（満了日）」の日付',
    dateHintPr: '在留カードの表面「このカードは○年○月○日まで有効です」の日付',
    daysLeft: '期限まで、あと {n} 日',
    expired: '期限を過ぎています。すぐに、住んでいる地域の出入国在留管理局に相談してください。',
    canApplyNow: '今日から、もう申請できます。',
    stepOpenRenew: '{d}　申請ができるようになる日（期限の3か月前）',
    stepOpenPr: '{d}　申請ができるようになる日（期限の2か月前）',
    stepMonth: '{d}　期限の1か月前。まだなら、すぐに申請を',
    stepLast: '{d}　期限の日。この日までに申請すること',
    addIcs: 'カレンダーに追加（iPhone・Android・Outlook）',
    addIcsNote: 'ファイルを開くと、3つの予定がカレンダーに入ります。',
    addGoogle: 'Google カレンダーに1つずつ追加',
    evOpenRenew: '在留期間の更新：今日から申請できます',
    evOpenPr: '在留カードの更新：今日から申請できます',
    evMonth: '在留期限まで1か月：申請はお済みですか',
    evLast: '在留期限の日：今日までに申請を',
    evDetails: 'Kurawise 在留期限リマインダー https://kurawise.com/ja/career/visa-reminder/',
    infoTitle: '知っておきたいこと',
    info: [
      '在留期間が6か月以上の人は、期限の3か月前から更新の申請ができます。入院や長期の出張など、やむを得ない事情があれば、それより前に受け付けられることもあります。',
      '期限の日までに申請していれば、結果が出るまで（最長で期限から2か月）、期限を過ぎても日本にいることができます（特例期間）。期限を過ぎてからでは、更新の申請はできません。',
      `2026年10月1日から、更新の手数料が変わりました。窓口で申請する場合、許可される在留期間に応じて10,000円〜75,000円です。オンラインでも申請できます。最新の情報は<a href="${ISA}" target="_blank" rel="noopener">出入国在留管理庁のページ</a>で確認してください。`,
      '永住者には在留期間の更新はありませんが、16歳以上の人は、在留カードの有効期間（7年）の更新が必要です。期限の2か月前から申請できます。'
    ],
    disclaimer: 'このページは一般的な情報です。ご自身の状況については、出入国在留管理局または行政書士に確認してください。',
    ctaTitle: '転職・更新のときの手続きを、記事にまとめています',
    ctaBody: '転職したときの届出、更新の準備、就労資格証明書など。準備ができしだいお知らせします。',
    ctaButton: '先行案内を受け取る',
    checked: '内容の確認日：2026年10月23日',
    cardSub: '期限を入れるだけで、更新の時期をスマホのカレンダーに'
  },
  zh: {
    title: '在留期限提醒',
    description: '输入在留卡的期限，就能把可以开始申请更新的日子和到期前1个月，加到手机日历里。免费，无需注册。',
    lead: '输入在留卡的期限，就能把可以开始申请更新的日子、到期前1个月，加到手机日历里。',
    privacy: '你输入的日期只在这个页面里计算，不会发送或保存到任何地方。',
    typeLabel: '是什么期限',
    typeRenew: '在留期间的到期日（在留期间更新）',
    typePr: '永住者在留卡的有效期限（换卡）',
    dateLabel: '到期日',
    dateHintRenew: '在留卡正面「在留期間（満了日）」的日期',
    dateHintPr: '在留卡正面「このカードは○年○月○日まで有効です」的日期',
    daysLeft: '距离到期还有 {n} 天',
    expired: '已经过了期限。请马上到你所在地区的出入国在留管理局咨询。',
    canApplyNow: '从今天起，已经可以申请了。',
    stepOpenRenew: '{d}　可以开始申请的日子（到期前3个月）',
    stepOpenPr: '{d}　可以开始申请的日子（到期前2个月）',
    stepMonth: '{d}　到期前1个月。还没申请的话，请尽快',
    stepLast: '{d}　到期日。必须在这一天之前申请',
    addIcs: '加到日历（iPhone・安卓・Outlook）',
    addIcsNote: '打开文件后，3个日程会加入你的日历。',
    addGoogle: '逐个加到 Google 日历',
    evOpenRenew: '在留期间更新：今天起可以申请',
    evOpenPr: '在留卡更新：今天起可以申请',
    evMonth: '距离在留期限还有1个月：申请了吗',
    evLast: '在留期限最后一天：今天之内要申请',
    evDetails: 'Kurawise 在留期限提醒 https://kurawise.com/career/visa-reminder/',
    infoTitle: '需要知道的事',
    info: [
      '在留期间为6个月以上的人，可以从到期前3个月开始申请更新。如果因为住院、长期出差等不得已的情况，有时也可以更早受理。',
      '只要在到期日之前提出申请，在结果出来之前（最长到期后2个月），即使过了期限也可以留在日本（特例期间）。过了期限之后，就不能再申请更新了。',
      `从2026年10月1日起，更新的手续费有变化。在窗口申请时，根据批准的在留期间，为10,000日元～75,000日元。也可以在线申请。最新信息请在<a href="${ISA}" target="_blank" rel="noopener">出入国在留管理厅的页面</a>上确认。`,
      '永住者没有在留期间的更新，但16岁以上的人，需要更新在留卡的有效期（7年）。可以从到期前2个月开始申请。'
    ],
    disclaimer: '本页是一般性信息。你自己的情况，请向出入国在留管理局或行政书士确认。',
    ctaTitle: '转职、更新时的手续，我们正在整理成文章',
    ctaBody: '转职后的申报、更新的准备、就劳资格证明书等。准备好后会第一时间通知你。',
    ctaButton: '接收抢先通知',
    checked: '内容确认日期：2026年10月23日',
    cardSub: '输入期限，就能把更新时间加到手机日历里'
  },
  'zh-TW': {
    title: '在留期限提醒',
    description: '輸入在留卡的期限，就能把可以開始申請更新的日子和到期前1個月，加到手機行事曆裡。免費，不需註冊。',
    lead: '輸入在留卡的期限，就能把可以開始申請更新的日子、到期前1個月，加到手機行事曆裡。',
    privacy: '你輸入的日期只在這個頁面裡計算，不會傳送或儲存到任何地方。',
    typeLabel: '是什麼期限',
    typeRenew: '在留期間的到期日（在留期間更新）',
    typePr: '永住者在留卡的有效期限（換卡）',
    dateLabel: '到期日',
    dateHintRenew: '在留卡正面「在留期間（満了日）」的日期',
    dateHintPr: '在留卡正面「このカードは○年○月○日まで有効です」的日期',
    daysLeft: '距離到期還有 {n} 天',
    expired: '已經過了期限。請馬上到你所在地區的出入國在留管理局諮詢。',
    canApplyNow: '從今天起，已經可以申請了。',
    stepOpenRenew: '{d}　可以開始申請的日子（到期前3個月）',
    stepOpenPr: '{d}　可以開始申請的日子（到期前2個月）',
    stepMonth: '{d}　到期前1個月。還沒申請的話，請盡快',
    stepLast: '{d}　到期日。必須在這一天之前申請',
    addIcs: '加到行事曆（iPhone・Android・Outlook）',
    addIcsNote: '開啟檔案後，3個行程會加入你的行事曆。',
    addGoogle: '逐一加到 Google 日曆',
    evOpenRenew: '在留期間更新：今天起可以申請',
    evOpenPr: '在留卡更新：今天起可以申請',
    evMonth: '距離在留期限還有1個月：申請了嗎',
    evLast: '在留期限最後一天：今天之內要申請',
    evDetails: 'Kurawise 在留期限提醒 https://kurawise.com/zh-TW/career/visa-reminder/',
    infoTitle: '需要知道的事',
    info: [
      '在留期間為6個月以上的人，可以從到期前3個月開始申請更新。如果因為住院、長期出差等不得已的情況，有時也可以更早受理。',
      '只要在到期日之前提出申請，在結果出來之前（最長到期後2個月），即使過了期限也可以留在日本（特例期間）。過了期限之後，就不能再申請更新了。',
      `從2026年10月1日起，更新的手續費有變化。在窗口申請時，依核准的在留期間，為10,000日圓～75,000日圓。也可以線上申請。最新資訊請在<a href="${ISA}" target="_blank" rel="noopener">出入國在留管理廳的頁面</a>上確認。`,
      '永住者沒有在留期間的更新，但16歲以上的人，需要更新在留卡的有效期（7年）。可以從到期前2個月開始申請。'
    ],
    disclaimer: '本頁是一般性資訊。你自己的情況，請向出入國在留管理局或行政書士確認。',
    ctaTitle: '轉職、更新時的手續，我們正在整理成文章',
    ctaBody: '轉職後的申報、更新的準備、就勞資格證明書等。準備好後會第一時間通知你。',
    ctaButton: '接收搶先通知',
    checked: '內容確認日期：2026年10月23日',
    cardSub: '輸入期限，就能把更新時間加到手機行事曆裡'
  },
  en: {
    title: 'Residence Card Expiry Reminder',
    description: 'Enter your residence card expiry date and add the day you can start renewing, plus a one-month warning, to your phone calendar. Free, no sign-up.',
    lead: 'Enter the expiry date on your residence card and add the day you can start applying for renewal, and a one-month warning, to your phone calendar.',
    privacy: 'The date you enter is calculated only on this page. It is never sent or saved anywhere.',
    typeLabel: 'Which date is it?',
    typeRenew: 'End of your period of stay (extending your period of stay)',
    typePr: 'Card expiry for permanent residents (renewing the card)',
    dateLabel: 'Expiry date',
    dateHintRenew: 'The date under "Period of Stay (expiration date)" on the front of your residence card',
    dateHintPr: 'The "valid until" date on the front of your residence card',
    daysLeft: '{n} days left',
    expired: 'This date has passed. Please contact your regional immigration services bureau right away.',
    canApplyNow: 'You can already apply, starting today.',
    stepOpenRenew: '{d}　You can start applying (3 months before)',
    stepOpenPr: '{d}　You can start applying (2 months before)',
    stepMonth: '{d}　One month left. If you haven\'t applied yet, do it now',
    stepLast: '{d}　Expiry date. You must apply by this day',
    addIcs: 'Add to calendar (iPhone, Android, Outlook)',
    addIcsNote: 'Open the file to add the 3 reminders to your calendar.',
    addGoogle: 'Add to Google Calendar one by one',
    evOpenRenew: 'Visa extension: you can apply from today',
    evOpenPr: 'Residence card renewal: you can apply from today',
    evMonth: 'One month until your residence expiry: have you applied?',
    evLast: 'Residence expiry date: apply by today',
    evDetails: 'Kurawise Residence Card Expiry Reminder https://kurawise.com/en/career/visa-reminder/',
    infoTitle: 'Good to know',
    info: [
      'If your period of stay is 6 months or longer, you can apply for an extension from 3 months before it ends. In unavoidable cases such as hospitalization or a long business trip abroad, applications may be accepted earlier.',
      'If you apply by the expiry date, you can stay in Japan after that date until a decision is made (up to 2 months after expiry). This is called the special period. Once the date has passed, you can no longer apply for an extension.',
      `From October 1, 2026, the fee for extensions changed. At the counter it is ¥10,000 to ¥75,000, depending on the period of stay granted. You can also apply online. Please check the latest details on the <a href="${ISA}" target="_blank" rel="noopener">Immigration Services Agency website</a>.`,
      'Permanent residents do not extend a period of stay, but those aged 16 or over must renew their residence card every 7 years. You can apply from 2 months before it expires.'
    ],
    disclaimer: 'This page provides general information. For your own situation, please check with the immigration services bureau or a gyoseishoshi (administrative scrivener).',
    ctaTitle: 'We are writing guides on visa procedures for job changes and extensions',
    ctaBody: 'Notifications after changing jobs, preparing an extension, the certificate of authorized employment, and more. We will let you know when they are ready.',
    ctaButton: 'Get early access',
    checked: 'Content checked: October 23, 2026',
    cardSub: 'Enter your expiry date and add renewal reminders to your phone calendar'
  },
  vi: {
    title: 'Nhắc hạn thẻ cư trú',
    description: 'Nhập ngày hết hạn trên thẻ cư trú để thêm ngày bắt đầu được nộp gia hạn và mốc trước 1 tháng vào lịch điện thoại. Miễn phí, không cần đăng ký.',
    lead: 'Nhập ngày hết hạn trên thẻ cư trú, bạn có thể thêm ngày bắt đầu được nộp đơn gia hạn và mốc trước 1 tháng vào lịch điện thoại.',
    privacy: 'Ngày bạn nhập chỉ được tính trên trang này, không gửi hay lưu ở bất kỳ đâu.',
    typeLabel: 'Đây là hạn gì?',
    typeRenew: 'Ngày hết hạn lưu trú (gia hạn thời gian lưu trú)',
    typePr: 'Hạn thẻ cư trú của người vĩnh trú (đổi thẻ)',
    dateLabel: 'Ngày hết hạn',
    dateHintRenew: 'Ngày ở mục "在留期間（満了日）" mặt trước thẻ cư trú',
    dateHintPr: 'Ngày ở dòng "このカードは○年○月○日まで有効です" mặt trước thẻ cư trú',
    daysLeft: 'Còn {n} ngày đến hạn',
    expired: 'Đã quá hạn. Hãy liên hệ ngay Cục Quản lý Xuất nhập cảnh khu vực nơi bạn sống.',
    canApplyNow: 'Từ hôm nay bạn đã có thể nộp đơn.',
    stepOpenRenew: '{d}　Ngày bắt đầu được nộp đơn (trước 3 tháng)',
    stepOpenPr: '{d}　Ngày bắt đầu được nộp đơn (trước 2 tháng)',
    stepMonth: '{d}　Còn 1 tháng. Nếu chưa nộp, hãy nộp ngay',
    stepLast: '{d}　Ngày hết hạn. Phải nộp đơn trước hết ngày này',
    addIcs: 'Thêm vào lịch (iPhone, Android, Outlook)',
    addIcsNote: 'Mở tệp để thêm 3 lời nhắc vào lịch.',
    addGoogle: 'Thêm từng mục vào Google Calendar',
    evOpenRenew: 'Gia hạn lưu trú: từ hôm nay có thể nộp đơn',
    evOpenPr: 'Đổi thẻ cư trú: từ hôm nay có thể nộp đơn',
    evMonth: 'Còn 1 tháng đến hạn lưu trú: bạn đã nộp đơn chưa?',
    evLast: 'Ngày hết hạn lưu trú: hãy nộp đơn trong hôm nay',
    evDetails: 'Kurawise Nhắc hạn thẻ cư trú https://kurawise.com/vi/career/visa-reminder/',
    infoTitle: 'Những điều nên biết',
    info: [
      'Nếu thời gian lưu trú từ 6 tháng trở lên, bạn có thể nộp đơn gia hạn từ 3 tháng trước khi hết hạn. Trong trường hợp bất khả kháng như nằm viện hay công tác dài ngày ở nước ngoài, đơn có thể được nhận sớm hơn.',
      'Nếu nộp đơn trước ngày hết hạn, bạn vẫn được ở Nhật sau ngày đó cho đến khi có kết quả (tối đa 2 tháng sau ngày hết hạn) – gọi là thời gian đặc lệ. Sau khi đã quá hạn thì không thể nộp đơn gia hạn nữa.',
      `Từ ngày 1/10/2026, lệ phí gia hạn đã thay đổi. Nộp tại quầy là 10.000 – 75.000 yên tùy thời gian lưu trú được cấp. Bạn cũng có thể nộp trực tuyến. Hãy kiểm tra thông tin mới nhất trên <a href="${ISA}" target="_blank" rel="noopener">trang của Cục Quản lý Xuất nhập cảnh</a>.`,
      'Người vĩnh trú không gia hạn thời gian lưu trú, nhưng người từ 16 tuổi trở lên phải đổi thẻ cư trú (hiệu lực 7 năm). Có thể nộp đơn từ 2 tháng trước khi hết hạn.'
    ],
    disclaimer: 'Trang này là thông tin chung. Với trường hợp của bạn, hãy hỏi Cục Quản lý Xuất nhập cảnh hoặc hành chính thư sĩ (gyoseishoshi).',
    ctaTitle: 'Chúng tôi đang viết bài về thủ tục khi chuyển việc và gia hạn',
    ctaBody: 'Khai báo sau khi chuyển việc, chuẩn bị gia hạn, giấy chứng nhận tư cách lao động… Chúng tôi sẽ báo cho bạn khi sẵn sàng.',
    ctaButton: 'Nhận thông báo sớm',
    checked: 'Ngày kiểm tra nội dung: 23/10/2026',
    cardSub: 'Nhập ngày hết hạn để thêm lời nhắc gia hạn vào lịch điện thoại'
  },
  ko: {
    title: '재류 기한 알림',
    description: '재류카드의 기한을 입력하면, 갱신 신청이 가능해지는 날과 기한 1개월 전을 휴대폰 캘린더에 등록할 수 있습니다. 무료, 가입 불필요.',
    lead: '재류카드의 기한을 입력하면, 갱신 신청이 가능해지는 날과 기한 1개월 전을 휴대폰 캘린더에 등록할 수 있습니다.',
    privacy: '입력한 날짜는 이 페이지 안에서만 계산하며, 어디에도 전송하거나 저장하지 않습니다.',
    typeLabel: '어떤 기한인가요',
    typeRenew: '재류 기간 만료일(재류 기간 갱신)',
    typePr: '영주자 재류카드의 유효 기한(카드 갱신)',
    dateLabel: '기한 날짜',
    dateHintRenew: '재류카드 앞면 「在留期間（満了日）」의 날짜',
    dateHintPr: '재류카드 앞면 「このカードは○年○月○日まで有効です」의 날짜',
    daysLeft: '기한까지 {n}일 남았습니다',
    expired: '기한이 지났습니다. 바로 거주 지역의 출입국재류관리국에 상담하세요.',
    canApplyNow: '오늘부터 이미 신청할 수 있습니다.',
    stepOpenRenew: '{d}　신청이 가능해지는 날(기한 3개월 전)',
    stepOpenPr: '{d}　신청이 가능해지는 날(기한 2개월 전)',
    stepMonth: '{d}　기한 1개월 전. 아직이라면 바로 신청하세요',
    stepLast: '{d}　기한 날. 이날까지 신청해야 합니다',
    addIcs: '캘린더에 추가(iPhone·Android·Outlook)',
    addIcsNote: '파일을 열면 3개의 일정이 캘린더에 추가됩니다.',
    addGoogle: 'Google 캘린더에 하나씩 추가',
    evOpenRenew: '재류 기간 갱신: 오늘부터 신청 가능',
    evOpenPr: '재류카드 갱신: 오늘부터 신청 가능',
    evMonth: '재류 기한까지 1개월: 신청하셨나요',
    evLast: '재류 기한 마지막 날: 오늘까지 신청하세요',
    evDetails: 'Kurawise 재류 기한 알림 https://kurawise.com/ko/career/visa-reminder/',
    infoTitle: '알아 두면 좋은 점',
    info: [
      '재류 기간이 6개월 이상인 사람은 기한 3개월 전부터 갱신을 신청할 수 있습니다. 입원이나 장기 해외 출장 등 부득이한 사정이 있으면 그보다 일찍 접수되기도 합니다.',
      '기한 날까지 신청했다면, 결과가 나올 때까지(최장 기한 후 2개월) 기한이 지나도 일본에 있을 수 있습니다(특례 기간). 기한이 지난 뒤에는 갱신을 신청할 수 없습니다.',
      `2026년 10월 1일부터 갱신 수수료가 바뀌었습니다. 창구에서 신청하면 허가되는 재류 기간에 따라 10,000엔~75,000엔입니다. 온라인으로도 신청할 수 있습니다. 최신 정보는 <a href="${ISA}" target="_blank" rel="noopener">출입국재류관리청 페이지</a>에서 확인하세요.`,
      '영주자는 재류 기간 갱신이 없지만, 16세 이상인 사람은 재류카드의 유효 기간(7년)을 갱신해야 합니다. 기한 2개월 전부터 신청할 수 있습니다.'
    ],
    disclaimer: '이 페이지는 일반적인 정보입니다. 본인의 상황은 출입국재류관리국 또는 행정서사에게 확인하세요.',
    ctaTitle: '이직·갱신 때의 수속을 기사로 정리하고 있습니다',
    ctaBody: '이직 후 신고, 갱신 준비, 취로자격증명서 등. 준비되는 대로 알려 드리겠습니다.',
    ctaButton: '사전 안내 받기',
    checked: '내용 확인일: 2026년 10월 23일',
    cardSub: '기한을 입력하면 갱신 시기를 휴대폰 캘린더에 등록'
  }
};
