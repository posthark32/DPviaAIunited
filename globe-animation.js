// Globe Animation Script
document.addEventListener('DOMContentLoaded', function() {
  // Erstellen des Canvas-Elements für die Weltkugel
  const createGlobe = () => {
    // Container für den Globe
    const container = document.createElement('div');
    container.classList.add('globe-animation');
    
    // Canvas für die Animation
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 900;
    container.appendChild(canvas);
    
    // Zur Hero-Section hinzufügen
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.appendChild(container);
      
      // Animation initialisieren
      initGlobeAnimation(canvas);
    }
  };
  
  // Globe Animation initialisieren
  const initGlobeAnimation = (canvas) => {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Parameter für die Globus-Animation
    const globe = {
      radius: width * 0.4,
      centerX: width * 0.5,
      centerY: height * 0.5,
      dots: [],
      connections: [],
      numDots: 200,
      numConnections: 300,
      rotation: 0,
      rotationSpeed: 0.0005
    };
    
    // Zufällige Punkte auf der Kugel generieren
    for (let i = 0; i < globe.numDots; i++) {
      // Zufällige Punkt-Position auf der Kugel (sphärische Koordinaten)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Umwandlung in kartesische Koordinaten
      const x = globe.radius * Math.sin(phi) * Math.cos(theta);
      const y = globe.radius * Math.sin(phi) * Math.sin(theta);
      const z = globe.radius * Math.cos(phi);
      
      globe.dots.push({
        x: x,
        y: y,
        z: z,
        originalX: x,
        originalY: y,
        originalZ: z,
        size: 1 + Math.random() * 2,
        color: Math.random() > 0.5 ? 'rgba(0, 119, 255, 0.7)' : 'rgba(0, 187, 255, 0.7)'
      });
    }
    
    // Verbindungen zwischen zufälligen Punkten erstellen
    for (let i = 0; i < globe.numConnections; i++) {
      const dot1 = Math.floor(Math.random() * globe.dots.length);
      let dot2 = Math.floor(Math.random() * globe.dots.length);
      
      // Stelle sicher, dass nicht der gleiche Punkt gewählt wird
      while (dot2 === dot1) {
        dot2 = Math.floor(Math.random() * globe.dots.length);
      }
      
      // Verbindung nur erstellen, wenn Punkte nicht zu weit voneinander entfernt sind
      const dist = distance3D(
        globe.dots[dot1].x, globe.dots[dot1].y, globe.dots[dot1].z,
        globe.dots[dot2].x, globe.dots[dot2].y, globe.dots[dot2].z
      );
      
      if (dist < globe.radius * 0.8) {
        globe.connections.push({
          dot1: dot1,
          dot2: dot2
        });
      }
    }
    
    // Hilfsfunktion zur Berechnung des 3D-Abstands
    function distance3D(x1, y1, z1, x2, y2, z2) {
      return Math.sqrt(
        Math.pow(x2 - x1, 2) + 
        Math.pow(y2 - y1, 2) + 
        Math.pow(z2 - z1, 2)
      );
    }
    
    // Animation-Funktion
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Rotation aktualisieren
      globe.rotation += globe.rotationSpeed;
      
      // Sortiere Punkte nach Z-Wert (für korrektes Rendering-Verhalten)
      const sortedDots = [...globe.dots].sort((a, b) => a.z - b.z);
      
      // Punkte und Verbindungen aktualisieren und zeichnen
      for (let i = 0; i < globe.dots.length; i++) {
        // Rotiere den Punkt um die Y-Achse
        const dot = globe.dots[i];
        const cosR = Math.cos(globe.rotation);
        const sinR = Math.sin(globe.rotation);
        
        dot.x = dot.originalX * cosR + dot.originalZ * sinR;
        dot.z = dot.originalZ * cosR - dot.originalX * sinR;
      }
      
      // Verbindungen zeichnen
      for (const connection of globe.connections) {
        const dot1 = globe.dots[connection.dot1];
        const dot2 = globe.dots[connection.dot2];
        
        // Nur zeichnen, wenn beide Punkte sichtbar sind (z > 0)
        if (dot1.z > 0 && dot2.z > 0) {
          // Abstand berechnen für die Transparenz
          const dist = distance3D(dot1.x, dot1.y, dot1.z, dot2.x, dot2.y, dot2.z);
          const alpha = Math.max(0, 1 - dist / (globe.radius * 0.8));
          
          ctx.beginPath();
          ctx.moveTo(globe.centerX + dot1.x, globe.centerY + dot1.y);
          ctx.lineTo(globe.centerX + dot2.x, globe.centerY + dot2.y);
          ctx.strokeStyle = `rgba(0, 119, 255, ${alpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      
      // Punkte zeichnen
      for (const dot of sortedDots) {
        // Nur Punkte auf der Vorderseite der Kugel zeichnen (z > 0)
        if (dot.z > 0) {
          const size = dot.size * (0.5 + dot.z / globe.radius * 0.5);
          const alpha = 0.3 + 0.7 * (dot.z / globe.radius);
          
          ctx.beginPath();
          ctx.arc(
            globe.centerX + dot.x, 
            globe.centerY + dot.y, 
            size, 0, Math.PI * 2
          );
          ctx.fillStyle = dot.color.replace('0.7', alpha);
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    // Animation starten
    animate();
  };
  
  // Starte die Globus-Animation
  createGlobe();
  
  // Animationen beim Scrollen
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
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
});