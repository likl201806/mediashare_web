import { notFound } from "next/navigation";

export const locales = ["zh-Hans", "zh-Hant", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-Hans";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }
  return value;
}
