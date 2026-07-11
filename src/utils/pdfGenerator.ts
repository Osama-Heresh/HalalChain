/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from "jspdf";
import { RegistryProject } from "../data/registry";

export function generateCertificatePDF(project: RegistryProject) {
  // Create PDF document (A4 size: 210mm x 297mm)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;

  // Colors
  const goldColor = [212, 175, 55]; // #d4af37
  const darkGreen = [2, 44, 34];    // #022c22 (emerald-950)
  const textDark = [15, 23, 42];    // #0f172a (slate-900)
  const textMuted = [100, 116, 139]; // #64748b (slate-500)
  const lightBg = [248, 250, 252];  // #f8fafc (slate-50)
  const emeraldColor = [5, 150, 105]; // #059669 (emerald-600)
  const borderLight = [226, 232, 240]; // #e2e8f0 (slate-200)

  // 1. Draw elegant background color (soft cream-offwhite tint)
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // 2. Draw dual golden borders
  // Outer double border
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setLineWidth(1.2);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16, "S");

  // Inner thin border
  doc.setLineWidth(0.3);
  doc.rect(11, 11, pageWidth - 22, pageHeight - 22, "S");

  // 3. Draw Corner Accents
  doc.setLineWidth(0.8);
  const offset = 11;
  const accentSize = 6;
  // Top Left
  doc.line(offset, offset, offset + accentSize, offset);
  doc.line(offset, offset, offset, offset + accentSize);
  // Top Right
  doc.line(pageWidth - offset, offset, pageWidth - offset - accentSize, offset);
  doc.line(pageWidth - offset, offset, pageWidth - offset, offset + accentSize);
  // Bottom Left
  doc.line(offset, pageHeight - offset, offset + accentSize, pageHeight - offset);
  doc.line(offset, pageHeight - offset, offset, pageHeight - offset - accentSize);
  // Bottom Right
  doc.line(pageWidth - offset, pageHeight - offset, pageWidth - offset - accentSize, pageHeight - offset);
  doc.line(pageWidth - offset, pageHeight - offset, pageWidth - offset, pageHeight - offset - accentSize);

  // 4. Decorative background geometric watermark (subtle central circle and star)
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setLineWidth(0.1);
  const cx = pageWidth / 2;
  const cy = 135;
  doc.circle(cx, cy, 28, "S");
  doc.circle(cx, cy, 20, "S");
  // Let's draw an 8-point star watermark
  for (let i = 0; i < 8; i++) {
    const angle1 = (i * Math.PI) / 4;
    const angle2 = ((i + 2) * Math.PI) / 4;
    const rOuter = 26;
    const x1 = cx + rOuter * Math.cos(angle1);
    const y1 = cy + rOuter * Math.sin(angle1);
    const x2 = cx + rOuter * Math.cos(angle2);
    const y2 = cy + rOuter * Math.sin(angle2);
    doc.line(x1, y1, x2, y2);
  }

  // 5. Header Section
  // Left: Brand Name & Subtitle
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("HALALCHAIN", 18, 25);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("SHARIA & BLOCKCHAIN COMPLIANCE LEDGER", 18, 29);

  // Right: License Serial Number & Status Badge
  doc.setFont("courier", "bold");
  doc.setFontSize(10);
  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.text(`SERIAL NO: ${project.certificateNumber}`, pageWidth - 18, 24, { align: "right" });

  // Status Badge
  const badgeWidth = 24;
  const badgeHeight = 6;
  const badgeX = pageWidth - 18 - badgeWidth;
  const badgeY = 27;
  doc.setFillColor(emeraldColor[0], emeraldColor[1], emeraldColor[2]);
  doc.rect(badgeX, badgeY, badgeWidth, badgeHeight, "F");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(255, 255, 255);
  doc.text(project.status.toUpperCase(), badgeX + badgeWidth / 2, badgeY + 4.2, { align: "center" });

  // Thin line dividing header
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.3);
  doc.line(18, 35, pageWidth - 18, 35);

  // 6. Certificate Title
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("CERTIFICATE OF SHARIA COMPLIANCE", cx, 47, { align: "center" });

  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.setTextColor(emeraldColor[0], emeraldColor[1], emeraldColor[2]);
  doc.text("Official Compliance Certification & Ethical Clearance Documentation", cx, 53, { align: "center" });

  // Center golden divider line
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setLineWidth(0.5);
  doc.line(cx - 30, 58, cx + 30, 58);

  // 7. Core Statement
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("This document cryptographically certifies that the decentralized protocol named below:", cx, 66, { align: "center" });

  // Project Name Display
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text(project.name.toUpperCase(), cx, 77, { align: "center" });

  // Token Ticker Display
  doc.setTextColor(emeraldColor[0], emeraldColor[1], emeraldColor[2]);
  doc.setFont("courier", "bold");
  doc.setFontSize(12);
  doc.text(`TICKER: ${project.tokenTicker}`, cx, 83, { align: "center" });

  // Auditing Body statement
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const auditStatement = "has undergone complete theological, economic, and smart contract audit procedures. The review was conducted independently by the HalalChain Resident Scholars and Technical Audit Team in compliance with standard Islamic Finance (Fiqh al-Muamalat) parameters.";
  const splitAuditStatement = doc.splitTextToSize(auditStatement, 160);
  doc.text(splitAuditStatement, cx, 91, { align: "center" });

  // 8. Scope Specifications (Two-column Box Layout)
  const boxY = 106;
  const boxW = 174;
  const boxH = 34;
  const boxX = (pageWidth - boxW) / 2;

  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.4);
  doc.rect(boxX, boxY, boxW, boxH, "FD");

  // Grid vertical separator
  doc.line(cx, boxY + 4, cx, boxY + boxH - 4);

  // Column 1 (Technical Specs)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("AUDITED SCOPE & TARGETS", boxX + 8, boxY + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text(`Blockchain Platform:   ${project.blockchain}`, boxX + 8, boxY + 14);
  doc.text(`Technical Category:   ${project.category}`, boxX + 8, boxY + 20);
  doc.text(`Certification Type:   ${project.certificateType}`, boxX + 8, boxY + 26);

  // Column 2 (Security & Compliance Metrics)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("COMPLIANCE & GOVERNANCE METRICS", cx + 8, boxY + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text(`Issue Date:               ${project.issueDate}`, cx + 8, boxY + 14);
  doc.text(`Expiry Date:              ${project.expiryDate}`, cx + 8, boxY + 20);
  
  // Custom styled metric values
  doc.text("Governance Score: ", cx + 8, boxY + 26);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(emeraldColor[0], emeraldColor[1], emeraldColor[2]);
  doc.text(`${project.governanceScore}/100`, cx + 40, boxY + 26);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text("Risk Classification: ", cx + 8, boxY + 31);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(217, 119, 6); // Amber-600
  doc.text(project.riskRating.toUpperCase(), cx + 40, boxY + 31);

  // 9. Audited Smart Contracts File List
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("VERIFIED ON-CHAIN CONTRACT SOURCE FILES:", boxX, 147);

  doc.setFont("courier", "bold");
  doc.setFontSize(8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const filesList = project.auditedSmartContracts.join("  |  ");
  const splitFiles = doc.splitTextToSize(filesList, boxW);
  doc.text(splitFiles, boxX, 152);

  // 10. Sharia Board Scholar Summary Opinion
  const opinionY = 163;
  const opinionW = boxW;
  const opinionH = 40;
  const opinionX = boxX;

  // Draw gold-tinted highlight box
  doc.setFillColor(254, 252, 243); // #fefcf3 (very soft amber/gold)
  doc.setDrawColor(245, 230, 190); // light gold line
  doc.setLineWidth(0.4);
  doc.rect(opinionX, opinionY, opinionW, opinionH, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text("RESIDENT SHARIA SCHOLAR BOARD EXECUTIVE OPINION", opinionX + 6, opinionY + 6);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const splitOpinion = doc.splitTextToSize(`"${project.residentScholarOpinion}"`, opinionW - 12);
  doc.text(splitOpinion, opinionX + 6, opinionY + 14);

  // Theological Clearance Seal Notice
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const clearanceNotice = "THEOLOGICAL STATEMENT: This certificate verifies that the audited system's on-chain distribution, minting, lockups, and yield logic do not contain interest accumulation channels (Riba), dynamic gambling triggers (Maysir), or critical informational asymmetry (Gharar). Governance complies with mutual consultation principles (Shura).";
  const splitNotice = doc.splitTextToSize(clearanceNotice, boxW);
  doc.text(splitNotice, boxX, 211);

  // 11. Signatures & Seals Section
  const sigY = 236;

  // Left Signature
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text("Dr. Salim Al-Othman", boxX + 10, sigY);
  
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.3);
  doc.line(boxX + 5, sigY + 2, boxX + 50, sigY + 2);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("CHAIRMAN, SHARIA BOARD", boxX + 13, sigY + 5);
  doc.text("HALALCHAIN FOUNDATION", boxX + 14, sigY + 8);

  // Right Signature
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text("Prof. Ibrahim Vance", boxX + boxW - 50, sigY);
  
  doc.line(boxX + boxW - 55, sigY + 2, boxX + boxW - 10, sigY + 2);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("HEAD OF ON-CHAIN AUDIT", boxX + boxW - 49, sigY + 5);
  doc.text("TECHNICAL STANDARDS DEPT.", boxX + boxW - 52, sigY + 8);

  // 12. Verification & Blockchain QR Mock-up
  const qrX = cx - 22;
  const qrY = 252;
  const qrW = 44;
  const qrH = 21;

  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.3);
  doc.rect(qrX, qrY, qrW, qrH, "FD");

  // Minimalist stylized visual barcode/QR representation
  doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.rect(qrX + 3, qrY + 3, 5, 5, "F");
  doc.rect(qrX + 3, qrY + 13, 5, 5, "F");
  doc.rect(qrX + 13, qrY + 3, 5, 5, "F");
  // Some decorative lines representing QR density
  doc.setDrawColor(textDark[0], textDark[1], textDark[2]);
  doc.setLineWidth(0.5);
  doc.line(qrX + 22, qrY + 4, qrX + 41, qrY + 4);
  doc.line(qrX + 22, qrY + 7, qrX + 35, qrY + 7);
  doc.line(qrX + 22, qrY + 10, qrX + 39, qrY + 10);
  doc.line(qrX + 13, qrY + 13, qrX + 37, qrY + 13);
  doc.line(qrX + 13, qrY + 16, qrX + 41, qrY + 16);

  // Bottom Security taglines
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("CRYPTOGRAPHICALLY SECURED", cx, 280, { align: "center" });

  doc.setFont("courier", "normal");
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`VERIFY AT: https://compliance.halalchain.com/verify?id=${project.id}`, cx, 284, { align: "center" });

  // Save the generated document
  const fileName = `HalalChain_Certificate_${project.id}.pdf`;
  doc.save(fileName);
}
