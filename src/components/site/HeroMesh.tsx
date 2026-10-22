import React, { useEffect, useRef } from "react";

export interface HeroMeshProps {
  reducedMotion: boolean;
}

interface MeshPoint {
  x: number;
  y: number;
  depth: number;
}

const ROWS = 32;
const COLUMNS = 40;

export function HeroMesh({ reducedMotion }: HeroMeshProps): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let elapsed = 0;
    let previousFrameTime = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let isVisible = true;

    // Pre-allocated typed matrix for zero memory allocations per frame
    const points: MeshPoint[][] = Array.from({ length: ROWS + 1 }, () =>
      Array.from({ length: COLUMNS + 1 }, () => ({ x: 0, y: 0, depth: 0 }))
    );

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    function resize(): void {
      if (!canvas || !context) return;
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (reducedMotion) render();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? true;
      if (isVisible && !reducedMotion && !frame) {
        frame = requestAnimationFrame(draw);
      }
      if (!isVisible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });

    function updatePoints(): void {
      const phase = elapsed * 0.62;
      const pX = pointerX * 0.48;
      const pY = pointerY * 0.42;

      for (let row = 0; row <= ROWS; row++) {
        const yNorm = (row / ROWS) * 2 - 1;
        const y = yNorm * 1.35;
        const dy = y - pY;
        const dyTerm = dy * dy * 2.1;
        const yTerm = y * y * 0.78;

        const rowArr = points[row];
        if (!rowArr) continue;

        for (let col = 0; col <= COLUMNS; col++) {
          const xNorm = (col / COLUMNS) * 2 - 1;
          const x = xNorm * 1.65;
          const radius = Math.sqrt(x * x * 0.48 + yTerm);
          const envelope = Math.max(0, 1 - radius * radius * 0.24);
          const dx = x - pX;
          const influence = Math.exp(-(dx * dx * 1.5 + dyTerm));

          const depth =
            (0.58 * Math.exp(-radius * radius * 0.72) +
              0.12 * Math.sin(x * 2.2 + phase) * Math.cos(y * 2.5 - phase * 0.72) +
              0.2 * influence * Math.sin(radius * 13 - phase * 1.8)) *
            envelope;

          const p = rowArr[col];
          if (p) {
            p.x = width * 0.5 + x * width * 0.37 + depth * width * 0.1;
            p.y = height * 0.52 + y * height * 0.36 - depth * height * 0.28;
            p.depth = depth;
          }
        }
      }
    }

    function render(): void {
      if (!context || !width || !height) return;
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        width * (0.5 + pointerX * 0.035),
        height * 0.48,
        0,
        width * 0.5,
        height * 0.5,
        width * 0.47
      );
      glow.addColorStop(0, "rgba(151, 157, 163, 0.11)");
      glow.addColorStop(0.48, "rgba(83, 89, 95, 0.055)");
      glow.addColorStop(1, "rgba(9, 10, 15, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      updatePoints();

      for (let row = 0; row <= ROWS; row++) {
        const pointRow = points[row];
        if (!pointRow) continue;
        context.beginPath();
        for (let col = 0; col <= COLUMNS; col++) {
          const point = pointRow[col];
          if (!point) continue;
          if (col === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        const middlePoint = pointRow[COLUMNS >> 1];
        const depth = middlePoint ? middlePoint.depth : 0;
        context.strokeStyle = `rgba(185, 193, 199, ${0.36 + depth * 0.3})`;
        context.lineWidth = 0.7 + depth * 0.55;
        context.stroke();
      }

      for (let col = 0; col <= COLUMNS; col++) {
        context.beginPath();
        for (let row = 0; row <= ROWS; row++) {
          const pointRow = points[row];
          if (!pointRow) continue;
          const point = pointRow[col];
          if (!point) continue;
          if (row === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        const middleRow = points[ROWS >> 1];
        const middlePoint = middleRow ? middleRow[col] : null;
        const depth = middlePoint ? middlePoint.depth : 0;
        context.strokeStyle = `rgba(125, 133, 140, ${0.28 + depth * 0.25})`;
        context.lineWidth = 0.65 + depth * 0.4;
        context.stroke();
      }

      for (let row = 2; row < ROWS; row += 3) {
        const pointRow = points[row];
        if (!pointRow) continue;
        for (let col = 2; col < COLUMNS; col += 3) {
          const point = pointRow[col];
          if (!point || point.depth < 0.38) continue;
          context.beginPath();
          context.arc(point.x, point.y, 0.7 + point.depth * 1.1, 0, Math.PI * 2);
          context.fillStyle = `rgba(212, 175, 55, ${point.depth * 0.34})`;
          context.fill();
        }
      }
    }

    function draw(timestamp: number): void {
      frame = 0;
      if (!isVisible) return;
      if (previousFrameTime) elapsed += Math.min(timestamp - previousFrameTime, 40) / 1000;
      previousFrameTime = timestamp;

      pointerX += (targetPointerX - pointerX) * 0.055;
      pointerY += (targetPointerY - pointerY) * 0.055;

      render();

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent): void {
      if (!canvas) return;
      const bounds = canvas.getBoundingClientRect();
      targetPointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      targetPointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      if (reducedMotion && isVisible) {
        pointerX = targetPointerX;
        pointerY = targetPointerY;
        render();
      }
    }

    function onPointerLeave(event: PointerEvent): void {
      if (!canvas) return;
      if (event.relatedTarget instanceof Node && canvas.contains(event.relatedTarget)) return;
      targetPointerX = 0;
      targetPointerY = 0;
      if (reducedMotion && isVisible) {
        pointerX = 0;
        pointerY = 0;
        render();
      }
    }

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerLeave, { passive: true });

    resize();
    if (!reducedMotion) frame = requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden opacity-[0.24] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_84%)]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full will-change-transform" />
    </div>
  );
}

export default HeroMesh;