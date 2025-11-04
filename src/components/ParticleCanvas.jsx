// Importerar React-hookar för att skapa referenser och hantera sidoeffekter.
import { useEffect, useRef } from 'react';

// Skapar ett enskilt partikelobjekt som vet hur det ritar och uppdaterar sig självt.
function createParticle(canvas) {
  // Objektet kapslar in partikelns tillstånd och beteenden.
  const particle = {
    // Återställer partikelns position och transparens till ett slumpmässigt startläge.
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.speed = Math.random() / 5 + 0.1;
      this.opacity = 1;
      this.fadeDelay = Math.random() * 600 + 100;
      this.fadeStart = Date.now() + this.fadeDelay;
      this.fadingOut = false;
    },
    // Uppdaterar partikelns läge och hanterar avtoning över tid.
    update() {
      this.y -= this.speed;
      if (this.y < 0) {
        this.reset();
      }

      if (!this.fadingOut && Date.now() > this.fadeStart) {
        this.fadingOut = true;
      }

      if (this.fadingOut) {
        this.opacity -= 0.008;
        if (this.opacity <= 0) {
          this.reset();
        }
      }
    },
    // Ritar partikelns visuella representation på canvasen.
    draw(ctx) {
      const redComponent = 255 - Math.random() * (255 / 2);
      ctx.fillStyle = `rgba(${redComponent}, 255, 255, ${this.opacity})`;
      ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
    },
  };

  particle.reset();
  return particle;
}

// Beräknar hur många partiklar som ska genereras baserat på canvasens storlek.
function calculateParticleCount(canvas) {
  return Math.floor((canvas.width * canvas.height) / 6000);
}

// Komponent som sätter upp en helskärms-canvas med animerade partiklar.
export default function ParticleCanvas() {
  // Referens till canvas-elementet så att vi kan rita direkt på det.
  const canvasRef = useRef(null);

  // useEffect säkerställer att vi bara initierar animationen när komponenten är monterad.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    // Hämtar kontexten för 2D-ritning och håller reda på animationen.
    const ctx = canvas.getContext('2d');
    let animationId;
    const particles = [];

    // Anpassar canvasens storlek och skapar rätt antal partiklar för fönstrets yta.
    const resize = () => {
      canvas.width = window.innerWidth;
      const doc = document.documentElement;
      const fullHeight = Math.max(doc.scrollHeight, doc.clientHeight, window.innerHeight);
      canvas.height = fullHeight;
      const count = calculateParticleCount(canvas);
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push(createParticle(canvas));
      }
    };

    // Kör animationsloopen som rensar, uppdaterar och ritar alla partiklar.
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    let observer;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(resize);
      observer.observe(document.body);
    }

    animate();
    window.addEventListener('resize', resize);

    // Städar upp animation, lyssnare och observerare när komponenten avmonteras.
    return () => {
      window.removeEventListener('resize', resize);
      if (observer) {
        observer.disconnect();
      }
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Renderar canvas-elementet som animationen använder.
  return <canvas id="particleCanvas" ref={canvasRef} />;
}
