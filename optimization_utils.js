// Minify and bundle JavaScript
const minifyJS = () => {
  // In a real project, this would use tools like Webpack, Rollup, or Terser
  // This is a simplified example
  return `
// Main JavaScript bundle for Deutsche Payment AG website
// Minified and bundled for production

// Navigation functionality
document.addEventListener('DOMContentLoaded',function(){const e=document.querySelector('.mobile-menu-toggle'),t=document.querySelector('.nav-links');e&&t&&e.addEventListener('click',function(){t.classList.toggle('active')})});

// Sticky header
(function(){let e=document.querySelector('header');if(e){let t=e.offsetTop;window.onscroll=function(){window.pageYOffset>t?e.classList.add('sticky'):e.classList.remove('sticky')}}})();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener('click',function(t){t.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})})});

// Animation on scroll
const animateOnScroll=function(){const e=document.querySelectorAll('.animate-on-scroll');if('IntersectionObserver'in window){let t=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('animated');t.unobserve(e.target)}})});e.forEach(function(e){t.observe(e)})}else{e.forEach(function(e){e.classList.add('animated')})}};document.addEventListener('DOMContentLoaded',animateOnScroll);

// Form validation
const validateForm=function(e){let t=!0,n=e.querySelector('input[type="email"]');if(n&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)){n.classList.add('error');t=!1}let r=e.querySelectorAll('input[required], textarea[required]');return r.forEach(function(e){if(!e.value.trim()){e.classList.add('error');t=!1}}),t};document.querySelectorAll('form').forEach(e=>{e.addEventListener('submit',function(t){validateForm(e)||(t.preventDefault(),alert('Bitte füllen Sie alle Pflichtfelder korrekt aus.'))})});

// Statistics counter animation
const animateCounters=function(){const e=document.querySelectorAll('.counter');if('IntersectionObserver'in window){let t=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){let n=e.target,r=parseInt(n.getAttribute('data-target')),a=0,o=Math.ceil(r/100);const i=setInterval(function(){a+=o,n.textContent=a;if(a>=r){n.textContent=r;clearInterval(i)}},20);t.unobserve(n)}})});e.forEach(function(e){t.observe(e)})}};document.addEventListener('DOMContentLoaded',animateCounters);

// Service Worker Registration
"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)},function(e){console.log("ServiceWorker registration failed: ",e)})});

// Google Analytics
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date),gtag("config","G-XXXXXXXXXX");document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#contact-form");e&&e.addEventListener("submit",function(){gtag("event","form_submission",{event_category:"engagement",event_label:"contact_form"})});const t=document.querySelectorAll(".cta-button");t.forEach(function(e){e.addEventListener("click",function(){gtag("event","cta_click",{event_category:"engagement",event_label:e.textContent})})})});
`;
};

// Minify CSS
const minifyCSS = () => {
  // In a real project, this would use tools like PostCSS, cssnano, or CleanCSS
  // This is a simplified example
  return `
:root{--primary-color:#0a2540;--secondary-color:#0077cc;--accent-color:#e63946;--text-color:#333;--light-text-color:#fff;--background-color:#fff;--light-background-color:#f8f9fa;--dark-background-color:#0a2540;--border-radius:4px;--box-shadow:0 4px 6px rgba(0,0,0,.1);--transition:all .3s ease;--container-padding:20px;--heading-large:2.5rem;--heading-medium:2rem;--heading-small:1.5rem;--text-normal:1rem;--text-small:.875rem;--spacing-large:80px;--spacing-medium:40px;--spacing-small:20px}body,html{margin:0;padding:0;font-family:Roboto,sans-serif;font-size:16px;line-height:1.5;color:var(--text-color);background-color:var(--background-color)}.container{width:100%;max-width:1200px;margin:0 auto;padding:0 var(--container-padding)}header{background-color:var(--dark-background-color);color:var(--light-text-color);padding:20px 0;position:sticky;top:0;z-index:1000}header.sticky{box-shadow:0 2px 10px rgba(0,0,0,.1)}.hero{background-color:var(--dark-background-color);color:var(--light-text-color);padding:var(--spacing-large) 0;text-align:center}.hero h1{font-size:var(--heading-large);margin-bottom:20px}.btn{display:inline-block;padding:12px 24px;background-color:var(--secondary-color);color:var(--light-text-color);text-decoration:none;border-radius:var(--border-radius);transition:var(--transition);font-weight:500}.btn:hover{background-color:#005fa3;transform:translateY(-2px)}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:30px}img{max-width:100%;height:auto}h1{font-size:var(--heading-large);line-height:1.2;margin-bottom:var(--spacing-small)}h2{font-size:var(--heading-medium);line-height:1.3;margin-bottom:var(--spacing-small)}h3{font-size:var(--heading-small);line-height:1.4;margin-bottom:var(--spacing-small)}p{font-size:var(--text-normal);line-height:1.6;margin-bottom:var(--spacing-small)}.main-nav{display:flex;justify-content:space-between;align-items:center}.nav-links{display:flex;list-style:none;margin:0;padding:0}.nav-links li{margin-left:20px}.mobile-menu-toggle{display:none;background:0 0;border:none;font-size:1.5rem;cursor:pointer}.card{background-color:var(--background-color);border-radius:var(--border-radius);box-shadow:var(--box-shadow);padding:var(--spacing-small);transition:var(--transition)}.card:hover{transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,.1)}.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}.footer{background-color:var(--dark-background-color);color:var(--light-text-color);padding:var(--spacing-medium) 0}.footer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px}.animate-on-scroll{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}.animate-on-scroll.animated{opacity:1;transform:translateY(0)}.counter{font-size:2.5rem;font-weight:700;color:var(--secondary-color)}@media (max-width:992px){:root{--heading-large:2.2rem;--heading-medium:1.8rem;--heading-small:1.3rem;--spacing-large:60px;--spacing-medium:30px}.card-grid{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:768px){:root{--container-padding:15px;--heading-large:2rem;--heading-medium:1.6rem;--heading-small:1.2rem;--text-normal:.95rem;--spacing-large:40px;--spacing-medium:25px;--spacing-small:15px}.mobile-menu-toggle{display:block}.nav-links{display:none;position:absolute;top:100%;left:0;width:100%;background-color:var(--dark-background-color);flex-direction:column;padding:20px}.nav-links.active{display:flex}.nav-links li{margin:10px 0}.card-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr}.grid{gap:20px}}@media (max-width:480px){:root{--heading-large:1.8rem;--heading-medium:1.4rem;--heading-small:1.1rem;--text-normal:.9rem;--spacing-large:30px;--spacing-medium:20px;--spacing-small:10px}}@media (hover:none){button,.btn,.nav-links a,.footer a{min-height:44px;min-width:44px;padding:12px 20px}.card:hover{transform:none;box-shadow:var(--box-shadow)}.dropdown-menu{display:none}.dropdown.active .dropdown-menu{display:block}}:focus{outline:3px solid var(--secondary-color);outline-offset:2px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}@media print{body{font-size:12pt;line-height:1.5;color:#000;background:#fff}.no-print{display:none}a{text-decoration:underline;color:#000}a[href^="http"]:after{content:" (" attr(href) ")"}img{max-width:100%!important;page-break-inside:avoid}h1,h2,h3,h4,h5,h6{page-break-after:avoid;page-break-inside:avoid}p,blockquote,ul,ol,dl,table{page-break-inside:avoid}}
`;
};

// Generate optimized HTML with inline critical CSS
const generateOptimizedHTML = (pageName, pageTitle, content) => {
  const criticalCSS = `<style>${minifyCSS()}</style>`;
  
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${metaTags[pageName].description}">
  <meta name="keywords" content="${metaTags[pageName].keywords}">
  <meta name="author" content="Deutsche Payment AG">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="${metaTags[pageName].title}">
  <meta property="og:description" content="${metaTags[pageName].description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://deutsche-payment.com/${pageName === 'home' ? '' : pageName + '/'}">
  <meta property="og:image" content="https://deutsche-payment.com/assets/images/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metaTags[pageName].title}">
  <meta name="twitter:description" content="${metaTags[pageName].description}">
  <title>${metaTags[pageName].title}</title>
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/assets/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/images/logo.png" as="image">
  
  <!-- Inline critical CSS -->
  ${criticalCSS}
  
  <!-- Deferred non-critical CSS -->
  <link rel="stylesheet" href="/css/main.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://deutsche-payment.com/${pageName === 'home' ? '' : pageName + '/'}">
</head>
<body>
  <!-- Page content -->
  ${content}
  
  <!-- Structured data -->
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
  
  <!-- Deferred JavaScript -->
  <script src="/js/main.min.js" defer></script>
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</body>
</html>
`;
};

// Image optimization script
const optimizeImages = () => {
  return `
#!/bin/bash

# Optimize images script for Deutsche Payment AG website
# This script compresses images and creates WebP versions

# Create output directories
mkdir -p optimized/webp

# Process JPG and PNG files
for img in *.jpg *.jpeg *.png; do
  [ -f "$img" ] || continue
  
  # Get file info
  filename=$(basename -- "$img")
  extension="${filename##*.}"
  filename="${filename%.*}"
  
  # Compress original image
  echo "Compressing $img..."
  if [ "$extension" = "png" ]; then
    pngquant --quality=65-80 --strip --force --output "optimized/$filename.png" "$img"
  else
    jpegoptim --max=80 --strip-all --all-progressive --dest="optimized/" "$img"
  fi
  
  # Create WebP version
  echo "Creating WebP version of $img..."
  cwebp -q 80 "$img" -o "optimized/webp/$filename.webp"
done

echo "Image optimization complete!"
`;
};

// Generate responsive image HTML
const generateResponsiveImageHTML = (imageName, altText) => {
  return `
<picture>
  <source srcset="/assets/images/webp/${imageName}.webp" type="image/webp">
  <source srcset="/assets/images/${imageName}.jpg" type="image/jpeg">
  <img 
    src="/assets/images/${imageName}.jpg" 
    alt="${altText}" 
    loading="lazy"
    srcset="/assets/images/${imageName}-small.jpg 400w,
            /assets/images/${imageName}-medium.jpg 800w,
            /assets/images/${imageName}.jpg 1200w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
    width="800"
    height="600"
    class="responsive-image">
</picture>
`;
};

// Generate .htaccess file
const generateHtaccess = () => {
  return `
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

# Sicherheitsheader
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; font-src 'self'; frame-src 'self'; object-src 'none'"
</IfModule>
`;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `
User-agent: *
Allow: /

Sitemap: https://deutsche-payment.com/sitemap.xml
`;
};

// Generate sitemap.xml
const generateSitemapXml = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
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
};

// Performance testing script
const generatePerformanceTestScript = () => {
  return `
#!/bin/bash

# Performance testing script for Deutsche Payment AG website

echo "Running performance tests..."

# Test page load times
echo "Testing page load times with curl..."
echo "Homepage:"
curl -s -w "Connect: %{time_connect}s\\nTTFB: %{time_starttransfer}s\\nTotal: %{time_total}s\\n" -o /dev/null https://deutsche-payment.com/

echo "Zahlungsmethoden:"
curl -s -w "Connect: %{time_connect}s\\nTTFB: %{time_starttransfer}s\\nTotal: %{time_total}s\\n" -o /dev/null https://deutsche-payment.com/zahlungsmethoden/

# Test GZIP compression
echo "\\nTesting GZIP compression..."
curl -sI -H "Accept-Encoding: gzip" https://deutsche-payment.com/ | grep -i "content-encoding"

# Test SSL configuration
echo "\\nTesting SSL configuration..."
curl -sI https://deutsche-payment.com/ | grep -i "strict-transport-security"

echo "\\nPerformance tests completed!"
`;
};

// Meta tags for all pages
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

// Export all optimization functions
module.exports = {
  minifyJS,
  minifyCSS,
  generateOptimizedHTML,
  optimizeImages,
  generateResponsiveImageHTML,
  generateHtaccess,
  generateRobotsTxt,
  generateSitemapXml,
  generatePerformanceTestScript,
  metaTags
};
