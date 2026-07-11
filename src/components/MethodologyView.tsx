/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  FileText, 
  Briefcase, 
  DollarSign, 
  Coins, 
  Scale, 
  Code, 
  CheckSquare, 
  Users, 
  Award, 
  Activity, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight,
  ArrowDown
} from "lucide-react";

interface MethodologyViewProps {
  isRtl?: boolean;
}

interface MethodologyStep {
  id: string;
  num: number;
  title: string;
  titleAr: string;
  icon: React.ReactNode;
  desc: string;
  descAr: string;
  details: string;
  detailsAr: string;
  aaoifiRef: string;
  aaoifiRefAr: string;
}

export default function MethodologyView({ isRtl = false }: MethodologyViewProps) {
  const [selectedStepId, setSelectedStepId] = useState("whitepaper");

  const steps: MethodologyStep[] = [
    {
      id: "whitepaper",
      num: 1,
      title: "Whitepaper Analysis",
      titleAr: "تحليل الورقة البيضاء",
      icon: <FileText className="w-5 h-5 text-amber-500" />,
      desc: "Comprehensive evaluation of the core technical whitepaper and academic proposals.",
      descAr: "تقييم شامل للورقة البيضاء الفنية الأساسية والمقترحات الأكاديمية للمشروع.",
      details: "Our compliance team parses the primary documentation to establish the explicit mission, scope, and technical infrastructure proposed. Any presence of deceptive terminology or unclear product structures is flagged for structural revision.",
      detailsAr: "يقوم فريق التوافق لدينا بتحليل الوثائق الأساسية لتحديد المهمة الصريحة والنطاق والبنية التحتية التقنية المقترحة. ويتم تصنيف أي مصطلحات مضللة أو هياكل غير واضحة للتعديل الهيكلي.",
      aaoifiRef: "AAOIFI Sharia Standard No. 21 (Financial Paper Rules)",
      aaoifiRefAr: "معيار الأيوفي الشرعي رقم 21 (الأوراق المالية)"
    },
    {
      id: "business-model",
      num: 2,
      title: "Business Model Review",
      titleAr: "مراجعة نموذج العمل",
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      desc: "Reviewing company core operations, revenue-sharing models and customer targets.",
      descAr: "مراجعة العمليات الأساسية للشركة ونماذج تقاسم الأرباح والفئات المستهدفة.",
      details: "We map out how the platform conducts business. The core model must represent ethical utilities. Applications offering services in gambling, dynamic synthetic options trading, interest-bearing lending, or ungrounded virtual collectibles are classified as non-compliant.",
      detailsAr: "نحن نحدد كيفية قيام المنصة بأعمالها. يجب أن يمثل النموذج الأساسي منفعة أخلاقية حقيقية. وتصنف التطبيقات التي تقدم خدمات القمار أو الخيارات الاصطناعية أو الإقراض الربوي كغير متوافقة.",
      aaoifiRef: "AAOIFI Standard on Core Trading Ethics (No. 3)",
      aaoifiRefAr: "معيار الأيوفي الشرعي رقم 3 (المتاجرة في الأعيان والسلع)"
    },
    {
      id: "revenue-source",
      num: 3,
      title: "Revenue Source Analysis",
      titleAr: "تحليل مصادر الإيرادات",
      icon: <DollarSign className="w-5 h-5 text-emerald-700" />,
      desc: "Forensic evaluation of corporate cash flow and liquidity pool yields.",
      descAr: "تقييم جنائي تفصيلي للتدفقات النقدية للشركة وعوائد مجمعات السيولة.",
      details: "Every dollar processed must represent halal transactions. We audit on-chain protocols to ensure there is no hidden blending of interest-bearing deposits, liquid stake derivatives, or high-risk arbitrage margins feeding platform accounts.",
      detailsAr: "يجب أن يمثل كل دولار تتم معالجته معاملات حلالاً. نحن ندقق البروتوكولات على السلسلة لضمان عدم وجود أي دمج خفي للودائع ذات الفائدة أو المشتقات عالية المخاطر في حسابات المنصة.",
      aaoifiRef: "AAOIFI Standard No. 6 (Conversion of Conventional Banks)",
      aaoifiRefAr: "معيار الأيوفي الشرعي رقم 6 (تحول البنك التقليدي إلى إسلامي)"
    },
    {
      id: "token-utility",
      num: 4,
      title: "Token Utility Review",
      titleAr: "مراجعة منافع التوكن",
      icon: <Coins className="w-5 h-5 text-amber-500" />,
      desc: "Analyzing whether the token operates as a true utility utility or synthetic debt.",
      descAr: "تحليل ما إذا كان الرمز يعمل كأداة نفعية حقيقية أم كأداة دين اصطناعية.",
      details: "The token must act as a functional, non-speculative digital key (Ujrah) for platform resources, or represent fractional ownership of physical assets (Musharakah/Sukuk). Standard options structures and synthetic pegs are strictly forbidden.",
      detailsAr: "يجب أن يعمل الرمز كمفتاح رقمي وظيفي غير مضاربي (أجرة) لموارد المنصة، أو يمثل ملكية مجزأة لأصول مادية (مشاركة/صكوك). ويُحظر تماماً تصميم عقود الخيارات الاصطناعية.",
      aaoifiRef: "AAOIFI Standard No. 59 (Sale of Rights & Digital Assets)",
      aaoifiRefAr: "معيار الأيوفي الشرعي رقم 59 (بيع الحقوق والرموز الرقمية)"
    },
    {
      id: "governance",
      num: 5,
      title: "Governance Review",
      titleAr: "مراجعة نظام الحوكمة",
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
      desc: "Inspecting power balances and admin-key multi-signature controls.",
      descAr: "فحص موازين القوى وتأثير تواقيع المديرين المتعددة على الحوكمة.",
      details: "We review code parameters ensuring that the project does not maintain centralized keys capable of unilaterally stealing reserves, altering minting contracts arbitrarily, or freezing balances without cryptographic consensus.",
      detailsAr: "نحن نراجع محددات الكود لضمان أن المشروع لا يحتفظ بمفاتيح مركزية قادرة على مصادرة الاحتياطيات أو تعديل عقود الصك بشكل تعسفي أو تجميد الأرصدة دون إجماع مشفر.",
      aaoifiRef: "AAOIFI Governance Standard No. 1 (Corporate Governance Rules)",
      aaoifiRefAr: "معايير الحوكمة للأيوفي رقم 1 (الحوكمة في المؤسسات)"
    },
    {
      id: "smart-contract",
      num: 6,
      title: "Smart Contract Analysis",
      titleAr: "تحليل الكود البرمجي",
      icon: <Code className="w-5 h-5 text-emerald-700" />,
      desc: "Line-by-line examination of smart contract variables and mathematics.",
      descAr: "فحص سطري دقيق لمتغيرات العقود الذكية والعمليات الرياضية.",
      details: "Our engineers analyze the compiled Solidity or Rust bytecode. We ensure all arithmetic pools prevent integer overflows and guarantee that all transaction fee protocols operate transparently without hidden predatory multipliers.",
      detailsAr: "يحلل مهندسونا الأكواد البرمجية لضمان أن جميع العمليات الحسابية في أحواض السيولة تمنع تضخم الكود، وضمان أن جميع بروتوكولات رسوم المعاملات تعمل بشفافية دون مضاعفات خفية.",
      aaoifiRef: "AAOIFI Sharia Rules on Algorithmic Contracts",
      aaoifiRefAr: "الضوابط الشرعية للأيوفي المتعلقة بالعقود الخوارزمية"
    },
    {
      id: "technical-audit",
      num: 7,
      title: "Technical Security Audit",
      titleAr: "التدقيق الأمني الفني",
      icon: <CheckSquare className="w-5 h-5 text-amber-500" />,
      desc: "Simulating hacks and penetration routes on live test networks.",
      descAr: "محاكاة هجمات الاختراق ومنافذ التسلل على شبكات اختبارية حية.",
      details: "Protecting user capital is a theological priority. We perform intensive vulnerability testing to confirm that the blockchain platform is highly secure against reentrancy attacks, flash loan drains, and DNS frontend hijacking.",
      detailsAr: "إن حماية أموال وممتلكات المستخدمين هي أولوية شرعية كبرى. نحن نقوم باختبارات ثغرات مكثفة لتأكيد حصانة منصة البلوكشين ضد هجمات القروض السريعة وحقن الواجهات.",
      aaoifiRef: "Maqasid al-Sharia Pillar: Wealth Preservation (Hifz al-Mal)",
      aaoifiRefAr: "مقاصد الشريعة الإسلامية: حفظ المال وصيانته"
    },
    {
      id: "scholar-review",
      num: 8,
      title: "Scholar Legal Review",
      titleAr: "المراجعة الفقهية للعلماء",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      desc: "Classical Islamic legal evaluation conducted by resident Sharia experts.",
      descAr: "التقييم الفقهي الإسلامي الكلاسيكي بواسطة نخبة من علماء الشريعة.",
      details: "All technical audit outputs and structural reports are presented directly to our distinguished Sharia scholars. They perform detailed legal (Fiqh) deduction based on the dynamic parameters of the code, rather than static templates.",
      detailsAr: "يتم تقديم جميع مخرجات التدقيق الفني والتقارير الهيكلية مباشرة إلى كبار فقهاء الشريعة لدينا. ويقومون بدراسة فقهية دقيقة للأحكام بناءً على المتغيرات الحقيقية للكود.",
      aaoifiRef: "AAOIFI Sharia Board Appointment Bylaws (No. 1)",
      aaoifiRefAr: "لوائح الأيوفي لتعيين وهيئات الرقابة الشرعية رقم 1"
    },
    {
      id: "committee",
      num: 9,
      title: "Certification Committee",
      titleAr: "لجنة التصديق واتخاذ القرار",
      icon: <Award className="w-5 h-5 text-emerald-700" />,
      desc: "Final collegial voting process on-chain to approve the project's license.",
      descAr: "عملية التصويت الجماعي النهائي لمنح رخصة التوافق للمشروع.",
      details: "Our technical and scholar boards hold a joint session to review fixes. If all major and minor compliance updates are implemented, a formal decision is approved, generating a cryptographically secured bilingual license.",
      detailsAr: "تعقد لجاننا الفنية والشرعية جلسة مشتركة لمراجعة الإصلاحات المنفذة. وفي حال معالجة الملاحظات، يتم اعتماد القرار وإصدار رخصة التوافق الرقمية المشفرة.",
      aaoifiRef: "AAOIFI Standard No. 12 (Sharia Audit and Issuance)",
      aaoifiRefAr: "معيار الأيوفي رقم 12 (إصدار ومطابقة الفتاوى الشرعية)"
    },
    {
      id: "monitoring",
      num: 10,
      title: "Annual Monitoring",
      titleAr: "المراقبة والتدقيق السنوي",
      icon: <Activity className="w-5 h-5 text-amber-500" />,
      desc: "Quarterly delta check audits to detect non-compliant code adjustments.",
      descAr: "تدقيق دوري ربع سنوي للكشف عن أي تعديلات برمجية غير متوافقة.",
      details: "Our keepers continuously track the project's smart contracts. If administrative parameters are altered in a way that introduces Riba or Gharar, the project's license is instantly set to 'Under Review' or 'Suspended'.",
      detailsAr: "تقوم خوادمنا البرمجية بتتبع عقود المشروع باستمرار. وإذا تم تغيير أي محددات إدارية بشكل يدخل شبهة الربا أو الغرر، يتم تعليق أو تعديل حالة رخصة المشروع فوراً.",
      aaoifiRef: "AAOIFI Sharia Governance Standard No. 2 (Continuous Audits)",
      aaoifiRefAr: "معايير الحوكمة الشرعية للأيوفي رقم 2 (التدقيق المستمر)"
    }
  ];

  const activeStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  return (
    <div id="halal-methodology-root" className="w-full space-y-12">
      
      {/* AAOIFI intro card */}
      <div className={`bg-gradient-to-tr from-emerald-950 to-emerald-900 border border-[#d4af37]/30 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden ${isRtl ? "text-right" : "text-left"}`}>
        {/* Decorative corner vector */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full uppercase">
            {isRtl ? "مطابقة المعايير الدولية للأيوفي" : "AAOIFI-Aligned Global Standards"}
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
            {isRtl ? "إطار عمل حلال تشين لشفافية التقييم" : "HalalChain™ Rigorous Assessment Methodology"}
          </h3>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            {isRtl 
              ? "نحن لا نكتفي بالفحص السطحي. يعتمد نموذجنا على الدمج الشامل للضوابط الفقهية الكلاسيكية الصادرة عن هيئة المحاسبة والمراجعة للمؤسسات المالية الإسلامية (AAOIFI) مع تكنولوجيا فحص الكود البرمجي على السلسلة لمعرفة دقة المعاملات."
              : "We do not rely on static templates. Our evaluation engine integrates classic transaction laws codified by the Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI) with cutting-edge smart contract security analysis."}
          </p>
        </div>
      </div>

      {/* Interactive Flowchart Section */}
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
            {isRtl ? "المخطط التفاعلي لخطوات التدقيق" : "Bilingual Interactive Audit Flowchart"}
          </span>
          <h3 className="font-display font-bold text-2xl text-gray-900 tracking-tight mt-1">
            {isRtl ? "رحلة التدقيق الفني والشرعي المتكامل" : "Our End-to-End Compliance Pipeline"}
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-md mx-auto">
            {isRtl ? "اضغط على أي مرحلة لعرض التفاصيل الفقهية الفنية ومعيار الأيوفي المطابق." : "Click on any stage in the flowchart to view deep legal criteria and matching AAOIFI standard."}
          </p>
        </div>

        {/* The Grid Flowchart */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto pt-6">
          {steps.map((step, idx) => {
            const isSelected = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStepId(step.id)}
                className={`relative p-4 rounded-3xl border text-center transition-all flex flex-col items-center justify-center gap-2.5 ${
                  isSelected
                    ? "bg-[#022C22] border-[#d4af37] text-white shadow-xl shadow-emerald-950/20 scale-[1.03] z-10"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-sm"
                }`}
              >
                {/* Step badge */}
                <span className={`absolute top-2 left-2 font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-[#d4af37] text-[#022C22]" : "bg-slate-100 text-slate-400"
                }`}>
                  STEP {step.num}
                </span>

                <div className={`p-2.5 rounded-2xl mt-2 ${isSelected ? "bg-[#064E3B] text-[#d4af37]" : "bg-slate-50"}`}>
                  {step.icon}
                </div>

                <span className="font-display font-bold text-xs tracking-tight leading-tight block">
                  {isRtl ? step.titleAr : step.title}
                </span>

                {/* Micro indicator line for connecting */}
                {idx < steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-px border-t border-dashed ${
                    isSelected ? "border-[#d4af37]" : "border-slate-200"
                  } z-0 pointer-events-none`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Details Workspace panel */}
        <div className={`bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/50 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-200 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                {activeStep.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#d4af37] block">
                  PHASE 0{activeStep.num} / 10
                </span>
                <h4 className="font-display font-bold text-lg text-slate-900 block tracking-tight">
                  {isRtl ? activeStep.titleAr : activeStep.title}
                </h4>
              </div>
            </div>

            {/* AAOIFI Reference Badge */}
            <div className={`p-2 bg-amber-50 rounded-xl border border-amber-200/50 self-start sm:self-auto text-center font-mono`}>
              <span className="text-[9px] font-bold text-amber-700 block uppercase">
                {isRtl ? "معيار الأيوفي المرجعي" : "AAOIFI Reference"}
              </span>
              <span className="text-[10px] font-bold text-amber-900 block mt-0.5">
                {isRtl ? activeStep.aaoifiRefAr : activeStep.aaoifiRef}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-6 text-sm leading-relaxed">
            <div>
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {isRtl ? "تفاصيل آلية الفحص" : "Evaluation Scope Summary"}
              </h5>
              <p className="text-slate-600 font-medium">
                {isRtl ? activeStep.descAr : activeStep.desc}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {isRtl ? "الضوابط الفقهية والتقنية التفصيلية" : "Deep Technical & Fiqh Specifications"}
              </h5>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {isRtl ? activeStep.detailsAr : activeStep.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
