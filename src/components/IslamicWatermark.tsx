/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface IslamicWatermarkProps {
  className?: string;
  color?: "gold" | "emerald" | "mixed";
  opacity?: number;
}

export default function IslamicWatermark({
  className = "",
  color = "mixed",
  opacity = 0.12,
}: IslamicWatermarkProps) {
  // Color mappings suited to HalalChain theme (cream, emerald, gold)
  const goldColor = "#D4AF37";
  const emeraldColor = "#064E3B";
  const strokeColor = color === "gold" ? goldColor : color === "emerald" ? emeraldColor : goldColor;

  // Generate 16 elegant parallel wave lines for the top-left background representing calligraphic flow
  const renderWaves = () => {
    const waveLines = [];
    for (let i = 0; i < 18; i++) {
      const step = i * 20;
      const waveOpacity = (0.26 - i * 0.014) * opacity;
      if (waveOpacity <= 0) continue;

      // Elegant bezier curves starting top-left and flowing diagonally to resemble Islamic manuscript borders
      waveLines.push(
        <path
          key={`wave-${i}`}
          d={`M -180 ${40 + step} 
              C ${140 + step * 1.6} ${80 + step * 0.4}, 
                ${90 + step * 2.6} ${430 + step * 1.1}, 
                ${480 + step * 2} ${720 + step}`}
          fill="none"
          stroke={color === "mixed" ? emeraldColor : strokeColor}
          strokeWidth="1.1"
          strokeOpacity={waveOpacity}
          className="transition-all duration-700"
        />
      );
    }
    return waveLines;
  };

  // Helper to generate a mathematically perfect N-pointed star path
  const getStarPoints = (cx: number, cy: number, pointsCount: number, outerR: number, innerR: number) => {
    const pts = [];
    const totalPoints = pointsCount * 2;
    for (let i = 0; i < totalPoints; i++) {
      const angle = (i * Math.PI) / pointsCount - Math.PI / 2;
      const r = i % 2 === 0 ? outerR : innerR;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return pts.join(" ");
  };

  // Render a majestic 16-pointed Islamic Rosette (highly traditional architectural motif)
  const renderIslamicRosette = (cx: number, cy: number, r: number) => {
    const activeOpacity = opacity;

    // We can build multiple nested layers of geometry
    return (
      <g id="majestic-islamic-rosette">
        {/* Layer 1: Outer Concentric Delicate Circles */}
        <circle cx={cx} cy={cy} r={r * 1.25} fill="none" stroke={goldColor} strokeWidth="0.8" strokeOpacity={0.08 * activeOpacity} strokeDasharray="5,10" />
        <circle cx={cx} cy={cy} r={r * 1.18} fill="none" stroke={goldColor} strokeWidth="1.0" strokeOpacity={0.15 * activeOpacity} />
        <circle cx={cx} cy={cy} r={r * 1.12} fill="none" stroke={emeraldColor} strokeWidth="0.6" strokeOpacity={0.2 * activeOpacity} />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={goldColor} strokeWidth="1.5" strokeOpacity={0.25 * activeOpacity} />
        <circle cx={cx} cy={cy} r={r * 0.88} fill="none" stroke={emeraldColor} strokeWidth="0.8" strokeOpacity={0.3 * activeOpacity} />
        <circle cx={cx} cy={cy} r={r * 0.7} fill="none" stroke={goldColor} strokeWidth="1.0" strokeOpacity={0.35 * activeOpacity} />
        <circle cx={cx} cy={cy} r={r * 0.45} fill="none" stroke={emeraldColor} strokeWidth="1.2" strokeOpacity={0.25 * activeOpacity} strokeDasharray="3,6" />
        <circle cx={cx} cy={cy} r={r * 0.3} fill="none" stroke={goldColor} strokeWidth="0.8" strokeOpacity={0.4 * activeOpacity} />

        {/* Layer 2: 16-pointed Outer Star Polygon */}
        <polygon
          points={getStarPoints(cx, cy, 16, r * 1.12, r * 0.85)}
          fill="none"
          stroke={goldColor}
          strokeWidth="1.5"
          strokeOpacity={0.35 * activeOpacity}
        />

        {/* Layer 3: 16-pointed Intersecting Middle Star (Rotated by half a step for intricate lattice) */}
        <polygon
          points={getStarPoints(cx, cy, 16, r * 0.95, r * 0.72)}
          fill="none"
          stroke={emeraldColor}
          strokeWidth="1.0"
          strokeOpacity={0.4 * activeOpacity}
          transform={`rotate(${180 / 16}, ${cx}, ${cy})`}
        />

        {/* Layer 4: Traditional 8-pointed Rub el Hizb (overlapping squares) within the core */}
        <rect x={cx - r * 0.6} y={cy - r * 0.6} width={r * 1.2} height={r * 1.2} fill="none" stroke={goldColor} strokeWidth="1.2" strokeOpacity={0.45 * activeOpacity} />
        <rect x={cx - r * 0.6} y={cy - r * 0.6} width={r * 1.2} height={r * 1.2} fill="none" stroke={goldColor} strokeWidth="1.2" strokeOpacity={0.45 * activeOpacity} transform={`rotate(45, ${cx}, ${cy})`} />

        {/* Layer 5: Concentric 12-pointed Star inside */}
        <polygon
          points={getStarPoints(cx, cy, 12, r * 0.45, r * 0.32)}
          fill="none"
          stroke={emeraldColor}
          strokeWidth="1.2"
          strokeOpacity={0.4 * activeOpacity}
        />

        {/* Layer 6: Radial Rays (Every 15 degrees for 24 spokes to create high complexity) */}
        {Array.from({ length: 24 }).map((_, idx) => {
          const angle = (idx * Math.PI) / 12;
          const x_outer = cx + Math.cos(angle) * (r * 1.18);
          const y_outer = cy + Math.sin(angle) * (r * 1.18);
          const x_inner = cx + Math.cos(angle) * (r * 0.3);
          const y_inner = cy + Math.sin(angle) * (r * 0.3);

          return (
            <line
              key={`spoke-${idx}`}
              x1={x_inner}
              y1={y_inner}
              x2={x_outer}
              y2={y_outer}
              stroke={idx % 2 === 0 ? goldColor : emeraldColor}
              strokeWidth="0.6"
              strokeOpacity={0.18 * activeOpacity}
            />
          );
        })}

        {/* Layer 7: Elegant Centered Crescent (Hilal) & 8-Pointed Star Emblem */}
        <g id="central-hilal-emblem">
          {/* Elegant gold crescent */}
          <path
            d={`
              M ${cx + r * 0.04},${cy - r * 0.18}
              A ${r * 0.18} ${r * 0.18} 0 1 0 ${cx + r * 0.04},${cy + r * 0.18}
              A ${r * 0.145} ${r * 0.145} 0 1 1 ${cx + r * 0.04},${cy - r * 0.18}
            `}
            fill={goldColor}
            fillOpacity={0.12 * activeOpacity}
            stroke={goldColor}
            strokeWidth="1.5"
            strokeOpacity={0.65 * activeOpacity}
          />
          {/* Centered companion 8-pointed star */}
          <polygon
            points={getStarPoints(cx + r * 0.09, cy, 8, r * 0.05, r * 0.025)}
            fill={goldColor}
            fillOpacity={0.2 * activeOpacity}
            stroke={goldColor}
            strokeWidth="1.0"
            strokeOpacity={0.7 * activeOpacity}
            transform={`rotate(22.5, ${cx + r * 0.09}, ${cy})`}
          />
        </g>
      </g>
    );
  };

  // Render a traditional 12-pointed Islamic Star Motif (for top-left/middle-left balancing)
  const renderIslamicStar12 = (cx: number, cy: number, r: number) => {
    const activeOpacity = opacity;

    return (
      <g id="traditional-12-pointed-star">
        {/* Outer Circular frame */}
        <circle cx={cx} cy={cy} r={r * 1.15} fill="none" stroke={goldColor} strokeWidth="0.8" strokeOpacity={0.1 * activeOpacity} strokeDasharray="3,6" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={goldColor} strokeWidth="1.0" strokeOpacity={0.25 * activeOpacity} />

        {/* 12-pointed Star (Made of 3 overlapping squares or calculated mathematically) */}
        <polygon
          points={getStarPoints(cx, cy, 12, r, r * 0.72)}
          fill="none"
          stroke={goldColor}
          strokeWidth="1.5"
          strokeOpacity={0.45 * activeOpacity}
        />
        {/* Inner rotated 12-pointed star for dual-line Islamic effect */}
        <polygon
          points={getStarPoints(cx, cy, 12, r * 0.85, r * 0.6)}
          fill="none"
          stroke={emeraldColor}
          strokeWidth="1.0"
          strokeOpacity={0.4 * activeOpacity}
          transform={`rotate(15, ${cx}, ${cy})`}
        />

        {/* Core concentric circular frame */}
        <circle cx={cx} cy={cy} r={r * 0.35} fill="none" stroke={goldColor} strokeWidth="0.8" strokeOpacity={0.3 * activeOpacity} />
        <circle cx={cx} cy={cy} r={r * 0.22} fill="none" stroke={emeraldColor} strokeWidth="0.6" strokeOpacity={0.25 * activeOpacity} />

        {/* Radial Spokes (12 spokes) */}
        {Array.from({ length: 12 }).map((_, idx) => {
          const angle = (idx * Math.PI) / 6;
          const x_outer = cx + Math.cos(angle) * r;
          const y_outer = cy + Math.sin(angle) * r;
          const x_inner = cx + Math.cos(angle) * (r * 0.22);
          const y_inner = cy + Math.sin(angle) * (r * 0.22);

          return (
            <line
              key={`star12-spoke-${idx}`}
              x1={x_inner}
              y1={y_inner}
              x2={x_outer}
              y2={y_outer}
              stroke={goldColor}
              strokeWidth="0.5"
              strokeOpacity={0.2 * activeOpacity}
            />
          );
        })}

        {/* Tiny centered 8-pointed star */}
        <polygon
          points={getStarPoints(cx, cy, 8, r * 0.12, r * 0.06)}
          fill="none"
          stroke={goldColor}
          strokeWidth="1.0"
          strokeOpacity={0.5 * activeOpacity}
        />
      </g>
    );
  };

  return (
    <div
      id="halalchain-islamic-watermark"
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      <svg
        className="w-full h-full min-h-screen opacity-100"
        viewBox="0 0 1200 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Render elegant curving waves on top left */}
        {renderWaves()}

        {/* Render huge primary 16-pointed Islamic Rosette (bottom right, like JIBEP cover design) */}
        {renderIslamicRosette(1000, 780, 380)}

        {/* Render a beautiful 12-pointed companion motif (middle-left for geometric harmony) */}
        {renderIslamicStar12(140, 360, 160)}
      </svg>
    </div>
  );
}

