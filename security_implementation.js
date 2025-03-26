// SSL-Zertifikat Konfiguration
// In einer Produktionsumgebung würde dies über den Webserver (Apache/Nginx) konfiguriert
// Hier ist ein Beispiel für die Konfiguration in Nginx

/*
server {
    listen 80;
    server_name deutsche-payment.com www.deutsche-payment.com;
    
    # Weiterleitung von HTTP zu HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    server_name deutsche-payment.com www.deutsche-payment.com;
    
    # SSL-Zertifikat Konfiguration
    ssl_certificate /etc/letsencrypt/live/deutsche-payment.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/deutsche-payment.com/privkey.pem;
    
    # Moderne TLS-Konfiguration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
    
    # HSTS (HTTP Strict Transport Security)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # Weitere Sicherheitsheader
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; font-src 'self'; frame-src 'self'; object-src 'none'" always;
    
    # Weitere Konfiguration...
}
*/

// DSGVO-konformes Cookie-Banner
const cookieBanner = `
<div id="cookie-banner" class="cookie-banner">
  <div class="cookie-content">
    <h3>Datenschutzeinstellungen</h3>
    <p>Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Weitere Informationen finden Sie in unserer <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
    
    <div class="cookie-categories">
      <div class="cookie-category">
        <input type="checkbox" id="essential-cookies" checked disabled>
        <label for="essential-cookies">Notwendige Cookies</label>
        <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.</p>
      </div>
      
      <div class="cookie-category">
        <input type="checkbox" id="functional-cookies">
        <label for="functional-cookies">Funktionale Cookies</label>
        <p>Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.</p>
      </div>
      
      <div class="cookie-category">
        <input type="checkbox" id="analytics-cookies">
        <label for="analytics-cookies">Analyse-Cookies</label>
        <p>Diese Cookies helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern.</p>
      </div>
      
      <div class="cookie-category">
        <input type="checkbox" id="marketing-cookies">
        <label for="marketing-cookies">Marketing-Cookies</label>
        <p>Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.</p>
      </div>
    </div>
    
    <div class="cookie-actions">
      <button id="accept-all-cookies" class="btn btn-primary">Alle akzeptieren</button>
      <button id="accept-selected-cookies" class="btn btn-secondary">Auswahl speichern</button>
      <button id="reject-all-cookies" class="btn btn-tertiary">Nur notwendige Cookies</button>
    </div>
  </div>
</div>
`;

// Cookie-Banner JavaScript
const cookieBannerScript = `
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptAllBtn = document.getElementById('accept-all-cookies');
  const acceptSelectedBtn = document.getElementById('accept-selected-cookies');
  const rejectAllBtn = document.getElementById('reject-all-cookies');
  
  // Prüfen, ob bereits eine Cookie-Einwilligung vorliegt
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (!cookieConsent) {
    // Cookie-Banner anzeigen, wenn keine Einwilligung vorliegt
    cookieBanner.style.display = 'block';
  }
  
  // Alle Cookies akzeptieren
  acceptAllBtn.addEventListener('click', function() {
    setConsent({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    cookieBanner.style.display = 'none';
  });
  
  // Ausgewählte Cookies akzeptieren
  acceptSelectedBtn.addEventListener('click', function() {
    const functionalConsent = document.getElementById('functional-cookies').checked;
    const analyticsConsent = document.getElementById('analytics-cookies').checked;
    const marketingConsent = document.getElementById('marketing-cookies').checked;
    
    setConsent({
      essential: true,
      functional: functionalConsent,
      analytics: analyticsConsent,
      marketing: marketingConsent
    });
    cookieBanner.style.display = 'none';
  });
  
  // Nur notwendige Cookies akzeptieren
  rejectAllBtn.addEventListener('click', function() {
    setConsent({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    });
    cookieBanner.style.display = 'none';
  });
  
  // Einwilligung speichern und entsprechende Skripte laden
  function setConsent(consent) {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    
    // Analytics-Skripte laden, wenn zugestimmt wurde
    if (consent.analytics) {
      loadAnalytics();
    }
    
    // Marketing-Skripte laden, wenn zugestimmt wurde
    if (consent.marketing) {
      loadMarketing();
    }
  }
  
  // Google Analytics laden
  function loadAnalytics() {
    // Google Analytics mit IP-Anonymisierung
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { 'anonymize_ip': true });
  }
  
  // Marketing-Skripte laden
  function loadMarketing() {
    // Hier würden Marketing-Skripte geladen werden
  }
  
  // Bereits gespeicherte Einwilligung anwenden
  if (cookieConsent) {
    const consent = JSON.parse(cookieConsent);
    
    if (consent.analytics) {
      loadAnalytics();
    }
    
    if (consent.marketing) {
      loadMarketing();
    }
  }
});
`;

// Datenschutzerklärung (Auszug)
const privacyPolicy = `
# Datenschutzerklärung

## 1. Verantwortlicher

Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

Deutsche Payment AG  
[Straße und Hausnummer]  
[PLZ und Ort]  
Deutschland

E-Mail: datenschutz@deutsche-payment.com  
Telefon: +49 30 81454860

## 2. Erhebung und Verarbeitung personenbezogener Daten

### 2.1 Beim Besuch unserer Website

Beim Besuch unserer Website erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten:

- IP-Adresse (anonymisiert)
- Datum und Uhrzeit der Anfrage
- Zeitzonendifferenz zur Greenwich Mean Time (GMT)
- Inhalt der Anforderung (konkrete Seite)
- Zugriffsstatus/HTTP-Statuscode
- Jeweils übertragene Datenmenge
- Website, von der die Anforderung kommt
- Browser
- Betriebssystem und dessen Oberfläche
- Sprache und Version der Browsersoftware

Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.

### 2.2 Bei Nutzung unseres Kontaktformulars

Wenn Sie unser Kontaktformular nutzen, erheben wir die folgenden personenbezogenen Daten:

- Name
- E-Mail-Adresse
- Telefonnummer (optional)
- Nachrichteninhalt
- Zeitpunkt der Übermittlung

Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen bzw. zur Beantwortung Ihrer Anfrage.

## 3. Cookies

Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir unterscheiden zwischen:

### 3.1 Notwendige Cookies

Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem optimierten Webseitenangebot.

### 3.2 Funktionale Cookies

Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO auf Basis Ihrer Einwilligung.

### 3.3 Analyse-Cookies

Diese Cookies helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO auf Basis Ihrer Einwilligung.

### 3.4 Marketing-Cookies

Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO auf Basis Ihrer Einwilligung.

## 4. Ihre Rechte

Sie haben folgende Rechte:

- Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen (Art. 15 DSGVO)
- Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen (Art. 16 DSGVO)
- Löschung der bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)
- Einschränkung der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DSGVO)
- Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)
- Beschwerde bei einer Aufsichtsbehörde einzulegen (Art. 77 DSGVO)

## 5. Widerspruchsrecht

Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.

## 6. Datensicherheit

Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.

## 7. Aktualität und Änderung dieser Datenschutzerklärung

Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2025. Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
`;

// CSRF-Schutz für Formulare
const csrfProtection = `
// CSRF-Token generieren
function generateCSRFToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 32; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

// CSRF-Token in Session speichern und in Formulare einfügen
document.addEventListener('DOMContentLoaded', function() {
  // Token generieren und in Session Storage speichern
  const csrfToken = generateCSRFToken();
  sessionStorage.setItem('csrfToken', csrfToken);
  
  // Token in alle Formulare einfügen
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    const tokenInput = document.createElement('input');
    tokenInput.type = 'hidden';
    tokenInput.name = 'csrf_token';
    tokenInput.value = csrfToken;
    form.appendChild(tokenInput);
  });
  
  // CSRF-Token validieren bei Formular-Übermittlung
  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      const formToken = form.querySelector('input[name="csrf_token"]').value;
      const storedToken = sessionStorage.getItem('csrfToken');
      
      if (formToken !== storedToken) {
        event.preventDefault();
        alert('Sicherheitsfehler: Bitte laden Sie die Seite neu und versuchen Sie es erneut.');
      }
    });
  });
});
`;

// Formularvalidierung
const formValidation = `
// Formularvalidierung
function validateForm(form) {
  let isValid = true;
  
  // E-Mail-Validierung
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && !validateEmail(emailField.value)) {
    markInvalid(emailField, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    isValid = false;
  }
  
  // Pflichtfelder prüfen
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(function(field) {
    if (!field.value.trim()) {
      markInvalid(field, 'Dieses Feld ist erforderlich.');
      isValid = false;
    }
  });
  
  // Telefonnummer validieren (falls vorhanden)
  const phoneField = form.querySelector('input[name="phone"]');
  if (phoneField && phoneField.value && !validatePhone(phoneField.value)) {
    markInvalid(phoneField, 'Bitte geben Sie eine gültige Telefonnummer ein.');
    isValid = false;
  }
  
  return isValid;
}

// E-Mail-Validierung
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Telefonnummer-Validierung
function validatePhone(phone) {
  // Einfache Validierung: mindestens 6 Ziffern, kann +, -, Leerzeichen und Klammern enthalten
  const re = /^[+\d\s\-()]{6,}$/;
  return re.test(phone);
}

// Feld als ungültig markieren
function markInvalid(field, message) {
  field.classList.add('invalid');
  
  // Fehlermeldung anzeigen
  let errorMessage = field.parentNode.querySelector('.error-message');
  if (!errorMessage) {
    errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    field.parentNode.appendChild(errorMessage);
  }
  errorMessage.textContent = message;
  
  // Fehlermeldung entfernen, wenn Feld bearbeitet wird
  field.addEventListener('input', function() {
    field.classList.remove('invalid');
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }, { once: true });
}

// Formularvalidierung an alle Formulare anhängen
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!validateForm(this)) {
        event.preventDefault();
      }
    });
  });
});
`;

// Content Security Policy
const contentSecurityPolicy = `
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https://www.google-analytics.com; 
  connect-src 'self' https://www.google-analytics.com; 
  font-src 'self'; 
  frame-src 'self'; 
  object-src 'none'
`;

// .htaccess mit Sicherheitsheadern
const securityHtaccess = `
# Sicherheitsheader
<IfModule mod_headers.c>
  # HSTS (HTTP Strict Transport Security)
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  
  # Verhindert MIME-Type-Sniffing
  Header always set X-Content-Type-Options "nosniff"
  
  # Schutz vor Clickjacking
  Header always set X-Frame-Options "SAMEORIGIN"
  
  # XSS-Schutz aktivieren
  Header always set X-XSS-Protection "1; mode=block"
  
  # Referrer-Policy
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Content-Security-Policy
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; font-src 'self'; frame-src 'self'; object-src 'none'"
</IfModule>

# HTTPS erzwingen
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# PHP-Einstellungen für mehr Sicherheit
<IfModule mod_php.c>
  # Session-Cookie-Einstellungen
  php_value session.cookie_httponly 1
  php_value session.cookie_secure 1
  php_value session.cookie_samesite "Strict"
  
  # Fehleranzeige deaktivieren
  php_flag display_errors off
  php_flag display_startup_errors off
  
  # Maximale Ausführungszeit und Speicherlimit
  php_value max_execution_time 60
  php_value memory_limit 256M
  
  # File-Uploads einschränken
  php_value upload_max_filesize 10M
  php_value post_max_size 10M
</IfModule>

# Verzeichnisschutz
<FilesMatch "^\.">
  Order allow,deny
  Deny from all
</FilesMatch>

# Schutz sensibler Dateien
<FilesMatch "(^#.*#|\.(bak|config|dist|fla|inc|ini|log|psd|sh|sql|sw[op])|~)$">
  Order allow,deny
  Deny from all
  Deny from all
</FilesMatch>

# Verzeichnislisting deaktivieren
Options -Indexes
`;

// Sicherheits-Monitoring-Skript
const securityMonitoring = `
#!/bin/bash

# Sicherheits-Monitoring-Skript für die Deutsche Payment AG Website

echo "Sicherheits-Monitoring gestartet..."

# Überprüfung der SSL-Konfiguration
echo "Überprüfung der SSL-Konfiguration..."
curl -sI https://deutsche-payment.com/ | grep -i "strict-transport-security"

# Überprüfung der Sicherheitsheader
echo "Überprüfung der Sicherheitsheader..."
curl -sI https://deutsche-payment.com/ | grep -i "content-security-policy"
curl -sI https://deutsche-payment.com/ | grep -i "x-content-type-options"
curl -sI https://deutsche-payment.com/ | grep -i "x-frame-options"
curl -sI https://deutsche-payment.com/ | grep -i "x-xss-protection"
curl -sI https://deutsche-payment.com/ | grep -i "referrer-policy"

# Überprüfung auf bekannte Schwachstellen
echo "Überprüfung auf bekannte Schwachstellen..."
# Hier würde ein Tool wie OWASP ZAP oder Nikto eingesetzt werden

# Überprüfung der Dateiberechtigungen
echo "Überprüfung der Dateiberechtigungen..."
find /var/www/deutsche-payment.com -type f -perm /o+w -ls

# Überprüfung der Logdateien auf verdächtige Aktivitäten
echo "Überprüfung der Logdateien..."
grep -i "attack\|hack\|injection\|exploit" /var/log/apache2/access.log | tail -n 10

echo "Sicherheits-Monitoring abgeschlossen."
`;

// Export aller Sicherheitsfunktionen
module.exports = {
  cookieBanner,
  cookieBannerScript,
  privacyPolicy,
  csrfProtection,
  formValidation,
  contentSecurityPolicy,
  securityHtaccess,
  securityMonitoring
};
