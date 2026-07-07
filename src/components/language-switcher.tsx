"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

function getTargetPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const [, ...rest] = segments;
  return `/${[targetLocale, ...rest].join("/")}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="locale-switcher" aria-label="Language switcher">
      {locales.map((item) => (
        <Link
          key={item}
          href={getTargetPath(pathname, item)}
          className={item === locale ? "locale-link active" : "locale-link"}
          aria-current={item === locale ? "page" : undefined}
        >
          {item === "zh-Hans" ? "中文" : "EN"}
        </Link>
      ))}
    </div>
  );
}
