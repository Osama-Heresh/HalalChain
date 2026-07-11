/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  date: string;
  readTime: string;
  readTimeAr: string;
  imageName: string;
}

export interface GlossaryTerm {
  term: string;
  termAr: string;
  definition: string;
  definitionAr: string;
}

export interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "sharia-principles-defi",
    title: "Understanding Sharia Principles in Decentralized Finance (DeFi)",
    titleAr: "فهم مبادئ الشريعة الإسلامية في التمويل اللامركزي (DeFi)",
    category: "Research Paper",
    categoryAr: "ورقة بحثية",
    excerpt: "An in-depth analysis of how smart contract automated lending and yield farming map to classical Fiqh al-Muamalat parameters.",
    excerptAr: "تحليل معمق لكيفية مطابقة الإقراض التلقائي للعقود الذكية وزراعة العوائد مع محددات فقه المعاملات المالية كلاسيكياً.",
    content: "Decentralized Finance (DeFi) presents a revolutionary shift in financial architectures. However, for Islamic participants, the structural mechanisms must conform to theological ethical boundaries. The three primary prohibitions in Islamic transaction law are Riba (usury/interest), Gharar (excessive ambiguity/speculation), and Maysir (gambling). Classical yield farming that offers guaranteed variable interest on locked tokens is classified as Riba. However, when the yield is generated through actual commodity trading (Murabaha) or mutual profit-and-loss sharing pools (Mudharabah), where capital is exposed to real business risk, the yield becomes lawful (Halal). Smart contract parameters must be audited to verify that no hidden dynamic interest rules are active on the chain.",
    contentAr: "يمثل التمويل اللامركزي (DeFi) تحولاً ثورياً في البنى المالية. ومع ذلك، بالنسبة للمشاركين المسلمين، يجب أن تتوافق الآليات الهيكلية مع الحدود الأخلاقية والشرعية. المحظورات الثلاثة الرئيسية في قانون المعاملات الإسلامي هي الربا (الفائدة)، الغرر (الجهالة الفاحشة والمخاطرة)، والميسر (القمار). يتم تصنيف زراعة العوائد الكلاسيكية التي تقدم فائدة متغيرة مضمونة على الرموز المغلقة على أنها ربا. ومع ذلك، عندما يتم إنشاء العائد من خلال تداول السلع الفعلي (المرابحة) أو أحواض المشاركة في الأرباح والخسائر (المضاربة)، حيث يتعرض رأس المال لمخاطر تجارية حقيقية، يصبح العائد مشروعاً (حلالاً). يجب تدقيق محددات العقود الذكية للتحقق من عدم تفعيل أي قواعد فائدة ديناميكية خفية على السلسلة.",
    date: "2026-05-12",
    readTime: "8 min read",
    readTimeAr: "قراءة في 8 دقائق",
    imageName: "defi_sharia_research"
  },
  {
    id: "gold-peg-tokenomics",
    title: "The Halal Status of Asset-Backed Stablecoins: A Legal Study",
    titleAr: "الحكم الشرعي للعملات المستقرة المدعومة بأصول: دراسة فقهية",
    category: "Legal Opinion",
    categoryAr: "رأي فقهي",
    excerpt: "Examining the mechanics of 1:1 commodity-backed tokens and the requirement of physical custody under Sharia rules.",
    excerptAr: "دراسة آليات الرموز المدعومة بالسلع بنسبة 1:1 وشروط القبض والحيازة المادية في ضوء الأحكام الشرعية.",
    content: "Stablecoins backed by physical commodities, such as physical gold stored in verified vaults, represent a digital implementation of Sarf (currency exchange) and commodity trading. Under AAOIFI standards, for a gold-pegged token to be lawful, there must be absolute 1:1 physical backing, regular independent vault audits, and the token holder must possess the legal right to redeem their digital tokens for the underlying physical asset at any time. This eliminates any element of Gharar and ensures complete asset integrity. Stablecoins pegged to fiat currencies that accumulate interest-bearing reserves in commercial banks require a more complex review to verify that interest income does not blend into the coin's utility structure.",
    contentAr: "العملات المستقرة المدعومة بسلع مادية، مثل الذهب المادي المخزن في خزائن موثقة، تمثل تطبيقاً رقمياً للصرف وتجارة السلع. بموجب معايير الأيوفي، لكي يكون الرمز المربوط بالذهب حلالاً، يجب أن يكون هناك دعم مادي مطلق بنسبة 1:1، وتدقيق منتظم ومستقل للخزائن، ويجب أن يمتلك حامل الرمز الحق القانوني في استرداد رموزه الرقمية مقابل الأصل المادي الأساسي في أي وقت. هذا يزيل أي عنصر من عناصر الغرر ويضمن سلامة الأصول بالكامل. تتطلب العملات المستقرة المربوطة بالعملات الورقية التي تراكم احتياطيات بفائدة في البنوك التجارية مراجعة أكثر تعقيداً للتحقق من عدم دمج دخل الفوائد في هيكل منفعة العملة.",
    date: "2026-06-20",
    readTime: "6 min read",
    readTimeAr: "قراءة في 6 دقائق",
    imageName: "gold_backed_analysis"
  },
  {
    id: "daos-sharia-governance",
    title: "Decentralized Autonomous Organizations (DAOs) and Sharia Governance",
    titleAr: "المنظمات اللامركزية ذاتية الحكم (DAOs) والحوكمة الشرعية",
    category: "Whitepaper",
    categoryAr: "دراسة بيضاء",
    excerpt: "Can code-governed communities align with the Sharia requirement of mutual consultation (Shura)? Explore our framework.",
    excerptAr: "هل يمكن للمجتمعات التي يحكمها الكود البرمجي أن تتماشى مع شرط الشورى الشرعي؟ استكشف إطار عملنا.",
    content: "The concept of Shura (mutual consultation) is foundational to Islamic governance and decision-making. DAOs utilize token-weighted voting systems to achieve consensus on treasury allocation and protocol parameters. Under HalalChain's governance framework, token voting is recognized as a modern technical implementation of Shura, provided the smart contract rules prevent monopolistic exploitation and guarantee minority voter protection. Treasury funds must not be deployed into interest-bearing pools, and voting weighting must avoid artificial manipulation schemes that enrich early founders disproportionately without actual value contribution.",
    contentAr: "مفهوم الشورى هو أساس الحوكمة وصنع القرار في الإسلام. تستخدم المنظمات اللامركزية (DAOs) أنظمة تصويت مرجحة بالرموز لتحقيق التوافق بشأن تخصيص أموال الخزانة ومعلمات البروتوكول. بموجب إطار حوكمة حلال تشين™، يتم الاعتراف بالتصويت بالرموز كتطبيق تقني حديث للشورى، بشرط أن تمنع قواعد العقد الذكي الاحتكار وتضمن حماية حقوق الأقلية. يجب عدم نشر أموال الخزانة في أحواض بفائدة، ويجب أن يتجنب ترجيح التصويت خطط التلاعب الاصطناعية التي تضخم ثروات المؤسسين دون تقديم قيمة حقيقية.",
    date: "2026-07-02",
    readTime: "10 min read",
    readTimeAr: "قراءة في 10 دقائق",
    imageName: "dao_shura_framework"
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Riba",
    termAr: "الربا",
    definition: "Usury or exploitative interest. Any guaranteed return on a debt or capital loan without active business participation and risk exposure.",
    definitionAr: "الفائدة المستحقة على القرض أو الدين. أي زيادة مشروطة أو مضمونة يتقاضاها المقرض من المقترض دون المشاركة الفعالة في مخاطر العمل التجاري."
  },
  {
    term: "Gharar",
    termAr: "الغرر",
    definition: "Excessive ambiguity or speculative uncertainty in a transaction. Selling something whose existence, parameters, or outcomes are highly doubtful or hidden.",
    definitionAr: "الجهالة الفاحشة أو عدم اليقين في المعاملات المالية. بيع شيء غير معلوم الوجود، المواصفات، أو مجهول العاقبة مما يؤدي للتلاعب والنزاع."
  },
  {
    term: "Maysir",
    termAr: "الميسر",
    definition: "Gambling or games of chance. Acquiring wealth purely through luck or non-productive zero-sum speculative betting.",
    definitionAr: "القمار والألعاب القائمة على الحظ والصدفة. كسب المال بطرق غير إنتاجية تعتمد على المراهنات الصفرية وتؤدي لإضاعة أموال الآخرين دون مقابل."
  },
  {
    term: "Fiqh al-Muamalat",
    termAr: "فقه المعاملات",
    definition: "Islamic jurisprudence governing human commercial transactions, contracts, ownership rules, and financial systems.",
    definitionAr: "الأحكام والضوابط الشرعية العملية التي تنظم المعاملات المالية والتجارية، العقود، قواعد الملكية، والأنظمة الاقتصادية بين الأفراد والمؤسسات."
  },
  {
    term: "AAOIFI",
    termAr: "الأيوفي",
    definition: "The Accounting and Auditing Organization for Islamic Financial Institutions. The leading global body setting standards for Sharia compliance.",
    definitionAr: "هيئة المحاسبة والمراجعة للمؤسسات المالية الإسلامية. المنظمة الدولية الأبرز في صياغة وتطوير المعايير الشرعية والمالية للمصرفية الإسلامية."
  },
  {
    term: "Mudharabah",
    termAr: "المضاربة",
    definition: "A partnership contract where one party provides the capital (Rab-ul-Mal) and the other provides professional labor and expertise (Mudarib), sharing profits.",
    definitionAr: "عقد مشاركة يقدم فيه طرف رأس المال (رب المال) ويقدم الطرف الآخر الجهد والخبرة والعمل (المضارب)، ويتم توزيع الأرباح بينهما حسب الاتفاق."
  },
  {
    term: "Murabaha",
    termAr: "المرابحة",
    definition: "A cost-plus sale contract where the seller purchase an asset, adds a transparent profit margin, and sells it to the buyer, often with deferred payments.",
    definitionAr: "البيع بزيادة ربح معلوم على ثمن الشراء الأول. حيث يشتري البائع سلعة بطلب من المشتري ثم يبيعها له مع إضافة هامش ربح متفق عليه وبأقساط مؤجلة."
  },
  {
    term: "Waqf",
    termAr: "الوقف",
    definition: "An Islamic social endowment. Assets locked permanently for charitable and social utility, generating yields used strictly for public benefit.",
    definitionAr: "حبس العين عن تملكها والصدقة بمنفعتها وغلتها بشكل دائم لأغراض خيرية واجتماعية، وتوزيع ريعها على الفئات المستحقة والمصلحة العامة."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "Is HalalChain™ a cryptocurrency exchange or trading desk?",
    questionAr: "هل منصة حلال تشين™ منصة لتداول أو بيع العملات الرقمية؟",
    answer: "No. HalalChain™ is strictly an independent Sharia auditing, compliance review, and certification body. We do not operate exchanges, run market makers, issue cryptocurrencies, or provide investment advice of any kind.",
    answerAr: "لا. حلال تشين™ هي جهة تدقيق ومراجعة شرعية مستقلة تمنح شهادات التوافق فقط. نحن لا نشغل منصات تداول، ولا نوفر سيولة، ولا نصدر عملات مشفرة، ولا نقدم استشارات استثمارية إطلاقاً."
  },
  {
    question: "How do your evaluations compare to classical Islamic finance rules?",
    questionAr: "كيف تقارن تقييماتكم مع أحكام التمويل الإسلامي الكلاسيكي؟",
    answer: "Our evaluation is rooted directly in classical Fiqh al-Muamalat, updated with rigorous quantitative parameters for on-chain architectures. We align our screening models with universally accepted standards like AAOIFI.",
    answerAr: "ترتكز تقييماتنا مباشرة على أحكام فقه المعاملات المالية الأصيل، مع تحديثها بمحددات فنية وكمية صارمة تناسب البنى التحتية للبلوكشين. ونطابق نماذج الفحص لدينا مع المعايير المعترف بها عالمياً مثل معايير الأيوفي."
  },
  {
    question: "What happens if a project fails compliance during its active certification?",
    questionAr: "ماذا يحدث إذا تراجع التزام المشروع أثناء فترة صلاحية شهادته؟",
    answer: "If our automated or manual monitoring detects non-compliant parameters, the project's status shifts to 'Under Review'. If they fail to fix or roll back the changes within 14 business days, their certificate is 'Suspended' or marked 'Expired' in our Registry.",
    answerAr: "إذا كشف نظام المراقبة التلقائي أو اليدوي عن معلمات برمجية مخالفة للشريعة، تتحول حالة المشروع إلى 'قيد المراجعة'. وفي حال الفشل في الإصلاح خلال 14 يوم عمل، يتم تعليق الشهادة أو وضعها كـ 'منتهية الصلاحية' في السجل العام."
  },
  {
    question: "Who evaluates the project submissions?",
    questionAr: "من الذي يقوم بعملية تقييم وفحص المشاريع المقدمة؟",
    answer: "Submissions go through a rigorous dual evaluation: first, our on-chain security engineers perform a line-by-line smart contract security and financial forensics audit. Second, the findings are presented to our distinguished Sharia Scholarly Council for legal review and certification rulings.",
    answerAr: "تمر الطلبات بتقييم مزدوج صارم: أولاً، يقوم مهندسو أمن السلسلة لدينا بمراجعة كود العقد الذكي سطراً بسطر والتدقيق المالي الجنائي. ثانياً، يتم تقديم تقرير النتائج لمجلسنا الفقهي الشرعي المتخصص لإصدار القرار الشرعي والفتوى النهائية."
  }
];
