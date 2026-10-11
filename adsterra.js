/* =====================================================
   adsterra.js — ملف إعلانات Adsterra
   =====================================================
   لتعطيل كل إعلانات Adsterra:
   احذف السطر ده من redirect.html:
   <script src="adsterra.js"></script>

   لاستبدال بمنصة أخرى:
   أنشئ ملف باسم المنصة مثل: propeller.js
   وغيّر السطر في redirect.html لـ:
   <script src="propeller.js"></script>
   ===================================================== */

(function () {

  /* ════════════════════════════════════════════════════
     كشف نوع الجهاز تلقائياً
     ════════════════════════════════════════════════════ */
  const isMobile = window.innerWidth <= 768;


  /* ════════════════════════════════════════════════════
     دالة حقن البنر في حاويته
     لا تعدل هذه الدالة
     ════════════════════════════════════════════════════ */
  function injectBanner(containerId, scriptUrl, atKey, atWidth, atHeight) {
    const wrap = document.getElementById(containerId);
    if (!wrap) return;

    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;';

    if (atKey) {
      // إعلان iframe بانر
      const cfg = document.createElement('script');
      cfg.text = `atOptions={'key':'${atKey}','format':'iframe','height':${atHeight},'width':${atWidth},'params':{}};`;
      wrap.appendChild(cfg);
    }

    const src = document.createElement('script');
    src.src = scriptUrl;
    wrap.appendChild(src);
  }


  /* ════════════════════════════════════════════════════
     ① إعلان Social Bar — عائم — كمبيوتر + هاتف
        النوع: Social Bar (يظهر تلقائياً على حواف الشاشة)
        لا يحتاج حاوية HTML
        ↓ ضع رابط سكريبت Social Bar هنا ↓
     ════════════════════════════════════════════════════ */
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-cfasync', 'false');
    s.async = true;
    s.src = 'ضع_رابط_سكريبت_social_bar_هنا';
    // مثال: s.src = 'https://bauval.org/14/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    document.head.appendChild(s);
  })();


  /* ════════════════════════════════════════════════════
     ② إعلان Smartlink — زر عائم — كمبيوتر + هاتف
        النوع: Smartlink (رابط ذكي يفتح في نافذة جديدة)
        يظهر مرة واحدة كل دقيقة أو عند إعادة التحميل
        ↓ ضع رابط Smartlink هنا ↓
     ════════════════════════════════════════════════════ */
  (function () {
    const SMARTLINK = 'ضع_رابط_smartlink_هنا';
    // مثال: const SMARTLINK = 'https://araplhn.org/4/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

    const COOLDOWN  = 60 * 1000;
    const lastShown = parseInt(sessionStorage.getItem('sl_shown') || '0');
    const now       = Date.now();
    if (now - lastShown < COOLDOWN) return;

    const btn = document.createElement('div');
    btn.id = 'smartlink-float';
    btn.innerHTML = `
      <div style="position:fixed;bottom:80px;left:20px;z-index:99999;
        background:linear-gradient(135deg,#7b7ef8,#5b5ef4);color:#fff;
        padding:12px 18px;border-radius:50px;font-family:'Cairo',sans-serif;
        font-size:0.82rem;font-weight:700;cursor:pointer;
        box-shadow:0 6px 24px rgba(91,94,244,0.5);
        display:flex;align-items:center;gap:10px;
        animation:sl-in 0.4s ease;user-select:none;"
        onclick="window.__openSL()">
        🎁 <span>احصل على مكافأتك!</span>
      </div>
      <style>
        @keyframes sl-in {
          from{opacity:0;transform:translateY(20px)}
          to{opacity:1;transform:translateY(0)}
        }
      </style>`;
    document.body.appendChild(btn);

    window.__openSL = function () {
      window.open(SMARTLINK, '_blank', 'noopener');
      sessionStorage.setItem('sl_shown', Date.now().toString());
      const el = document.getElementById('smartlink-float');
      if (el) el.style.display = 'none';
      setTimeout(() => { if (el) { sessionStorage.removeItem('sl_shown'); el.style.display = 'block'; } }, COOLDOWN);
    };

    sessionStorage.setItem('sl_shown', now.toString());
  })();


  /* ════════════════════════════════════════════════════
     ③ إعلان Native Banner — كمبيوتر + هاتف
        النوع: Native (يندمج مع المحتوى تلقائياً)
        الحاوية في redirect.html: id="ad-native"
        ↓ ضع رابط سكريبت Native هنا ↓
     ════════════════════════════════════════════════════ */
  (function () {
    const wrap = document.getElementById('ad-native');
    if (!wrap) return;
    const s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    s.src = 'ضع_رابط_سكريبت_native_هنا';
    // مثال: s.src = 'https://bauval.org/21/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    wrap.appendChild(s);
    const d = document.createElement('div');
    d.id = 'container-ضع_id_الحاوية_هنا';
    // مثال: d.id = 'container-7d74d287d7c8907ca009698fb7e174e7';
    wrap.appendChild(d);
  })();


  /* ════════════════════════════════════════════════════
     ════════════  إعلانات الهاتف فقط  ════════════════
     ════════════════════════════════════════════════════ */
  if (isMobile) {

    /* ④ بانر 320×50 — هاتف فقط — أعلى الصفحة
          الحاوية في redirect.html: id="ad-mob-top"
          المكان: أعلى المحتوى في الموبايل
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-mob-top',
      'ضع_رابط_سكريبت_320x50_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: '7ba3e4b2562ec32fe469244d1c937d74'
      320, 50
    );

    /* ⑤ بانر 300×250 — هاتف فقط — وسط الصفحة
          الحاوية في redirect.html: id="ad-rect"
          المكان: داخل الكارت بين العداد والزر
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-rect',
      'ضع_رابط_سكريبت_300x250_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: '729c9fd7aa7322cef370e2d2f67a5788'
      300, 250
    );


  /* ════════════════════════════════════════════════════
     ════════════  إعلانات الكمبيوتر فقط  ═════════════
     ════════════════════════════════════════════════════ */
  } else {

    /* ⑥ بانر 728×90 Leaderboard — كمبيوتر فقط — أعلى الصفحة
          الحاوية في redirect.html: id="ad-leader"
          المكان: أعلى المحتوى فوق الكارت
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-leader',
      'ضع_رابط_سكريبت_728x90_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: 'b438ca159fef3619cd01dd89663463be'
      728, 90
    );

    /* ⑦ بانر 300×250 — كمبيوتر فقط — شريط جانبي أيمن
          الحاوية في redirect.html: id="ad-rect"
          المكان: داخل الكارت وسط الصفحة
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-rect',
      'ضع_رابط_سكريبت_300x250_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: '729c9fd7aa7322cef370e2d2f67a5788'
      300, 250
    );

    /* ⑧ بانر 468×60 — كمبيوتر فقط — وسط الصفحة
          الحاوية في redirect.html: id="ad-468"
          المكان: داخل الكارت فوق الزر
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-468',
      'ضع_رابط_سكريبت_468x60_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: '1e423ba61e8df2d60437276587320065'
      468, 60
    );

    /* ⑨ بانر 160×300 Skyscraper — كمبيوتر فقط — شريط جانبي أيمن أعلى
          الحاوية في redirect.html: id="ad-sky-sm"
          المكان: الشريط الجانبي الأيمن أعلى
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-sky-sm',
      'ضع_رابط_سكريبت_160x300_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: 'fabddc7a40461c7b942294ab544c4344'
      160, 300
    );

    /* ⑩ بانر 160×600 Wide Skyscraper — كمبيوتر فقط — شريط جانبي أيمن أسفل
          الحاوية في redirect.html: id="ad-sky-lg"
          المكان: الشريط الجانبي الأيمن أسفل
          ↓ ضع مفتاح الإعلان ورابط السكريبت هنا ↓   */
    injectBanner(
      'ad-sky-lg',
      'ضع_رابط_سكريبت_160x600_هنا',
      // مثال: 'https://bauval.org/22/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      'ضع_المفتاح_key_هنا',   // مثال: 'd6d837601ee8eae05c4e2f5180e6638d'
      160, 600
    );

  }

})();
