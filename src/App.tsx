/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import NetworkBg from "./components/NetworkBg";
import DashboardPreview from "./components/DashboardPreview";
import ServicesView from "./components/ServicesView";
import MethodologyView from "./components/MethodologyView";
import RegistryView from "./components/RegistryView";
import VerificationView from "./components/VerificationView";
import { blogPosts, glossaryTerms, faqItems, BlogPost } from "./data/resources";
import { translations as generalTranslations } from "./data/translations";
import { 
  Menu, 
  X, 
  ShieldCheck, 
  Award, 
  Activity, 
  BookOpen, 
  Scale, 
  Users, 
  Check, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  FileText, 
  Coins, 
  Lock, 
  Clock, 
  LineChart, 
  HelpCircle,
  TrendingUp,
  Search,
  ExternalLink,
  Briefcase
} from "lucide-react";

// Types for Team Members
interface TeamMember {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio: string;
  bioAr: string;
  institution: string;
  institutionAr: string;
}

export default function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Resources Search / Filters state
  const [blogSearch, setBlogSearch] = useState("");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Contact form submission state
  const [contactForm, setContactForm] = useState({ name: "", email: "", company: "", service: "Sharia Compliance Certificate", message: "" });
  const [contactSuccess, setContactSuccess] = useState(false);

  const isRtl = lang === "ar";
  const t = generalTranslations[lang];

  // Dynamic Browser Title and SEO Metadata Update
  useEffect(() => {
    const pageNames: { [key: string]: { en: string; ar: string } } = {
      home: { en: "Where Blockchain Meets Sharia", ar: "حيث تلتقي التقنية بالشريعة" },
      services: { en: "Our Screening Services", ar: "خدمات التدقيق والتصديق" },
      methodology: { en: "AAOIFI Screening Methodology", ar: "منهجية الفحص والمطابقة" },
      registry: { en: "Global Halal Web3 Registry", ar: "السجل الرقمي العالمي الحلال" },
      verify: { en: "Verify Certificate Legitimacy", ar: "التحقق الفوري من التراخيص" },
      pricing: { en: "Enterprise Validation Pricing", ar: "خطط الأسعار ورسوم التدقيق" },
      resources: { en: "Research, Glossary & FAQ", ar: "المدونة والبحوث والقاموس" },
      about: { en: "Independent Advisory Board", ar: "من نحن واستقلاليتنا" },
      contact: { en: "Connect with Compliance Office", ar: "اتصل بمكتب التوافق" },
    };

    const currentMeta = pageNames[activeTab] || pageNames.home;
    const suffix = lang === "en" ? "HalalChain™" : "حلال تشين™";
    document.title = `${currentMeta[lang]} | ${suffix}`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      lang === "en"
        ? "HalalChain is an independent Sharia compliance and certification authority for blockchain networks, tokenomics, and smart contracts."
        : "منصة حلال تشين هي جهة تدقيق ومراقبة شرعية مستقلة تمنح تراخيص التوافق لبروتوكولات البلوكشين والرموز وعقود الويب 3."
    );
  }, [activeTab, lang]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", company: "", service: "Sharia Compliance Certificate", message: "" });
      setContactSuccess(false);
    }, 4000);
  };

  // Filter blog posts based on search and category
  const filteredBlogs = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.titleAr.includes(blogSearch) ||
      post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.excerptAr.includes(blogSearch);

    const postCat = post.category;
    const matchesCategory = selectedBlogCategory === "All" || postCat === selectedBlogCategory;

    return matchesSearch && matchesCategory;
  });

  // Team Council dataset
  const boardMembers: TeamMember[] = [
    {
      name: "Dr. Salim Al-Othman",
      nameAr: "د. سليم العثمان",
      role: "Chairman, Sharia Advisory Council",
      roleAr: "رئيس المجلس الاستشاري الشرعي",
      bio: "Former Professor of Islamic Jurisprudence with 20+ years advising international Islamic investment banks.",
      bioAr: "أستاذ فقه المعاملات المالية المقارن سابقاً ومستشار الهيئات الشرعية للعديد من المصارف الإسلامية الكبرى.",
      institution: "Ph.D. in Islamic Law, Al-Azhar University",
      institutionAr: "دكتوراه في الفقه المقارن، جامعة الأزهر"
    },
    {
      name: "Prof. Ibrahim Vance",
      nameAr: "أ.د. إبراهيم فانس",
      role: "Director of On-Chain Cryptographic Auditing",
      roleAr: "مدير تدقيق التشفير والحلول الرقمية",
      bio: "Leading researcher in zero-knowledge proofs and smart contract formal verification.",
      bioAr: "باحث متخصص في بروتوكولات الخصوصية والتشفير والتحقق البرمجي للعقود الذكية اللامركزية.",
      institution: "Ph.D. in Computer Science, Oxford University",
      institutionAr: "دكتوراه في علوم الحاسب والتشفير، جامعة أكسفورد"
    },
    {
      name: "Sheikh Dr. Tariq Al-Mansoor",
      nameAr: "فضيلة الشيخ د. طارق المنصور",
      role: "Senior Scholar, Islamic Finance and Tokenomics",
      roleAr: "عضو المجلس الشرعي ومستشار التوكن الشرعي",
      bio: "Expert advisor on classical Fiqh al-Muamalat applied to digital commodity exchanges and RWA assets.",
      bioAr: "خبير فقه المعاملات المالية وعضو هيئات الفتوى للأصول الرقمية والسلع المبرمجة وتطبيقات الأيوفي.",
      institution: "Executive Scholar, AAOIFI Standards Council",
      institutionAr: "عضو الهيئة الاستشارية لمعايير الأيوفي (AAOIFI)"
    }
  ];

  return (
    <div
      id="halalchain-main-viewport"
      className="min-h-screen bg-slate-50/60 flex flex-col justify-between font-sans selection:bg-emerald-800 selection:text-white transition-all relative"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Islamic Watermark Star Ornament */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-star-pattern select-none z-0" />

      {/* HEADER NAVBAR */}
      <header
        id="halalchain-primary-header"
        className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-100/40 transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between relative z-10">
          
          {/* Logo Brand lockup */}
          <button onClick={() => setActiveTab("home")} className="focus:outline-none">
            <Logo size="md" isRtl={isRtl} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {[
              { id: "home", label: t.navHome },
              { id: "services", label: t.navServices },
              { id: "methodology", label: t.navMethodology },
              { id: "registry", label: t.navRegistry },
              { id: "verify", label: t.navVerification },
              { id: "pricing", label: t.navPricing },
              { id: "resources", label: t.navBlog },
              { id: "about", label: t.navAbout },
              { id: "contact", label: t.navContact },
            ].map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold tracking-tight transition-all ${
                    isActive
                      ? "text-emerald-900 bg-emerald-50 border border-emerald-100"
                      : "text-slate-600 hover:text-emerald-900 hover:bg-slate-100/50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right side Language Switcher & Call-To-Action */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Bilingual Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-full text-xs font-bold text-slate-700 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Main Primary Action Button */}
            <button
              onClick={() => setActiveTab("contact")}
              className="px-5 py-2.5 bg-[#064E3B] text-white text-xs font-bold rounded-full hover:bg-[#022C22] transition-all shadow-md shadow-emerald-950/15"
            >
              {t.getCertified}
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="p-2 border border-slate-200 bg-white rounded-lg text-xs font-bold text-slate-700 transition-colors"
            >
              {lang === "en" ? "العربية" : "EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-slate-700"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white p-4 space-y-2 animate-in fade-in duration-200">
            {[
              { id: "home", label: t.navHome },
              { id: "services", label: t.navServices },
              { id: "methodology", label: t.navMethodology },
              { id: "registry", label: t.navRegistry },
              { id: "verify", label: t.navVerification },
              { id: "pricing", label: t.navPricing },
              { id: "resources", label: t.navBlog },
              { id: "about", label: t.navAbout },
              { id: "contact", label: t.navContact },
            ].map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full block text-left px-4 py-3 rounded-full text-sm font-semibold ${
                    isRtl ? "text-right" : "text-left"
                  } ${
                    isActive
                      ? "bg-[#064E3B] text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveTab("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center block px-4 py-3 bg-[#064E3B] text-white rounded-full text-sm font-bold shadow-md shadow-emerald-900/10"
              >
                {t.getCertified}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* PRIMARY WORKSPACE */}
      <main id="halalchain-primary-workspace" className="flex-grow">
        
        {/* VIEW: HOME */}
        {activeTab === "home" && (
          <div className="w-full">
            {/* HERO HERO SECTION */}
            <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-white via-slate-50/20 to-white border-b border-slate-100">
              
              {/* Dynamic canvas backdrop */}
              <NetworkBg />

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                
                {/* Premium Golden Announcement Label */}
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-500/10 border border-[#d4af37]/25 rounded-full text-xs font-semibold text-amber-700 tracking-wide animate-fade-in shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{isRtl ? "الهيئة المرجعية المستقلة الأكبر لتصديق بروتوكولات الويب 3" : "The Authority in Independent Web3 Sharia Certification"}</span>
                </div>

                {/* Massive display Typography header */}
                <h1 className="max-w-4xl mx-auto font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-950 leading-tight">
                  {t.heroTitle}
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
                  {t.heroSubtitle}
                </p>

                {/* Action Buttons Row */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 max-w-md mx-auto">
                  <button
                    onClick={() => setActiveTab("contact")}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#064E3B] text-white rounded-full text-sm font-bold hover:bg-[#022C22] transition-all shadow-md shadow-emerald-950/15"
                  >
                    {t.getCertified}
                  </button>
                  <button
                    onClick={() => setActiveTab("verify")}
                    className="w-full sm:w-auto px-7 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    {t.verifyCert}
                  </button>
                  <button
                    onClick={() => setActiveTab("methodology")}
                    className="w-full sm:w-auto px-4 py-3 text-emerald-800 text-sm font-bold hover:underline"
                  >
                    {t.viewMethodology}
                  </button>
                </div>

                {/* Live SaaS Preview embed (The mockup dashboard) */}
                <div className="max-w-5xl mx-auto pt-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-3 font-semibold">
                    {isRtl ? "نظام المراقبة والتحليل الرقمي التابع لـ حلال تشين" : "HalalChain™ Live Telemetry & Compliance Interface Preview"}
                  </span>
                  <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-100/50 bg-white">
                    <DashboardPreview isRtl={isRtl} />
                  </div>
                </div>
              </div>
            </section>

            {/* INDEPENDENCE STATEMENT DISCLAIMER BANNER */}
            <section className="bg-amber-50/10 border-y border-amber-500/10 py-8 relative">
              <div className="max-w-5xl mx-auto px-4 text-center space-y-3 relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                  <span className="px-3 py-1 bg-amber-100/70 border border-amber-200/40 rounded-full">{t.notExchange}</span>
                  <span className="px-3 py-1 bg-amber-100/70 border border-amber-200/40 rounded-full">{t.notInvestment}</span>
                  <span className="px-3 py-1 bg-amber-100/70 border border-amber-200/40 rounded-full">{t.notSeller}</span>
                </div>
                <p className="max-w-3xl mx-auto text-xs text-slate-500 leading-relaxed font-medium pt-1">
                  {t.independentDisclaimer}
                </p>
              </div>
            </section>

            {/* TRUST SECTION BENTO GRID */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                    {isRtl ? "لماذا تختار حلال تشين؟" : "The Core Pillars of Trust"}
                  </span>
                  <h2 className="font-display font-bold text-3xl text-slate-950 tracking-tight">
                    {t.trustTitle}
                  </h2>
                  <p className="max-w-xl mx-auto text-sm text-slate-400">
                    {t.trustSubtitle}
                  </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-5xl mx-auto">
                  <div className="md:col-span-8 bg-slate-50/50 border border-slate-200/60 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all text-left">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <Scale className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-lg text-slate-900">{t.trustIndependentTitle}</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{t.trustIndependentDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-slate-50/50 border border-slate-200/60 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all text-left">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <Lock className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-lg text-slate-900">{t.trustTechTitle}</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{t.trustTechDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-slate-50/50 border border-slate-200/60 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all text-left">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-lg text-slate-900">{t.trustScholarsTitle}</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{t.trustScholarsDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-slate-50/50 border border-slate-200/60 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all text-left">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <BookOpen className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-lg text-slate-900">{t.trustMethodologyTitle}</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{t.trustMethodologyDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-slate-50/50 border border-slate-200/60 p-6 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all text-left">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <Activity className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-lg text-slate-900">{t.trustMonitoringTitle}</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{t.trustMonitoringDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ILLUSTRATED CERTIFICATION PROCESS TIMELINE */}
            <section className="py-20 bg-slate-50/30 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                    {isRtl ? "آلية العمل التفصيلية" : "How Certification Works"}
                  </span>
                  <h2 className="font-display font-bold text-3xl text-slate-950 tracking-tight">
                    {t.procTitle}
                  </h2>
                  <p className="max-w-xl mx-auto text-sm text-slate-400">
                    {t.procSubtitle}
                  </p>
                </div>

                {/* Timeline vertical/horizontal dynamic path */}
                <div className="max-w-4xl mx-auto relative pt-6">
                  {/* Decorative line */}
                  <div className={`hidden md:block absolute top-[100px] bottom-[100px] ${isRtl ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} w-0.5 bg-dashed border-l border-emerald-800/10 z-0`} />

                  <div className="space-y-12">
                    {[
                      { step: t.procStep1, desc: t.procStep1Desc, icon: <FileText className="w-4 h-4 text-[#d4af37]" /> },
                      { step: t.procStep2, desc: t.procStep2Desc, icon: <Briefcase className="w-4 h-4 text-[#064E3B]" /> },
                      { step: t.procStep3, desc: t.procStep3Desc, icon: <Coins className="w-4 h-4 text-[#064E3B]" /> },
                      { step: t.procStep4, desc: t.procStep4Desc, icon: <Lock className="w-4 h-4 text-[#064E3B]" /> },
                      { step: t.procStep5, desc: t.procStep5Desc, icon: <LineChart className="w-4 h-4 text-[#064E3B]" /> },
                      { step: t.procStep6, desc: t.procStep6Desc, icon: <Users className="w-4 h-4 text-[#064E3B]" /> },
                      { step: t.procStep7, desc: t.procStep7Desc, icon: <FileText className="w-4 h-4 text-[#d4af37]" /> },
                      { step: t.procStep8, desc: t.procStep8Desc, icon: <Award className="w-4 h-4 text-[#d4af37]" /> },
                      { step: t.procStep9, desc: t.procStep9Desc, icon: <Activity className="w-4 h-4 text-[#d4af37]" /> },
                    ].map((item, idx) => {
                      const isEven = idx % 2 === 0;
                      return (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-6 ${isRtl ? "md:flex-row-reverse" : ""} ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                          
                          {/* Anchor Node circle */}
                          <div className="absolute top-6 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#d4af37] shadow-md flex items-center justify-center z-10 shrink-0">
                            {item.icon}
                          </div>

                          {/* Content Card */}
                          <div className={`w-full md:w-[45%] bg-white border border-slate-200/80 p-5 rounded-3xl shadow-lg shadow-slate-100/50 text-left ${isRtl ? "text-right" : "text-left"} ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 block">
                              {isRtl ? `المرحلة 0${idx + 1}` : `Phase 0${idx + 1}`}
                            </span>
                            <h4 className="font-display font-bold text-sm text-slate-900 mt-1">{item.step}</h4>
                            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW: SERVICES */}
        {activeTab === "services" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesView isRtl={isRtl} />
          </section>
        )}

        {/* VIEW: METHODOLOGY */}
        {activeTab === "methodology" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MethodologyView isRtl={isRtl} />
          </section>
        )}

        {/* VIEW: REGISTRY */}
        {activeTab === "registry" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegistryView isRtl={isRtl} />
          </section>
        )}

        {/* VIEW: VERIFY */}
        {activeTab === "verify" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VerificationView isRtl={isRtl} />
          </section>
        )}

        {/* VIEW: PRICING */}
        {activeTab === "pricing" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                {isRtl ? "باقات التدقيق والتصديق" : "Enterprise Compliance Rates"}
              </span>
              <h2 className="font-display font-bold text-3xl text-gray-950 tracking-tight">
                {isRtl ? "رسوم مرنة ومبنية على حجم الكود" : "Predictable Pricing for Web3 Ecosystems"}
              </h2>
              <p className="max-w-md mx-auto text-xs text-gray-400">
                {isRtl ? "اختر الخيار المناسب لمشروعك لتبدأ عملية التدقيق الفقهي والتقني الشامل." : "Choose the optimal plan to initiate compliance audits, scholarly reviews, and secure on-chain tracking."}
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
              {/* Plan 1 */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-slate-100/50 flex flex-col justify-between text-left hover:border-emerald-500/20 transition-all">
                <div className={isRtl ? "text-right" : "text-left"}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">{isRtl ? "للمشاريع الفردية" : "TOKEN PROJECTS"}</span>
                  <h3 className="font-display font-bold text-lg text-slate-900 mt-1">Starter Class</h3>
                  <div className="py-4 font-mono">
                    <span className="text-3xl font-bold text-slate-900">$7,500</span>
                    <span className="text-xs text-slate-400"> / {isRtl ? "المشروع" : "audit"}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {isRtl ? "مثالي لمراجعة رموز ERC-20 الفردية، الرموز غير القابلة للاستبدال، أو العقود البسيطة لمرة واحدة." : "Designed for individual smart contracts, standard ERC-20 tokens, or basic fractional property designs."}
                  </p>
                </div>
                <div className="space-y-3.5">
                  <div className="w-full h-px bg-slate-100" />
                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "تدقيق برمجى واحد" : "1 Smart Contract Audit"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "فحص نموذج منفعة التوكن" : "Tokenomics Sharia Screening"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "فتوى شرعية معتمدة" : "Advisory Board Scholar Review"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "أرشفة لمدة سنة في السجل" : "1 Year Halal Registry Listing"}</li>
                  </ul>
                  <button onClick={() => setActiveTab("contact")} className="w-full py-3 bg-slate-100 hover:bg-slate-200/80 rounded-full text-xs font-bold text-slate-700 transition-colors mt-4">
                    {isRtl ? "طلب فحص" : "Initiate Audit"}
                  </button>
                </div>
              </div>

              {/* Plan 2 */}
              <div className="bg-[#022C22] border-2 border-[#d4af37]/60 rounded-3xl p-6 shadow-2xl shadow-emerald-950/20 flex flex-col justify-between text-left relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#d4af37]/20 text-[#d4af37] font-mono text-[9px] font-bold px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                  {isRtl ? "شائع" : "POPULAR"}
                </div>
                <div className={isRtl ? "text-right" : "text-left"}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">{isRtl ? "للتطبيقات المتقدمة" : "DAPPS & PROTCOLS"}</span>
                  <h3 className="font-display font-bold text-lg text-white mt-1">Professional Class</h3>
                  <div className="py-4 font-mono">
                    <span className="text-3xl font-bold text-white">$12,500</span>
                    <span className="text-xs text-emerald-300"> / {isRtl ? "المشروع" : "audit"}</span>
                  </div>
                  <p className="text-xs text-emerald-100/70 leading-relaxed mb-6">
                    {isRtl ? "مثالي للبروتوكولات التفاعلية اللامركزية (DAOs) ومجمعات السيولة وصناديق الوقف." : "Perfect for active decentralized applications (dApps), DAOs, staking protocols, and yield structures."}
                  </p>
                </div>
                <div className="space-y-3.5">
                  <div className="w-full h-px bg-emerald-900" />
                  <ul className="space-y-2.5 text-xs text-emerald-100/95 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> {isRtl ? "تدقيق أمني شامل للكود" : "Full Smart Contract & Security Audit"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> {isRtl ? "تدقيق مالي جنائي ضد الربا" : "Riba & Financial Forensic Audit"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> {isRtl ? "حوكمة التصويت اللامركزي" : "DAO Governance Sharia Review"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> {isRtl ? "شارة تحقق في موقع المشروع" : "Embeddable Trust Badge & Web API"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> {isRtl ? "مراقبة ربع سنوية" : "Quarterly On-Chain Delta Review"}</li>
                  </ul>
                  <button onClick={() => setActiveTab("contact")} className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 rounded-full text-xs font-bold text-emerald-950 transition-colors mt-4">
                    {isRtl ? "طلب فحص بروتوكول" : "Initiate Audit"}
                  </button>
                </div>
              </div>

              {/* Plan 3 */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-slate-100/50 flex flex-col justify-between text-left hover:border-emerald-500/20 transition-all">
                <div className={isRtl ? "text-right" : "text-left"}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">{isRtl ? "لشبكات الطبقة الأولى" : "LAYER-1 SYSTEMS"}</span>
                  <h3 className="font-display font-bold text-lg text-slate-900 mt-1">Enterprise Class</h3>
                  <div className="py-4 font-mono">
                    <span className="text-3xl font-bold text-slate-900">Custom</span>
                    <span className="text-xs text-slate-400"> {isRtl ? "حسب النطاق" : "Quote"}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {isRtl ? "لشبكات بلوكشين متكاملة، منصات التوريق، والمحافظ السيادية." : "Designed for complete Layer-1 and Layer-2 blockchains, sovereign digital assets, and institutional RWA frameworks."}
                  </p>
                </div>
                <div className="space-y-3.5">
                  <div className="w-full h-px bg-slate-100" />
                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "تدقيق برمجى متعدد اللغات" : "Multi-Repo Technical Code Verification"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "جلسات مع الهيئة الفقهية" : "Direct Scholar Board Joint Workshops"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "دعم استشاري لتحديث الكود" : "Priority Code Update Retainer Advisory"}</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> {isRtl ? "مراقبة مستمرة 12 شهر" : "12-Month Continuous Guard Telemetry"}</li>
                  </ul>
                  <button onClick={() => setActiveTab("contact")} className="w-full py-3 bg-[#064E3B] hover:bg-[#022C22] text-white rounded-full text-xs font-bold transition-colors mt-4">
                    {isRtl ? "تواصل مع مكتب الإدارة" : "Contact Compliance Office"}
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Services */}
            <div className={`max-w-4xl mx-auto pt-10 border-t border-slate-100 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wider mb-4">
                {isRtl ? "خدمات إضافية اختيارية" : "Optional & Ancillary Services"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
                <div className="p-3 bg-white border border-slate-100 rounded-xl flex justify-between items-center shadow-sm">
                  <span>{isRtl ? "مراجعة عاجلة للكود (خلال 7 أيام)" : "Priority Urgent Audit (7-Day Turnaround)"}</span>
                  <span className="font-mono text-emerald-700 font-bold">+$2,500</span>
                </div>
                <div className="p-3 bg-white border border-slate-100 rounded-xl flex justify-between items-center shadow-sm">
                  <span>{isRtl ? "تعديل رخصة أو دمج كود بروتوكول" : "Certificate Schema Update / Chain Migration"}</span>
                  <span className="font-mono text-emerald-700 font-bold">+$1,500</span>
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl flex justify-between items-center">
                  <span>{isRtl ? "تجديد سنوي مع التدقيق الجديد" : "Annual Compliance Monitoring Renewal"}</span>
                  <span className="font-mono text-emerald-700 font-bold">Starting $6,000/yr</span>
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl flex justify-between items-center">
                  <span>{isRtl ? "دعم وتدريب المطورين على الكود الآمن" : "Developer Sharia Code Architecture Training"}</span>
                  <span className="font-mono text-emerald-700 font-bold">$350/hr</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* VIEW: RESOURCES (BLOG, GLOSSARY, FAQ) */}
        {activeTab === "resources" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Page Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                {isRtl ? "البحوث والمدونة والقاموس" : "Insights & Educational Center"}
              </span>
              <h2 className="font-display font-bold text-3xl text-gray-950 tracking-tight">
                {isRtl ? "أدوات ومقالات المعرفة الفقهية للويب 3" : "Theological Research & Developer Resources"}
              </h2>
              <p className="max-w-md mx-auto text-xs text-gray-400">
                {isRtl ? "تصفح آخر الأوراق البحثية، الفتاوى القانونية، قاموس المصطلحات، والأسئلة الشائعة." : "Stay informed with independent academic research, classical definitions, and official compliance FAQs."}
              </p>
            </div>

            {/* Sub-view switcher: Blogs/Articles, Glossary, FAQ */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 bg-white p-1 rounded-xl border border-gray-100 text-xs font-bold mb-8">
                <button
                  onClick={() => setSelectedBlogCategory("All")}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    selectedBlogCategory === "All" ? "bg-emerald-950 text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isRtl ? "الأبحاث والمدونة" : "Research & Blog"}
                </button>
                <button
                  onClick={() => setSelectedBlogCategory("glossary")}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    selectedBlogCategory === "glossary" ? "bg-emerald-950 text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isRtl ? "قاموس المصطلحات" : "Sharia Glossary"}
                </button>
                <button
                  onClick={() => setSelectedBlogCategory("faq")}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    selectedBlogCategory === "faq" ? "bg-emerald-950 text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isRtl ? "الأسئلة الشائعة" : "Platform FAQ"}
                </button>
              </div>

              {/* RENDER: RESEARCH / BLOGS */}
              {selectedBlogCategory !== "glossary" && selectedBlogCategory !== "faq" && (
                <div className="space-y-6">
                  {/* Blog Search bar */}
                  <div className="relative max-w-sm mx-auto mb-6">
                    <span className={`absolute inset-y-0 ${isRtl ? "left-3" : "right-3"} flex items-center pointer-events-none text-gray-400`}>
                      <Search className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder={isRtl ? "البحث في الأبحاث والمدونة..." : "Search research or news..."}
                      className={`w-full bg-white border border-gray-200 rounded-xl py-2 ${isRtl ? "pr-4 pl-10 text-right" : "pl-4 pr-10 text-left"} text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700 transition-colors`}
                      value={blogSearch}
                      onChange={(e) => setBlogSearch(e.target.value)}
                    />
                  </div>

                  {/* Blog Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredBlogs.map((post) => (
                      <div key={post.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gray-300 transition-all">
                        <div className={`p-5 ${isRtl ? "text-right" : "text-left"}`}>
                          <span className="font-mono text-[9px] font-bold text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                            {isRtl ? post.categoryAr : post.category}
                          </span>
                          <h4 className="font-display font-bold text-sm text-gray-900 mt-3 hover:text-emerald-800 cursor-pointer" onClick={() => setSelectedArticle(post)}>
                            {isRtl ? post.titleAr : post.title}
                          </h4>
                          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                            {isRtl ? post.excerptAr : post.excerpt}
                          </p>
                        </div>
                        <div className={`px-5 py-3 bg-gray-50 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-mono ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                          <span>{post.date}</span>
                          <button onClick={() => setSelectedArticle(post)} className="font-sans font-bold text-emerald-800 hover:underline inline-flex items-center gap-1">
                            <span>{isRtl ? "اقرأ البحث" : "Read Article"}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RENDER: SHARIA GLOSSARY */}
              {selectedBlogCategory === "glossary" && (
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isRtl ? "text-right" : "text-left"}`}>
                  {glossaryTerms.map((term, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm space-y-2">
                      <div className={`flex justify-between items-center ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                        <span className="font-display font-bold text-base text-gray-900">{term.term}</span>
                        <span className="text-sm font-bold text-emerald-800">{term.termAr}</span>
                      </div>
                      <div className="w-12 h-px bg-amber-500/20" />
                      <p className="text-xs text-gray-500 leading-relaxed pt-1">
                        {isRtl ? term.definitionAr : term.definition}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* RENDER: PLATFORM FAQ */}
              {selectedBlogCategory === "faq" && (
                <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
                  {faqItems.map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                      <h4 className="font-display font-bold text-sm text-gray-900 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{isRtl ? item.questionAr : item.question}</span>
                      </h4>
                      <p className={`text-xs text-gray-500 leading-relaxed mt-2.5 pl-6 ${isRtl ? "pr-6 pl-0" : "pl-6"}`}>
                        {isRtl ? item.answerAr : item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </section>
        )}

        {/* VIEW: ABOUT */}
        {activeTab === "about" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Top header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                {isRtl ? "المرجعية الأخلاقية والمهنية" : "THE ETHICAL AUTHORITY"}
              </span>
              <h2 className="font-display font-bold text-3xl text-gray-950 tracking-tight">
                {t.aboutTitle}
              </h2>
              <p className="max-w-md mx-auto text-xs text-gray-400">
                {t.aboutSubtitle}
              </p>
            </div>

            {/* Mission / Vision Blocks */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
              <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900">{t.aboutMission}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.aboutMissionDesc}</p>
              </div>

              <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900">{t.aboutVision}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.aboutVisionDesc}</p>
              </div>
            </div>

            {/* Strict Autonomy statement */}
            <div className={`max-w-4xl mx-auto bg-gradient-to-tr from-emerald-950 to-emerald-900 text-white rounded-3xl p-6 md:p-8 relative overflow-hidden border border-[#d4af37]/20 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
              <div className="relative z-10 space-y-3 max-w-2xl">
                <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-full uppercase">
                  {isRtl ? "مبدأ الحياد والاستقلالية" : "OUR CONVENANT OF INDEPENDENCE"}
                </span>
                <h3 className="font-display font-bold text-lg md:text-xl text-white">{t.aboutIndependenceTitle}</h3>
                <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
                  {t.aboutIndependenceDesc}
                </p>
              </div>
            </div>

            {/* Core Values / Pillars */}
            <div className={`max-w-4xl mx-auto space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
              <h3 className="font-display font-bold text-xl text-gray-900">{t.aboutValuesTitle}</h3>
              <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm whitespace-pre-line text-xs md:text-sm text-gray-600 leading-relaxed">
                {t.aboutValuesDesc}
              </div>
            </div>

            {/* Council Members Section */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h3 className="font-display font-bold text-xl text-gray-950 tracking-tight">
                  {t.teamTitle}
                </h3>
                <p className="max-w-md mx-auto text-xs text-gray-400">
                  {t.teamSubtitle}
                </p>
              </div>

              {/* Members Grid list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
                {boardMembers.map((member, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between">
                    <div className={isRtl ? "text-right" : "text-left"}>
                      {/* Avatar Mock */}
                      <div className="w-12 h-12 rounded-full bg-emerald-50 border border-[#d4af37]/20 flex items-center justify-center font-bold text-emerald-950 font-display text-lg mb-3">
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="font-display font-bold text-sm text-gray-900">{isRtl ? member.nameAr : member.name}</h4>
                      <p className="text-[10px] font-mono text-amber-600 uppercase font-semibold mt-0.5">{isRtl ? member.roleAr : member.role}</p>
                      <p className="text-xs text-gray-400 font-medium mt-1 font-mono">{isRtl ? member.institutionAr : member.institution}</p>
                      <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                        {isRtl ? member.bioAr : member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* VIEW: CONTACT */}
        {activeTab === "contact" && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header top info */}
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                {isRtl ? "المراسلات والاتصال" : "COMPLIANCE CHANNEL"}
              </span>
              <h2 className="font-display font-bold text-3xl text-gray-950 tracking-tight">
                {t.contactTitle}
              </h2>
              <p className="max-w-md mx-auto text-xs text-gray-400">
                {t.contactSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
              
              {/* Left Column Contact Information */}
              <div className={`lg:col-span-5 space-y-6 ${isRtl ? "lg:order-2 text-right" : "text-left"}`}>
                
                {/* Office locations mockup */}
                <div className="bg-emerald-950 text-white rounded-3xl p-6 border border-[#d4af37]/10 space-y-4">
                  <h3 className="font-display font-bold text-base text-[#d4af37]">{t.contactOffice}</h3>
                  <div className="space-y-3.5 text-xs">
                    <div className="flex gap-2.5 items-start">
                      <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {isRtl 
                          ? "برج الفيصلية، الطابق ٢٤، طريق الملك فهد، الرياض، المملكة العربية السعودية"
                          : "Al Faisaliah Tower, 24th Floor, King Fahd Road, Riyadh, Kingdom of Saudi Arabia"}
                      </p>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {isRtl 
                          ? "مركز دبي المالي العالمي، برج البوابة، دبي، الإمارات العربية المتحدة"
                          : "DIFC, The Gate Precinct, Dubai, United Arab Emirates"}
                      </p>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>compliance@halalchain.com</span>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>+966 11 409 2000</span>
                    </div>
                  </div>
                </div>

                {/* Specific department channels */}
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl">
                    <h4 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-1">{t.contactSales}</h4>
                    <p className="text-[11px] text-gray-400">institutions@halalchain.com</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl">
                    <h4 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-1">{t.contactPartnerships}</h4>
                    <p className="text-[11px] text-gray-400">academic@halalchain.com</p>
                  </div>
                </div>
              </div>

              {/* Right Column Interactive Form */}
              <div className={`lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm ${isRtl ? "lg:order-1 text-right" : "text-left"}`}>
                
                {contactSuccess ? (
                  <div className="p-8 text-center space-y-3.5 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-emerald-950">{isRtl ? "تم إرسال طلبكم بنجاح" : "Inquiry Safely Transmitted"}</h3>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                      {t.contactSuccess}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-xs font-bold text-gray-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormName}</label>
                        <input
                          type="text"
                          required
                          className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700 ${isRtl ? "text-right" : "text-left"}`}
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-xs font-bold text-gray-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormEmail}</label>
                        <input
                          type="email"
                          required
                          className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700 ${isRtl ? "text-right" : "text-left"}`}
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-xs font-bold text-gray-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormCompany}</label>
                        <input
                          type="text"
                          required
                          className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700 ${isRtl ? "text-right" : "text-left"}`}
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        />
                      </div>
                      {/* Service selector */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-xs font-bold text-gray-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormService}</label>
                        <select
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700"
                          value={contactForm.service}
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        >
                          <option value="Sharia Compliance Certificate">{isRtl ? "شهادة التوافق الشرعي" : "Sharia Compliance Certificate"}</option>
                          <option value="Smart Contract Audit">{isRtl ? "تدقيق أمني للعقود الذكية" : "Smart Contract Security Audit"}</option>
                          <option value="Tokenomics Assessment">{isRtl ? "تقييم استدامة الرموز والتوكن" : "Tokenomics Sustainability assessment"}</option>
                          <option value="Strategic Partnership Inquiry">{isRtl ? "شراكة استراتيجية" : "Strategic Partnership Inquiry"}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 text-left">
                      <label className={`text-xs font-bold text-gray-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormMessage}</label>
                      <textarea
                        required
                        rows={4}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700 ${isRtl ? "text-right" : "text-left"}`}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                    >
                      {t.contactFormSubmit}
                    </button>
                  </form>
                )}
              </div>

            </div>

          </section>
        )}

      </main>

      {/* ARTICLE READER MODAL OVERLAY */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-1.5 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
              <span className="font-mono text-[9px] font-bold text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded border border-amber-200/50">
                {isRtl ? selectedArticle.categoryAr : selectedArticle.category}
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-gray-950 leading-tight block pt-2">
                {isRtl ? selectedArticle.titleAr : selectedArticle.title}
              </h3>
              <div className="text-[10px] text-gray-400 font-mono flex items-center gap-4">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{isRtl ? selectedArticle.readTimeAr : selectedArticle.readTime}</span>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent my-4" />
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line font-medium">
                {isRtl ? selectedArticle.contentAr : selectedArticle.content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="halalchain-primary-footer" className="bg-white border-t border-gray-100 py-12 md:py-16 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand block */}
          <div className={`md:col-span-4 space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
            <Logo size="sm" showTagline={true} isRtl={isRtl} />
            <p className="text-gray-400 leading-relaxed font-normal">
              {t.companyDesc}
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Services */}
            <div className={`space-y-3.5 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[10px]">{isRtl ? "الفئات والتصنيف" : "CERTIFICATION CLASSES"}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => { setActiveTab("services"); }} className="hover:text-emerald-800 transition-colors">Sharia Compliance</button></li>
                <li><button onClick={() => { setActiveTab("services"); }} className="hover:text-emerald-800 transition-colors">DAO Sharia Governance</button></li>
                <li><button onClick={() => { setActiveTab("services"); }} className="hover:text-emerald-800 transition-colors">Smart Contract Security</button></li>
                <li><button onClick={() => { setActiveTab("services"); }} className="hover:text-emerald-800 transition-colors">Tokenomics Assessment</button></li>
              </ul>
            </div>

            {/* Methodology */}
            <div className={`space-y-3.5 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[10px]">{isRtl ? "إطار التقييم" : "SCREENING CORE"}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => { setActiveTab("methodology"); }} className="hover:text-emerald-800 transition-colors">AAOIFI Standards</button></li>
                <li><button onClick={() => { setActiveTab("methodology"); }} className="hover:text-emerald-800 transition-colors">Whitepaper Review</button></li>
                <li><button onClick={() => { setActiveTab("methodology"); }} className="hover:text-emerald-800 transition-colors">Revenue Forensics</button></li>
                <li><button onClick={() => { setActiveTab("methodology"); }} className="hover:text-emerald-800 transition-colors">On-Chain Monitoring</button></li>
              </ul>
            </div>

            {/* Registry */}
            <div className={`space-y-3.5 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[10px]">{isRtl ? "السجل العام" : "KNOWLEDGE ASSETS"}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => { setActiveTab("registry"); }} className="hover:text-emerald-800 transition-colors">Active Halal Registry</button></li>
                <li><button onClick={() => { setActiveTab("verify"); }} className="hover:text-emerald-800 transition-colors">Verify Certificate</button></li>
                <li><button onClick={() => { setActiveTab("resources"); }} className="hover:text-emerald-800 transition-colors">Research Papers</button></li>
                <li><button onClick={() => { setActiveTab("resources"); }} className="hover:text-emerald-800 transition-colors">Term glossary</button></li>
              </ul>
            </div>

            {/* Corporate */}
            <div className={`space-y-3.5 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[10px]">{isRtl ? "عن المؤسسة" : "CORPORATE OFFICE"}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => { setActiveTab("about"); }} className="hover:text-emerald-800 transition-colors">Independence Charter</button></li>
                <li><button onClick={() => { setActiveTab("about"); }} className="hover:text-emerald-800 transition-colors">Sharia Jurist Board</button></li>
                <li><button onClick={() => { setActiveTab("contact"); }} className="hover:text-emerald-800 transition-colors">Riyadh & Dubai offices</button></li>
                <li><button onClick={() => { setActiveTab("pricing"); }} className="hover:text-emerald-800 transition-colors">Compliance Pricing</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-400 text-center">
          <div>
            © {new Date().getFullYear()} HALALCHAIN™ Independent Certification Board. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-gray-600 cursor-pointer">{isRtl ? "سياسة الخصوصية" : "Privacy Policy"}</span>
            <span className="hover:text-gray-600 cursor-pointer">{isRtl ? "شروط الخدمة والأرشفة" : "Terms of Certification"}</span>
            <span className="hover:text-gray-600 cursor-pointer">{isRtl ? "إخلاء المسؤولية المستقل" : "Independence Charter"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
