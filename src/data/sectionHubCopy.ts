// 各セクションのトップの文章（2026-10-23 決定）。日本語を基準に、各言語で自然な表現に訳している。
// title = 検索結果のタイトル、description = 検索結果の説明、intro = 見出しの下の説明。
// 見出し（h1）は sectionNames.ts のセクション名を使う。
import type { SiteLang } from './sectionNames';

type Copy = Record<SiteLang, string>;

// ── 日常会話（トップページ /）──
export const RESCUE_HUB: { title: Copy; description: Copy; catch: Copy; intro: Copy; method: Copy } = {
  title: {
    ja: '日本で使える日本語・場面別の会話集｜Kurawise',
    zh: '在日本用得上的日语・23个场景会话｜Kurawise',
    'zh-TW': '在日本用得上的日語・23個情境會話｜Kurawise',
    en: 'Daily Japanese for 23 Real Situations in Japan | Kurawise',
    ko: '일본에서 바로 쓰는 일본어 회화・23개 장면 | Kurawise',
    vi: 'Tiếng Nhật giao tiếp theo 23 tình huống thực tế | Kurawise'
  },
  description: {
    ja: '日本で暮らす人も、旅行で訪れる人も。病院・役所・住まい・空港・ホテル・温泉など、23の場面で実際に使われる日本語を、音声つきで練習できます。無料。',
    zh: '无论是在日本生活还是来日本旅行。医院、政府窗口、租房、机场、酒店、温泉等23个场景的真实日语对话，带音频跟读练习，完全免费。',
    'zh-TW': '不論是住在日本，還是來日本旅遊。醫院、區公所、租屋、機場、飯店、溫泉等23個情境的真實日語對話，附音檔跟讀練習，完全免費。',
    en: 'For people living in Japan and visitors alike. Practice the Japanese actually used in 23 situations—hospitals, city hall, housing, airports, hotels, hot springs and more—with audio. Free.',
    ko: '일본에 사는 분도, 여행으로 오는 분도. 병원・구청・집・공항・호텔・온천 등 23개 장면에서 실제로 쓰는 일본어를 음성과 함께 연습할 수 있습니다. 무료.',
    vi: 'Dành cho người sống ở Nhật và cả khách du lịch. Luyện tiếng Nhật thực tế trong 23 tình huống: bệnh viện, văn phòng hành chính, nhà ở, sân bay, khách sạn, suối nước nóng… có âm thanh. Miễn phí.'
  },
  catch: {
    ja: '日本で、その場で通じる日本語。',
    zh: '在日本，当场就能用上的日语。',
    'zh-TW': '在日本，當場就能派上用場的日語。',
    en: 'Japanese that works on the spot.',
    ko: '일본에서, 그 자리에서 바로 통하는 일본어.',
    vi: 'Tiếng Nhật dùng được ngay tại chỗ.'
  },
  intro: {
    ja: '病院、役所、部屋探しから、空港、ホテル、温泉まで。23の場面で実際に交わされる会話を、聞いて、まねして、声に出して身につけられます。',
    zh: '从医院、政府窗口、找房子，到机场、酒店、温泉。23个场景里日本人真实的对话，听一听、跟着说、说出口，自然就会了。',
    'zh-TW': '從醫院、區公所、找房子，到機場、飯店、溫泉。23個情境中日本人真實的對話，聽一聽、跟著說、說出口，自然就學會了。',
    en: 'From hospitals, city hall and apartment hunting to airports, hotels and hot springs. Listen to real conversations from 23 everyday situations, repeat them, and make them your own.',
    ko: '병원, 구청, 집 구하기부터 공항, 호텔, 온천까지. 23개 장면에서 실제로 오가는 대화를 듣고, 따라 하고, 직접 말하며 익힐 수 있습니다.',
    vi: 'Từ bệnh viện, văn phòng hành chính, tìm nhà, đến sân bay, khách sạn và suối nước nóng. Nghe, nhắc lại và tự nói những đoạn hội thoại thật trong 23 tình huống.'
  },
  method: {
    ja: '勉強するより、慣れること。日本人が実際に使う言い方を、音声に合わせて何度でも練習できます。',
    zh: '与其死记硬背，不如说到习惯。跟着音频反复练习日本人真正在用的说法。',
    'zh-TW': '與其死背，不如說到習慣。跟著音檔反覆練習日本人真正在用的說法。',
    en: "Don't just study—get used to it. Practice the phrases Japanese people actually use, along with the audio, as many times as you like.",
    ko: '공부하기보다 익숙해지기. 일본인이 실제로 쓰는 표현을 음성에 맞춰 몇 번이든 연습할 수 있습니다.',
    vi: 'Không chỉ học, mà là quen dần. Luyện theo âm thanh những câu người Nhật thật sự dùng, bao nhiêu lần cũng được.'
  }
};

// ── 病院＆医療（/medical/）──
export const MEDICAL_HUB: { title: Copy; description: Copy; intro: Copy } = {
  title: {
    ja: '日本の病院のかかり方・受診ガイド｜Kurawise',
    zh: '在日本怎么看病・就医指南｜Kurawise',
    'zh-TW': '在日本如何看病・就醫指南｜Kurawise',
    en: 'How to See a Doctor in Japan: A Step-by-Step Guide | Kurawise',
    ko: '일본에서 병원 가는 법・진료 가이드 | Kurawise',
    vi: 'Cách đi khám bệnh ở Nhật – Hướng dẫn từng bước | Kurawise'
  },
  description: {
    ja: '日本で病気やけがをしたときの受診の流れを、住んでいる人にも旅行中の人にもわかりやすく。救急車、受付、支払い、薬局、夜間の受診、症状の伝え方まで。',
    zh: '在日本生病或受伤时的就医流程，住在日本和来旅行的人都能看懂。叫救护车、挂号、结账、药局、夜间就医、怎么描述症状。',
    'zh-TW': '在日本生病或受傷時的就醫流程，住在日本和來旅遊的人都看得懂。叫救護車、掛號、結帳、藥局、夜間就醫、如何描述症狀。',
    en: 'What to do when you get sick or injured in Japan—for residents and travelers. Calling an ambulance, reception, payment, pharmacies, night clinics, and how to describe your symptoms.',
    ko: '일본에서 아프거나 다쳤을 때의 진료 순서를, 일본에 사는 분도 여행 중인 분도 알기 쉽게. 구급차, 접수, 결제, 약국, 야간 진료, 증상 설명하는 법까지.',
    vi: 'Cần làm gì khi bị ốm hoặc bị thương ở Nhật – dành cho người sống ở Nhật và khách du lịch. Gọi xe cấp cứu, tiếp nhận, thanh toán, nhà thuốc, khám ban đêm, cách mô tả triệu chứng.'
  },
  intro: {
    ja: '日本に住んでいる人も、旅行中の人も。救急車の呼び方、受付での伝え方、支払いと薬の受け取り、夜間の受診まで、日本の病院のかかり方が、順を追ってわかります。日本に住んで20年、医療の現場で通訳・同行をしている運営者が、内容を確認しています。言葉の不安が大きいときは、通訳・同行を依頼することもできます。',
    zh: '无论是住在日本，还是在日本旅行。从叫救护车、挂号时怎么说、结账和取药，到夜间就医，一步步看懂在日本怎么看病。内容由在日本生活20年、在医疗现场做翻译和陪诊的运营者亲自确认。如果担心语言沟通，也可以请人翻译、陪同。',
    'zh-TW': '不論是住在日本，還是在日本旅遊。從叫救護車、掛號時怎麼說、結帳和領藥，到夜間就醫，一步步看懂在日本如何看病。內容由在日本生活20年、在醫療現場擔任口譯與陪診的經營者親自確認。如果擔心語言溝通，也可以請人口譯、陪同。',
    en: "Whether you live in Japan or are just visiting, see step by step how to get medical care here: calling an ambulance, what to say at reception, paying and picking up medicine, and getting care at night. All content is checked by our operator, who has lived in Japan for 20 years and works as a medical interpreter and companion. If you're worried about the language barrier, you can also request an interpreter or companion.",
    ko: '일본에 사는 분도, 여행 중인 분도. 구급차 부르는 법, 접수할 때 하는 말, 진료비 결제와 약 받기, 야간 진료까지, 일본에서 병원을 이용하는 방법을 순서대로 알 수 있습니다. 일본에서 20년 동안 살며 의료 현장에서 통역・동행을 하고 있는 운영자가 내용을 확인했습니다. 언어가 걱정될 때는 통역・동행을 요청할 수도 있습니다.',
    vi: 'Dù bạn đang sống ở Nhật hay đang du lịch, bạn sẽ hiểu từng bước cách đi khám bệnh ở Nhật: gọi xe cấp cứu, nói gì ở quầy tiếp nhận, thanh toán và nhận thuốc, khám bệnh ban đêm. Nội dung được kiểm tra bởi người vận hành đã sống ở Nhật 20 năm và đang làm phiên dịch, đi cùng người bệnh tại cơ sở y tế. Nếu lo lắng về ngôn ngữ, bạn cũng có thể nhờ phiên dịch hoặc người đi cùng.'
  }
};

// ── 仕事＆ビザ（/career/）──
export const CAREER_HUB: { title: Copy; description: Copy; intro: Copy } = {
  title: {
    ja: '日本での就職・転職とビザのガイド｜Kurawise',
    zh: '在日本求职・转职与签证指南｜Kurawise',
    'zh-TW': '在日本求職・轉職與簽證指南｜Kurawise',
    en: 'Jobs, Career Changes & Visas in Japan: A Guide | Kurawise',
    ko: '일본 취업・이직과 비자 가이드 | Kurawise',
    vi: 'Tìm việc, chuyển việc và visa tại Nhật – Hướng dẫn | Kurawise'
  },
  description: {
    ja: '外国人が日本で就職・転職するときの戸惑いに、ひとつずつ答えます。履歴書と職務経歴書、面接、求人票と内定の確認、入社後の報連相、転職のときのビザ（在留資格）の手続きまで。',
    zh: '外国人在日本求职、转职时的困惑，一个一个来解答。履历书和职务经历书、面试、求人票和内定的确认、入职后的报连相，以及转职时的签证（在留资格）手续。',
    'zh-TW': '外國人在日本求職、轉職時的困惑，一個一個來解答。履歷書與職務經歷書、面試、徵才資訊與錄取的確認、進公司後的報連相，以及轉職時的簽證（在留資格）手續。',
    en: 'Answers, one by one, to what confuses foreigners looking for work or changing jobs in Japan: rirekisho and shokumu keirekisho, interviews, checking job postings and offers, hō-ren-sō at work, and visa (status of residence) procedures when changing jobs.',
    ko: '외국인이 일본에서 취업・이직할 때 헷갈리는 것들에 하나씩 답합니다. 이력서와 직무경력서, 면접, 구인 공고와 내정 확인, 입사 후 보렌소(報連相), 이직할 때의 비자(체류자격) 절차까지.',
    vi: 'Giải đáp từng điều người nước ngoài hay bối rối khi tìm việc, chuyển việc ở Nhật: rirekisho và shokumu keirekisho, phỏng vấn, kiểm tra tin tuyển dụng và lời mời làm việc, hō-ren-sō, và thủ tục visa (tư cách lưu trú) khi chuyển việc.'
  },
  intro: {
    ja: '日本で仕事を探す人、転職する人、働き始めた人へ。履歴書と職務経歴書の書き分け、面接での答え方、求人票の見方、内定後に確かめること、入社後の働き方、そして転職のときに必要なビザ（在留資格）の手続きまで。日本で働くときに戸惑いやすいことに、ひとつずつ答えます。',
    zh: '写给在日本找工作、准备转职、刚开始工作的人。履历书和职务经历书怎么分别写、面试怎么回答、怎么看求人票、拿到内定后要确认什么、入职后怎么工作，以及转职时需要办理的签证（在留资格）手续。在日本工作时容易困惑的问题，我们一个一个来解答。',
    'zh-TW': '寫給在日本找工作、準備轉職、剛開始工作的人。履歷書和職務經歷書怎麼分別寫、面試怎麼回答、怎麼看徵才資訊、拿到錄取後要確認什麼、進公司後怎麼工作，以及轉職時需要辦理的簽證（在留資格）手續。在日本工作時容易困惑的問題，我們一個一個來解答。',
    en: "For people looking for work in Japan, changing jobs, or just starting out. How to write a rirekisho versus a shokumu keirekisho, how to answer interview questions, how to read job postings, what to check after an offer, how to work once you've joined, and the visa (status of residence) procedures you need when changing jobs. We answer the questions that tend to confuse people working in Japan, one at a time.",
    ko: '일본에서 일자리를 찾는 분, 이직하는 분, 이제 막 일을 시작한 분께. 이력서와 직무경력서를 구분해서 쓰는 법, 면접에서 답하는 법, 구인 공고 보는 법, 내정 후 확인할 것, 입사 후 일하는 방식, 그리고 이직할 때 필요한 비자(체류자격) 절차까지. 일본에서 일할 때 헷갈리기 쉬운 것들에 하나씩 답합니다.',
    vi: 'Dành cho người đang tìm việc ở Nhật, chuẩn bị chuyển việc hoặc vừa bắt đầu đi làm. Cách viết riêng rirekisho và shokumu keirekisho, cách trả lời phỏng vấn, cách đọc tin tuyển dụng, những điều cần kiểm tra sau khi nhận lời mời làm việc, cách làm việc sau khi vào công ty, và thủ tục visa (tư cách lưu trú) cần làm khi chuyển việc. Chúng tôi lần lượt giải đáp từng điều dễ gây bối rối khi làm việc tại Nhật.'
  }
};

export function pick(copy: Copy, lang: string): string {
  return copy[lang as SiteLang] || copy.en;
}
