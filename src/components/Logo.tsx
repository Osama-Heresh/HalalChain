/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import logoImg from "../assets/images/halalchain_logo_1783769453291.jpg";

interface LogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showTagline?: boolean;
  isRtl?: boolean;
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
  showTagline = true,
  isRtl = false,
}: LogoProps) {
  // Height and width mapping for the unified logo image (3:2 aspect ratio)
  const sizes = {
    xs: { height: "h-14", iconSize: 56 },
    sm: { height: "h-28 sm:h-32", iconSize: 120 },
    md: { height: "h-40 sm:h-48", iconSize: 180 },
    lg: { height: "h-56 sm:h-64", iconSize: 240 },
    xl: { height: "h-72 sm:h-80", iconSize: 320 },
  };

  const currentSize = sizes[size];

  return (
    <div
      id="halalchain-brand-logo"
      className={`flex items-center select-none ${className}`}
    >
      {showText ? (
        // Display the full, beautiful, unaltered logo (icon + text + tagline)
        <img
          src={logoImg}
          alt="HalalChain Logo"
          referrerPolicy="no-referrer"
          className={`${currentSize.height} object-contain mix-blend-multiply`}
        />
      ) : (
        // Crop/zoom to show only the top iconic star mark when text is hidden
        <div
          className="relative overflow-hidden shrink-0 rounded-full bg-white"
          style={{ width: currentSize.iconSize, height: currentSize.iconSize }}
        >
          <img
            src={logoImg}
            alt="HalalChain Logo Icon"
            referrerPolicy="no-referrer"
            className="absolute top-0 left-0 w-full h-[165%] object-cover object-top scale-105 mix-blend-multiply"
          />
        </div>
      )}
    </div>
  );
}
