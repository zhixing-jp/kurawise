// 特定商取引法に基づく表記（/tokushoho/）。2026-10-25 制定。
// 対象は医療コーディネートサービス（受診の同行・通訳、電話の代行、書類の説明）だけ。
// 日本語が正本。他の言語は参考訳。料金・支払・キャンセルを変えたときは、
// public/data/medical/referral.json（同行サービスのページの料金表）と、ここの両方を必ず直す。
import type { Block } from './aboutCopy';

type L = 'ja' | 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko';
const MAIL = '<a href="mailto:info@kurawise.com">info@kurawise.com</a>';

export const TOKU_TITLES: Record<L, string> = {
  ja: '特定商取引法に基づく表記',
  zh: '特定商取引法规定的标示',
  'zh-TW': '特定商取引法規定的標示',
  en: 'Notation under the Specified Commercial Transactions Act',
  vi: 'Thông tin theo Luật Giao dịch thương mại đặc định',
  ko: '특정상거래법에 따른 표기'
};

export const TOKU_BODY: Record<L, Block[]> = {
  ja: [
    { t: 'p', text: '医療コーディネートサービス（受診の同行・通訳、電話の代行、書類・検査結果の説明）についての表記です。' },
    { t: 'h2', text: '役務提供者' },
    { t: 'p', text: 'Kurawise 運営者 智行（個人）。氏名・住所・電話番号は、ご請求があれば遅滞なく開示します。' },
    { t: 'h2', text: '連絡先' },
    { t: 'p', text: `メール：${MAIL}` },
    { t: 'h2', text: '役務の対価（料金）' },
    { t: 'ul', items: [
      '受診の同行・通訳（対面）：3時間まで 15,000円、以降1時間ごとに 4,000円（待ち時間を含みます）',
      '電話の代行（予約・問い合わせ）：1件 2,000円（15分まで）',
      '書類・検査結果の説明（翻訳）：1件 3,000円から（量により事前にお見積り）',
      '最初の3名様は半額（モニター価格）'
    ] },
    { t: 'h2', text: '料金以外にお客様が負担するもの' },
    { t: 'ul', items: [
      '交通費：大阪市内と泉州地域は無料。それ以外は実費',
      '医療機関・薬局に支払う医療費・薬代',
      '銀行振込の手数料'
    ] },
    { t: 'h2', text: '支払方法' },
    { t: 'p', text: '銀行振込、PayPay、WeChat Pay、Alipay、現金' },
    { t: 'h2', text: '支払時期' },
    { t: 'p', text: '受診の同行：当日、終了後にお支払いください。電話の代行・書類の説明：事前にお支払いください。' },
    { t: 'h2', text: '役務の提供時期' },
    { t: 'p', text: 'ご相談のうえ決めた日時に提供します。電話の代行・書類の説明は、お支払いの確認後、お約束した期日までに行います。' },
    { t: 'h2', text: 'キャンセル・返金' },
    { t: 'ul', items: [
      '受診の同行：2日前までのキャンセルは無料。前日は料金の50%、当日は100%をいただきます。',
      '電話の代行・書類の説明：着手する前のキャンセルは全額返金します。着手した後は返金できません。',
      '当方の都合で提供できなかった場合は、全額を返金します。'
    ] },
    { t: 'h2', text: 'ご注意' },
    { t: 'p', text: '本サービスは、言葉と手続きのサポートです。診断・治療・どの科にかかるかなどの医療上の判断は行いません。急な病気やけがで救急車が必要なときは、まず119に電話してください。' }
  ],
  zh: [
    { t: 'p', text: '本页说明医疗协调服务（陪同就诊・口译、代打电话、文件・检查结果说明）的相关事项。以日文版为正本，本页为参考译文。' },
    { t: 'h2', text: '服务提供者' },
    { t: 'p', text: 'Kurawise 运营者 智行（个人）。如有需要，姓名、地址、电话会及时告知。' },
    { t: 'h2', text: '联系方式' },
    { t: 'p', text: `邮箱：${MAIL}` },
    { t: 'h2', text: '服务费用' },
    { t: 'ul', items: [
      '陪同就诊・口译（面对面）：3小时以内 15,000日元，之后每1小时 4,000日元（包括等候时间）',
      '代打电话（预约・咨询）：每次 2,000日元（15分钟以内）',
      '文件・检查结果说明（翻译）：每份 3,000日元起（按内容事先报价）',
      '前3位客人半价（体验价）'
    ] },
    { t: 'h2', text: '服务费以外需要客人承担的费用' },
    { t: 'ul', items: [
      '交通费：大阪市内和泉州地区免费，其他地区按实际费用',
      '付给医疗机构、药局的医疗费和药费',
      '银行转账手续费'
    ] },
    { t: 'h2', text: '付款方式' },
    { t: 'p', text: '银行转账、PayPay、微信支付、支付宝、现金' },
    { t: 'h2', text: '付款时间' },
    { t: 'p', text: '陪同就诊：当天结束后付款。代打电话・文件说明：请事先付款。' },
    { t: 'h2', text: '服务时间' },
    { t: 'p', text: '按商量好的日期和时间提供。代打电话・文件说明在确认付款后，于约定的日期前完成。' },
    { t: 'h2', text: '取消・退款' },
    { t: 'ul', items: [
      '陪同就诊：2天前取消免费；前一天取消收取费用的50%；当天取消收取100%。',
      '代打电话・文件说明：开始之前取消，全额退款；开始之后不退款。',
      '因我方原因无法提供服务时，全额退款。'
    ] },
    { t: 'h2', text: '注意' },
    { t: 'p', text: '本服务是语言和手续方面的协助，不做诊断、治疗、看哪个科等医疗判断。突发疾病或受伤需要救护车时，请先拨打119。' }
  ],
  'zh-TW': [
    { t: 'p', text: '本頁說明醫療協調服務（陪同就診・口譯、代打電話、文件・檢查結果說明）的相關事項。以日文版為正本，本頁為參考譯文。' },
    { t: 'h2', text: '服務提供者' },
    { t: 'p', text: 'Kurawise 營運者 智行（個人）。如有需要，姓名、地址、電話會及時告知。' },
    { t: 'h2', text: '聯絡方式' },
    { t: 'p', text: `電子郵件：${MAIL}` },
    { t: 'h2', text: '服務費用' },
    { t: 'ul', items: [
      '陪同就診・口譯（面對面）：3小時以內 15,000日圓，之後每1小時 4,000日圓（包括等候時間）',
      '代打電話（預約・詢問）：每次 2,000日圓（15分鐘以內）',
      '文件・檢查結果說明（翻譯）：每份 3,000日圓起（依內容事先報價）',
      '前3位客人半價（體驗價）'
    ] },
    { t: 'h2', text: '服務費以外需要客人負擔的費用' },
    { t: 'ul', items: [
      '交通費：大阪市內和泉州地區免費，其他地區按實際費用',
      '付給醫療機構、藥局的醫療費和藥費',
      '銀行轉帳手續費'
    ] },
    { t: 'h2', text: '付款方式' },
    { t: 'p', text: '銀行轉帳、PayPay、微信支付、支付寶、現金' },
    { t: 'h2', text: '付款時間' },
    { t: 'p', text: '陪同就診：當天結束後付款。代打電話・文件說明：請事先付款。' },
    { t: 'h2', text: '服務時間' },
    { t: 'p', text: '依商量好的日期和時間提供。代打電話・文件說明在確認付款後，於約定的日期前完成。' },
    { t: 'h2', text: '取消・退款' },
    { t: 'ul', items: [
      '陪同就診：2天前取消免費；前一天取消收取費用的50%；當天取消收取100%。',
      '代打電話・文件說明：開始之前取消，全額退款；開始之後不退款。',
      '因我方原因無法提供服務時，全額退款。'
    ] },
    { t: 'h2', text: '注意' },
    { t: 'p', text: '本服務是語言和手續方面的協助，不做診斷、治療、看哪一科等醫療判斷。突發疾病或受傷需要救護車時，請先撥打119。' }
  ],
  en: [
    { t: 'p', text: 'This page covers the medical coordination service (hospital visits with an interpreter, phone calls on your behalf, explaining documents and test results). The Japanese version is authoritative; this is a reference translation.' },
    { t: 'h2', text: 'Service provider' },
    { t: 'p', text: 'Zhixing, operator of Kurawise (individual). Full name, address and phone number will be disclosed without delay upon request.' },
    { t: 'h2', text: 'Contact' },
    { t: 'p', text: `Email: ${MAIL}` },
    { t: 'h2', text: 'Fees' },
    { t: 'ul', items: [
      'Hospital visit with an interpreter (in person): up to 3 hours ¥15,000, then ¥4,000 per additional hour (waiting time included)',
      'Phone calls on your behalf (appointments, inquiries): ¥2,000 per call (up to 15 minutes)',
      'Explaining documents and test results (translation): from ¥3,000 per item (quoted in advance)',
      'The first 3 clients pay half price (trial price)'
    ] },
    { t: 'h2', text: 'Other costs paid by the client' },
    { t: 'ul', items: [
      'Transport: free within Osaka City and the Senshu area; actual costs elsewhere',
      'Medical and pharmacy fees paid to the hospital or pharmacy',
      'Bank transfer fees'
    ] },
    { t: 'h2', text: 'Payment methods' },
    { t: 'p', text: 'Bank transfer, PayPay, WeChat Pay, Alipay, cash' },
    { t: 'h2', text: 'Payment timing' },
    { t: 'p', text: 'Hospital visits: on the day, after the visit. Phone calls and document explanations: in advance.' },
    { t: 'h2', text: 'When the service is provided' },
    { t: 'p', text: 'On the date and time agreed in advance. Phone calls and document explanations are completed by the agreed date after payment is confirmed.' },
    { t: 'h2', text: 'Cancellation and refunds' },
    { t: 'ul', items: [
      'Hospital visits: free cancellation up to 2 days before; 50% of the fee the day before; 100% on the day.',
      'Phone calls and document explanations: full refund if cancelled before work begins; no refund after work begins.',
      'If we cannot provide the service for reasons on our side, we refund the full amount.'
    ] },
    { t: 'h2', text: 'Please note' },
    { t: 'p', text: 'This service helps with language and procedures. We do not make medical judgments such as diagnosis, treatment, or which department to visit. If you need an ambulance for a sudden illness or injury, call 119 first.' }
  ],
  vi: [
    { t: 'p', text: 'Trang này nói về dịch vụ điều phối y tế (đi cùng khám bệnh・phiên dịch, gọi điện thay, giải thích giấy tờ・kết quả xét nghiệm). Bản tiếng Nhật là bản chính; đây là bản dịch tham khảo.' },
    { t: 'h2', text: 'Người cung cấp dịch vụ' },
    { t: 'p', text: 'Zhixing, người vận hành Kurawise (cá nhân). Họ tên, địa chỉ và số điện thoại sẽ được cung cấp ngay khi có yêu cầu.' },
    { t: 'h2', text: 'Liên hệ' },
    { t: 'p', text: `Email: ${MAIL}` },
    { t: 'h2', text: 'Phí dịch vụ' },
    { t: 'ul', items: [
      'Đi cùng khám bệnh・phiên dịch (trực tiếp): tối đa 3 giờ 15.000 yên, mỗi giờ thêm 4.000 yên (bao gồm thời gian chờ)',
      'Gọi điện thay (đặt lịch・hỏi thông tin): 2.000 yên mỗi cuộc (tối đa 15 phút)',
      'Giải thích giấy tờ・kết quả xét nghiệm (dịch): từ 3.000 yên mỗi loại (báo giá trước)',
      '3 khách hàng đầu tiên được giảm 50% (giá dùng thử)'
    ] },
    { t: 'h2', text: 'Chi phí khác khách hàng tự chi trả' },
    { t: 'ul', items: [
      'Phí đi lại: miễn phí trong thành phố Osaka và khu vực Senshu; nơi khác theo chi phí thực tế',
      'Viện phí và tiền thuốc trả cho cơ sở y tế, nhà thuốc',
      'Phí chuyển khoản ngân hàng'
    ] },
    { t: 'h2', text: 'Phương thức thanh toán' },
    { t: 'p', text: 'Chuyển khoản ngân hàng, PayPay, WeChat Pay, Alipay, tiền mặt' },
    { t: 'h2', text: 'Thời điểm thanh toán' },
    { t: 'p', text: 'Đi cùng khám bệnh: trong ngày, sau khi kết thúc. Gọi điện thay・giải thích giấy tờ: thanh toán trước.' },
    { t: 'h2', text: 'Thời gian cung cấp dịch vụ' },
    { t: 'p', text: 'Theo ngày giờ đã thống nhất. Gọi điện thay・giải thích giấy tờ được hoàn thành trước ngày đã hẹn, sau khi xác nhận thanh toán.' },
    { t: 'h2', text: 'Hủy・hoàn tiền' },
    { t: 'ul', items: [
      'Đi cùng khám bệnh: hủy miễn phí đến 2 ngày trước; hủy ngày hôm trước tính 50%; hủy trong ngày tính 100%.',
      'Gọi điện thay・giải thích giấy tờ: hủy trước khi bắt đầu được hoàn tiền toàn bộ; sau khi bắt đầu không hoàn tiền.',
      'Nếu chúng tôi không thể cung cấp dịch vụ vì lý do từ phía chúng tôi, sẽ hoàn tiền toàn bộ.'
    ] },
    { t: 'h2', text: 'Lưu ý' },
    { t: 'p', text: 'Dịch vụ này hỗ trợ về ngôn ngữ và thủ tục. Chúng tôi không đưa ra phán đoán y khoa như chẩn đoán, điều trị hay nên khám khoa nào. Khi cần xe cứu thương vì bệnh đột ngột hoặc chấn thương, hãy gọi 119 trước.' }
  ],
  ko: [
    { t: 'p', text: '의료 코디네이트 서비스(진료 동행・통역, 전화 대행, 서류・검사 결과 설명)에 관한 표기입니다. 일본어판이 정본이며, 이 페이지는 참고 번역입니다.' },
    { t: 'h2', text: '서비스 제공자' },
    { t: 'p', text: 'Kurawise 운영자 즈싱(개인). 성명・주소・전화번호는 요청하시면 지체 없이 공개합니다.' },
    { t: 'h2', text: '연락처' },
    { t: 'p', text: `이메일: ${MAIL}` },
    { t: 'h2', text: '서비스 요금' },
    { t: 'ul', items: [
      '진료 동행・통역(대면): 3시간까지 15,000엔, 이후 1시간마다 4,000엔(대기 시간 포함)',
      '전화 대행(예약・문의): 1건 2,000엔(15분까지)',
      '서류・검사 결과 설명(번역): 1건 3,000엔부터(내용에 따라 사전 견적)',
      '처음 3분은 반값(모니터 가격)'
    ] },
    { t: 'h2', text: '요금 외에 고객이 부담하는 것' },
    { t: 'ul', items: [
      '교통비: 오사카시 내와 센슈 지역은 무료, 그 외 지역은 실비',
      '의료기관・약국에 내는 의료비・약값',
      '계좌 이체 수수료'
    ] },
    { t: 'h2', text: '결제 방법' },
    { t: 'p', text: '계좌 이체, PayPay, WeChat Pay, Alipay, 현금' },
    { t: 'h2', text: '결제 시기' },
    { t: 'p', text: '진료 동행: 당일, 종료 후. 전화 대행・서류 설명: 사전 결제.' },
    { t: 'h2', text: '서비스 제공 시기' },
    { t: 'p', text: '상의하여 정한 일시에 제공합니다. 전화 대행・서류 설명은 결제 확인 후 약속한 날짜까지 완료합니다.' },
    { t: 'h2', text: '취소・환불' },
    { t: 'ul', items: [
      '진료 동행: 2일 전까지 무료 취소, 전날은 요금의 50%, 당일은 100%를 받습니다.',
      '전화 대행・서류 설명: 착수 전 취소는 전액 환불, 착수 후에는 환불하지 않습니다.',
      '저희 사정으로 제공하지 못한 경우 전액 환불합니다.'
    ] },
    { t: 'h2', text: '주의' },
    { t: 'p', text: '본 서비스는 언어와 절차를 돕는 서비스입니다. 진단・치료・어느 과로 갈지 등 의료 판단은 하지 않습니다. 갑작스러운 질병이나 부상으로 구급차가 필요할 때는 먼저 119에 전화하세요.' }
  ]
};
