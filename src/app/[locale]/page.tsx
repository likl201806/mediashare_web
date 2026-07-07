import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/messages";

type Props = {
  params: Promise<{ locale: string }>;
};

const featureIcons = ["#3b82f6", "#14b8a6", "#f59e0b", "#8b5cf6", "#ec4899", "#10b981"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);
  const screenshotLocale = resolvedLocale === "en" ? "en" : "zh-Hans";
  const screenshotPrefix = screenshotLocale === "en" ? "en" : "zh_hans";

  const screenshots = dict.home.screenshots.items.map((item, index) => ({
    ...item,
    src: `/images/screenshots/${screenshotLocale}/${screenshotPrefix}_${index + 1}.png`,
  }));

  return (
    <div className="page-shell">
      <header className="navbar container">
        <Link href={`/${resolvedLocale}`} className="brand">
          <Image src="/images/logo/mediashare_logo.png" alt="MediaShare logo" width={40} height={40} />
          <span>{dict.common.brand}</span>
        </Link>
        <nav className="nav-links">
          <a href="#features">{dict.common.navFeatures}</a>
          <a href="#screenshots">{dict.common.navScreenshots}</a>
          <Link href={`/${resolvedLocale}/support`}>{dict.common.navSupport}</Link>
          <a href="#download">{dict.common.navDownload}</a>
        </nav>
        <LanguageSwitcher locale={resolvedLocale} />
      </header>

      <main>
        <section className="hero section container">
          <div className="hero-copy">
            <h1>{dict.home.hero.title}</h1>
            <p>{dict.home.hero.subtitle}</p>
            <div className="hero-actions">
              <a href="#download" className="btn btn-primary">
                {dict.home.hero.primaryCta}
              </a>
              <a href="#features" className="btn btn-secondary">
                {dict.home.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image
              src="/images/logo/mediashare_logo.png"
              alt="MediaShare brand logo"
              width={280}
              height={280}
              priority
            />
          </div>
        </section>

        <section id="screenshots" className="section container">
          <div className="section-header">
            <h2>{dict.home.screenshots.title}</h2>
            <p>{dict.home.screenshots.subtitle}</p>
          </div>
          <div className="screenshots-grid">
            {screenshots.map((item) => (
              <article key={item.src} className="screenshot-card">
                <Image src={item.src} alt={item.alt} width={300} height={650} />
                <p>{item.caption}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section container">
          <div className="section-header">
            <h2>{dict.home.features.title}</h2>
            <p>{dict.home.features.subtitle}</p>
          </div>
          <div className="feature-grid">
            {dict.home.features.items.map((item, index) => (
              <article key={item.title} className="feature-card">
                <span className="feature-icon" style={{ backgroundColor: featureIcons[index % featureIcons.length] }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className="section section-cta">
          <div className="container cta-inner">
            <h2>{dict.home.cta.title}</h2>
            <p>{dict.home.cta.subtitle}</p>
            <a href="#" className="btn btn-primary" aria-label={dict.common.downloadNow}>
              {dict.home.cta.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>{dict.common.brand}</strong>
            <p>{dict.home.footer.copyright}</p>
          </div>
          <div>
            <h4>{dict.home.footer.product}</h4>
            <a href="#features">{dict.common.navFeatures}</a>
          </div>
          <div>
            <h4>{dict.home.footer.support}</h4>
            <Link href={`/${resolvedLocale}/support`}>{dict.home.footer.technicalSupport}</Link>
            <a href="#download">{dict.common.navDownload}</a>
          </div>
          <div>
            <h4>{dict.home.footer.legal}</h4>
            <Link href={`/${resolvedLocale}/privacy`}>{dict.home.footer.privacy}</Link>
            <Link href={`/${resolvedLocale}/user-policy`}>{dict.home.footer.userPolicy}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
