import { useEffect, useRef } from "react";

const EarthFromSpaceBackground = ({ className = "hero-canvas", fit = "viewport" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    const parent = canvas.parentElement;

    const setSize = () => {
      if (fit === "parent" && parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setSize();
    window.addEventListener("resize", setSize);
    let resizeObserver;
    if (fit === "parent" && parent && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(setSize);
      resizeObserver.observe(parent);
    }

    const stars = Array.from({ length: 1000 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.62,
      size: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.85 + 0.1,
      twinkleSpeed: Math.random() * 0.015 + 0.003,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: (() => {
        const r = Math.random();
        if (r < 0.45) return [255, 160, 60];
        if (r < 0.72) return [255, 120, 30];
        if (r < 0.87) return [255, 190, 80];
        return [255, 80, 20];
      })(),
    }));

    const cityLights = Array.from({ length: 180 }, () => ({
      xFrac: Math.random(),
      depthFrac: Math.random(),
      size: Math.random() * 2.2 + 0.4,
      opacity: Math.random() * 0.75 + 0.2,
      color: (() => {
        const r = Math.random();
        if (r < 0.5) return [255, 160, 60];
        if (r < 0.78) return [255, 200, 90];
        return [255, 120, 30];
      })(),
    }));

    let time = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#01020f");
      bg.addColorStop(0.2, "#050c28");
      bg.addColorStop(0.45, "#0a1640");
      bg.addColorStop(0.65, "#060d22");
      bg.addColorStop(0.82, "#030810");
      bg.addColorStop(1, "#000204");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const nebula = ctx.createRadialGradient(
        w * 0.7,
        h * 0.18,
        0,
        w * 0.7,
        h * 0.18,
        w * 0.45
      );
      nebula.addColorStop(0, "rgba(30, 80, 180, 0.1)");
      nebula.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((s) => {
        const twinkle = Math.sin(time * s.twinkleSpeed * 60 + s.twinkleOffset);
        const opacity = s.opacity * (0.78 + 0.22 * twinkle);
        const [r, g, b] = s.color;

        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        ctx.fill();

        if (s.size > 1.0) {
          const glow = ctx.createRadialGradient(
            s.x * w,
            s.y * h,
            0,
            s.x * w,
            s.y * h,
            s.size * 3
          );
          glow.addColorStop(0, `rgba(${r},${g},${b},${opacity * 0.35})`);
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(s.x * w, s.y * h, s.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      });

      const horizonY = h * 0.62;
      cityLights.forEach((c) => {
        const cx = c.xFrac * w;
        const minY = horizonY + 10;
        const maxY = h * 0.92;
        const cy = minY + c.depthFrac * (maxY - minY);
        const perspScale = 0.4 + c.depthFrac * 0.6;
        const sz = c.size * perspScale;
        const op = c.opacity * perspScale * 0.7;
        const [r, g, b] = c.color;

        const lg = ctx.createRadialGradient(cx, cy, 0, cx, cy, sz * 4);
        lg.addColorStop(0, `rgba(${r},${g},${b},${op * 0.5})`);
        lg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(cx, cy, sz * 4, 0, Math.PI * 2);
        ctx.fillStyle = lg;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${op})`;
        ctx.fill();
      });

      time++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setSize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [fit]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default EarthFromSpaceBackground;
