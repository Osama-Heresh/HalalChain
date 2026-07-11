/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { servicesData, ServiceDetail } from "../data/translations";
import { 
  FileCheck2, 
  ShieldAlert, 
  Code, 
  LineChart, 
  Globe, 
  Lock, 
  Clock, 
  FileCode2, 
  CheckCircle, 
  ArrowRight, 
  Coins, 
  HelpCircle,
  Play,
  Layers
} from "lucide-react";

interface ServicesViewProps {
  isRtl?: boolean;
}

export default function ServicesView({ isRtl = false }: ServicesViewProps) {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  // Helper to map service ID to custom Lucide icons
  const getServiceIcon = (id: string, className: string) => {
    switch (id) {
      case "compliance-cert":
        return <FileCheck2 className={className} />;
      case "governance-cert":
        return <Globe className={className} />;
      case "smart-contract-audit":
        return <Code className={className} />;
      case "tokenomics-assessment":
        return <Coins className={className} />;
      case "transparency-rating":
        return <LineChart className={className} />;
      case "security-assessment":
        return <Lock className={className} />;
      case "annual-monitoring":
        return <Clock className={className} />;
      case "script-verification":
        return <FileCode2 className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div id="halal-services-root" className="w-full">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${isRtl ? "text-right" : "text-left"}`}>
        
        {/* Left Side: Services Navigation Menu */}
        <div className="lg:col-span-4 space-y-2">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
              {isRtl ? "حقيبة الخدمات والتدقيق" : "Our Service Catalog"}
            </span>
            <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
              {isRtl ? "اختر نوع الخدمة المطلوبة" : "Select Certification Class"}
            </h3>
          </div>

          <div className="space-y-2 bg-white/60 backdrop-blur-md p-2.5 rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100/40">
            {servicesData.map((service) => {
               const isActive = service.id === activeServiceId;
               return (
                 <button
                   key={service.id}
                   onClick={() => setActiveServiceId(service.id)}
                   className={`w-full flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all ${
                     isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
                   } ${
                     isActive
                       ? "bg-[#064E3B] text-white shadow-lg shadow-emerald-950/15 border-l-4 border-[#d4af37]"
                       : "hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-transparent"
                   }`}
                 >
                   <div className={`p-2 rounded-xl shrink-0 ${isActive ? "bg-[#022C22] text-[#d4af37]" : "bg-slate-100 text-slate-500"}`}>
                     {getServiceIcon(service.id, "w-4 h-4")}
                   </div>
                   <div className="flex-1 min-w-0">
                     <span className="font-display font-semibold text-xs md:text-sm block truncate tracking-tight">
                       {isRtl ? service.titleAr : service.title}
                     </span>
                     <span className={`text-[10px] block mt-0.5 ${isActive ? "text-emerald-300" : "text-slate-400 font-mono"}`}>
                       {isRtl ? service.timelineAr : service.timeline}
                     </span>
                   </div>
                 </button>
               );
            })}
          </div>
        </div>

        {/* Right Side: Service Details Workspace */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/50">
          {/* Header Title of Active Service */}
          <div className="pb-6 border-b border-gray-50">
            <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#d4af37] mb-2 uppercase ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              {getServiceIcon(activeService.id, "w-4 h-4 text-emerald-700")}
              <span>{isRtl ? "تصنيف معتمد لـ حلال تشين" : "HalalChain™ Certified Class"}</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 tracking-tight leading-tight">
              {isRtl ? activeService.titleAr : activeService.title}
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-4 leading-relaxed">
              {isRtl ? activeService.descriptionAr : activeService.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="py-6 border-b border-gray-50">
            <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wider mb-4">
              {isRtl ? "المزايا والفوائد الإستراتيجية" : "Strategic Benefits"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {(isRtl ? activeService.benefitsAr : activeService.benefits).map((benefit, i) => (
                <div key={i} className={`flex gap-2.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/50 hover:border-emerald-500/20 transition-colors ${isRtl ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-normal font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline Steps */}
          <div className="py-6 border-b border-gray-50">
            <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wider mb-4">
              {isRtl ? "منهجية وخطوات التقييم" : "Evaluation Process"}
            </h4>
            <div className="space-y-4">
              {(isRtl ? activeService.processAr : activeService.process).map((step, i) => (
                <div key={i} className={`flex gap-4 items-start ${isRtl ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs md:text-sm font-semibold text-slate-800">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Card */}
          <div className="py-6 border-b border-gray-50">
            <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wider mb-4">
              {isRtl ? "المخرجات والملفات المسلمة" : "Service Deliverables"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isRtl ? activeService.deliverablesAr : activeService.deliverables).map((deliv, i) => (
                <div key={i} className={`flex items-center gap-2 text-xs text-gray-600 font-medium ${isRtl ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta specs (Pricing, Timeline) */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Timeline */}
            <div className="bg-amber-50/20 border border-amber-500/10 p-4 rounded-xl flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div className={isRtl ? "text-right" : "text-left"}>
                <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block">{isRtl ? "مدة الإنجاز والتدقيق" : "Audit Timeline"}</span>
                <span className="text-sm font-bold text-gray-900 mt-0.5 block">{isRtl ? activeService.timelineAr : activeService.timeline}</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-emerald-50/20 border border-emerald-500/10 p-4 rounded-xl flex items-center gap-3">
              <Coins className="w-5 h-5 text-emerald-700 shrink-0" />
              <div className={isRtl ? "text-right" : "text-left"}>
                <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block">{isRtl ? "رسوم الخدمة" : "Service Pricing"}</span>
                <span className="text-sm font-bold text-emerald-800 mt-0.5 block">{isRtl ? activeService.pricingAr : activeService.pricing}</span>
              </div>
            </div>
          </div>

          {/* Service FAQ */}
          <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
            <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wider">
              {isRtl ? "أسئلة شائعة حول الخدمة" : "Service FAQ"}
            </h4>
            <div className="space-y-4">
              {activeService.faq.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className={`flex gap-2 font-semibold text-xs md:text-sm text-gray-900 mb-1.5 ${isRtl ? "flex-row-reverse text-right" : "flex-row"}`}>
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? faq.qAr : faq.q}</span>
                  </div>
                  <p className={`text-xs text-gray-500 leading-relaxed pl-6 ${isRtl ? "pr-6 pl-0 text-right" : "pl-6 text-left"}`}>
                    {isRtl ? faq.aAr : faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
