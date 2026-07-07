import { locales, resolveLocale } from "@/i18n/config";
import { LegalPage } from "@/components/legal-page";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function UserPolicyPage({ params }: Props) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  return <LegalPage locale={resolvedLocale} pageKey="userPolicy" />;
}
