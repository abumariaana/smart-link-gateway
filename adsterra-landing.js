/* =====================================================
   adsterra-landing.js
   إعلانات صفحة ads-landing.html فقط
   ===================================================== */

(function () {

  const isMobile = window.innerWidth <= 768;

  function injectBanner(containerId, scriptUrl, atKey, atWidth, atHeight) {
    const wrap = document.getElementById(containerId);
    if (!wrap) return;
    wrap.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;';
    if (atKey) {
      const cfg = document.createElement('script');
      cfg.text = `atOptions={'key':'${atKey}','format':'iframe','height':${atHeight},'width':${atWidth},'params':{}};`;
      wrap.appendChild(cfg);
    }
    const src = document.createElement('script');
    src.src = scriptUrl;
    wrap.appendChild(src);
  }

  /* ① Social Bar — عائم — كمبيوتر + هاتف */
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-cfasync', 'false');
    s.async = true;
    s.src = 'https://bauval.org/14/959f77deac27dba936e9c02e98bc911c';
    document.head.appendChild(s);
  })();

  /* ② Smartlink — زر عائم — كمبيوتر + هاتف */
  (function () {
    const SMARTLINK = 'https://araplhn.org/4/3f093ddf57a8ee45454ef2e9b69b320a';
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
        @keyframes sl-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
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

  /* ③ Native Banner — كمبيوتر + هاتف
        الحاوية: id="ad-native-landing"                */
  (function () {
    const wrap = document.getElementById('ad-native-landing');
    if (!wrap) return;
    const s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    s.src = 'https://bauval.org/21/7d74d287d7c8907ca009698fb7e174e7';
    wrap.appendChild(s);
    const d = document.createElement('div');
    d.id = 'container-7d74d287d7c8907ca009698fb7e174e7';
    wrap.appendChild(d);
  })();

  if (isMobile) {

    /* ④ 320×50 — هاتف فقط — أعلى الصفحة
          الحاوية: id="ad-top-landing"                  */
    injectBanner(
      'ad-top-landing',
      'https://bauval.org/22/7ba3e4b2562ec32fe469244d1c937d74',
      '7ba3e4b2562ec32fe469244d1c937d74',
      320, 50
    );

    /* ⑤ 300×250 — هاتف فقط — وسط الصفحة
          الحاوية: id="ad-rect-landing"                 */
    injectBanner(
      'ad-rect-landing',
      'https://bauval.org/22/729c9fd7aa7322cef370e2d2f67a5788',
      '729c9fd7aa7322cef370e2d2f67a5788',
      300, 250
    );

  } else {

    /* ⑥ 728×90 — كمبيوتر فقط — أعلى الصفحة
          الحاوية: id="ad-top-landing"                  */
    injectBanner(
      'ad-top-landing',
      'https://bauval.org/22/b438ca159fef3619cd01dd89663463be',
      'b438ca159fef3619cd01dd89663463be',
      728, 90
    );

    /* ⑦ 300×250 — كمبيوتر فقط — وسط الصفحة
          الحاوية: id="ad-rect-landing"                 */
    injectBanner(
      'ad-rect-landing',
      'https://bauval.org/22/729c9fd7aa7322cef370e2d2f67a5788',
      '729c9fd7aa7322cef370e2d2f67a5788',
      300, 250
    );

    /* ⑧ 468×60 — كمبيوتر فقط
          الحاوية: id="ad-468-landing"                  */
    injectBanner(
      'ad-468-landing',
      'https://bauval.org/22/1e423ba61e8df2d60437276587320065',
      '1e423ba61e8df2d60437276587320065',
      468, 60
    );

  }

})();
