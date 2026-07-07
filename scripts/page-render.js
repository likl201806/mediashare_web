const featureIcons = ["#3b82f6", "#14b8a6", "#f59e0b", "#8b5cf6", "#ec4899", "#10b981"];

function renderHomePage({ locale, dict, switcherHtml, resolveAssetUrl, resolvePageUrl }) {
  const screenshotLocale = locale === "en" ? "en" : "zh-Hans";
  const screenshots = dict.home.screenshots.items.map((item, index) => ({
    ...item,
    src: `${resolveAssetUrl(`images/screenshots/${screenshotLocale}/placeholder.svg`)}?i=${index + 1}`,
  }));

  return `
    <div class="page-shell">
      <header class="navbar container">
        <a href="${resolvePageUrl(locale, "home")}" class="brand">
          <img src="${resolveAssetUrl("images/logo/mediashare_logo.svg")}" alt="MediaShare logo" width="40" height="40" />
          <span>${dict.common.brand}</span>
        </a>
        <nav class="nav-links">
          <a href="#features">${dict.common.navFeatures}</a>
          <a href="#screenshots">${dict.common.navScreenshots}</a>
          <a href="${resolvePageUrl(locale, "support")}">${dict.common.navSupport}</a>
          <a href="#download">${dict.common.navDownload}</a>
        </nav>
        ${switcherHtml}
      </header>

      <main>
        <section class="hero section container">
          <div class="hero-copy">
            <h1>${dict.home.hero.title}</h1>
            <p>${dict.home.hero.subtitle}</p>
            <div class="hero-actions">
              <a href="#download" class="btn btn-primary">${dict.home.hero.primaryCta}</a>
              <a href="#features" class="btn btn-secondary">${dict.home.hero.secondaryCta}</a>
            </div>
          </div>
          <div class="hero-image-wrap">
            <img src="${resolveAssetUrl("images/logo/mediashare_logo.svg")}" alt="MediaShare brand logo" width="280" height="280" />
          </div>
        </section>

        <section id="screenshots" class="section container">
          <div class="section-header">
            <h2>${dict.home.screenshots.title}</h2>
            <p>${dict.home.screenshots.subtitle}</p>
          </div>
          <div class="screenshots-grid">
            ${screenshots
              .map(
                (item) => `
              <article class="screenshot-card">
                <img src="${item.src}" alt="${item.alt}" width="300" height="650" />
                <p>${item.caption}</p>
              </article>
            `,
              )
              .join("")}
          </div>
        </section>

        <section id="features" class="section container">
          <div class="section-header">
            <h2>${dict.home.features.title}</h2>
            <p>${dict.home.features.subtitle}</p>
          </div>
          <div class="feature-grid">
            ${dict.home.features.items
              .map(
                (item, index) => `
              <article class="feature-card">
                <span class="feature-icon" style="background-color:${featureIcons[index % featureIcons.length]};"></span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </article>
            `,
              )
              .join("")}
          </div>
        </section>

        <section id="download" class="section section-cta">
          <div class="container cta-inner">
            <h2>${dict.home.cta.title}</h2>
            <p>${dict.home.cta.subtitle}</p>
            <a href="#" class="btn btn-primary" aria-label="${dict.common.downloadNow}">${dict.home.cta.button}</a>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="container footer-content">
          <div>
            <strong>${dict.common.brand}</strong>
            <p>${dict.home.footer.copyright}</p>
          </div>
          <div>
            <h4>${dict.home.footer.product}</h4>
            <a href="#features">${dict.common.navFeatures}</a>
          </div>
          <div>
            <h4>${dict.home.footer.support}</h4>
            <a href="${resolvePageUrl(locale, "support")}">${dict.home.footer.technicalSupport}</a>
            <a href="#download">${dict.common.navDownload}</a>
          </div>
          <div>
            <h4>${dict.home.footer.legal}</h4>
            <a href="${resolvePageUrl(locale, "privacy")}">${dict.home.footer.privacy}</a>
            <a href="${resolvePageUrl(locale, "user-policy")}">${dict.home.footer.userPolicy}</a>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function renderLegalPage({ locale, dict, pageKey, switcherHtml, resolveAssetUrl, resolvePageUrl }) {
  const page = dict.pages[pageKey];
  return `
    <div class="page-shell">
      <header class="navbar container">
        <a href="${resolvePageUrl(locale, "home")}" class="brand">
          <img src="${resolveAssetUrl("images/logo/mediashare_logo.svg")}" alt="MediaShare logo" width="40" height="40" />
          <span>${dict.common.brand}</span>
        </a>
        <nav class="nav-links">
          <a href="${resolvePageUrl(locale, "home")}#features">${dict.common.navFeatures}</a>
          <a href="${resolvePageUrl(locale, "home")}#screenshots">${dict.common.navScreenshots}</a>
          <a href="${resolvePageUrl(locale, "support")}">${dict.common.navSupport}</a>
          <a href="${resolvePageUrl(locale, "home")}#download">${dict.common.navDownload}</a>
        </nav>
        ${switcherHtml}
      </header>

      <main class="section">
        <div class="container doc-page">
          <h1>${page.title}</h1>
          <p class="doc-meta">${page.lastUpdated}</p>
          <p class="doc-intro">${page.intro}</p>
          <div class="doc-sections">
            ${page.sections
              .map(
                (item) => `
              <section class="doc-card">
                <h2>${item.title}</h2>
                <p>${item.content}</p>
              </section>
            `,
              )
              .join("")}
          </div>
          <a href="${resolvePageUrl(locale, "home")}" class="btn btn-secondary">${dict.common.backHome}</a>
        </div>
      </main>
    </div>
  `;
}

window.MediaShareRenderers = {
  renderHomePage,
  renderLegalPage,
};
