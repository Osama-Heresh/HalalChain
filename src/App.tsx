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
import IslamicWatermark from "./components/IslamicWatermark";
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
  
  // Inner Sub-Tab states for simplified workspaces
  const [screeningSubTab, setScreeningSubTab] = useState<"services" | "methodology">("services");
  const [registrySubTab, setRegistrySubTab] = useState<"explore" | "verify">("explore");
  const [pricingSubTab, setPricingSubTab] = useState<"rates" | "insights" | "glossary" | "faq">("rates");

  // Blog / Resources states
  const [blogSearch, setBlogSearch] = useState("");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Contact Form states
  const [contactForm, setContactForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    service: "Sharia Compliance Certificate", 
    message: "" 
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const isRtl = lang === "ar";
  const t = generalTranslations[lang];

  // Helper function to handle seamless cross-tab links
  const navigateTo = (tabId: string, subTabId?: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    if (tabId === "screening" && subTabId) {
      setScreeningSubTab(subTabId as any);
    } else if (tabId === "registry" && subTabId) {
      setRegistrySubTab(subTabId as any);
    } else if (tabId === "pricing" && subTabId) {
      setPricingSubTab(subTabId as any);
    }
  };

  // Dynamic Browser Title and SEO Metadata Update
  useEffect(() => {
    const pageNames: { [key: string]: { en: string; ar: string } } = {
      home: { en: "Independent Sharia Authority & Advisory Council", ar: "الهيئة المستقلة ومجلس الرقابة الشرعية" },
      screening: { en: "Screening Services & Methodology Hub", ar: "منصة خدمات ومنهجية التدقيق الشرعي" },
      registry: { en: "Global Certified Web3 Registry & Verification", ar: "السجل الحلال العالمي والتحقق من التراخيص" },
      pricing: { en: "Enterprise Compliance rates & Theological Knowledge", ar: "باقات الأسعار والبحوث الفقهية المعاصرة" },
      contact: { en: "Connect with Global Compliance Headquarters", ar: "مكتب الاتصال وقنوات التوافق الشرعي" },
    };

    const currentMeta = pageNames[activeTab] || pageNames.home;
    const suffix = lang === "en" ? "HalalChain™" : "حلال تشين™";
    document.title = `${currentMeta[lang]} | ${suffix}`;

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
  }, [activeTab, screeningSubTab, registrySubTab, pricingSubTab]);

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

    const matchesCategory = selectedBlogCategory === "All" || post.category === selectedBlogCategory;
    return matchesSearch && matchesCategory;
  });

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
      className="min-h-screen bg-[#FCFBF7] flex flex-col justify-between font-sans selection:bg-emerald-800 selection:text-white transition-all relative"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Islamic Watermark Star Ornament (Suits the site coloring, JIBEP book-cover styled) */}
      <IslamicWatermark className="absolute inset-0 select-none z-0 pointer-events-none" color="mixed" opacity={0.35} />

      {/* HEADER NAVBAR */}
      <header
        id="halalchain-primary-header"
        className="sticky top-0 w-full z-40 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-[#d4af37]/15 shadow-sm transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between relative z-10">
          
          {/* Logo Brand lockup */}
          <button onClick={() => navigateTo("home")} className="focus:outline-none transition-transform hover:scale-[1.02]">
            <Logo size="md" isRtl={isRtl} />
          </button>

          {/* Desktop Navigation Links (Simplified down to 5 Master Sections) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { id: "home", label: isRtl ? "الرئيسية والمجلس" : "Home & Board" },
              { id: "screening", label: isRtl ? "خدمات ومنهجية التدقيق" : "Screening Hub" },
              { id: "registry", label: isRtl ? "السجل الرقمي والتحقق" : "Registry & Verify" },
              { id: "pricing", label: isRtl ? "الأسعار والمعرفة" : "Pricing & Insights" },
              { id: "contact", label: isRtl ? "مكتب الاتصال" : "Connect Office" },
            ].map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 relative ${
                    isActive
                      ? "text-emerald-950 bg-emerald-50/80 border border-[#d4af37]/30 shadow-sm"
                      : "text-slate-600 hover:text-emerald-950 hover:bg-emerald-50/30"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side Language Switcher & Call-To-Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Bilingual Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200/80 hover:border-[#d4af37]/40 hover:bg-slate-100/50 rounded-full text-xs font-extrabold text-slate-700 transition-all duration-300 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-emerald-800" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Main Primary Action Button */}
            <button
              onClick={() => navigateTo("contact")}
              className="px-6 py-3 bg-[#064E3B] text-white text-xs font-extrabold rounded-full hover:bg-[#022C22] transition-all duration-300 shadow-md hover:shadow-lg shadow-emerald-950/15 border border-[#d4af37]/20 hover:-translate-y-0.5 cursor-pointer"
            >
              {t.getCertified}
            </button>
          </div>

          {/* Mobile Hamburger button */}
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
          <div className="lg:hidden border-t border-slate-200 bg-white p-5 space-y-3 animate-in fade-in duration-200">
            {[
              { id: "home", label: isRtl ? "الرئيسية والمجلس" : "Home & Board" },
              { id: "screening", label: isRtl ? "خدمات ومنهجية التدقيق" : "Screening Hub" },
              { id: "registry", label: isRtl ? "السجل الرقمي والتحقق" : "Registry & Verify" },
              { id: "pricing", label: isRtl ? "الأسعار والمعرفة" : "Pricing & Insights" },
              { id: "contact", label: isRtl ? "مكتب الاتصال" : "Connect Office" },
            ].map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`w-full block px-5 py-3.5 rounded-full text-sm font-bold ${
                    isRtl ? "text-right" : "text-left"
                  } ${
                    isActive
                      ? "bg-[#064E3B] text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => navigateTo("contact")}
                className="w-full text-center block px-5 py-3.5 bg-[#064E3B] text-white rounded-full text-sm font-bold shadow-md shadow-emerald-900/10"
              >
                {t.getCertified}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* PRIMARY WORKSPACE */}
      <main id="halalchain-primary-workspace" className="flex-grow">
        
        {/* VIEW: HOME & BOARD */}
        {activeTab === "home" && (
          <div className="w-full">
            {/* HERO HERO SECTION */}
            <section className="relative overflow-hidden pt-16 pb-24 md:py-32 bg-gradient-to-b from-white via-slate-50/10 to-white border-b border-slate-100">
              
              {/* Dynamic canvas backdrop */}
              <NetworkBg />

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
                
                {/* Premium Golden Announcement Label */}
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-[#d4af37]/35 rounded-full text-xs font-bold text-amber-800 tracking-wide animate-elegant-float shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>{isRtl ? "الهيئة المرجعية المستقلة الأكبر لتصديق بروتوكولات الويب 3" : "The Authority in Independent Web3 Sharia Certification"}</span>
                </div>

                {/* Massive display Typography header with enhanced readable sizing */}
                <h1 className="max-w-5xl mx-auto font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-slate-950 leading-[1.15]">
                  {t.heroTitle}
                </h1>

                {/* Subtitle with highly legible text sizes */}
                <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  {t.heroSubtitle}
                </p>

                {/* Action Buttons Row */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto pt-4">
                  <button
                    onClick={() => navigateTo("contact")}
                    className="w-full sm:w-auto px-8 py-4 bg-[#064E3B] text-white rounded-full text-sm font-extrabold hover:bg-[#022C22] hover-lift shadow-lg shadow-emerald-950/15 cursor-pointer"
                  >
                    {t.getCertified}
                  </button>
                  <button
                    onClick={() => navigateTo("registry", "verify")}
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-[#d4af37]/50 text-slate-700 rounded-full text-sm font-extrabold hover-lift shadow-sm cursor-pointer"
                  >
                    {t.verifyCert}
                  </button>
                  <button
                    onClick={() => navigateTo("screening", "methodology")}
                    className="w-full sm:w-auto px-5 py-3 text-emerald-900 text-sm font-extrabold hover:underline cursor-pointer"
                  >
                    {t.viewMethodology}
                  </button>
                </div>

                {/* Live SaaS Preview embed */}
                <div className="max-w-5xl mx-auto pt-12">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 block mb-4 font-bold">
                    {isRtl ? "نظام المراقبة والتحليل الشرعي الفوري — حلال تشين" : "HalalChain™ Live Telemetry & Compliance Interface Preview"}
                  </span>
                  <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white hover:border-[#d4af37]/30 transition-all duration-500">
                    <DashboardPreview isRtl={isRtl} />
                  </div>
                </div>
              </div>
            </section>

            {/* INDEPENDENCE STATEMENT DISCLAIMER BANNER */}
            <section className="bg-amber-50/15 border-y border-amber-500/15 py-10 relative">
              <div className="max-w-5xl mx-auto px-4 text-center space-y-4 relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-extrabold text-amber-800 uppercase tracking-widest">
                  <span className="px-4 py-1.5 bg-amber-100/50 border border-[#d4af37]/20 rounded-full">{t.notExchange}</span>
                  <span className="px-4 py-1.5 bg-amber-100/50 border border-[#d4af37]/20 rounded-full">{t.notInvestment}</span>
                  <span className="px-4 py-1.5 bg-amber-100/50 border border-[#d4af37]/20 rounded-full">{t.notSeller}</span>
                </div>
                <p className="max-w-4xl mx-auto text-sm text-slate-600 leading-relaxed font-semibold">
                  {t.independentDisclaimer}
                </p>
              </div>
            </section>

            {/* TRUST SECTION BENTO GRID */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="text-center space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                    {isRtl ? "لماذا تختار حلال تشين؟" : "The Core Pillars of Trust"}
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                    {t.trustTitle}
                  </h2>
                  <p className="max-w-2xl mx-auto text-base text-slate-500 leading-relaxed font-medium">
                    {t.trustSubtitle}
                  </p>
                </div>

                {/* Bento Grid layout with larger text and beautiful luxury hover frames */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
                  <div className="md:col-span-8 bg-[#FCFBF7]/40 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover-lift text-left">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <Scale className="w-6 h-6 text-emerald-800" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-xl text-slate-900">{t.trustIndependentTitle}</h4>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">{t.trustIndependentDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#FCFBF7]/40 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover-lift text-left">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6 text-emerald-800" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-xl text-slate-900">{t.trustTechTitle}</h4>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">{t.trustTechDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#FCFBF7]/40 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover-lift text-left">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-emerald-800" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-xl text-slate-900">{t.trustScholarsTitle}</h4>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">{t.trustScholarsDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#FCFBF7]/40 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover-lift text-left">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <BookOpen className="w-6 h-6 text-emerald-800" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-xl text-slate-900">{t.trustMethodologyTitle}</h4>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">{t.trustMethodologyDesc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#FCFBF7]/40 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover-lift text-left">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <Activity className="w-6 h-6 text-emerald-800" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <h4 className="font-display font-bold text-xl text-slate-900">{t.trustMonitoringTitle}</h4>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">{t.trustMonitoringDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ILLUSTRATED CERTIFICATION PROCESS TIMELINE */}
            <section className="py-24 bg-slate-50/20 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="text-center space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                    {isRtl ? "آلية العمل التفصيلية" : "How Certification Works"}
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                    {t.procTitle}
                  </h2>
                  <p className="max-w-2xl mx-auto text-base text-slate-500 leading-relaxed font-medium">
                    {t.procSubtitle}
                  </p>
                </div>

                {/* Timeline vertical/horizontal dynamic path */}
                <div className="max-w-4xl mx-auto relative pt-6">
                  {/* Decorative vertical line */}
                  <div className={`hidden md:block absolute top-[100px] bottom-[100px] ${isRtl ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} w-0.5 border-l-2 border-dashed border-[#d4af37]/30 z-0`} />

                  <div className="space-y-14">
                    {[
                      { step: t.procStep1, desc: t.procStep1Desc, icon: <FileText className="w-5 h-5 text-[#d4af37]" /> },
                      { step: t.procStep2, desc: t.procStep2Desc, icon: <Briefcase className="w-5 h-5 text-[#064E3B]" /> },
                      { step: t.procStep3, desc: t.procStep3Desc, icon: <Coins className="w-5 h-5 text-[#064E3B]" /> },
                      { step: t.procStep4, desc: t.procStep4Desc, icon: <Lock className="w-5 h-5 text-[#064E3B]" /> },
                      { step: t.procStep5, desc: t.procStep5Desc, icon: <LineChart className="w-5 h-5 text-[#064E3B]" /> },
                      { step: t.procStep6, desc: t.procStep6Desc, icon: <Users className="w-5 h-5 text-[#064E3B]" /> },
                      { step: t.procStep7, desc: t.procStep7Desc, icon: <FileText className="w-5 h-5 text-[#d4af37]" /> },
                      { step: t.procStep8, desc: t.procStep8Desc, icon: <Award className="w-5 h-5 text-[#d4af37]" /> },
                      { step: t.procStep9, desc: t.procStep9Desc, icon: <Activity className="w-5 h-5 text-[#d4af37]" /> },
                    ].map((item, idx) => {
                      const isEven = idx % 2 === 0;
                      return (
                        <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${isRtl ? "md:flex-row-reverse" : ""} ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                          
                          {/* Anchor Node circle with custom gold pulsing */}
                          <div className="absolute top-6 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#d4af37] shadow-lg flex items-center justify-center z-10 shrink-0">
                            {item.icon}
                          </div>

                          {/* Content Card with highly readable fonts */}
                          <div className={`w-full md:w-[44%] bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-lg hover-lift text-left ${isRtl ? "text-right" : "text-left"} ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 block">
                              {isRtl ? `المرحلة 0${idx + 1}` : `Phase 0${idx + 1}`}
                            </span>
                            <h4 className="font-display font-extrabold text-base text-slate-900 mt-2">{item.step}</h4>
                            <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* MERGED: INDEPENDENT SHARIA ADVISORY COUNCIL */}
            <section className="py-24 bg-white border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="text-center space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                    {isRtl ? "المرجعية الأخلاقية والفقهية" : "THE SHARIA ADVISORY AUTHORITY"}
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                    {t.aboutTitle}
                  </h2>
                  <p className="max-w-2xl mx-auto text-base text-slate-500 leading-relaxed font-medium">
                    {t.aboutSubtitle}
                  </p>
                </div>

                {/* Mission / Vision Blocks */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
                  <div className="bg-[#FCFBF7]/50 border border-slate-200 p-8 rounded-3xl hover-lift space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-emerald-800" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900">{t.aboutMission}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{t.aboutMissionDesc}</p>
                  </div>

                  <div className="bg-[#FCFBF7]/50 border border-slate-200 p-8 rounded-3xl hover-lift space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-emerald-800" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900">{t.aboutVision}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{t.aboutVisionDesc}</p>
                  </div>
                </div>

                {/* Covenant of Independence Banner */}
                <div className={`max-w-4xl mx-auto bg-gradient-to-tr from-emerald-950 to-emerald-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden border border-[#d4af37]/35 shadow-xl ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-star-pattern" />
                  <div className="relative z-10 space-y-4 max-w-3xl">
                    <span className="text-xs font-mono font-extrabold tracking-widest text-[#d4af37] bg-white/10 px-3 py-1.5 rounded-full uppercase">
                      {isRtl ? "مبدأ الحياد والاستقلالية" : "OUR CONVENANT OF INDEPENDENCE"}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white">{t.aboutIndependenceTitle}</h3>
                    <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed font-medium">
                      {t.aboutIndependenceDesc}
                    </p>
                  </div>
                </div>

                {/* Core Pillars / Values list */}
                <div className={`max-w-4xl mx-auto space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
                  <h3 className="font-display font-bold text-xl text-slate-900">{t.aboutValuesTitle}</h3>
                  <div className="bg-[#FCFBF7]/50 border border-slate-200 p-8 rounded-3xl text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-line font-semibold">
                    {t.aboutValuesDesc}
                  </div>
                </div>

                {/* Board Members Grid List */}
                <div className="space-y-10 pt-6">
                  <div className="text-center space-y-2">
                    <h3 className="font-display font-bold text-2xl text-slate-950 tracking-tight">
                      {t.teamTitle}
                    </h3>
                    <p className="max-w-xl mx-auto text-sm text-slate-400 font-medium">
                      {t.teamSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {boardMembers.map((member, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover-lift shadow-sm flex flex-col justify-between">
                        <div className={isRtl ? "text-right" : "text-left"}>
                          <div className="w-14 h-14 rounded-full bg-emerald-50 border border-[#d4af37]/35 flex items-center justify-center font-bold text-emerald-950 font-display text-xl mb-4">
                            {member.name.charAt(0)}
                          </div>
                          <h4 className="font-display font-extrabold text-base text-slate-950">{isRtl ? member.nameAr : member.name}</h4>
                          <p className="text-xs font-mono text-amber-700 uppercase font-bold mt-1">{isRtl ? member.roleAr : member.role}</p>
                          <p className="text-xs text-slate-400 font-bold mt-1.5 font-mono">{isRtl ? member.institutionAr : member.institution}</p>
                          <p className="text-sm text-slate-600 mt-4 leading-relaxed font-medium">
                            {isRtl ? member.bioAr : member.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* VIEW: SCREENING HUB (SERVICES + METHODOLOGY COMBINED) */}
        {activeTab === "screening" && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Page Header */}
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                {isRtl ? "منصة الفحص الشرعي الرقمي" : "SHARIA SCREENING & AUDITING HUB"}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                {isRtl ? "خدمات ومنهجية التوافق الشرعي" : "Screening Services & Formal Methodology"}
              </h2>
              <p className="max-w-2xl mx-auto text-base text-slate-500 font-semibold leading-relaxed">
                {isRtl 
                  ? "مجموعة متكاملة من خدمات فحص الرموز ومراجعة العقود الذكية لمنظومة الويب ٣، متكاملة مع منهجيات الأيوفي التفصيلية." 
                  : "A unified suite of smart contract security audits, tokenomics assessments, and compliance methodologies modeled on classic Sharia Law."}
              </p>
            </div>

            {/* Luxury Sub-Tab gold selector */}
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 text-xs font-extrabold shadow-inner relative">
                <button
                  onClick={() => setScreeningSubTab("services")}
                  className={`py-3.5 px-5 rounded-full transition-all duration-300 ${
                    screeningSubTab === "services" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-md border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "باقة الخدمات والتصديق" : "Our Certification Services"}
                </button>
                <button
                  onClick={() => setScreeningSubTab("methodology")}
                  className={`py-3.5 px-5 rounded-full transition-all duration-300 ${
                    screeningSubTab === "methodology" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-md border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "منهجية الفحص والمطابقة" : "Evaluation Methodology"}
                </button>
              </div>
            </div>

            {/* Render selected workspace */}
            <div className="pt-6 animate-in fade-in duration-300">
              {screeningSubTab === "services" ? (
                <ServicesView isRtl={isRtl} />
              ) : (
                <MethodologyView isRtl={isRtl} />
              )}
            </div>
          </section>
        )}

        {/* VIEW: REGISTRY & VERIFY (REGISTRY + VERIFICATION COMBINED) */}
        {activeTab === "registry" && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Page Header */}
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                {isRtl ? "بوابة التحقق الفوري والسجل العام" : "GLOBAL WEB3 VERIFICATION PORTAL"}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                {isRtl ? "السجل العالمي الحلال والتحقق من التراخيص" : "Global Halal Registry & Active Verification"}
              </h2>
              <p className="max-w-2xl mx-auto text-base text-slate-500 font-semibold leading-relaxed">
                {isRtl 
                  ? "تصفح المشروعات والبروتوكولات الحاصلة على رخص التوافق الشرعي النشطة، أو قم بالتحقق الفوري من رمز ترخيص الشهادة رقمياً." 
                  : "Explore the global database of certified Sharia-compliant protocols, or instantly authenticate active license serial keys on-chain."}
              </p>
            </div>

            {/* Luxury Sub-Tab gold selector */}
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 text-xs font-extrabold shadow-inner">
                <button
                  onClick={() => setRegistrySubTab("explore")}
                  className={`py-3.5 px-5 rounded-full transition-all duration-300 ${
                    registrySubTab === "explore" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-md border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "تصفح السجل الرقمي" : "Explore Certified Registry"}
                </button>
                <button
                  onClick={() => setRegistrySubTab("verify")}
                  className={`py-3.5 px-5 rounded-full transition-all duration-300 ${
                    registrySubTab === "verify" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-md border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "التحقق الفوري الفردي" : "Instant Certificate Verify"}
                </button>
              </div>
            </div>

            {/* Render selected workspace */}
            <div className="pt-6 animate-in fade-in duration-300">
              {registrySubTab === "explore" ? (
                <RegistryView isRtl={isRtl} />
              ) : (
                <VerificationView isRtl={isRtl} />
              )}
            </div>
          </section>
        )}

        {/* VIEW: PRICING & INSIGHTS (PRICING + RESOURCES/BLOG/GLOSSARY/FAQ COMBINED) */}
        {activeTab === "pricing" && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Page Header */}
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                {isRtl ? "المركز التجاري والتعليمي" : "COMMERCIAL & INSIGHTS PORTAL"}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                {isRtl ? "باقات التسعير والبحوث الفقهية والمعرفة" : "Enterprise Packages, Research & FAQs"}
              </h2>
              <p className="max-w-2xl mx-auto text-base text-slate-500 font-semibold leading-relaxed">
                {isRtl 
                  ? "استعرض خطط ورسوم تدقيق الأكواد، وتصفح آخر البحوث القانونية لفقهاء الويب ٣ وقاموس المصطلحات الفقهية المعاصرة." 
                  : "View flexible audit packages, browse modern academic Sharia research, study terminology, or consult our platform FAQs."}
              </p>
            </div>

            {/* Luxury Sub-Tab switcher (4 options) */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-100 p-1.5 rounded-3xl sm:rounded-full border border-slate-200 text-[11px] font-extrabold gap-1 shadow-inner">
                <button
                  onClick={() => setPricingSubTab("rates")}
                  className={`py-3 px-2 rounded-2xl sm:rounded-full transition-all duration-300 ${
                    pricingSubTab === "rates" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-sm border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "باقات الأسعار" : "Enterprise Rates"}
                </button>
                <button
                  onClick={() => setPricingSubTab("insights")}
                  className={`py-3 px-2 rounded-2xl sm:rounded-full transition-all duration-300 ${
                    pricingSubTab === "insights" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-sm border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "أوراق البحوث" : "Scientific Research"}
                </button>
                <button
                  onClick={() => setPricingSubTab("glossary")}
                  className={`py-3 px-2 rounded-2xl sm:rounded-full transition-all duration-300 ${
                    pricingSubTab === "glossary" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-sm border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "قاموس الشريعة" : "Sharia Glossary"}
                </button>
                <button
                  onClick={() => setPricingSubTab("faq")}
                  className={`py-3 px-2 rounded-2xl sm:rounded-full transition-all duration-300 ${
                    pricingSubTab === "faq" 
                      ? "bg-[#064E3B] text-[#FCFBF7] shadow-sm border border-[#d4af37]/20" 
                      : "text-slate-600 hover:text-emerald-950"
                  }`}
                >
                  {isRtl ? "الأسئلة الشائعة" : "Ecosystem FAQ"}
                </button>
              </div>
            </div>

            {/* RENDER DYNAMIC PRICING SUBTAB: rates */}
            {pricingSubTab === "rates" && (
              <div className="space-y-12 pt-4">
                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {/* Plan 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover-lift shadow-xl flex flex-col justify-between text-left">
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">{isRtl ? "للمشاريع الفردية" : "TOKEN PROJECTS"}</span>
                      <h3 className="font-display font-extrabold text-xl text-slate-900 mt-2">Starter Class</h3>
                      <div className="py-4 font-mono">
                        <span className="text-4xl font-extrabold text-slate-950">$7,500</span>
                        <span className="text-xs text-slate-500"> / {isRtl ? "المشروع" : "audit"}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                        {isRtl ? "مثالي لمراجعة رموز ERC-20 الفردية، الرموز غير القابلة للاستبدال، أو العقود البسيطة لمرة واحدة." : "Designed for individual smart contracts, standard ERC-20 tokens, or basic fractional property designs."}
                      </p>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "تدقيق برمجي واحد" : "1 Smart Contract Audit"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "فحص نموذج منفعة التوكن" : "Tokenomics Sharia Screening"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "فتوى شرعية معتمدة" : "Advisory Board Scholar Review"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "أرشفة لمدة سنة في السجل" : "1 Year Halal Registry Listing"}</li>
                      </ul>
                      <button onClick={() => navigateTo("contact")} className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold rounded-full text-xs transition-colors mt-6 cursor-pointer">
                        {isRtl ? "طلب فحص" : "Initiate Audit"}
                      </button>
                    </div>
                  </div>

                  {/* Plan 2 */}
                  <div className="bg-[#022C22] border-2 border-[#d4af37] rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-[#d4af37]/20 text-[#d4af37] font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-[#d4af37]/30">
                      {isRtl ? "شائع" : "POPULAR"}
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">{isRtl ? "للتطبيقات المتقدمة" : "DAPPS & PROTCOLS"}</span>
                      <h3 className="font-display font-extrabold text-xl text-white mt-2">Professional Class</h3>
                      <div className="py-4 font-mono">
                        <span className="text-4xl font-extrabold text-white">$12,500</span>
                        <span className="text-xs text-emerald-300"> / {isRtl ? "المشروع" : "audit"}</span>
                      </div>
                      <p className="text-sm text-emerald-100/80 leading-relaxed mb-6 font-medium">
                        {isRtl ? "مثالي للبروتوكولات التفاعلية اللامركزية (DAOs) ومجمعات السيولة وصناديق الوقف." : "Perfect for active decentralized applications (dApps), DAOs, staking protocols, and yield structures."}
                      </p>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-emerald-900/60">
                      <ul className="space-y-3 text-sm text-emerald-50 font-semibold">
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4af37] shrink-0" /> {isRtl ? "تدقيق أمني شامل للكود" : "Full Smart Contract & Security Audit"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4af37] shrink-0" /> {isRtl ? "تدقيق مالي جنائي ضد الربا" : "Riba & Financial Forensic Audit"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4af37] shrink-0" /> {isRtl ? "حوكمة التصويت اللامركزي" : "DAO Governance Sharia Review"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4af37] shrink-0" /> {isRtl ? "شارة تحقق في موقع المشروع" : "Embeddable Trust Badge & Web API"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4af37] shrink-0" /> {isRtl ? "مراقبة ربع سنوية" : "Quarterly On-Chain Delta Review"}</li>
                      </ul>
                      <button onClick={() => navigateTo("contact")} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-emerald-950 font-extrabold rounded-full text-xs transition-colors mt-6 cursor-pointer">
                        {isRtl ? "طلب فحص بروتوكول" : "Initiate Audit"}
                      </button>
                    </div>
                  </div>

                  {/* Plan 3 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover-lift shadow-xl flex flex-col justify-between text-left">
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">{isRtl ? "لشبكات الطبقة الأولى" : "LAYER-1 SYSTEMS"}</span>
                      <h3 className="font-display font-extrabold text-xl text-slate-900 mt-2">Enterprise Class</h3>
                      <div className="py-4 font-mono">
                        <span className="text-4xl font-extrabold text-slate-950">Custom</span>
                        <span className="text-xs text-slate-500"> {isRtl ? "حسب النطاق" : "Quote"}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                        {isRtl ? "لشبكات بلوكشين متكاملة، منصات التوريق، والمحافظ السيادية." : "Designed for complete Layer-1 and Layer-2 blockchains, sovereign digital assets, and institutional RWA frameworks."}
                      </p>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "تدقيق برمجي متعدد اللغات" : "Multi-Repo Technical Code Verification"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "جلسات مع الهيئة الفقهية" : "Direct Scholar Board Joint Workshops"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "دعم استشاري لتحديث الكود" : "Priority Code Update Retainer Advisory"}</li>
                        <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-800 shrink-0" /> {isRtl ? "مراقبة مستمرة 12 شهر" : "12-Month Continuous Guard Telemetry"}</li>
                      </ul>
                      <button onClick={() => navigateTo("contact")} className="w-full py-3.5 bg-[#064E3B] hover:bg-[#022C22] text-white font-extrabold rounded-full text-xs transition-colors mt-6 cursor-pointer">
                        {isRtl ? "تواصل مع مكتب الإدارة" : "Contact Compliance Office"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Ancillary Services */}
                <div className={`max-w-4xl mx-auto pt-12 border-t border-slate-200 ${isRtl ? "text-right" : "text-left"}`}>
                  <h4 className="font-display font-extrabold text-base text-slate-900 uppercase tracking-wider mb-6">
                    {isRtl ? "خدمات إضافية اختيارية" : "Optional & Ancillary Services"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm hover:border-[#d4af37]/35 transition-all">
                      <span>{isRtl ? "مراجعة عاجلة للكود (خلال 7 أيام)" : "Priority Urgent Audit (7-Day Turnaround)"}</span>
                      <span className="font-mono text-emerald-850 font-bold">+$2,500</span>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm hover:border-[#d4af37]/35 transition-all">
                      <span>{isRtl ? "تعديل رخصة أو دمج كود بروتوكول" : "Certificate Schema Update / Chain Migration"}</span>
                      <span className="font-mono text-emerald-850 font-bold">+$1,500</span>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm hover:border-[#d4af37]/35 transition-all">
                      <span>{isRtl ? "تجديد سنوي مع التدقيق الجديد" : "Annual Compliance Monitoring Renewal"}</span>
                      <span className="font-mono text-emerald-850 font-bold">Starting $6,000/yr</span>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm hover:border-[#d4af37]/35 transition-all">
                      <span>{isRtl ? "دعم وتدريب المطورين على الكود الآمن" : "Developer Sharia Code Architecture Training"}</span>
                      <span className="font-mono text-emerald-850 font-bold">$350/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* RENDER DYNAMIC PRICING SUBTAB: insights */}
            {pricingSubTab === "insights" && (
              <div className="space-y-8 pt-4 animate-in fade-in duration-300">
                {/* Blog Search bar */}
                <div className="relative max-w-md mx-auto">
                  <span className={`absolute inset-y-0 ${isRtl ? "left-4" : "right-4"} flex items-center pointer-events-none text-slate-400`}>
                    <Search className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    placeholder={isRtl ? "البحث في الأبحاث والمدونة..." : "Search research or news..."}
                    className={`w-full bg-white border border-slate-200 rounded-full py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all shadow-sm ${
                      isRtl ? "pr-6 pl-12 text-right" : "pl-6 pr-12 text-left"
                    }`}
                    value={blogSearch}
                    onChange={(e) => setBlogSearch(e.target.value)}
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center py-2">
                  {["All", "Sharia Opinion", "Technical", "Industry"].map((cat) => {
                    const active = selectedBlogCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedBlogCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                          active 
                            ? "bg-[#064E3B] text-white border border-[#d4af37]/30" 
                            : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                        }`}
                      >
                        {cat === "All" ? (isRtl ? "الكل" : "All") : cat}
                      </button>
                    );
                  })}
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {filteredBlogs.map((post) => (
                    <div key={post.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover-lift">
                      <div className={`p-6 ${isRtl ? "text-right" : "text-left"} space-y-4`}>
                        <span className="font-mono text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded border border-[#d4af37]/35 inline-block">
                          {isRtl ? post.categoryAr : post.category}
                        </span>
                        <h4 
                          className="font-display font-extrabold text-base text-slate-900 hover:text-emerald-900 cursor-pointer line-clamp-2 leading-snug"
                          onClick={() => setSelectedArticle(post)}
                        >
                          {isRtl ? post.titleAr : post.title}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-3">
                          {isRtl ? post.excerptAr : post.excerpt}
                        </p>
                      </div>
                      <div className={`px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                        <span>{post.date}</span>
                        <button onClick={() => setSelectedArticle(post)} className="font-sans font-extrabold text-emerald-900 hover:underline inline-flex items-center gap-1.5 cursor-pointer">
                          <span>{isRtl ? "اقرأ البحث" : "Read Article"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RENDER DYNAMIC PRICING SUBTAB: glossary */}
            {pricingSubTab === "glossary" && (
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto pt-4 animate-in fade-in duration-300 ${isRtl ? "text-right" : "text-left"}`}>
                {glossaryTerms.map((term, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm hover-lift space-y-3">
                    <div className={`flex justify-between items-center ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                      <span className="font-display font-extrabold text-base md:text-lg text-slate-950">{term.term}</span>
                      <span className="text-sm md:text-base font-bold text-emerald-900">{term.termAr}</span>
                    </div>
                    <div className="w-16 h-0.5 bg-[#d4af37]/30" />
                    <p className="text-sm text-slate-600 leading-relaxed font-medium pt-1">
                      {isRtl ? term.definitionAr : term.definition}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* RENDER DYNAMIC PRICING SUBTAB: faq */}
            {pricingSubTab === "faq" && (
              <div className={`space-y-4 max-w-4xl mx-auto pt-4 animate-in fade-in duration-300 ${isRtl ? "text-right" : "text-left"}`}>
                {faqItems.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm hover:border-[#d4af37]/30 transition-all duration-300">
                    <h4 className="font-display font-extrabold text-base text-slate-950 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-850 shrink-0 mt-0.5" />
                      <span>{isRtl ? item.questionAr : item.question}</span>
                    </h4>
                    <p className={`text-sm text-slate-600 leading-relaxed mt-3.5 pl-8 ${isRtl ? "pr-8 pl-0 text-right" : "pl-8 text-left"} font-medium`}>
                      {isRtl ? item.answerAr : item.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </section>
        )}

        {/* VIEW: CONNECT OFFICE */}
        {activeTab === "contact" && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header top info */}
            <div className="text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                {isRtl ? "المراسلات والاتصال" : "COMPLIANCE CHANNEL"}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                {t.contactTitle}
              </h2>
              <p className="max-w-2xl mx-auto text-base text-slate-500 font-semibold leading-relaxed">
                {t.contactSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
              
              {/* Left Column Contact Information */}
              <div className={`lg:col-span-5 space-y-6 ${isRtl ? "lg:order-2 text-right" : "text-left"}`}>
                
                {/* Office locations card with large, readable text */}
                <div className="bg-emerald-950 text-white rounded-3xl p-6 md:p-8 border border-[#d4af37]/25 space-y-6">
                  <h3 className="font-display font-bold text-lg text-[#d4af37] border-b border-white/10 pb-3">{t.contactOffice}</h3>
                  <div className="space-y-4.5 text-sm font-medium">
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {isRtl 
                          ? "برج الفيصلية، الطابق ٢٤، طريق الملك فهد، الرياض، المملكة العربية السعودية"
                          : "Al Faisaliah Tower, 24th Floor, King Fahd Road, Riyadh, Kingdom of Saudi Arabia"}
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {isRtl 
                          ? "مركز دبي المالي العالمي، برج البوابة، دبي، الإمارات العربية المتحدة"
                          : "DIFC, The Gate Precinct, Dubai, United Arab Emirates"}
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
                      <span>compliance@halalchain.com</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                      <span>+966 11 409 2000</span>
                    </div>
                  </div>
                </div>

                {/* Specific department channels */}
                <div className="space-y-4">
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl hover:border-[#d4af37]/35 transition-all">
                    <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-widest mb-1.5">{t.contactSales}</h4>
                    <p className="text-xs font-bold text-emerald-900 font-mono">institutions@halalchain.com</p>
                  </div>
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl hover:border-[#d4af37]/35 transition-all">
                    <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-widest mb-1.5">{t.contactPartnerships}</h4>
                    <p className="text-xs font-bold text-emerald-900 font-mono">academic@halalchain.com</p>
                  </div>
                </div>
              </div>

              {/* Right Column Interactive Form with large inputs and focus gold rings */}
              <div className={`lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-md ${isRtl ? "lg:order-1 text-right" : "text-left"}`}>
                
                {contactSuccess ? (
                  <div className="p-10 text-center space-y-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-emerald-950">{isRtl ? "تم إرسال طلبكم بنجاح" : "Inquiry Safely Transmitted"}</h3>
                    <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed font-semibold">
                      {t.contactSuccess}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2 text-left">
                        <label className={`text-xs font-bold text-slate-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormName}</label>
                        <input
                          type="text"
                          required
                          className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition-all ${isRtl ? "text-right" : "text-left"}`}
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-2 text-left">
                        <label className={`text-xs font-bold text-slate-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormEmail}</label>
                        <input
                          type="email"
                          required
                          className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition-all ${isRtl ? "text-right" : "text-left"}`}
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div className="space-y-2 text-left">
                        <label className={`text-xs font-bold text-slate-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormCompany}</label>
                        <input
                          type="text"
                          required
                          className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition-all ${isRtl ? "text-right" : "text-left"}`}
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        />
                      </div>
                      {/* Service selector */}
                      <div className="space-y-2 text-left">
                        <label className={`text-xs font-bold text-slate-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormService}</label>
                        <select
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition-all"
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
                    <div className="space-y-2 text-left">
                      <label className={`text-xs font-bold text-slate-500 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.contactFormMessage}</label>
                      <textarea
                        required
                        rows={4}
                        className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition-all ${isRtl ? "text-right" : "text-left"}`}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-emerald-950 hover:bg-emerald-900 text-white text-sm font-extrabold rounded-xl transition-all shadow-sm cursor-pointer hover:shadow-md"
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
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto border border-[#d4af37]/20">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`space-y-5 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
              <span className="font-mono text-xs font-bold text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded border border-[#d4af37]/35 inline-block">
                {isRtl ? selectedArticle.categoryAr : selectedArticle.category}
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-950 leading-tight block pt-2">
                {isRtl ? selectedArticle.titleAr : selectedArticle.title}
              </h3>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-4">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{isRtl ? selectedArticle.readTimeAr : selectedArticle.readTime}</span>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent my-4" />
              <p className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-line font-medium">
                {isRtl ? selectedArticle.contentAr : selectedArticle.content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="halalchain-primary-footer" className="bg-white border-t border-slate-200 py-16 md:py-20 text-sm text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand block */}
          <div className={`md:col-span-4 space-y-5 ${isRtl ? "text-right" : "text-left"}`}>
            <Logo size="sm" showTagline={true} isRtl={isRtl} />
            <p className="text-slate-400 leading-relaxed font-medium text-xs">
              {t.companyDesc}
            </p>
          </div>

          {/* Quick links columns - perfectly routing back into unified switcher states! */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Services */}
            <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">{isRtl ? "الفئات والتصنيف" : "CERTIFICATION CLASSES"}</h4>
              <ul className="space-y-3 text-xs">
                <li><button onClick={() => navigateTo("screening", "services")} className="hover:text-emerald-950 hover:underline cursor-pointer">Sharia Compliance</button></li>
                <li><button onClick={() => navigateTo("screening", "services")} className="hover:text-emerald-950 hover:underline cursor-pointer">DAO Sharia Governance</button></li>
                <li><button onClick={() => navigateTo("screening", "services")} className="hover:text-emerald-950 hover:underline cursor-pointer">Smart Contract Security</button></li>
                <li><button onClick={() => navigateTo("screening", "services")} className="hover:text-emerald-950 hover:underline cursor-pointer">Tokenomics Assessment</button></li>
              </ul>
            </div>

            {/* Methodology */}
            <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">{isRtl ? "إطار التقييم" : "SCREENING CORE"}</h4>
              <ul className="space-y-3 text-xs">
                <li><button onClick={() => navigateTo("screening", "methodology")} className="hover:text-emerald-950 hover:underline cursor-pointer">AAOIFI Standards</button></li>
                <li><button onClick={() => navigateTo("screening", "methodology")} className="hover:text-emerald-950 hover:underline cursor-pointer">Whitepaper Review</button></li>
                <li><button onClick={() => navigateTo("screening", "methodology")} className="hover:text-emerald-950 hover:underline cursor-pointer">Revenue Forensics</button></li>
                <li><button onClick={() => navigateTo("screening", "methodology")} className="hover:text-emerald-950 hover:underline cursor-pointer">On-Chain Monitoring</button></li>
              </ul>
            </div>

            {/* Registry */}
            <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">{isRtl ? "السجل العام" : "KNOWLEDGE ASSETS"}</h4>
              <ul className="space-y-3 text-xs">
                <li><button onClick={() => navigateTo("registry", "explore")} className="hover:text-emerald-950 hover:underline cursor-pointer">Active Halal Registry</button></li>
                <li><button onClick={() => navigateTo("registry", "verify")} className="hover:text-emerald-950 hover:underline cursor-pointer">Verify Certificate</button></li>
                <li><button onClick={() => navigateTo("pricing", "insights")} className="hover:text-emerald-950 hover:underline cursor-pointer">Research Papers</button></li>
                <li><button onClick={() => navigateTo("pricing", "glossary")} className="hover:text-emerald-950 hover:underline cursor-pointer">Term glossary</button></li>
              </ul>
            </div>

            {/* Corporate */}
            <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">{isRtl ? "عن المؤسسة" : "CORPORATE OFFICE"}</h4>
              <ul className="space-y-3 text-xs">
                <li><button onClick={() => navigateTo("home")} className="hover:text-emerald-950 hover:underline cursor-pointer">Independence Charter</button></li>
                <li><button onClick={() => navigateTo("home")} className="hover:text-emerald-950 hover:underline cursor-pointer">Sharia Jurist Board</button></li>
                <li><button onClick={() => navigateTo("contact")} className="hover:text-emerald-950 hover:underline cursor-pointer">Riyadh & Dubai offices</button></li>
                <li><button onClick={() => navigateTo("pricing", "rates")} className="hover:text-emerald-950 hover:underline cursor-pointer">Compliance Pricing</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400 text-center">
          <div>
            © {new Date().getFullYear()} HALALCHAIN™ Independent Certification Board. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-600 cursor-pointer">{isRtl ? "سياسة الخصوصية" : "Privacy Policy"}</span>
            <span className="hover:text-slate-600 cursor-pointer">{isRtl ? "شروط الخدمة والأرشفة" : "Terms of Certification"}</span>
            <span className="hover:text-slate-600 cursor-pointer">{isRtl ? "إخلاء المسؤولية المستقل" : "Independence Charter"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
