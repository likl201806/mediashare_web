(function () {
  var BUILTIN_MESSAGES = {
    en: {
      nav: { home: "Home", privacy: "Privacy Policy", userPolicy: "User Policy", support: "Technical Support", languageLabel: "Language" },
      home: {
        heroTitle: "Share files across all your devices in seconds",
        heroSubtitle: "MediaShare helps you move photos, videos, and documents between iOS, Android, and desktop with a secure and simple workflow.",
        primaryCta: "Download Now",
        secondaryCta: "Get Support",
        screenshotTitle: "Product Screenshots",
        screenshotSubtitle: "A clean and consistent sharing experience across platforms.",
        featuresTitle: "Why choose MediaShare",
        downloadTitle: "Ready to transfer files faster?",
        downloadSubtitle: "Install MediaShare and start sharing instantly.",
        downloadButton: "Get MediaShare",
        screenshots: [
          { alt: "Main dashboard screenshot", caption: "Fast device discovery and transfer entry" },
          { alt: "History screenshot", caption: "Clear transfer history and status details" },
          { alt: "Settings screenshot", caption: "Flexible connection and privacy preferences" },
        ],
        features: [
          { title: "High-Speed Transfer", desc: "Share large files quickly over local network with reliable progress tracking." },
          { title: "Cross-Platform", desc: "Connect iOS, Android, and desktop clients in one workflow." },
          { title: "Secure by Design", desc: "Your transfers are protected with modern transport and session controls." },
          { title: "Simple Operation", desc: "Clean screens and guided actions keep every transfer easy to complete." },
          { title: "Transfer History", desc: "Review what was sent, received, and when for better traceability." },
          { title: "Helpful Support", desc: "Use in-app guidance and support channels to resolve issues quickly." },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: 2026-07-07",
        sections: [
          { title: "Scope", content: "This policy explains how MediaShare collects, uses, and protects information when you use the app and website." },
          { title: "Data We Collect", content: "We may process account identifiers, diagnostic logs, and transfer metadata that are necessary to provide and improve the service." },
          { title: "How We Use Data", content: "Data is used for service operation, security monitoring, troubleshooting, and product quality improvements." },
          { title: "Sharing and Disclosure", content: "We do not sell your personal data. Data is shared only with service providers or when required by law." },
          { title: "Storage and Security", content: "We apply reasonable technical and organizational safeguards to reduce unauthorized access, loss, or misuse risks." },
          { title: "Your Rights", content: "You can contact us to request access, correction, deletion, or other rights as allowed by applicable laws." },
          { title: "Children", content: "MediaShare is not directed to children under the legal minimum age in your jurisdiction." },
          { title: "Policy Updates", content: "We may update this policy over time. Material changes will be published on this page." },
          { title: "Contact", content: "For privacy requests, contact dec12230713@163.com." },
        ],
      },
      userPolicy: {
        title: "User Policy",
        lastUpdated: "Last updated: 2026-07-07",
        sections: [
          { title: "Acceptance", content: "By using MediaShare, you agree to this user policy and related legal documents." },
          { title: "Account and Access", content: "You are responsible for lawful use of your account, device, and connected network environments." },
          { title: "User Content", content: "You are responsible for files and data you transfer and must ensure you have required rights and permissions." },
          { title: "Prohibited Conduct", content: "You must not use MediaShare for illegal, harmful, abusive, or security-compromising activities." },
          { title: "Service Changes", content: "We may modify, suspend, or discontinue parts of the service with reasonable notice when possible." },
          { title: "Disclaimer", content: "The service is provided as available. We do not guarantee uninterrupted operation in all network conditions." },
          { title: "Limitation of Liability", content: "To the extent permitted by law, we are not liable for indirect, incidental, or consequential damages." },
          { title: "Dispute Resolution", content: "Disputes are handled according to applicable laws and agreed jurisdiction terms." },
          { title: "Contact", content: "For policy questions, contact dec12230713@163.com." },
        ],
      },
      support: {
        title: "Technical Support",
        intro: "We provide fast support for installation, transfer failures, and compatibility issues.",
        contactTitle: "Support Channels",
        contactDesc: "Send your issue details and screenshots to help us diagnose problems quickly.",
        faqTitle: "Frequently Asked Questions",
        faq: [
          { q: "Why can’t my devices discover each other?", a: "Ensure both devices are on the same network, grant local network permissions, and disable restrictive firewall settings." },
          { q: "Why does transfer stop midway?", a: "Check available storage, network stability, and whether the app stays active in foreground during transfer." },
          { q: "How do I report a bug effectively?", a: "Include app version, device model, OS version, reproduction steps, and screenshots in your support email." },
        ],
      },
      footer: { description: "MediaShare makes cross-device file sharing simple and reliable.", product: "Product", legal: "Legal", support: "Support", copyright: "© 2026 MediaShare. All rights reserved." },
    },
    "zh-Hans": {
      nav: { home: "首页", privacy: "隐私协议", userPolicy: "用户政策", support: "技术支持", languageLabel: "语言" },
      home: {
        heroTitle: "在所有设备间，秒级共享文件",
        heroSubtitle: "MediaShare 帮你在 iOS、Android 与桌面端之间安全、快速地传输照片、视频与文档。",
        primaryCta: "立即下载",
        secondaryCta: "获取支持",
        screenshotTitle: "产品截图",
        screenshotSubtitle: "跨平台一致的文件共享体验。",
        featuresTitle: "为什么选择 MediaShare",
        downloadTitle: "准备好更快传文件了吗？",
        downloadSubtitle: "安装 MediaShare，立即开始共享。",
        downloadButton: "获取 MediaShare",
        screenshots: [
          { alt: "主界面截图", caption: "快速发现设备并发起传输" },
          { alt: "历史记录截图", caption: "清晰查看传输记录与状态" },
          { alt: "设置页面截图", caption: "灵活管理连接与隐私偏好" },
        ],
        features: [
          { title: "高速传输", desc: "在局域网中稳定传输大文件，并提供清晰的进度反馈。" },
          { title: "多端互通", desc: "iOS、Android 与桌面端可在同一流程中顺畅协作。" },
          { title: "安全优先", desc: "通过现代化传输与会话机制保护你的共享过程。" },
          { title: "操作简单", desc: "清晰界面与引导式交互，让每次传输都易于完成。" },
          { title: "历史可追溯", desc: "随时查看发送与接收记录，便于排查与管理。" },
          { title: "支持完善", desc: "通过帮助文档与支持渠道快速定位并解决问题。" },
        ],
      },
      privacy: {
        title: "隐私协议",
        lastUpdated: "最后更新：2026-07-07",
        sections: [
          { title: "适用范围", content: "本协议说明你在使用 MediaShare 应用与官网时，我们如何收集、使用与保护信息。" },
          { title: "收集的信息", content: "我们可能处理提供服务所需的账号标识、诊断日志与传输元数据。" },
          { title: "信息使用方式", content: "信息用于服务运行、安全监控、故障排查与产品质量改进。" },
          { title: "共享与披露", content: "我们不会出售你的个人信息，仅在符合法律要求或服务提供必要场景下共享。" },
          { title: "存储与安全", content: "我们采取合理的技术与组织措施，降低未授权访问、丢失与滥用风险。" },
          { title: "你的权利", content: "在适用法律允许范围内，你可申请访问、更正、删除或行使其他法定权利。" },
          { title: "未成年人保护", content: "MediaShare 不面向你所在司法辖区最低法定年龄以下的未成年人。" },
          { title: "协议更新", content: "我们可能不定期更新本协议，重大更新会在本页面公告。" },
          { title: "联系我们", content: "隐私相关请求请发送至 dec12230713@163.com。" },
        ],
      },
      userPolicy: {
        title: "用户政策",
        lastUpdated: "最后更新：2026-07-07",
        sections: [
          { title: "接受条款", content: "使用 MediaShare 即表示你同意本用户政策及相关法律文件。" },
          { title: "账户与访问", content: "你需确保账号、设备与网络环境的合法与合规使用。" },
          { title: "用户内容责任", content: "你应保证所传输文件具备合法来源与必要授权。" },
          { title: "禁止行为", content: "不得将 MediaShare 用于违法、有害、滥用或危及安全的行为。" },
          { title: "服务变更", content: "在合理情况下，我们可对服务功能进行调整、暂停或终止。" },
          { title: "免责声明", content: "服务按现状提供，我们不承诺在所有网络环境下持续无中断。" },
          { title: "责任限制", content: "在法律允许范围内，我们不承担间接、附带或后果性损害责任。" },
          { title: "争议处理", content: "争议将依据适用法律及约定管辖规则处理。" },
          { title: "联系我们", content: "政策问题请联系 dec12230713@163.com。" },
        ],
      },
      support: {
        title: "技术支持",
        intro: "我们提供安装、传输失败与兼容性问题的快速支持。",
        contactTitle: "支持渠道",
        contactDesc: "请发送问题描述与截图，帮助我们更快定位原因。",
        faqTitle: "常见问题",
        faq: [
          { q: "为什么设备互相发现不到？", a: "请确认设备在同一网络、已授予本地网络权限，并检查防火墙限制。" },
          { q: "为什么传输中途停止？", a: "请检查存储空间、网络稳定性，并确保传输期间应用保持活跃。" },
          { q: "如何高效反馈 Bug？", a: "邮件中请附上应用版本、设备型号、系统版本、复现步骤和截图。" },
        ],
      },
      footer: { description: "MediaShare 让跨设备文件共享更简单、更可靠。", product: "产品", legal: "法律", support: "支持", copyright: "© 2026 MediaShare。保留所有权利。" },
    },
    "zh-Hant": {
      nav: { home: "首頁", privacy: "隱私協議", userPolicy: "用戶政策", support: "技術支援", languageLabel: "語言" },
      home: {
        heroTitle: "在所有裝置間，秒速分享檔案",
        heroSubtitle: "MediaShare 協助你在 iOS、Android 與桌面端之間安全、快速地傳輸照片、影片與文件。",
        primaryCta: "立即下載",
        secondaryCta: "取得支援",
        screenshotTitle: "產品截圖",
        screenshotSubtitle: "跨平台一致的檔案分享體驗。",
        featuresTitle: "為什麼選擇 MediaShare",
        downloadTitle: "準備好更快傳檔了嗎？",
        downloadSubtitle: "安裝 MediaShare，立即開始分享。",
        downloadButton: "取得 MediaShare",
        screenshots: [
          { alt: "主畫面截圖", caption: "快速發現裝置並啟動傳輸" },
          { alt: "歷史記錄截圖", caption: "清楚查看傳輸記錄與狀態" },
          { alt: "設定頁截圖", caption: "彈性管理連線與隱私偏好" },
        ],
        features: [
          { title: "高速傳輸", desc: "在區域網路中穩定傳送大型檔案，並提供清楚進度。" },
          { title: "多端互通", desc: "iOS、Android 與桌面端可在同一流程中順暢協作。" },
          { title: "安全優先", desc: "以現代化傳輸與工作階段機制保護你的分享過程。" },
          { title: "操作簡單", desc: "清晰介面與引導式互動，讓每次傳輸都容易完成。" },
          { title: "記錄可追溯", desc: "隨時查看傳送與接收記錄，便於排查與管理。" },
          { title: "支援完善", desc: "透過說明與支援管道快速定位並解決問題。" },
        ],
      },
      privacy: {
        title: "隱私協議",
        lastUpdated: "最後更新：2026-07-07",
        sections: [
          { title: "適用範圍", content: "本協議說明你在使用 MediaShare 應用與官網時，我們如何蒐集、使用與保護資訊。" },
          { title: "蒐集的資訊", content: "我們可能處理提供服務所需的帳號識別、診斷日誌與傳輸中繼資料。" },
          { title: "資訊使用方式", content: "資訊用於服務運作、安全監控、故障排查與產品品質改善。" },
          { title: "共享與揭露", content: "我們不會出售你的個人資料，僅於符合法律要求或提供服務必要情境下共享。" },
          { title: "儲存與安全", content: "我們採取合理技術與組織措施，以降低未授權存取、遺失與濫用風險。" },
          { title: "你的權利", content: "在適用法律允許範圍內，你可申請存取、更正、刪除或行使其他法定權利。" },
          { title: "未成年人保護", content: "MediaShare 不面向你所在司法轄區最低法定年齡以下的未成年人。" },
          { title: "協議更新", content: "我們可能不定期更新本協議，重大更新會在本頁公告。" },
          { title: "聯絡我們", content: "隱私相關請求請寄至 dec12230713@163.com。" },
        ],
      },
      userPolicy: {
        title: "用戶政策",
        lastUpdated: "最後更新：2026-07-07",
        sections: [
          { title: "接受條款", content: "使用 MediaShare 即表示你同意本用戶政策及相關法律文件。" },
          { title: "帳號與存取", content: "你需確保帳號、裝置與網路環境的合法與合規使用。" },
          { title: "用戶內容責任", content: "你應保證所傳輸檔案具備合法來源與必要授權。" },
          { title: "禁止行為", content: "不得將 MediaShare 用於違法、有害、濫用或危及安全的行為。" },
          { title: "服務變更", content: "在合理情況下，我們可對服務功能進行調整、暫停或終止。" },
          { title: "免責聲明", content: "服務按現況提供，我們不保證在所有網路環境下持續無中斷。" },
          { title: "責任限制", content: "在法律允許範圍內，我們不承擔間接、附帶或後果性損害責任。" },
          { title: "爭議處理", content: "爭議將依據適用法律及約定管轄規則處理。" },
          { title: "聯絡我們", content: "政策問題請聯絡 dec12230713@163.com。" },
        ],
      },
      support: {
        title: "技術支援",
        intro: "我們提供安裝、傳輸失敗與相容性問題的快速支援。",
        contactTitle: "支援管道",
        contactDesc: "請提供問題描述與截圖，協助我們更快定位原因。",
        faqTitle: "常見問題",
        faq: [
          { q: "為什麼裝置彼此找不到？", a: "請確認裝置在同一網路、已授予本地網路權限，並檢查防火牆限制。" },
          { q: "為什麼傳輸中途停止？", a: "請檢查儲存空間、網路穩定性，並確保傳輸期間應用保持活躍。" },
          { q: "如何有效回報 Bug？", a: "郵件中請附上應用版本、裝置型號、系統版本、重現步驟與截圖。" },
        ],
      },
      footer: { description: "MediaShare 讓跨裝置檔案分享更簡單、更可靠。", product: "產品", legal: "法律", support: "支援", copyright: "© 2026 MediaShare。保留所有權利。" },
    },
  };
  var SUPPORTED_LANGUAGES = [
    { code: "en", label: "English" },
    { code: "zh-Hans", label: "简体中文" },
    { code: "zh-Hant", label: "繁體中文" },
  ];
  var DEFAULT_LANGUAGE = "en";
  var STORAGE_KEY = "mediashare_language";
  var cache = {};
  var currentLanguage = DEFAULT_LANGUAGE;

  function localePath(lang) {
    return "js/locales/" + lang + ".json";
  }

  function normalizeLanguage(raw) {
    if (!raw) return DEFAULT_LANGUAGE;
    var lower = String(raw).toLowerCase();
    if (lower === "en" || lower.indexOf("en-") === 0) return "en";
    if (lower === "zh-cn" || lower === "zh-hans" || lower.indexOf("zh-sg") === 0) return "zh-Hans";
    if (lower === "zh-tw" || lower === "zh-hk" || lower === "zh-hant") return "zh-Hant";
    return DEFAULT_LANGUAGE;
  }

  async function loadLanguage(lang) {
    if (cache[lang]) return cache[lang];
    if (BUILTIN_MESSAGES[lang]) {
      cache[lang] = BUILTIN_MESSAGES[lang];
    }
    try {
      var response = await fetch(localePath(lang));
      if (!response.ok) throw new Error("Failed to load locale: " + lang);
      var data = await response.json();
      cache[lang] = data;
      return data;
    } catch (error) {
      if (cache[lang]) return cache[lang];
      if (lang !== DEFAULT_LANGUAGE) return loadLanguage(DEFAULT_LANGUAGE);
      console.error(error);
      return {};
    }
  }

  function deepGet(obj, key) {
    return key.split(".").reduce(function (acc, part) {
      return acc && Object.prototype.hasOwnProperty.call(acc, part) ? acc[part] : null;
    }, obj);
  }

  function applyTranslations(messageMap) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = deepGet(messageMap, key);
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = deepGet(messageMap, key);
      if (typeof value === "string") el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var value = deepGet(messageMap, key);
      if (typeof value === "string") el.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      var value = deepGet(messageMap, key);
      if (typeof value === "string") el.setAttribute("title", value);
    });
    document.documentElement.lang = currentLanguage;
  }

  function updateLanguageSelect() {
    var select = document.getElementById("languageSelect");
    if (!select) return;
    select.innerHTML = "";
    SUPPORTED_LANGUAGES.forEach(function (item) {
      var option = document.createElement("option");
      option.value = item.code;
      option.textContent = item.label;
      option.selected = item.code === currentLanguage;
      select.appendChild(option);
    });
    select.onchange = function (event) {
      window.I18N.changeLanguage(event.target.value);
    };
  }

  async function changeLanguage(lang) {
    currentLanguage = normalizeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    var messages = await loadLanguage(currentLanguage);
    applyTranslations(messages);
    updateLanguageSelect();
    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { language: currentLanguage, messages: messages },
      })
    );
  }

  async function init() {
    var stored = localStorage.getItem(STORAGE_KEY);
    var browser = navigator.language || navigator.userLanguage;
    var initial = normalizeLanguage(stored || browser);
    await changeLanguage(initial);
  }

  window.I18N = {
    init: init,
    changeLanguage: changeLanguage,
    getCurrentLanguage: function () {
      return currentLanguage;
    },
    getMessages: function () {
      return cache[currentLanguage] || {};
    },
  };
})();
