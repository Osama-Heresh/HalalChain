/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { findCertificate, RegistryProject } from "../data/registry";
import CertificatePreview from "./CertificatePreview";
import { ShieldCheck, Search, QrCode, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, FileCheck, X } from "lucide-react";

interface VerificationViewProps {
  isRtl?: boolean;
}

export default function VerificationView({ isRtl = false }: VerificationViewProps) {
  const [certInput, setCertInput] = useState("");
  const [verifiedProject, setVerifiedProject] = useState<RegistryProject | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Trigger search logic
  const handleVerify = (code: string) => {
    const project = findCertificate(code);
    if (project) {
      setVerifiedProject(project);
    } else {
      setVerifiedProject(null);
    }
    setHasSearched(true);
  };

  const handleQuickVerifySample = (code: string) => {
    setCertInput(code);
    handleVerify(code);
  };

  // Mock scan QR trigger
  const handleScanQR = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Automatically load Khaleej Stable Coin
      setCertInput("HC-2025-7711");
      handleVerify("HC-2025-7711");
    }, 1200);
  };

  return (
    <div id="halal-verification-root" className="max-w-4xl mx-auto">
      {/* Verification Card */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/50 mb-8 text-center">
        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <ShieldCheck className="w-6 h-6 text-[#064E3B]" />
        </div>
        <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
          {isRtl ? "نظام التحقق الفوري من الشهادات" : "Instant Certificate Verification"}
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
          {isRtl
            ? "أدخل الرقم التسلسلي المطبوع على الشهادة أو امسح رمز الاستجابة السريع لمطابقة البيانات مباشرة على سجلاتنا المشفرة."
            : "Enter the serial license number printed on the certificate or scan the QR code to verify compliance authenticity directly against our secure archives."}
        </p>

        {/* Action input box */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className={`absolute inset-y-0 ${isRtl ? "right-4.5" : "left-4.5"} flex items-center pointer-events-none text-slate-400`}>
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder={isRtl ? "مثال: HC-2025-8902" : "Example: HC-2025-8902"}
                className={`w-full bg-slate-50 border border-slate-200 rounded-full py-3.5 ${isRtl ? "pr-11 pl-4 text-right" : "pl-11 pr-4 text-left"} text-sm focus:outline-none focus:ring-1 focus:ring-[#064E3B] focus:border-[#064E3B] transition-colors`}
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerify(certInput)}
              />
            </div>
            <button
              onClick={() => handleVerify(certInput)}
              className="px-7 py-3.5 bg-[#064E3B] text-white text-sm font-bold rounded-full hover:bg-[#022C22] transition-colors shrink-0 shadow-md shadow-emerald-950/15"
            >
              {isRtl ? "تحقق الآن" : "Verify License"}
            </button>
            <button
              onClick={handleScanQR}
              disabled={isScanning}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 bg-slate-100 hover:bg-slate-200/80 rounded-full text-sm font-bold text-slate-700 transition-colors"
            >
              <QrCode className="w-4 h-4 text-slate-500" />
              <span>{isScanning ? (isRtl ? "جاري المسح..." : "Scanning...") : (isRtl ? "مسح الرمز" : "Scan QR")}</span>
            </button>
          </div>
        </div>

        {/* Scan effect placeholder */}
        {isScanning && (
          <div className="mt-6 p-4 bg-slate-50 border border-slate-200/60 rounded-3xl animate-pulse flex flex-col items-center justify-center max-w-sm mx-auto">
            <div className="relative w-24 h-24 border-2 border-emerald-500/40 rounded-2xl flex items-center justify-center overflow-hidden bg-white">
              <QrCode className="w-16 h-16 text-emerald-800" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500 animate-[bounce_2s_infinite]" />
            </div>
            <span className="text-xs font-mono text-emerald-800 mt-3 font-semibold">
              {isRtl ? "جاري محاكاة مسح الكاميرا للرمز..." : "Simulating camera QR capture..."}
            </span>
          </div>
        )}

        {/* Quick-test helper buttons */}
        <div className="mt-6 pt-6 border-t border-slate-100 max-w-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <span className="text-slate-400 font-medium">{isRtl ? "عينات سريعة للتجربة:" : "Test quick verification examples:"}</span>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => handleQuickVerifySample("HC-2025-8902")}
              className="px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 rounded-full font-mono font-bold transition-all text-slate-600"
            >
              Aura Ledger (Valid)
            </button>
            <button
              onClick={() => handleQuickVerifySample("HC-2025-7711")}
              className="px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 rounded-full font-mono font-bold transition-all text-slate-600"
            >
              Khaleej Gold (Valid)
            </button>
            <button
              onClick={() => handleQuickVerifySample("HC-2024-0019")}
              className="px-3 py-1.5 bg-slate-50 hover:bg-rose-50 hover:text-rose-700 border border-slate-200 hover:border-rose-200 rounded-full font-mono font-bold transition-all text-slate-600"
            >
              Apex interest (Suspended)
            </button>
          </div>
        </div>
      </div>

      {/* Verification Results Block */}
      {hasSearched && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {verifiedProject ? (
            <>
              {/* Validation Checklist / Security diagnostics panel */}
              <div className={`bg-emerald-50/20 border border-emerald-500/10 rounded-3xl p-6 md:p-8 ${isRtl ? "text-right" : "text-left"}`}>
                <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-emerald-500/10 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900">
                        {isRtl ? "الترخيص مطابق ونشط" : "Authentic Verified License"}
                      </h3>
                      <p className="text-xs text-emerald-700 font-medium">
                        {isRtl ? "تمت مطابقة التوقيع الرقمي بنجاح" : "Secured Cryptographic Signature Match Complete"}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#064E3B] text-white font-mono font-extrabold text-xs px-4 py-2.5 rounded-full text-center self-start md:self-auto tracking-widest shadow-md">
                    {verifiedProject.status.toUpperCase()}
                  </div>
                </div>

                {/* Audit Checklist Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-100/40 hover:border-emerald-500/20 transition-colors flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{isRtl ? "سلامة الكود البرمجي" : "Code Integrity Audit"}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {isRtl ? "تم تدقيق كود العقد الذكي سطراً بسطر بنجاح دون وجود ثغرات إدارية." : "Lines of smart contract files matched precisely to secure verified deployment state."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-100/40 hover:border-emerald-500/20 transition-colors flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{isRtl ? "مطابقة نموذج التوكن الشرعي" : "Ethical Tokenomics Match"}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {isRtl ? "تم فحص المعروض والتوزيع لضمان خلوه من شبهات الربا والغرر الهرمي." : "Vesting schedule and allocation mechanisms conform strictly to stable growth standards."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-100/40 hover:border-emerald-500/20 transition-colors flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{isRtl ? "قرار الهيئة الفقهية" : "Scholarly Council Consent"}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {isRtl ? "توقيع معتمد ورأي فقهي منشور بفتوى صريحة من مجلس كبار العلماء." : "Legal Fiqh review signed by residents, declaring the project as ethically sound for trading."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-100/40 hover:border-emerald-500/20 transition-colors flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{isRtl ? "المراقبة والتدقيق الفعال" : "Quarterly Monitoring Active"}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {isRtl ? "تتبع وحساب التغييرات على السلسلة مستمر بشكل آلي دون انقطاع." : "Keepers actively watch admin key mutations to maintain the certified compliance status."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Certificate itself rendered */}
              <CertificatePreview project={verifiedProject} isRtl={isRtl} />
            </>
          ) : (
            /* Warning Screen for non-verified or suspended */
            <div className={`bg-rose-50 border border-rose-100 rounded-3xl p-6 md:p-8 ${isRtl ? "text-right" : "text-left"}`}>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-xl text-rose-950">
                    {isRtl ? "لم يتم العثور على شهادة معتمدة بهذا الرمز" : "Certificate Verification Failed"}
                  </h3>
                  <p className="text-sm text-rose-700">
                    {isRtl
                      ? "رقم الترخيص المدخل لا يطابق أي سجلات ترخيص معتمدة ونشطة في قاعدة بيانات حلال تشين™ الحالية. قد يكون الترخيص مزيفاً، موقوفاً، أو منتهي الصلاحية."
                      : "The license number entered does not match any active, validated certificates in the official HalalChain™ database. It may be expired, revoked, or counterfeited."}
                  </p>
                  <div className="pt-2 text-xs text-rose-800 font-semibold space-y-1">
                    <div>{isRtl ? "خطوات المقترحة للحل:" : "Recommended Resolution Steps:"}</div>
                    <ul className="list-disc pl-5 rtl:pr-5 rtl:list-inside space-y-1 font-normal text-rose-600 mt-2">
                      <li>{isRtl ? "التحقق من كتابة الرمز بشكل صحيح (مثال: HC-2025-8902)" : "Verify spelling and case sensitivity of the certificate serial key (e.g., HC-2025-8902)."}</li>
                      <li>{isRtl ? "الاتصال بقسم الدعم والتحقق للتأكد من حالة المشروع" : "Contact the Project's administrative team to confirm their license status."}</li>
                      <li>{isRtl ? "الإبلاغ عن مشروع ينتحل ختم حلال تشين™" : "Report a counterfeit or unauthorized website abusing the HalalChain™ safety seal."}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
