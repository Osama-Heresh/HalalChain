/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RegistryProject {
  id: string;
  name: string;
  logoColor: string;
  logoChar: string;
  blockchain: string;
  category: string;
  categoryAr: string;
  certificateType: string;
  certificateTypeAr: string;
  status: "Valid" | "Expired" | "Suspended" | "Under Review";
  statusAr: string;
  issueDate: string;
  expiryDate: string;
  certificateNumber: string;
  riskRating: "Low" | "Low-Medium" | "Medium" | "High";
  riskRatingAr: string;
  description: string;
  descriptionAr: string;
  tokenTicker: string;
  auditedSmartContracts: string[];
  residentScholarOpinion: string;
  residentScholarOpinionAr: string;
  governanceScore: number;
}

export const registryProjects: RegistryProject[] = [
  {
    id: "solana-halal",
    name: "Aura Ledger Protocol",
    logoColor: "from-emerald-600 to-teal-500",
    logoChar: "A",
    blockchain: "Solana",
    category: "Layer-1 Blockchain",
    categoryAr: "سلسلة كتل من الطبقة الأولى",
    certificateType: "Sharia Compliance Certificate",
    certificateTypeAr: "شهادة التوافق الشرعي للبروتوكولات",
    status: "Valid",
    statusAr: "صالح",
    issueDate: "2025-08-15",
    expiryDate: "2026-08-14",
    certificateNumber: "HC-2025-8902",
    riskRating: "Low",
    riskRatingAr: "منخفض المخاطر",
    description: "An enterprise-grade high-throughput Layer-1 blockchain focusing on fast transaction confirmations and fully transparent gas fee allocation with zero hidden inflationary pools.",
    descriptionAr: "سلسلة كتل عالية الأداء من الطبقة الأولى مخصصة للمؤسسات، تركز على تأكيد المعاملات السريعة وتوزيع رسوم معاملات شفاف بالكامل دون وجود أحواض تضخم خفية.",
    tokenTicker: "AURA",
    auditedSmartContracts: [
      "AuraValidatorStaking.sol",
      "AuraTreasuryVault.sol",
      "AuraTokenDistributor.sol"
    ],
    residentScholarOpinion: "Reviewed thoroughly by the Sharia Board. All yield mechanisms represent actual validator work compensation (Ujrah) without any interest-bearing (Riba) or speculative options.",
    residentScholarOpinionAr: "تمت مراجعته بدقة من الهيئة الشرعية. جميع آليات العائد تمثل مكافأة حقيقية لعمل المدققين (أجرة) وخالية من أي شبهات ربا أو خيارات مضاربة غير مشروعة.",
    governanceScore: 94
  },
  {
    id: "khalij-stable",
    name: "Khaleej Stable Coin",
    logoColor: "from-amber-500 to-yellow-600",
    logoChar: "K",
    blockchain: "Ethereum",
    category: "Asset-Backed Stablecoin",
    categoryAr: "عملة مستقرة مدعومة بأصول",
    certificateType: "Sharia Compliance Certificate",
    certificateTypeAr: "شهادة التوافق الشرعي للبروتوكولات",
    status: "Valid",
    statusAr: "صالح",
    issueDate: "2025-11-01",
    expiryDate: "2026-10-31",
    certificateNumber: "HC-2025-7711",
    riskRating: "Low",
    riskRatingAr: "منخفض المخاطر",
    description: "A digital stablecoin pegged to the physical gold reserves stored in audits-verified secured vaults in the GCC, representing actual ownership of bullion assets.",
    descriptionAr: "عملة رقمية مستقرة مربوطة باحتياطيات الذهب المادي المخزن في خزائن مؤمنة ومحققة بالتدقيق في منطقة الخليج العربي، وتمثل ملكية حقيقية لأصول سبائك الذهب.",
    tokenTicker: "KSCG",
    auditedSmartContracts: [
      "KhaleejGoldPeg.sol",
      "ReserveOracleClient.sol",
      "KhaleejMintController.sol"
    ],
    residentScholarOpinion: "This asset represents a true commodity-backed instrument (Sarf) with immediate ownership settlement and 1:1 tangible gold backing. Approved with absolute ethical compliance.",
    residentScholarOpinionAr: "يمثل هذا الأصل أداة حقيقية مدعومة بالسلع (صرف) مع تسوية فورية للملكية واحتياطي ذهب مادي بنسبة 1:1. معتمد بتوافق أخلاقي وشرعي مطلق.",
    governanceScore: 98
  },
  {
    id: "baraka-finance",
    name: "Baraka Decentralized Yield",
    logoColor: "from-blue-600 to-indigo-500",
    logoChar: "B",
    blockchain: "Polygon",
    category: "DeFi Lending Protocol",
    categoryAr: "بروتوكول إقراض لامركزي",
    certificateType: "Sharia Governance Certificate",
    certificateTypeAr: "شهادة الحوكمة والتحكم الشرعي",
    status: "Valid",
    statusAr: "صالح",
    issueDate: "2026-01-20",
    expiryDate: "2027-01-19",
    certificateNumber: "HC-2026-1209",
    riskRating: "Low-Medium",
    riskRatingAr: "منخفض إلى متوسط المخاطر",
    description: "An interest-free peer-to-peer liquidity protocol modeled after Islamic Murabaha and profit-loss sharing structures (Mudharabah) for institutional commodities trading on-chain.",
    descriptionAr: "بروتوكول سيولة وتداول تشاركي خالٍ من الفائدة مصمم على أساس المرابحة والمضاربة الإسلامية لتمويل صفقات تجارة السلع الحقيقية على السلسلة للمؤسسات.",
    tokenTicker: "BARA",
    auditedSmartContracts: [
      "BarakaMudharabahPool.sol",
      "BarakaMurabahaBroker.sol",
      "EmergencyPauseKeeper.sol"
    ],
    residentScholarOpinion: "Certified under rigorous structural screening. The platform operates on real commodities and contract-based profits. The interest-free mechanism complies with Sharia prohibitions on Riba.",
    residentScholarOpinionAr: "معتمد تحت فحص هيكلي صارم. تعمل المنصة على سلع حقيقية وأرباح مبنية على العقود. تتوافق الآلية الخالية من الفوائد مع أحكام الشريعة في تحريم الربا.",
    governanceScore: 89
  },
  {
    id: "decentral-waqf",
    name: "Decentral Waqf Foundation",
    logoColor: "from-emerald-700 to-emerald-500",
    logoChar: "W",
    blockchain: "Arbitrum",
    category: "Decentralized Waqf (Endowment)",
    categoryAr: "وقف لامركزي",
    certificateType: "Sharia Governance Certificate",
    certificateTypeAr: "شهادة الحوكمة والتحكم الشرعي",
    status: "Valid",
    statusAr: "صالح",
    issueDate: "2025-06-10",
    expiryDate: "2026-06-09",
    certificateNumber: "HC-2025-5544",
    riskRating: "Low",
    riskRatingAr: "منخفض المخاطر",
    description: "A smart contract-based social endowment pool designed to automate donations, distribute yields to verified global humanitarian initiatives, and retain principal capital ethically.",
    descriptionAr: "حوض أوقاف اجتماعي مبني على العقود الذكية لأتمتة التبرعات وتوزيع العوائد على المبادرات الإنسانية العالمية المعتمدة مع الحفاظ على رأس المال الأصلي بشكل أخلاقي.",
    tokenTicker: "WAQF",
    auditedSmartContracts: [
      "WaqfVaultManager.sol",
      "ZakatDistributionGate.sol",
      "MultiSigWaqfTrustees.sol"
    ],
    residentScholarOpinion: "Verified as a valid digital endowment (Waqf) structure. Capital distributions are locked in non-speculative real-estate and commodity pools. Highly recommended for charitable Web3 integrations.",
    residentScholarOpinionAr: "تم التحقق منه كبنية وقف رقمي صحيحة شرعاً. توزيعات رأس المال محصورة في أحواض عقارية وسلعية غير مضاربية. يوصى به بشدة للتكامل الخيري في الويب 3.",
    governanceScore: 97
  },
  {
    id: "eth-sharia-dex",
    name: "Tayyib Exchange Protocol",
    logoColor: "from-violet-600 to-purple-500",
    logoChar: "T",
    blockchain: "Ethereum",
    category: "Decentralized Exchange",
    categoryAr: "منصة تداول لامركزية",
    status: "Under Review",
    statusAr: "قيد المراجعة",
    issueDate: "2025-02-10",
    expiryDate: "2026-02-09",
    certificateNumber: "HC-2025-4112",
    riskRating: "Medium",
    riskRatingAr: "متوسط المخاطر",
    certificateType: "Sharia Compliance Certificate",
    certificateTypeAr: "شهادة التوافق الشرعي للبروتوكولات",
    description: "A decentralized exchange that filters out non-compliant pools and token trading pairs, restricting liquidity provision to Sharia-certified assets only.",
    descriptionAr: "منصة تداول لامركزية تقوم بتصفية مجمعات السيولة وأزواج التداول غير المتوافقة شرعياً، وتحصر توفير السيولة في الأصول المعتمدة إسلامياً فقط.",
    tokenTicker: "TYB",
    auditedSmartContracts: [
      "TayyibFactory.sol",
      "TayyibPairFilter.sol"
    ],
    residentScholarOpinion: "The project is currently undergoing its annual monitoring. A pending code update on dynamic swap fees is being audited to ensure no exploitative arbitrage (Gharar) is introduced.",
    residentScholarOpinionAr: "المشروع يمر حالياً بمرحلة المراقبة والتدقيق السنوي. يجري تدقيق تحديث كود معلق لرسوم المقايضة الديناميكية لضمان عدم إدخال أي ممارسات تلاعب أو غرر.",
    governanceScore: 82
  },
  {
    id: "sahm-tokenized",
    name: "Sahm Tokenized Agriculture",
    logoColor: "from-green-600 to-amber-500",
    logoChar: "S",
    blockchain: "Avalanche",
    category: "Tokenized Real Asset (RWA)",
    categoryAr: "أصول حقيقية مبرمجة (RWA)",
    certificateType: "Tokenomics Sustainability Assessment",
    certificateTypeAr: "تقييم استدامة الرموز ونموذج التوكن",
    status: "Valid",
    statusAr: "صالح",
    issueDate: "2026-03-05",
    expiryDate: "2027-03-04",
    certificateNumber: "HC-2026-3045",
    riskRating: "Low-Medium",
    riskRatingAr: "منخفض إلى متوسط المخاطر",
    description: "An on-chain fractionalized ownership protocol representing actual agricultural farm lands and physical harvest distributions in Southeast Asia, structured on Salam contracts.",
    descriptionAr: "بروتوكول ملكية مجزأة على السلسلة يمثل مزارع زراعية حقيقية وتوزيعات محاصيل فعلية في جنوب شرق آسيا، وتمت هيكلته استناداً إلى عقود السلم الشرعية.",
    tokenTicker: "SAHM",
    auditedSmartContracts: [
      "SahmFarmOwnershipRegistry.sol",
      "SahmSalamDistribution.sol"
    ],
    residentScholarOpinion: "This is a beautiful application of classic forward-sale (Salam) contract in blockchain format. Highly sustainable tokenomics fully backed by seasonal physical crops. Complies with AAOIFI Standard 21.",
    residentScholarOpinionAr: "هذا تطبيق ممتاز لعقد السلم الكلاسيكي في تقنية البلوكشين. نموذج اقتصادي مستدام للغاية مدعوم بالكامل بمحاصيل مادية موسمية. متوافق مع معيار الأيوفي رقم 21.",
    governanceScore: 91
  },
  {
    id: "apex-lending-bad",
    name: "Apex Interest Pool",
    logoColor: "from-red-600 to-rose-500",
    logoChar: "X",
    blockchain: "Base",
    category: "Yield Aggregator",
    categoryAr: "مجمع عوائد رقمي",
    certificateType: "Sharia Compliance Certificate",
    certificateTypeAr: "شهادة التوافق الشرعي للبروتوكولات",
    status: "Suspended",
    statusAr: "موقوف",
    issueDate: "2024-05-12",
    expiryDate: "2025-05-11",
    certificateNumber: "HC-2024-0019",
    riskRating: "High",
    riskRatingAr: "عال المخاطر",
    description: "An automated yield optimizer that dynamically shifts capital to variable interest rate lending pools across arbitrary networks.",
    descriptionAr: "مجمع عوائد مؤتمت ينقل رأس المال ديناميكياً بين أحواض إقراض بفائدة متغيرة عبر شبكات متعددة غير منضبطة بضوابط الشريعة.",
    tokenTicker: "APEX",
    auditedSmartContracts: [
      "ApexLeverageManager.sol"
    ],
    residentScholarOpinion: "Suspended indefinitely. The platform integrated interest-bearing deposits (Riba) and synthetic derivatives which explicitly violate core Islamic finance guidelines. Non-compliant status logged permanently.",
    residentScholarOpinionAr: "تم الإيقاف لأجل غير مسمى. قامت المنصة بدمج ودائع إقراض ربوية ومشتقات صناعية تخالف صراحةً محددات الشريعة الإسلامية. تم تسجيل حالة عدم التوافق بصفة دائمة.",
    governanceScore: 40
  },
  {
    id: "al-hilal-real-estate",
    name: "Hilal Tokenized Real Estate",
    logoColor: "from-teal-600 to-yellow-500",
    logoChar: "H",
    blockchain: "Ethereum",
    category: "Tokenized Real Asset (RWA)",
    categoryAr: "أصول حقيقية مبرمجة (RWA)",
    certificateType: "Sharia Compliance Certificate",
    certificateTypeAr: "شهادة التوافق الشرعي للبروتوكولات",
    status: "Valid",
    statusAr: "صالح",
    issueDate: "2025-09-01",
    expiryDate: "2026-08-31",
    certificateNumber: "HC-2025-9922",
    riskRating: "Low",
    riskRatingAr: "منخفض المخاطر",
    description: "Fractionalized ownership of commercial real estate portfolios, yielding rent-based distribution (Ijarah) to token holders.",
    descriptionAr: "ملكية مجزأة لمحفظة من العقارات التجارية تمنح عوائد إيجارية حقيقية (إجارة) لحاملي الرموز بصفة دورية ومنتظمة.",
    tokenTicker: "HRE",
    auditedSmartContracts: [
      "HilalIjarahDistributor.sol",
      "HilalPropertyRegistrar.sol"
    ],
    residentScholarOpinion: "Fully compliant structure. The underlying lease agreement conforms perfectly to AAOIFI Ijarah standards. Financial flows and rent collections are verified on-chain quarterly.",
    residentScholarOpinionAr: "هيكل متوافق بالكامل. يتطابق عقد الإيجار الأساسي مع معايير الإجارة لدى هيئة الأيوفي (AAOIFI). يتم التحقق من التدفقات المالية وتحصيل الإيجار على السلسلة بشكل ربع سنوي.",
    governanceScore: 95
  },
  {
    id: "retro-nft-pool",
    name: "Artisan Digital Collectibles",
    logoColor: "from-pink-500 to-purple-600",
    logoChar: "D",
    blockchain: "Cardano",
    category: "NFT Platform",
    categoryAr: "منصة رموز غير قابلة للاستبدال (NFT)",
    certificateType: "Sharia Compliance Certificate",
    certificateTypeAr: "شهادة التوافق الشرعي للبروتوكولات",
    status: "Expired",
    statusAr: "منتهية الصلاحية",
    issueDate: "2024-04-10",
    expiryDate: "2025-04-09",
    certificateNumber: "HC-2024-1188",
    riskRating: "Medium",
    riskRatingAr: "متوسط المخاطر",
    description: "A specialized platform hosting certified digital Islamic calligraphic artwork and authentic virtual museum exhibits.",
    descriptionAr: "منصة متخصصة تستضيف أعمال الخط العربي الرقمي المعتمدة والمعروضات المتحفية الافتراضية الأصلية.",
    tokenTicker: "ART",
    auditedSmartContracts: [
      "ArtisanNFTStore.sol"
    ],
    residentScholarOpinion: "Certificate expired. The project did not request annual renewal or complete the required compliance updates. Investors should exercise caution as dynamic updates are no longer monitored.",
    residentScholarOpinionAr: "انتهت صلاحية الشهادة. لم يطلب المشروع التجديد السنوي أو يكمل تحديثات الالتزام المطلوبة. يجب على المستثمرين توخي الحذر لعدم خضوع التحديثات لمراقبتنا حالياً.",
    governanceScore: 70
  }
];

export function findCertificate(num: string): RegistryProject | undefined {
  const normalized = num.trim().toUpperCase();
  return registryProjects.find(
    (p) => p.certificateNumber.toUpperCase() === normalized || p.id.toUpperCase() === normalized
  );
}
