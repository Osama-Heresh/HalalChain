/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { registryProjects, RegistryProject } from "../data/registry";
import CertificatePreview from "./CertificatePreview";
import { generateCertificatePDF } from "../utils/pdfGenerator";
import { Search, Filter, ArrowUpDown, Eye, CheckCircle, AlertTriangle, HelpCircle, X, ChevronRight, Download } from "lucide-react";

interface RegistryViewProps {
  isRtl?: boolean;
}

type SortField = "name" | "issueDate" | "expiryDate" | "governanceScore";
type SortOrder = "asc" | "desc";

export default function RegistryView({ isRtl = false }: RegistryViewProps) {
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [blockchainFilter, setBlockchainFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Sorting State
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  // Selected Project for Certificate Modal
  const [selectedProject, setSelectedProject] = useState<RegistryProject | null>(null);

  // Extract unique values for filter dropdowns
  const blockchains = useMemo(() => {
    const list = new Set(registryProjects.map((p) => p.blockchain));
    return ["All", ...Array.from(list)];
  }, []);

  const categories = useMemo(() => {
    const list = new Set(registryProjects.map((p) => (isRtl ? p.categoryAr : p.category)));
    return ["All", ...Array.from(list)];
  }, [isRtl]);

  const riskRatings = ["All", "Low", "Low-Medium", "Medium", "High"];

  const statuses = ["All", "Valid", "Expired", "Suspended", "Under Review"];

  // Toggle Sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return registryProjects
      .filter((project) => {
        const matchesSearch =
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tokenTicker.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.certificateNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.blockchain.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "All" || project.status === statusFilter;
        const matchesBlockchain = blockchainFilter === "All" || project.blockchain === blockchainFilter;
        const matchesRisk = riskFilter === "All" || project.riskRating === riskFilter;
        
        const projectCategoryValue = isRtl ? project.categoryAr : project.category;
        const matchesCategory = categoryFilter === "All" || projectCategoryValue === categoryFilter;

        return matchesSearch && matchesStatus && matchesBlockchain && matchesRisk && matchesCategory;
      })
      .sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (typeof valA === "string") {
          valA = (valA as string).toLowerCase();
          valB = (valB as string).toLowerCase();
        }

        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [searchTerm, statusFilter, blockchainFilter, riskFilter, categoryFilter, sortField, sortOrder, isRtl]);

  // Helper for rendering status badges in grid table
  const renderStatusBadge = (status: string, statusAr: string) => {
    const config = {
      Valid: { bg: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      Expired: { bg: "bg-amber-50 text-amber-700 border-amber-200" },
      Suspended: { bg: "bg-rose-50 text-rose-700 border-rose-200" },
      "Under Review": { bg: "bg-blue-50 text-blue-700 border-blue-200" },
    };

    const style = config[status as keyof typeof config] || config.Valid;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${style.bg}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        {isRtl ? statusAr : status}
      </span>
    );
  };

  // Helper for rendering risk badges
  const renderRiskBadge = (risk: string, riskAr: string) => {
    const config = {
      Low: { bg: "bg-emerald-50/70 text-emerald-800", text: "Low Risk" },
      "Low-Medium": { bg: "bg-emerald-50/40 text-emerald-600", text: "Low-Medium" },
      Medium: { bg: "bg-amber-50 text-amber-800", text: "Medium Risk" },
      High: { bg: "bg-rose-50 text-rose-800", text: "High Risk" },
    };
    const style = config[risk as keyof typeof config] || config.Low;
    return (
      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${style.bg}`}>
        {isRtl ? riskAr : style.text}
      </span>
    );
  };

  return (
    <div id="halal-registry-root" className="w-full">
      {/* Search and Filters panel */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-slate-100/50 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#064E3B]" />
            <span>{isRtl ? "قاعدة بيانات المشاريع المعتمدة" : "Global Halal Registry Database"}</span>
          </h2>
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className={`absolute inset-y-0 ${isRtl ? "left-3" : "right-3"} flex items-center pointer-events-none text-slate-400`}>
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder={isRtl ? "بحث بالاسم، الرمز، أو رقم الترخيص..." : "Search by name, ticker, or license..."}
              className={`w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 ${isRtl ? "pr-5 pl-10 text-right" : "pl-5 pr-10 text-left"} text-sm focus:outline-none focus:ring-1 focus:ring-[#064E3B] focus:border-[#064E3B] transition-colors`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
          {/* Status Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-left">
              {isRtl ? "حالة الترخيص" : "Compliance Status"}
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#064E3B] cursor-pointer"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">{isRtl ? "الكل" : "All Statuses"}</option>
              {statuses.slice(1).map((s) => (
                <option key={s} value={s}>
                  {isRtl ? (s === "Valid" ? "صالح" : s === "Expired" ? "منتهي الصلاحية" : s === "Suspended" ? "موقوف" : "قيد المراجعة") : s}
                </option>
              ))}
            </select>
          </div>

          {/* Blockchain Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-left">
              {isRtl ? "الشبكة / السلسلة" : "Blockchain Network"}
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#064E3B] cursor-pointer"
              value={blockchainFilter}
              onChange={(e) => setBlockchainFilter(e.target.value)}
            >
              <option value="All">{isRtl ? "كل الشبكات" : "All Networks"}</option>
              {blockchains.slice(1).map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-left">
              {isRtl ? "الفئة التصنيفية" : "Project Category"}
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#064E3B] cursor-pointer"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">{isRtl ? "كل الفئات" : "All Categories"}</option>
              {categories.slice(1).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Risk Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-left">
              {isRtl ? "تصنيف المخاطر" : "Risk Rating"}
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#064E3B] cursor-pointer"
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
            >
              <option value="All">{isRtl ? "كل تصنيفات المخاطر" : "All Risk Ratings"}</option>
              {riskRatings.slice(1).map((r) => (
                <option key={r} value={r}>
                  {isRtl ? (r === "Low" ? "منخفض" : r === "Low-Medium" ? "منخفض إلى متوسط" : r === "Medium" ? "متوسط" : "مرتفع") : r}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse text-left text-sm text-slate-700">
            <thead className="bg-slate-50/80 border-b border-slate-100 text-slate-500 uppercase tracking-wider text-xs font-semibold">
              <tr>
                <th
                  onClick={() => handleSort("name")}
                  className={`p-4 cursor-pointer hover:bg-gray-100 transition-colors ${isRtl ? "text-right" : "text-left"}`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{isRtl ? "اسم المشروع" : "Project Name"}</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>{isRtl ? "الشبكة" : "Blockchain"}</th>
                <th className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>{isRtl ? "التصنيف" : "Category"}</th>
                <th className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>{isRtl ? "الحالة الشرعية" : "Compliance"}</th>
                <th
                  onClick={() => handleSort("issueDate")}
                  className={`p-4 cursor-pointer hover:bg-gray-100 transition-colors ${isRtl ? "text-right" : "text-left"}`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{isRtl ? "تاريخ الإصدار" : "Issue Date"}</span>
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>{isRtl ? "رقم الترخيص" : "License #"}</th>
                <th className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>{isRtl ? "درجة المخاطر" : "Risk Rating"}</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-4">
                      <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${project.logoColor} text-white font-display font-bold flex items-center justify-center shrink-0`}>
                          {project.logoChar}
                        </div>
                        <div className={isRtl ? "text-right" : "text-left"}>
                          <span className="font-bold text-gray-900 block tracking-tight">{project.name}</span>
                          <span className="font-mono text-xs text-gray-400 font-semibold">{project.tokenTicker}</span>
                        </div>
                      </div>
                    </td>
                    <td className={`p-4 font-semibold text-gray-600 ${isRtl ? "text-right" : "text-left"}`}>{project.blockchain}</td>
                    <td className={`p-4 text-xs text-gray-500 ${isRtl ? "text-right" : "text-left"}`}>
                      {isRtl ? project.categoryAr : project.category}
                    </td>
                    <td className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>
                      {renderStatusBadge(project.status, project.statusAr)}
                    </td>
                    <td className={`p-4 font-mono text-xs text-gray-500 ${isRtl ? "text-right" : "text-left"}`}>{project.issueDate}</td>
                    <td className={`p-4 font-mono text-xs font-bold text-amber-700 ${isRtl ? "text-right" : "text-left"}`}>{project.certificateNumber}</td>
                    <td className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>
                      {renderRiskBadge(project.riskRating, project.riskRatingAr)}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 rounded-lg border border-emerald-200/50 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{isRtl ? "عرض الشهادة" : "View License"}</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-gray-400 italic">
                    {isRtl ? "لا توجد نتائج تطابق خيارات البحث." : "No projects found matching the criteria."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certificate Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-2 md:p-6 my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal top bar */}
            <div className={`flex items-center justify-between border-b border-gray-100 pb-4 mb-4 px-4 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              <div className={isRtl ? "text-right" : "text-left"}>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  {isRtl ? "مستند التوافق الشرعي الرقمي" : "Digital Compliance Documentation"}
                </h3>
                <p className="text-xs text-gray-400 font-mono">ID: {selectedProject.id}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="max-h-[75vh] overflow-y-auto px-1 md:px-4 space-y-8">
              {/* Certificate Embedded */}
              <CertificatePreview project={selectedProject} isRtl={isRtl} />

              {/* Extra technical details */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-2xl p-6 border border-gray-100 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">
                    {isRtl ? "الأكواد والبرمجيات الخاضعة للتدقيق" : "Audited Smart Contracts"}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.auditedSmartContracts.map((file, i) => (
                      <li key={i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200/50 text-xs font-mono text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="break-all">{file}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">
                    {isRtl ? "بيان الامتثال الفني" : "Technical Compliance Statement"}
                  </h4>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/50 space-y-2 text-xs text-gray-500 leading-relaxed">
                    <p>
                      {isRtl
                        ? "تمت مطابقة العقود الذكية على السلسلة بنجاح مع آليات نموذج التوكن. تم استبعاد أي دالات صك غير منضبطة أو دالات حرق وتجميد تتيح استغلال الأموال."
                        : "The on-chain smart contracts are verified to match tokenomics distribution bounds. There are no dynamic backdoor minting functions or unilateral pause permissions configured."}
                    </p>
                    <p className="font-mono text-[10px] text-gray-400">
                      SECURED BY HALALCHAIN KEEPER® CLIENT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom controls */}
            <div className={`flex items-center justify-between border-t border-gray-100 pt-4 mt-4 px-4 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              <span className="text-[10px] font-mono text-gray-400">
                {isRtl ? "حلال تشين™ جهة ترخيص رقمي مستقلة" : "HalalChain™ Independent Certification Authority"}
              </span>
              <button
                onClick={() => generateCertificatePDF(selectedProject)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950 text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isRtl ? "تحميل بصيغة PDF" : "Download PDF File"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
