import { resolveLocale } from "@/i18n/config";
import { LegalPage } from "@/components/legal-page";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  return <LegalPage locale={resolvedLocale} pageKey="support" />;
}
