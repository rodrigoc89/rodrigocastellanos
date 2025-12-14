import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  opacity: number;
  hue: number;
  pulsePhase: number;
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true, // Mejor rendimiento en navegadores modernos
    });
    if (!ctx) return;

    // Reducir DPI para mejor rendimiento
    const dpr = Math.min(window.devicePixelRatio, 2);

    // Set canvas size
    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };
    window.addEventListener('resize', handleResize);

    // Partículas sutiles y elegantes
    const particles: Particle[] = [];
    const particleCount = 30; // Reducido para look más limpio

    const logicalWidth = canvas.width / dpr;
    const logicalHeight = canvas.height / dpr;

    for (let i = 0; i < particleCount; i++) {
      const baseSize = Math.random() * 1.5 + 0.8; // Más pequeñas
      particles.push({
        x: Math.random() * logicalWidth,
        y: Math.random() * logicalHeight,
        vx: (Math.random() - 0.5) * 0.4, // Más lentas
        vy: (Math.random() - 0.5) * 0.4,
        size: baseSize,
        baseSize: baseSize,
        opacity: Math.random() * 0.2 + 0.15, // Más transparentes
        hue: Math.random() * 30 + 225, // Tonos azul navy
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Cache del estado del tema
    let isDark = document.documentElement.classList.contains('dark');
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Colores sutiles y profesionales
    const getParticleColor = (hue: number, opacity: number) => {
      const sat = isDark ? 40 : 30; // Saturación reducida
      const light = isDark ? 60 : 50;
      return `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`;
    };

    const getShadowColor = (hue: number, opacity: number) => {
      const light = isDark ? 65 : 55;
      return `hsla(${hue}, 35%, ${light}%, ${opacity * (isDark ? 0.4 : 0.3)})`; // Glow más sutil
    };

    // Animation loop optimizado
    let animationFrameId: number;
    const maxConnectionDistance = 150; // Reducido de 180
    const maxConnectionDistanceSq =
      maxConnectionDistance * maxConnectionDistance;

    const animate = () => {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      // Actualizar posiciones primero (separado del dibujado)
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = logicalWidth;
        if (particle.x > logicalWidth) particle.x = 0;
        if (particle.y < 0) particle.y = logicalHeight;
        if (particle.y > logicalHeight) particle.y = 0;

        particle.pulsePhase += 0.02;
        particle.size =
          particle.baseSize * (1 + Math.sin(particle.pulsePhase) * 0.3);
      }

      // Dibujar conexiones primero (sin sombras)
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          // Evitar duplicados
          const otherParticle = particles[j];

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < maxConnectionDistanceSq) {
            const distance = Math.sqrt(distanceSq);
            const connectionOpacity =
              (1 - distance / maxConnectionDistance) * particle.opacity * 0.4;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = getParticleColor(particle.hue, connectionOpacity);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Dibujar partículas con glow sutil
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        ctx.shadowBlur = 8; // Glow más sutil
        ctx.shadowColor = getShadowColor(particle.hue, particle.opacity);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = getParticleColor(particle.hue, particle.opacity);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }} // Más transparente para look profesional
    />
  );
}
