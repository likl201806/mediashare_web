(function () {
  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  function bindMobileMenu() {
    var toggle = document.getElementById("menuToggle");
    var navLinks = document.getElementById("navLinks");
    if (!toggle || !navLinks) return;
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  function applyActiveNav() {
    var navLinks = document.getElementById("navLinks");
    if (!navLinks) return;

    var page = document.body.getAttribute("data-page");
    var pageToHref = {
      home: "index.html",
      privacy: "privacy.html",
      userPolicy: "user-policy.html",
      support: "support.html",
    };
    var currentHref = pageToHref[page];
    if (!currentHref) return;

    navLinks.querySelectorAll("a").forEach(function (link) {
      var isActive = link.getAttribute("href") === currentHref;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function screenshotPrefixByLanguage(lang) {
    if (lang === "zh-Hans") return "zh_hans";
    if (lang === "zh-Hant") return "zh_hans";
    return "en";
  }

  function screenshotDirByLanguage(lang) {
    if (lang === "zh-Hans") return "zh-Hans";
    if (lang === "zh-Hant") return "zh-Hans";
    return "en";
  }

  function makePlaceholderDataUri(label) {
    var text = String(label || "MediaShare").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff4e7"/><stop offset="100%" stop-color="#ffedd6"/></linearGradient></defs>' +
      '<rect width="1280" height="720" fill="url(#g)"/>' +
      '<rect x="120" y="120" width="1040" height="480" rx="24" fill="#ffffff" stroke="#ffd9b2" stroke-width="4"/>' +
      '<text x="640" y="350" text-anchor="middle" font-size="52" fill="#ca6d07" font-family="Arial, sans-serif">' +
      text +
      "</text>" +
      '<text x="640" y="410" text-anchor="middle" font-size="30" fill="#5b6675" font-family="Arial, sans-serif">Screenshot Placeholder</text>' +
      "</svg>";
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function bindImageFallback(img, fallbackLabel) {
    if (!img) return;
    img.onerror = function () {
      if (img.dataset.fallbackApplied === "1") return;
      img.dataset.fallbackApplied = "1";
      img.src = makePlaceholderDataUri(fallbackLabel);
    };
  }

  function renderHome(messages) {
    var featureGrid = document.getElementById("featureGrid");
    var screenshotGrid = document.getElementById("screenshotGrid");
    var heroScreenshot = document.getElementById("heroScreenshot");
    if (!featureGrid || !screenshotGrid || !heroScreenshot) return;

    var lang = window.I18N.getCurrentLanguage();
    var shotDir = screenshotDirByLanguage(lang);
    var shotPrefix = screenshotPrefixByLanguage(lang);
    var screenshots = (messages.home && messages.home.screenshots) || [];
    var features = (messages.home && messages.home.features) || [];

    heroScreenshot.src = "assets/images/screenshots/" + shotDir + "/" + shotPrefix + "_1.PNG";
    bindImageFallback(heroScreenshot, "MediaShare");

    screenshotGrid.innerHTML = "";
    screenshots.forEach(function (shot, index) {
      var card = document.createElement("article");
      card.className = "shot-card";
      card.innerHTML =
        '<img src="assets/images/screenshots/' +
        shotDir +
        "/" +
        shotPrefix +
        "_" +
        (index + 1) +
        '.PNG" alt="' +
        (shot.alt || "screenshot") +
        '" />' +
        "<p>" +
        (shot.caption || "") +
        "</p>";
      screenshotGrid.appendChild(card);
      bindImageFallback(card.querySelector("img"), shot.alt || "MediaShare");
    });

    featureGrid.innerHTML = "";
    features.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "feature-card";
      card.innerHTML = "<h3>" + item.title + "</h3><p>" + item.desc + "</p>";
      featureGrid.appendChild(card);
    });
  }

  function renderLegal(messages, key) {
    var target = document.getElementById("legalContent");
    if (!target) return;
    var sections = (messages[key] && messages[key].sections) || [];
    target.innerHTML = "";
    sections.forEach(function (item) {
      var block = document.createElement("article");
      block.className = "legal-item";
      block.innerHTML = "<h3>" + item.title + "</h3><p>" + item.content + "</p>";
      target.appendChild(block);
    });
  }

  function renderSupportFaq(messages) {
    var target = document.getElementById("faqList");
    if (!target) return;
    var items = (messages.support && messages.support.faq) || [];
    target.innerHTML = "";
    items.forEach(function (item) {
      var wrap = document.createElement("article");
      wrap.className = "faq-item";
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = item.q;
      var answer = document.createElement("p");
      answer.textContent = item.a;
      answer.hidden = true;
      button.addEventListener("click", function () {
        var shouldOpen = answer.hidden;
        target.querySelectorAll("p").forEach(function (node) {
          node.hidden = true;
        });
        answer.hidden = !shouldOpen;
      });
      wrap.appendChild(button);
      wrap.appendChild(answer);
      target.appendChild(wrap);
    });
  }

  function renderCurrentPage(messages) {
    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome(messages);
    if (page === "privacy") renderLegal(messages, "privacy");
    if (page === "userPolicy") renderLegal(messages, "userPolicy");
    if (page === "support") renderSupportFaq(messages);
  }

  onReady(function () {
    bindMobileMenu();
    applyActiveNav();
    window.I18N.init().then(function () {
      renderCurrentPage(window.I18N.getMessages());
    });
    document.addEventListener("languageChanged", function (event) {
      renderCurrentPage(event.detail.messages || {});
    });
  });
})();
