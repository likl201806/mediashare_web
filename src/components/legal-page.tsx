import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/messages";

type PageKey = "privacy" | "userPolicy" | "support";

export function LegalPage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const dict = getDictionary(locale);
  const page = dict.pages[pageKey];

  return (
    <main className="section">
      <div className="container doc-page">
        <h1>{page.title}</h1>
        <p className="doc-meta">{page.lastUpdated}</p>
        <p className="doc-intro">{page.intro}</p>

        <div className="doc-sections">
          {page.sections.map((item) => (
            <section key={item.title} className="doc-card">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </section>
          ))}
        </div>

        <Link href={`/${locale}`} className="btn btn-secondary">
          {dict.common.backHome}
        </Link>
      </div>
    </main>
  );
}
