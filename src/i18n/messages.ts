import { defaultLocale, type Locale } from "@/i18n/config";

import en from "../../messages/en.json";
import zhHans from "../../messages/zh-Hans.json";
import zhHant from "../../messages/zh-Hant.json";

export type Dictionary = typeof zhHans;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
