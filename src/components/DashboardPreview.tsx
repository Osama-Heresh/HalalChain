/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Shield, Activity, BarChart3, Database, CheckSquare, Layers, Sparkles, RefreshCw, AlertCircle } from "lucide-react";

interface DashboardPreviewProps {
  isRtl?: boolean;
}

export default function DashboardPreview({ isRtl = false }: DashboardPreviewProps) {
  const [activeTab, setActiveTab] = useState("compliance");
  const [liveBlocks, setLiveBlocks] = useState<any[]>([]);

  // Simulation of live blockchain security blocks being scanned in real-time
  useEffect(() => {
    const initialBlocks = [
      { id: "AURA", type: "Solana Contract", method: "AuraStaking.sol", status: "Secure", rating: 98, time: "Just now" },
      { id: "KSCG", type: "Gold Stablecoin", method: "ReserveOracle.sol", status: "Lawful", rating: 99, time: "1 min ago" },
      { id: "BARA", type: "Polygon Yield", method: "MurabahaPool.sol", status: "Secure", rating: 89, time: "4 mins ago" },
    ];
    setLiveBlocks(initialBlocks);

    const interval = setInterval(() => {
      const projects = ["Aura Ledger", "Khaleej stable", "Baraka Yield", "Tayyib DEX", "Sahm Agri"];
      const tickers = ["AURA", "KSCG", "BARA", "TYB", "SAHM"];
      const files = ["ValidatorStaking.sol", "PegOracle.sol", "MudharabahPool.sol", "PairFilter.sol", "SalamDistribution.sol"];
      const statuses = ["Secure", "Lawful", "Audited"];
      
      const randIdx = Math.floor(Math.random() * projects.length);
      const newBlock = {
        id: tickers[randIdx],
        type: projects[randIdx],
        method: files[randIdx],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        rating: Math.floor(Math.random() * 15) + 85,
        time: "Just now"
      };

      setLiveBlocks((prev) => [newBlock, ...prev.slice(0, 2)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="halal-dashboard-preview" className="w-full bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl font-sans text-slate-100">
      {/* Top Window Chrome */}
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-slate-950 px-3 py-1 rounded-md text-[10px] font-mono text-slate-500 border border-slate-800/80 tracking-wider">
          {isRtl ? "لوحة المراقبة الفورية — حلال تشين" : "https://compliance.halalchain.com/live"}
        </div>
        <div className="w-12" />
      </div>

      {/* Main SaaS Dashboard Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
        
        {/* Mock Sidebar */}
        <div className="md:col-span-3 bg-slate-900/40 p-4 border-r border-slate-800 space-y-4">
          <div className="flex items-center gap-2 px-2 pb-2 border-b border-slate-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              {isRtl ? "البث المباشر نشط" : "LIVE TELEMETRY"}
            </span>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => setActiveTab("compliance")}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold transition-colors ${
                isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
              } ${
                activeTab === "compliance"
                  ? "bg-slate-800 text-[#d4af37] border-l-2 border-[#d4af37]"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>{isRtl ? "مراقبة الالتزام الشرعي" : "Compliance Guard"}</span>
            </button>

            <button
              onClick={() => setActiveTab("audits")}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold transition-colors ${
                isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
              } ${
                activeTab === "audits"
                  ? "bg-slate-800 text-[#d4af37] border-l-2 border-[#d4af37]"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5 shrink-0" />
              <span>{isRtl ? "سجل فحص الكود" : "Smart Contract Audits"}</span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold transition-colors ${
                isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
              } ${
                activeTab === "analytics"
                  ? "bg-slate-800 text-[#d4af37] border-l-2 border-[#d4af37]"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 shrink-0" />
              <span>{isRtl ? "إحصائيات وحجم الأصول" : "Volume Analytics"}</span>
            </button>
          </div>
        </div>

        {/* Mock Content area */}
        <div className="md:col-span-9 p-5 space-y-5 flex flex-col justify-between">
          
          {/* Top Row: Metrics Overview */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
              <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">{isRtl ? "إجمالي الأصول المفحوصة" : "Total Assets Screened"}</span>
              <span className="text-sm md:text-lg font-bold text-emerald-400 mt-1 block font-mono">$12.48B</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
              <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">{isRtl ? "عقود ذكية مراقبة" : "Smart Contracts Tracked"}</span>
              <span className="text-sm md:text-lg font-bold text-[#d4af37] mt-1 block font-mono">14,204</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
              <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">{isRtl ? "معدل الأمان العام" : "Ecosystem Health"}</span>
              <span className="text-sm md:text-lg font-bold text-teal-400 mt-1 block font-mono">98.4%</span>
            </div>
          </div>

          {/* Dynamic tabs render content */}
          {activeTab === "compliance" && (
            <div className="space-y-3">
              <div className={`flex items-center justify-between ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                <h4 className="text-xs font-bold text-[#d4af37] flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{isRtl ? "بث عمليات التدقيق الفورية لكيبيرز" : "Live Keeper Verification Stream"}</span>
                </h4>
                <span className="text-[9px] font-mono text-slate-500">POLLING PORT: 3000</span>
              </div>

              <div className="space-y-2">
                {liveBlocks.map((block, idx) => (
                  <div key={idx} className={`bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs animate-in slide-in-from-top-1 duration-300 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                      <span className="w-8 h-8 rounded-lg bg-emerald-950 border border-[#d4af37]/30 text-[#d4af37] font-bold flex items-center justify-center font-mono">
                        {block.id}
                      </span>
                      <div className={isRtl ? "text-right" : "text-left"}>
                        <div className="font-bold text-slate-100">{block.type}</div>
                        <div className="font-mono text-[10px] text-slate-500 mt-0.5">{block.method}</div>
                      </div>
                    </div>

                    <div className={`flex items-center gap-4 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800/40">
                        {block.status}
                      </span>
                      <span className="font-mono text-slate-400 font-semibold">{block.rating}%</span>
                      <span className="text-[10px] text-slate-500 hidden sm:inline">{block.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "audits" && (
            <div className="space-y-3 text-left">
              <h4 className="text-xs font-bold text-[#d4af37] flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-emerald-500" />
                <span>{isRtl ? "تفاصيل حالة تدقيق الأكواد" : "Security Vulnerability Index"}</span>
              </h4>

              <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-xl space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isRtl ? "الثغرات الخطيرة" : "Critical Exploits"}</span>
                  <span className="font-mono text-rose-500 font-bold bg-rose-950/50 px-2 py-0.5 rounded">0 Detected</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-0" />
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isRtl ? "مخاطر تضخم المعروض" : "Supply Inflation risk"}</span>
                  <span className="font-mono text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded">PASSED</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isRtl ? "شفافية حوكمة التصويت" : "DAO Voting Fairness"}</span>
                  <span className="font-mono text-[#d4af37] font-bold bg-amber-950/30 px-2 py-0.5 rounded">EXCELLENT (94%)</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#d4af37] h-full w-[94%]" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-3 text-left">
              <h4 className="text-xs font-bold text-[#d4af37] flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{isRtl ? "الأصول المعتمدة حسب الشبكة" : "Certified Volume Distribution"}</span>
              </h4>

              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[#d4af37] font-bold text-xs">$5.4B</div>
                  <div className="text-slate-500 mt-1">Ethereum</div>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[#d4af37] font-bold text-xs">$3.2B</div>
                  <div className="text-slate-500 mt-1">Solana</div>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[#d4af37] font-bold text-xs">$2.1B</div>
                  <div className="text-slate-500 mt-1">Polygon</div>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[#d4af37] font-bold text-xs">$1.7B</div>
                  <div className="text-slate-500 mt-1">Arbitrum</div>
                </div>
              </div>

              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                <p className="leading-relaxed">
                  {isRtl 
                    ? "نمو تدفق رؤوس الأموال الأخلاقية المعتمدة يرتفع بنسبة 42% ربع سنوياً مع رغبة المزيد من الصناديق في التصفية الشرعية."
                    : "Ethical venture allocations rose 42% quarter-on-quarter, driven by institutions mandating independent Sharia certification."}
                </p>
              </div>
            </div>
          )}

          {/* Bottom telemetry indicators */}
          <div className="pt-3 border-t border-slate-800/50 flex items-center justify-between text-[9px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <RefreshCw className="w-2.5 h-2.5 text-emerald-500 animate-[spin_4s_linear_infinite]" />
              <span>{isRtl ? "المراقبة اللامركزية تعمل بشكل مثالي" : "HALALCHAIN KEEPER SECURE CLIENT v1.4.1"}</span>
            </span>
            <span>PING: 14ms</span>
          </div>

        </div>
      </div>
    </div>
  );
}
