/* 鬼滅之刃 英語修行 — 關卡資料（20 關）
   每關：10 例句(各配圖) + 10 單字 + 文法說明 + 20 題題庫(抽10題)
   sentences[].img 對應 covers/Lxx_syy.jpg（由例句英文生成）
   bank[].cat: "g"=文法題, "v"=單字題
*/
const LEVELS = [
/* ===== 1 ===== */ {
  emoji:"🪵", rank:"一般現在式", cover:"covers/cover01.png",
  title:"賣炭的少年 The Charcoal Seller",
  focus:"文法焦點：一般現在式 Simple Present（習慣與事實）",
  sentences:[
    {en:"Tanjiro lives with his big family in the snowy mountains.",zh:"炭治郎和他的大家庭住在白雪皚皚的山上。",img:"covers/L01_s01.jpg"},
    {en:"Every morning he wakes up before the sun rises.",zh:"每天早晨，他在太陽升起前就起床。",img:"covers/L01_s02.jpg"},
    {en:"He carries heavy charcoal down the mountain to the town.",zh:"他把沉重的木炭背下山到鎮上。",img:"covers/L01_s03.jpg"},
    {en:"He sells the charcoal to the kind people there.",zh:"他把木炭賣給那裡善良的人們。",img:"covers/L01_s04.jpg"},
    {en:"His mother cooks warm food for the children.",zh:"他的母親為孩子們煮溫暖的食物。",img:"covers/L01_s05.jpg"},
    {en:"Nezuko always takes care of her younger brothers and sisters.",zh:"禰豆子總是照顧弟弟妹妹們。",img:"covers/L01_s06.jpg"},
    {en:"The family does not have much money.",zh:"這個家庭沒有很多錢。",img:"covers/L01_s07.jpg"},
    {en:"But they feel happy, and they love each other.",zh:"但他們覺得幸福，而且彼此相愛。",img:"covers/L01_s08.jpg"},
    {en:"Tanjiro often smiles at everyone he meets.",zh:"炭治郎常對遇見的每個人微笑。",img:"covers/L01_s09.jpg"},
    {en:"People in the town trust this honest boy.",zh:"鎮上的人都信任這個誠實的男孩。",img:"covers/L01_s10.jpg"}
  ],
  vocab:[
    {w:"charcoal",pos:"n.",d:"木炭"},{w:"carry",pos:"v.",d:"搬運、攜帶"},
    {w:"sell",pos:"v.",d:"賣（過去 sold）"},{w:"mountain",pos:"n.",d:"山"},
    {w:"family",pos:"n.",d:"家庭、家人"},{w:"poor",pos:"adj.",d:"貧窮的"},
    {w:"honest",pos:"adj.",d:"誠實的"},{w:"trust",pos:"v.",d:"信任"},
    {w:"cook",pos:"v.",d:"烹煮"},{w:"take care of",pos:"phr.",d:"照顧"}
  ],
  grammar:[
    {rule:"<em>一般現在式</em>表示「習慣、反覆動作、長期事實」。標誌詞：<b>every day, always, usually, often</b>。"},
    {rule:"主詞為第三人稱單數(he/she/it)時，動詞加 <b>-s/-es</b>：live→<b>lives</b>；子音+y 改 <b>-ies</b>：carry→<b>carries</b>。"},
    {rule:"否定與疑問用 <b>do/does</b>：He <b>doesn't</b> live here. <b>Does</b> she sell charcoal?"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"Tanjiro ____ in the snowy mountains.",opts:["lives","live","living","lived"],a:0,ex:"第三人稱單數 he → lives。"},
    {cat:"g",t:"選擇題",q:"Every morning he ____ early.",opts:["wake","wakes","is waking","woke"],a:1,ex:"every morning=習慣，he→wakes。"},
    {cat:"g",t:"填空題",q:"He ____ (carry) charcoal to the town.",opts:["carries","carry","is carrying","carried"],a:0,ex:"carry→carries（子音+y）。"},
    {cat:"g",t:"選擇題",q:"____ Nezuko take care of the children?",opts:["Do","Does","Is","Are"],a:1,ex:"第三人稱單數疑問用 Does。"},
    {cat:"g",t:"選擇題",q:"The family ____ not have much money.",opts:["do","does","is","are"],a:1,ex:"the family 視為單數 → does not。"},
    {cat:"g",t:"選擇題",q:"They ____ each other very much. (love)",opts:["loves","love","is loving","loved"],a:1,ex:"主詞 they → 原形 love。"},
    {cat:"g",t:"是非題",q:"\"The sun rises in the east.\" 用一般現在式是正確的。",opts:["正確 True","錯誤 False"],a:0,ex:"恆常事實用一般現在式。"},
    {cat:"g",t:"填空題",q:"His mother ____ (cook) warm food.",opts:["cooks","cook","is cooking","cooked"],a:0,ex:"she→cooks。"},
    {cat:"g",t:"選擇題",q:"He ____ live in the city.",opts:["don't","doesn't","isn't","not"],a:1,ex:"否定第三人稱用 doesn't。"},
    {cat:"g",t:"選擇題",q:"Which word signals the simple present tense?",opts:["now","yesterday","every day","right now"],a:2,ex:"every day 是習慣的標誌詞。"},
    {cat:"v",t:"選擇題",q:"\"charcoal\" 的中文是？",opts:["木炭","木材","煤油","火柴"],a:0,ex:"charcoal = 木炭。"},
    {cat:"v",t:"選擇題",q:"To \"carry\" something means to ____.",opts:["throw it away","hold and move it","sell it","burn it"],a:1,ex:"carry = 搬運、拿著移動。"},
    {cat:"v",t:"選擇題",q:"\"honest\" 的意思是？",opts:["勇敢的","誠實的","貧窮的","聰明的"],a:1,ex:"honest = 誠實的。"},
    {cat:"v",t:"選擇題",q:"A person you can \"trust\" is someone you can ____.",opts:["fear","believe in","hate","forget"],a:1,ex:"trust = 信任、相信。"},
    {cat:"v",t:"選擇題",q:"\"sell\" 的相反詞是？",opts:["buy","give","keep","lose"],a:0,ex:"sell(賣) ↔ buy(買)。"},
    {cat:"v",t:"是非題",q:"\"poor\" 的意思是「富有的」。",opts:["正確 True","錯誤 False"],a:1,ex:"poor = 貧窮的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"take care of\" 的意思是？",opts:["照顧","拿走","小心開車","收拾"],a:0,ex:"take care of = 照顧。"},
    {cat:"v",t:"填空題",q:"He ____ charcoal for money. (用錢換得)",opts:["sells","buys","cooks","carries"],a:0,ex:"用木炭換錢→sells。"},
    {cat:"v",t:"選擇題",q:"\"cook\" 當動詞的意思是？",opts:["清洗","烹煮","購買","攜帶"],a:1,ex:"cook = 烹煮。"},
    {cat:"v",t:"選擇題",q:"\"mountain\" 的中文是？",opts:["河流","山","森林","村莊"],a:1,ex:"mountain = 山。"}
  ]
},
/* ===== 2 ===== */ {
  emoji:"🌑", rank:"現在進行式", cover:"covers/cover02.png",
  title:"歸來的那一夜 The Night He Returns",
  focus:"文法焦點：現在進行式 Present Continuous（此刻正在發生）",
  sentences:[
    {en:"The snow is falling heavily on the dark mountain.",zh:"雪正大片地落在昏暗的山上。",img:"covers/L02_s01.jpg"},
    {en:"Tanjiro is climbing up the path to his home.",zh:"炭治郎正爬上通往家的小路。",img:"covers/L02_s02.jpg"},
    {en:"He is smelling a strange and frightening smell.",zh:"他正聞到一股奇怪又可怕的氣味。",img:"covers/L02_s03.jpg"},
    {en:"\"Why is my heart beating so fast?\" he is thinking.",zh:"「為什麼我的心跳得這麼快？」他正想著。",img:"covers/L02_s04.jpg"},
    {en:"The red moon is shining above the silent trees.",zh:"紅色的月亮正照在寂靜的樹林上方。",img:"covers/L02_s05.jpg"},
    {en:"A cruel demon is attacking his family right now.",zh:"一隻殘忍的鬼此刻正在攻擊他的家人。",img:"covers/L02_s06.jpg"},
    {en:"Tanjiro is running toward the wooden house.",zh:"炭治郎正朝著木屋奔跑。",img:"covers/L02_s07.jpg"},
    {en:"He is crying as he holds his sister in his arms.",zh:"他抱著妹妹，一邊哭泣。",img:"covers/L02_s08.jpg"},
    {en:"\"Hold on, Nezuko! I am carrying you to a doctor!\"",zh:"「撐住，禰豆子！我正帶你去看醫生！」",img:"covers/L02_s09.jpg"},
    {en:"The cold wind is blowing through the dark forest.",zh:"冷風正吹過漆黑的森林。",img:"covers/L02_s10.jpg"}
  ],
  vocab:[
    {w:"snow",pos:"n.",d:"雪"},{w:"climb",pos:"v.",d:"攀爬"},
    {w:"smell",pos:"v.",d:"聞到、嗅"},{w:"frightening",pos:"adj.",d:"可怕的"},
    {w:"moon",pos:"n.",d:"月亮"},{w:"cruel",pos:"adj.",d:"殘忍的"},
    {w:"demon",pos:"n.",d:"鬼、惡魔"},{w:"attack",pos:"v.",d:"攻擊"},
    {w:"hold on",pos:"phr.",d:"撐住、堅持"},{w:"blow",pos:"v.",d:"吹（過去 blew）"}
  ],
  grammar:[
    {rule:"<em>現在進行式</em>：<b>be (am/is/are) + V-ing</b>，表示「此刻正在發生」。標誌詞：<b>now, right now, look!, listen!</b>。"},
    {rule:"V-ing 拼字：climb→climbing；字尾 e 去 e：take→<b>taking</b>；短母音重複尾子音：run→<b>running</b>。"},
    {rule:"否定：be + <b>not</b> + V-ing；疑問：be 移到句首。例：<b>Is</b> a demon <b>attacking</b> them?"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"The snow ____ heavily right now.",opts:["falls","is falling","fall","fell"],a:1,ex:"right now → is falling。"},
    {cat:"g",t:"選擇題",q:"Look! Tanjiro ____ up the path.",opts:["climbs","is climbing","climb","climbed"],a:1,ex:"Look! → 進行式 is climbing。"},
    {cat:"g",t:"填空題",q:"A demon ____ (attack) his family now!",opts:["is attacking","attacks","attack","attacked"],a:0,ex:"now → is attacking。"},
    {cat:"g",t:"選擇題",q:"Correct V-ing form of \"run\" is:",opts:["runing","running","runned","runs"],a:1,ex:"短母音重複尾子音 → running。"},
    {cat:"g",t:"選擇題",q:"\"I ____ you to a doctor right now!\"",opts:["take","am taking","takes","took"],a:1,ex:"I + am taking（此刻）。"},
    {cat:"g",t:"是非題",q:"\"They are not moving.\" 是現在進行式的否定句。",opts:["正確 True","錯誤 False"],a:0,ex:"be + not + V-ing 的否定，正確。"},
    {cat:"g",t:"選擇題",q:"____ a demon attacking the family?",opts:["Do","Does","Is","Are"],a:2,ex:"單數主詞 demon → Is ... attacking?"},
    {cat:"g",t:"填空題",q:"The cold wind ____ (blow) through the forest.",opts:["is blowing","blows","blow","blew"],a:0,ex:"描述此刻 → is blowing。"},
    {cat:"g",t:"是非題",q:"\"He is smell blood.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"應為 is smelling，故錯誤。"},
    {cat:"g",t:"選擇題",q:"Which signals the present continuous?",opts:["every night","usually","right now","often"],a:2,ex:"right now 是進行式標誌。"},
    {cat:"v",t:"選擇題",q:"\"climb\" 的意思是？",opts:["攀爬","奔跑","跌倒","跳躍"],a:0,ex:"climb = 攀爬。"},
    {cat:"v",t:"選擇題",q:"\"smell\" 當動詞的意思是？",opts:["看見","聞到","聽見","觸摸"],a:1,ex:"smell = 聞到。"},
    {cat:"v",t:"選擇題",q:"\"cruel\" 的意思是？",opts:["善良的","殘忍的","害怕的","聰明的"],a:1,ex:"cruel = 殘忍的。"},
    {cat:"v",t:"選擇題",q:"\"frightening\" 的意思最接近？",opts:["有趣的","可怕的","美麗的","安靜的"],a:1,ex:"frightening = 令人害怕的。"},
    {cat:"v",t:"選擇題",q:"\"demon\" 的中文是？",opts:["天使","鬼、惡魔","士兵","醫生"],a:1,ex:"demon = 鬼、惡魔。"},
    {cat:"v",t:"選擇題",q:"\"hold on\" 在此句中的意思是？",opts:["放手","撐住、堅持","掛電話","握手"],a:1,ex:"hold on = 撐住、堅持。"},
    {cat:"v",t:"選擇題",q:"The opposite of \"attack\" is closest to ____.",opts:["defend","run","cook","sleep"],a:0,ex:"attack(攻擊) ↔ defend(防禦)。"},
    {cat:"v",t:"是非題",q:"\"moon\" 的意思是「太陽」。",opts:["正確 True","錯誤 False"],a:1,ex:"moon = 月亮，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"The wind ____.\" 選最合適的動詞。",opts:["blows","eats","reads","sells"],a:0,ex:"風會 blow（吹）。"},
    {cat:"v",t:"選擇題",q:"\"snow\" 的中文是？",opts:["雨","雪","霧","雲"],a:1,ex:"snow = 雪。"}
  ]
},
/* ===== 3 ===== */ {
  emoji:"🩸", rank:"一般過去式", cover:"covers/cover03.png",
  title:"消失的家人 The Family He Lost",
  focus:"文法焦點：一般過去式 Simple Past（規則與不規則動詞）",
  sentences:[
    {en:"That terrible night, a demon killed almost all of his family.",zh:"那個可怕的夜晚，一隻鬼幾乎殺死了他全家。",img:"covers/L03_s01.jpg"},
    {en:"Tanjiro found his family lying in the white snow.",zh:"炭治郎發現家人倒在白雪中。",img:"covers/L03_s02.jpg"},
    {en:"He carried Nezuko on his back and ran for help.",zh:"他把禰豆子背在背上，跑去求救。",img:"covers/L03_s03.jpg"},
    {en:"Suddenly, Nezuko became a demon and attacked him.",zh:"突然間，禰豆子變成了鬼並攻擊他。",img:"covers/L03_s04.jpg"},
    {en:"He fell down, but he did not give up.",zh:"他跌倒了，但他沒有放棄。",img:"covers/L03_s05.jpg"},
    {en:"Deep inside, Nezuko knew her brother and stopped.",zh:"在內心深處，禰豆子認得哥哥，於是停了下來。",img:"covers/L03_s06.jpg"},
    {en:"A single tear fell from her eye.",zh:"一滴眼淚從她眼中落下。",img:"covers/L03_s07.jpg"},
    {en:"Tanjiro held her tightly and spoke softly.",zh:"炭治郎緊緊抱住她，輕聲說話。",img:"covers/L03_s08.jpg"},
    {en:"A swordsman saw them and walked closer.",zh:"一名劍士看見他們，走了過來。",img:"covers/L03_s09.jpg"},
    {en:"That night changed his life forever.",zh:"那一夜永遠改變了他的人生。",img:"covers/L03_s10.jpg"}
  ],
  vocab:[
    {w:"terrible",pos:"adj.",d:"可怕的、糟透的"},{w:"kill",pos:"v.",d:"殺死（過去 killed）"},
    {w:"find",pos:"v.",d:"發現（過去 found）"},{w:"become",pos:"v.",d:"變成（過去 became）"},
    {w:"know",pos:"v.",d:"認得、知道（過去 knew）"},{w:"tear",pos:"n.",d:"眼淚"},
    {w:"hold",pos:"v.",d:"抱住、握（過去 held）"},{w:"softly",pos:"adv.",d:"輕柔地"},
    {w:"forever",pos:"adv.",d:"永遠"},{w:"give up",pos:"phr.",d:"放棄"}
  ],
  grammar:[
    {rule:"<em>一般過去式</em>表示「過去發生且已結束」。標誌詞：<b>yesterday, last night, ago, that night, when</b>。"},
    {rule:"規則動詞加 <b>-ed</b>：kill→killed；重複尾子音：stop→<b>stopped</b>；子音+y→<b>-ied</b>：carry→carried。"},
    {rule:"不規則動詞要背：run→<b>ran</b>, become→<b>became</b>, know→<b>knew</b>, find→found, fall→fell, hold→held。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"That night, a demon ____ his family.",opts:["kills","killed","kill","is killing"],a:1,ex:"that night → 過去式 killed。"},
    {cat:"g",t:"選擇題",q:"He ____ for help. (run)",opts:["runned","ran","run","runs"],a:1,ex:"run 的不規則過去式是 ran。"},
    {cat:"g",t:"填空題",q:"Nezuko ____ (become) a demon.",opts:["became","becomed","becomes","become"],a:0,ex:"become→became。"},
    {cat:"g",t:"選擇題",q:"She still ____ her brother. (know)",opts:["knowed","knew","knows","known"],a:1,ex:"know→knew。"},
    {cat:"g",t:"選擇題",q:"Past tense of \"find\" is:",opts:["finded","found","founded","finds"],a:1,ex:"find→found。"},
    {cat:"g",t:"是非題",q:"\"He carried Nezuko on his back.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"carry→carried，正確。"},
    {cat:"g",t:"選擇題",q:"A tear ____ from her eye. (fall)",opts:["falled","fell","fallen","falls"],a:1,ex:"fall→fell。"},
    {cat:"g",t:"選擇題",q:"____ Tanjiro cry that night?",opts:["Did","Does","Do","Was"],a:0,ex:"過去式疑問用 Did + 原形。"},
    {cat:"g",t:"填空題",q:"He ____ (hold) her tightly.",opts:["held","holded","holds","holding"],a:0,ex:"hold→held。"},
    {cat:"g",t:"是非題",q:"\"She knowed his face.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"know 是不規則，應為 knew，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"terrible\" 的意思是？",opts:["美好的","可怕的、糟透的","普通的","安靜的"],a:1,ex:"terrible = 可怕的。"},
    {cat:"v",t:"選擇題",q:"\"tear\" (名詞) 的中文是？",opts:["撕裂","眼淚","害怕","笑容"],a:1,ex:"tear(n.) = 眼淚。"},
    {cat:"v",t:"選擇題",q:"\"forever\" 的意思是？",opts:["有時","永遠","昨天","很快"],a:1,ex:"forever = 永遠。"},
    {cat:"v",t:"選擇題",q:"\"softly\" 的意思最接近？",opts:["大聲地","輕柔地","快速地","生氣地"],a:1,ex:"softly = 輕柔地。"},
    {cat:"v",t:"選擇題",q:"\"give up\" 的意思是？",opts:["放棄","站起來","送禮","醒來"],a:0,ex:"give up = 放棄。"},
    {cat:"v",t:"選擇題",q:"The past form of \"hold\" is ____.",opts:["holded","held","holden","holds"],a:1,ex:"hold→held。"},
    {cat:"v",t:"是非題",q:"\"kill\" 的意思是「拯救」。",opts:["正確 True","錯誤 False"],a:1,ex:"kill = 殺死，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"find\" 的中文是？",opts:["失去","發現、找到","給予","關閉"],a:1,ex:"find = 發現、找到。"},
    {cat:"v",t:"選擇題",q:"\"become\" 的意思是？",opts:["變成","離開","購買","休息"],a:0,ex:"become = 變成。"},
    {cat:"v",t:"選擇題",q:"Choose the best word: A ____ fell from her eye.",opts:["tear","ear","year","wear"],a:0,ex:"從眼中落下的是 tear(眼淚)。"}
  ]
},
/* ===== 4 ===== */ {
  emoji:"❄️", rank:"過去進行式", cover:"covers/cover04.png",
  title:"當水柱出現時 When the Water Hashira Came",
  focus:"文法焦點：過去進行式 Past Continuous（過去某時正在進行）",
  sentences:[
    {en:"While Tanjiro was protecting Nezuko, a swordsman appeared.",zh:"當炭治郎正在保護禰豆子時，一名劍士出現了。",img:"covers/L04_s01.jpg"},
    {en:"Giyu was holding his sword, ready to strike.",zh:"義勇正握著刀，準備出擊。",img:"covers/L04_s02.jpg"},
    {en:"The snow was falling quietly around them.",zh:"雪正靜靜地落在他們四周。",img:"covers/L04_s03.jpg"},
    {en:"Tanjiro was begging the man to spare his sister.",zh:"炭治郎正懇求那名男子放過他的妹妹。",img:"covers/L04_s04.jpg"},
    {en:"While the two were arguing, Nezuko was standing in front of him.",zh:"當兩人正在爭論時，禰豆子站在他面前護著他。",img:"covers/L04_s05.jpg"},
    {en:"Her body was shaking, but she was not attacking the humans.",zh:"她的身體正在顫抖，但她並沒有攻擊人類。",img:"covers/L04_s06.jpg"},
    {en:"Giyu was watching the demon girl very carefully.",zh:"義勇正非常仔細地觀察那名鬼少女。",img:"covers/L04_s07.jpg"},
    {en:"He was wondering what kind of demon she was.",zh:"他正在思索她是哪一種鬼。",img:"covers/L04_s08.jpg"},
    {en:"The wind was blowing while they were talking.",zh:"當他們交談時，風正吹著。",img:"covers/L04_s09.jpg"},
    {en:"At that moment, Tanjiro was crying and shouting together.",zh:"那一刻，炭治郎一邊哭一邊喊。",img:"covers/L04_s10.jpg"}
  ],
  vocab:[
    {w:"protect",pos:"v.",d:"保護"},{w:"appear",pos:"v.",d:"出現"},
    {w:"strike",pos:"v.",d:"攻擊、打擊"},{w:"beg",pos:"v.",d:"懇求"},
    {w:"spare",pos:"v.",d:"饒過、放過"},{w:"argue",pos:"v.",d:"爭論"},
    {w:"shake",pos:"v.",d:"顫抖、搖晃"},{w:"carefully",pos:"adv.",d:"仔細地"},
    {w:"wonder",pos:"v.",d:"想知道、思索"},{w:"shout",pos:"v.",d:"大喊"}
  ],
  grammar:[
    {rule:"<em>過去進行式</em>：<b>was/were + V-ing</b>，表示「過去某時間點正在進行的動作」。"},
    {rule:"常與 <b>while</b>（當…的時候）連用，或「某動作進行中，另一動作發生」：<b>While</b> he was eating, the phone rang."},
    {rule:"I/he/she/it 用 <b>was</b>；you/we/they 用 <b>were</b>。疑問：Was/Were 移到句首。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"While Tanjiro ____ Nezuko, a swordsman appeared.",opts:["protects","was protecting","protected","is protecting"],a:1,ex:"while + 過去進行式 was protecting。"},
    {cat:"g",t:"選擇題",q:"Giyu ____ his sword. (hold, 過去進行)",opts:["was holding","were holding","held","holds"],a:0,ex:"he → was holding。"},
    {cat:"g",t:"填空題",q:"\"Why ____ you ____ a demon?\" (protect)",opts:["were / protecting","was / protecting","did / protect","are / protecting"],a:0,ex:"you → were + V-ing。"},
    {cat:"g",t:"選擇題",q:"While the two ____ , Nezuko stood still.",opts:["was talking","were talking","talk","talked"],a:1,ex:"the two(複數) → were talking。"},
    {cat:"g",t:"是非題",q:"\"I was running when it started to rain.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"過去進行 + 過去簡單，正確。"},
    {cat:"g",t:"選擇題",q:"Her body ____ with fear. (shake)",opts:["was shaking","were shaking","shakes","shook"],a:0,ex:"body(單數) → was shaking。"},
    {cat:"g",t:"選擇題",q:"____ she crying when you saw her?",opts:["Did","Was","Were","Is"],a:1,ex:"she → Was ... crying?"},
    {cat:"g",t:"填空題",q:"The wind ____ (blow) while they talked.",opts:["was blowing","were blowing","blows","blew"],a:0,ex:"wind(單數) → was blowing。"},
    {cat:"g",t:"是非題",q:"\"He were holding a sword.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"he 應用 was，故錯誤。"},
    {cat:"g",t:"選擇題",q:"I ____ TV when my brother came home.",opts:["was watching","were watching","watched","watch"],a:0,ex:"I → was watching。"},
    {cat:"v",t:"選擇題",q:"\"protect\" 的意思是？",opts:["攻擊","保護","出現","逃跑"],a:1,ex:"protect = 保護。"},
    {cat:"v",t:"選擇題",q:"\"appear\" 的意思是？",opts:["消失","出現","睡覺","購買"],a:1,ex:"appear = 出現。"},
    {cat:"v",t:"選擇題",q:"\"beg\" 的意思最接近？",opts:["命令","懇求","拒絕","稱讚"],a:1,ex:"beg = 懇求。"},
    {cat:"v",t:"選擇題",q:"\"spare\" someone 的意思是？",opts:["饒過、放過","攻擊","訓練","欺騙"],a:0,ex:"spare = 饒過、放過。"},
    {cat:"v",t:"選擇題",q:"\"argue\" 的意思是？",opts:["同意","爭論","微笑","休息"],a:1,ex:"argue = 爭論。"},
    {cat:"v",t:"選擇題",q:"\"shake\" 的意思是？",opts:["顫抖、搖晃","站立","奔跑","唱歌"],a:0,ex:"shake = 顫抖、搖晃。"},
    {cat:"v",t:"是非題",q:"\"carefully\" 的意思是「粗心地」。",opts:["正確 True","錯誤 False"],a:1,ex:"carefully = 仔細地，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"shout\" 的意思是？",opts:["低語","大喊","哭泣","笑"],a:1,ex:"shout = 大喊。"},
    {cat:"v",t:"選擇題",q:"\"wonder\" (動詞) 的意思最接近？",opts:["想知道","害怕","討厭","攜帶"],a:0,ex:"wonder = 想知道、思索。"},
    {cat:"v",t:"選擇題",q:"\"strike\" 的意思是？",opts:["攻擊、打擊","保護","休息","購買"],a:0,ex:"strike = 攻擊、打擊。"}
  ]
},
/* ===== 5 ===== */ {
  emoji:"🎯", rank:"未來式", cover:"covers/cover05.png",
  title:"立下的誓言 The Vow He Makes",
  focus:"文法焦點：未來式 Will 與 Be going to",
  sentences:[
    {en:"\"I will turn Nezuko back into a human,\" Tanjiro promised.",zh:"「我一定要把禰豆子變回人類，」炭治郎發誓。",img:"covers/L05_s01.jpg"},
    {en:"Giyu said, \"You are going to find a man named Urokodaki.\"",zh:"義勇說：「你要去找一個叫鱗瀧的人。」",img:"covers/L05_s02.jpg"},
    {en:"\"I will not give up, no matter what happens.\"",zh:"「無論發生什麼，我都不會放棄。」",img:"covers/L05_s03.jpg"},
    {en:"\"One day, I am going to become a Demon Slayer.\"",zh:"「總有一天，我要成為一名鬼殺隊士。」",img:"covers/L05_s04.jpg"},
    {en:"\"I will find the demon who hurt my family.\"",zh:"「我會找到傷害我家人的那隻鬼。」",img:"covers/L05_s05.jpg"},
    {en:"\"I am going to train hard every single day.\"",zh:"「我打算每天努力訓練。」",img:"covers/L05_s06.jpg"},
    {en:"\"We will protect each other, Nezuko.\"",zh:"「我們會互相保護，禰豆子。」",img:"covers/L05_s07.jpg"},
    {en:"\"The journey will be long and dangerous.\"",zh:"「這段旅程將會漫長又危險。」",img:"covers/L05_s08.jpg"},
    {en:"\"I am going to grow stronger than anyone.\"",zh:"「我要變得比任何人都強。」",img:"covers/L05_s09.jpg"},
    {en:"\"I promise I will bring back your smile.\"",zh:"「我保證，我會找回你的笑容。」",img:"covers/L05_s10.jpg"}
  ],
  vocab:[
    {w:"turn into",pos:"phr.",d:"變成"},{w:"promise",pos:"v.",d:"承諾、發誓"},
    {w:"give up",pos:"phr.",d:"放棄"},{w:"become",pos:"v.",d:"成為、變成"},
    {w:"hurt",pos:"v.",d:"傷害"},{w:"train",pos:"v.",d:"訓練"},
    {w:"journey",pos:"n.",d:"旅程"},{w:"dangerous",pos:"adj.",d:"危險的"},
    {w:"grow",pos:"v.",d:"成長、變得"},{w:"smile",pos:"n.",d:"笑容"}
  ],
  grammar:[
    {rule:"<em>will + 原形動詞</em>：表「當下的決定、承諾、預測」。否定 <b>will not = won't</b>。"},
    {rule:"<em>be going to + 原形動詞</em>：表「已有的計畫、打算」或「有跡象的預測」。"},
    {rule:"兩者都接 <b>原形動詞</b>。判斷：臨時決定/承諾→will；事先計畫→be going to。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"\"I ____ turn Nezuko back into a human.\"",opts:["will","am going","going to","will to"],a:0,ex:"承諾用 will + 原形。"},
    {cat:"g",t:"選擇題",q:"\"You ____ find Urokodaki.\" (已安排)",opts:["will to","are going to","going to","will going"],a:1,ex:"既定安排用 be going to。"},
    {cat:"g",t:"填空題",q:"\"I ____ (not give up)!\"",opts:["will not give up","am not going give up","not will give up","won't gave up"],a:0,ex:"will not = won't + 原形 give up。"},
    {cat:"g",t:"選擇題",q:"After \"will\", the verb must be:",opts:["原形 base form","V-ing","過去式","to + V"],a:0,ex:"will + 原形動詞。"},
    {cat:"g",t:"選擇題",q:"Look at those clouds! It ____ rain.",opts:["will","is going to","goes to","wills"],a:1,ex:"有跡象的預測用 be going to。"},
    {cat:"g",t:"是非題",q:"\"I am going to become a slayer.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"be going to + 原形，正確。"},
    {cat:"g",t:"選擇題",q:"\"The phone is ringing.\" \"OK, I ____ answer it.\"",opts:["am going to","will","going to","would"],a:1,ex:"臨時決定用 will。"},
    {cat:"g",t:"填空題",q:"\"One day I ____ (find) him.\"",opts:["will find","will found","am find","will finding"],a:0,ex:"will + 原形 find。"},
    {cat:"g",t:"是非題",q:"\"He will defeats the demon.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"will 後接原形 defeat，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"____ you help me carry this?\"",opts:["Will","Are going to","Do will","Going"],a:0,ex:"請求用 Will you...?"},
    {cat:"v",t:"選擇題",q:"\"promise\" 的意思是？",opts:["承諾","拒絕","忘記","懷疑"],a:0,ex:"promise = 承諾。"},
    {cat:"v",t:"選擇題",q:"\"turn into\" 的意思是？",opts:["轉彎","變成","關掉","拒絕"],a:1,ex:"turn into = 變成。"},
    {cat:"v",t:"選擇題",q:"\"dangerous\" 的意思是？",opts:["安全的","危險的","容易的","有趣的"],a:1,ex:"dangerous = 危險的。"},
    {cat:"v",t:"選擇題",q:"\"journey\" 的中文是？",opts:["工作","旅程","日記","士兵"],a:1,ex:"journey = 旅程。"},
    {cat:"v",t:"選擇題",q:"\"hurt\" 的意思是？",opts:["治療","傷害","幫助","保護"],a:1,ex:"hurt = 傷害。"},
    {cat:"v",t:"選擇題",q:"\"grow\" 的意思最接近？",opts:["成長、變得","停止","購買","睡覺"],a:0,ex:"grow = 成長、變得。"},
    {cat:"v",t:"是非題",q:"\"train\" 在此句只當「火車」一個意思。",opts:["正確 True","錯誤 False"],a:1,ex:"train 也可當動詞「訓練」，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"smile\" 的中文是？",opts:["眼淚","笑容","聲音","影子"],a:1,ex:"smile = 笑容。"},
    {cat:"v",t:"選擇題",q:"\"give up\" 的相反態度是？",opts:["keep trying","run away","fall down","stay quiet"],a:0,ex:"give up(放棄) ↔ keep trying(持續努力)。"},
    {cat:"v",t:"選擇題",q:"\"become\" 的意思是？",opts:["離開","成為、變成","購買","遺忘"],a:1,ex:"become = 成為、變成。"}
  ]
},
/* ===== 6 ===== */ {
  emoji:"⛰️", rank:"現在完成式", cover:"covers/cover06.png",
  title:"鱗瀧的試煉 Urokodaki's Training",
  focus:"文法焦點：現在完成式 Present Perfect（have/has + p.p.）",
  sentences:[
    {en:"Tanjiro has trained under Urokodaki for almost two years.",zh:"炭治郎已在鱗瀧門下訓練了將近兩年。",img:"covers/L06_s01.jpg"},
    {en:"He has climbed the mountain a thousand times.",zh:"他已經爬過這座山上千次了。",img:"covers/L06_s02.jpg"},
    {en:"\"Have you ever cut a giant rock with a sword?\"",zh:"「你曾經用刀劈開巨石嗎？」",img:"covers/L06_s03.jpg"},
    {en:"\"I have learned the ten forms of Water Breathing.\"",zh:"「我已學會水之呼吸的十個招式。」",img:"covers/L06_s04.jpg"},
    {en:"He has never stopped, even when his body hurt.",zh:"即使身體疼痛，他也從未停下。",img:"covers/L06_s05.jpg"},
    {en:"\"I have already become much stronger than before.\"",zh:"「我已經變得比以前強壯許多。」",img:"covers/L06_s06.jpg"},
    {en:"Tanjiro has met two kind spirits, Sabito and Makomo.",zh:"炭治郎遇見了兩位善良的靈魂，錆兔與真菰。",img:"covers/L06_s07.jpg"},
    {en:"They have helped him improve his skills.",zh:"他們幫助他精進了技巧。",img:"covers/L06_s08.jpg"},
    {en:"Finally, he has cut the great rock in two.",zh:"終於，他將巨石一刀兩斷。",img:"covers/L06_s09.jpg"},
    {en:"\"My training has made me ready for the Final Selection.\"",zh:"「我的修行讓我為最終選別做好了準備。」",img:"covers/L06_s10.jpg"}
  ],
  vocab:[
    {w:"train",pos:"v.",d:"訓練"},{w:"master",pos:"n.",d:"師父、大師"},
    {w:"giant",pos:"adj.",d:"巨大的"},{w:"learn",pos:"v.",d:"學習"},
    {w:"improve",pos:"v.",d:"改善、進步"},{w:"skill",pos:"n.",d:"技巧、技能"},
    {w:"ready",pos:"adj.",d:"準備好的"},{w:"already",pos:"adv.",d:"已經"},
    {w:"never",pos:"adv.",d:"從不"},{w:"breathing",pos:"n.",d:"呼吸（法）"}
  ],
  grammar:[
    {rule:"<em>現在完成式</em>：<b>have/has + 過去分詞(p.p.)</b>，表「經驗」或「過去發生、影響到現在」。"},
    {rule:"標誌詞：<b>already, yet, ever, never, just, since, for</b>。例：I <b>have lived</b> here <b>for</b> two years。"},
    {rule:"he/she/it 用 <b>has</b>，其餘 <b>have</b>。不規則 p.p.：cut→<b>cut</b>, learn→learned, meet→met, do→done。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"Tanjiro ____ for almost two years.",opts:["has trained","have trained","trained","is training"],a:0,ex:"he + has + p.p.，for → 完成式。"},
    {cat:"g",t:"選擇題",q:"\"Have you ever ____ a giant rock?\" (cut)",opts:["cut","cutted","cuts","cutting"],a:0,ex:"cut 的 p.p. 仍是 cut。"},
    {cat:"g",t:"填空題",q:"\"I ____ (learn) the ten forms.\"",opts:["have learned","has learned","learned","am learning"],a:0,ex:"I → have learned。"},
    {cat:"g",t:"選擇題",q:"Which word goes with the present perfect?",opts:["yesterday","already","ago","last week"],a:1,ex:"already 屬完成式；其餘是過去式。"},
    {cat:"g",t:"選擇題",q:"He ____ met two spirits. (he)",opts:["have","has","is","are"],a:1,ex:"he → has met。"},
    {cat:"g",t:"是非題",q:"\"She has finished her training.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"she + has + p.p.，正確。"},
    {cat:"g",t:"選擇題",q:"\"He hasn't woken up ____.\" (否定句尾)",opts:["already","yet","just","ever"],a:1,ex:"否定句尾用 yet。"},
    {cat:"g",t:"填空題",q:"We ____ (live) here ____ 2010.",opts:["have lived / since","has lived / for","lived / since","have live / since"],a:0,ex:"since + 時間點，we → have lived。"},
    {cat:"g",t:"是非題",q:"\"I have saw a demon.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"see 的 p.p. 是 seen，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"He has ____ become stronger.\" (已經)",opts:["yet","already","ago","never"],a:1,ex:"already = 已經，用於完成式。"},
    {cat:"v",t:"選擇題",q:"\"master\" 在此的意思是？",opts:["主人/師父","僕人","學生","醫生"],a:0,ex:"master = 師父、大師。"},
    {cat:"v",t:"選擇題",q:"\"giant\" 的意思是？",opts:["微小的","巨大的","美麗的","危險的"],a:1,ex:"giant = 巨大的。"},
    {cat:"v",t:"選擇題",q:"\"improve\" 的意思是？",opts:["改善、進步","破壞","忘記","購買"],a:0,ex:"improve = 改善、進步。"},
    {cat:"v",t:"選擇題",q:"\"skill\" 的中文是？",opts:["技巧、技能","力氣","運氣","規則"],a:0,ex:"skill = 技巧、技能。"},
    {cat:"v",t:"選擇題",q:"\"ready\" 的意思是？",opts:["疲累的","準備好的","害怕的","誠實的"],a:1,ex:"ready = 準備好的。"},
    {cat:"v",t:"選擇題",q:"\"already\" 的意思是？",opts:["還沒","已經","從不","也許"],a:1,ex:"already = 已經。"},
    {cat:"v",t:"是非題",q:"\"never\" 的意思是「總是」。",opts:["正確 True","錯誤 False"],a:1,ex:"never = 從不，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"learn\" 的意思是？",opts:["教導","學習","遺忘","休息"],a:1,ex:"learn = 學習。"},
    {cat:"v",t:"選擇題",q:"\"train\" (動詞) 在此的意思是？",opts:["搭火車","訓練","旅行","賣"],a:1,ex:"此處 train = 訓練。"},
    {cat:"v",t:"選擇題",q:"\"breathing\" 與哪個字相關？",opts:["breath","bread","bridge","branch"],a:0,ex:"breathing 來自 breath(呼吸)。"}
  ]
},
/* ===== 7 ===== */ {
  emoji:"🏔️", rank:"形容詞比較級", cover:"covers/cover07.png",
  title:"最終選別 The Final Selection",
  focus:"文法焦點：形容詞比較級 Comparative（-er / more ... than）",
  sentences:[
    {en:"On Mount Fujikasane, the demons are more dangerous than anywhere else.",zh:"在藤襲山，這裡的鬼比任何地方都更危險。",img:"covers/L07_s01.jpg"},
    {en:"This demon is taller and stronger than Tanjiro.",zh:"這隻鬼比炭治郎更高大、更強壯。",img:"covers/L07_s02.jpg"},
    {en:"But Tanjiro is faster and smarter than the demon expects.",zh:"但炭治郎比那隻鬼預料的更快、更聰明。",img:"covers/L07_s03.jpg"},
    {en:"His sword is sharper than the demon's claws.",zh:"他的刀比鬼的爪子更鋒利。",img:"covers/L07_s04.jpg"},
    {en:"This night is darker than any night before.",zh:"這個夜晚比以往任何夜晚都更黑暗。",img:"covers/L07_s05.jpg"},
    {en:"Tanjiro is braver now than he was two years ago.",zh:"炭治郎現在比兩年前更勇敢。",img:"covers/L07_s06.jpg"},
    {en:"Surviving here is harder than climbing the mountain.",zh:"在這裡生存比爬山更困難。",img:"covers/L07_s07.jpg"},
    {en:"The older demon is more powerful than the younger ones.",zh:"年長的鬼比年輕的鬼更強大。",img:"covers/L07_s08.jpg"},
    {en:"Tanjiro's will is stronger than his fear.",zh:"炭治郎的意志比他的恐懼更強大。",img:"covers/L07_s09.jpg"},
    {en:"\"I must be more careful than ever,\" he thought.",zh:"「我必須比以往更小心，」他想。",img:"covers/L07_s10.jpg"}
  ],
  vocab:[
    {w:"dangerous",pos:"adj.",d:"危險的"},{w:"tall",pos:"adj.",d:"高的"},
    {w:"strong",pos:"adj.",d:"強壯的"},{w:"smart",pos:"adj.",d:"聰明的"},
    {w:"sharp",pos:"adj.",d:"鋒利的"},{w:"claw",pos:"n.",d:"爪子"},
    {w:"dark",pos:"adj.",d:"黑暗的"},{w:"brave",pos:"adj.",d:"勇敢的"},
    {w:"survive",pos:"v.",d:"存活、倖存"},{w:"will",pos:"n.",d:"意志"}
  ],
  grammar:[
    {rule:"<em>比較級</em>用來比較兩者，後接 <b>than</b>。短形容詞 + <b>-er</b>：tall→taller, fast→faster。"},
    {rule:"字尾 e 加 r：brave→<b>braver</b>；子音+y→<b>-ier</b>：happy→happier；短母音重複尾子音：big→<b>bigger</b>。"},
    {rule:"長形容詞用 <b>more</b>：dangerous→<b>more dangerous</b>。不規則：good→<b>better</b>, bad→<b>worse</b>。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"The demons here are ____ than anywhere else. (dangerous)",opts:["dangerouser","more dangerous","most dangerous","danger"],a:1,ex:"長形容詞用 more dangerous。"},
    {cat:"g",t:"選擇題",q:"This demon is ____ than Tanjiro. (tall)",opts:["taller","more tall","tallest","tall"],a:0,ex:"tall→taller。"},
    {cat:"g",t:"填空題",q:"Tanjiro is ____ (fast) than the demon expects.",opts:["faster","more fast","fastest","fast"],a:0,ex:"fast→faster。"},
    {cat:"g",t:"選擇題",q:"Comparative of \"brave\" is:",opts:["braver","more brave","bravest","braveer"],a:0,ex:"字尾 e → 加 r，braver。"},
    {cat:"g",t:"選擇題",q:"His sword is ____ than the claws. (sharp)",opts:["sharper","more sharp","sharpest","sharp"],a:0,ex:"sharp→sharper。"},
    {cat:"g",t:"是非題",q:"\"He is stronger than me.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"strong→stronger + than，正確。"},
    {cat:"g",t:"選擇題",q:"Comparative of \"good\" is:",opts:["gooder","more good","better","best"],a:2,ex:"不規則：good→better。"},
    {cat:"g",t:"填空題",q:"This night is ____ (dark) than before.",opts:["darker","more dark","darkest","dark"],a:0,ex:"dark→darker。"},
    {cat:"g",t:"是非題",q:"\"This is more better than before.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"better 已是比較級，不可加 more，故錯誤。"},
    {cat:"g",t:"選擇題",q:"Comparative of \"bad\" is:",opts:["badder","more bad","worse","worst"],a:2,ex:"不規則：bad→worse。"},
    {cat:"v",t:"選擇題",q:"\"sharp\" 的意思是？",opts:["鈍的","鋒利的","柔軟的","沉重的"],a:1,ex:"sharp = 鋒利的。"},
    {cat:"v",t:"選擇題",q:"\"claw\" 的中文是？",opts:["爪子","翅膀","牙齒","尾巴"],a:0,ex:"claw = 爪子。"},
    {cat:"v",t:"選擇題",q:"\"brave\" 的意思是？",opts:["膽小的","勇敢的","聰明的","懶惰的"],a:1,ex:"brave = 勇敢的。"},
    {cat:"v",t:"選擇題",q:"\"survive\" 的意思是？",opts:["存活、倖存","死亡","逃跑","睡覺"],a:0,ex:"survive = 存活。"},
    {cat:"v",t:"選擇題",q:"\"will\" (名詞) 在此句意思是？",opts:["遺囑","意志","將會","願望"],a:1,ex:"此處 will = 意志、決心。"},
    {cat:"v",t:"選擇題",q:"\"smart\" 的意思是？",opts:["愚笨的","聰明的","危險的","安靜的"],a:1,ex:"smart = 聰明的。"},
    {cat:"v",t:"是非題",q:"\"dangerous\" 的意思是「安全的」。",opts:["正確 True","錯誤 False"],a:1,ex:"dangerous = 危險的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"The opposite of \"dark\" is ____.",opts:["bright","heavy","slow","cold"],a:0,ex:"dark(暗) ↔ bright(亮)。"},
    {cat:"v",t:"選擇題",q:"The opposite of \"strong\" is ____.",opts:["weak","tall","fast","kind"],a:0,ex:"strong(強) ↔ weak(弱)。"},
    {cat:"v",t:"選擇題",q:"\"tall\" 的意思是？",opts:["矮的","高的","寬的","厚的"],a:1,ex:"tall = 高的。"}
  ]
},
/* ===== 8 ===== */ {
  emoji:"👹", rank:"形容詞最高級", cover:"covers/cover08.png",
  title:"手鬼的記憶 The Hand Demon",
  focus:"文法焦點：形容詞最高級 Superlative（the -est / the most）",
  sentences:[
    {en:"The Hand Demon was the scariest enemy Tanjiro had ever met.",zh:"手鬼是炭治郎遇過最可怕的敵人。",img:"covers/L08_s01.jpg"},
    {en:"\"I have eaten the most students of Urokodaki,\" it laughed.",zh:"「我吃掉了最多鱗瀧的弟子，」牠大笑。",img:"covers/L08_s02.jpg"},
    {en:"It had the longest arms and the sharpest claws.",zh:"牠有最長的手臂和最鋒利的爪子。",img:"covers/L08_s03.jpg"},
    {en:"Tanjiro used the strongest move he knew.",zh:"炭治郎使出他所知最強的招式。",img:"covers/L08_s04.jpg"},
    {en:"It was the hardest battle of his life.",zh:"那是他人生中最艱難的一場戰鬥。",img:"covers/L08_s05.jpg"},
    {en:"That night was the darkest and the coldest.",zh:"那一夜是最黑暗也最寒冷的。",img:"covers/L08_s06.jpg"},
    {en:"He became the bravest warrior on the mountain.",zh:"他成了山上最勇敢的戰士。",img:"covers/L08_s07.jpg"},
    {en:"Water Breathing is one of the most beautiful sword styles.",zh:"水之呼吸是最優美的劍術之一。",img:"covers/L08_s08.jpg"},
    {en:"Tanjiro was the youngest fighter to survive that year.",zh:"炭治郎是那一年存活下來最年輕的戰士。",img:"covers/L08_s09.jpg"},
    {en:"This was the happiest moment after years of hard training.",zh:"這是多年苦練後最快樂的一刻。",img:"covers/L08_s10.jpg"}
  ],
  vocab:[
    {w:"scary",pos:"adj.",d:"可怕的"},{w:"enemy",pos:"n.",d:"敵人"},
    {w:"arm",pos:"n.",d:"手臂"},{w:"move",pos:"n.",d:"招式、動作"},
    {w:"hard",pos:"adj.",d:"困難的、辛苦的"},{w:"battle",pos:"n.",d:"戰鬥"},
    {w:"warrior",pos:"n.",d:"戰士"},{w:"beautiful",pos:"adj.",d:"美麗的"},
    {w:"young",pos:"adj.",d:"年輕的"},{w:"moment",pos:"n.",d:"時刻、片刻"}
  ],
  grammar:[
    {rule:"<em>最高級</em>用於三者以上「最…」，前面通常加 <b>the</b>。短形容詞 + <b>-est</b>：tall→the tallest。"},
    {rule:"字尾變化：scary→<b>the scariest</b>, big→<b>the biggest</b>, brave→<b>the bravest</b>。"},
    {rule:"長形容詞用 <b>the most</b>：the most beautiful。不規則：good→<b>the best</b>, bad→<b>the worst</b>, many→<b>the most</b>。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"The Hand Demon was ____ enemy he had met. (scary)",opts:["the scariest","the most scary","scarier","scary"],a:0,ex:"scary→the scariest。"},
    {cat:"g",t:"選擇題",q:"Tanjiro used ____ move he knew. (strong)",opts:["the strongest","the most strong","stronger","strong"],a:0,ex:"strong→the strongest。"},
    {cat:"g",t:"填空題",q:"He became ____ (brave) warrior on the mountain.",opts:["the bravest","the most brave","braver","brave"],a:0,ex:"brave→the bravest。"},
    {cat:"g",t:"選擇題",q:"Superlative of \"beautiful\" is:",opts:["the beautifulest","the most beautiful","more beautiful","beautifulest"],a:1,ex:"長形容詞用 the most beautiful。"},
    {cat:"g",t:"選擇題",q:"Superlative of \"good\" is:",opts:["the goodest","the best","better","the most good"],a:1,ex:"不規則：good→the best。"},
    {cat:"g",t:"是非題",q:"\"She is the tallest in the class.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"tall→the tallest，正確。"},
    {cat:"g",t:"選擇題",q:"It was ____ battle of his life. (hard)",opts:["the hardest","the most hard","harder","hard"],a:0,ex:"hard→the hardest。"},
    {cat:"g",t:"填空題",q:"It was ____ (happy) moment of all.",opts:["the happiest","the most happy","happier","happy"],a:0,ex:"happy→the happiest。"},
    {cat:"g",t:"是非題",q:"\"He is the most strongest.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"the strongest 已是最高級，不可加 most，故錯誤。"},
    {cat:"g",t:"選擇題",q:"Superlative of \"bad\" is:",opts:["the baddest","the worst","worse","the most bad"],a:1,ex:"不規則：bad→the worst。"},
    {cat:"v",t:"選擇題",q:"\"enemy\" 的意思是？",opts:["朋友","敵人","老師","鄰居"],a:1,ex:"enemy = 敵人。"},
    {cat:"v",t:"選擇題",q:"\"arm\" 的中文是？",opts:["腿","手臂","頭","背"],a:1,ex:"arm = 手臂。"},
    {cat:"v",t:"選擇題",q:"\"warrior\" 的意思是？",opts:["農夫","戰士","商人","醫生"],a:1,ex:"warrior = 戰士。"},
    {cat:"v",t:"選擇題",q:"\"beautiful\" 的意思是？",opts:["醜陋的","美麗的","危險的","困難的"],a:1,ex:"beautiful = 美麗的。"},
    {cat:"v",t:"選擇題",q:"\"moment\" 的意思最接近？",opts:["時刻、片刻","年份","距離","重量"],a:0,ex:"moment = 時刻、片刻。"},
    {cat:"v",t:"選擇題",q:"\"move\" (名詞) 在此句意思是？",opts:["搬家","招式、動作","電影","心情"],a:1,ex:"此處 move = 招式、動作。"},
    {cat:"v",t:"是非題",q:"\"young\" 的意思是「年老的」。",opts:["正確 True","錯誤 False"],a:1,ex:"young = 年輕的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"scary\" 的意思是？",opts:["可怕的","快樂的","安靜的","昂貴的"],a:0,ex:"scary = 可怕的。"},
    {cat:"v",t:"選擇題",q:"The opposite of \"hard\" (difficult) is ____.",opts:["easy","heavy","tall","cold"],a:0,ex:"hard(困難) ↔ easy(容易)。"},
    {cat:"v",t:"選擇題",q:"\"battle\" 的中文是？",opts:["瓶子","戰鬥","村莊","旅程"],a:1,ex:"battle = 戰鬥。"}
  ]
},
/* ===== 9 ===== */ {
  emoji:"💨", rank:"情態助動詞 can/could", cover:"covers/cover09.png",
  title:"全集中・水之呼吸 Total Concentration",
  focus:"文法焦點：情態助動詞 Can / Could（能力與請求）",
  sentences:[
    {en:"\"I can use all ten forms of Water Breathing now.\"",zh:"「我現在能使出水之呼吸全部十個招式。」",img:"covers/L09_s01.jpg"},
    {en:"When he was younger, he could not hold his breath for long.",zh:"他年紀更小時，無法長時間屏住呼吸。",img:"covers/L09_s02.jpg"},
    {en:"\"Could you teach me the next form, master?\"",zh:"「師父，您可以教我下一個招式嗎？」",img:"covers/L09_s03.jpg"},
    {en:"Nezuko can sleep for many days to recover her strength.",zh:"禰豆子能睡上好幾天來恢復力量。",img:"covers/L09_s04.jpg"},
    {en:"A Demon Slayer can sense a demon by its smell.",zh:"鬼殺隊士能靠氣味察覺鬼。",img:"covers/L09_s05.jpg"},
    {en:"\"Can you protect the people while I fight?\"",zh:"「我戰鬥時，你能保護人們嗎？」",img:"covers/L09_s06.jpg"},
    {en:"Tanjiro could already cut a falling leaf in half.",zh:"炭治郎已經能把飄落的葉子切成兩半。",img:"covers/L09_s07.jpg"},
    {en:"\"Anyone can become strong if they never stop training.\"",zh:"「只要永不停止訓練，任何人都能變強。」",img:"covers/L09_s08.jpg"},
    {en:"Demons cannot walk under the bright sun.",zh:"鬼無法在明亮的陽光下行走。",img:"covers/L09_s09.jpg"},
    {en:"\"Could I rest for a moment?\" he asked politely.",zh:"「我可以休息一下嗎？」他禮貌地問。",img:"covers/L09_s10.jpg"}
  ],
  vocab:[
    {w:"form",pos:"n.",d:"招式、形式"},{w:"hold one's breath",pos:"phr.",d:"屏住呼吸"},
    {w:"recover",pos:"v.",d:"恢復"},{w:"strength",pos:"n.",d:"力量"},
    {w:"sense",pos:"v.",d:"察覺、感覺到"},{w:"leaf",pos:"n.",d:"葉子（複數 leaves）"},
    {w:"in half",pos:"phr.",d:"成兩半"},{w:"bright",pos:"adj.",d:"明亮的"},
    {w:"politely",pos:"adv.",d:"有禮貌地"},{w:"anyone",pos:"pron.",d:"任何人"}
  ],
  grammar:[
    {rule:"<em>can</em>：表「現在的能力」或「許可」，後接<b>原形動詞</b>。否定 <b>cannot/can't</b>。"},
    {rule:"<em>could</em>：can 的過去式，表「過去的能力」；也用於<b>客氣的請求</b>。例：<b>Could</b> you help me?"},
    {rule:"情態助動詞後一律接 <b>原形動詞</b>，且不隨主詞變化（沒有 cans）。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"\"I ____ use ten forms now.\"",opts:["can","cans","could to","am can"],a:0,ex:"現在能力用 can + 原形。"},
    {cat:"g",t:"選擇題",q:"When he was young, he ____ hold his breath for long.",opts:["can't","couldn't","cannot","don't"],a:1,ex:"過去能力的否定用 couldn't。"},
    {cat:"g",t:"填空題",q:"\"____ you teach me, please?\" (客氣請求)",opts:["Could","Can to","Do","Are"],a:0,ex:"客氣請求用 Could you...?"},
    {cat:"g",t:"選擇題",q:"After \"can\", the verb must be:",opts:["原形 base form","V-ing","過去式","to + V"],a:0,ex:"情態助動詞接原形。"},
    {cat:"g",t:"選擇題",q:"\"Anyone ____ become strong with training.\"",opts:["can","cans","could to","can to"],a:0,ex:"can + 原形 become。"},
    {cat:"g",t:"是非題",q:"\"She can swims very fast.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"can 後接原形 swim，故錯誤。"},
    {cat:"g",t:"選擇題",q:"Negative of \"can\" is:",opts:["cann't","can't","cans not","don't can"],a:1,ex:"can not 縮寫 can't。"},
    {cat:"g",t:"填空題",q:"Last year I ____ speak English well.",opts:["couldn't","can't","don't","wasn't"],a:0,ex:"過去能力否定用 couldn't。"},
    {cat:"g",t:"是非題",q:"\"Could you open the door?\" 是客氣的請求。",opts:["正確 True","錯誤 False"],a:0,ex:"Could you...? 是客氣請求，正確。"},
    {cat:"g",t:"選擇題",q:"\"____ I rest for a moment?\" (請求許可)",opts:["Could","Cans","Do can","Am"],a:0,ex:"Could I...? 請求許可。"},
    {cat:"v",t:"選擇題",q:"\"recover\" 的意思是？",opts:["恢復","攻擊","遺忘","購買"],a:0,ex:"recover = 恢復。"},
    {cat:"v",t:"選擇題",q:"\"strength\" 的中文是？",opts:["力量","長度","壓力","距離"],a:0,ex:"strength = 力量。"},
    {cat:"v",t:"選擇題",q:"\"sense\" (動詞) 的意思最接近？",opts:["察覺、感覺到","送出","坐下","販賣"],a:0,ex:"sense = 察覺、感覺到。"},
    {cat:"v",t:"選擇題",q:"\"leaf\" 的中文是？",opts:["樹枝","葉子","樹根","花朵"],a:1,ex:"leaf = 葉子。"},
    {cat:"v",t:"選擇題",q:"\"bright\" 的意思是？",opts:["黑暗的","明亮的","沉重的","危險的"],a:1,ex:"bright = 明亮的。"},
    {cat:"v",t:"選擇題",q:"\"politely\" 的意思是？",opts:["粗魯地","有禮貌地","快速地","大聲地"],a:1,ex:"politely = 有禮貌地。"},
    {cat:"v",t:"是非題",q:"\"in half\" 的意思是「成兩半」。",opts:["正確 True","錯誤 False"],a:0,ex:"in half = 成兩半，正確。"},
    {cat:"v",t:"選擇題",q:"The plural of \"leaf\" is ____.",opts:["leafs","leaves","leafes","leave"],a:1,ex:"leaf 的複數為 leaves。"},
    {cat:"v",t:"選擇題",q:"\"hold one's breath\" 的意思是？",opts:["屏住呼吸","大聲呼吸","握手","休息"],a:0,ex:"hold one's breath = 屏住呼吸。"},
    {cat:"v",t:"選擇題",q:"\"anyone\" 的意思是？",opts:["沒有人","任何人","某物","每件事"],a:1,ex:"anyone = 任何人。"}
  ]
},
/* ===== 10 ===== */ {
  emoji:"📜", rank:"情態助動詞 must/should", cover:"covers/cover10.png",
  title:"鬼殺隊的規矩 The Corps' Rules",
  focus:"文法焦點：情態助動詞 Must / Have to / Should（義務與建議）",
  sentences:[
    {en:"\"As a Demon Slayer, you must protect humans with your life.\"",zh:"「身為鬼殺隊士，你必須用生命保護人類。」",img:"covers/L10_s01.jpg"},
    {en:"\"You have to wear the uniform and carry a Nichirin sword.\"",zh:"「你必須穿上隊服並佩帶日輪刀。」",img:"covers/L10_s02.jpg"},
    {en:"\"You must not let any demon hurt the people.\"",zh:"「你絕不可以讓任何鬼傷害人們。」",img:"covers/L10_s03.jpg"},
    {en:"\"You should rest well before every mission.\"",zh:"「每次任務前你應該好好休息。」",img:"covers/L10_s04.jpg"},
    {en:"\"We must keep Nezuko a secret from the Corps.\"",zh:"「我們必須向鬼殺隊隱瞞禰豆子的事。」",img:"covers/L10_s05.jpg"},
    {en:"\"A slayer has to be brave, even when afraid.\"",zh:"「即使害怕，隊士也必須勇敢。」",img:"covers/L10_s06.jpg"},
    {en:"\"You don't have to fight alone; your friends will help.\"",zh:"「你不必獨自戰鬥；你的夥伴會幫你。」",img:"covers/L10_s07.jpg"},
    {en:"\"You should always listen to the Hashira.\"",zh:"「你應該永遠聽從柱的話。」",img:"covers/L10_s08.jpg"},
    {en:"\"We must reach the village before sunset.\"",zh:"「我們必須在日落前抵達村莊。」",img:"covers/L10_s09.jpg"},
    {en:"\"You must never break the rules of the Corps.\"",zh:"「你絕不可以違反鬼殺隊的規矩。」",img:"covers/L10_s10.jpg"}
  ],
  vocab:[
    {w:"protect",pos:"v.",d:"保護"},{w:"uniform",pos:"n.",d:"制服、隊服"},
    {w:"hurt",pos:"v.",d:"傷害"},{w:"rest",pos:"v.",d:"休息"},
    {w:"mission",pos:"n.",d:"任務"},{w:"secret",pos:"n.",d:"祕密"},
    {w:"afraid",pos:"adj.",d:"害怕的"},{w:"reach",pos:"v.",d:"抵達、到達"},
    {w:"rule",pos:"n.",d:"規則"},{w:"break",pos:"v.",d:"違反、打破"}
  ],
  grammar:[
    {rule:"<em>must</em>：表「強烈義務、必須」（說話者的要求）。<b>must not</b> = 禁止「絕不可以」。"},
    {rule:"<em>have to / has to</em>：表「外在規定的必須」。否定 <b>don't have to</b> = 「不必」（非禁止）。"},
    {rule:"<em>should</em>：表「建議、應該」，語氣較弱。三者後面都接 <b>原形動詞</b>。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"\"You ____ protect humans with your life.\" (強烈義務)",opts:["must","should","have","can"],a:0,ex:"強烈義務用 must。"},
    {cat:"g",t:"選擇題",q:"\"You ____ let any demon hurt people.\" (禁止)",opts:["don't have to","must not","should not have","can't to"],a:1,ex:"禁止用 must not。"},
    {cat:"g",t:"填空題",q:"\"You ____ rest before a mission.\" (建議)",opts:["should","must not","have","can't"],a:0,ex:"建議用 should。"},
    {cat:"g",t:"選擇題",q:"After \"must\", the verb is:",opts:["原形 base form","V-ing","to + V","過去式"],a:0,ex:"must + 原形。"},
    {cat:"g",t:"選擇題",q:"\"A slayer ____ be brave.\" (he, 外在規定)",opts:["have to","has to","musts","shoulds"],a:1,ex:"單數主詞 → has to。"},
    {cat:"g",t:"是非題",q:"\"must not\" 表示「禁止、絕不可以」。",opts:["正確 True","錯誤 False"],a:0,ex:"must not = 禁止，正確。"},
    {cat:"g",t:"選擇題",q:"\"It's a holiday, so you ____ go to school.\" (不必)",opts:["must not","don't have to","should not","can't"],a:1,ex:"「不必」用 don't have to。"},
    {cat:"g",t:"填空題",q:"\"You ____ see a doctor.\" (建議就醫)",opts:["should","must not","have to not","can"],a:0,ex:"建議用 should。"},
    {cat:"g",t:"是非題",q:"\"You must to carry a sword.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"must 後不加 to，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"don't have to\" 的意思是：",opts:["禁止","不必、不需要","應該","一定要"],a:1,ex:"don't have to = 不必。"},
    {cat:"v",t:"選擇題",q:"\"uniform\" 的中文是？",opts:["制服","武器","旗子","地圖"],a:0,ex:"uniform = 制服、隊服。"},
    {cat:"v",t:"選擇題",q:"\"mission\" 的意思是？",opts:["任務","錯誤","訊息","市場"],a:0,ex:"mission = 任務。"},
    {cat:"v",t:"選擇題",q:"\"secret\" 的中文是？",opts:["祕密","部門","季節","秘書"],a:0,ex:"secret = 祕密。"},
    {cat:"v",t:"選擇題",q:"\"afraid\" 的意思是？",opts:["生氣的","害怕的","驕傲的","疲累的"],a:1,ex:"afraid = 害怕的。"},
    {cat:"v",t:"選擇題",q:"\"reach\" (動詞) 的意思最接近？",opts:["抵達、到達","離開","教導","休息"],a:0,ex:"reach = 抵達、到達。"},
    {cat:"v",t:"選擇題",q:"\"break the rules\" 的意思是？",opts:["遵守規則","違反規則","制定規則","背規則"],a:1,ex:"break the rules = 違反規則。"},
    {cat:"v",t:"是非題",q:"\"protect\" 的意思是「攻擊」。",opts:["正確 True","錯誤 False"],a:1,ex:"protect = 保護，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"rest\" (動詞) 的意思是？",opts:["休息","奔跑","購買","逮捕"],a:0,ex:"rest = 休息。"},
    {cat:"v",t:"選擇題",q:"\"rule\" 的中文是？",opts:["規則","尺","角色","謠言"],a:0,ex:"rule = 規則。"},
    {cat:"v",t:"選擇題",q:"\"hurt\" 的意思是？",opts:["治療","傷害","幫助","保護"],a:1,ex:"hurt = 傷害。"}
  ]
},
/* ===== 11 ===== */ {
  emoji:"🩹", rank:"被動語態", cover:"covers/cover11.png",
  title:"蝴蝶屋的療傷 Healing at the Butterfly Estate",
  focus:"文法焦點：被動語態 Passive Voice（be + p.p.）",
  sentences:[
    {en:"After the battle, Tanjiro was taken to the Butterfly Estate.",zh:"戰鬥之後，炭治郎被帶到了蝴蝶屋。",img:"covers/L11_s01.jpg"},
    {en:"His deep wounds were treated by Shinobu and her helpers.",zh:"他的深傷由忍和她的助手們治療。",img:"covers/L11_s02.jpg"},
    {en:"Special medicine is made here from rare mountain flowers.",zh:"這裡用稀有的山花製作特殊的藥。",img:"covers/L11_s03.jpg"},
    {en:"The whole garden is filled with beautiful butterflies.",zh:"整座花園都充滿了美麗的蝴蝶。",img:"covers/L11_s04.jpg"},
    {en:"Tanjiro was trained again once his body grew strong.",zh:"等身體變強後，炭治郎再次接受訓練。",img:"covers/L11_s05.jpg"},
    {en:"New techniques were taught by the gentle girls.",zh:"新的技巧由溫柔的女孩們傳授。",img:"covers/L11_s06.jpg"},
    {en:"The estate is known for healing injured slayers.",zh:"這座宅邸以治療受傷的隊士而聞名。",img:"covers/L11_s07.jpg"},
    {en:"Many lives have been saved by Shinobu's medicine.",zh:"許多生命因忍的藥而獲救。",img:"covers/L11_s08.jpg"},
    {en:"\"You will be tested before your next mission.\"",zh:"「下次任務前，你會接受測試。」",img:"covers/L11_s09.jpg"},
    {en:"The demons must be defeated before more people are hurt.",zh:"必須在更多人受傷前打敗那些鬼。",img:"covers/L11_s10.jpg"}
  ],
  vocab:[
    {w:"wound",pos:"n.",d:"傷口"},{w:"treat",pos:"v.",d:"治療"},
    {w:"medicine",pos:"n.",d:"藥"},{w:"rare",pos:"adj.",d:"稀有的"},
    {w:"garden",pos:"n.",d:"花園"},{w:"technique",pos:"n.",d:"技巧"},
    {w:"heal",pos:"v.",d:"治癒"},{w:"injured",pos:"adj.",d:"受傷的"},
    {w:"save",pos:"v.",d:"拯救"},{w:"defeat",pos:"v.",d:"打敗"}
  ],
  grammar:[
    {rule:"<em>被動語態</em>：<b>be + 過去分詞(p.p.)</b>，強調「動作的承受者」。動作執行者用 <b>by</b> 帶出。"},
    {rule:"主動→被動：They treated him. → He <b>was treated</b> (by them)。be 動詞依時態變化。"},
    {rule:"現在被動 am/is/are + p.p.；過去被動 was/were + p.p.；未來被動 <b>will be</b> + p.p.。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"Tanjiro ____ to the estate. (take, 過去被動)",opts:["took","was taken","is taking","takes"],a:1,ex:"被動 was + p.p. taken。"},
    {cat:"g",t:"選擇題",q:"His wounds ____ by Shinobu. (treat, 過去被動)",opts:["were treated","treated","are treating","treat"],a:0,ex:"複數主詞 → were treated。"},
    {cat:"g",t:"填空題",q:"Medicine ____ (make) here. (現在被動)",opts:["is made","makes","is making","made"],a:0,ex:"被動 is made。"},
    {cat:"g",t:"選擇題",q:"\"You ____ later.\" (train, 未來被動)",opts:["will train","will be trained","are training","train"],a:1,ex:"未來被動 will be + p.p.。"},
    {cat:"g",t:"選擇題",q:"Passive of \"They built the house.\" is:",opts:["The house built.","The house was built.","The house is build.","The house builds."],a:1,ex:"過去被動 was built。"},
    {cat:"g",t:"是非題",q:"\"The demon was defeated by the hero.\" 是被動語態。",opts:["正確 True","錯誤 False"],a:0,ex:"was + p.p. = 被動，正確。"},
    {cat:"g",t:"選擇題",q:"In a passive sentence, the doer is introduced by:",opts:["with","by","of","for"],a:1,ex:"動作執行者用 by。"},
    {cat:"g",t:"填空題",q:"English ____ (speak) in many countries.",opts:["is spoken","speaks","is speaking","spoke"],a:0,ex:"被動 is spoken。"},
    {cat:"g",t:"是非題",q:"\"The letter was wrote by him.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"write 的 p.p. 是 written，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"The room ____ every day.\" (clean, 現在被動)",opts:["is cleaned","cleans","cleaning","cleaned"],a:0,ex:"被動 is cleaned。"},
    {cat:"v",t:"選擇題",q:"\"wound\" (名詞) 的意思是？",opts:["傷口","風","木材","世界"],a:0,ex:"wound = 傷口。"},
    {cat:"v",t:"選擇題",q:"\"medicine\" 的中文是？",opts:["藥","醫生","醫院","疾病"],a:0,ex:"medicine = 藥。"},
    {cat:"v",t:"選擇題",q:"\"rare\" 的意思是？",opts:["常見的","稀有的","生的","公平的"],a:1,ex:"rare = 稀有的。"},
    {cat:"v",t:"選擇題",q:"\"heal\" 的意思最接近？",opts:["治癒","傷害","聽見","隱藏"],a:0,ex:"heal = 治癒。"},
    {cat:"v",t:"選擇題",q:"\"injured\" 的意思是？",opts:["健康的","受傷的","生氣的","疲累的"],a:1,ex:"injured = 受傷的。"},
    {cat:"v",t:"選擇題",q:"\"technique\" 的中文是？",opts:["技巧","科技","老師","測驗"],a:0,ex:"technique = 技巧。"},
    {cat:"v",t:"是非題",q:"\"save\" 的意思是「拯救」。",opts:["正確 True","錯誤 False"],a:0,ex:"save = 拯救（也可指儲存），正確。"},
    {cat:"v",t:"選擇題",q:"\"defeat\" 的意思是？",opts:["打敗","逃跑","失敗","保護"],a:0,ex:"defeat = 打敗。"},
    {cat:"v",t:"選擇題",q:"\"garden\" 的中文是？",opts:["花園","車庫","廚房","市場"],a:0,ex:"garden = 花園。"},
    {cat:"v",t:"選擇題",q:"\"treat\" (此處) 的意思是？",opts:["治療","請客（甜點）","對待","以上皆可"],a:3,ex:"treat 一字多義：治療/請客/對待，此處為治療。"}
  ]
},
/* ===== 12 ===== */ {
  emoji:"🎴", rank:"不定詞 to V", cover:"covers/cover12.png",
  title:"想守護的人 Someone to Protect",
  focus:"文法焦點：不定詞 To + V（目的、want/need + to V）",
  sentences:[
    {en:"Tanjiro fights to save his sister and every innocent person.",zh:"炭治郎戰鬥是為了拯救妹妹和每個無辜的人。",img:"covers/L12_s01.jpg"},
    {en:"\"I want to become strong enough to defeat Muzan.\"",zh:"「我想變得足夠強大，去打敗無慘。」",img:"covers/L12_s02.jpg"},
    {en:"Zenitsu was too scared to move, but he still tried.",zh:"善逸嚇得無法動彈，但他仍然努力嘗試。",img:"covers/L12_s03.jpg"},
    {en:"\"We need to work together to survive this mission.\"",zh:"「我們需要合作，才能在這次任務中生存。」",img:"covers/L12_s04.jpg"},
    {en:"He decided to follow the smell of the demon.",zh:"他決定循著鬼的氣味前進。",img:"covers/L12_s05.jpg"},
    {en:"Nezuko learned to fight to protect humans, not eat them.",zh:"禰豆子學會戰鬥是為了保護人類，而非吃人。",img:"covers/L12_s06.jpg"},
    {en:"\"I hope to find a way to cure my sister.\"",zh:"「我希望找到治好妹妹的方法。」",img:"covers/L12_s07.jpg"},
    {en:"It is important to stay calm in a battle.",zh:"在戰鬥中保持冷靜很重要。",img:"covers/L12_s08.jpg"},
    {en:"They stopped to rest under a tall tree.",zh:"他們停下來在一棵大樹下休息。",img:"covers/L12_s09.jpg"},
    {en:"\"I promise to never give up on you.\"",zh:"「我保證永不放棄你。」",img:"covers/L12_s10.jpg"}
  ],
  vocab:[
    {w:"save",pos:"v.",d:"拯救"},{w:"innocent",pos:"adj.",d:"無辜的"},
    {w:"enough",pos:"adv.",d:"足夠地"},{w:"scared",pos:"adj.",d:"害怕的"},
    {w:"survive",pos:"v.",d:"存活"},{w:"decide",pos:"v.",d:"決定"},
    {w:"follow",pos:"v.",d:"跟隨、循著"},{w:"cure",pos:"v.",d:"治好、治癒"},
    {w:"calm",pos:"adj.",d:"冷靜的"},{w:"important",pos:"adj.",d:"重要的"}
  ],
  grammar:[
    {rule:"<em>不定詞 to + 原形動詞</em>，可表「目的（為了…）」：He fights <b>to save</b> her。"},
    {rule:"常見動詞後接不定詞：<b>want, need, decide, hope, plan, would like, learn</b> + to V。"},
    {rule:"句型 <b>too + 形容詞 + to V</b>（太…而無法…）：too scared <b>to move</b>；<b>形容詞 + enough + to V</b>。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"Tanjiro fights ____ his sister. (目的)",opts:["to save","save","saving","saved"],a:0,ex:"表目的用 to + 原形 save。"},
    {cat:"g",t:"選擇題",q:"\"I want ____ strong.\" (become)",opts:["become","to become","becoming","became"],a:1,ex:"want + to V。"},
    {cat:"g",t:"填空題",q:"Zenitsu was too scared ____ (move).",opts:["to move","move","moving","moved"],a:0,ex:"too + adj + to V。"},
    {cat:"g",t:"選擇題",q:"\"We need ____ together.\" (work)",opts:["work","to work","working","worked"],a:1,ex:"need + to V。"},
    {cat:"g",t:"選擇題",q:"Which verb is usually followed by \"to V\"?",opts:["enjoy","decide","finish","practice"],a:1,ex:"decide + to V；enjoy/finish/practice 接 V-ing。"},
    {cat:"g",t:"是非題",q:"\"He hopes to win the game.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"hope + to V，正確。"},
    {cat:"g",t:"選擇題",q:"\"She is strong enough ____ the rock.\" (cut)",opts:["to cut","cut","cutting","cuts"],a:0,ex:"enough + to V。"},
    {cat:"g",t:"填空題",q:"\"They decided ____ (leave) early.\"",opts:["to leave","leave","leaving","left"],a:0,ex:"decide + to V。"},
    {cat:"g",t:"是非題",q:"\"I want become a hero.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"want 後須加 to，應為 to become，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"He trained hard ____ stronger.\" (目的, get)",opts:["to get","get","getting","got"],a:0,ex:"表目的 to get。"},
    {cat:"v",t:"選擇題",q:"\"innocent\" 的意思是？",opts:["有罪的","無辜的","危險的","聰明的"],a:1,ex:"innocent = 無辜的。"},
    {cat:"v",t:"選擇題",q:"\"survive\" 的意思是？",opts:["存活","死亡","學習","攜帶"],a:0,ex:"survive = 存活。"},
    {cat:"v",t:"選擇題",q:"\"decide\" 的中文是？",opts:["決定","拒絕","隱藏","裝飾"],a:0,ex:"decide = 決定。"},
    {cat:"v",t:"選擇題",q:"\"cure\" 的意思最接近？",opts:["治好、治癒","詛咒","彎曲","好奇"],a:0,ex:"cure = 治好、治癒。"},
    {cat:"v",t:"選擇題",q:"\"calm\" 的意思是？",opts:["緊張的","冷靜的","吵鬧的","快樂的"],a:1,ex:"calm = 冷靜的。"},
    {cat:"v",t:"選擇題",q:"\"important\" 的中文是？",opts:["重要的","進口的","不耐煩的","可能的"],a:0,ex:"important = 重要的。"},
    {cat:"v",t:"是非題",q:"\"follow\" 的意思是「跟隨」。",opts:["正確 True","錯誤 False"],a:0,ex:"follow = 跟隨、循著，正確。"},
    {cat:"v",t:"選擇題",q:"\"scared\" 的意思是？",opts:["害怕的","受傷的","誠實的","稀有的"],a:0,ex:"scared = 害怕的。"},
    {cat:"v",t:"選擇題",q:"\"save\" 在此句的意思是？",opts:["拯救","儲蓄","儲存檔案","以上皆可"],a:3,ex:"save 一字多義；此處為拯救。"},
    {cat:"v",t:"選擇題",q:"\"enough\" 的意思是？",opts:["足夠的","太多的","太少的","空的"],a:0,ex:"enough = 足夠的。"}
  ]
},
/* ===== 13 ===== */ {
  emoji:"👃", rank:"動名詞 V-ing", cover:"covers/cover13.png",
  title:"善逸與伊之助 Zenitsu and Inosuke",
  focus:"文法焦點：動名詞 V-ing（當主詞/受詞、enjoy + V-ing）",
  sentences:[
    {en:"Running through the forest is Inosuke's favorite thing.",zh:"在森林裡奔跑是伊之助最愛的事。",img:"covers/L13_s01.jpg"},
    {en:"Zenitsu hates fighting, but he is amazing while sleeping.",zh:"善逸討厭戰鬥，但他在睡夢中卻很驚人。",img:"covers/L13_s02.jpg"},
    {en:"Tanjiro is good at smelling the threads of a demon.",zh:"炭治郎擅長嗅出敵人的「線」。",img:"covers/L13_s03.jpg"},
    {en:"\"I enjoy helping people,\" Tanjiro said with a smile.",zh:"「我喜歡幫助人，」炭治郎微笑著說。",img:"covers/L13_s04.jpg"},
    {en:"Inosuke loves climbing trees and shouting loudly.",zh:"伊之助愛爬樹和大聲吼叫。",img:"covers/L13_s05.jpg"},
    {en:"They practiced breathing every single morning.",zh:"他們每天早晨都練習呼吸法。",img:"covers/L13_s06.jpg"},
    {en:"Zenitsu kept complaining about the long journey.",zh:"善逸一直抱怨這段漫長的旅程。",img:"covers/L13_s07.jpg"},
    {en:"\"Thank you for saving my life,\" a villager said.",zh:"「謝謝你救了我的命，」一位村民說。",img:"covers/L13_s08.jpg"},
    {en:"Eating delicious food made Inosuke calm down.",zh:"吃美味的食物讓伊之助冷靜下來。",img:"covers/L13_s09.jpg"},
    {en:"They never stopped becoming better swordsmen.",zh:"他們從未停止成為更好的劍士。",img:"covers/L13_s10.jpg"}
  ],
  vocab:[
    {w:"favorite",pos:"adj.",d:"最喜愛的"},{w:"hate",pos:"v.",d:"討厭"},
    {w:"amazing",pos:"adj.",d:"驚人的"},{w:"thread",pos:"n.",d:"線、絲"},
    {w:"enjoy",pos:"v.",d:"享受、喜歡"},{w:"practice",pos:"v.",d:"練習"},
    {w:"complain",pos:"v.",d:"抱怨"},{w:"villager",pos:"n.",d:"村民"},
    {w:"delicious",pos:"adj.",d:"美味的"},{w:"loudly",pos:"adv.",d:"大聲地"}
  ],
  grammar:[
    {rule:"<em>動名詞 V-ing</em> = 把動詞變名詞。可當<b>主詞</b>：<b>Running</b> is fun. 或<b>受詞</b>。"},
    {rule:"常見動詞後接 V-ing：<b>enjoy, hate, like, love, finish, practice, keep, stop</b> + V-ing。"},
    {rule:"<b>介系詞 (at, of, in, for, about...) 後面</b>一定接 V-ing：good <b>at smelling</b>, thank you <b>for saving</b>。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"____ through the forest is fun. (run, 當主詞)",opts:["Run","Running","To run","Runs"],a:1,ex:"當主詞用動名詞 Running。"},
    {cat:"g",t:"選擇題",q:"Zenitsu hates ____. (fight)",opts:["fight","fighting","to fight","fought"],a:1,ex:"hate + V-ing。"},
    {cat:"g",t:"填空題",q:"He is good at ____ (smell) demons.",opts:["smelling","smell","to smell","smelled"],a:0,ex:"介系詞 at + V-ing。"},
    {cat:"g",t:"選擇題",q:"\"I enjoy ____ people.\" (help)",opts:["help","to help","helping","helped"],a:2,ex:"enjoy + V-ing。"},
    {cat:"g",t:"選擇題",q:"Which verb is followed by V-ing?",opts:["want","decide","keep","hope"],a:2,ex:"keep + V-ing；其餘接 to V。"},
    {cat:"g",t:"是非題",q:"\"She is interested in learning English.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"in + V-ing，正確。"},
    {cat:"g",t:"選擇題",q:"\"Thank you for ____ me.\" (save)",opts:["save","saving","to save","saved"],a:1,ex:"for(介系詞) + V-ing。"},
    {cat:"g",t:"填空題",q:"\"They kept ____ (complain).\"",opts:["complaining","complain","to complain","complained"],a:0,ex:"keep + V-ing。"},
    {cat:"g",t:"是非題",q:"\"I am good at to swim.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"at 後應接 swimming，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"____ food is important.\" (eat, 當主詞)",opts:["Eat","Eating","To eating","Eats"],a:1,ex:"當主詞用動名詞 Eating。"},
    {cat:"v",t:"選擇題",q:"\"hate\" 的意思是？",opts:["喜愛","討厭","害怕","希望"],a:1,ex:"hate = 討厭。"},
    {cat:"v",t:"選擇題",q:"\"amazing\" 的意思是？",opts:["普通的","驚人的、了不起的","無聊的","危險的"],a:1,ex:"amazing = 驚人的。"},
    {cat:"v",t:"選擇題",q:"\"complain\" 的意思是？",opts:["抱怨","讚美","完成","比較"],a:0,ex:"complain = 抱怨。"},
    {cat:"v",t:"選擇題",q:"\"villager\" 的中文是？",opts:["村民","壞人","旅人","士兵"],a:0,ex:"villager = 村民。"},
    {cat:"v",t:"選擇題",q:"\"delicious\" 的意思是？",opts:["美味的","困難的","美麗的","危險的"],a:0,ex:"delicious = 美味的。"},
    {cat:"v",t:"選擇題",q:"\"loudly\" 的意思是？",opts:["安靜地","大聲地","快速地","慢慢地"],a:1,ex:"loudly = 大聲地。"},
    {cat:"v",t:"是非題",q:"\"favorite\" 的意思是「最討厭的」。",opts:["正確 True","錯誤 False"],a:1,ex:"favorite = 最喜愛的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"practice\" (動詞) 的意思是？",opts:["練習","保護","購買","原諒"],a:0,ex:"practice = 練習。"},
    {cat:"v",t:"選擇題",q:"\"enjoy\" 的意思最接近？",opts:["享受、喜歡","僱用","加入","判斷"],a:0,ex:"enjoy = 享受、喜歡。"},
    {cat:"v",t:"選擇題",q:"\"thread\" 的中文是？",opts:["線、絲","威脅","麵包","寶座"],a:0,ex:"thread = 線、絲。"}
  ]
},
/* ===== 14 ===== */ {
  emoji:"🔥", rank:"關係代名詞", cover:"covers/cover14.png",
  title:"炎柱・煉獄杏壽郎 The Flame Hashira",
  focus:"文法焦點：關係代名詞 Who / Which / That / Whose",
  sentences:[
    {en:"Rengoku is the Flame Hashira who never lets his heart burn out.",zh:"煉獄是那位心火永不熄滅的炎柱。",img:"covers/L14_s01.jpg"},
    {en:"On the train which carried hundreds of people, a demon was hiding.",zh:"在那班載著數百人的列車上，藏著一隻鬼。",img:"covers/L14_s02.jpg"},
    {en:"He fought the demon that attacked the passengers all night.",zh:"他整夜對抗那隻攻擊乘客的鬼。",img:"covers/L14_s03.jpg"},
    {en:"The man whose words Tanjiro never forgot smiled warmly.",zh:"那位話語令炭治郎永生難忘的男人溫暖地笑著。",img:"covers/L14_s04.jpg"},
    {en:"A passenger is a person who travels on a train.",zh:"乘客是搭乘火車旅行的人。",img:"covers/L14_s05.jpg"},
    {en:"The fire which Rengoku created lit up the dark night.",zh:"煉獄製造的火焰照亮了黑夜。",img:"covers/L14_s06.jpg"},
    {en:"Tanjiro met a warrior who taught him about courage.",zh:"炭治郎遇見一位教他何謂勇氣的戰士。",img:"covers/L14_s07.jpg"},
    {en:"The dreams that the demon showed them were not real.",zh:"鬼讓他們看見的夢境並非真實。",img:"covers/L14_s08.jpg"},
    {en:"Rengoku protected everyone who was on the train.",zh:"煉獄保護了車上的每一個人。",img:"covers/L14_s09.jpg"},
    {en:"\"Set your heart ablaze,\" said the hero whom they admired.",zh:"「燃燒你的心，」這位他們敬佩的英雄說。",img:"covers/L14_s10.jpg"}
  ],
  vocab:[
    {w:"Hashira",pos:"n.",d:"柱（最強劍士）"},{w:"burn out",pos:"phr.",d:"燒盡、熄滅"},
    {w:"carry",pos:"v.",d:"載運"},{w:"passenger",pos:"n.",d:"乘客"},
    {w:"forget",pos:"v.",d:"忘記"},{w:"courage",pos:"n.",d:"勇氣"},
    {w:"dream",pos:"n.",d:"夢、夢想"},{w:"real",pos:"adj.",d:"真實的"},
    {w:"protect",pos:"v.",d:"保護"},{w:"admire",pos:"v.",d:"欽佩、敬佩"}
  ],
  grammar:[
    {rule:"<em>關係代名詞</em>把兩句合併，用來修飾名詞（先行詞）。<b>who</b> 修飾「人」。"},
    {rule:"<b>which</b> 修飾「物/動物」；<b>that</b> 人、物皆可。例：the demon <b>that/which</b> attacked them。"},
    {rule:"<b>whose</b> 表「…的」(所有格)；<b>whom</b> 作受詞時指人。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"Rengoku is the Hashira ____ never gives up.",opts:["which","who","whose","where"],a:1,ex:"修飾人 → who。"},
    {cat:"g",t:"選擇題",q:"The train ____ carried people had a demon.",opts:["who","which","whose","when"],a:1,ex:"修飾物 → which。"},
    {cat:"g",t:"填空題",q:"He fought the demon ____ attacked them. (人物皆可)",opts:["who","that","whose","where"],a:1,ex:"that 人物皆可。"},
    {cat:"g",t:"選擇題",q:"\"the man ____ words he never forgot\" (他的)",opts:["who","which","whose","that"],a:2,ex:"表所有格「他的」用 whose。"},
    {cat:"g",t:"選擇題",q:"A passenger is a person ____ travels on a train.",opts:["which","who","whose","when"],a:1,ex:"修飾人 → who。"},
    {cat:"g",t:"是非題",q:"\"I have a cat which is black.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"動物用 which，正確。"},
    {cat:"g",t:"選擇題",q:"\"The fire ____ he created was huge.\"",opts:["who","which","whose","when"],a:1,ex:"修飾物 fire → which。"},
    {cat:"g",t:"填空題",q:"\"She is the girl ____ saved me.\" (人)",opts:["who","which","whose","where"],a:0,ex:"修飾人 → who。"},
    {cat:"g",t:"是非題",q:"\"The boy which won is my friend.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"修飾人應用 who，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"This is the house ____ roof is red.\" (它的)",opts:["who","which","whose","that"],a:2,ex:"「它的屋頂」用 whose。"},
    {cat:"v",t:"選擇題",q:"\"passenger\" 的意思是？",opts:["駕駛","乘客","行人","售票員"],a:1,ex:"passenger = 乘客。"},
    {cat:"v",t:"選擇題",q:"\"courage\" 的中文是？",opts:["憤怒","勇氣","好奇","運氣"],a:1,ex:"courage = 勇氣。"},
    {cat:"v",t:"選擇題",q:"\"admire\" 的意思最接近？",opts:["欽佩、敬佩","承認","進入","提醒"],a:0,ex:"admire = 欽佩、敬佩。"},
    {cat:"v",t:"選擇題",q:"\"real\" 的意思是？",opts:["真實的","皇家的","可怕的","柔軟的"],a:0,ex:"real = 真實的。"},
    {cat:"v",t:"選擇題",q:"\"forget\" 的意思是？",opts:["記得","忘記","原諒","得到"],a:1,ex:"forget = 忘記。"},
    {cat:"v",t:"選擇題",q:"\"burn out\" 在此的意思是？",opts:["燒盡、熄滅","引燃","發光","加熱"],a:0,ex:"burn out = 燒盡、熄滅。"},
    {cat:"v",t:"是非題",q:"\"dream\" 只能當動詞，不能當名詞。",opts:["正確 True","錯誤 False"],a:1,ex:"dream 可當名詞(夢)也可當動詞，故錯誤。"},
    {cat:"v",t:"選擇題",q:"The opposite of \"real\" is ____.",opts:["fake","royal","fast","rich"],a:0,ex:"real(真) ↔ fake(假)。"},
    {cat:"v",t:"選擇題",q:"\"protect\" 的意思是？",opts:["保護","攻擊","抗議","計畫"],a:0,ex:"protect = 保護。"},
    {cat:"v",t:"選擇題",q:"\"carry\" 在 \"carried hundreds of people\" 中意思是？",opts:["載運","搬石頭","攜帶武器","背小孩"],a:0,ex:"此處 carry = 載運（乘客）。"}
  ]
},
/* ===== 15 ===== */ {
  emoji:"🎶", rank:"對等連接詞", cover:"covers/cover15.png",
  title:"音柱・宇髓天元 The Sound Hashira",
  focus:"文法焦點：對等連接詞 And / But / Or / So",
  sentences:[
    {en:"Tengen is loud and flashy, but he is also a brilliant fighter.",zh:"天元既吵鬧又華麗，但他也是個出色的戰士。",img:"covers/L15_s01.jpg"},
    {en:"The team could fight together or split up to search.",zh:"隊伍可以一起戰鬥，或是分頭搜索。",img:"covers/L15_s02.jpg"},
    {en:"The demon was very strong, but the slayers refused to run.",zh:"那隻鬼非常強大，但隊士們拒絕逃跑。",img:"covers/L15_s03.jpg"},
    {en:"Daki was dangerous, so the friends worked as one team.",zh:"墮姬很危險，所以夥伴們團結成一隊。",img:"covers/L15_s04.jpg"},
    {en:"Tanjiro searched the streets, and Zenitsu searched the houses.",zh:"炭治郎搜索街道，善逸搜索房屋。",img:"covers/L15_s05.jpg"},
    {en:"They were very tired, but they did not stop.",zh:"他們非常疲憊，但沒有停下。",img:"covers/L15_s06.jpg"},
    {en:"Should they go left or right at the dark corner?",zh:"在黑暗的轉角，他們該往左還是往右？",img:"covers/L15_s07.jpg"},
    {en:"The night was long, so everyone stayed alert.",zh:"夜很長，所以大家都保持警戒。",img:"covers/L15_s08.jpg"},
    {en:"Tengen shouted orders, and his partners fought bravely.",zh:"天元高喊命令，他的夥伴們勇敢作戰。",img:"covers/L15_s09.jpg"},
    {en:"They could win, or they could lose everything.",zh:"他們可能獲勝，也可能失去一切。",img:"covers/L15_s10.jpg"}
  ],
  vocab:[
    {w:"loud",pos:"adj.",d:"大聲的、吵鬧的"},{w:"flashy",pos:"adj.",d:"華麗的、炫的"},
    {w:"brilliant",pos:"adj.",d:"傑出的"},{w:"split up",pos:"phr.",d:"分頭、分開"},
    {w:"refuse",pos:"v.",d:"拒絕"},{w:"search",pos:"v.",d:"搜索、尋找"},
    {w:"tired",pos:"adj.",d:"疲憊的"},{w:"alert",pos:"adj.",d:"警覺的"},
    {w:"order",pos:"n.",d:"命令"},{w:"lose",pos:"v.",d:"失去、輸（過去 lost）"}
  ],
  grammar:[
    {rule:"<em>對等連接詞</em>連接對等的字、片語或句子。<b>and</b>（並列、而且）、<b>but</b>（轉折、但是）。"},
    {rule:"<b>or</b>（選擇、或者）、<b>so</b>（結果、所以）。例：He was tired, <b>so</b> he rested。"},
    {rule:"口訣：並列 and、轉折 but、選擇 or、結果 so。連接兩個完整句子時前面常加逗號。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"Tengen is loud ____ flashy. (並列)",opts:["and","but","or","so"],a:0,ex:"並列用 and。"},
    {cat:"g",t:"選擇題",q:"The demon was strong, ____ they refused to run. (轉折)",opts:["and","but","or","so"],a:1,ex:"轉折用 but。"},
    {cat:"g",t:"填空題",q:"Fight together ____ split up? (選擇)",opts:["or","and","but","so"],a:0,ex:"選擇用 or。"},
    {cat:"g",t:"選擇題",q:"Daki was dangerous, ____ they worked as a team. (結果)",opts:["and","but","or","so"],a:3,ex:"結果用 so。"},
    {cat:"g",t:"選擇題",q:"\"I was hungry, ____ I ate a rice ball.\"",opts:["but","or","so","and"],a:2,ex:"因果結果用 so。"},
    {cat:"g",t:"是非題",q:"\"She is kind but strict.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"but 連接對比形容詞，正確。"},
    {cat:"g",t:"選擇題",q:"\"Do you want tea ____ coffee?\"",opts:["and","but","or","so"],a:2,ex:"二選一用 or。"},
    {cat:"g",t:"填空題",q:"\"It rained, ____ we stayed home.\" (結果)",opts:["so","but","or","and"],a:0,ex:"結果用 so。"},
    {cat:"g",t:"是非題",q:"\"He tried hard, so he failed.\" 句意合理。",opts:["正確 True","錯誤 False"],a:1,ex:"努力卻失敗應用轉折 but，用 so 不合理。"},
    {cat:"g",t:"選擇題",q:"\"Tanjiro ____ Nezuko traveled together.\"",opts:["and","but","or","so"],a:0,ex:"並列兩個名詞用 and。"},
    {cat:"v",t:"選擇題",q:"\"flashy\" 的意思最接近？",opts:["華麗的、炫的","樸素的","安靜的","緩慢的"],a:0,ex:"flashy = 華麗的、炫的。"},
    {cat:"v",t:"選擇題",q:"\"brilliant\" 的意思是？",opts:["傑出的","愚笨的","危險的","害怕的"],a:0,ex:"brilliant = 傑出的。"},
    {cat:"v",t:"選擇題",q:"\"refuse\" 的意思是？",opts:["拒絕","同意","回收","休息"],a:0,ex:"refuse = 拒絕。"},
    {cat:"v",t:"選擇題",q:"\"search\" 的意思是？",opts:["搜索、尋找","坐下","販賣","教導"],a:0,ex:"search = 搜索、尋找。"},
    {cat:"v",t:"選擇題",q:"\"alert\" 的意思最接近？",opts:["警覺的","疲累的","生氣的","快樂的"],a:0,ex:"alert = 警覺的。"},
    {cat:"v",t:"選擇題",q:"\"split up\" 的意思是？",opts:["分頭、分開","合併","坐下","加速"],a:0,ex:"split up = 分頭、分開。"},
    {cat:"v",t:"是非題",q:"\"loud\" 的意思是「安靜的」。",opts:["正確 True","錯誤 False"],a:1,ex:"loud = 大聲的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"The past form of \"lose\" is ____.",opts:["losed","lost","loosed","loses"],a:1,ex:"lose→lost。"},
    {cat:"v",t:"選擇題",q:"\"order\" (名詞) 在此句意思是？",opts:["命令","順序","訂單","以上皆可"],a:3,ex:"order 一字多義；此處為命令。"},
    {cat:"v",t:"選擇題",q:"The opposite of \"win\" is ____.",opts:["lose","search","refuse","rest"],a:0,ex:"win(贏) ↔ lose(輸)。"}
  ]
},
/* ===== 16 ===== */ {
  emoji:"🌫️", rank:"從屬連接詞", cover:"covers/cover16.png",
  title:"無限城之前 Before the Infinity Castle",
  focus:"文法焦點：從屬連接詞 Because / Although / When",
  sentences:[
    {en:"Because Muzan grew stronger, the Corps prepared for the final war.",zh:"因為無慘越來越強，鬼殺隊為最終決戰做準備。",img:"covers/L16_s01.jpg"},
    {en:"Although the slayers were tired, they kept training every day.",zh:"雖然隊士們很疲憊，他們仍每天不停訓練。",img:"covers/L16_s02.jpg"},
    {en:"When the night came, the demons would rise again.",zh:"當夜晚來臨，鬼便會再度出現。",img:"covers/L16_s03.jpg"},
    {en:"Tanjiro stayed calm even though he felt afraid inside.",zh:"即使內心害怕，炭治郎仍保持冷靜。",img:"covers/L16_s04.jpg"},
    {en:"Because Nezuko could resist the sun, she gave everyone hope.",zh:"因為禰豆子能抵抗陽光，她給了大家希望。",img:"covers/L16_s05.jpg"},
    {en:"The Hashira gathered when the moon was full.",zh:"當月圓時，柱們集結了。",img:"covers/L16_s06.jpg"},
    {en:"Although they had lost friends, they did not lose hope.",zh:"雖然他們失去了朋友，卻沒有失去希望。",img:"covers/L16_s07.jpg"},
    {en:"When Muzan appeared, the real battle began.",zh:"當無慘現身，真正的戰鬥開始了。",img:"covers/L16_s08.jpg"},
    {en:"They trained hard because the enemy was so powerful.",zh:"他們努力訓練，因為敵人太強大了。",img:"covers/L16_s09.jpg"},
    {en:"Even though the path was dark, they walked forward together.",zh:"即使前路黑暗，他們仍一起向前走。",img:"covers/L16_s10.jpg"}
  ],
  vocab:[
    {w:"grow",pos:"v.",d:"成長、變得（過去 grew）"},{w:"prepare",pos:"v.",d:"準備"},
    {w:"tired",pos:"adj.",d:"疲憊的"},{w:"rise",pos:"v.",d:"升起、出現（過去 rose）"},
    {w:"calm",pos:"adj.",d:"冷靜的"},{w:"gather",pos:"v.",d:"聚集、集結"},
    {w:"hope",pos:"n.",d:"希望"},{w:"appear",pos:"v.",d:"出現"},
    {w:"powerful",pos:"adj.",d:"強大的"},{w:"forward",pos:"adv.",d:"向前"}
  ],
  grammar:[
    {rule:"<em>從屬連接詞</em>引導附屬子句。<b>because</b>（因為，表原因）；<b>so</b> 是結果，方向相反，勿混用。"},
    {rule:"<b>although / even though</b>（雖然、即使，表讓步）：<b>Although</b> he was tired, he kept going.（不可再加 but）"},
    {rule:"<b>when</b>（當…的時候，表時間）。子句可放句首（後加逗號）或句中。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"____ Muzan grew stronger, the Corps prepared. (原因)",opts:["Because","Although","So","But"],a:0,ex:"原因用 Because。"},
    {cat:"g",t:"選擇題",q:"____ they were tired, they kept training. (讓步)",opts:["Because","Although","So","And"],a:1,ex:"「雖然」用 Although。"},
    {cat:"g",t:"填空題",q:"____ the night came, demons rose. (時間)",opts:["When","Because","Although","So"],a:0,ex:"「當…時」用 When。"},
    {cat:"g",t:"選擇題",q:"\"He stayed calm ____ he was afraid.\" (即使)",opts:["because","even though","so","when"],a:1,ex:"「即使」用 even though。"},
    {cat:"g",t:"選擇題",q:"\"I was late ____ I missed the bus.\" (原因)",opts:["because","although","so","but"],a:0,ex:"原因用 because。"},
    {cat:"g",t:"是非題",q:"\"Although it rained, but we went out.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"although 與 but 不可並用，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"____ I was young, I lived in Japan.\" (時間)",opts:["When","Because","So","But"],a:0,ex:"時間用 When。"},
    {cat:"g",t:"填空題",q:"\"____ she studied hard, she passed.\" (因為)",opts:["Because","Although","So","Or"],a:0,ex:"因為用 Because。"},
    {cat:"g",t:"是非題",q:"\"Although he is rich, he is not happy.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"讓步 although，正確。"},
    {cat:"g",t:"選擇題",q:"\"Call me ____ you arrive.\" (當…時)",opts:["when","because","although","so"],a:0,ex:"時間用 when。"},
    {cat:"v",t:"選擇題",q:"\"prepare\" 的意思是？",opts:["準備","修理","比較","出現"],a:0,ex:"prepare = 準備。"},
    {cat:"v",t:"選擇題",q:"\"gather\" 的意思最接近？",opts:["聚集、集結","分散","購買","攜帶"],a:0,ex:"gather = 聚集。"},
    {cat:"v",t:"選擇題",q:"\"powerful\" 的中文是？",opts:["強大的","貧窮的","禮貌的","可能的"],a:0,ex:"powerful = 強大的。"},
    {cat:"v",t:"選擇題",q:"\"hope\" (名詞) 的意思是？",opts:["希望","跳躍","房屋","假期"],a:0,ex:"hope = 希望。"},
    {cat:"v",t:"選擇題",q:"\"forward\" 的意思是？",opts:["向後","向前","向上","向下"],a:1,ex:"forward = 向前。"},
    {cat:"v",t:"選擇題",q:"The past form of \"rise\" is ____.",opts:["rised","rose","risen","raise"],a:1,ex:"rise→rose。"},
    {cat:"v",t:"是非題",q:"\"tired\" 的意思是「精力充沛的」。",opts:["正確 True","錯誤 False"],a:1,ex:"tired = 疲憊的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"calm\" 的意思是？",opts:["冷靜的","吵鬧的","危險的","快速的"],a:0,ex:"calm = 冷靜的。"},
    {cat:"v",t:"選擇題",q:"The past form of \"grow\" is ____.",opts:["growed","grew","grown","grows"],a:1,ex:"grow→grew。"},
    {cat:"v",t:"選擇題",q:"\"appear\" 的相反詞是 ____.",opts:["disappear","prepare","repair","compare"],a:0,ex:"appear(出現) ↔ disappear(消失)。"}
  ]
},
/* ===== 17 ===== */ {
  emoji:"⚔️", rank:"第一類條件句", cover:"covers/cover17.png",
  title:"柱們的合戰 The Hashira Unite",
  focus:"文法焦點：第一類條件句 If（真實的未來）",
  sentences:[
    {en:"\"If we work together, we will defeat Muzan,\" said the Hashira.",zh:"「如果我們齊心協力，就能打敗無慘，」柱們說。",img:"covers/L17_s01.jpg"},
    {en:"\"If the sun rises before he dies, Muzan will burn to ashes.\"",zh:"「如果在他死前太陽升起，無慘將化為灰燼。」",img:"covers/L17_s02.jpg"},
    {en:"\"You will lose your life if you make one mistake.\"",zh:"「如果你犯一個錯，就會送命。」",img:"covers/L17_s03.jpg"},
    {en:"\"If we do not give up, the morning will come for everyone.\"",zh:"「只要我們不放棄，黎明就會為所有人到來。」",img:"covers/L17_s04.jpg"},
    {en:"\"If you protect the people, they will trust the Corps.\"",zh:"「如果你保護人民，他們就會信任鬼殺隊。」",img:"covers/L17_s05.jpg"},
    {en:"\"We will reach him if we follow this path.\"",zh:"「只要沿著這條路，我們就能找到他。」",img:"covers/L17_s06.jpg"},
    {en:"\"If Nezuko helps us, we will have a real chance.\"",zh:"「如果禰豆子幫我們，我們就有真正的勝算。」",img:"covers/L17_s07.jpg"},
    {en:"\"If the demons win tonight, the world will fall into darkness.\"",zh:"「如果今晚鬼獲勝，世界將墜入黑暗。」",img:"covers/L17_s08.jpg"},
    {en:"\"I will fight until the end if my friends stand with me.\"",zh:"「只要朋友與我同在，我就會戰鬥到最後。」",img:"covers/L17_s09.jpg"},
    {en:"\"If you believe in yourself, you will find the strength.\"",zh:"「如果你相信自己，就會找到力量。」",img:"covers/L17_s10.jpg"}
  ],
  vocab:[
    {w:"defeat",pos:"v.",d:"打敗"},{w:"ashes",pos:"n.",d:"灰燼"},
    {w:"mistake",pos:"n.",d:"錯誤"},{w:"give up",pos:"phr.",d:"放棄"},
    {w:"trust",pos:"v.",d:"信任"},{w:"reach",pos:"v.",d:"抵達、找到"},
    {w:"chance",pos:"n.",d:"機會、勝算"},{w:"fall",pos:"v.",d:"墜落、陷入"},
    {w:"believe",pos:"v.",d:"相信"},{w:"strength",pos:"n.",d:"力量"}
  ],
  grammar:[
    {rule:"<em>第一類條件句</em>（可能成真的未來）：<b>If + 現在式, 主詞 + will + 原形</b>。"},
    {rule:"重點：<b>if 子句用「現在式」，不可用 will</b>；主句才用 will。例：<b>If</b> we work hard, we <b>will</b> win。"},
    {rule:"兩個子句可前後對調：We <b>will</b> win <b>if</b> we work hard.（順序對調時通常不加逗號）"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"\"If we work together, we ____ Muzan.\"",opts:["defeat","will defeat","defeated","defeating"],a:1,ex:"主句用 will defeat。"},
    {cat:"g",t:"選擇題",q:"\"If the sun ____ , he will die.\" (rise)",opts:["will rise","rises","rose","rising"],a:1,ex:"if 子句用現在式 rises。"},
    {cat:"g",t:"填空題",q:"\"You ____ if you make a mistake.\" (lose, 主句)",opts:["will lose","lose","lost","losing"],a:0,ex:"主句 will lose。"},
    {cat:"g",t:"選擇題",q:"\"If we ____ up, morning will come.\" (not give)",opts:["won't give","don't give","didn't give","not give"],a:1,ex:"if 子句現在式否定 don't give。"},
    {cat:"g",t:"選擇題",q:"In a first conditional, the IF-clause uses:",opts:["will + V","現在式","過去式","would + V"],a:1,ex:"if 子句用現在式。"},
    {cat:"g",t:"是非題",q:"\"If it rains, we will stay home.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"If + 現在式, will，正確。"},
    {cat:"g",t:"選擇題",q:"\"If you ____ hard, you will pass.\" (study)",opts:["will study","study","studied","studying"],a:1,ex:"if 子句現在式 study。"},
    {cat:"g",t:"填空題",q:"\"I ____ (call) you if I find him.\"",opts:["will call","call","called","calling"],a:0,ex:"主句 will call。"},
    {cat:"g",t:"是非題",q:"\"If he will come, I will be happy.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"if 子句不可用 will，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"We will be late if we ____ now.\" (not leave)",opts:["won't leave","don't leave","didn't leave","not leave"],a:1,ex:"if 子句現在式 don't leave。"},
    {cat:"v",t:"選擇題",q:"\"ashes\" 的意思是？",opts:["灰燼","盒子","斧頭","岸邊"],a:0,ex:"ashes = 灰燼。"},
    {cat:"v",t:"選擇題",q:"\"mistake\" 的中文是？",opts:["錯誤","任務","訊息","市場"],a:0,ex:"mistake = 錯誤。"},
    {cat:"v",t:"選擇題",q:"\"chance\" 在此句意思最接近？",opts:["機會、勝算","改變","椅子","收費"],a:0,ex:"chance = 機會、勝算。"},
    {cat:"v",t:"選擇題",q:"\"believe\" 的意思是？",opts:["相信","離開","到達","責備"],a:0,ex:"believe = 相信。"},
    {cat:"v",t:"選擇題",q:"\"trust\" 的意思是？",opts:["信任","測試","旅行","嘗試"],a:0,ex:"trust = 信任。"},
    {cat:"v",t:"選擇題",q:"\"reach\" 在此句意思是？",opts:["抵達、找到（他）","教導","到達某分數","伸手"],a:0,ex:"此處 reach = 抵達、找到。"},
    {cat:"v",t:"是非題",q:"\"defeat\" 的意思是「保護」。",opts:["正確 True","錯誤 False"],a:1,ex:"defeat = 打敗，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"strength\" 的中文是？",opts:["力量","長度","壓力","街道"],a:0,ex:"strength = 力量。"},
    {cat:"v",t:"選擇題",q:"\"fall into darkness\" 的 \"fall\" 意思是？",opts:["墜落、陷入","秋天","跌倒","下降溫度"],a:0,ex:"此處 fall = 墜落、陷入。"},
    {cat:"v",t:"選擇題",q:"\"give up\" 的意思是？",opts:["放棄","舉手","送出","起床"],a:0,ex:"give up = 放棄。"}
  ]
},
/* ===== 18 ===== */ {
  emoji:"🌀", rank:"第二類條件句", cover:"covers/cover18.png",
  title:"如果我更強 If I Were Stronger",
  focus:"文法焦點：第二類條件句（假設語氣，與現在事實相反）",
  sentences:[
    {en:"\"If I were stronger, I would protect everyone.\"",zh:"「如果我更強，我就能保護所有人。」",img:"covers/L18_s01.jpg"},
    {en:"\"If we had more time, we would save more lives.\"",zh:"「如果我們有更多時間，就能拯救更多生命。」",img:"covers/L18_s02.jpg"},
    {en:"\"If Rengoku were here, he would tell us to set our hearts ablaze.\"",zh:"「如果煉獄還在，他會叫我們燃燒自己的心。」",img:"covers/L18_s03.jpg"},
    {en:"\"If I weren't afraid, I would smile like him.\"",zh:"「如果我不害怕，我就能像他一樣微笑。」",img:"covers/L18_s04.jpg"},
    {en:"\"If the sun never set, demons would not exist.\"",zh:"「如果太陽永不落下，鬼就不會存在。」",img:"covers/L18_s05.jpg"},
    {en:"\"If I had his courage, I would never run away.\"",zh:"「如果我有他的勇氣，我絕不會逃跑。」",img:"covers/L18_s06.jpg"},
    {en:"\"If we knew Muzan's weakness, we would win easily.\"",zh:"「如果我們知道無慘的弱點，就能輕易獲勝。」",img:"covers/L18_s07.jpg"},
    {en:"\"If you were in my place, what would you do?\"",zh:"「如果你是我，你會怎麼做？」",img:"covers/L18_s08.jpg"},
    {en:"\"If I could turn back time, I would save my family.\"",zh:"「如果我能讓時間倒流，我會拯救我的家人。」",img:"covers/L18_s09.jpg"},
    {en:"\"If everyone helped, the world would be a kinder place.\"",zh:"「如果人人伸出援手，世界會更溫柔。」",img:"covers/L18_s10.jpg"}
  ],
  vocab:[
    {w:"protect",pos:"v.",d:"保護"},{w:"save",pos:"v.",d:"拯救"},
    {w:"ablaze",pos:"adj.",d:"燃燒的"},{w:"afraid",pos:"adj.",d:"害怕的"},
    {w:"exist",pos:"v.",d:"存在"},{w:"courage",pos:"n.",d:"勇氣"},
    {w:"weakness",pos:"n.",d:"弱點"},{w:"place",pos:"n.",d:"立場、地方"},
    {w:"turn back",pos:"phr.",d:"倒轉、折返"},{w:"kind",pos:"adj.",d:"善良的"}
  ],
  grammar:[
    {rule:"<em>第二類條件句</em>（與現在事實相反的假設）：<b>If + 過去式, 主詞 + would + 原形</b>。"},
    {rule:"be 動詞在假設語氣中，所有主詞都常用 <b>were</b>：If I <b>were</b> you...（慣用法）。"},
    {rule:"比較：可能成真→If + 現在式, will；與現實相反→If + 過去式, would。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"\"If I ____ stronger, I would protect everyone.\"",opts:["am","were","will be","be"],a:1,ex:"假設語氣 be 用 were。"},
    {cat:"g",t:"選擇題",q:"\"If I were stronger, I ____ protect everyone.\"",opts:["will","would","can","am"],a:1,ex:"主句用 would + 原形。"},
    {cat:"g",t:"填空題",q:"\"If we ____ (have) more time, we would save more.\"",opts:["had","have","will have","having"],a:0,ex:"第二類條件 if 用過去式 had。"},
    {cat:"g",t:"選擇題",q:"\"If Rengoku ____ here, he would smile.\" (假設,他不在)",opts:["is","were","will be","was being"],a:1,ex:"假設語氣用 were。"},
    {cat:"g",t:"選擇題",q:"The second conditional pattern is:",opts:["If + 現在式, will","If + 過去式, would","If + will, 現在式","If + would, 過去式"],a:1,ex:"If + 過去式, would。"},
    {cat:"g",t:"是非題",q:"\"If I were a bird, I would fly.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"假設語氣 were + would，正確。"},
    {cat:"g",t:"選擇題",q:"\"If I ____ you, I would say sorry.\"",opts:["am","was being","were","will be"],a:2,ex:"If I were you 慣用。"},
    {cat:"g",t:"填空題",q:"\"If he studied, he ____ (pass) the test.\" (假設)",opts:["would pass","will pass","passes","passed"],a:0,ex:"主句 would pass。"},
    {cat:"g",t:"是非題",q:"\"If I will be rich, I would help them.\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"if 子句不可用 will，且應為過去式，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"If we ____ wings, we would fly away.\" (假設沒有, have)",opts:["have","had","will have","having"],a:1,ex:"第二類條件用過去式 had。"},
    {cat:"v",t:"選擇題",q:"\"exist\" 的意思是？",opts:["存在","離開","協助","退出"],a:0,ex:"exist = 存在。"},
    {cat:"v",t:"選擇題",q:"\"courage\" 的中文是？",opts:["勇氣","好奇","課程","角落"],a:0,ex:"courage = 勇氣。"},
    {cat:"v",t:"選擇題",q:"\"weakness\" 的意思是？",opts:["弱點","週末","財富","武器"],a:0,ex:"weakness = 弱點。"},
    {cat:"v",t:"選擇題",q:"\"ablaze\" 的意思最接近？",opts:["燃燒的","結冰的","破碎的","明亮的"],a:0,ex:"ablaze = 燃燒的。"},
    {cat:"v",t:"選擇題",q:"\"kind\" (形容詞) 的意思是？",opts:["善良的","種類","危險的","聰明的"],a:0,ex:"此處 kind = 善良的。"},
    {cat:"v",t:"選擇題",q:"\"in my place\" 的 \"place\" 意思是？",opts:["立場、處境","盤子","廣場","名次"],a:0,ex:"in one's place = 站在某人的立場。"},
    {cat:"v",t:"是非題",q:"\"afraid\" 的意思是「勇敢的」。",opts:["正確 True","錯誤 False"],a:1,ex:"afraid = 害怕的，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"weakness\" 的相反詞是 ____.",opts:["strength","sadness","darkness","sickness"],a:0,ex:"weakness(弱點) ↔ strength(力量)。"},
    {cat:"v",t:"選擇題",q:"\"save\" 在此句的意思是？",opts:["拯救","儲蓄金錢","節省時間","存檔"],a:0,ex:"此處 save = 拯救（家人）。"},
    {cat:"v",t:"選擇題",q:"\"turn back time\" 的意思是？",opts:["讓時間倒流","準時","浪費時間","計時"],a:0,ex:"turn back time = 讓時間倒流。"}
  ]
},
/* ===== 19 ===== */ {
  emoji:"🏯", rank:"間接問句", cover:"covers/cover19.png",
  title:"無慘在哪裡？ Where Is Muzan?",
  focus:"文法焦點：間接問句 Indirect Questions（句中問句語序）",
  sentences:[
    {en:"The slayers needed to know where Muzan was hiding.",zh:"隊士們需要知道無慘藏在哪裡。",img:"covers/L19_s01.jpg"},
    {en:"\"Do you know when he will appear?\" Tanjiro asked Tamayo.",zh:"「你知道他何時會出現嗎？」炭治郎問珠世。",img:"covers/L19_s02.jpg"},
    {en:"Nobody understood why he hated humans so much.",zh:"沒有人明白他為何如此憎恨人類。",img:"covers/L19_s03.jpg"},
    {en:"\"Can you tell me how we can defeat him?\"",zh:"「你能告訴我我們要如何打敗他嗎？」",img:"covers/L19_s04.jpg"},
    {en:"Tamayo explained what the demon king feared most.",zh:"珠世解釋了鬼王最害怕的東西。",img:"covers/L19_s05.jpg"},
    {en:"\"I wonder who created the very first demon.\"",zh:"「我想知道是誰創造了第一隻鬼。」",img:"covers/L19_s06.jpg"},
    {en:"They asked where the secret medicine was kept.",zh:"他們問那祕密的藥被收在哪裡。",img:"covers/L19_s07.jpg"},
    {en:"\"Tell me what I should do to help my sister.\"",zh:"「告訴我，我該做什麼才能幫助妹妹。」",img:"covers/L19_s08.jpg"},
    {en:"No one knew how long the final battle would last.",zh:"沒有人知道最終決戰會持續多久。",img:"covers/L19_s09.jpg"},
    {en:"\"Please tell me where my courage comes from.\"",zh:"「請告訴我，我的勇氣從何而來。」",img:"covers/L19_s10.jpg"}
  ],
  vocab:[
    {w:"hide",pos:"v.",d:"躲藏（過去 hid）"},{w:"appear",pos:"v.",d:"出現"},
    {w:"understand",pos:"v.",d:"明白（過去 understood）"},{w:"hate",pos:"v.",d:"憎恨"},
    {w:"explain",pos:"v.",d:"解釋"},{w:"fear",pos:"v.",d:"害怕、畏懼"},
    {w:"wonder",pos:"v.",d:"想知道"},{w:"create",pos:"v.",d:"創造"},
    {w:"last",pos:"v.",d:"持續"},{w:"come from",pos:"phr.",d:"來自"}
  ],
  grammar:[
    {rule:"<em>間接問句</em>：把問句放進另一句中（如 know/wonder/tell me + 疑問詞...）。"},
    {rule:"關鍵：間接問句要用<b>「肯定句語序」(主詞 + 動詞)</b>，<b>不用</b>助動詞倒裝。"},
    {rule:"直接 Where <b>is</b> he? → 間接 I know where he <b>is</b>. 直接 What <b>does</b> he want? → I know what he <b>wants</b>。"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"They needed to know where Muzan ____.",opts:["was hiding","was he hiding","is he hiding","did he hide"],a:0,ex:"間接問句用肯定語序 where Muzan was hiding。"},
    {cat:"g",t:"選擇題",q:"\"Do you know when he ____?\"",opts:["will appear","will he appear","does appear","appear will"],a:0,ex:"肯定語序 when he will appear。"},
    {cat:"g",t:"填空題",q:"Nobody understood why he ____ humans. (hate, 過去)",opts:["hated","did hate","hates","did he hate"],a:0,ex:"間接問句直接用動詞 hated。"},
    {cat:"g",t:"選擇題",q:"\"Can you tell me how we ____ defeat him?\"",opts:["can","can we","do","could we"],a:0,ex:"肯定語序 how we can defeat。"},
    {cat:"g",t:"選擇題",q:"Indirect: \"I don't know where ____.\"",opts:["he lives","does he live","lives he","he does live"],a:0,ex:"肯定語序 where he lives。"},
    {cat:"g",t:"是非題",q:"\"I wonder what time it is.\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"間接問句肯定語序 it is，正確。"},
    {cat:"g",t:"選擇題",q:"\"Could you tell me where the station ____?\"",opts:["is","is it","does it","it is"],a:0,ex:"肯定語序 where the station is。"},
    {cat:"g",t:"填空題",q:"\"I don't know what he ____.\" (want, 現在)",opts:["wants","does want","want","does he want"],a:0,ex:"間接問句 what he wants。"},
    {cat:"g",t:"是非題",q:"\"Do you know where does he live?\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"間接問句不可用 does 倒裝，應為 where he lives，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"Please tell me why she ____.\" (cry, 過去)",opts:["cried","did cry","cries","did she cry"],a:0,ex:"間接問句 why she cried。"},
    {cat:"v",t:"選擇題",q:"\"hide\" 的意思是？",opts:["躲藏","尋找","奔跑","保護"],a:0,ex:"hide = 躲藏。"},
    {cat:"v",t:"選擇題",q:"\"explain\" 的中文是？",opts:["解釋","抱怨","爆炸","探索"],a:0,ex:"explain = 解釋。"},
    {cat:"v",t:"選擇題",q:"\"fear\" (動詞) 的意思是？",opts:["害怕、畏懼","公平","靠近","幾乎"],a:0,ex:"fear = 害怕、畏懼。"},
    {cat:"v",t:"選擇題",q:"\"create\" 的意思是？",opts:["創造","摧毀","批評","哭泣"],a:0,ex:"create = 創造。"},
    {cat:"v",t:"選擇題",q:"\"last\" (動詞) 在此句意思是？",opts:["持續","最後","上一個","遲到"],a:0,ex:"此處 last = 持續。"},
    {cat:"v",t:"選擇題",q:"\"come from\" 的意思是？",opts:["來自","回來","出來","跌倒"],a:0,ex:"come from = 來自。"},
    {cat:"v",t:"是非題",q:"\"hate\" 的意思是「喜愛」。",opts:["正確 True","錯誤 False"],a:1,ex:"hate = 憎恨，故錯誤。"},
    {cat:"v",t:"選擇題",q:"The past form of \"understand\" is ____.",opts:["understanded","understood","understand","understands"],a:1,ex:"understand→understood。"},
    {cat:"v",t:"選擇題",q:"\"wonder\" 的意思最接近？",opts:["想知道","害怕","購買","勝過"],a:0,ex:"wonder = 想知道。"},
    {cat:"v",t:"選擇題",q:"\"appear\" 的意思是？",opts:["出現","消失","道歉","鼓掌"],a:0,ex:"appear = 出現。"}
  ]
},
/* ===== 20 ===== */ {
  emoji:"🌅", rank:"附加問句", cover:"covers/cover20.png",
  title:"黎明終至 The Dawn Arrives",
  focus:"文法焦點：附加問句 Tag Questions（…, 對吧？）",
  sentences:[
    {en:"After the final battle, the sun rose at last. \"We won, didn't we?\"",zh:"最終決戰後，太陽終於升起。「我們贏了，不是嗎？」",img:"covers/L20_s01.jpg"},
    {en:"\"Nezuko is human again, isn't she?\" he asked with tears.",zh:"「禰豆子又變回人類了，不是嗎？」他含淚問。",img:"covers/L20_s02.jpg"},
    {en:"\"You won't forget our friends, will you?\" Zenitsu said softly.",zh:"「你不會忘記我們的夥伴，會嗎？」善逸輕聲說。",img:"covers/L20_s03.jpg"},
    {en:"\"We can finally live in peace, can't we?\"",zh:"「我們終於能在和平中生活了，不是嗎？」",img:"covers/L20_s04.jpg"},
    {en:"\"Muzan is truly gone, isn't he?\" someone whispered.",zh:"「無慘真的消失了，不是嗎？」有人低語。",img:"covers/L20_s05.jpg"},
    {en:"\"You will remember the fallen, won't you?\"",zh:"「你會記得那些犧牲的人，對吧？」",img:"covers/L20_s06.jpg"},
    {en:"\"We fought bravely, didn't we?\" Inosuke grinned.",zh:"「我們英勇奮戰，不是嗎？」伊之助咧嘴一笑。",img:"covers/L20_s07.jpg"},
    {en:"\"Nezuko didn't lose herself, did she?\"",zh:"「禰豆子沒有迷失自己，對吧？」",img:"covers/L20_s08.jpg"},
    {en:"\"The morning is beautiful, isn't it?\"",zh:"「這個早晨很美，不是嗎？」",img:"covers/L20_s09.jpg"},
    {en:"\"Let's protect this peace together, shall we?\"",zh:"「讓我們一起守護這份和平，好嗎？」",img:"covers/L20_s10.jpg"}
  ],
  vocab:[
    {w:"at last",pos:"phr.",d:"終於"},{w:"win",pos:"v.",d:"贏（過去 won）"},
    {w:"tear",pos:"n.",d:"眼淚"},{w:"forget",pos:"v.",d:"忘記"},
    {w:"peace",pos:"n.",d:"和平、平靜"},{w:"whisper",pos:"v.",d:"低語"},
    {w:"remember",pos:"v.",d:"記得"},{w:"fallen",pos:"adj./n.",d:"陣亡的（人）"},
    {w:"brave",pos:"adj.",d:"勇敢的"},{w:"grin",pos:"v.",d:"咧嘴笑"}
  ],
  grammar:[
    {rule:"<em>附加問句</em>：在句尾加簡短問句確認。規則：<b>前肯定→後否定；前否定→後肯定</b>。"},
    {rule:"時態與助動詞要一致：is→isn't, can→can't, will→won't, did(過去)→didn't。主詞改成<b>代名詞</b>。"},
    {rule:"例：You are tired, <b>aren't you</b>? / She didn't come, <b>did she</b>? / We won, <b>didn't we</b>?"}
  ],
  bank:[
    {cat:"g",t:"選擇題",q:"\"We won, ____?\"",opts:["didn't we","did we","weren't we","won't we"],a:0,ex:"前肯定(won/過去)→ didn't we。"},
    {cat:"g",t:"選擇題",q:"\"Nezuko is human again, ____?\"",opts:["is she","isn't she","does she","won't she"],a:1,ex:"前肯定 is → isn't she。"},
    {cat:"g",t:"填空題",q:"\"You won't forget them, ____?\"",opts:["will you","won't you","do you","did you"],a:0,ex:"前否定 won't → will you。"},
    {cat:"g",t:"選擇題",q:"\"We can live in peace, ____?\"",opts:["can we","can't we","do we","will we"],a:1,ex:"前肯定 can → can't we。"},
    {cat:"g",t:"選擇題",q:"\"She is a slayer, ____?\"",opts:["is she","isn't she","does she","won't she"],a:1,ex:"is → isn't she。"},
    {cat:"g",t:"是非題",q:"\"He likes ramen, doesn't he?\" 文法正確。",opts:["正確 True","錯誤 False"],a:0,ex:"一般動詞現在式 likes → doesn't he，正確。"},
    {cat:"g",t:"選擇題",q:"\"They didn't run, ____?\"",opts:["did they","didn't they","do they","were they"],a:0,ex:"前否定 didn't → did they。"},
    {cat:"g",t:"填空題",q:"\"You are Tanjiro, ____?\"",opts:["aren't you","are you","don't you","isn't it"],a:0,ex:"are → aren't you。"},
    {cat:"g",t:"是非題",q:"\"She can swim, can she?\" 文法正確。",opts:["正確 True","錯誤 False"],a:1,ex:"前肯定應接否定 can't she，故錯誤。"},
    {cat:"g",t:"選擇題",q:"\"Let's protect peace, ____?\" (Let's 慣用)",opts:["will we","shall we","don't we","aren't we"],a:1,ex:"Let's ... 的附加問句用 shall we。"},
    {cat:"v",t:"選擇題",q:"\"at last\" 的意思是？",opts:["終於","最後一個","立刻","至少"],a:0,ex:"at last = 終於。"},
    {cat:"v",t:"選擇題",q:"\"whisper\" 的意思是？",opts:["低語","大喊","唱歌","哭泣"],a:0,ex:"whisper = 低語。"},
    {cat:"v",t:"選擇題",q:"\"peace\" 的中文是？",opts:["和平","碎片","豌豆","頂端"],a:0,ex:"peace = 和平。"},
    {cat:"v",t:"選擇題",q:"\"remember\" 的意思是？",opts:["記得","忘記","成員","提醒"],a:0,ex:"remember = 記得。"},
    {cat:"v",t:"選擇題",q:"\"grin\" 的意思最接近？",opts:["咧嘴笑","皺眉","研磨","抓握"],a:0,ex:"grin = 咧嘴笑。"},
    {cat:"v",t:"選擇題",q:"The past form of \"win\" is ____.",opts:["winned","won","win","wins"],a:1,ex:"win→won。"},
    {cat:"v",t:"是非題",q:"\"forget\" 的意思是「記得」。",opts:["正確 True","錯誤 False"],a:1,ex:"forget = 忘記，故錯誤。"},
    {cat:"v",t:"選擇題",q:"\"brave\" 的意思是？",opts:["勇敢的","害怕的","聰明的","誠實的"],a:0,ex:"brave = 勇敢的。"},
    {cat:"v",t:"選擇題",q:"\"tear\" (名詞) 的中文是？",opts:["眼淚","耳朵","年份","恐懼"],a:0,ex:"tear(n.) = 眼淚。"},
    {cat:"v",t:"選擇題",q:"\"the fallen\" 在此指？",opts:["陣亡的人","落葉","秋天","跌倒"],a:0,ex:"the fallen = 陣亡者。"}
  ]
}
];

/* ============ 每關閱讀測驗（短文 ≤300 字 + 3 題理解題） ============ */
const READING = [
/* 1 */ {title:"Tanjiro's Daily Life",
  en:"Tanjiro Kamado lives high in the snowy mountains with his mother, his younger brothers and sisters, and his kind sister Nezuko. Their father died years ago, so Tanjiro is now the man of the house. Every morning he wakes up early, fills a large basket with charcoal, and carries it down the steep path to the town. The townspeople like him because he is honest and always wears a warm smile. He sells the charcoal, buys food for his family, and often helps his neighbors with small jobs. The family does not have much money, but they are happy because they love and support one another. At night, the children gather around the fire and listen to their mother's gentle voice. Tanjiro often says that protecting his family is the most important thing in his life.",
  zh:"炭治郎與母親、弟妹和善良的妹妹禰豆子住在白雪皚皚的山上。父親多年前過世，他成了家中的支柱。每天清晨他早起，把木炭裝滿大簍背下山到鎮上販賣，再為家人買食物。鎮民喜歡他的誠實與笑容。家裡雖窮卻幸福。對他而言，守護家人是人生最重要的事。",
  q:[
    {t:"選擇題",q:"Where does Tanjiro live?",opts:["By the sea","High in the snowy mountains","In a big city","In a forest cave"],a:1,ex:"短文首句：lives high in the snowy mountains。"},
    {t:"選擇題",q:"Why do the townspeople like Tanjiro?",opts:["He is rich","He is honest and friendly","He is a famous fighter","He gives free charcoal"],a:1,ex:"honest and always wears a warm smile。"},
    {t:"是非題",q:"根據短文，炭治郎一家很富有。",opts:["正確 True","錯誤 False"],a:1,ex:"does not have much money，故為 False。"}
  ]},
/* 2 */ {title:"The Night Everything Changed",
  en:"It was late winter, and Tanjiro had gone down to the town to sell charcoal. Because of the heavy snow, a kind old man asked him to stay the night, so he could not return home until morning. As Tanjiro was climbing the mountain the next day, he smelled blood in the cold air. His heart was beating fast. When he reached his house, he found a terrible sight: a demon had attacked his family during the night. Only Nezuko was still warm. Tanjiro lifted her onto his back and began running down the mountain to find a doctor. The snow was falling, the wind was blowing, and tears were freezing on his face. He did not know that his sister was slowly changing into something no longer human.",
  zh:"冬末，炭治郎下山賣炭，因大雪被好心老人留宿一晚，隔天清晨才返家。上山途中他聞到血腥味，心跳加速。回到家，發現家人被鬼襲擊，只有禰豆子尚有體溫。他背起妹妹奔下山求醫。風雪交加，淚水在臉上結凍。他還不知道妹妹正逐漸變成非人之物。",
  q:[
    {t:"選擇題",q:"Why couldn't Tanjiro go home that night?",opts:["He was lost","Heavy snow, an old man asked him to stay","He was hurt","He missed the train"],a:1,ex:"heavy snow, a kind old man asked him to stay the night。"},
    {t:"選擇題",q:"What did Tanjiro smell as he climbed the mountain?",opts:["Smoke","Flowers","Blood","Food"],a:2,ex:"he smelled blood in the cold air。"},
    {t:"是非題",q:"短文中，只有禰豆子還活著（尚有體溫）。",opts:["正確 True","錯誤 False"],a:0,ex:"Only Nezuko was still warm，故為 True。"}
  ]},
/* 3 */ {title:"A Sister Who Became a Demon",
  en:"As Tanjiro carried Nezuko through the deep snow, she suddenly grew larger and attacked him. He realized with horror that his gentle sister had become a demon. Her eyes were red and her teeth were sharp, yet something inside her still remembered who she was. When Tanjiro cried and begged her to stop, Nezuko slowly lowered her arms. A single tear fell from her eye. She did not bite him. Instead, she stood in front of her brother as if to protect him. Tanjiro held her tightly and promised that he would find a way to turn her back into a human. That promise gave him the strength to keep going, even though he had lost almost everything he loved on that cold and terrible night.",
  zh:"炭治郎背著禰豆子穿越深雪時，她突然變大並攻擊他——他驚恐地發現溫柔的妹妹已成為鬼。她紅眼利齒，但內心仍記得自己是誰。當炭治郎哭著求她停手，禰豆子緩緩放下手臂，落下一滴淚，沒有咬他，反而擋在哥哥面前護著他。炭治郎緊抱她，發誓要找到讓她變回人類的方法。",
  q:[
    {t:"選擇題",q:"What happened to Nezuko in the snow?",opts:["She fell asleep","She became a demon and attacked him","She ran away","She found a doctor"],a:1,ex:"she suddenly grew larger and attacked him。"},
    {t:"選擇題",q:"What did Nezuko do instead of biting Tanjiro?",opts:["She cried and protected him","She ran into town","She ate the snow","She fell down"],a:0,ex:"stood in front of her brother as if to protect him。"},
    {t:"是非題",q:"炭治郎發誓要把妹妹變回人類。",opts:["正確 True","錯誤 False"],a:0,ex:"promised he would turn her back into a human，True。"}
  ]},
/* 4 */ {title:"The Water Hashira",
  en:"While Tanjiro was protecting Nezuko, a tall swordsman appeared in the falling snow. His name was Giyu Tomioka, and he was a member of the Demon Slayer Corps. Giyu was holding his sword, ready to kill the demon girl, because slayers are trained to destroy all demons. Tanjiro threw himself on the ground and begged Giyu to spare his sister. While the two were arguing, Nezuko stood in front of her brother and refused to attack the human. Giyu was watching her carefully. He had never seen a demon protect a human before. In the end, he did not kill them. Instead, he told Tanjiro to visit a man named Urokodaki, who could train him to become strong. That meeting changed the path of Tanjiro's life forever.",
  zh:"當炭治郎護著禰豆子時，高大的劍士富岡義勇在風雪中現身——他是鬼殺隊的一員。義勇握刀欲斬鬼少女，因隊士受訓要消滅所有鬼。炭治郎跪地懇求他饒過妹妹。兩人爭執時，禰豆子擋在哥哥面前拒絕攻擊人類。義勇仔細觀察，從未見過鬼保護人。最後他沒下手，要炭治郎去找能訓練他的鱗瀧。",
  q:[
    {t:"選擇題",q:"Who was Giyu Tomioka?",opts:["A doctor","A member of the Demon Slayer Corps","A charcoal seller","A demon"],a:1,ex:"a member of the Demon Slayer Corps。"},
    {t:"選擇題",q:"Why did Giyu finally not kill them?",opts:["He was too tired","Nezuko protected a human, which surprised him","Tanjiro paid him","The sun rose"],a:1,ex:"he had never seen a demon protect a human。"},
    {t:"是非題",q:"義勇要炭治郎去找鱗瀧接受訓練。",opts:["正確 True","錯誤 False"],a:0,ex:"told Tanjiro to visit Urokodaki，True。"}
  ]},
/* 5 */ {title:"A Promise and a Path",
  en:"After that night, Tanjiro made a powerful promise. He said, \"I will turn Nezuko back into a human, and I will find the demon who hurt my family.\" He knew the road ahead would be long and dangerous, but he was not going to give up. Following Giyu's advice, he climbed a far mountain to find Urokodaki, a former Water Hashira who now trained young slayers. Urokodaki agreed to teach him, but warned that the training would be harder than anything Tanjiro had ever done. \"If you are serious,\" the old man said, \"you are going to suffer, and you may even die.\" Tanjiro nodded. He was going to become a Demon Slayer, no matter the cost, because he carried both his sister and the memory of his family on his back.",
  zh:"那夜之後，炭治郎立下重誓：「我要把禰豆子變回人類，也要找出傷害家人的鬼。」他知道前路漫長危險，卻不打算放棄。依義勇之言，他翻越遠山尋找昔日水柱鱗瀧。鱗瀧答應教他，但警告訓練極其嚴酷甚至可能喪命。炭治郎點頭——無論代價，他都要成為鬼殺隊士，因他背負著妹妹與家人的記憶。",
  q:[
    {t:"選擇題",q:"What two things did Tanjiro promise?",opts:["To get rich and move away","To cure Nezuko and find the demon","To leave the mountains","To become a doctor"],a:1,ex:"turn Nezuko back... and find the demon。"},
    {t:"選擇題",q:"What did Urokodaki warn about the training?",opts:["It was easy","It would be very hard and dangerous","It was free","It took one day"],a:1,ex:"harder than anything... you may even die。"},
    {t:"是非題",q:"炭治郎決定放棄成為鬼殺隊士。",opts:["正確 True","錯誤 False"],a:1,ex:"He was going to become a Demon Slayer，故 False。"}
  ]},
/* 6 */ {title:"Two Years of Training",
  en:"Tanjiro has trained under Urokodaki for almost two years. During that time, he has climbed the mountain countless times, learned the ten forms of Water Breathing, and grown much stronger than before. The training has been painful, and he has often fallen, but he has never given up. Urokodaki has given him one final test: he must cut a huge boulder with his sword. For half a year Tanjiro has failed again and again. Then two strange masked children, Sabito and Makomo, have appeared to help him improve. With their guidance, his breathing has become deeper and his focus sharper. One quiet morning, Tanjiro finally swings his blade and cuts the great rock in two. His training is complete, and now he is ready for the Final Selection.",
  zh:"炭治郎已在鱗瀧門下訓練近兩年，無數次爬山、學會水之呼吸十式，變得更強。訓練痛苦，他常跌倒卻從不放棄。鱗瀧給最後考驗：以刀斬開巨石。半年來他屢試屢敗，後有兩名戴面具的孩子錆兔、真菰前來相助，使他呼吸更深、專注更利。某個清晨，他終於一刀劈開巨石，修行完成，準備迎接最終選別。",
  q:[
    {t:"選擇題",q:"How long has Tanjiro trained under Urokodaki?",opts:["A few weeks","Almost two years","Ten years","One month"],a:1,ex:"for almost two years。"},
    {t:"選擇題",q:"What was Urokodaki's final test?",opts:["To run up the mountain","To cut a huge boulder with his sword","To beat a demon","To hold his breath for an hour"],a:1,ex:"he must cut a huge boulder。"},
    {t:"是非題",q:"Sabito 與 Makomo 幫助炭治郎進步。",opts:["正確 True","錯誤 False"],a:0,ex:"appeared to help him improve，True。"}
  ]},
/* 7 */ {title:"The Final Selection",
  en:"The Final Selection takes place on Mount Fujikasane, where the demons are more dangerous than anywhere else. Young people who want to join the Demon Slayer Corps must survive there for seven nights. Many of them never come back. On the mountain, Tanjiro meets demons that are taller and stronger than he is, but he is faster and smarter than they expect. His sword is sharper than their claws, and his will is stronger than his fear. The nights are darker and colder than any he has known. He saves another young fighter and refuses to leave anyone behind. After seven long nights, the sun rises and Tanjiro is still alive. He has passed the test and is now officially a Demon Slayer, ready to begin his real journey.",
  zh:"最終選別在藤襲山舉行，那裡的鬼比任何地方都危險。想加入鬼殺隊的年輕人須在此存活七夜，許多人一去不回。山上的鬼比炭治郎更高更強，但他更快更聰明；他的刀比鬼爪更利，意志比恐懼更強。夜更黑更冷。他救了另一名年輕戰士，不願拋下任何人。七夜過後旭日東昇，他存活下來，正式成為鬼殺隊士。",
  q:[
    {t:"選擇題",q:"How many nights must they survive on the mountain?",opts:["Three","Five","Seven","Ten"],a:2,ex:"survive there for seven nights。"},
    {t:"選擇題",q:"How is Tanjiro compared with the demons?",opts:["Bigger and slower","Faster and smarter","Weaker and afraid","Older and tired"],a:1,ex:"faster and smarter than they expect。"},
    {t:"是非題",q:"炭治郎在選別中拋下其他人獨自求生。",opts:["正確 True","錯誤 False"],a:1,ex:"refuses to leave anyone behind，故 False。"}
  ]},
/* 8 */ {title:"The Hand Demon",
  en:"On the mountain, Tanjiro meets the scariest enemy he has ever faced: the Hand Demon. It has the longest arms and the sharpest claws, and it laughs that it has eaten the most students of Urokodaki. The demon is the strongest creature on Fujikasane, and the battle becomes the hardest of Tanjiro's life. He remembers the voices of Sabito and Makomo, takes a deep breath, and uses the most powerful Water Breathing form he knows. With one clean strike, he cuts off the demon's head. Before it dies, the demon's anger fades, and Tanjiro feels sorrow rather than hatred for it. That night, he becomes one of the bravest warriors on the mountain, but he never forgets that demons were once human too.",
  zh:"山上，炭治郎遇上他見過最可怕的敵人——手鬼。牠手臂最長、爪子最利，並大笑說吃掉了最多鱗瀧的弟子，是藤襲山最強的怪物，這場戰鬥成了炭治郎此生最艱難的一役。他想起錆兔與真菰的聲音，深吸一口氣，使出最強的水之呼吸，一刀斬下鬼首。鬼臨死前怒氣消散，炭治郎感到的是悲憫而非仇恨。",
  q:[
    {t:"選擇題",q:"What did the Hand Demon brag about?",opts:["Being the fastest","Eating the most of Urokodaki's students","Living the longest","Having gold"],a:1,ex:"it has eaten the most students of Urokodaki。"},
    {t:"選擇題",q:"How did Tanjiro feel toward the demon before it died?",opts:["Hatred","Sorrow / pity","Fear","Joy"],a:1,ex:"he feels sorrow rather than hatred。"},
    {t:"是非題",q:"炭治郎用最強的水之呼吸招式擊敗手鬼。",opts:["正確 True","錯誤 False"],a:0,ex:"the most powerful Water Breathing form，True。"}
  ]},
/* 9 */ {title:"The Power of Breathing",
  en:"After joining the Corps, Tanjiro can now use all ten forms of Water Breathing. When he was younger, he could not even hold his breath for long, but training has changed him. Total Concentration Breathing lets a slayer move faster, hit harder, and stay calm in battle. Tanjiro can sense a demon by smell, and he can read the \"threads\" of an enemy's movements. His sister Nezuko has her own strange power: she can sleep for many days to recover her strength, and she can change her size. Demons cannot walk under the bright sun, so Nezuko hides in a special box on Tanjiro's back during the day. Together, the brother and sister can face dangers that neither of them could face alone.",
  zh:"加入鬼殺隊後，炭治郎已能使出水之呼吸全部十式。年幼時他連長時間屏息都做不到，是訓練改變了他。全集中呼吸讓隊士更快、更猛、更冷靜。炭治郎能以氣味察覺鬼，並讀出敵人動作的「線」。禰豆子也有奇特能力：能睡數日恢復力量、改變體型。鬼無法在烈日下行走，故白天禰豆子藏於哥哥背上的木箱中。兄妹同心，方能面對獨自無法面對的危險。",
  q:[
    {t:"選擇題",q:"What can Total Concentration Breathing do?",opts:["Make a slayer invisible","Help a slayer move faster and stay calm","Cure demons","Stop the rain"],a:1,ex:"move faster, hit harder, and stay calm。"},
    {t:"選擇題",q:"Why does Nezuko hide in a box during the day?",opts:["She is shy","Demons cannot walk under the bright sun","She is sleeping forever","It is cold"],a:1,ex:"Demons cannot walk under the bright sun。"},
    {t:"是非題",q:"炭治郎能靠氣味察覺鬼。",opts:["正確 True","錯誤 False"],a:0,ex:"can sense a demon by smell，True。"}
  ]},
/* 10 */ {title:"Rules of the Corps",
  en:"The Demon Slayer Corps is a secret group that has protected humans for hundreds of years. As a new member, Tanjiro must follow strict rules. He must protect humans with his life, and he must not let any demon harm innocent people. He has to wear the Corps uniform and carry a Nichirin sword, a special blade that can kill demons. Members should rest well before every mission and should always respect the Hashira, the strongest swordsmen in the group. The most difficult rule for Tanjiro is this: demons must be destroyed. Because Nezuko is a demon, he has to keep her a secret and prove that she will never hurt a human. He promises the leaders that he will take full responsibility for his sister.",
  zh:"鬼殺隊是守護人類數百年的祕密組織。身為新成員，炭治郎須遵守嚴格規矩：必須以生命保護人類，絕不可讓鬼傷害無辜；必須穿隊服、佩日輪刀（能斬鬼的特殊刀）。成員每次任務前應充分休息，並永遠尊敬最強劍士「柱」。最難的規矩是：鬼必須被消滅。因禰豆子是鬼，他得保守祕密並證明她絕不傷人，並向高層承諾為妹妹負全責。",
  q:[
    {t:"選擇題",q:"What is a Nichirin sword?",opts:["A wooden practice sword","A special blade that can kill demons","A gift from the town","A kitchen knife"],a:1,ex:"a special blade that can kill demons。"},
    {t:"選擇題",q:"Why is one rule especially hard for Tanjiro?",opts:["He hates uniforms","His sister Nezuko is a demon","He cannot use a sword","He is afraid of the Hashira"],a:1,ex:"demons must be destroyed, but Nezuko is a demon。"},
    {t:"是非題",q:"炭治郎答應為妹妹負全責。",opts:["正確 True","錯誤 False"],a:0,ex:"take full responsibility for his sister，True。"}
  ]},
/* 11 */ {title:"The Butterfly Estate",
  en:"After a hard battle, Tanjiro was taken to the Butterfly Estate, a peaceful home where injured slayers are healed. His deep wounds were treated by Shinobu Kocho and her gentle helpers. Special medicine is made there from rare mountain flowers, and the whole garden is filled with beautiful butterflies. While he was resting, Tanjiro was also trained again, because a slayer must always grow stronger. New breathing techniques were taught to him by the kind girls who lived there. The estate is known across the Corps for healing the body and the heart. Many lives have been saved by Shinobu's medicine and care. When his body was strong again, Tanjiro was tested and allowed to return to the field, ready for even greater dangers.",
  zh:"一場硬仗後，炭治郎被送到蝴蝶屋——治療受傷隊士的寧靜居所。他的深傷由胡蝶忍與溫柔助手們治療；那裡用稀有山花製藥，滿園美麗蝴蝶。休養期間他也再次受訓，因隊士須不斷變強。屋裡善良的女孩傳授他新呼吸法。蝴蝶屋以療癒身心聞名，許多生命因忍的藥與照顧而獲救。身體康復後，炭治郎通過測試重返戰場。",
  q:[
    {t:"選擇題",q:"What is the Butterfly Estate used for?",opts:["Training demons","Healing injured slayers","Selling charcoal","Hiding treasure"],a:1,ex:"a peaceful home where injured slayers are healed。"},
    {t:"選擇題",q:"What is the special medicine made from?",opts:["Demon blood","Rare mountain flowers","Sea water","Iron"],a:1,ex:"made from rare mountain flowers。"},
    {t:"是非題",q:"許多生命因忍的藥而獲救。",opts:["正確 True","錯誤 False"],a:0,ex:"Many lives have been saved by Shinobu's medicine，True。"}
  ]},
/* 12 */ {title:"Someone to Protect",
  en:"Tanjiro fights for a reason. He fights to save his sister and to protect every innocent person from demons. \"I want to become strong enough to defeat Muzan, the demon who started all of this,\" he says. His friends are not always brave. Zenitsu is often too scared to move, yet he still tries his best when it matters most. Tanjiro tells them that they need to work together to survive their missions. He has decided to follow the smell of each demon, even when the path is dangerous, because he hopes to find a cure for Nezuko. It is important to stay calm in battle, he reminds himself. Above all, Tanjiro promises never to give up on the people he loves.",
  zh:"炭治郎為了理由而戰：為了拯救妹妹、保護每個無辜的人免受鬼害。他說：「我要變得夠強，去打敗一切的元兇——無慘。」他的夥伴未必勇敢，善逸常嚇得動彈不得，但關鍵時刻仍盡力而為。炭治郎說他們必須合作才能生還。他決定循著每隻鬼的氣味前進，即使路途危險，只因希望找到治癒妹妹的方法。他提醒自己戰鬥要冷靜，更發誓永不放棄所愛之人。",
  q:[
    {t:"選擇題",q:"Why does Tanjiro fight?",opts:["For money and fame","To save his sister and protect innocent people","To become a Hashira quickly","To leave the Corps"],a:1,ex:"to save his sister and to protect every innocent person。"},
    {t:"選擇題",q:"What is true about Zenitsu?",opts:["He is fearless","He is often scared but still tries","He hates Tanjiro","He is a demon"],a:1,ex:"often too scared to move, yet he still tries。"},
    {t:"是非題",q:"炭治郎想打敗無慘。",opts:["正確 True","錯誤 False"],a:0,ex:"strong enough to defeat Muzan，True。"}
  ]},
/* 13 */ {title:"Zenitsu and Inosuke",
  en:"On his journey, Tanjiro travels with two unusual companions. Running through the forest and fighting wild animals are Inosuke's favorite things; he wears a boar's head and loves climbing trees and shouting loudly. Zenitsu, on the other hand, hates fighting and keeps complaining about everything. Yet there is a secret: Zenitsu becomes an amazing swordsman while he is sleeping, using powerful Thunder Breathing without even knowing it. Tanjiro is good at smelling danger and at understanding people's feelings. He enjoys helping others, and he keeps practicing his breathing every single morning. The three boys argue often, but they also protect one another. By learning, training, and never giving up, they slowly become a strong and loyal team.",
  zh:"旅途中，炭治郎有兩名奇特的夥伴。在森林裡奔跑、與野獸搏鬥是伊之助最愛的事；他戴著野豬頭，愛爬樹、大聲吼叫。善逸則討厭戰鬥，總是抱怨；但有個祕密：他在睡夢中會變成驚人的劍士，無意識地使出雷之呼吸。炭治郎擅長嗅出危險、體察人心，喜歡助人，每天清晨持續練習呼吸。三人常吵架，卻也彼此守護，逐漸成為堅強忠誠的隊伍。",
  q:[
    {t:"選擇題",q:"What is special about Zenitsu?",opts:["He never sleeps","He fights amazingly while sleeping","He cannot use breathing","He is the strongest awake"],a:1,ex:"becomes an amazing swordsman while he is sleeping。"},
    {t:"選擇題",q:"What are Inosuke's favorite things?",opts:["Reading and cooking","Running, fighting, and climbing trees","Sleeping all day","Selling charcoal"],a:1,ex:"running... fighting... climbing trees and shouting loudly。"},
    {t:"是非題",q:"炭治郎每天早上持續練習呼吸法。",opts:["正確 True","錯誤 False"],a:0,ex:"keeps practicing his breathing every single morning，True。"}
  ]},
/* 14 */ {title:"The Flame Hashira",
  en:"On the Mugen Train, Tanjiro met Kyojuro Rengoku, the Flame Hashira who never lets his heart burn out. The train, which carried hundreds of sleeping passengers, was the hiding place of a powerful demon that trapped people inside their dreams. Rengoku, whose bright spirit gave everyone courage, fought the demon that attacked the passengers all night long. He protected everyone who was on the train, even when he was badly hurt. In the end, Rengoku faced an Upper Rank demon far stronger than himself. Although he could not win, he refused to run, and he saved every passenger before the sun rose. His last words, \"Set your heart ablaze,\" became a light that Tanjiro would carry for the rest of his life.",
  zh:"在無限列車上，炭治郎遇見炎柱煉獄杏壽郎——心火永不熄滅之人。那班載著數百名沉睡乘客的列車，藏著能把人困在夢中的強大鬼。煉獄以明亮的精神給眾人勇氣，整夜對抗攻擊乘客的鬼，即使重傷仍護住所有人。最後他面對遠強於己的上弦之鬼，雖無法取勝卻拒絕逃跑，在日出前救下每位乘客。他的遺言「燃燒你的心」，成為炭治郎一生的光。",
  q:[
    {t:"選擇題",q:"What did the demon on the train do to people?",opts:["Stole their money","Trapped them in their dreams","Turned them to stone","Made them demons"],a:1,ex:"trapped people inside their dreams。"},
    {t:"選擇題",q:"What were Rengoku's last words?",opts:["\"Run away\"","\"Set your heart ablaze\"","\"Goodbye forever\"","\"I give up\""],a:1,ex:"\"Set your heart ablaze\"。"},
    {t:"是非題",q:"煉獄在重傷時仍保護列車上所有人。",opts:["正確 True","錯誤 False"],a:0,ex:"protected everyone... even when he was badly hurt，True。"}
  ]},
/* 15 */ {title:"The Sound Hashira",
  en:"Tengen Uzui, the Sound Hashira, is loud and flashy, but he is also a brilliant fighter. He took Tanjiro, Zenitsu, and Inosuke to the entertainment district, where women had been disappearing for a long time. The team could fight together or split up to search, so they spread out through the busy streets. The demon hiding there was very strong, but the slayers refused to run. Tengen shouted orders, and the boys searched house after house. It was dangerous, so everyone had to stay alert through the night. In the end, two powerful demons appeared, and the battle was fierce. The friends could win, or they could lose everything, but by working as one team they finally protected the people of the district.",
  zh:"音柱宇髓天元既吵鬧又華麗，卻是出色的戰士。他帶炭治郎、善逸、伊之助前往女子長期失蹤的花街。隊伍可一起戰鬥或分頭搜查，於是散入熱鬧街巷。藏匿的鬼非常強大，但隊士拒絕逃跑。天元高喊命令，少年們逐屋搜索。情勢危險，整夜須保持警戒。最後兩隻強大的鬼現身，戰況激烈。他們可能贏、也可能失去一切，但靠著團結，終於守護了花街的人們。",
  q:[
    {t:"選擇題",q:"Why did the team go to the entertainment district?",opts:["To have a party","Women had been disappearing there","To buy swords","To rest"],a:1,ex:"women had been disappearing for a long time。"},
    {t:"選擇題",q:"How did the friends finally protect the people?",opts:["By running away","By working as one team","By hiding","By paying the demon"],a:1,ex:"by working as one team。"},
    {t:"是非題",q:"宇髓天元只是吵鬧，並不會打鬥。",opts:["正確 True","錯誤 False"],a:1,ex:"he is also a brilliant fighter，故 False。"}
  ]},
/* 16 */ {title:"Before the Final War",
  en:"Because Muzan, the demon king, was growing stronger, the Demon Slayer Corps began to prepare for a final war. Although the slayers were tired from many battles, they kept training every single day. When night came, the demons would rise again, so the slayers learned to fight in the dark. Tanjiro stayed calm even though he often felt afraid inside. Because Nezuko had learned to resist the sun, she gave everyone new hope. The Hashira gathered when the time was right to share their plans. Although they had lost many friends, they did not lose their will to fight. They knew the path ahead was dark, but they walked forward together, believing that one day the sun would rise on a world without demons.",
  zh:"因鬼王無慘日益強大，鬼殺隊開始為最終決戰做準備。雖然隊士們因多場戰鬥而疲憊，他們仍每天不停訓練。夜晚一到，鬼便再現，故隊士學會在黑暗中作戰。炭治郎內心常感害怕，卻保持冷靜。因禰豆子已能抵抗陽光，給了大家新希望。時機成熟時，柱們集結共商計畫。雖失去許多夥伴，他們未失鬥志，明知前路黑暗，仍一同前行，相信終有一天無鬼之世將迎來旭日。",
  q:[
    {t:"選擇題",q:"Why did the Corps prepare for a final war?",opts:["Muzan was growing stronger","They wanted gold","The Hashira were bored","The sun stopped rising"],a:0,ex:"Because Muzan... was growing stronger。"},
    {t:"選擇題",q:"Why did Nezuko give everyone hope?",opts:["She could cook well","She had learned to resist the sun","She became human","She found Muzan"],a:1,ex:"Nezuko had learned to resist the sun。"},
    {t:"是非題",q:"隊士們失去夥伴後也失去了鬥志。",opts:["正確 True","錯誤 False"],a:1,ex:"they did not lose their will to fight，故 False。"}
  ]},
/* 17 */ {title:"The Hashira Unite",
  en:"At last the final battle began, and all the Hashira came together. \"If we work together, we will defeat Muzan,\" they said. They had one great advantage: if the sun rises before he dies, Muzan will burn to ashes. So their plan was simple but deadly: hold him until dawn. \"You will lose your life if you make even one mistake,\" Giyu warned the younger slayers. \"But if we do not give up, the morning will come for everyone.\" If Nezuko joined them, they would have a real chance, because she was a demon who could stand in the sun. Through the long night, slayer after slayer attacked the demon king. If they could survive until sunrise, the world would finally be free.",
  zh:"最終決戰終於展開，眾柱齊聚。「只要齊心協力，就能打敗無慘，」他們說。他們有一大優勢：若在他死前太陽升起，無慘將化為灰燼。於是計畫簡單卻致命——拖住他直到黎明。義勇警告年輕隊士：「只要犯一個錯就會送命，但只要不放棄，黎明就會為所有人到來。」若禰豆子加入，他們便有真正勝算，因她是能立於陽光下的鬼。漫漫長夜，隊士前仆後繼攻向鬼王。",
  q:[
    {t:"選擇題",q:"What was the slayers' plan?",opts:["Run from Muzan","Hold Muzan until the sun rises","Make peace with him","Hide underground"],a:1,ex:"hold him until dawn / the sun rises。"},
    {t:"選擇題",q:"Why would Nezuko give them a real chance?",opts:["She was the strongest","She was a demon who could stand in the sun","She knew Muzan's name","She could fly"],a:1,ex:"a demon who could stand in the sun。"},
    {t:"是非題",q:"陽光升起會讓無慘化為灰燼。",opts:["正確 True","錯誤 False"],a:0,ex:"if the sun rises... Muzan will burn to ashes，True。"}
  ]},
/* 18 */ {title:"If I Were Stronger",
  en:"During the long battle, Tanjiro often thought about strength. \"If I were stronger, I would protect everyone,\" he whispered to himself. \"If we had more time, we would save more lives.\" He remembered Rengoku and thought, \"If he were here, he would tell us to set our hearts ablaze.\" Fear filled his chest, but he did not run. \"If I weren't afraid, I would smile like him,\" he said quietly. He wished he could turn back time to save his family, yet he knew that wishing alone would change nothing. So instead of dreaming about what he could not do, Tanjiro chose to act with the strength he already had. Step by step, he kept fighting, believing that small, brave choices could change the world.",
  zh:"漫長的戰鬥中，炭治郎常思索何謂強大。「如果我更強，就能保護所有人，」他低語。「如果我們有更多時間，就能救更多人。」他想起煉獄：「如果他在，會叫我們燃燒自己的心。」恐懼充滿胸口，他卻不逃。「如果我不害怕，就能像他一樣微笑，」他輕聲說。他多希望能讓時間倒流救回家人，卻明白光是空想改變不了什麼。於是他選擇用既有的力量行動，一步一步堅持戰鬥，相信微小而勇敢的選擇能改變世界。",
  q:[
    {t:"選擇題",q:"What did Tanjiro mainly think about during the battle?",opts:["Food","Strength and protecting others","Going home to sleep","Money"],a:1,ex:"he often thought about strength。"},
    {t:"選擇題",q:"What did Tanjiro finally choose to do?",opts:["Run away","Act with the strength he already had","Wait for help","Give up"],a:1,ex:"chose to act with the strength he already had。"},
    {t:"是非題",q:"炭治郎認為光靠空想就能改變一切。",opts:["正確 True","錯誤 False"],a:1,ex:"wishing alone would change nothing，故 False。"}
  ]},
/* 19 */ {title:"Where Is Muzan?",
  en:"For a long time, the slayers needed to know where Muzan was hiding. \"Do you know when he will appear?\" Tanjiro asked Tamayo, a kind demon doctor who was also Muzan's enemy. Nobody truly understood why he hated humans so much. Tamayo explained what the demon king feared most and how the slayers might defeat him. \"Can you tell me how we can turn him into ashes?\" Tanjiro asked. She told them about a special medicine that could make Muzan weak and human again. The slayers also wondered who had created the very first demon, and the answer was always the same: Muzan himself. By learning his secrets, the Corps finally understood how to bring the long nightmare to an end.",
  zh:"長久以來，隊士們需要知道無慘藏在何處。「你知道他何時會現身嗎？」炭治郎問珠世——一位善良、同時與無慘為敵的鬼醫。沒有人真正明白他為何如此憎恨人類。珠世解釋了鬼王最害怕的東西，以及擊敗他的方法。「你能告訴我，我們如何讓他化為灰燼嗎？」炭治郎問。她說起一種能使無慘虛弱、變回人類的特殊藥。隊士也好奇是誰創造了第一隻鬼，答案始終是無慘本人。",
  q:[
    {t:"選擇題",q:"Who was Tamayo?",opts:["A Hashira","A kind demon doctor and Muzan's enemy","A passenger","Tanjiro's mother"],a:1,ex:"a kind demon doctor who was also Muzan's enemy。"},
    {t:"選擇題",q:"What did Tamayo's special medicine do?",opts:["Healed wounds only","Could make Muzan weak and human again","Made slayers stronger","Cured Zenitsu's fear"],a:1,ex:"make Muzan weak and human again。"},
    {t:"是非題",q:"創造第一隻鬼的是無慘本人。",opts:["正確 True","錯誤 False"],a:0,ex:"the answer was always... Muzan himself，True。"}
  ]},
/* 20 */ {title:"The Dawn Arrives",
  en:"After the longest night, the sun finally rose, and the demon king was gone forever. \"We won, didn't we?\" Tanjiro whispered, hardly believing it. His friends were hurt and tired, but they were alive. The warm light touched Nezuko's face, and slowly she became fully human again. \"Nezuko is human again, isn't she?\" Tanjiro asked, with tears in his eyes. \"You won't forget our friends who fell, will you?\" Zenitsu said softly, and everyone nodded. They had fought bravely, and now a long age of peace could begin. \"We can finally live in peace, can't we?\" Inosuke grinned. As the morning sun rose over the mountains, the survivors smiled and promised to protect the gentle world their friends had died to save.",
  zh:"最漫長的一夜過後，太陽終於升起，鬼王永遠消失了。「我們贏了，不是嗎？」炭治郎難以置信地輕聲說。夥伴們傷痕累累卻都還活著。溫暖的陽光照上禰豆子的臉，她緩緩變回完全的人。「禰豆子又變回人了，不是嗎？」炭治郎含淚問。「你不會忘記犧牲的夥伴，會嗎？」善逸輕聲說，眾人點頭。他們英勇奮戰，和平的時代終將開始。「我們終於能在和平中生活了，不是嗎？」伊之助咧嘴笑。晨曦升起，倖存者微笑著，誓言守護夥伴用生命換來的溫柔世界。",
  q:[
    {t:"選擇題",q:"What happened to Nezuko when the sun touched her?",opts:["She disappeared","She became fully human again","She fell asleep","She grew larger"],a:1,ex:"slowly she became fully human again。"},
    {t:"選擇題",q:"What did the survivors promise at the end?",opts:["To find more demons","To protect the peaceful world","To leave the Corps","To forget the past"],a:1,ex:"promised to protect the gentle world。"},
    {t:"是非題",q:"故事結尾無慘仍然存在。",opts:["正確 True","錯誤 False"],a:1,ex:"the demon king was gone forever，故 False。"}
  ]}
];
/* 合併：把短文掛到各關，並把閱讀題加入該關題庫(cat:"r") */
READING.forEach(function(r,i){
  if(!LEVELS[i]) return;
  LEVELS[i].reading = {title:r.title, en:r.en, zh:r.zh};
  r.q.forEach(function(q){ LEVELS[i].bank.push(Object.assign({cat:"r"}, q)); });
});
