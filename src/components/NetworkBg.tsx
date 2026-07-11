/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";

export default function NetworkBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Node definitions for blockchain particles
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      pulse: number;
      pulseDir: number;
    }

    let nodes: Node[] = [];
    const maxNodes = 45;

    const initNodes = (w: number, h: number) => {
      nodes = [];
      for (let i = 0; i < maxNodes; i++) {
        const isGold = Math.random() > 0.6;
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2 + 1.5,
          color: isGold ? "rgba(212, 175, 55, 0.6)" : "rgba(16, 185, 129, 0.45)",
          pulse: Math.random(),
          pulseDir: Math.random() > 0.5 ? 0.01 : -0.01,
        });
      }
    };

    // Resize observer to handle dynamic canvas sizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        width = w;
        height = h;
        canvas.width = w;
        canvas.height = h;
        initNodes(w, h);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Helper to draw an elegant thin 8-pointed star (Islamic geometry accent)
    const drawIslamicStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      opacity: number
    ) => {
      c.save();
      c.translate(cx, cy);
      c.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.25})`;
      c.lineWidth = 0.6;

      // Draw Square 1
      c.beginPath();
      c.rect(-size, -size, size * 2, size * 2);
      c.stroke();

      // Draw Square 2 (rotated 45 degrees)
      c.beginPath();
      c.rotate(Math.PI / 4);
      c.rect(-size, -size, size * 2, size * 2);
      c.stroke();

      c.restore();
    };

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle geometric constellation reference grid in background
      const starSpacing = 160;
      const cols = Math.ceil(width / starSpacing) + 1;
      const rows = Math.ceil(height / starSpacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cx = c * starSpacing;
          const cy = r * starSpacing;
          // Slowly pulsing opacity based on time
          const pulse = Math.sin(Date.now() * 0.0008 + (c + r)) * 0.2 + 0.4;
          drawIslamicStar(ctx, cx, cy, 32, pulse);

          // Connect stars with ultra-faint grid lines
          ctx.strokeStyle = "rgba(16, 185, 129, 0.03)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          if (c < cols - 1) {
            ctx.moveTo(cx, cy);
            ctx.lineTo((c + 1) * starSpacing, cy);
          }
          if (r < rows - 1) {
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx, (r + 1) * starSpacing);
          }
          ctx.stroke();
        }
      }

      // 2. Render and connect moving blockchain nodes
      nodes.forEach((node) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Pulse size
        node.pulse += node.pulseDir;
        if (node.pulse > 1 || node.pulse < 0.2) node.pulseDir *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + node.pulse * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Connect nodes within proximity (representing network links)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // Gold nodes connect with a golden gradient thread, emerald with green
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            gradient.addColorStop(0, nodes[i].color.replace("0.6", `${alpha}`).replace("0.45", `${alpha}`));
            gradient.addColorStop(1, nodes[j].color.replace("0.6", `${alpha}`).replace("0.45", `${alpha}`));

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-65" />
    </div>
  );
}
