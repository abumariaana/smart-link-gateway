/* =====================================================
   adsterra.js — ملف إعلانات Adsterra
   لتعطيل كل إعلانات Adsterra: احذف هذا الملف أو
   احذف السطر: <script src="adsterra.js"></script>
   من redirect.html
   ===================================================== */

(function () {

  const isMobile = window.innerWidth <= 768;

  /* ══════════════════════════════════════════════════
     إعلان 5 — Social Bar (عائم على كل الأجهزة)
     يُحمَّل أولاً لأنه لا يحتاج حاوية
     مقاس: عائم — يصلح للهاتف والكمبيوتر
     ══════════════════════════════════════════════════ */
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-cfasync', 'false');
    s.src = 'https://bauval.org/14/959f77deac27dba936e9c02e98bc911c';
    s.async = true;
    document.head.appendChild(s);
  })();


  /* ══════════════════════════════════════════════════
     إعلان 9 — Smartlink (زر عائم)
     رابط: https://araplhn.org/4/3f093ddf57a8ee45454ef2e9b69b320a
     يظهر مرة واحدة كل دقيقة أو عند إعادة التحميل
     يصلح للهاتف والكمبيوتر
     ══════════════════════════════════════════════════ */
  (function () {
    const SMARTLINK = 'https://araplhn.org/4/3f093ddf57a8ee45454ef2e9b69b320a';
    const COOLDOWN  = 60 * 1000; // دقيقة واحدة

    const lastShown = parseInt(sessionStorage.getItem('sl_shown') || '0');
    const now       = Date.now();

    if (now - lastShown < COOLDOWN) return; // لو أقل من دقيقة — لا تظهر

    // إنشاء الزر العائم
    const btn = document.createElement('div');
    btn.id = 'smartlink-float';
    btn.innerHTML = `
      <div style="
        position:fixed;
        bottom:80px;
        left:20px;
        z-index:99999;
        background:linear-gradient(135deg,#7b7ef8,#5b5ef4);
        color:#fff;
        padding:12px 18px;
        border-radius:50px;
        font-family:'Cairo',sans-serif;
        font-size:0.82rem;
        font-weight:700;
        cursor:pointer;
        box-shadow:0 6px 24px rgba(91,94,244,0.5);
        display:flex;
        align-items:center;
        gap:10px;
        animation:float-in 0.4s ease;
        user-select:none;
      " onclick="window.__openSmartlink()">
        🎁 <span>احصل على مكافأتك!</span>
      </div>
      <style>
        @keyframes float-in {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      </style>
    `;
    document.body.appendChild(btn);

    window.__openSmartlink = function () {
      window.open(SMARTLINK, '_blank', 'noopener');
      sessionStorage.setItem('sl_shown', Date.now().toString());
      // إخفاء الزر بعد الضغط
      const el = document.getElementById('smartlink-float');
      if (el) el.style.display = 'none';

      // إظهاره مرة أخرى بعد الدقيقة
      setTimeout(() => {
        if (el) {
          sessionStorage.removeItem('sl_shown');
          el.style.display = 'block';
        }
      }, COOLDOWN);
    };

    sessionStorage.setItem('sl_shown', now.toString());
  })();


  /* ══════════════════════════════════════════════════
     دالة مساعدة — إنشاء حاوية إعلان وحقنه
     ══════════════════════════════════════════════════ */
  function injectBanner(containerId, key, width, height) {
    const wrap = document.getElementById(containerId);
    if (!wrap) return;

    // لا تتجاوز عرض الإعلان الرسمي — فقط احتويه
    wrap.style.cssText = `
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      overflow:hidden;
    `;

    // تحميل كود الإعلان
    const cfg = document.createElement('script');
    cfg.text = `atOptions={'key':'${key}','format':'iframe','height':${height},'width':${width},'params':{}};`;
    wrap.appendChild(cfg);

    const src = document.createElement('script');
    src.src = `https://bauval.org/22/${key}`;
    wrap.appendChild(src);
  }


  /* ══════════════════════════════════════════════════
     إعلان 3 — Native Banner (الاتنين)
     مقاس: متجاوب — يصلح للهاتف والكمبيوتر
     ══════════════════════════════════════════════════ */
  (function () {
    const wrap = document.getElementById('ad-native');
    if (!wrap) return;
    const s1 = document.createElement('script');
    s1.async = true;
    s1.setAttribute('data-cfasync', 'false');
    s1.src = 'https://bauval.org/21/7d74d287d7c8907ca009698fb7e174e7';
    wrap.appendChild(s1);
    const d = document.createElement('div');
    d.id = 'container-7d74d287d7c8907ca009698fb7e174e7';
    wrap.appendChild(d);
  })();


  if (isMobile) {
    /* ════════════════════════════════════════════════
       ═══════════  موبايل فقط  ═══════════════════════
       ════════════════════════════════════════════════ */

    /* إعلان 6 — 320×50 Mobile Banner (موبايل — أعلى الصفحة)
       مقاس رسمي: 320×50
       المكان: أعلى المحتوى في الموبايل               */
    injectBanner('ad-mob-top', '7ba3e4b2562ec32fe469244d1c937d74', 320, 50);

    /* إعلان 2 — 300×250 Rectangle (موبايل — وسط الصفحة)
       مقاس رسمي: 300×250
       المكان: بين العداد والزر في الموبايل            */
    injectBanner('ad-rect', '729c9fd7aa7322cef370e2d2f67a5788', 300, 250);

  } else {
    /* ════════════════════════════════════════════════
       ═══════════  كمبيوتر فقط  ══════════════════════
       ════════════════════════════════════════════════ */

    /* إعلان 1 — 728×90 Leaderboard (كمبيوتر — أعلى الصفحة)
       مقاس رسمي: 728×90
       المكان: أعلى المحتوى في الكمبيوتر               */
    injectBanner('ad-leader', 'b438ca159fef3619cd01dd89663463be', 728, 90);

    /* إعلان 2 — 300×250 Rectangle (كمبيوتر — شريط جانبي)
       مقاس رسمي: 300×250
       المكان: الشريط الجانبي الأيمن                   */
    injectBanner('ad-rect', '729c9fd7aa7322cef370e2d2f67a5788', 300, 250);

    /* إعلان 4 — 468×60 Banner (كمبيوتر — وسط الصفحة)
       مقاس رسمي: 468×60
       المكان: فوق العداد في الكمبيوتر                 */
    injectBanner('ad-468', '1e423ba61e8df2d60437276587320065', 468, 60);

    /* إعلان 7 — 160×300 Skyscraper (كمبيوتر — شريط جانبي ضيق)
       مقاس رسمي: 160×300
       المكان: الشريط الجانبي الأيسر                   */
    injectBanner('ad-sky-sm', 'fabddc7a40461c7b942294ab544c4344', 160, 300);

    /* إعلان 8 — 160×600 Wide Skyscraper (كمبيوتر — جانب أسفل)
       مقاس رسمي: 160×600
       المكان: الشريط الجانبي الأيسر أسفل              */
    injectBanner('ad-sky-lg', 'd6d837601ee8eae05c4e2f5180e6638d', 160, 600);
  }

})();
