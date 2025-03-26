// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      console.log('Mobile menu toggled');
    });
  }

  // Sticky header
  const header = document.querySelector('header');
  if (header) {
    const headerOffset = header.offsetTop;
    window.onscroll = function() {
      if (window.pageYOffset > headerOffset) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Animation on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    });
    
    animateElements.forEach(function(element) {
      observer.observe(element);
    });
  } else {
    // Fallback für Browser ohne IntersectionObserver
    animateElements.forEach(function(element) {
      element.classList.add('animated');
    });
  }

  // Statistics counter animation
  const counters = document.querySelectorAll('.counter');
  
  if ('IntersectionObserver' in window && counters.length > 0) {
    let counterObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let counter = entry.target;
          let target = parseInt(counter.getAttribute('data-target'));
          let count = 0;
          let increment = Math.ceil(target / 100);
          
          const updateCount = setInterval(function() {
            count += increment;
            counter.textContent = count;
            
            if (count >= target) {
              counter.textContent = target;
              clearInterval(updateCount);
            }
          }, 20);
          
          observer.unobserve(counter);
        }
      });
    });
    
    counters.forEach(function(counter) {
      counterObserver.observe(counter);
    });
  }

  // Cookie-Banner Script
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptAllBtn = document.getElementById('accept-all-cookies');
  const acceptSelectedBtn = document.getElementById('accept-selected-cookies');
  const rejectAllBtn = document.getElementById('reject-all-cookies');
  
  if (cookieBanner) {
    // Prüfen, ob bereits eine Cookie-Einwilligung vorliegt
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Cookie-Banner anzeigen, wenn keine Einwilligung vorliegt
      cookieBanner.style.display = 'block';
    }
    
    // Alle Cookies akzeptieren
    if (acceptAllBtn) {
      acceptAllBtn.addEventListener('click', function() {
        setConsent({
          essential: true,
          functional: true,
          analytics: true,
          marketing: true
        });
        cookieBanner.style.display = 'none';
      });
    }
    
    // Ausgewählte Cookies akzeptieren
    if (acceptSelectedBtn) {
      acceptSelectedBtn.addEventListener('click', function() {
        const functionalConsent = document.getElementById('functional-cookies')?.checked || false;
        const analyticsConsent = document.getElementById('analytics-cookies')?.checked || false;
        const marketingConsent = document.getElementById('marketing-cookies')?.checked || false;
        
        setConsent({
          essential: true,
          functional: functionalConsent,
          analytics: analyticsConsent,
          marketing: marketingConsent
        });
        cookieBanner.style.display = 'none';
      });
    }
    
    // Nur notwendige Cookies akzeptieren
    if (rejectAllBtn) {
      rejectAllBtn.addEventListener('click', function() {
        setConsent({
          essential: true,
          functional: false,
          analytics: false,
          marketing: false
        });
        cookieBanner.style.display = 'none';
      });
    }
  }
  
  // Einwilligung speichern und entsprechende Skripte laden
  function setConsent(consent) {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    
    // Analytics-Skripte laden, wenn zugestimmt wurde
    if (consent.analytics) {
      loadAnalytics();
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
  
  // Bereits gespeicherte Einwilligung anwenden
  const savedConsent = localStorage.getItem('cookieConsent');
  if (savedConsent) {
    const consent = JSON.parse(savedConsent);
    if (consent.analytics) {
      loadAnalytics();
    }
  }
});