const { localeDictionaries } = window.MediaShareLocalesData;

const locales = ["zh-Hans", "zh-Hant", "en"];
const defaultLocale = "zh-Hans";

function getLocaleLabel(locale) {
  if (locale === "zh-Hans") return "简中";
  if (locale === "zh-Hant") return "繁中";
  return "EN";
}

function loadDictionary(locale) {
  const safeLocale = locales.includes(locale) ? locale : defaultLocale;
  return localeDictionaries[safeLocale] ?? localeDictionaries[defaultLocale];
}

function getPathInfo(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const locale = locales.includes(segments[0]) ? segments[0] : defaultLocale;
  const page = segments[1] || "home";
  return { locale, page };
}

function getLocalizedPath(pathname, targetLocale) {
  const segments = pathname.split("/").filter(Boolean);
  const rest = locales.includes(segments[0]) ? segments.slice(1) : [];
  const target = [targetLocale, ...rest];
  return `/${target.join("/")}/`;
}

window.MediaShareI18n = {
  locales,
  defaultLocale,
  getLocaleLabel,
  loadDictionary,
  getPathInfo,
  getLocalizedPath,
};
