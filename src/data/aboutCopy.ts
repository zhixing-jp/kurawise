// 「Kurawise について」（/about/）と「広告について」（/ad-policy/）の本文。0-B（2026-10-23）。
// 日本語を基準に、各言語で自然に伝わる表現にしている。
// ページは単一URL：日本語の本文をHTMLに書き出し（検索エンジン向け）、ブラウザで利用者の言語に置き換える。
// ブロックの種類：h2（見出し）／p（段落）／ul（箇条書き。文字列の中の <a> はそのまま使う）／sections（5つのセクションの一覧）

export type Block =
  | { t: 'h2'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'sections'; items: { key: 'rescue' | 'medical' | 'career' | 'kurashi' | 'apps'; text: string }[] };

type L = 'ja' | 'zh' | 'zh-TW' | 'en' | 'vi' | 'ko';

const MAIL = '<a href="mailto:info@kurawise.com">info@kurawise.com</a>';

export const AD_TITLES: Record<L, string> = {
  ja: '広告について', zh: '关于广告', 'zh-TW': '關於廣告', en: 'Advertising Policy', vi: 'Về quảng cáo', ko: '광고 안내'
};

export const ABOUT_TITLES: Record<L, string> = {
  ja: 'Kurawise について', zh: '关于 Kurawise', 'zh-TW': '關於 Kurawise', en: 'About Kurawise', vi: 'Về Kurawise', ko: 'Kurawise 소개'
};


export const ABOUT_BODY: Record<L, Block[]> = {
  ja: [
    { t: 'p', text: 'Kurawise は、日本で暮らす人、日本を訪れる人が、困ったその場で開いて使える情報と道具のサイトです。' },
    { t: 'h2', text: '5つのセクション' },
    { t: 'sections', items: [
      { key: 'rescue', text: '病院、役所、部屋探しから、空港、ホテル、温泉まで。23の場面で日本人が実際に使う会話を、音声つきで練習できます。' },
      { key: 'medical', text: '救急車の呼び方、受付での伝え方、夜間の受診、薬局での買い方。症状を指さして伝えられる言葉の一覧もあります。' },
      { key: 'career', text: '就職・転職で戸惑いやすいことと、在留資格（ビザ）の手続き。' },
      { key: 'kurashi', text: '毎日の節約から、カード・携帯・銀行・送金・部屋の契約の選び方まで。（準備中）' },
      { key: 'apps', text: 'Kurawise が開発しているアプリのサポートページ。' }
    ] },
    { t: 'h2', text: 'はじまり' },
    { t: 'p', text: 'このサイトは、もともと一人のために作りました。日本語を勉強する時間も気力もなかった妻が、通勤の途中や空いた時間に、日本人が本当に使う言葉に触れられるようにするためです。同じものを必要としている人が日本にはたくさんいることに気づき、今の形になりました。' },
    { t: 'h2', text: '内容の確かめ方' },
    { t: 'ul', items: [
      '会話の文は、翻訳ソフトの出力ではなく、在日20年の運営者が実際の場面に照らして確認しています。',
      '制度・料金・電話番号は、公的機関の情報で確認し、確認した日を記事に載せていきます。',
      `誤りに気づいたら、${MAIL} までお知らせください。確認して直します。`
    ] },
    { t: 'h2', text: 'Kurawise がしないこと' },
    { t: 'ul', items: [
      '病気の診断や、受診すべきかどうかの判断はしません。急な病気やけがで救急車が必要なときは、119に電話してください。',
      '在留資格の申請書類の作成や、入管への提出の代行はしません。',
      '記事の内容は一般的な情報です。個別の判断は、医師・専門家・公的機関に確認してください。'
    ] },
    { t: 'h2', text: '運営者' },
    { t: 'ul', items: [
      'サイト名：Kurawise',
      '運営者：智行（在日20年。医療機関での通訳・受診の同行に携わる）',
      '所在地：大阪府',
      `連絡先：${MAIL}`,
      `関連ページ：<a href="/privacy/">プライバシーポリシー</a>`
    ] }
  ],
  zh: [
    { t: 'p', text: 'Kurawise 是为在日本生活、来日本旅行的人准备的网站：遇到困难的那一刻，打开就能用上的信息和工具。' },
    { t: 'h2', text: '五个板块' },
    { t: 'sections', items: [
      { key: 'rescue', text: '从医院、政府窗口、找房子，到机场、酒店、温泉。23个场景里日本人真实会说的对话，附音频，可以跟读练习。' },
      { key: 'medical', text: '怎么叫救护车、挂号时怎么说、夜间怎么看病、药店怎么买药。还有可以指给医生看的症状词库。' },
      { key: 'career', text: '求职、转职时容易困惑的地方，以及在留资格（签证）的手续。' },
      { key: 'kurashi', text: '从日常省钱，到信用卡、手机、银行、汇款、租房合同怎么选。（准备中）' },
      { key: 'apps', text: 'Kurawise 开发的应用的支持页面。' }
    ] },
    { t: 'h2', text: '网站的由来' },
    { t: 'p', text: '这个网站，最早是为了一个人做的——我太太。她没有时间、也没有精力坐下来学日语，我们希望她在通勤路上、闲下来的时候，也能接触到日本人真正会说的日语。后来发现，在日本需要同样东西的人很多，于是就有了现在的样子。' },
    { t: 'h2', text: '内容怎么核实' },
    { t: 'ul', items: [
      '对话不是翻译软件生成的，由在日本生活了20年的运营者，对照真实场景逐句确认。',
      '制度、费用、电话号码，以公共机构的信息为准进行确认，并会在文章里注明确认日期。',
      `如果你发现错误，请发邮件到 ${MAIL} 告诉我们，确认后会修改。`
    ] },
    { t: 'h2', text: 'Kurawise 不做的事' },
    { t: 'ul', items: [
      '不做疾病诊断，也不判断你是否需要去医院。突发急病或受伤需要救护车时，请拨打119。',
      '不代写在留资格的申请材料，也不代为向入管局提交。',
      '文章内容是一般性信息。具体情况请向医生、专业人士或公共机构确认。'
    ] },
    { t: 'h2', text: '运营者' },
    { t: 'ul', items: [
      '网站名称：Kurawise',
      '运营者：智行（在日本生活20年，从事医疗机构的翻译和陪同就诊工作）',
      '所在地：大阪府',
      `联系方式：${MAIL}`,
      `相关页面：<a href="/privacy/">隐私政策</a>`
    ] }
  ],
  'zh-TW': [
    { t: 'p', text: 'Kurawise 是為在日本生活、來日本旅行的人準備的網站：遇到困難的那一刻，打開就能用上的資訊和工具。' },
    { t: 'h2', text: '五個板塊' },
    { t: 'sections', items: [
      { key: 'rescue', text: '從醫院、區公所窗口、找房子，到機場、飯店、溫泉。23個情境裡日本人真的會說的對話，附音檔，可以跟讀練習。' },
      { key: 'medical', text: '怎麼叫救護車、掛號時怎麼說、夜間怎麼看病、藥局怎麼買藥。還有可以指給醫生看的症狀詞庫。' },
      { key: 'career', text: '求職、轉職時容易困惑的地方，以及在留資格（簽證）的手續。' },
      { key: 'kurashi', text: '從日常省錢，到信用卡、手機、銀行、匯款、租屋合約怎麼選。（準備中）' },
      { key: 'apps', text: 'Kurawise 開發的應用程式的支援頁面。' }
    ] },
    { t: 'h2', text: '網站的由來' },
    { t: 'p', text: '這個網站，最早是為了一個人做的——我太太。她沒有時間、也沒有精力坐下來學日語，我們希望她在通勤路上、閒下來的時候，也能接觸到日本人真正會說的日語。後來發現，在日本需要同樣東西的人很多，於是就有了現在的樣子。' },
    { t: 'h2', text: '內容怎麼核實' },
    { t: 'ul', items: [
      '對話不是翻譯軟體生成的，由在日本生活了20年的營運者，對照真實情境逐句確認。',
      '制度、費用、電話號碼，以公家機關的資訊為準進行確認，並會在文章裡註明確認日期。',
      `如果你發現錯誤，請寄信到 ${MAIL} 告訴我們，確認後會修改。`
    ] },
    { t: 'h2', text: 'Kurawise 不做的事' },
    { t: 'ul', items: [
      '不做疾病診斷，也不判斷你是否需要去醫院。突發急病或受傷需要救護車時，請撥打119。',
      '不代寫在留資格的申請文件，也不代為向入管局提交。',
      '文章內容是一般性資訊。具體情況請向醫生、專業人士或公家機關確認。'
    ] },
    { t: 'h2', text: '營運者' },
    { t: 'ul', items: [
      '網站名稱：Kurawise',
      '營運者：智行（在日本生活20年，從事醫療機構的翻譯和陪同就診工作）',
      '所在地：大阪府',
      `聯絡方式：${MAIL}`,
      `相關頁面：<a href="/privacy/">隱私權政策</a>`
    ] }
  ],
  en: [
    { t: 'p', text: 'Kurawise is a site of information and tools for people living in or visiting Japan — something you can open and use right when you run into trouble.' },
    { t: 'h2', text: 'Five sections' },
    { t: 'sections', items: [
      { key: 'rescue', text: 'From hospitals, city offices and apartment hunting to airports, hotels and hot springs: real conversations Japanese people use in 23 situations, with audio to practice along.' },
      { key: 'medical', text: 'How to call an ambulance, what to say at reception, seeing a doctor at night, buying medicine at a pharmacy — plus a symptom list you can point to.' },
      { key: 'career', text: 'Common confusion when job hunting or changing jobs in Japan, and visa (status of residence) procedures.' },
      { key: 'kurashi', text: 'From everyday savings to choosing cards, phone plans, banks, money transfers and rental contracts. (Coming soon)' },
      { key: 'apps', text: 'Support pages for the apps Kurawise develops.' }
    ] },
    { t: 'h2', text: 'How it started' },
    { t: 'p', text: 'This site was first made for one person — my wife. She had neither the time nor the energy to study Japanese, so we wanted her to come across the Japanese people really use during her commute or spare moments. We soon realized many people in Japan needed the same thing, and that is how the site became what it is today.' },
    { t: 'h2', text: 'How we check the content' },
    { t: 'ul', items: [
      'The phrases are not machine translations. The operator, who has lived in Japan for 20 years, checks each one against real situations.',
      'Systems, costs and phone numbers are checked against official sources, and we are adding the date of each check to the articles.',
      `If you spot a mistake, please let us know at ${MAIL}. We will check and correct it.`
    ] },
    { t: 'h2', text: 'What Kurawise does not do' },
    { t: 'ul', items: [
      'We do not diagnose illness or decide whether you should see a doctor. If you need an ambulance for a sudden illness or injury, call 119.',
      'We do not prepare residence status applications or submit them to the immigration office for you.',
      'Articles provide general information. For your own situation, please check with a doctor, a professional or the relevant public office.'
    ] },
    { t: 'h2', text: 'Operator' },
    { t: 'ul', items: [
      'Site: Kurawise',
      'Operator: Zhixing (has lived in Japan for 20 years; works as an interpreter and companion for hospital visits)',
      'Location: Osaka, Japan',
      `Contact: ${MAIL}`,
      `Related: <a href="/privacy/">Privacy Policy</a>`
    ] }
  ],
  vi: [
    { t: 'p', text: 'Kurawise là trang thông tin và công cụ dành cho người sống hoặc du lịch tại Nhật — mở ra là dùng được ngay khi bạn gặp khó khăn.' },
    { t: 'h2', text: '5 chuyên mục' },
    { t: 'sections', items: [
      { key: 'rescue', text: 'Từ bệnh viện, cơ quan hành chính, tìm nhà đến sân bay, khách sạn, suối nước nóng: hội thoại người Nhật thực sự dùng trong 23 tình huống, có âm thanh để luyện nói theo.' },
      { key: 'medical', text: 'Cách gọi xe cứu thương, cách nói ở quầy tiếp nhận, đi khám ban đêm, mua thuốc ở nhà thuốc — kèm danh sách triệu chứng để chỉ cho bác sĩ.' },
      { key: 'career', text: 'Những điều dễ bối rối khi xin việc, chuyển việc tại Nhật và thủ tục visa (tư cách lưu trú).' },
      { key: 'kurashi', text: 'Từ tiết kiệm hằng ngày đến cách chọn thẻ, điện thoại, ngân hàng, chuyển tiền và hợp đồng thuê nhà. (Sắp ra mắt)' },
      { key: 'apps', text: 'Trang hỗ trợ cho các ứng dụng do Kurawise phát triển.' }
    ] },
    { t: 'h2', text: 'Khởi đầu' },
    { t: 'p', text: 'Trang web này ban đầu được làm cho một người — vợ tôi. Cô ấy không có thời gian cũng không có sức để ngồi học tiếng Nhật, nên chúng tôi muốn cô ấy được tiếp xúc với tiếng Nhật người Nhật thực sự dùng trên đường đi làm hay lúc rảnh. Sau đó chúng tôi nhận ra có rất nhiều người ở Nhật cũng cần điều tương tự, và trang web trở thành như ngày nay.' },
    { t: 'h2', text: 'Cách chúng tôi kiểm tra nội dung' },
    { t: 'ul', items: [
      'Các câu hội thoại không phải do phần mềm dịch tạo ra. Người vận hành, đã sống ở Nhật 20 năm, kiểm tra từng câu theo tình huống thực tế.',
      'Chế độ, chi phí, số điện thoại được kiểm tra theo thông tin của cơ quan công, và chúng tôi sẽ ghi ngày kiểm tra trong bài viết.',
      `Nếu bạn phát hiện lỗi, hãy báo cho chúng tôi qua ${MAIL}. Chúng tôi sẽ kiểm tra và sửa.`
    ] },
    { t: 'h2', text: 'Những điều Kurawise không làm' },
    { t: 'ul', items: [
      'Chúng tôi không chẩn đoán bệnh và không quyết định bạn có cần đi khám hay không. Nếu cần xe cứu thương vì bệnh đột ngột hoặc chấn thương, hãy gọi 119.',
      'Chúng tôi không soạn hồ sơ xin tư cách lưu trú và không nộp thay cho bạn tại Cục Xuất nhập cảnh.',
      'Nội dung bài viết là thông tin chung. Với trường hợp cụ thể, hãy hỏi bác sĩ, chuyên gia hoặc cơ quan công.'
    ] },
    { t: 'h2', text: 'Người vận hành' },
    { t: 'ul', items: [
      'Trang web: Kurawise',
      'Người vận hành: Zhixing (sống ở Nhật 20 năm; làm phiên dịch và đi cùng người bệnh đến khám)',
      'Địa điểm: Osaka, Nhật Bản',
      `Liên hệ: ${MAIL}`,
      `Trang liên quan: <a href="/privacy/">Chính sách quyền riêng tư</a>`
    ] }
  ],
  ko: [
    { t: 'p', text: 'Kurawise는 일본에 살거나 일본을 찾은 사람이 곤란한 그 순간에 열어서 바로 쓸 수 있는 정보와 도구 사이트입니다.' },
    { t: 'h2', text: '5개 섹션' },
    { t: 'sections', items: [
      { key: 'rescue', text: '병원, 관공서, 집 구하기부터 공항, 호텔, 온천까지. 23개 상황에서 일본인이 실제로 쓰는 대화를 음성과 함께 따라 말하며 연습할 수 있습니다.' },
      { key: 'medical', text: '구급차 부르는 법, 접수에서 하는 말, 야간 진료, 약국에서 약 사는 법. 손가락으로 가리켜 증상을 전할 수 있는 목록도 있습니다.' },
      { key: 'career', text: '일본에서 취업·이직할 때 헷갈리기 쉬운 점과 비자(체류 자격) 수속.' },
      { key: 'kurashi', text: '일상 속 절약부터 카드·휴대폰·은행·송금·임대 계약 고르는 법까지. (준비 중)' },
      { key: 'apps', text: 'Kurawise가 개발한 앱의 지원 페이지.' }
    ] },
    { t: 'h2', text: '시작' },
    { t: 'p', text: '이 사이트는 원래 한 사람을 위해 만들었습니다. 바로 제 아내입니다. 일본어를 공부할 시간도 기력도 없던 아내가 출퇴근길이나 짬이 날 때 일본인이 실제로 쓰는 말을 접할 수 있게 하고 싶었습니다. 일본에는 같은 것이 필요한 사람이 많다는 것을 알게 되어 지금의 모습이 되었습니다.' },
    { t: 'h2', text: '내용을 확인하는 방법' },
    { t: 'ul', items: [
      '대화문은 번역 프로그램의 결과물이 아니라, 일본에서 20년을 산 운영자가 실제 상황에 비추어 확인한 것입니다.',
      '제도·비용·전화번호는 공공기관의 정보로 확인하고, 확인한 날짜를 기사에 적어 나가겠습니다.',
      `잘못된 내용을 발견하시면 ${MAIL}로 알려 주세요. 확인한 뒤 고치겠습니다.`
    ] },
    { t: 'h2', text: 'Kurawise가 하지 않는 것' },
    { t: 'ul', items: [
      '병을 진단하거나 진료를 받아야 할지 판단하지 않습니다. 갑작스러운 병이나 부상으로 구급차가 필요할 때는 119에 전화하세요.',
      '체류 자격 신청 서류를 작성하거나 출입국재류관리청에 대신 제출하지 않습니다.',
      '기사 내용은 일반적인 정보입니다. 개별 상황은 의사·전문가·공공기관에 확인하세요.'
    ] },
    { t: 'h2', text: '운영자' },
    { t: 'ul', items: [
      '사이트: Kurawise',
      '운영자: 지싱(Zhixing, 일본 거주 20년. 의료기관 통역과 진료 동행을 하고 있음)',
      '소재지: 일본 오사카부',
      `연락처: ${MAIL}`,
      `관련 페이지: <a href="/privacy/">개인정보 처리방침</a>`
    ] }
  ]
};

export const AD_BODY: Record<L, Block[]> = {
  ja: [
    { t: 'p', text: 'Kurawise は、運営を続けるために、アフィリエイト広告（成果報酬型の広告）を利用することがあります。記事の中のリンクの一部は広告で、そのリンクから申し込みや購入があると、運営者が報酬を受け取ることがあります。利用者の支払う金額が増えることはありません。' },
    { t: 'h2', text: '広告の表示' },
    { t: 'ul', items: [
      '広告を含むページには、ページの最初に「このページには広告が含まれます」と表示します。',
      '広告のリンクの近くには「PR」と表示します。'
    ] },
    { t: 'h2', text: '紹介の基準' },
    { t: 'ul', items: [
      '申し込める条件（在留カードで申し込めるか、日本語が必要かなど）を確認してから紹介します。',
      '報酬の有無や金額によって、評価や順番を変えません。',
      'よい点だけでなく、注意する点も書きます。'
    ] },
    { t: 'h2', text: '広告を載せるセクション' },
    { t: 'p', text: '広告を載せるのは「暮らし＆お金の知恵」と「アプリ」のセクションだけです。「日常会話」「病院＆医療」「仕事＆ビザ」には広告を載せません。命や在留に関わる判断、言葉を身につけるための内容は、報酬と切り離します。' },
    { t: 'p', text: `誤りや気になる表現があれば、${MAIL} までお知らせください。` }
  ],
  zh: [
    { t: 'p', text: '为了让网站持续运营，Kurawise 有时会使用联盟广告（按成果付费的广告）。文章里的部分链接是广告，如果你通过这些链接申请或购买，运营者可能会获得报酬。你需要支付的金额不会因此增加。' },
    { t: 'h2', text: '广告的标示' },
    { t: 'ul', items: [
      '含有广告的页面，会在页面开头标示「本页含有广告」。',
      '广告链接旁边会标示「PR」。'
    ] },
    { t: 'h2', text: '推荐的标准' },
    { t: 'ul', items: [
      '先确认申请条件（能否用在留卡申请、是否需要日语等），再进行介绍。',
      '不会因为有无报酬或报酬多少，而改变评价和排序。',
      '不只写优点，也会写需要注意的地方。'
    ] },
    { t: 'h2', text: '放广告的板块' },
    { t: 'p', text: '只有「生活＆金钱智慧」和「应用」板块会放广告。「日常会话」「就医＆医疗」「工作＆签证」不放广告。关系到生命和在留的判断、帮助你学会日语的内容，都与报酬分开。' },
    { t: 'p', text: `如果发现错误或不妥的表达，请发邮件到 ${MAIL} 告诉我们。` }
  ],
  'zh-TW': [
    { t: 'p', text: '為了讓網站持續營運，Kurawise 有時會使用聯盟廣告（按成果付費的廣告）。文章裡的部分連結是廣告，如果你透過這些連結申請或購買，營運者可能會獲得報酬。你需要支付的金額不會因此增加。' },
    { t: 'h2', text: '廣告的標示' },
    { t: 'ul', items: [
      '含有廣告的頁面，會在頁面開頭標示「本頁含有廣告」。',
      '廣告連結旁邊會標示「PR」。'
    ] },
    { t: 'h2', text: '推薦的標準' },
    { t: 'ul', items: [
      '先確認申請條件（能否用在留卡申請、是否需要日語等），再進行介紹。',
      '不會因為有無報酬或報酬多少，而改變評價和排序。',
      '不只寫優點，也會寫需要注意的地方。'
    ] },
    { t: 'h2', text: '放廣告的板塊' },
    { t: 'p', text: '只有「生活＆金錢智慧」和「應用程式」板塊會放廣告。「日常會話」「就醫＆醫療」「工作＆簽證」不放廣告。關係到生命和在留的判斷、幫助你學會日語的內容，都與報酬分開。' },
    { t: 'p', text: `如果發現錯誤或不妥的表達，請寄信到 ${MAIL} 告訴我們。` }
  ],
  en: [
    { t: 'p', text: 'To keep the site running, Kurawise may use affiliate advertising (performance-based ads). Some links in articles are ads, and if you sign up or buy through them, the operator may receive a commission. This never increases the amount you pay.' },
    { t: 'h2', text: 'How ads are labeled' },
    { t: 'ul', items: [
      'Pages that contain ads say "This page contains ads" at the top.',
      'Ad links are marked "PR" next to them.'
    ] },
    { t: 'h2', text: 'How we choose what to introduce' },
    { t: 'ul', items: [
      'We check the application requirements first (for example, whether you can apply with a residence card, or whether Japanese is required).',
      'Whether a link pays a commission, and how much, never changes our evaluation or ranking.',
      'We write about the drawbacks as well as the good points.'
    ] },
    { t: 'h2', text: 'Where ads appear' },
    { t: 'p', text: 'Ads appear only in the "Smart Living & Money" and "Apps" sections. "Daily Japanese", "Health & Care" and "Work & Visa" carry no ads. Decisions about your health and residence status, and content for learning Japanese, are kept separate from commissions.' },
    { t: 'p', text: `If you notice an error or a problematic expression, please let us know at ${MAIL}.` }
  ],
  vi: [
    { t: 'p', text: 'Để duy trì hoạt động, Kurawise có thể sử dụng quảng cáo liên kết (quảng cáo trả phí theo kết quả). Một số liên kết trong bài viết là quảng cáo; nếu bạn đăng ký hoặc mua qua các liên kết đó, người vận hành có thể nhận được hoa hồng. Số tiền bạn phải trả không vì thế mà tăng lên.' },
    { t: 'h2', text: 'Cách ghi chú quảng cáo' },
    { t: 'ul', items: [
      'Trang có quảng cáo sẽ ghi "Trang này có chứa quảng cáo" ở đầu trang.',
      'Bên cạnh liên kết quảng cáo sẽ ghi "PR".'
    ] },
    { t: 'h2', text: 'Tiêu chí giới thiệu' },
    { t: 'ul', items: [
      'Chúng tôi kiểm tra điều kiện đăng ký trước (ví dụ có đăng ký được bằng thẻ cư trú không, có cần tiếng Nhật không) rồi mới giới thiệu.',
      'Việc có hoa hồng hay không, và nhiều hay ít, không làm thay đổi đánh giá hay thứ tự.',
      'Chúng tôi viết cả điểm cần lưu ý, không chỉ điểm tốt.'
    ] },
    { t: 'h2', text: 'Chuyên mục có quảng cáo' },
    { t: 'p', text: 'Quảng cáo chỉ xuất hiện ở chuyên mục "Sống & tiêu khéo" và "Ứng dụng". Các chuyên mục "Tiếng Nhật giao tiếp", "Khám bệnh" và "Việc làm & visa" không có quảng cáo. Những quyết định liên quan đến sức khỏe, tư cách lưu trú và nội dung học tiếng Nhật được tách biệt khỏi hoa hồng.' },
    { t: 'p', text: `Nếu bạn thấy lỗi hoặc cách diễn đạt chưa phù hợp, hãy báo cho chúng tôi qua ${MAIL}.` }
  ],
  ko: [
    { t: 'p', text: 'Kurawise는 사이트 운영을 이어가기 위해 제휴 광고(성과 보수형 광고)를 이용할 수 있습니다. 기사 속 링크 중 일부는 광고이며, 그 링크를 통해 신청하거나 구매하면 운영자가 보수를 받을 수 있습니다. 이로 인해 이용자가 내는 금액이 늘어나지는 않습니다.' },
    { t: 'h2', text: '광고 표시' },
    { t: 'ul', items: [
      '광고가 포함된 페이지는 맨 위에 "이 페이지에는 광고가 포함되어 있습니다"라고 표시합니다.',
      '광고 링크 옆에는 "PR"이라고 표시합니다.'
    ] },
    { t: 'h2', text: '소개 기준' },
    { t: 'ul', items: [
      '신청 조건(재류카드로 신청할 수 있는지, 일본어가 필요한지 등)을 먼저 확인한 뒤 소개합니다.',
      '보수의 유무나 금액에 따라 평가나 순서를 바꾸지 않습니다.',
      '좋은 점뿐 아니라 주의할 점도 적습니다.'
    ] },
    { t: 'h2', text: '광고를 싣는 섹션' },
    { t: 'p', text: '광고는 「생활 & 돈의 지혜」와 「앱」 섹션에만 싣습니다. 「일본어 회화」, 「병원 & 의료」, 「일 & 비자」에는 광고를 싣지 않습니다. 생명과 체류에 관한 판단, 일본어를 익히기 위한 내용은 보수와 분리합니다.' },
    { t: 'p', text: `잘못된 내용이나 신경 쓰이는 표현이 있으면 ${MAIL}로 알려 주세요.` }
  ]
};
