// Meta-Tags für alle Seiten
const metaTags = {
  home: {
    title: "Deutsche Payment AG | Unabhängiger Payment-Experte mit starkem Partnernetzwerk",
    description: "Als unabhängiger Payment-Experte entwickeln wir maßgeschneiderte Zahlungslösungen aus unserem starken Partnernetzwerk. Keine Eigenprodukte, nur das Beste für Ihre Bedürfnisse.",
    keywords: "payment, zahlungslösungen, deutsche payment, zahlungsabwicklung, payment-experte, iso"
  },
  zahlungsmethoden: {
    title: "Digitale Zahlungsmethoden | Deutsche Payment AG",
    description: "Optimale Kundenerfahrungen durch vielfältige Zahlungsmethoden. Bieten Sie Ihren Kunden reibungslose und sichere Bezahlvorgänge für höhere Conversion Rates.",
    keywords: "zahlungsmethoden, kreditkarten, lastschrift, sofortüberweisung, paypal, mobile payment"
  },
  savemyfees: {
    title: "SaveMyFees | KI-gestützte Kostenoptimierung | Deutsche Payment AG",
    description: "Unsere KI-gestützte Analyseplattform SaveMyFees revolutioniert die Art, wie Unternehmen ihre Zahlungskosten optimieren. Sparen Sie 20-30% Ihrer Zahlungskosten.",
    keywords: "savemyfees, payment-kosten, kostenoptimierung, zahlungskosten, interchange++, payment-analyse"
  },
  openBanking: {
    title: "Open Banking & BNPL | Die Payments 4.X-Ära | Deutsche Payment AG",
    description: "Open Banking, Konto-zu-Konto-Zahlungen und Buy Now, Pay Later Lösungen für die Payment 4.X-Ära. Revolutionieren Sie Ihre Zahlungsabwicklung.",
    keywords: "open banking, bnpl, buy now pay later, konto-zu-konto, a2a, payment 4.x"
  },
  risikomanagement: {
    title: "Risiko- & Fraudmanagement | Sicherheit mit System | Deutsche Payment AG",
    description: "Mit modernsten Technologien und holistischen Risikostrategien minimieren Sie Betrugsrisiken und steigern Akzeptanzraten. Maximale Sicherheit für Ihre Zahlungen.",
    keywords: "risikomanagement, fraudmanagement, betrugsschutz, payment-sicherheit, chargeback-management"
  },
  unternehmen: {
    title: "Über uns | Deutsche Payment AG | Unabhängiger Payment-Experte",
    description: "Die Deutsche Payment AG ist ein unabhängiger Payment-Experte mit starkem Partnernetzwerk. Erfahren Sie mehr über unsere Werte, unser Team und unsere Vision.",
    keywords: "deutsche payment, unternehmen, payment-experte, iso, über uns, team"
  },
  kontakt: {
    title: "Kontakt | Deutsche Payment AG | Beratung & Support",
    description: "Kontaktieren Sie die Deutsche Payment AG für Beratung zu optimalen Payment-Lösungen oder Support für bestehende Kunden. Wir freuen uns auf Ihre Nachricht.",
    keywords: "kontakt, beratung, support, deutsche payment, beratungstermin"
  }
};

// Funktion zum Einfügen der Meta-Tags in HTML-Dateien
function insertMetaTags(pageName, htmlContent) {
  const meta = metaTags[pageName];
  const metaTagsHTML = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${meta.description}">
  <meta name="keywords" content="${meta.keywords}">
  <meta name="author" content="Deutsche Payment AG">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://deutsche-payment.com/${pageName === 'home' ? '' : pageName + '/'}">
  <meta property="og:image" content="https://deutsche-payment.com/assets/images/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.description}">
  <title>${meta.title}</title>
  `;
  
  // Ersetze den Head-Bereich mit den neuen Meta-Tags
  return htmlContent.replace(/<head>[\s\S]*?<\/head>/, `<head>${metaTagsHTML}</head>`);
}

// Strukturierte Daten für die Organisation (JSON-LD)
const organizationSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Deutsche Payment AG",
  "url": "https://deutsche-payment.com",
  "logo": "https://deutsche-payment.com/assets/images/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/deutsche-payment",
    "https://twitter.com/deutschepayment",
    "https://www.facebook.com/DeutschePayment"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-30-81454860",
    "contactType": "customer service",
    "availableLanguage": ["German", "English"]
  }
}
</script>
`;

// Breadcrumb-Schema für alle Unterseiten
function generateBreadcrumbSchema(pageName, pageTitle) {
  return `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://deutsche-payment.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "${pageTitle}",
      "item": "https://deutsche-payment.com/${pageName}/"
    }
  ]
}
</script>
`;
}

// FAQ-Schema für relevante Seiten
const faqSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist ein unabhängiger Payment-Experte (ISO)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Als ISO (Independent Sales Organization) bieten wir Ihnen direkten Zugang zu führenden Payment-Providern. Wir sind nicht an eigene Produkte gebunden und können daher die optimale Lösung für Ihre Bedürfnisse auswählen."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Zahlungsmethoden bietet die Deutsche Payment AG an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir bieten über 100 verschiedene Zahlungsarten weltweit an, darunter Kreditkarten, Lastschrift, Sofortüberweisung, PayPal, Mobile Payment und viele lokale Zahlungsmethoden."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist SaveMyFees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SaveMyFees ist unsere KI-gestützte Analyseplattform, die die Art revolutioniert, wie Unternehmen ihre Zahlungskosten optimieren. Mit unserem transparenten IC++ Preismodell haben Sie volle Kontrolle über alle Gebührenkomponenten - ohne versteckte Aufschläge."
      }
    },
    {
      "@type": "Question",
      "name": "Wie sicher sind die Zahlungslösungen der Deutschen Payment AG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unsere Zahlungslösungen erfüllen höchste Sicherheitsstandards. Wir sind PCI-DSS konform und arbeiten nur mit voll lizenzierten Zahlungsdienstleistern zusammen. Zudem bieten wir umfassende Risikomanagement-Lösungen zum Schutz vor Betrug."
      }
    }
  ]
}
</script>
`;

// Funktion zum Einfügen der strukturierten Daten
function insertStructuredData(pageName, pageTitle, htmlContent) {
  let structuredData = organizationSchema;
  
  // Füge Breadcrumb-Schema für alle Seiten außer der Homepage hinzu
  if (pageName !== 'home') {
    structuredData += generateBreadcrumbSchema(pageName, pageTitle);
  }
  
  // Füge FAQ-Schema für relevante Seiten hinzu
  if (['home', 'zahlungsmethoden', 'savemyfees', 'risikomanagement'].includes(pageName)) {
    structuredData += faqSchema;
  }
  
  // Füge strukturierte Daten vor dem schließenden Body-Tag ein
  return htmlContent.replace('</body>', `${structuredData}</body>`);
}

// Funktion zur Optimierung von Bildern
function optimizeImages() {
  // Hier würde Code zur Bildoptimierung stehen
  // - Komprimierung
  // - WebP-Konvertierung
  // - Responsive Bildgrößen
  
  return `
// Beispiel für Lazy Loading von Bildern
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback für Browser ohne IntersectionObserver
    let active = false;

    const lazyLoad = function() {
      if (active === false) {
        active = true;

        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              if (lazyImage.dataset.srcset) {
                lazyImage.srcset = lazyImage.dataset.srcset;
              }
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
});
  `;
}

// CSS-Optimierungen
const criticalCSS = `
/* Kritisches CSS für schnelles Rendering */
:root {
  --primary-color: #0a2540;
  --secondary-color: #0077cc;
  --accent-color: #e63946;
  --text-color: #333333;
  --light-text-color: #ffffff;
  --background-color: #ffffff;
  --light-background-color: #f8f9fa;
  --dark-background-color: #0a2540;
  --border-radius: 4px;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--background-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-color: var(--dark-background-color);
  color: var(--light-text-color);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.hero {
  background-color: var(--dark-background-color);
  color: var(--light-text-color);
  padding: 80px 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--secondary-color);
  color: var(--light-text-color);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-weight: 500;
}

.btn:hover {
  background-color: #005fa3;
  transform: translateY(-2px);
}
`;

// Service Worker für Offline-Funktionalität und Caching
const serviceWorkerJS = `
// service-worker.js
const CACHE_NAME = 'deutsche-payment-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/variables.css',
  '/js/main.js',
  '/assets/images/logo.png',
  '/assets/fonts/roboto.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
`;

// Registrierung des Service Workers
const registerServiceWorker = `
// Service Worker registrieren
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
`;

// Google Analytics Integration
const googleAnalytics = `
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
  
  // Benutzerdefinierte Ereignisse
  document.addEventListener('DOMContentLoaded', function() {
    // Kontaktformular-Übermittlung verfolgen
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function() {
        gtag('event', 'form_submission', {
          'event_category': 'engagement',
          'event_label': 'contact_form'
        });
      });
    }
    
    // CTA-Klicks verfolgen
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        gtag('event', 'cta_click', {
          'event_category': 'engagement',
          'event_label': button.textContent
        });
      });
    });
  });
</script>
`;

// robots.txt Datei
const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://deutsche-payment.com/sitemap.xml
`;

// sitemap.xml Datei
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://deutsche-payment.com/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://deutsche-payment.com/zahlungsmethoden/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://deutsche-payment.com/savemyfees/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://deutsche-payment.com/openbankingbnpl/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://deutsche-payment.com/risikomanagement/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://deutsche-payment.com/unternehmen/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://deutsche-payment.com/kontakt/</loc>
    <lastmod>2025-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
`;

// .htaccess Datei für Apache-Server
const htaccess = `
# Aktiviere GZIP-Komprimierung
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Browser-Caching aktivieren
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>

# Weiterleitungen für alte URLs
Redirect 301 /services /zahlungsmethoden
Redirect 301 /about /unternehmen
Redirect 301 /contact /kontakt

# HTTPS erzwingen
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Trailing Slash hinzufügen
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ $1/ [L,R=301]
`;
