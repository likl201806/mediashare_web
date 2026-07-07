const { defaultLocale, getLocaleLabel, loadDictionary, locales } = window.MediaShareI18n;
const { renderHomePage, renderLegalPage } = window.MediaShareRenderers;

const isFileProtocol = window.location.protocol === "file:";
const currentScriptUrl = document.currentScript?.src || window.location.href;
const siteRoot = isFileProtocol ? new URL("../", currentScriptUrl) : new URL("/", window.location.origin);

function resolvePageUrl(locale, page) {
  if (isFileProtocol) {
    const filePath = page === "home" ? `${locale}/index.html` : `${locale}/${page}/index.html`;
    return new URL(filePath, siteRoot).href;
  }
  return page === "home" ? `/${locale}/` : `/${locale}/${page}/`;
}

function resolveAssetUrl(path) {
  return new URL(path, siteRoot).href;
}

function getPathInfo(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (!isFileProtocol) {
    const locale = locales.includes(segments[0]) ? segments[0] : defaultLocale;
    const page = segments[1] || "home";
    return { locale, page };
  }

  const localeIndex = segments.findIndex((segment) => locales.includes(segment));
  if (localeIndex === -1) {
    return { locale: defaultLocale, page: "home", isRoot: true };
  }
  const locale = segments[localeIndex];
  const maybePage = segments[localeIndex + 1];
  // In file:// paths like /zh-Hans/index.html, treat index.html as home.
  const page = !maybePage || maybePage === "index.html" ? "home" : maybePage;
  return { locale, page, isRoot: false };
}

function renderLanguageSwitcher(currentLocale, page) {
  const links = locales
    .map((locale) => {
      const activeClass = locale === currentLocale ? "locale-link active" : "locale-link";
      const ariaCurrent = locale === currentLocale ? ' aria-current="page"' : "";
      return `<a href="${resolvePageUrl(locale, page)}" class="${activeClass}"${ariaCurrent}>${getLocaleLabel(locale)}</a>`;
    })
    .join("");
  return `<div class="locale-switcher" aria-label="Language switcher">${links}</div>`;
}

async function mountPage() {
  const root = document.getElementById("app");
  if (!root) return;

  const pathname = window.location.pathname;
  const { locale, page } = getPathInfo(pathname);
  const validPages = ["home", "privacy", "support", "user-policy"];
  if (!validPages.includes(page)) {
    window.location.replace(resolvePageUrl(defaultLocale, "home"));
    return;
  }

  const dict = loadDictionary(locale);
  document.documentElement.lang = locale;
  document.title = dict.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);

  const switcherHtml = renderLanguageSwitcher(locale, page);
  if (page === "home") {
    root.innerHTML = renderHomePage({ locale, dict, switcherHtml, resolveAssetUrl, resolvePageUrl });
    return;
  }

  const pageMap = {
    privacy: "privacy",
    support: "support",
    "user-policy": "userPolicy",
  };
  root.innerHTML = renderLegalPage({
    locale,
    dict,
    pageKey: pageMap[page],
    switcherHtml,
    resolveAssetUrl,
    resolvePageUrl,
  });
}

function redirectRoot() {
  const path = window.location.pathname;
  const isRootPath = path === "/" || path === "/index.html" || (isFileProtocol && path.endsWith("/index.html"));
  if (isRootPath) {
    // In file:// mode, some browsers may not reliably follow location.replace
    // between local files. Render in-place to avoid blank screens on double-click.
    if (isFileProtocol) {
      const { isRoot } = getPathInfo(path);
      if (isRoot) {
        return false;
      }
    }
    const { isRoot } = getPathInfo(path);
    if (!isFileProtocol || isRoot) {
      window.location.replace(resolvePageUrl(defaultLocale, "home"));
      return true;
    }
  }
  return false;
}

if (!redirectRoot()) {
  mountPage().catch((error) => {
    console.error("[MediaShare] mountPage failed:", error);
    if (isFileProtocol) {
      const message = error instanceof Error ? `${error.message}\n\n${error.stack ?? ""}` : String(error);
      alert(`页面加载失败：\n${message}`);
      return;
    }
    window.location.replace(resolvePageUrl(defaultLocale, "home"));
    return true;
  });
}
