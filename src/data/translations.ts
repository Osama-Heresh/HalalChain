/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranslationSet {
  navHome: string;
  navServices: string;
  navMethodology: string;
  navRegistry: string;
  navVerification: string;
  navPricing: string;
  navAbout: string;
  navBlog: string;
  navContact: string;
  langName: string;
  langSwitch: string;
  tagline: string;
  getCertified: string;
  verifyCert: string;
  viewMethodology: string;
  exploreRegistry: string;
  companyDesc: string;
  notExchange: string;
  notInvestment: string;
  notSeller: string;
  independentDisclaimer: string;
  heroTitle: string;
  heroSubtitle: string;
  
  // Trust Section
  trustTitle: string;
  trustSubtitle: string;
  trustIndependentTitle: string;
  trustIndependentDesc: string;
  trustTechTitle: string;
  trustTechDesc: string;
  trustScholarsTitle: string;
  trustScholarsDesc: string;
  trustMethodologyTitle: string;
  trustMethodologyDesc: string;
  trustMonitoringTitle: string;
  trustMonitoringDesc: string;

  // Process Steps
  procTitle: string;
  procSubtitle: string;
  procStep1: string;
  procStep1Desc: string;
  procStep2: string;
  procStep2Desc: string;
  procStep3: string;
  procStep3Desc: string;
  procStep4: string;
  procStep4Desc: string;
  procStep5: string;
  procStep5Desc: string;
  procStep6: string;
  procStep6Desc: string;
  procStep7: string;
  procStep7Desc: string;
  procStep8: string;
  procStep8Desc: string;
  procStep9: string;
  procStep9Desc: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutMission: string;
  aboutMissionDesc: string;
  aboutVision: string;
  aboutVisionDesc: string;
  aboutIndependenceTitle: string;
  aboutIndependenceDesc: string;
  aboutValuesTitle: string;
  aboutValuesDesc: string;
  teamTitle: string;
  teamSubtitle: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormCompany: string;
  contactFormService: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactSuccess: string;
  contactOffice: string;
  contactSales: string;
  contactPartnerships: string;
}

export const translations = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navMethodology: "Methodology",
    navRegistry: "Registry",
    navVerification: "Verify",
    navPricing: "Pricing",
    navAbout: "About Us",
    navBlog: "Insights",
    navContact: "Contact",
    langName: "English",
    langSwitch: "العربية",
    tagline: "Where Blockchain Meets Sharia",
    getCertified: "Get Certified",
    verifyCert: "Verify Certificate",
    viewMethodology: "Our Methodology",
    exploreRegistry: "Explore Registry",
    companyDesc: "HalalChain™ is an independent Sharia compliance organization. We provide expert Sharia compliance screening, technical analysis, and certification for Web3 protocols, smart contracts, and tokenomics models.",
    notExchange: "We are NOT an exchange.",
    notInvestment: "We are NOT an investment platform.",
    notSeller: "We do NOT sell cryptocurrencies.",
    independentDisclaimer: "HalalChain™ operates as an autonomous, unbiased certification body. We do not participate in market trading, asset promotion, or financial advisory services, ensuring total independence and compliance integrity.",
    heroTitle: "Where Blockchain Meets Sharia Compliance",
    heroSubtitle: "The global gold standard in independent Sharia certification, smart contract auditing, and tokenomics compliance for the Web3 economy.",
    
    // Trust Section
    trustTitle: "The Standard of Trust in Halal Web3",
    trustSubtitle: "Why leading Layer-1 protocols, decentralized applications, and enterprise token issuers choose HalalChain™.",
    trustIndependentTitle: "Uncompromising Independence",
    trustIndependentDesc: "We do not hold stakes in screened assets, run node operations, or provide market trading, eliminating any conflict of interest.",
    trustTechTitle: "Deep Technical Auditing",
    trustTechDesc: "Our on-chain engineers audit smart contracts, token distribution contracts, and consensus layers for structural fairness and security.",
    trustScholarsTitle: "Distinguished Sharia Board",
    trustScholarsDesc: "Our reviews are directed by world-renowned Sharia scholars specializing in Islamic finance, digital assets, and contemporary transaction laws.",
    trustMethodologyTitle: "Rigorous Mathematical Framework",
    trustMethodologyDesc: "A highly systematic model combining AAOIFI guidelines, financial forensics, and quantitative on-chain transparency rules.",
    trustMonitoringTitle: "Continuous On-Chain Monitoring",
    trustMonitoringDesc: "Compliance is not a one-time stamp. We continuously track on-chain behavior, governance updates, and smart contract alterations.",

    // Process
    procTitle: "Our Certification Process",
    procSubtitle: "A highly rigorous, multi-stage compliance journey combining on-chain technical audit with senior Sharia scholar review.",
    procStep1: "1. Application Intake",
    procStep1Desc: "Projects submit detailed whitepapers, technical documentation, tokenomics designs, and repository links.",
    procStep2: "2. Document Alignment",
    procStep2Desc: "Our analysts organize structured documents to assess compliance across technical, business, and operational fronts.",
    procStep3: "3. Whitepaper Review",
    procStep3Desc: "A detailed review of the core business logic, utility of the token, and target market to identify non-compliant elements.",
    procStep4: "4. Code Security Audit",
    procStep4Desc: "Deep smart contract analysis checking for backdoor exploits, centralization risks, and dynamic minting integrity.",
    procStep5: "5. Financial Forensic Audit",
    procStep5Desc: "Analyzing yield mechanisms, staking protocols, liquidity pools, and transaction fees to guarantee zero Riba or Gharar elements.",
    procStep6: "6. Board Scholarly Review",
    procStep6Desc: "Distinguished scholars conduct detailed legal (Fiqh) analysis of the on-chain operations and tokenomics.",
    procStep7: "7. Compliance Reporting",
    procStep7Desc: "We deliver an extensive compliance assessment draft mapping out any required structural improvements.",
    procStep8: "8. Certification Decision",
    procStep8Desc: "Upon resolving all critical compliance issues, the Sharia Board issues the formal certification.",
    procStep9: "9. Public Registry Log",
    procStep9Desc: "The certified project is logged onto our global Halal Registry with an immutable cryptographic license number.",

    // About Section
    aboutTitle: "The Global Authority on Sharia Web3 Compliance",
    aboutSubtitle: "Bridging Islamic ethical financial principles with cutting-edge decentralized architectures.",
    aboutMission: "Our Mission",
    aboutMissionDesc: "To foster absolute trust and ethical clarity in the Web3 space by providing mathematically rigorous, highly transparent, and universally accepted Sharia screening and technical audit services.",
    aboutVision: "Our Vision",
    aboutVisionDesc: "To become the undisputed global certification framework that enables 1.9 billion Muslims to confidently participate in and shape the future of decentralized finance, Web3, and digital assets.",
    aboutIndependenceTitle: "Strict Autonomy and Neutrality",
    aboutIndependenceDesc: "HalalChain™ was established with a singular focus: absolute independence. We do not issue tokens, we do not operate protocols, and we have zero financial exposure to the assets we review. This separation guarantees that our certificates are issued with absolute integrity, strictly representing compliance status without market bias.",
    aboutValuesTitle: "Our Core Pillars",
    aboutValuesDesc: "1. Theological Fidelity: Grounded in classic Fiqh al-Muamalat updated for the digital age.\n2. On-Chain Precision: Combining code-level smart contract analysis with financial forensics.\n3. Universal Transparency: Publishing full methodologies, compliance reports, and audit logs openly to the world.",
    teamTitle: "Our Leadership & Advisory Council",
    teamSubtitle: "A elite alliance of classical Sharia jurists, cryptography professors, security researchers, and Web3 protocol architects.",

    // Contact
    contactTitle: "Connect with Our Compliance Office",
    contactSubtitle: "Inquire about certification, technical smart contract audits, or explore strategic enterprise partnerships.",
    contactFormName: "Full Name",
    contactFormEmail: "Work Email",
    contactFormCompany: "Project / Company Name",
    contactFormService: "Requested Service",
    contactFormMessage: "How can we assist you?",
    contactFormSubmit: "Submit Inquiry",
    contactSuccess: "Thank you. Your inquiry has been received. Our Compliance Officers will contact you within 24 hours.",
    contactOffice: "Global Headquarters",
    contactSales: "Institutional Inquiries",
    contactPartnerships: "Academic & Scholar Partnerships"
  },
  ar: {
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navMethodology: "المنهجية",
    navRegistry: "السجل الرقمي",
    navVerification: "التحقق من الشهادات",
    navPricing: "الأسعار",
    navAbout: "من نحن",
    navBlog: "المدونة والبحوث",
    navContact: "اتصل بنا",
    langName: "العربية",
    langSwitch: "English",
    tagline: "حيث تلتقي التقنية الرقمية بالشريعة الإسلامية",
    getCertified: "احصل على الشهادة",
    verifyCert: "التحقق من الشهادة",
    viewMethodology: "منهجية التقييم",
    exploreRegistry: "تصفح السجل الرقمي",
    companyDesc: "حلال تشين™ هي منصة مستقلة لتدقيق التوافق الشرعي. نحن نقدم تحليلات فنية متخصصة وفحصاً شرعياً شاملاً للبروتوكولات الرقمية والعقود الذكية ونماذج الرموز المميزة (Tokenomics) لمنظومة الويب 3.",
    notExchange: "نحن لسنا منصة تداول.",
    notInvestment: "نحن لسنا منصة استثمارية.",
    notSeller: "نحن لا نبيع العملات المشفرة.",
    independentDisclaimer: "تعمل حلال تشين™ كجهة تصديق مستقلة تماماً ومحايدة. لا نشارك في أي تداول، ترويج للأصول، أو تقديم مشورات مالية، مما يضمن النزاهة المطلقة والحياد الشرعي.",
    heroTitle: "حيث تلتقي تقنية البلوكشين بأحكام الشريعة الإسلامية",
    heroSubtitle: "المعيار العالمي الأعلى في التصديق الشرعي المستقل، تدقيق العقود الذكية، وتقييم نماذج التوكن لاقتصاد الويب 3.",
    
    // Trust Section
    trustTitle: "معيار الثقة الأسمى للويب 3 الحلال",
    trustSubtitle: "لماذا تختار البروتوكولات الكبرى، التطبيقات اللامركزية، ومصدرو الرموز الرقمية منصة حلال تشين™.",
    trustIndependentTitle: "استقلالية تامة دون مساومات",
    trustIndependentDesc: "لا نمتلك أي حصص في الأصول المفحوصة، ولا نشغل العقد الرقمية، مما يضمن خلو تقييماتنا من تضارب المصالح.",
    trustTechTitle: "تدقيق تقني عميق لعقود الكود",
    trustTechDesc: "يقوم مهندسو البلوكشين لدينا بفحص الكود البرمجي للعقود الذكية ومحاكاة المعاملات للتأكد من نزاهة التصميم البرمجي.",
    trustScholarsTitle: "هيئة رقابة شرعية مرموقة",
    trustScholarsDesc: "يتم توجيه جميع مراجعاتنا من قبل نخبة من كبار العلماء والفقهاء المتخصصين في المالية الإسلامية والمعاملات الرقمية المعاصرة.",
    trustMethodologyTitle: "إطار عمل رياضي ومنهجي صارم",
    trustMethodologyDesc: "نموذج تقييم دقيق يدمج معايير الأيوفي (AAOIFI) مع التحليل المالي والتقني على السلسلة.",
    trustMonitoringTitle: "مراقبة مستمرة على السلسلة",
    trustMonitoringDesc: "التوافق ليس مجرد ختم يمنح لمرة واحدة. نحن نتتبع التغيرات البرمجية والحوكمة وتدفقات المعاملات بشكل دائم على الشبكة.",

    // Process
    procTitle: "خطوات عملية التصديق الشرعي",
    procSubtitle: "رحلة تقييم شاملة متعددة المراحل تجمع بين التدقيق البرمجي ومراجعة الهيئة الشرعية.",
    procStep1: "1. تقديم الطلب",
    procStep1Desc: "تقوم المشاريع بتقديم الأوراق البيضاء، الوثائق التقنية، تفاصيل تصميم التوكن، والوصول إلى مستودعات الكود.",
    procStep2: "2. مراجعة وتصنيف الوثائق",
    procStep2Desc: "يقوم محللونا بتنظيم وتصنيف الملفات لدراسة أبعاد المشروع الفنية والاستثمارية والتشغيلية.",
    procStep3: "3. دراسة الورقة البيضاء",
    procStep3Desc: "مراجعة تفصيلية لفكرة المشروع الأساسية، منفعة الرمز الرقمي، ونموذج العمل لاستبعاد أي شبهة أو مخالفة شرعية.",
    procStep4: "4. تدقيق الكود البرمجي",
    procStep4Desc: "تحليل معمق للعقود الذكية للكشف عن الثغرات الأمنية، مخاطر المركزية، وآليات الصك والتجميد غير المنضبطة.",
    procStep5: "5. التدقيق المالي الجنائي",
    procStep5Desc: "تحليل آليات العائد، بروتوكولات الرهن (Staking)، مجمعات السيولة، ورسوم المعاملات لضمان خلوها من الربا أو الغرر.",
    procStep6: "6. مراجعة الهيئة الشرعية",
    procStep6Desc: "يقوم كبار الفقهاء بإجراء دراسة فقهية معمقة للمعاملات الرقمية وآليات عمل الرموز استناداً لأحكام المعاملات المالية.",
    procStep7: "7. إصدار تقرير التوافق",
    procStep7Desc: "نسلم المشروع مسودة تقرير التوافق الشرعي الشامل متضمناً التحسينات الهيكلية أو التعديلات البرمجية المطلوبة.",
    procStep8: "8. قرار منح الشهادة",
    procStep8Desc: "بعد تسوية ومعالجة كافة الملاحظات الشرعية والتقنية بنجاح، تصدر الهيئة الشرعية شهادة التوافق الرسمية.",
    procStep9: "9. التسجيل في السجل العالمي",
    procStep9Desc: "يتم إدراج المشروع المعتمد رسمياً في سجل حلال تشين™ العالمي مع منحه رقم ترخيص رقمي فريد ومثبت شرعياً.",

    // About Section
    aboutTitle: "المرجعية العالمية الأوثق لتوافق الويب 3 مع الشريعة",
    aboutSubtitle: "الربط الفعال والنزيه بين مبادئ الأخلاق المالية الإسلامية وبين البنى التحتية البرمجية اللامركزية.",
    aboutMission: "رسالتنا",
    aboutMissionDesc: "بناء جسور الثقة المطلقة والشفافية الأخلاقية في مساحة الويب 3 من خلال تقديم خدمات فحص شرعي وتدقيق فني برياضيات دقيقة ومنهجية واضحة مقبولة عالمياً.",
    aboutVision: "رؤيتنا",
    aboutVisionDesc: "أن نكون الإطار التنظيمي الشرعي الأول عالمياً لتمكين أكثر من 1.9 مليار مسلم من المشاركة بثقة وأمان في صياغة مستقبل الاقتصاد الرقمي اللامركزي.",
    aboutIndependenceTitle: "استقلالية مطلقة وحياد حقيقي",
    aboutIndependenceDesc: "تأسست حلال تشين™ برؤية راسخة: الاستقلالية المطلقة. نحن لا نصدر أي عملات، ولا نشغل بروتوكولات، وليس لدينا أي مصالح مالية في الأصول والرموز التي نفحصها. هذا الفصل الصارم يضمن صدور شهاداتنا بنزاهة متناهية، لتمثيل التوافق الحقيقي للمشروع دون تحيز تجاري أو تسويقي.",
    aboutValuesTitle: "ركائزنا الأساسية",
    aboutValuesDesc: "1. الأصالة الفقهية: الاستناد إلى فقه المعاملات الكلاسيكي وتطبيقاته المعاصرة لاقتصاد المستقبل الرقمي.\n2. الدقة البرمجية: الدمج الكامل بين هندسة الكود ومحاكاة المعاملات والتحليل المالي الجنائي.\n3. الشفافية المطلقة: نشر المنهجيات التفصيلية، وتقارير التوافق، وسجلات التدقيق علناً دون حجب البيانات.",
    teamTitle: "مجلس القيادة والاستشارات",
    teamSubtitle: "تحالف رفيع المستوى من فقهاء الشريعة وعلماء التشفير وباحثي الأمن البرمجي ومصممي الشبكات اللامركزية.",

    // Contact
    contactTitle: "تواصل مع مكتب التوافق الشرعي",
    contactSubtitle: "استفسر عن خدمات التصديق، التدقيق الفني للعقود الذكية، أو ناقش فرص الشراكة المؤسسية معنا.",
    contactFormName: "الاسم الكامل",
    contactFormEmail: "البريد الإلكتروني للعمل",
    contactFormCompany: "اسم المشروع / الشركة",
    contactFormService: "الخدمة المطلوبة",
    contactFormMessage: "كيف يمكن لمستشارينا مساعدتكم؟",
    contactFormSubmit: "إرسال الطلب",
    contactSuccess: "شكراً لكم. تم استلام طلبكم بنجاح. سيتواصل معكم أحد مسؤولي التوافق في غضون 24 ساعة.",
    contactOffice: "المقر الرئيسي العالمي",
    contactSales: "الاستفسارات المؤسسية والمشاريع",
    contactPartnerships: "الشراكات الأكاديمية والبحثية"
  }
};

export interface ServiceDetail {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  benefits: string[];
  benefitsAr: string[];
  process: string[];
  processAr: string[];
  deliverables: string[];
  deliverablesAr: string[];
  timeline: string;
  timelineAr: string;
  pricing: string;
  pricingAr: string;
  faq: { q: string; qAr: string; a: string; aAr: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "compliance-cert",
    title: "Sharia Compliance Certificate",
    titleAr: "شهادة التوافق الشرعي للبروتوكولات",
    description: "The gold-standard certification verifying that the foundational protocol, token utility, consensus mechanism, and business model align perfectly with classical Sharia transaction law (Fiqh al-Muamalat).",
    descriptionAr: "الشهادة الأسمى التي تؤكد توافق البروتوكول الأساسي، آليات العمل، ونموذج أعمال الرموز الرقمية مع فقه المعاملات المالية الإسلامية بشكل دقيق وخالٍ من الشبهات.",
    benefits: [
      "Unlocks capital from Islamic venture funds, family offices, and retail investors.",
      "Establishes deep ethical credibility in rapid markets.",
      "Full listing in the globally referenced Halal Registry.",
      "Access to continuous advisory for protocol upgrades."
    ],
    benefitsAr: [
      "فتح قنوات الاستثمار والتمويل من الصناديق والمكاتب العائلية الإسلامية.",
      "تأسيس مصداقية أخلاقية راسخة للمشروع في الأسواق العالمية.",
      "إدراج المشروع في السجل الرقمي العالمي حلال تشين™.",
      "الحصول على استشارات مستمرة عند تحديث هياكل البروتوكول."
    ],
    process: [
      "Initial business model analysis & token utility check.",
      "Comprehensive screening of dynamic parameters.",
      "Draft compliance report delivery.",
      "Resolving queries with our resident scholars.",
      "Formal certificate release and registry indexing."
    ],
    processAr: [
      "التحليل الأولي لنموذج الأعمال ومنفعة الرمز الرقمي.",
      "الفحص الشامل للمحددات والخصائص الديناميكية للشبكة.",
      "تسليم مسودة تقرير التوافق لتعديل الملاحظات.",
      "عقد جلسات نقاشية وحل الاستفسارات مع مجلسنا الشرعي.",
      "منح الشهادة الرسمية وأرشفتها في السجل الرقمي."
    ],
    deliverables: [
      "Cryptographically verified Sharia Compliance Certificate PDF.",
      "Public verification link & embeddable badge for website.",
      "Comprehensive Scholar Opinion (Fatwa) Document.",
      "Full evaluation report logged on-chain."
    ],
    deliverablesAr: [
      "شهادة توافق شرعي رقمية مشفرة بصيغة PDF ومحمية برمز استجابة سريع.",
      "رابط تحقق عام مع شارة معتمدة قابلة للتضمين في موقع المشروع.",
      "وثيقة الفتوى الشرعية الصادرة والموقعة من كبار علماء الهيئة.",
      "تقرير التقييم التفصيلي الكامل المؤرشف بصفة رسمية."
    ],
    timeline: "4 to 6 Weeks",
    timelineAr: "4 إلى 6 أسابيع",
    pricing: "Custom Quote (Starting from $12,500)",
    pricingAr: "تسعير مخصص (يبدأ من 12,500 دولار)",
    faq: [
      {
        q: "What standards are used for the screening?",
        qAr: "ما هي المعايير المعتمدة في عملية الفحص؟",
        a: "We integrate AAOIFI standards with HalalChain's proprietary multi-tiered quantitative and qualitative on-chain evaluation frameworks.",
        aAr: "نحن ندمج بين معايير هيئة المحاسبة والمراجعة للمؤسسات المالية الإسلامية (AAOIFI) وبين أطر التقييم الفنية والكمية الخاصة بـ حلال تشين™."
      },
      {
        q: "How long is the certificate valid?",
        qAr: "ما هي مدة صلاحية الشهادة؟",
        a: "The certificate is valid for one year, subject to continuous automated on-chain monitoring and annual audits.",
        aAr: "تظل الشهادة صالحة لمدة عام واحد، وتخضع لمراقبة آلية مستمرة على السلسلة وتدقيق سنوي لتجديدها."
      }
    ]
  },
  {
    id: "governance-cert",
    title: "Sharia Governance Certificate",
    titleAr: "شهادة الحوكمة والتحكم الشرعي",
    description: "Evaluates the governance of decentralized organizations (DAOs), multi-signature protocols, treasury deployments, and voting mechanisms to guarantee equitable stakeholder treatment and transparency.",
    descriptionAr: "تقييم شامل لآليات الحوكمة في المنظمات اللامركزية (DAOs)، ومستودعات التوقيع المتعدد، ونشر الخزانة، وآليات التصويت لضمان العدالة والشفافية التامة بين الأطراف.",
    benefits: [
      "Ensures transparent treasury fund allocations.",
      "Mitigates centralizing governance exploits.",
      "Validates voting powers align with fair ethical structures.",
      "Protects community and retail stakeholders from manipulative protocols."
    ],
    benefitsAr: [
      "ضمان الشفافية المطلقة في توزيع ونشر أموال الخزينة اللامركزية.",
      "الحد من ثغرات الحوكمة المركزة التي تتيح التلاعب بالتصويت.",
      "تأكيد توافق قوى التصويت مع مبادئ العدالة وعدم الإضرار.",
      "حماية مجتمع المشروع والمستثمرين الأفراد من الممارسات الاحتكارية."
    ],
    process: [
      "DAO voting mechanics modeling and simulation.",
      "Treasury investment policy review.",
      "Multi-sig setups and emergency pause keys verification.",
      "Dispute resolution framework alignment."
    ],
    processAr: [
      "نمذجة ومحاكاة آليات التصويت داخل المنظمة اللامركزية.",
      "مراجعة سياسة الاستثمار وإدارة أصول الخزانة.",
      "التحقق من إعدادات التواقيع المتعددة ومفاتيح الإيقاف الطارئ.",
      "مواءمة إطار حل النزاعات وتوزيع الصلاحيات."
    ],
    deliverables: [
      "Sharia Governance Compliance Audit Report.",
      "Treasury Investment Integrity Seal.",
      "On-chain voting safety report."
    ],
    deliverablesAr: [
      "تقرير تدقيق الحوكمة والالتزام بالضوابط الشرعية.",
      "ختم نزاهة استثمار الخزانة والتوافق الأخلاقي.",
      "تقرير سلامة آليات التصويت واللامركزية على السلسلة."
    ],
    timeline: "3 to 5 Weeks",
    timelineAr: "3 إلى 5 أسابيع",
    pricing: "Custom Quote (Starting from $9,500)",
    pricingAr: "تسعير مخصص (يبدأ من 9,500 دولار)",
    faq: [
      {
        q: "Does governance evaluation require DAO members KYC?",
        qAr: "هل يتطلب تقييم الحوكمة التعرف على هوية (KYC) أعضاء المنظمة؟",
        a: "No, we evaluate the algorithmic rules, smart contract parameters, and structural setup without requiring decentralized members' identities.",
        aAr: "لا، نحن نقيم القواعد الخوارزمية، محددات العقود الذكية، والتشكيل الهيكلي للمنظمة دون تطلب كشف الهويات."
      }
    ]
  },
  {
    id: "smart-contract-audit",
    title: "Technical Smart Contract Audit",
    titleAr: "التدقيق التقني والأمني للعقود الذكية",
    description: "Deep security code audit combined with Sharia logic evaluation. Our engineers inspect the solidity/rust files to verify they are free of technical bugs and do not contain hidden backdoors or manipulative yield distribution structures.",
    descriptionAr: "دمج فريد بين الفحص الأمني للكود البرمجي وتقييم المنطق الشرعي. يفحص مهندسونا ملفات الكود لضمان خلوها من الثغرات، البرمجيات الخبيثة، أو بنود التوزيع الاحتكاري.",
    benefits: [
      "Identifies critical, high, and medium technical vulnerabilities.",
      "Ensures the code does what is described in the whitepaper.",
      "Eliminates on-chain manipulation risks and unfair dynamic parameters.",
      "Saves gas consumption through technical optimization review."
    ],
    benefitsAr: [
      "تحديد الثغرات البرمجية والحرجة والمتوسطة في كود العقد.",
      "مطابقة أداء الكود البرمجي مع الوصف المذكور في الورقة البيضاء.",
      "استبعاد مخاطر التلاعب على السلسلة والشروط الديناميكية غير العادلة.",
      "تحسين استهلاك الرسوم (Gas Optimization) عبر مراجعة دقيقة للكود."
    ],
    process: [
      "Automated and manual code analysis using leading security toolsets.",
      "Simulation of attack vectors (reentrancy, front-running).",
      "Analysis of administrative variables and mint/burn control functions.",
      "Delivery of preliminary audit report for immediate fixing."
    ],
    processAr: [
      "تحليل آلي ويدوي للكود باستخدام برمجيات الأمان المتطورة.",
      "محاكاة سيناريوهات الاختراق والهجمات البرمجية الشائعة.",
      "تحليل متغيرات الإدارة والتحكم في صك أو حرق الرموز.",
      "تسليم مسودة التدقيق لتنفيذ الإصلاحات الفورية من قبل المطورين."
    ],
    deliverables: [
      "Cryptographically signed Smart Contract Security Audit Report.",
      "GitHub audit status badge.",
      "Technical remediation advisory."
    ],
    deliverablesAr: [
      "تقرير تدقيق أمان العقود الذكية موقع رقمياً وموثق برمز مشفر.",
      "شارة حالة التدقيق للوضع على منصة GitHub.",
      "ملحق استشاري لمعالجة وإصلاح المشاكل البرمجية."
    ],
    timeline: "2 to 4 Weeks",
    timelineAr: "أسبوعين إلى 4 أسابيع",
    pricing: "Based on Lines of Code (Starting from $7,500)",
    pricingAr: "حسب حجم الكود البرمجي (يبدأ من 7,500 دولار)",
    faq: [
      {
        q: "What languages do you support?",
        qAr: "ما هي لغات البرمجة التي تدعمونها؟",
        a: "We support Solidity, Rust, Vyper, Move, and Go smart contract implementations.",
        aAr: "ندعم لغات Solidity و Rust و Vyper و Move و Go المخصصة لبناء العقود الذكية."
      }
    ]
  },
  {
    id: "tokenomics-assessment",
    title: "Tokenomics Sustainability Assessment",
    titleAr: "تقييم استدامة الرموز ونموذج التوكن",
    description: "Evaluates the supply schedule, inflation/deflation models, allocation structures, and utility loops to verify long-term economic sustainability, avoiding Ponzi-like high-yield failures and predatory distribution patterns.",
    descriptionAr: "تقييم جدول معروض الرموز، نماذج التضخم والانكماش، آليات التوزيع، والمنفعة لضمان الاستدامة الاقتصادية على المدى الطويل وخلو النموذج من آليات الاحتيال والهياكل الهرمية.",
    benefits: [
      "Guarantees tokenomics design avoids hidden Ponzi-like staking mechanics.",
      "Verifies founder and investor vesting schedule is fair and transparent.",
      "Mitigates dump and manipulation risks at unlock events.",
      "Validates supply parameters conform to sustainable ecosystem models."
    ],
    benefitsAr: [
      "ضمان خلو تصميم التوكن من آليات الاسترداد الهرمية المشابهة للاحتيال.",
      "التحقق من عدالة وشفافية جداول استحقاق الرموز للمؤسسين والمستثمرين.",
      "تقليل مخاطر التسييل المفاجئ والتلاعب بالسوق عند تحرير الرموز.",
      "تأكيد تماشي متغيرات المعروض مع نماذج بيئية مستدامة وحقيقية."
    ],
    process: [
      "Dynamic modeling of inflation curves.",
      "Inspection of dynamic distribution and treasury locking protocols.",
      "Analysis of platform utility requirement.",
      "Stress testing tokenomics under heavy exit pressures."
    ],
    processAr: [
      "النمذجة الديناميكية لمنحنيات التضخم والمعروض.",
      "فحص عمليات التوزيع وحظر الرموز للخزانة والمؤسسين.",
      "تحليل القيمة النفعية الحقيقية لطلب الرمز داخل المنصة.",
      "اختبار تحمل نموذج التوكن تحت ظروف البيع المكثف وضغوط الخروج."
    ],
    deliverables: [
      "Mathematical Tokenomics Sustainability Seal.",
      "Stress-Test Simulation Output Report.",
      "Scholarly Statement on Tokenomics Equity."
    ],
    deliverablesAr: [
      "ختم التوافق الرياضي والاستدامة لنظام التوكن.",
      "تقرير مخرجات محاكاة واختبارات التحمل الاقتصادي.",
      "وثيقة رأي الهيئة في عدالة ونزاهة نموذج التوكن الاقتصادي."
    ],
    timeline: "3 Weeks",
    timelineAr: "3 أسابيع",
    pricing: "Fixed Price ($8,000)",
    pricingAr: "سعر ثابت (8,000 دولار)",
    faq: [
      {
        q: "Why is tokenomics evaluation a Sharia concern?",
        qAr: "لماذا تهم هندسة التوكن الهيئة الشرعية؟",
        a: "Islamic finance strictly prohibits unfair gain, deceptive speculation (Gharar), and unstable structures designed to benefit early adopters at the detriment of latecomers.",
        aAr: "تحرم الشريعة الإسلامية الكسب غير العادل، الغرر، والمشاريع الهرمية التي تصمم لإفادة الأوائل وإلحاق الضرر المحتم بمن يدخل لاحقاً."
      }
    ]
  },
  {
    id: "transparency-rating",
    title: "Transparency & Disclosure Rating",
    titleAr: "تصنيف الشفافية والإفصاح للويب 3",
    description: "An exhaustive audit rating a project's true decentralization levels, source code verification, developer multi-sig disclosures, team custody allocations, and financial reserves clarity.",
    descriptionAr: "تدقيق متكامل يمنح تصنيفاً لمشروعات الويب 3 بناءً على مستوى اللامركزية الحقيقي، مطابقة الكود المفتوح، الإفصاح عن تواقيع المطورين، وحجم الاحتياطيات المالية والسيولة.",
    benefits: [
      "Significantly boosts community confidence and on-chain trust.",
      "Attracts risk-conscious corporate allocators.",
      "Full transparency audit documentation published dynamically.",
      "Establishes pre-emptive compliance with emerging regulations."
    ],
    benefitsAr: [
      "زيادة ثقة مجتمع المشروع والمستثمرين بشكل ملموس على السلسلة.",
      "جذب رؤوس الأموال المؤسسية والمستثمرين المهتمين بإدارة المخاطر.",
      "نشر تقرير الشفافية بشكل تفاعلي متاح لعامة المهتمين.",
      "تأسيس ممتثل يسبق اللوائح التنظيمية والرقابية الناشئة عالمياً."
    ],
    process: [
      "Decentralization index analysis.",
      "Custodial setup and hardware wallet disclosure check.",
      "On-chain treasury asset allocation forensics.",
      "Dynamic data feeds (oracles) safety evaluation."
    ],
    processAr: [
      "تحليل مؤشر اللامركزية وتوزيع القوة التشغيلية.",
      "فحص إعدادات الحفظ والأمان وإفصاحات المحافظ الباردة.",
      "تتبع وتحليل أصول الخزانة على السلسلة جنائياً.",
      "تقييم أمان ومصداقية مزودي البيانات (Oracles) المغذية للعقود."
    ],
    deliverables: [
      "Official HalalChain Transparency Scorecard.",
      "Comprehensive Reserves Verification Ledger.",
      "Dynamic API integration for real-time status display."
    ],
    deliverablesAr: [
      "بطاقة تصنيف وشفافية حلال تشين™ الرسمية.",
      "تقرير مطابقة ومراجعة الاحتياطيات المالية المتاحة.",
      "تكامل برمجي عبر واجهة الـ API لعرض حالة الشفافية مباشرة بموقع المشروع."
    ],
    timeline: "2 to 3 Weeks",
    timelineAr: "أسبوعين إلى 3 أسابيع",
    pricing: "Fixed Price ($5,000)",
    pricingAr: "سعر ثابت (5,000 دولار)",
    faq: [
      {
        q: "How often is the Transparency score updated?",
        qAr: "كم مرة يتم تحديث تصنيف الشفافية؟",
        a: "The score is updated quarterly based on changes in dynamic administrative controls and treasury on-chain transactions.",
        aAr: "يتم تحديث التصنيف بشكل ربع سنوي استناداً للتحولات في الصلاحيات الإدارية وحركات أصول الخزانة على الشبكة."
      }
    ]
  },
  {
    id: "security-assessment",
    title: "Security Assessment",
    titleAr: "التقييم الأمني الشامل للبنية التحتية",
    description: "Evaluates the complete off-chain and on-chain infrastructure surrounding the Web3 project, including Web application hosting, DNS configuration, and administrative private key management.",
    descriptionAr: "تقييم البنية التحتية البرمجية المحيطة بالمشروع بالكامل داخلياً وخارجياً، ويشمل ذلك استضافة مواقع الويب، تكوين نطاق الـ DNS، وإدارة المفاتيح الخاصة بالمديرين.",
    benefits: [
      "Shields projects from DNS hijacking and frontend hacking.",
      "Secures corporate administrative operations.",
      "Guarantees that private key custody structures are enterprise-hardened.",
      "Minimizes the likelihood of flash loan and external script exploits."
    ],
    benefitsAr: [
      "حماية المشروع من عمليات اختطاف النطاق (DNS Hijacking) واختراق واجهات المستخدم.",
      "تأمين العمليات الإدارية الحساسة للشركة والمطورين.",
      "ضمان صياغة عمليات حفظ المفاتيح الخاصة على مستوى أمني مؤسسي متين.",
      "تقليل مخاطر ثغرات القروض السريعة وتمرير نصوص الاختراق الخارجية."
    ],
    process: [
      "Vulnerability assessment of administrative web portals.",
      "DNS configuration validation and security policy check.",
      "Key custody architecture review (HSM, MPC, cold setups).",
      "Mock penetration simulation of server endpoints."
    ],
    processAr: [
      "تقييم الثغرات الأمنية للبوابات الرقمية ولوحات التحكم الإدارية.",
      "التحقق من إعدادات نطاقات الـ DNS وسياسات الأمان.",
      "مراجعة بنية حفظ المفاتيح (مثل HSM و MPC والمحافظ الباردة).",
      "محاكاة هجمات اختراق وهمية لاختبار منافذ الخوادم."
    ],
    deliverables: [
      "Technical Infrastructure Hardening Report.",
      "DNS Integrity Certification Badge.",
      "Custody Best Practices Blueprint."
    ],
    deliverablesAr: [
      "تقرير تحصين وتدعيم البنية التحتية التقنية للمشروع.",
      "شارة اعتماد سلامة ونزاهة نطاقات الـ DNS.",
      "دليل وأفضل ممارسات إدارة وحفظ المفاتيح الخاصة."
    ],
    timeline: "2 Weeks",
    timelineAr: "أسبوعين",
    pricing: "Fixed Price ($6,000)",
    pricingAr: "سعر ثابت (6,000 دولار)",
    faq: [
      {
        q: "Why is off-chain security part of Sharia certification?",
        qAr: "لماذا يعد الأمان غير المتصل بالشبكة جزءاً من التصديق الشرعي؟",
        a: "Protecting user wealth (Hifz al-Mal) is one of the five core objectives (Maqasid) of Sharia law. A system with weak security risking client assets is fundamentally non-compliant.",
        aAr: "حفظ المال هو أحد الكليات الخمس والمقاصد الضرورية في الشريعة الإسلامية. فالأنظمة الضعيفة أمنياً والتي تعرض أموال المستخدمين للخطر تفتقر هيكلياً للتوافق الشرعي."
      }
    ]
  },
  {
    id: "annual-monitoring",
    title: "Annual Compliance Monitoring",
    titleAr: "المراقبة والتدقيق الشرعي السنوي المستمر",
    description: "Ongoing automated and manual auditing tracking updates, fork migrations, and financial flow modifications over the course of a 12-month certification period to ensure sustained compliance.",
    descriptionAr: "عمليات مراقبة وتدقيق دورية آلية ويدوية لمتابعة التحديثات، هجرات الشبكة، والتحولات في المعاملات المالية على مدار فترة الترخيص البالغة 12 شهراً لضمان بقائه حلالاً.",
    benefits: [
      "Maintains valid active certificate status in our Halal Registry.",
      "Immediate alert if upgrade contracts violate original Sharia parameters.",
      "Regular quarterly feedback and update reports.",
      "Public confidence boost as a verified ethically-active project."
    ],
    benefitsAr: [
      "الحفاظ على حالة الترخيص النشطة والصالحة في سجل حلال تشين™ العام.",
      "إرسال تنبيهات برمجية فورية في حال تعارض تحديثات الأكواد مع المحددات الشرعية المقرة.",
      "الحصول على تقارير مراجعة ربع سنوية مفصلة للتطورات الشرعية.",
      "تعزيز ثقة الجمهور من خلال تأكيد استمرارية الالتزام الأخلاقي والتقني."
    ],
    process: [
      "Automated tracking of admin contract transactions.",
      "Quarterly technical repository diff checks.",
      "Periodic financial flow audits for dynamic liquidity yields.",
      "Continuous support desk access for advice on code updates."
    ],
    processAr: [
      "التتبع الآلي للعمليات الصادرة عن العقود الإدارية للمشروع.",
      "إجراء مقارنة ربع سنوية لتغيرات الكود في مستودعات التطوير.",
      "مراجعة دورية لتدفقات السيولة والأرباح الناتجة عن مجمعات الاستثمار.",
      "دعم استشاري مستمر لتحديثات الكود وتطوير هياكل الرموز قبل نشرها."
    ],
    deliverables: [
      "Quarterly Status Reports (4 per annum).",
      "Dynamic License Renewal upon successful 12-month audit.",
      "Priority advisory on upcoming governance updates."
    ],
    deliverablesAr: [
      "تقارير الحالة ربع السنوية (4 تقارير في العام).",
      "تجديد الترخيص الرقمي والشهادة بعد إتمام الـ 12 شهراً بنجاح.",
      "أولوية الاستشارات للميزات والتطويرات المستقبلية."
    ],
    timeline: "12 Months (Continuous)",
    timelineAr: "12 شهراً (مستمر)",
    pricing: "Custom Quote (Starting from $6,000/year)",
    pricingAr: "تسعير مخصص (يبدأ من 6,000 دولار سنوياً)",
    faq: [
      {
        q: "What happens if a contract upgrade violates Sharia criteria?",
        qAr: "ماذا يحدث إذا أدى تحديث الكود البرمجي لمخالفة المعايير الشرعية؟",
        a: "The project's status is shifted to 'Under Review'. They are given 14 business days to patch or roll back before a suspension or expiration is logged.",
        aAr: "تتحول حالة المشروع فوراً إلى 'قيد المراجعة'، ويمنح المطورون مهلة 14 يوم عمل للتعديل أو التراجع قبل تعليق أو إلغاء الشهادة في السجل."
      }
    ]
  },
  {
    id: "script-verification",
    title: "Halal Web3 Script Verification",
    titleAr: "التحقق البرمجي التفاعلي لنصوص الويب 3",
    description: "A unique technical validation verifying the functional logic of external JavaScript/TypeScript SDKs, API scripts, and frontend dApp connection mechanics to prevent client-side security manipulation.",
    descriptionAr: "مراجعة تقنية متقدمة للتحقق من سلامة نصوص الـ JavaScript/TypeScript، واجهات الـ API، والاتصال بين الواجهات والعقود لحماية المستخدمين من هجمات الحقن البرمجي.",
    benefits: [
      "Prevents client-side phishing and wallet drainage injections.",
      "Verifies user interface displays true on-chain parameters accurately.",
      "Cryptographically confirms the frontend client hasn't been altered.",
      "Assures complete transactional transparency at the browser layer."
    ],
    benefitsAr: [
      "الحد من عمليات الاحتيال في الواجهات وحقن الأكواد الموجهة لسرقة المحافظ.",
      "التحقق من أن واجهة المستخدم تعرض المتغيرات الحقيقية للسلسلة بدقة.",
      "التأكيد المشفر على عدم التلاعب بالنصوص البرمجية في واجهة المتصفح.",
      "ضمان الشفافية المطلقة في تنفيذ المعاملات عند تصفح المنصة."
    ],
    process: [
      "Source code analysis of the React/HTML bundle.",
      "DNS and CDN hosting policy validation.",
      "Frontend payload inspection during smart contract calls.",
      "Signature verification protocol check."
    ],
    processAr: [
      "تحليل كود المصدر الخاص بالحزم البرمجية للواجهات (React/HTML).",
      "التحقق من سياسات الأمان للاستضافة وشبكات التوصيل (CDNs).",
      "فحص حمولة الواجهة الأمامية أثناء استدعاء العقود الذكية.",
      "مراجعة بروتوكول التحقق والتحصين من التوقيع المزدوج."
    ],
    deliverables: [
      "Frontend Script Integrity Certificate.",
      "Secure Frontend Embed JS Script.",
      "Continuous build pipeline validation hook."
    ],
    deliverablesAr: [
      "شهادة سلامة ونزاهة نصوص الواجهة البرمجية للموقع.",
      "كود برمجى مشفر وآمن للتضمين في صفحات dApp التابعة للمشروع.",
      "مؤشر تحقق تلقائي يتم تفعيله مع كل عملية بناء برمجية جديدة."
    ],
    timeline: "2 Weeks",
    timelineAr: "أسبوعين",
    pricing: "Fixed Price ($4,500)",
    pricingAr: "سعر ثابت (4,500 دولار)",
    faq: [
      {
        q: "Does this protect against zero-day dApp exploits?",
        qAr: "هل يحمي هذا من ثغرات يوم الصفر في التطبيقات اللامركزية؟",
        a: "Yes, our automated validation hook re-scans the production bundles continuously on every major build deployment to ensure no unauthorized changes were injected.",
        aAr: "نعم، يقوم الفحص البرمجي التلقائي بإعادة مسح حزم الإنتاج باستمرار مع كل عملية نشر برمجية لضمان عدم تمرير أكواد غير مصرح بها."
      }
    ]
  }
];
