// プライバシーポリシー（/privacy/）の本文。0-B（2026-10-23 制定）。
// 日本語が正本。他の言語は参考訳（各言語のページの最後にその旨を書く）。
// 取得している情報を変えたとき（フォームの項目、ASPの導入など）は、ここを必ず直す。
import type { Block } from './aboutCopy';

type L = 'ja' | 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko';

const MAIL = '<a href="mailto:info@kurawise.com">info@kurawise.com</a>';
const GAOPT = '<a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">https://tools.google.com/dlpage/gaoptout</a>';
const PPC = '<a href="https://www.ppc.go.jp/" rel="noopener" target="_blank">個人情報保護委員会</a>';

export const PRIVACY_TITLES: Record<L, string> = {
  ja: 'プライバシーポリシー', zh: '隐私政策', 'zh-TW': '隱私權政策', en: 'Privacy Policy', vi: 'Chính sách quyền riêng tư', ko: '개인정보 처리방침'
};

export const PRIVACY_BODY: Record<L, Block[]> = {
  ja: [
    { t: 'p', text: 'Kurawise（運営者：智行。以下「当サイト」）は、利用者の個人情報を次のとおり取り扱います。' },
    { t: 'h2', text: '1. 取得する情報' },
    { t: 'p', text: '(1) 利用者が入力する情報' },
    { t: 'ul', items: [
      '医療コーディネートサービスの相談：お名前、連絡先、急ぎ度、相談内容（症状・病歴など、健康に関する情報を含むことがあります）',
      '仕事＆ビザの先行案内の登録：連絡先、知りたい内容',
      'メールでのお問い合わせ：メールアドレス、お問い合わせの内容'
    ] },
    { t: 'p', text: '(2) 自動で取得する情報' },
    { t: 'ul', items: [
      'アクセス解析（Google アナリティクス）：閲覧したページ、端末・ブラウザの種類、おおよその地域、Cookie などの識別子',
      'サーバーの記録（Cloudflare）：IPアドレス、アクセス日時など。不正なアクセスを防ぐために使います。'
    ] },
    { t: 'p', text: '(3) 端末の中だけに保存する情報：表示言語、読み上げの速さ、再生の方法などの設定は、利用者のブラウザの中に保存します。当サイトには送信されません。' },
    { t: 'h2', text: '2. 利用目的' },
    { t: 'ul', items: [
      'ご相談・お問い合わせへの返信と、サービスの提供',
      '先行案内や新しい内容のお知らせ（登録された方のみ）',
      'サイトの利用状況の分析と改善',
      '不正な利用の防止'
    ] },
    { t: 'h2', text: '3. 健康に関する情報について' },
    { t: 'p', text: '医療コーディネートサービスの相談で入力される健康に関する情報は、要配慮個人情報にあたります。当サイトは、相談フォームの同意の欄にチェックをいただいたうえで取得し、ご相談への対応のためだけに使います。受診の同行で医療機関に伝える内容は、ご本人の了承を得た範囲に限ります。' },
    { t: 'h2', text: '4. 第三者への提供' },
    { t: 'p', text: '法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。' },
    { t: 'h2', text: '5. 外部のサービスの利用' },
    { t: 'p', text: '当サイトは、次のサービスを利用しています。いずれも日本国外（米国）の事業者で、情報が国外のサーバーに保存されることがあります。' },
    { t: 'ul', items: [
      'Supabase（Supabase, Inc.、米国）：フォームの内容の保存',
      'Google アナリティクス（Google LLC、米国）：アクセス解析',
      'Gmail（Google LLC、米国）：お問い合わせメールの受信',
      'Cloudflare（Cloudflare, Inc.、米国）：サイトの配信、メールの転送'
    ] },
    { t: 'p', text: `米国の個人情報保護の制度は、${PPC}のウェブサイトで確認できます。` },
    { t: 'h2', text: '6. 外部への送信' },
    { t: 'p', text: '当サイトのページを開くと、利用者の端末から次の事業者に情報が送られます。' },
    { t: 'ul', items: [
      '送信先：Google LLC（Google アナリティクス）',
      '送信される情報：閲覧したページ、端末・ブラウザの情報、Cookie の識別子',
      '目的：アクセス解析',
      `止める方法：Google アナリティクス オプトアウト アドオン（${GAOPT}）`
    ] },
    { t: 'p', text: 'アフィリエイト広告を導入したときは、広告の事業者をここに追加します。' },
    { t: 'h2', text: '7. 安全管理と保存期間' },
    { t: 'p', text: '入力された情報は、閲覧できる人を運営者に限り、通信を暗号化して保管します。ご相談の内容は、対応が終わってから1年以内に削除します。' },
    { t: 'h2', text: '8. 開示・訂正・削除のご請求' },
    { t: 'p', text: `ご自身の情報の開示・訂正・削除・利用停止を希望される場合は、${MAIL} までご連絡ください。ご本人であることを確認したうえで対応します。` },
    { t: 'h2', text: '9. 改定' },
    { t: 'p', text: 'このポリシーは、必要に応じて改定します。改定後の内容は、このページに掲載した時点から有効です。' },
    { t: 'p', text: `制定日：2026年10月23日<br>運営者：智行／連絡先：${MAIL}` }
  ],
  zh: [
    { t: 'p', text: 'Kurawise（运营者：智行，以下称「本站」）按以下方式处理用户的个人信息。' },
    { t: 'h2', text: '1. 收集的信息' },
    { t: 'p', text: '(1) 用户填写的信息' },
    { t: 'ul', items: [
      '医疗协调服务的咨询：姓名、联系方式、紧急程度、咨询内容（可能包含症状、病史等与健康有关的信息）',
      '工作＆签证的抢先登记：联系方式、想了解的内容',
      '邮件咨询：邮箱地址、咨询内容'
    ] },
    { t: 'p', text: '(2) 自动收集的信息' },
    { t: 'ul', items: [
      '访问分析（Google Analytics）：浏览的页面、设备和浏览器类型、大致地区、Cookie 等识别信息',
      '服务器记录（Cloudflare）：IP 地址、访问时间等，用于防止不正当访问。'
    ] },
    { t: 'p', text: '(3) 只保存在你设备里的信息：显示语言、朗读速度、播放方式等设置，保存在你的浏览器里，不会发送给本站。' },
    { t: 'h2', text: '2. 使用目的' },
    { t: 'ul', items: [
      '回复咨询和问询，提供服务',
      '发送抢先通知和新内容通知（仅限登记的用户）',
      '分析和改进网站的使用情况',
      '防止不正当使用'
    ] },
    { t: 'h2', text: '3. 关于健康信息' },
    { t: 'p', text: '医疗协调服务咨询中填写的健康信息，在日本法律上属于「需特别注意的个人信息」（要配慮個人情報）。本站在你勾选咨询表单中的同意栏后才收集，并且只用于回复你的咨询。陪同就诊时告诉医疗机构的内容，仅限于你本人同意的范围。' },
    { t: 'h2', text: '4. 向第三方提供' },
    { t: 'p', text: '除法律规定的情况外，未经本人同意，不会向第三方提供。' },
    { t: 'h2', text: '5. 使用的外部服务' },
    { t: 'p', text: '本站使用以下服务。这些都是日本以外（美国）的企业，信息可能保存在日本以外的服务器上。' },
    { t: 'ul', items: [
      'Supabase（Supabase, Inc.，美国）：保存表单内容',
      'Google Analytics（Google LLC，美国）：访问分析',
      'Gmail（Google LLC，美国）：接收咨询邮件',
      'Cloudflare（Cloudflare, Inc.，美国）：网站发布、邮件转发'
    ] },
    { t: 'p', text: `美国的个人信息保护制度，可以在日本${PPC}的网站上查看。` },
    { t: 'h2', text: '6. 向外部发送的信息' },
    { t: 'p', text: '打开本站页面时，你的设备会向以下企业发送信息。' },
    { t: 'ul', items: [
      '发送对象：Google LLC（Google Analytics）',
      '发送的信息：浏览的页面、设备和浏览器信息、Cookie 识别信息',
      '目的：访问分析',
      `停止方法：Google Analytics 停用浏览器插件（${GAOPT}）`
    ] },
    { t: 'p', text: '今后引入联盟广告时，会在这里补充广告企业。' },
    { t: 'h2', text: '7. 安全管理和保存期限' },
    { t: 'p', text: '你填写的信息，只有运营者可以查看，并通过加密通信保存。咨询内容会在处理结束后1年以内删除。' },
    { t: 'h2', text: '8. 查阅、更正、删除的请求' },
    { t: 'p', text: `如果你希望查阅、更正、删除或停止使用自己的信息，请发邮件到 ${MAIL}。确认是本人后会进行处理。` },
    { t: 'h2', text: '9. 修改' },
    { t: 'p', text: '本政策会根据需要进行修改。修改后的内容，自刊登在本页面时起生效。' },
    { t: 'p', text: `制定日期：2026年10月23日<br>运营者：智行／联系方式：${MAIL}<br>本页以日文版为准，中文为参考译文。` }
  ],
  'zh-TW': [
    { t: 'p', text: 'Kurawise（營運者：智行，以下稱「本站」）依以下方式處理使用者的個人資料。' },
    { t: 'h2', text: '1. 蒐集的資料' },
    { t: 'p', text: '(1) 使用者填寫的資料' },
    { t: 'ul', items: [
      '醫療協調服務的諮詢：姓名、聯絡方式、緊急程度、諮詢內容（可能包含症狀、病史等與健康有關的資料）',
      '工作＆簽證的搶先登記：聯絡方式、想了解的內容',
      '電子郵件諮詢：電子郵件地址、諮詢內容'
    ] },
    { t: 'p', text: '(2) 自動蒐集的資料' },
    { t: 'ul', items: [
      '流量分析（Google Analytics）：瀏覽的頁面、裝置和瀏覽器類型、大致地區、Cookie 等識別資訊',
      '伺服器紀錄（Cloudflare）：IP 位址、存取時間等，用於防止不當存取。'
    ] },
    { t: 'p', text: '(3) 只儲存在你裝置裡的資料：顯示語言、朗讀速度、播放方式等設定，儲存在你的瀏覽器裡，不會傳送給本站。' },
    { t: 'h2', text: '2. 使用目的' },
    { t: 'ul', items: [
      '回覆諮詢和詢問，提供服務',
      '寄送搶先通知和新內容通知（僅限登記的使用者）',
      '分析和改善網站的使用情況',
      '防止不當使用'
    ] },
    { t: 'h2', text: '3. 關於健康資料' },
    { t: 'p', text: '醫療協調服務諮詢中填寫的健康資料，在日本法律上屬於「需特別注意的個人資料」（要配慮個人情報）。本站在你勾選諮詢表單中的同意欄後才蒐集，並且只用於回覆你的諮詢。陪同就診時告訴醫療機構的內容，僅限於你本人同意的範圍。' },
    { t: 'h2', text: '4. 提供給第三方' },
    { t: 'p', text: '除法律規定的情況外，未經本人同意，不會提供給第三方。' },
    { t: 'h2', text: '5. 使用的外部服務' },
    { t: 'p', text: '本站使用以下服務。這些都是日本以外（美國）的企業，資料可能儲存在日本以外的伺服器上。' },
    { t: 'ul', items: [
      'Supabase（Supabase, Inc.，美國）：儲存表單內容',
      'Google Analytics（Google LLC，美國）：流量分析',
      'Gmail（Google LLC，美國）：接收諮詢郵件',
      'Cloudflare（Cloudflare, Inc.，美國）：網站發布、郵件轉寄'
    ] },
    { t: 'p', text: `美國的個人資料保護制度，可以在日本${PPC}的網站上查看。` },
    { t: 'h2', text: '6. 傳送到外部的資料' },
    { t: 'p', text: '開啟本站頁面時，你的裝置會向以下企業傳送資料。' },
    { t: 'ul', items: [
      '傳送對象：Google LLC（Google Analytics）',
      '傳送的資料：瀏覽的頁面、裝置和瀏覽器資訊、Cookie 識別資訊',
      '目的：流量分析',
      `停止方法：Google Analytics 停用瀏覽器外掛程式（${GAOPT}）`
    ] },
    { t: 'p', text: '今後導入聯盟廣告時，會在這裡補充廣告企業。' },
    { t: 'h2', text: '7. 安全管理和保存期限' },
    { t: 'p', text: '你填寫的資料，只有營運者可以查看，並透過加密通訊保存。諮詢內容會在處理結束後1年以內刪除。' },
    { t: 'h2', text: '8. 查閱、更正、刪除的請求' },
    { t: 'p', text: `如果你希望查閱、更正、刪除或停止使用自己的資料，請寄信到 ${MAIL}。確認是本人後會進行處理。` },
    { t: 'h2', text: '9. 修改' },
    { t: 'p', text: '本政策會依需要進行修改。修改後的內容，自刊登在本頁面時起生效。' },
    { t: 'p', text: `制定日期：2026年10月23日<br>營運者：智行／聯絡方式：${MAIL}<br>本頁以日文版為準，中文為參考譯文。` }
  ],
  en: [
    { t: 'p', text: 'Kurawise (operated by Zhixing; "the Site") handles users\' personal information as follows.' },
    { t: 'h2', text: '1. Information we collect' },
    { t: 'p', text: '(1) Information you enter' },
    { t: 'ul', items: [
      'Medical coordination inquiries: name, contact details, urgency, and details of your inquiry (which may include health information such as symptoms or medical history)',
      'Early-access sign-up for Work & Visa: contact details and topics you are interested in',
      'Email inquiries: email address and the content of your message'
    ] },
    { t: 'p', text: '(2) Information collected automatically' },
    { t: 'ul', items: [
      'Analytics (Google Analytics): pages viewed, device and browser type, approximate region, and identifiers such as cookies',
      'Server logs (Cloudflare): IP address, access time, etc., used to prevent unauthorized access'
    ] },
    { t: 'p', text: '(3) Information stored only on your device: settings such as display language, reading speed and playback mode are stored in your browser and are not sent to the Site.' },
    { t: 'h2', text: '2. How we use it' },
    { t: 'ul', items: [
      'To reply to inquiries and provide our services',
      'To send early-access and new-content notices (only to those who signed up)',
      'To analyze and improve how the Site is used',
      'To prevent misuse'
    ] },
    { t: 'h2', text: '3. Health information' },
    { t: 'p', text: 'Health information entered in a medical coordination inquiry is "special care-required personal information" under Japanese law. We collect it only after you check the consent box on the inquiry form, and use it only to respond to your inquiry. When we accompany you to a medical visit, we share with the medical institution only what you have agreed to.' },
    { t: 'h2', text: '4. Sharing with third parties' },
    { t: 'p', text: 'We do not share your information with third parties without your consent, except where required by law.' },
    { t: 'h2', text: '5. External services we use' },
    { t: 'p', text: 'The Site uses the following services. All are operated by companies outside Japan (in the United States), and information may be stored on servers outside Japan.' },
    { t: 'ul', items: [
      'Supabase (Supabase, Inc., USA): storing form submissions',
      'Google Analytics (Google LLC, USA): analytics',
      'Gmail (Google LLC, USA): receiving inquiry emails',
      'Cloudflare (Cloudflare, Inc., USA): delivering the Site and forwarding email'
    ] },
    { t: 'p', text: 'Information on the US personal information protection system is available on the website of Japan\'s Personal Information Protection Commission.' },
    { t: 'h2', text: '6. Information sent to external parties' },
    { t: 'p', text: 'When you open a page on the Site, your device sends information to the following company.' },
    { t: 'ul', items: [
      'Recipient: Google LLC (Google Analytics)',
      'Information sent: pages viewed, device and browser information, cookie identifiers',
      'Purpose: analytics',
      `How to opt out: Google Analytics Opt-out Browser Add-on (${GAOPT})`
    ] },
    { t: 'p', text: 'If we introduce affiliate advertising, we will add the advertising companies here.' },
    { t: 'h2', text: '7. Security and retention' },
    { t: 'p', text: 'Only the operator can view the information you submit, and it is stored using encrypted communication. Inquiry details are deleted within one year after we finish responding.' },
    { t: 'h2', text: '8. Requests for disclosure, correction or deletion' },
    { t: 'p', text: `To request disclosure, correction, deletion or suspension of use of your information, please contact ${MAIL}. We will respond after confirming your identity.` },
    { t: 'h2', text: '9. Changes' },
    { t: 'p', text: 'We may revise this policy as needed. Revised content takes effect when it is posted on this page.' },
    { t: 'p', text: `Established: October 23, 2026<br>Operator: Zhixing / Contact: ${MAIL}<br>The Japanese version of this page is authoritative; this is a reference translation.` }
  ],
  vi: [
    { t: 'p', text: 'Kurawise (người vận hành: Zhixing, sau đây gọi là "trang web") xử lý thông tin cá nhân của người dùng như sau.' },
    { t: 'h2', text: '1. Thông tin chúng tôi thu thập' },
    { t: 'p', text: '(1) Thông tin bạn nhập' },
    { t: 'ul', items: [
      'Tư vấn dịch vụ điều phối y tế: họ tên, thông tin liên hệ, mức độ gấp, nội dung tư vấn (có thể bao gồm thông tin sức khỏe như triệu chứng, tiền sử bệnh)',
      'Đăng ký nhận thông báo sớm của Việc làm & visa: thông tin liên hệ, nội dung muốn tìm hiểu',
      'Liên hệ qua email: địa chỉ email, nội dung liên hệ'
    ] },
    { t: 'p', text: '(2) Thông tin thu thập tự động' },
    { t: 'ul', items: [
      'Phân tích truy cập (Google Analytics): trang đã xem, loại thiết bị và trình duyệt, khu vực gần đúng, mã nhận dạng như Cookie',
      'Nhật ký máy chủ (Cloudflare): địa chỉ IP, thời gian truy cập…, dùng để ngăn truy cập trái phép'
    ] },
    { t: 'p', text: '(3) Thông tin chỉ lưu trên thiết bị của bạn: các cài đặt như ngôn ngữ hiển thị, tốc độ đọc, cách phát được lưu trong trình duyệt của bạn và không gửi đến trang web.' },
    { t: 'h2', text: '2. Mục đích sử dụng' },
    { t: 'ul', items: [
      'Trả lời yêu cầu tư vấn, liên hệ và cung cấp dịch vụ',
      'Gửi thông báo sớm và thông báo nội dung mới (chỉ cho người đã đăng ký)',
      'Phân tích và cải thiện việc sử dụng trang web',
      'Ngăn chặn việc sử dụng trái phép'
    ] },
    { t: 'h2', text: '3. Về thông tin sức khỏe' },
    { t: 'p', text: 'Thông tin sức khỏe nhập khi tư vấn dịch vụ điều phối y tế là "thông tin cá nhân cần đặc biệt lưu ý" theo luật Nhật Bản. Chúng tôi chỉ thu thập sau khi bạn đánh dấu ô đồng ý trong mẫu tư vấn và chỉ dùng để trả lời yêu cầu của bạn. Khi đi cùng bạn đến khám, chúng tôi chỉ trao đổi với cơ sở y tế trong phạm vi bạn đã đồng ý.' },
    { t: 'h2', text: '4. Cung cấp cho bên thứ ba' },
    { t: 'p', text: 'Chúng tôi không cung cấp thông tin cho bên thứ ba khi chưa có sự đồng ý của bạn, trừ trường hợp pháp luật quy định.' },
    { t: 'h2', text: '5. Dịch vụ bên ngoài được sử dụng' },
    { t: 'p', text: 'Trang web sử dụng các dịch vụ sau. Tất cả đều là doanh nghiệp ngoài Nhật Bản (Hoa Kỳ), và thông tin có thể được lưu trên máy chủ ngoài Nhật Bản.' },
    { t: 'ul', items: [
      'Supabase (Supabase, Inc., Hoa Kỳ): lưu nội dung biểu mẫu',
      'Google Analytics (Google LLC, Hoa Kỳ): phân tích truy cập',
      'Gmail (Google LLC, Hoa Kỳ): nhận email liên hệ',
      'Cloudflare (Cloudflare, Inc., Hoa Kỳ): phân phối trang web, chuyển tiếp email'
    ] },
    { t: 'p', text: 'Thông tin về chế độ bảo vệ thông tin cá nhân của Hoa Kỳ có trên trang web của Ủy ban Bảo vệ Thông tin Cá nhân Nhật Bản.' },
    { t: 'h2', text: '6. Thông tin gửi ra bên ngoài' },
    { t: 'p', text: 'Khi bạn mở một trang của trang web, thiết bị của bạn sẽ gửi thông tin đến doanh nghiệp sau.' },
    { t: 'ul', items: [
      'Nơi nhận: Google LLC (Google Analytics)',
      'Thông tin được gửi: trang đã xem, thông tin thiết bị và trình duyệt, mã nhận dạng Cookie',
      'Mục đích: phân tích truy cập',
      `Cách dừng: tiện ích chặn Google Analytics (${GAOPT})`
    ] },
    { t: 'p', text: 'Khi áp dụng quảng cáo liên kết, chúng tôi sẽ bổ sung doanh nghiệp quảng cáo vào đây.' },
    { t: 'h2', text: '7. Quản lý an toàn và thời hạn lưu trữ' },
    { t: 'p', text: 'Chỉ người vận hành mới xem được thông tin bạn nhập, và thông tin được lưu qua kết nối mã hóa. Nội dung tư vấn sẽ được xóa trong vòng 1 năm sau khi xử lý xong.' },
    { t: 'h2', text: '8. Yêu cầu xem, sửa, xóa thông tin' },
    { t: 'p', text: `Nếu bạn muốn xem, sửa, xóa hoặc ngừng sử dụng thông tin của mình, hãy liên hệ ${MAIL}. Chúng tôi sẽ xử lý sau khi xác nhận đúng là bạn.` },
    { t: 'h2', text: '9. Sửa đổi' },
    { t: 'p', text: 'Chính sách này có thể được sửa đổi khi cần. Nội dung sau khi sửa có hiệu lực từ lúc đăng trên trang này.' },
    { t: 'p', text: `Ngày ban hành: 23/10/2026<br>Người vận hành: Zhixing / Liên hệ: ${MAIL}<br>Bản tiếng Nhật của trang này là bản chính thức; đây là bản dịch tham khảo.` }
  ],
  ko: [
    { t: 'p', text: 'Kurawise(운영자: 지싱, 이하 "본 사이트")는 이용자의 개인정보를 다음과 같이 처리합니다.' },
    { t: 'h2', text: '1. 수집하는 정보' },
    { t: 'p', text: '(1) 이용자가 입력하는 정보' },
    { t: 'ul', items: [
      '의료 코디네이션 서비스 상담: 이름, 연락처, 긴급도, 상담 내용(증상·병력 등 건강에 관한 정보가 포함될 수 있음)',
      '일 & 비자 사전 안내 등록: 연락처, 알고 싶은 내용',
      '이메일 문의: 이메일 주소, 문의 내용'
    ] },
    { t: 'p', text: '(2) 자동으로 수집하는 정보' },
    { t: 'ul', items: [
      '접속 분석(Google Analytics): 열람한 페이지, 기기·브라우저 종류, 대략적인 지역, 쿠키 등의 식별자',
      '서버 기록(Cloudflare): IP 주소, 접속 일시 등. 부정 접속을 막기 위해 사용합니다.'
    ] },
    { t: 'p', text: '(3) 기기 안에만 저장하는 정보: 표시 언어, 읽기 속도, 재생 방식 등의 설정은 이용자의 브라우저 안에 저장되며 본 사이트로 전송되지 않습니다.' },
    { t: 'h2', text: '2. 이용 목적' },
    { t: 'ul', items: [
      '상담·문의에 대한 답변과 서비스 제공',
      '사전 안내 및 새 콘텐츠 알림(등록한 분에 한함)',
      '사이트 이용 상황 분석과 개선',
      '부정 이용 방지'
    ] },
    { t: 'h2', text: '3. 건강에 관한 정보' },
    { t: 'p', text: '의료 코디네이션 서비스 상담에서 입력하는 건강 정보는 일본 법률상 "배려가 필요한 개인정보"(要配慮個人情報)에 해당합니다. 본 사이트는 상담 양식의 동의란에 체크하신 경우에만 이를 수집하며, 상담에 대응하는 목적으로만 사용합니다. 진료 동행 시 의료기관에 전달하는 내용은 본인이 동의한 범위로 한정합니다.' },
    { t: 'h2', text: '4. 제3자 제공' },
    { t: 'p', text: '법령에 따른 경우를 제외하고, 본인의 동의 없이 제3자에게 제공하지 않습니다.' },
    { t: 'h2', text: '5. 이용하는 외부 서비스' },
    { t: 'p', text: '본 사이트는 다음 서비스를 이용합니다. 모두 일본 밖(미국)의 사업자이며, 정보가 일본 밖의 서버에 저장될 수 있습니다.' },
    { t: 'ul', items: [
      'Supabase(Supabase, Inc., 미국): 양식 내용 저장',
      'Google Analytics(Google LLC, 미국): 접속 분석',
      'Gmail(Google LLC, 미국): 문의 메일 수신',
      'Cloudflare(Cloudflare, Inc., 미국): 사이트 배포, 메일 전달'
    ] },
    { t: 'p', text: '미국의 개인정보 보호 제도는 일본 개인정보보호위원회 웹사이트에서 확인할 수 있습니다.' },
    { t: 'h2', text: '6. 외부로 전송되는 정보' },
    { t: 'p', text: '본 사이트의 페이지를 열면 이용자의 기기에서 다음 사업자에게 정보가 전송됩니다.' },
    { t: 'ul', items: [
      '전송처: Google LLC(Google Analytics)',
      '전송되는 정보: 열람한 페이지, 기기·브라우저 정보, 쿠키 식별자',
      '목적: 접속 분석',
      `중지 방법: Google Analytics 차단 브라우저 부가기능(${GAOPT})`
    ] },
    { t: 'p', text: '제휴 광고를 도입하면 광고 사업자를 여기에 추가합니다.' },
    { t: 'h2', text: '7. 안전 관리와 보관 기간' },
    { t: 'p', text: '입력하신 정보는 운영자만 열람할 수 있으며, 암호화된 통신으로 보관합니다. 상담 내용은 대응이 끝난 뒤 1년 이내에 삭제합니다.' },
    { t: 'h2', text: '8. 열람·정정·삭제 요청' },
    { t: 'p', text: `본인 정보의 열람·정정·삭제·이용 정지를 원하시면 ${MAIL}로 연락해 주세요. 본인 확인 후 대응합니다.` },
    { t: 'h2', text: '9. 개정' },
    { t: 'p', text: '이 방침은 필요에 따라 개정합니다. 개정된 내용은 이 페이지에 게재한 시점부터 효력이 있습니다.' },
    { t: 'p', text: `제정일: 2026년 10월 23일<br>운영자: 지싱 / 연락처: ${MAIL}<br>이 페이지는 일본어판이 정본이며, 한국어는 참고 번역입니다.` }
  ]
};
