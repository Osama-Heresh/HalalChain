/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { RegistryProject } from "../data/registry";
import Logo from "./Logo";
import { Award, ShieldCheck, CheckCircle2, QrCode } from "lucide-react";

interface CertificatePreviewProps {
  project: RegistryProject;
  isRtl?: boolean;
}

export default function CertificatePreview({ project, isRtl = false }: CertificatePreviewProps) {
  // Determine border and status colors based on status
  const statusColors = {
    Valid: { border: "border-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
    Expired: { border: "border-amber-500", text: "text-amber-700", bg: "bg-amber-50" },
    Suspended: { border: "border-rose-500", text: "text-rose-700", bg: "bg-rose-50" },
    "Under Review": { border: "border-blue-500", text: "text-blue-700", bg: "bg-blue-50" },
  };

  const activeStatus = statusColors[project.status] || statusColors.Valid;

  return (
    <div
      id={`certificate-view-${project.id}`}
      className="relative max-w-3xl mx-auto bg-white border-[14px] border-double border-[#d4af37]/40 rounded-3xl p-8 shadow-2xl overflow-hidden font-sans text-slate-900"
    >
      {/* Background Islamic Watermark Star Ornament */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50, 50)">
            <rect x="-35" y="-35" width="70" height="70" stroke="#d4af37" strokeWidth="2" fill="none" />
            <rect x="-35" y="-35" width="70" height="70" stroke="#d4af37" strokeWidth="2" fill="none" transform="rotate(45)" />
            <circle cx="0" cy="0" r="15" stroke="#d4af37" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Thin Golden Border Lines inside */}
      <div className="absolute inset-3 border border-[#d4af37]/25 rounded-2xl pointer-events-none" />

      {/* Certificate Frame Corner Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/60" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/60" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]/60" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/60" />

      {/* Header section with brand */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-6 mb-6 gap-4">
        <Logo size="sm" showTagline={false} />
        <div className="text-left md:text-right">
          <div className="font-mono text-[10px] text-slate-400 font-bold tracking-wider">LICENSE SERIAL NUMBER</div>
          <div className="font-mono text-sm font-bold text-amber-600 tracking-wider">
            {project.certificateNumber}
          </div>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 mt-1.5 rounded-full text-xs font-bold ${activeStatus.bg} ${activeStatus.text} border border-current`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {isRtl ? project.statusAr : project.status.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-slate-900 uppercase">
          Certificate of Sharia Compliance
        </h2>
        <h3 className="font-display font-medium text-lg text-emerald-800 mt-1">
          شهادة التوافق الشرعي والالتزام المالي
        </h3>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
      </div>

      {/* Certificate body text - English & Arabic Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed mb-8 border-b border-slate-100 pb-8">
        {/* English */}
        <div className="space-y-3 border-r border-slate-100 pr-0 md:pr-4">
          <p className="text-slate-500 font-medium text-xs">This is to certify that the project:</p>
          <div className="py-1">
            <span className="text-xl font-bold text-slate-900 tracking-wide block">{project.name}</span>
            <span className="font-mono text-xs text-emerald-600 font-bold">Token Ticker: {project.tokenTicker}</span>
          </div>
          <p className="text-slate-600 text-xs">
            Has undergone comprehensive theological and technical evaluation by the independent Board of{" "}
            <strong>HalalChain™</strong>.
          </p>
          <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/50 text-xs text-slate-600">
            <strong>Scope of Review:</strong> {project.certificateType} ({project.category}) on {project.blockchain}.
          </div>
          <p className="text-[11px] text-slate-400 italic leading-normal">
            This certifies compliance with classical Islamic transaction rules (Fiqh al-Muamalat), free of Riba (Usury), Gharar (Ambiguity), and Maysir (Gambling).
          </p>
        </div>

        {/* Arabic (RTL) */}
        <div className="space-y-3 text-right" dir="rtl">
          <p className="text-slate-500 font-medium text-xs">تشهد منصة حلال تشين™ بأن المشروع المذكور أدناه:</p>
          <div className="py-1">
            <span className="text-xl font-bold text-slate-900 block">{project.name}</span>
            <span className="font-mono text-xs text-emerald-600 font-bold">رمز التوكن: {project.tokenTicker}</span>
          </div>
          <p className="text-slate-600 text-xs">
            قد خضع لعمليات فحص وتقييم فقهي وبرمجي متكاملة من قبل اللجنة الشرعية والتقنية المستقلة لـ{" "}
            <strong>حلال تشين™</strong>.
          </p>
          <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/50 text-xs text-slate-600">
            <strong>نطاق المراجعة:</strong> {project.certificateTypeAr} ({project.categoryAr}) على شبكة {project.blockchain}.
          </div>
          <p className="text-[11px] text-slate-400 italic leading-normal">
            تؤكد هذه الشهادة التوافق التام مع ضوابط فقه المعاملات المالية الإسلامية والخلو من الربا والغرر والميسر.
          </p>
        </div>
      </div>

      {/* Meta specifications (Dates, Ratings, Governance) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60">
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Issue Date / الإصدار</div>
          <div className="font-mono text-xs font-bold text-slate-700 mt-0.5">{project.issueDate}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Expiry Date / الانتهاء</div>
          <div className="font-mono text-xs font-bold text-slate-700 mt-0.5">{project.expiryDate}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Risk Rating / المخاطر</div>
          <div className="font-mono text-xs font-bold text-amber-600 mt-0.5">
            {project.riskRating.toUpperCase()} ({isRtl ? project.riskRatingAr : project.riskRating})
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Governance / الحوكمة</div>
          <div className="font-mono text-xs font-bold text-emerald-600 mt-0.5">
            SCORE: {project.governanceScore}/100
          </div>
        </div>
      </div>

      {/* Resident Scholar Summary Opinion */}
      <div className="mb-8 border border-amber-500/15 rounded-2xl p-4.5 bg-amber-50/30 text-xs">
        <div className="flex items-center gap-1.5 mb-1 text-amber-800 font-bold uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Resident Sharia Scholar Council Opinion / <span className="tracking-normal normal-case">رأي الهيئة الشرعية</span></span>
        </div>
        <p className="text-slate-700 italic leading-relaxed mb-2">{project.residentScholarOpinion}</p>
        <div className="w-full h-px bg-amber-500/10 my-2" />
        <p className="text-slate-700 italic leading-relaxed text-right" dir="rtl">
          {project.residentScholarOpinionAr}
        </p>
      </div>

      {/* Signatures & Verification QR Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-100">
        {/* Signatures */}
        <div className="flex items-center gap-6 w-full sm:w-auto">
          <div className="text-center">
            <div className="font-serif italic text-sm text-slate-500 h-8 flex items-end justify-center">
              Dr. Salim Al-Othman
            </div>
            <div className="w-28 h-px bg-slate-200 my-1 mx-auto" />
            <div className="text-[9px] font-mono text-slate-400">CHAIRMAN, SHARIA BOARD</div>
            <div className="text-[9px] font-mono text-slate-400">رئيس المجلس الشرعي</div>
          </div>
          <div className="text-center">
            <div className="font-serif italic text-sm text-slate-500 h-8 flex items-end justify-center">
              Prof. Ibrahim Vance
            </div>
            <div className="w-28 h-px bg-slate-200 my-1 mx-auto" />
            <div className="text-[9px] font-mono text-slate-400">HEAD OF ON-CHAIN AUDIT</div>
            <div className="text-[9px] font-mono text-slate-400">رئيس التدقيق البرمجي</div>
          </div>
        </div>

        {/* Dynamic Verification QR */}
        <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200 shrink-0">
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-1 shadow-inner relative">
            <QrCode className="w-full h-full text-slate-800" />
            <div className="absolute inset-0 m-auto w-4 h-4 bg-emerald-950 border border-amber-500 rounded flex items-center justify-center text-[6px] text-[#d4af37] font-bold">
              HC
            </div>
          </div>
          <div className="text-[9px] leading-tight text-slate-400 font-mono">
            <div className="font-bold text-slate-500">SECURED VERIFICATION</div>
            <div>Scan or visit:</div>
            <div className="text-emerald-700 font-bold break-all">halalchain.com/verify</div>
            <div>ID: {project.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
