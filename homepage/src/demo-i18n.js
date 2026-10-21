// Chinese source text stays in index.html. Add matching Japanese and English
// phrases here when adding demo content. This module does not translate API data.
const phrases = `
我们在東北|東北で暮らそう|Together in Tohoku
東北地区中国学友会|東北地区中国留学生学友会|Tohoku Chinese Students and Scholars Association
搜索活动、二手、巴士、防灾、翻译……|イベント・中古品・バス・防災・翻訳を検索…|Search events, secondhand items, buses, safety, translation…
重要|重要|Important
龙舟赛报名中|ドラゴンボート大会 参加受付中|Dragon boat race registration open
新手友好。住宿、参赛费、餐饮由学友会支持。|初心者歓迎。宿泊・参加費・食事は学友会がサポートします。|Beginners welcome. Accommodation, entry fees and meals supported by CSSA.
立即报名|今すぐ申し込む|Register now
查看活动|イベントを見る|View events
应急|緊急情報|Emergency
暂无重大警报|重大な警報はありません|No major alerts
二手|中古品|Secondhand
23 件在售|23 点販売中|23 items for sale
匿名|匿名|Anonymous
立即求助|相談する|Get help
地图|マップ|Map
生活服务|生活サービス|Local services
便利功能入口|便利なサービス|Useful services
左右滑动|左右にスワイプ|Swipe sideways
日常生活|日常生活|Daily life
设备 / 巴士 / 美食|備品 / バス / グルメ|Equipment / Bus / Food
出行交通|交通・移動|Transport
租车 / 自行车|レンタカー / 自転車|Cars / Bicycles
学习科研|学習・研究|Study & research
翻译 / 沙龙|翻訳 / サロン|Translation / Talks
安全应急|安全・緊急対応|Safety & emergencies
防灾 / 求助|防災 / 相談|Disasters / Help
社区互助|コミュニティ|Community
二手 / 聊天室|中古品 / チャット|Secondhand / Chat
匿名求助|匿名相談|Anonymous help
AI 分流|AI による振り分け|AI triage
直接输入问题：手机卡、医院、心理压力、失联、签证、被骗……|相談内容を入力：SIM、病院、ストレス、安否確認、ビザ、詐欺など…|Describe your issue: SIM cards, hospitals, stress, missing persons, visas, scams…
AI 先查信息库|AI が情報を検索|AI checks the knowledge base
普通问题给入口|一般的な質問は案内|Guidance for everyday questions
复杂问题转人工|複雑な相談はスタッフへ|Complex issues go to staff
提交求助|相談を送信|Submit request
全部入口|すべてのサービス|All services
保留接口|連携予定|Integration planned
活动|イベント|Events
翻译|翻訳|Translation
租车|レンタカー|Car rental
聊天室|チャット|Chat
沙龙|サロン|Talks
防灾|防災|Disaster preparedness
二手精选|おすすめの中古品|Featured secondhand items
更多|もっと見る|More
折叠桌|折りたたみテーブル|Folding table
500 円 · 三条附近|500 円 · 三条周辺|¥500 · Near Sanjo
通学自行车|通学用自転車|Commuter bicycle
6,000 円 · 北山附近|6,000 円 · 北山周辺|¥6,000 · Near Kitayama
服务地图|サービスマップ|Service map
聚合|まとめ|Overview
巴士|バス|Bus
美食|グルメ|Food
设备|備品|Equipment
出行|移動|Travel
首页|ホーム|Home
服务|サービス|Services
求助|相談|Help
全部|すべて|All
入口|サービス|Service
进入|開く|Open
关闭|閉じる|Close
设备租赁|備品レンタル|Equipment rental
麦克风、投影、旗帜、桌游。|マイク、プロジェクター、旗、ボードゲーム。|Microphones, projectors, flags and board games.
校园巴士|キャンパスバス|Campus bus
校区巴士、末班车、雨雪提醒。|キャンパス間バス、最終便、雨雪情報。|Campus buses, last departures and rain/snow alerts.
美食地图|グルメマップ|Food map
按校区、价格、人数筛选。|キャンパス・価格・人数で絞り込み。|Filter by campus, price and group size.
租车攻略|レンタカーガイド|Car rental guide
保险、ETC、拼车、路线。|保険、ETC、相乗り、ルート。|Insurance, ETC, carpooling and routes.
租自行车|レンタサイクル|Bicycle rental
短租、二手、防盗登记。|短期レンタル、中古、防犯登録。|Short rentals, used bicycles and security registration.
维修点|修理店|Repair shops
自行车、手机、电脑维修。|自転車・スマートフォン・パソコンの修理。|Bicycle, phone and computer repairs.
翻译助手|翻訳サポート|Translation help
学校、医院、租房、邮件模板。|学校、病院、賃貸、メールの例文。|School, hospital, housing and email templates.
博协沙龙|博士会サロン|Research talks
报名、回放、讲者征集。|申込、アーカイブ、登壇者募集。|Registration, recordings and speaker invitations.
资料库|資料集|Knowledge base
新生、签证、奖学金 FAQ。|新入生・ビザ・奨学金 FAQ。|New student, visa and scholarship FAQs.
防灾天气|防災・天気|Weather & disaster alerts
地震、大雪、台风、停电。|地震、大雪、台風、停電。|Earthquakes, heavy snow, typhoons and power outages.
医院药局|病院・薬局|Hospitals & pharmacies
夜间急诊、就诊流程。|夜間救急、受診の流れ。|Night emergency care and consultation procedures.
领保失联|領事保護・安否確認|Consular & missing-person help
失联协助、紧急联系人。|安否確認サポート、緊急連絡先。|Missing-person assistance and emergency contacts.
二手平台|中古品マーケット|Secondhand marketplace
买卖、赠送、附近取货。|売買、譲渡、近隣で受取。|Buy, sell, give away and collect locally.
匿名聊天室|匿名チャット|Anonymous chat
树洞、互助、关键词风控。|悩み相談、助け合い、キーワード管理。|Sharing, mutual support and keyword moderation.
兴趣小组|趣味のグループ|Interest groups
桌游、徒步、厨艺、电影。|ボードゲーム、ハイキング、料理、映画。|Board games, hiking, cooking and films.
应急通知|緊急のお知らせ|Emergency notices
地震、大雪、台风、停电、领保提醒。|地震、大雪、台風、停電、領事保護のお知らせ。|Earthquake, snow, typhoon, power outage and consular notices.
家具、家电、自行车、教材。|家具、家電、自転車、教科書。|Furniture, appliances, bicycles and textbooks.
学校、医院、租房、车检、邮件模板。|学校、病院、賃貸、車検、メールの例文。|School, hospitals, housing, vehicle inspections and email templates.
攻略、保险、拼车、路线。|ガイド、保険、相乗り、ルート。|Guides, insurance, carpooling and routes.
发布、搜索、附近取货、认证。|出品、検索、近隣受取、認証。|Publish, search, local collection and verification.
讲座报名、回放、讲者征集。|講演申込、アーカイブ、登壇者募集。|Talk registration, recordings and speaker invitations.
防灾与天气|防災と天気|Disaster preparedness & weather
天气预警、避难所、地震指南。|気象警報、避難所、地震ガイド。|Weather alerts, shelters and earthquake guidance.
进入完整二手平台。|中古品マーケットを開きます。|Open the full secondhand marketplace.
500 円，三条附近自取。|500 円、三条周辺で受取。|¥500, collection near Sanjo.
6,000 円，可试骑。|6,000 円、試乗可能。|¥6,000, test rides available.
显示时刻表、末班车、雨雪提醒。|時刻表、最終便、雨雪情報を表示。|View timetables, last buses and rain/snow alerts.
美食点|飲食店|Food spot
价格、人数、营业时间。|価格、人数、営業時間。|Price, capacity and opening hours.
设备点|備品受取所|Equipment point
活动物资预约。|イベント備品の予約。|Reserve event equipment.
租车、自行车、维修点。|レンタカー、自転車、修理店。|Car rental, bicycles and repair shops.
避难所|避難所|Shelter
最近避难所和紧急联系人。|最寄りの避難所と緊急連絡先。|Nearest shelters and emergency contacts.
这里只保留入口，未来可接入对应表单、地图或子系统。|現在は案内のみです。今後フォーム・地図・各サービスと連携予定です。|Demo entry only; forms, maps or connected services can be added later.
Demo：搜索信息库、地图和功能入口|デモ：情報・マップ・サービスを検索|Demo: search knowledge, maps and services
Demo：跳转到子系统或小程序页面|デモ：関連サービスを開く|Demo: open the connected service
筛选：|絞り込み：|Filter: 
请先输入求助内容|相談内容を入力してください|Please enter your request first
`.trim().split('\n').map((row) => row.split('|'));

const dictionaries = {
  'zh-CN': new Map(phrases.map(([zh]) => [zh, zh])),
  ja: new Map(phrases.map(([zh, ja]) => [zh, ja])),
  en: new Map(phrases.map(([zh, , en]) => [zh, en])),
};
const storageKey = 'tohokucssa.language';
const records = new WeakMap();
const selector = document.getElementById('languageSelect');
let language = 'zh-CN';

function translate(source) {
  if (language === 'zh-CN') return source;
  const dictionary = dictionaries[language];
  const trimmed = source.trim();
  if (dictionary.has(trimmed)) return source.replace(trimmed, dictionary.get(trimmed));
  // Emoji labels and modal descriptions combine several source phrases.
  const keys = [...dictionary.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(keys.map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  return source.replace(pattern, (key) => dictionary.get(key));
}

function update(node, attribute) {
  const current = attribute ? node.getAttribute(attribute) : node.nodeValue;
  const key = attribute || 'text';
  const state = records.get(node) || {};
  const previous = state[key];
  const source = previous && previous.output === current ? previous.source : current;
  const output = translate(source);
  state[key] = { source, output };
  records.set(node, state);
  if (current !== output) {
    if (attribute) node.setAttribute(attribute, output);
    else node.nodeValue = output;
  }
}

function translatePage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    // Never translate user input, AI answers, or the language options themselves.
    if (!node.parentElement.closest('script, style, textarea, select, #result, [translate="no"]')) update(node);
  }
  document.querySelectorAll('[placeholder]').forEach((node) => update(node, 'placeholder'));
  document.title = translate('我们在東北');
  document.documentElement.lang = language;
}

// Dynamic service cards, modal content and toast messages also need translation.
const observer = new MutationObserver(() => {
  observer.disconnect();
  translatePage();
  observe();
});
function observe() {
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
}
function setLanguage(next) {
  language = Object.hasOwn(dictionaries, next) ? next : 'zh-CN';
  selector.value = language;
  observer.disconnect();
  translatePage();
  observe();
  try { localStorage.setItem(storageKey, language); } catch { /* Storage can be disabled. */ }
}

selector.addEventListener('change', () => setLanguage(selector.value));
let saved;
try { saved = localStorage.getItem(storageKey); } catch { /* Default to Chinese. */ }
setLanguage(saved || 'zh-CN');
