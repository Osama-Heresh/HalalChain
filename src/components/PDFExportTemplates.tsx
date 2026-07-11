/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { RegistryProject } from "../data/registry";
import Logo from "./Logo";
import { Award, QrCode } from "lucide-react";

interface PDFExportTemplatesProps {
  project: RegistryProject;
}

export default function PDFExportTemplates({ project }: PDFExportTemplatesProps) {
  // Mock-up Barcode lines with varying width for aesthetic realism
  const Barcode = () => (
    <div className="flex flex-col items-center">
      <div className="flex items-end h-9 gap-[1.5px] px-2 bg-white">
        <div className="w-[2px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[3px] h-full bg-slate-900" />
        <div className="w-[1.5px] h-full bg-slate-900" />
        <div className="w-[4px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[2px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[3px] h-full bg-slate-900" />
        <div className="w-[1.5px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[4px] h-full bg-slate-900" />
        <div className="w-[2px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[3px] h-full bg-slate-900" />
        <div className="w-[1.5px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[2px] h-full bg-slate-900" />
        <div className="w-[4px] h-full bg-slate-900" />
        <div className="w-[1px] h-full bg-slate-900" />
        <div className="w-[2.5px] h-full bg-slate-900" />
      </div>
      <span className="text-[9px] font-mono tracking-[0.25em] text-slate-500 mt-1 uppercase">
        {project.certificateNumber}
      </span>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* ================= PAGE 1: ENGLISH CERTIFICATE ================= */}
      <div
        id="pdf-template-english"
        className="relative bg-white border-[16px] border-double border-[#d4af37] rounded-none p-10 pb-36 shadow-none overflow-hidden font-sans text-slate-900 select-none"
        style={{ width: "794px", height: "1123px" }} // Standard A4 at 96 DPI
      >
        {/* Background Islamic Watermark Star Ornament */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <svg width="550" height="550" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50, 50)">
              <rect x="-35" y="-35" width="70" height="70" stroke="#d4af37" strokeWidth="1.8" fill="none" />
              <rect x="-35" y="-35" width="70" height="70" stroke="#d4af37" strokeWidth="1.8" fill="none" transform="rotate(45)" />
              <circle cx="0" cy="0" r="15" stroke="#d4af37" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* Thin Golden Border Lines inside */}
        <div className="absolute inset-4 border border-[#d4af37]/40 rounded-none pointer-events-none" />

        {/* Certificate Frame Corner Accents */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]" />
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]" />

        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 gap-4">
          <Logo size="xs" showTagline={false} />
          <div className="text-right">
            <div className="font-mono text-[9px] text-slate-400 font-bold tracking-widest">LICENSE SERIAL NUMBER</div>
            <div className="font-mono text-base font-bold text-amber-600 tracking-wider">
              {project.certificateNumber}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              {project.status.toUpperCase()} COMPLIANT
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">OFFICIAL DIGITAL ACCREDITATION</span>
          <h1 className="font-display font-black text-3xl tracking-tight text-slate-900 uppercase mt-1">
            Certificate of Sharia Compliance
          </h1>
          <p className="font-display font-medium text-xs text-emerald-800 tracking-widest uppercase mt-1">
            On-Chain Smart Contract & Tokenomics Auditing Verification
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Main Certificate Statement */}
        <div className="space-y-3.5 text-xs text-slate-700 mb-4 px-4 text-center leading-relaxed">
          <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">This document cryptographically certifies that the project:</p>
          
          <div className="my-2">
            <span className="text-2xl font-black text-slate-950 tracking-wide block">{project.name}</span>
            <span className="inline-block font-mono text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 font-bold mt-1">
              Token Ticker: {project.tokenTicker}
            </span>
          </div>

          <p className="text-[11px] max-w-xl mx-auto text-slate-600 leading-relaxed">
            Has successfully passed the theological, ethical, and computational blockchain audit specifications set forth by the Sharia Committee of <strong>HalalChain™ Independent Certification Authority</strong>.
          </p>
          
          <p className="text-[10px] text-slate-400 italic max-w-lg mx-auto">
            All audited smart contract bytecodes, state distributions, and tokenomics modules comply with standard classical Islamic jurisprudence (Fiqh al-Muamalat), remaining completely free of Riba (interest-based accruals), Maysir (gambling/speculative elements), and Gharar (excessive informational asymmetry).
          </p>
        </div>

        {/* Meta Specifications Box */}
        <div className="grid grid-cols-4 gap-4 mb-4 bg-slate-50 p-3 border border-slate-200">
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-wider">Issue Date</div>
            <div className="font-mono text-xs font-black text-slate-800 mt-1">{project.issueDate}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-wider">Expiry Date</div>
            <div className="font-mono text-xs font-black text-slate-800 mt-1">{project.expiryDate}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-wider">Risk Level</div>
            <div className="font-mono text-xs font-black text-amber-700 mt-1">
              {project.riskRating.toUpperCase()} RISK
            </div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-wider">Governance</div>
            <div className="font-mono text-xs font-black text-emerald-700 mt-1">
              SCORE: {project.governanceScore}/100
            </div>
          </div>
        </div>

        {/* Audited Scope */}
        <div className="bg-slate-50/50 border border-slate-200/60 p-3 rounded-none mb-4 text-xs">
          <div className="font-mono text-[9px] text-slate-400 font-bold tracking-wider mb-2 uppercase">Audited On-Chain Parameters</div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-slate-400 block text-[10px]">Blockchain Platform:</span>
              <strong className="text-slate-800 font-bold text-[11px]">{project.blockchain}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Technical Category:</span>
              <strong className="text-slate-800 font-bold text-[11px]">{project.category}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Certification Scope:</span>
              <strong className="text-slate-800 font-bold text-[11px]">{project.certificateType}</strong>
            </div>
          </div>
        </div>

        {/* Resident Scholar Summary Opinion */}
        <div className="border border-amber-500/25 p-4 bg-amber-50/20 text-xs">
          <div className="flex items-center gap-1.5 mb-2 text-amber-800 font-black uppercase tracking-widest text-[10px]">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Resident Sharia Scholar Council Opinion</span>
          </div>
          <p className="text-slate-700 italic leading-relaxed text-[11px]">&ldquo;{project.residentScholarOpinion}&rdquo;</p>
        </div>

        {/* Signatures & Verification Area */}
        <div className="flex items-center justify-between gap-6 pt-6 border-t border-slate-100 absolute bottom-12 left-10 right-10">
          {/* Left: Barcode */}
          <div className="w-1/3">
            <Barcode />
          </div>

          {/* Center: QR Verification Badge */}
          <div className="flex items-center gap-3 bg-slate-50 p-2 border border-slate-200 w-1/3 justify-center">
            <div className="w-12 h-12 bg-white border border-slate-200 rounded-none flex items-center justify-center p-1 relative">
              <QrCode className="w-full h-full text-slate-800" />
              <div className="absolute inset-0 m-auto w-3.5 h-3.5 bg-emerald-950 border border-amber-500 rounded flex items-center justify-center text-[5px] text-[#d4af37] font-bold">
                HC
              </div>
            </div>
            <div className="text-[8px] leading-tight text-slate-400 font-mono">
              <div className="font-extrabold text-slate-500">VERIFIED STATUS</div>
              <div className="text-emerald-700 font-bold">halalchain.com/verify</div>
              <div className="text-[7px]">ID: {project.id}</div>
            </div>
          </div>

          {/* Right: Scholar Signatures */}
          <div className="flex gap-4 w-1/3 justify-end text-center">
            <div className="text-center">
              <div className="font-serif italic text-xs text-slate-600 font-bold">Dr. Salim Al-Othman</div>
              <div className="w-24 h-px bg-slate-300 my-1 mx-auto" />
              <div className="text-[8px] font-mono text-slate-400 uppercase tracking-tight">CHAIRMAN, SHARIA BOARD</div>
            </div>
            <div className="text-center">
              <div className="font-serif italic text-xs text-slate-600 font-bold">Prof. Ibrahim Vance</div>
              <div className="w-24 h-px bg-slate-300 my-1 mx-auto" />
              <div className="text-[8px] font-mono text-slate-400 uppercase tracking-tight">HEAD OF ON-CHAIN AUDIT</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PAGE 2: ARABIC CERTIFICATE ================= */}
      <div
        id="pdf-template-arabic"
        className="relative bg-white border-[16px] border-double border-[#d4af37] rounded-none p-10 pb-36 shadow-none overflow-hidden font-sans text-slate-900 select-none text-right"
        style={{ width: "794px", height: "1123px" }} // Standard A4 at 96 DPI
        dir="rtl"
      >
        {/* Background Islamic Watermark Star Ornament */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <svg width="550" height="550" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50, 50)">
              <rect x="-35" y="-35" width="70" height="70" stroke="#d4af37" strokeWidth="1.8" fill="none" />
              <rect x="-35" y="-35" width="70" height="70" stroke="#d4af37" strokeWidth="1.8" fill="none" transform="rotate(45)" />
              <circle cx="0" cy="0" r="15" stroke="#d4af37" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* Thin Golden Border Lines inside */}
        <div className="absolute inset-4 border border-[#d4af37]/40 rounded-none pointer-events-none" />

        {/* Certificate Frame Corner Accents */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]" />
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]" />

        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 gap-4">
          <Logo size="xs" showTagline={false} isRtl={true} />
          <div className="text-left">
            <div className="font-mono text-[9px] text-slate-400 font-bold tracking-normal">الرقم التسلسلي للترخيص</div>
            <div className="font-mono text-base font-bold text-amber-600 tracking-wider">
              {project.certificateNumber}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              ترخيص معتمد {project.statusAr}
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-4">
          <span className="text-[11px] font-bold uppercase tracking-normal text-[#d4af37]">اعتماد شرعي وتقني رقمي رسمي</span>
          <h1 className="font-display font-black text-3xl tracking-normal text-slate-900 mt-1">
            شهادة التوافق والمطابقة الشرعية
          </h1>
          <p className="font-display font-medium text-xs text-emerald-800 tracking-normal uppercase mt-1">
            مستند التدقيق الفقهي لبروتوكولات الويب 3 وعقود الكود الذكي
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Main Certificate Statement */}
        <div className="space-y-3.5 text-xs text-slate-700 mb-4 px-4 text-center leading-relaxed">
          <p className="text-slate-400 font-medium text-xs tracking-normal">تشهد الهيئة المستقلة لمطابقة المعاملات والتحقق الرقمي بأن المشروع:</p>
          
          <div className="my-2">
            <span className="text-2xl font-black text-slate-950 tracking-wide block">{project.name}</span>
            <span className="inline-block font-mono text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 font-bold mt-1">
              رمز التوكن: {project.tokenTicker}
            </span>
          </div>

          <p className="text-[11px] max-w-xl mx-auto text-slate-600 leading-relaxed">
            قد خضع لعمليات فحص فقهية وبرمجية متكاملة لتقييم الكود وتتبع مصادر المعاملات من قبل مجلس المستشارين واللجنة الشرعية المستقلة التابعة لـ <strong>حلال تشين™</strong>.
          </p>
          
          <p className="text-[10px] text-slate-400 italic max-w-lg mx-auto">
            بناءً على هذا التدقيق، يقرر المجلس توافق المشروع التام مع ضوابط الشريعة الإسلامية وفقه المعاملات المالية، وخلو قواعد الكود الذكي وبنية نموذج التوكن بالكامل من شبهات الربا، والميسر (القمار والمخاطرات الاصطناعية)، والغرر (الجهالة والتظليل التعاقدي).
          </p>
        </div>

        {/* Meta Specifications Box */}
        <div className="grid grid-cols-4 gap-4 mb-4 bg-slate-50 p-3 border border-slate-200 text-right" dir="rtl">
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-normal">تاريخ الإصدار</div>
            <div className="font-mono text-xs font-black text-slate-800 mt-1">{project.issueDate}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-normal">تاريخ الانتهاء</div>
            <div className="font-mono text-xs font-black text-slate-800 mt-1">{project.expiryDate}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-normal">تقييم المخاطر</div>
            <div className="font-mono text-xs font-black text-amber-700 mt-1">
              مخاطر {project.riskRatingAr}
            </div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-normal">مؤشر الحوكمة</div>
            <div className="font-mono text-xs font-black text-emerald-700 mt-1">
              النتيجة: {project.governanceScore}/100
            </div>
          </div>
        </div>

        {/* Audited Scope */}
        <div className="bg-slate-50/50 border border-slate-200/60 p-3 rounded-none mb-4 text-xs text-right" dir="rtl">
          <div className="font-mono text-[9px] text-slate-400 font-bold tracking-normal mb-2 uppercase">محددات نطاق التدقيق التقني:</div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-slate-400 block text-[10px]">منصة البلوكشين:</span>
              <strong className="text-slate-800 font-bold text-[11px]">{project.blockchain}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">التصنيف الفني:</span>
              <strong className="text-slate-800 font-bold text-[11px]">{project.categoryAr}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">نوع شهادة التوافق:</span>
              <strong className="text-slate-800 font-bold text-[11px]">{project.certificateTypeAr}</strong>
            </div>
          </div>
        </div>

        {/* Resident Scholar Summary Opinion */}
        <div className="border border-amber-500/25 p-4 bg-amber-50/20 text-xs text-right" dir="rtl">
          <div className="flex items-center gap-1.5 mb-2 text-amber-800 font-black uppercase tracking-normal text-[10px]">
            <Award className="w-4 h-4 text-amber-600" />
            <span>خلاصة الرأي الفقهي للهيئة الشرعية المقيمة</span>
          </div>
          <p className="text-slate-700 italic leading-relaxed text-[11px]">&ldquo;{project.residentScholarOpinionAr}&rdquo;</p>
        </div>

        {/* Signatures & Verification Area */}
        <div className="flex items-center justify-between gap-6 pt-6 border-t border-slate-100 absolute bottom-12 left-10 right-10 text-right" dir="rtl">
          {/* Right: Barcode */}
          <div className="w-1/3">
            <Barcode />
          </div>

          {/* Center: QR Verification Badge */}
          <div className="flex items-center gap-3 bg-slate-50 p-2 border border-slate-200 w-1/3 justify-center text-left" dir="ltr">
            <div className="w-12 h-12 bg-white border border-slate-200 rounded-none flex items-center justify-center p-1 relative">
              <QrCode className="w-full h-full text-slate-800" />
              <div className="absolute inset-0 m-auto w-3.5 h-3.5 bg-emerald-950 border border-amber-500 rounded flex items-center justify-center text-[5px] text-[#d4af37] font-bold">
                HC
              </div>
            </div>
            <div className="text-[8px] leading-tight text-slate-400 font-mono">
              <div className="font-extrabold text-slate-500">حالة التحقق الأمن</div>
              <div className="text-emerald-700 font-bold">halalchain.com/verify</div>
              <div className="text-[7px]">الرمز: {project.id}</div>
            </div>
          </div>

          {/* Left: Scholar Signatures */}
          <div className="flex gap-4 w-1/3 justify-start text-center">
            <div className="text-center">
              <div className="font-serif italic text-xs text-slate-600 font-bold">د. سليم العثمان</div>
              <div className="w-24 h-px bg-slate-300 my-1 mx-auto" />
              <div className="text-[8px] font-mono text-slate-400 uppercase tracking-normal">رئيس المجلس الشرعي</div>
            </div>
            <div className="text-center">
              <div className="font-serif italic text-xs text-slate-600 font-bold">أ.د. إبراهيم فانس</div>
              <div className="w-24 h-px bg-slate-300 my-1 mx-auto" />
              <div className="text-[8px] font-mono text-slate-400 uppercase tracking-normal">رئيس التدقيق البرمجي</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
