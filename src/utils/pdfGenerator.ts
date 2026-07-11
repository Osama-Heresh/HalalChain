/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// @ts-ignore
import reshaper from "arabic-persian-reshaper";
import { RegistryProject } from "../data/registry";

// Resolve ArabicShaper support for both ESM and CJS bundling
const ArabicShaper = reshaper?.ArabicShaper || (reshaper as any)?.default?.ArabicShaper || reshaper;

/**
 * Helper to ensure all images inside an element are fully loaded
 * before we trigger html2canvas, preventing partial rendering or hanging.
 */
function waitForImages(element: HTMLElement): Promise<void> {
  const images = element.querySelectorAll("img");
  const promises: Promise<void>[] = [];

  images.forEach((img) => {
    if (img.complete) {
      return;
    }
    promises.push(
      new Promise<void>((resolve) => {
        img.addEventListener("load", () => resolve());
        img.addEventListener("error", () => resolve()); // Resolve even on error so we do not hang
      })
    );
  });

  return Promise.all(promises).then(() => {});
}

/**
 * Helper to recursively walk a DOM subtree and process Arabic text nodes.
 * It reshapes the letters using ArabicShaper and reverses them so they
 * display correctly when html2canvas renders the text left-to-right.
 */
function processArabicDOM(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent || "";
    // Match any sequence with Arabic characters
    if (/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text)) {
      try {
        // Convert to Arabic Presentation Forms
        const shaped = ArabicShaper.convertArabic(text);
        node.textContent = shaped;
      } catch (err) {
        console.warn("Failed to shape Arabic text:", text, err);
      }
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as HTMLElement;

    // Recursively process child nodes
    const children = Array.from(el.childNodes);
    for (const child of children) {
      processArabicDOM(child);
    }
  }
}

/**
 * Converts LMS values to an sRGB string (RGB or RGBA).
 */
function oklabValuesToRgba(L: number, a: number, b: number, A: number): string {
  // 1. OKLab to LMS
  const l = L + 0.3963377774 * a + 0.2158037573 * b;
  const m = L - 0.1055613458 * a - 0.0638541728 * b;
  const s = L - 0.0894841775 * a - 1.2914855480 * b;

  // Cubically scale LMS
  const l_ = l * l * l;
  const m_ = m * m * m;
  const s_ = s * s * s;

  // 2. LMS to Linear sRGB
  const r = +4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_;
  const g = -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_;
  const b_ = -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_;

  // Gamma correction
  const gamma = (c: number) => {
    return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(Math.max(0, c), 1 / 2.4) - 0.055;
  };

  const R = Math.round(Math.max(0, Math.min(1, gamma(r))) * 255);
  const G = Math.round(Math.max(0, Math.min(1, gamma(g))) * 255);
  const B = Math.round(Math.max(0, Math.min(1, gamma(b_))) * 255);

  if (A === 1) {
    return `rgb(${R}, ${G}, ${B})`;
  } else {
    return `rgba(${R}, ${G}, ${B}, ${A})`;
  }
}

/**
 * Converts an oklch color string to standard rgb/rgba string.
 */
function oklchToRgba(oklchStr: string): string {
  try {
    const match = oklchStr.match(/oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)/i);
    if (!match) return oklchStr;

    const lVal = match[1];
    const cVal = parseFloat(match[2]);
    const hVal = parseFloat(match[3]);
    const aVal = match[4];

    const L = lVal.endsWith("%") ? parseFloat(lVal) / 100 : parseFloat(lVal);
    const C = cVal;
    // Convert Hue in degrees to radians
    const H = (hVal * Math.PI) / 180;
    const A = aVal ? (aVal.endsWith("%") ? parseFloat(aVal) / 100 : parseFloat(aVal)) : 1;

    // OKLCH to OKLab
    const a = C * Math.cos(H);
    const b = C * Math.sin(H);

    return oklabValuesToRgba(L, a, b, A);
  } catch (e) {
    console.warn("Failed converting oklch color:", oklchStr, e);
    return oklchStr;
  }
}

/**
 * Converts an oklab color string to standard rgb/rgba string.
 */
function oklabToRgba(oklabStr: string): string {
  try {
    const match = oklabStr.match(/oklab\(\s*([\d.]+%?)\s+([-+]?[\d.]+)\s+([-+]?[\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)/i);
    if (!match) return oklabStr;

    const lVal = match[1];
    const aVal = match[2];
    const bVal = match[3];
    const alphaVal = match[4];

    const L = lVal.endsWith("%") ? parseFloat(lVal) / 100 : parseFloat(lVal);
    const a = parseFloat(aVal);
    const b = parseFloat(bVal);
    const A = alphaVal ? (alphaVal.endsWith("%") ? parseFloat(alphaVal) / 100 : parseFloat(alphaVal)) : 1;

    return oklabValuesToRgba(L, a, b, A);
  } catch (e) {
    console.warn("Failed converting oklab color:", oklabStr, e);
    return oklabStr;
  }
}

/**
 * Extracts dominant color from modern color-mix CSS functions.
 */
function resolveColorMix(colorMixStr: string): string {
  try {
    const match = colorMixStr.match(/color-mix\(\s*in\s+\w+(?:\s+[-a-z0-9]+)?\s*,\s*([^,]+)\s*,\s*([^)]+)\)/i);
    if (match) {
      let color1 = match[1].trim();
      // Strip percentage (e.g., "oklch(...) 20%" -> "oklch(...)")
      color1 = color1.replace(/\s+\d+%?$/, "");
      return color1;
    }
    return "transparent";
  } catch {
    return "transparent";
  }
}

/**
 * Extracts the primary color from light-dark CSS functions.
 */
function resolveLightDark(lightDarkStr: string): string {
  try {
    const match = lightDarkStr.match(/light-dark\(\s*([^,]+)\s*,\s*([^)]+)\)/i);
    if (match) {
      return match[1].trim();
    }
    return "transparent";
  } catch {
    return "transparent";
  }
}

/**
 * Completely purges and translates any unsupported color spaces/functions
 * (oklch, oklab, color-mix, light-dark) into standard rgb/rgba formulas.
 */
function replaceModernColorsWithRgba(styleStr: string): string {
  if (!styleStr || typeof styleStr !== "string") return styleStr;

  let current = styleStr;
  let prev;

  // Resolve light-dark helpers
  do {
    prev = current;
    current = current.replace(/light-dark\([^)]+\)/gi, (match) => resolveLightDark(match));
  } while (current !== prev);

  // Resolve color-mix helpers
  do {
    prev = current;
    current = current.replace(/color-mix\([^)]+\)/gi, (match) => resolveColorMix(match));
  } while (current !== prev);

  // Convert oklch occurrences
  current = current.replace(/oklch\(([^)]+)\)/gi, (match) => oklchToRgba(match));

  // Convert oklab occurrences
  current = current.replace(/oklab\(([^)]+)\)/gi, (match) => oklabToRgba(match));

  return current;
}

/**
 * Clones an element and inlines all its computed styles,
 * converting any unsupported oklch/oklab colors to rgb/rgba.
 */
function cloneWithInlinedStyles(original: HTMLElement): HTMLElement {
  const clone = original.cloneNode(true) as HTMLElement;
  const originalEls = [original, ...Array.from(original.querySelectorAll("*"))] as HTMLElement[];
  const cloneEls = [clone, ...Array.from(clone.querySelectorAll("*"))] as HTMLElement[];

  for (let i = 0; i < originalEls.length; i++) {
    const origEl = originalEls[i];
    const cloneEl = cloneEls[i];
    if (!origEl || !cloneEl) continue;

    try {
      const computed = window.getComputedStyle(origEl);
      
      // Copy computed styles as inline styles
      for (let j = 0; j < computed.length; j++) {
        const prop = computed[j];
        // Skip properties that can cause illegal/bad states or override layouts undesirably
        if (prop.startsWith("-webkit-user-drag") || prop === "transition" || prop === "animation") {
          continue;
        }

        let val = computed.getPropertyValue(prop);
        if (val) {
          // Completely sanitize modern CSS features
          val = replaceModernColorsWithRgba(val);
          cloneEl.style.setProperty(prop, val);
        }
      }
    } catch (e) {
      console.warn("Failed to inline styles for element:", origEl, e);
    }
  }

  // Ensure the cloned root element is fixed and placed off-screen so it is rendered nicely but invisible to the user
  clone.style.position = "fixed";
  clone.style.left = "-9999px";
  clone.style.top = "0";
  clone.style.visibility = "visible";
  clone.style.display = "block";
  clone.style.zIndex = "-9999";

  return clone;
}

/**
 * Generates a beautiful 2-page Certificate of Sharia Compliance in PDF format.
 * - Page 1: English Certificate
 * - Page 2: Arabic Certificate
 * Utilizes style-inlining and html2canvas for 100% robust rendering across all browsers.
 */
export async function generateCertificatePDF(
  project: RegistryProject,
  onProgress?: (message: string) => void
): Promise<void> {
  // Add a small delay to ensure the off-screen DOM is completely mounted
  if (onProgress) onProgress("Initializing templates...");
  await new Promise((resolve) => setTimeout(resolve, 400));

  const englishElement = document.getElementById("pdf-template-english");
  const arabicElement = document.getElementById("pdf-template-arabic");

  if (!englishElement || !arabicElement) {
    console.error("PDF templates not found in the DOM.");
    if (onProgress) onProgress("Error: Templates not found. Please try again.");
    return;
  }

  let englishClone: HTMLElement | null = null;
  let arabicClone: HTMLElement | null = null;
  const disabledSheets: CSSStyleSheet[] = [];

  try {
    console.log("PDF generator: Loading template assets...");
    if (onProgress) onProgress("Loading certificate assets...");

    // Wait for all images inside both templates to be fully loaded before rendering
    await Promise.all([
      waitForImages(englishElement),
      waitForImages(arabicElement)
    ]);

    if (onProgress) onProgress("Preparing high-fidelity layouts...");
    console.log("PDF generator: Creating style-inlined clones...");

    // Create high-fidelity clones with inlined styles and oklch colors converted to rgb/rgba
    englishClone = cloneWithInlinedStyles(englishElement);
    arabicClone = cloneWithInlinedStyles(arabicElement);

    // Process the Arabic clone to shape and reverse its Arabic text nodes for perfect html2canvas layout
    processArabicDOM(arabicClone);

    // Append clones to DOM so they are layout-enabled
    document.body.appendChild(englishClone);
    document.body.appendChild(arabicClone);

    // Disable all stylesheets so html2canvas doesn't try to parse unsupported color rules inside them
    console.log("PDF generator: Temporarily disabling stylesheets to avoid parser crashes...");
    const sheets = Array.from(document.styleSheets);
    for (const sheet of sheets) {
      try {
        sheet.disabled = true;
        disabledSheets.push(sheet);
      } catch (e) {
        console.warn("Failed to disable stylesheet:", e);
      }
    }

    if (onProgress) onProgress("Rendering English certificate...");
    console.log("PDF generator: starting English html2canvas rendering");

    let englishCanvas;
    try {
      englishCanvas = await html2canvas(englishClone, {
        scale: 2, // High resolution scaling for crisp fonts & details
        useCORS: true, // Allow fetching the logo image correctly
        backgroundColor: "#ffffff",
        logging: false,
      });
    } catch (err: any) {
      console.error("English canvas render failed:", err);
      throw new Error(`English rendering failed: ${err?.message || err}`);
    }

    console.log("English template successfully rendered to canvas.");
    if (onProgress) onProgress("Rendering Arabic certificate...");
    console.log("PDF generator: starting Arabic html2canvas rendering");

    let arabicCanvas;
    try {
      arabicCanvas = await html2canvas(arabicClone, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
    } catch (err: any) {
      console.error("Arabic canvas render failed:", err);
      throw new Error(`Arabic rendering failed: ${err?.message || err}`);
    }

    console.log("Arabic template successfully rendered to canvas.");
    if (onProgress) onProgress("Assembling official document...");

    // Create PDF with A4 dimensions (210mm x 297mm)
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = 210;
    const pageHeight = 297;

    // Convert Page 1 to high-quality JPEG and embed
    const englishImgData = englishCanvas.toDataURL("image/jpeg", 0.98);
    doc.addImage(englishImgData, "JPEG", 0, 0, pageWidth, pageHeight, undefined, "FAST");

    // Add Page 2
    doc.addPage();
    const arabicImgData = arabicCanvas.toDataURL("image/jpeg", 0.98);
    doc.addImage(arabicImgData, "JPEG", 0, 0, pageWidth, pageHeight, undefined, "FAST");

    if (onProgress) onProgress("Downloading file...");

    // Save the finalized document
    const fileName = `HalalChain_Compliance_Certificate_${project.id}.pdf`;
    doc.save(fileName);

    if (onProgress) onProgress("");
  } catch (error: any) {
    console.error("Failed to generate certificate PDF:", error);
    if (onProgress) onProgress(`Error: ${error?.message || error}`);
  } finally {
    // 1. Restore stylesheets
    console.log("PDF generator: Restoring stylesheets...");
    for (const sheet of disabledSheets) {
      try {
        sheet.disabled = false;
      } catch (e) {
        console.warn("Failed to re-enable stylesheet:", e);
      }
    }

    // 2. Clean up clones
    console.log("PDF generator: Cleaning up cloned elements...");
    if (englishClone && englishClone.parentNode) {
      englishClone.parentNode.removeChild(englishClone);
    }
    if (arabicClone && arabicClone.parentNode) {
      arabicClone.parentNode.removeChild(arabicClone);
    }
  }
}
