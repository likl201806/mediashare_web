import { defaultLocale, type Locale } from "@/i18n/config";

import en from "../../messages/en.json";
import zhHans from "../../messages/zh-Hans.json";

export type Dictionary = typeof zhHans;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "zh-Hans": zhHans,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
