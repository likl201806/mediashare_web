import type { Metadata } from "next";
import { getDictionary } from "@/i18n/messages";
import { resolveLocale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${resolvedLocale}`,
      languages: {
        "zh-Hans": "/zh-Hans",
        "zh-Hant": "/zh-Hant",
        en: "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: resolvedLocale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  return (
    <div lang={resolvedLocale} data-locale={resolvedLocale}>
      {children}
    </div>
  );
}
