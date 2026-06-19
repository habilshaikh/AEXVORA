export type ServiceContent = {
  slug: string
  name: string
  keyword: string
  metaDescription: string
  intro: string
  what: string
  why: string
  benefits: string[]
  process: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  related: string[]
}

const services: ServiceContent[] = [
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    keyword: 'digital marketing services',
    metaDescription: 'Grow your business with Aexvora digital marketing services, including SEO, paid ads, content, social media and conversion strategy.',
    intro: 'Aexvora provides digital marketing services that connect strategy, creative execution and measurable performance. We build a practical growth system around your audience, offer and business goals instead of running disconnected campaigns.',
    what: 'Digital marketing is the use of search engines, websites, social platforms, email and paid media to reach customers online. A strong strategy maps every channel to a clear customer journey, from first discovery to enquiry and repeat business. Our work combines audience research, content planning, campaign execution, conversion optimisation and reporting so each activity supports a defined commercial objective.',
    why: 'Customers compare brands online before they contact a business. Without a consistent digital presence, even a strong product can lose attention to a more visible competitor. A coordinated marketing plan improves discoverability, builds trust and reveals which channels actually produce qualified leads. It also gives your team reliable data for deciding where to invest next.',
    benefits: ['A unified strategy across organic and paid channels', 'More qualified website traffic and enquiries', 'Clear campaign reporting tied to business goals', 'Better conversion rates through continuous testing', 'A scalable foundation for long-term brand growth'],
    process: [
      { title: 'Discovery and audit', description: 'We study your offer, audience, competitors, existing channels and analytics.' },
      { title: 'Growth strategy', description: 'We choose priority channels, target keywords, messaging and measurable KPIs.' },
      { title: 'Campaign execution', description: 'Our team creates content, launches campaigns and improves conversion paths.' },
      { title: 'Measure and optimise', description: 'We report meaningful results and refine the plan using real performance data.' },
    ],
    faqs: [
      { question: 'Which digital marketing channels should my business use?', answer: 'The right mix depends on your audience, sales cycle and budget. We identify the few channels most likely to create results before expanding.' },
      { question: 'How quickly can digital marketing show results?', answer: 'Paid campaigns can generate data quickly, while SEO and content usually build momentum over several months. A balanced plan supports both timelines.' },
      { question: 'How do you measure success?', answer: 'We agree on KPIs such as qualified leads, conversion rate, revenue, cost per acquisition and organic visibility before work begins.' },
    ],
    related: ['search-engine-optimization', 'google-ads-management', 'website-development'],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    keyword: 'website development services',
    metaDescription: 'Fast, secure and scalable website development services from Aexvora for businesses that need a high-performing digital platform.',
    intro: 'Our website development services turn business requirements into fast, dependable and scalable digital experiences. We build websites that are easy to use, simple to maintain and ready to support marketing, sales and future growth.',
    what: 'Website development covers the technical work required to make a website function reliably. It includes front-end interfaces, content management, integrations, performance, security, analytics and deployment. Aexvora selects an appropriate technology stack for the project rather than forcing every business into the same solution. The result is a clean codebase and a website designed around real operational needs.',
    why: 'A website is often the first serious interaction a customer has with your business. Slow loading, broken mobile layouts or confusing forms create lost opportunities and weaken trust. Professional development reduces those risks while giving marketing teams a stable platform for landing pages, content and measurement. It also prevents expensive rebuilding when traffic or functionality grows.',
    benefits: ['Responsive performance across mobile, tablet and desktop', 'Search-friendly structure and clean technical foundations', 'Secure, maintainable code built for future expansion', 'Integration with analytics, forms and business tools', 'A smoother experience that supports more conversions'],
    process: [
      { title: 'Requirements', description: 'We define users, features, integrations, content needs and success criteria.' },
      { title: 'Technical planning', description: 'We map the architecture, technology stack, data flow and delivery milestones.' },
      { title: 'Development and testing', description: 'We build in stages and test functionality, responsiveness, accessibility and speed.' },
      { title: 'Launch and support', description: 'We deploy safely, configure tracking and provide guidance for ongoing maintenance.' },
    ],
    faqs: [
      { question: 'How long does website development take?', answer: 'A focused business website may take a few weeks, while custom platforms take longer. We provide a timeline after confirming scope and content.' },
      { question: 'Will the website work on mobile devices?', answer: 'Yes. Responsive behaviour is planned and tested across common screen sizes throughout development.' },
      { question: 'Can you improve an existing website?', answer: 'Yes. We can audit the current site and recommend a rebuild, migration or targeted improvements based on its condition.' },
    ],
    related: ['website-design', 'search-engine-optimization', 'digital-marketing'],
  },
  {
    slug: 'website-design',
    name: 'Website Design',
    keyword: 'website design services',
    metaDescription: 'Conversion-focused website design services from Aexvora, combining brand clarity, responsive UX and premium visual design.',
    intro: 'Aexvora creates website designs that make brands easier to understand, trust and choose. Every layout balances visual character with usability, responsive behaviour and a clear path toward enquiry or purchase.',
    what: 'Website design defines how information is organised, presented and experienced. It includes user journeys, page hierarchy, wireframes, visual systems, typography, colour, interaction and responsive layouts. Good design is not decoration added at the end; it is a structured way to help visitors find answers and take action without friction.',
    why: 'Visitors form an impression of a brand within moments. An inconsistent or crowded interface can make a capable business appear unreliable. Strategic design creates clarity, highlights the strongest value proposition and gives every page a purpose. It also provides developers and content teams with a consistent system, reducing rework during production.',
    benefits: ['Clear user journeys built around customer intent', 'A distinctive visual system aligned with your brand', 'Responsive layouts designed for real devices', 'Stronger calls to action and conversion flow', 'Reusable design components for consistent growth'],
    process: [
      { title: 'Research', description: 'We review your audience, competitors, brand assets, content and conversion goals.' },
      { title: 'Structure and wireframes', description: 'We organise page content and validate user journeys before visual styling.' },
      { title: 'Visual design', description: 'We create the interface system, responsive screens and interaction direction.' },
      { title: 'Handoff and review', description: 'We prepare development-ready designs and support accurate implementation.' },
    ],
    faqs: [
      { question: 'What do you need before website design starts?', answer: 'A clear offer, target audience and available brand material are useful. We can help organise missing content during discovery.' },
      { question: 'Is website design different from development?', answer: 'Yes. Design plans the experience and visual interface; development turns those approved designs into a working website.' },
      { question: 'Will I be able to review the design?', answer: 'Yes. Reviews are built into key stages so feedback is resolved before development begins.' },
    ],
    related: ['website-development', 'packaging-design', 'digital-marketing'],
  },
  {
    slug: 'search-engine-optimization',
    name: 'Search Engine Optimization (SEO)',
    keyword: 'search engine optimization services',
    metaDescription: 'Improve rankings, qualified organic traffic and conversions with technical, on-page and content-focused SEO services from Aexvora.',
    intro: 'Our search engine optimization services improve how search engines discover, understand and rank your website. We combine technical health, search intent, useful content and authority building to create sustainable organic growth.',
    what: 'Search engine optimization is the continuous process of improving a website for relevant unpaid search results. Effective SEO includes keyword research, technical crawling and indexing, page optimisation, content planning, internal linking and credible authority signals. We prioritise topics that match customer intent and business value rather than chasing traffic that never converts.',
    why: 'Organic search captures people while they are actively researching a problem, service or purchase. Strong rankings can create dependable demand without paying for every click, but results require a technically sound website and genuinely helpful content. A structured SEO programme also improves navigation, page clarity and the overall experience for users.',
    benefits: ['Greater visibility for commercially relevant searches', 'More qualified organic traffic over time', 'Improved site structure, content and usability', 'Reduced dependence on paid acquisition', 'Measurable authority in your core topics'],
    process: [
      { title: 'SEO audit', description: 'We assess indexing, technical health, competitors, content and current performance.' },
      { title: 'Keyword mapping', description: 'Each important page receives a distinct target keyword and search intent.' },
      { title: 'Optimisation', description: 'We improve technical issues, headings, copy, internal links and on-page signals.' },
      { title: 'Content and reporting', description: 'We publish useful content and track rankings, traffic, leads and opportunities.' },
    ],
    faqs: [
      { question: 'How long does SEO take to work?', answer: 'Meaningful progress commonly takes several months, depending on competition, website history and how quickly improvements are implemented.' },
      { question: 'Do you guarantee first-position rankings?', answer: 'No responsible SEO provider can control search engines. We focus on transparent work and measurable improvements in qualified visibility.' },
      { question: 'Does every page need a different keyword?', answer: 'Important pages should have a distinct primary intent to avoid competing with each other. Supporting phrases can be included naturally.' },
    ],
    related: ['local-seo', 'answer-engine-optimization', 'generative-engine-optimization'],
  },
  {
    slug: 'generative-engine-optimization',
    name: 'Generative Engine Optimization (GEO)',
    keyword: 'generative engine optimization services',
    metaDescription: 'Help AI search systems understand and cite your brand with structured, credible Generative Engine Optimization services from Aexvora.',
    intro: 'Generative Engine Optimization helps your brand become understandable and useful to AI-powered discovery systems. Aexvora strengthens content structure, topical authority and verifiable brand signals so your expertise can appear in generated answers.',
    what: 'GEO is the practice of preparing digital content for generative search experiences and AI assistants. It builds on strong SEO foundations but places extra emphasis on clear entities, direct answers, evidence, structured information and consistent brand references. The aim is not to manipulate a model; it is to publish content that is easy to interpret, verify and cite.',
    why: 'Customers increasingly ask complete questions instead of browsing a list of links. Brands that communicate expertise clearly are better positioned to be mentioned during that research. GEO improves the usefulness of your content across AI discovery while also strengthening conventional search, because both benefit from clarity, credibility and well-connected information.',
    benefits: ['Clearer brand and service entity signals', 'Content formatted for AI-assisted discovery', 'Stronger topical depth and source credibility', 'More direct answers to high-intent questions', 'A future-ready extension of your SEO strategy'],
    process: [
      { title: 'Visibility assessment', description: 'We review current search presence, brand mentions, entities and content gaps.' },
      { title: 'Question research', description: 'We map the detailed questions prospects ask during research and evaluation.' },
      { title: 'Content engineering', description: 'We add concise answers, evidence, expert context, schema and useful structure.' },
      { title: 'Monitor and improve', description: 'We observe visibility patterns and strengthen weak topics and brand signals.' },
    ],
    faqs: [
      { question: 'Is GEO replacing SEO?', answer: 'No. GEO depends on many SEO fundamentals. The strongest approach prepares content for both traditional search and generative experiences.' },
      { question: 'Can AI citations be guaranteed?', answer: 'No platform offers guaranteed inclusion. We improve the quality and clarity signals that make content more useful and citeable.' },
      { question: 'What content works well for GEO?', answer: 'Original research, expert explanations, comparisons, definitions, FAQs and clearly sourced claims are particularly valuable.' },
    ],
    related: ['answer-engine-optimization', 'search-engine-optimization', 'data-intelligence-consulting'],
  },
  {
    slug: 'answer-engine-optimization',
    name: 'Answer Engine Optimization (AEO)',
    keyword: 'answer engine optimization services',
    metaDescription: 'Earn visibility in direct answers, featured results and voice search with focused Answer Engine Optimization services from Aexvora.',
    intro: 'Answer Engine Optimization structures your expertise around the real questions customers ask. We create concise, accurate and well-organised answers that search engines and users can understand quickly.',
    what: 'AEO improves content for direct-answer experiences such as featured snippets, voice results, knowledge panels and conversational search. It starts with question intent and then uses clear headings, short definitions, supporting detail, structured data and trustworthy context. The page must still serve human readers; answer formatting is a way to improve clarity, not a replacement for depth.',
    why: 'Many searches end with an immediate answer, especially on mobile and voice interfaces. If your content is vague or poorly structured, search systems may choose a clearer source. AEO gives each important question a focused response while helping visitors move from a quick answer to deeper service information and a relevant call to action.',
    benefits: ['Improved eligibility for direct-answer search features', 'Clearer content for users and search systems', 'Coverage of long-tail and conversational queries', 'Better FAQ and voice-search visibility', 'Stronger alignment between questions and service pages'],
    process: [
      { title: 'Question discovery', description: 'We find customer questions with meaningful relevance to your services.' },
      { title: 'Intent grouping', description: 'We assign questions to the correct page and prevent overlapping content.' },
      { title: 'Answer optimisation', description: 'We write direct responses, supporting explanations and appropriate schema.' },
      { title: 'Performance review', description: 'We monitor search features, impressions and engagement to guide updates.' },
    ],
    faqs: [
      { question: 'How is AEO different from SEO?', answer: 'SEO improves overall organic visibility; AEO specifically improves content for question-based and direct-answer experiences.' },
      { question: 'Does FAQ schema guarantee rich results?', answer: 'No. Schema helps systems understand content, but search platforms decide when and where enhanced results appear.' },
      { question: 'Can existing pages be optimised for AEO?', answer: 'Yes. We can reorganise headings, clarify answers and add missing question coverage without creating unnecessary duplicate pages.' },
    ],
    related: ['generative-engine-optimization', 'search-engine-optimization', 'local-seo'],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    keyword: 'local SEO services',
    metaDescription: 'Increase local search and map visibility with Aexvora local SEO services for location-based businesses and service providers.',
    intro: 'Our local SEO services help nearby customers find and trust your business when they are ready to visit, call or enquire. We connect location pages, business profiles, reviews and consistent local signals.',
    what: 'Local SEO improves visibility for searches tied to a city, neighbourhood or service area. Work commonly includes Google Business Profile optimisation, accurate business listings, location-focused pages, review strategy, local links and map performance tracking.',
    why: 'Local searches often carry immediate intent. Incomplete profiles, inconsistent contact details and thin location pages can send those customers to competitors. A reliable local presence makes it easier to confirm your services, reputation, hours and location.',
    benefits: ['Improved map and local-result visibility', 'More calls, directions and local enquiries', 'Consistent business information across platforms', 'Stronger trust through reviews and accurate profiles', 'Useful location pages without duplicate copy'],
    process: [{ title: 'Local audit', description: 'We review profiles, listings, reviews, location pages and competitors.' }, { title: 'Profile optimisation', description: 'We improve categories, services, media and business information.' }, { title: 'Local authority', description: 'We strengthen citations, reviews, local content and relevant links.' }, { title: 'Tracking', description: 'We monitor visibility, calls, directions and enquiry actions.' }],
    faqs: [{ question: 'Do I need a physical address for local SEO?', answer: 'Not always. Service-area businesses can compete locally when profiles and location content follow platform guidelines.' }, { question: 'How important are customer reviews?', answer: 'Reviews support trust and local relevance. A consistent, ethical request and response process is valuable.' }, { question: 'Should every city have a separate page?', answer: 'Only when each page serves a real audience with useful, distinct information. Copying the same text across cities should be avoided.' }],
    related: ['search-engine-optimization', 'google-ads-management', 'website-development'],
  },
  {
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    keyword: 'Google Ads management services',
    metaDescription: 'Generate qualified demand with structured Google Ads management, conversion tracking and continuous campaign optimisation.',
    intro: 'Aexvora manages Google Ads campaigns around profitable customer actions, not vanity clicks. We align keywords, adverts, landing pages and tracking to produce clearer acquisition data.',
    what: 'Google Ads management includes campaign planning, keyword selection, account structure, advert creation, bidding, audience refinement, conversion tracking and ongoing optimisation. Each decision should reflect search intent and commercial value.',
    why: 'Paid search can reach high-intent prospects quickly, but weak targeting and missing tracking waste budget. Professional management creates control, reveals profitable segments and turns campaign data into better decisions.',
    benefits: ['High-intent traffic with controlled targeting', 'Accurate conversion and acquisition tracking', 'Reduced waste from irrelevant searches', 'Continuous advert and landing-page testing', 'Transparent reporting on budget and outcomes'],
    process: [{ title: 'Account audit', description: 'We review goals, tracking, historical data and wasted spend.' }, { title: 'Campaign build', description: 'We structure keywords, audiences, adverts and landing-page alignment.' }, { title: 'Launch and learn', description: 'We collect reliable data while protecting budget with controls.' }, { title: 'Optimisation', description: 'We refine bids, terms, creative and conversion paths.' }],
    faqs: [{ question: 'What Google Ads budget do I need?', answer: 'Budget depends on click costs, geography and lead value. We recommend a test level capable of producing useful data.' }, { question: 'Do you create landing pages?', answer: 'We can improve or create focused landing pages when the existing website does not match campaign intent.' }, { question: 'Can results be tracked?', answer: 'Yes. We configure relevant actions such as calls, forms or purchases and report performance against them.' }],
    related: ['digital-marketing', 'youtube-ads-management', 'website-design'],
  },
  {
    slug: 'youtube-ads-management',
    name: 'YouTube Ads Management',
    keyword: 'YouTube Ads management services',
    metaDescription: 'Reach relevant audiences with YouTube Ads management covering targeting, creative strategy, tracking and campaign optimisation.',
    intro: 'Our YouTube Ads management services combine audience insight, video creative and measurable campaign structure. We help brands earn attention without losing sight of leads, sales and remarketing value.',
    what: 'YouTube advertising places video campaigns across YouTube and connected Google inventory. Management includes format selection, audience targeting, creative direction, frequency control, conversion measurement and optimisation.',
    why: 'Video can explain value and build familiarity faster than many static formats. Without strong opening creative and disciplined targeting, however, spend disappears into passive views. A planned campaign connects attention to the next customer action.',
    benefits: ['Visual storytelling at meaningful reach', 'Audience targeting based on intent and behaviour', 'Creative testing for stronger engagement', 'Remarketing across the customer journey', 'Measurement beyond views and impressions'],
    process: [{ title: 'Audience plan', description: 'We define customer segments, intent signals and campaign goals.' }, { title: 'Creative strategy', description: 'We shape hooks, messages, formats and calls to action.' }, { title: 'Campaign setup', description: 'We configure targeting, placements, budgets and tracking.' }, { title: 'Optimisation', description: 'We compare creative and audience performance and refine spend.' }],
    faqs: [{ question: 'Do I need professional video?', answer: 'Clear, relevant creative matters more than unnecessary production expense. We recommend a format suited to the campaign and brand.' }, { question: 'Which YouTube ad format is best?', answer: 'The best format depends on awareness, consideration or conversion goals. Campaigns may use more than one format.' }, { question: 'Can YouTube Ads generate leads?', answer: 'Yes, especially when targeting, offer, landing page and conversion tracking work together.' }],
    related: ['google-ads-management', 'digital-marketing', 'influencer-marketing'],
  },
  {
    slug: 'linkedin-marketing',
    name: 'LinkedIn Marketing',
    keyword: 'LinkedIn marketing services',
    metaDescription: 'Build B2B authority and qualified pipeline with strategic LinkedIn marketing services for brands, founders and sales teams.',
    intro: 'Aexvora uses LinkedIn marketing to build credible B2B visibility and support qualified conversations. Strategy covers positioning, content, audience engagement and paid distribution where appropriate.',
    what: 'LinkedIn marketing develops professional demand through company pages, expert profiles, useful content, community interaction and targeted advertising. The strongest programmes connect brand authority with a clear sales process.',
    why: 'B2B buyers research expertise and people before booking a meeting. A dormant or overly promotional presence misses the opportunity to build familiarity during a long decision cycle. Consistent insight creates trust before outreach begins.',
    benefits: ['Greater visibility with relevant decision-makers', 'Stronger founder and company authority', 'Content that supports complex B2B sales', 'More informed outreach and lead nurturing', 'Clear alignment between marketing and sales'],
    process: [{ title: 'Positioning', description: 'We clarify audience, expertise, offers and profile messaging.' }, { title: 'Content system', description: 'We plan useful themes, formats and a sustainable publishing rhythm.' }, { title: 'Distribution', description: 'We combine organic engagement with targeted promotion when useful.' }, { title: 'Pipeline review', description: 'We connect engagement with conversations, leads and sales feedback.' }],
    faqs: [{ question: 'Should we use a company page or personal profile?', answer: 'Usually both. Expert profiles build human trust while the company page supports brand credibility.' }, { question: 'How often should we post?', answer: 'Consistency and relevance matter more than daily volume. We choose a schedule your team can sustain.' }, { question: 'Is LinkedIn only for large B2B companies?', answer: 'No. Specialist firms, consultants, founders and focused service businesses can all build valuable audiences.' }],
    related: ['digital-marketing', 'influencer-marketing', 'affiliate-marketing'],
  },
  {
    slug: 'influencer-marketing',
    name: 'Influencer Marketing',
    keyword: 'influencer marketing services',
    metaDescription: 'Plan credible creator partnerships with influencer marketing services covering discovery, outreach, campaigns and measurement.',
    intro: 'Our influencer marketing services connect brands with creators whose audience, voice and values genuinely fit. We manage partnerships around useful content and measurable campaign goals.',
    what: 'Influencer marketing uses trusted creators to introduce products, demonstrate value and shape consideration. Effective work includes creator research, audience validation, briefing, agreements, content review, usage rights and performance tracking.',
    why: 'A large follower count does not guarantee attention or sales. Careful selection protects brand reputation and improves relevance. Structured campaigns also give creators enough freedom to communicate naturally while meeting business requirements.',
    benefits: ['Access to established, relevant communities', 'Authentic product education and social proof', 'Reusable creator content with agreed rights', 'Campaign control through clear briefs and terms', 'Performance insight beyond follower counts'],
    process: [{ title: 'Campaign brief', description: 'We define audience, message, deliverables, budget and success metrics.' }, { title: 'Creator selection', description: 'We assess relevance, audience quality, content and brand fit.' }, { title: 'Activation', description: 'We coordinate outreach, agreements, briefing and approvals.' }, { title: 'Measurement', description: 'We evaluate reach, engagement, traffic, codes and conversions.' }],
    faqs: [{ question: 'How do you choose influencers?', answer: 'We prioritise audience fit, credibility, content quality and campaign relevance instead of follower count alone.' }, { question: 'Can micro-influencers be effective?', answer: 'Yes. Smaller creators can have highly engaged specialist audiences and may be more efficient for focused offers.' }, { question: 'How is influencer performance measured?', answer: 'Measurement can include reach, engagement quality, tracked visits, enquiries, sales and reusable content value.' }],
    related: ['digital-marketing', 'youtube-ads-management', 'affiliate-marketing'],
  },
  {
    slug: 'sms-marketing',
    name: 'SMS Marketing',
    keyword: 'SMS marketing services',
    metaDescription: 'Create timely, permission-based SMS campaigns with practical segmentation, automation, compliance and performance tracking.',
    intro: 'Aexvora builds SMS marketing programmes for timely customer communication, offers and reminders. Every campaign is designed around permission, relevance, frequency and a clear action.',
    what: 'SMS marketing sends concise messages to opted-in customers through broadcasts or automated journeys. Common uses include appointment reminders, updates, time-sensitive promotions, abandoned journeys and loyalty communication.',
    why: 'Text messages are immediate and personal, which makes careless frequency especially damaging. A strategic programme respects consent and segments customers so messages arrive for a genuine reason rather than becoming noise.',
    benefits: ['Fast delivery for time-sensitive communication', 'Automated reminders and customer journeys', 'Audience segmentation for greater relevance', 'Clear click and conversion measurement', 'Permission-led communication that protects trust'],
    process: [{ title: 'Use-case planning', description: 'We identify valuable messages, audiences, timing and consent requirements.' }, { title: 'Journey setup', description: 'We create segments, triggers, copy and destination links.' }, { title: 'Testing', description: 'We check delivery, personalisation, tracking and opt-out handling.' }, { title: 'Optimisation', description: 'We improve timing, frequency and offers using response data.' }],
    faqs: [{ question: 'Is SMS marketing suitable for every business?', answer: 'It works best when a business has a clear reason for timely communication and a properly consented audience.' }, { question: 'How often should messages be sent?', answer: 'Frequency depends on customer expectations and value. We start conservatively and monitor engagement and opt-outs.' }, { question: 'Can SMS be automated?', answer: 'Yes. Useful triggers include bookings, reminders, purchases, inactivity and customer milestones.' }],
    related: ['digital-marketing', 'affiliate-marketing', 'data-intelligence-consulting'],
  },
  {
    slug: 'affiliate-marketing',
    name: 'Affiliate Marketing',
    keyword: 'affiliate marketing services',
    metaDescription: 'Build a controlled partner channel with affiliate marketing services covering programme design, recruitment, tracking and optimisation.',
    intro: 'Our affiliate marketing services help brands create performance-based partnerships with clear economics, reliable tracking and suitable partners. The goal is sustainable incremental growth.',
    what: 'Affiliate marketing rewards approved partners for tracked actions such as sales or qualified leads. Programme management includes commission design, platform selection, recruitment, creative resources, compliance, validation and partner communication.',
    why: 'A programme can attract low-quality traffic or discount dependency when rules and incentives are unclear. Careful management protects margins, brand terms and customer experience while helping productive partners grow.',
    benefits: ['Performance-linked customer acquisition', 'Expanded reach through relevant partners', 'Defined commission and attribution rules', 'Partner oversight and brand protection', 'Scalable growth based on proven economics'],
    process: [{ title: 'Programme design', description: 'We define goals, margins, commissions, policies and tracking.' }, { title: 'Partner recruitment', description: 'We identify and approve partners aligned with your audience.' }, { title: 'Enablement', description: 'We provide links, creative assets, offers and communication.' }, { title: 'Optimisation', description: 'We validate results, address risk and grow productive relationships.' }],
    faqs: [{ question: 'How are affiliates paid?', answer: 'Partners usually earn a defined commission after a tracked and validated sale or lead.' }, { question: 'How do you prevent affiliate fraud?', answer: 'Clear rules, transaction review, tracking controls and active partner monitoring reduce abuse.' }, { question: 'Is affiliate marketing right for a new brand?', answer: 'It can be, once the offer, conversion path, margins and tracking are stable enough to support partners.' }],
    related: ['influencer-marketing', 'digital-marketing', 'data-intelligence-consulting'],
  },
  {
    slug: 'packaging-design',
    name: 'Packaging Design',
    keyword: 'packaging design services',
    metaDescription: 'Create distinctive, production-ready packaging with Aexvora packaging design services for clear communication and shelf impact.',
    intro: 'Aexvora creates packaging that makes products recognisable, understandable and desirable. We connect brand expression with hierarchy, practicality and production requirements.',
    what: 'Packaging design combines structure, visual identity, product information, materials and print preparation. It must communicate quickly while respecting dimensions, mandatory copy, legibility and manufacturing constraints.',
    why: 'Packaging often makes the final case for a product at the point of choice. Weak hierarchy or inconsistent branding creates confusion. A considered system helps customers identify variants, understand benefits and remember the brand.',
    benefits: ['Stronger visual recognition and shelf presence', 'Clear product and variant information', 'Design aligned with practical production limits', 'Consistent systems across a product range', 'Production-ready artwork and specifications'],
    process: [{ title: 'Product discovery', description: 'We review audience, competitors, positioning, formats and constraints.' }, { title: 'Creative direction', description: 'We develop visual routes and information hierarchy.' }, { title: 'Design refinement', description: 'We apply the selected direction across required panels and variants.' }, { title: 'Production handoff', description: 'We prepare artwork and coordinate final checks with supplied specifications.' }],
    faqs: [{ question: 'Do you design labels and boxes?', answer: 'Yes. Scope can include labels, cartons, pouches, sleeves and coordinated product ranges.' }, { question: 'Do you provide print-ready files?', answer: 'Yes, based on approved printer specifications and final dielines supplied for production.' }, { question: 'Can you redesign existing packaging?', answer: 'Yes. We can retain valuable recognition while improving hierarchy, consistency and shelf impact.' }],
    related: ['website-design', 'digital-marketing', 'influencer-marketing'],
  },
  {
    slug: 'data-intelligence-consulting',
    name: 'Data Intelligence Consulting',
    keyword: 'data intelligence consulting services',
    metaDescription: 'Turn fragmented business data into reliable reporting and decisions with practical data intelligence consulting from Aexvora.',
    intro: 'Our data intelligence consulting services turn scattered information into reliable business insight. We focus on the questions teams need answered and create practical measurement systems around them.',
    what: 'Data intelligence combines collection, quality, modelling, reporting and interpretation. Consulting may cover KPI design, analytics audits, dashboards, attribution, data integration and decision workflows.',
    why: 'More data does not automatically create better decisions. Inconsistent definitions and disconnected tools produce conflicting reports. A clear measurement framework gives teams a shared view of performance and confidence in their next action.',
    benefits: ['Consistent KPIs and reporting definitions', 'Less manual spreadsheet consolidation', 'Dashboards designed around real decisions', 'Improved campaign and operational visibility', 'A reliable foundation for forecasting and testing'],
    process: [{ title: 'Decision mapping', description: 'We identify key questions, users, systems and reporting pain points.' }, { title: 'Data audit', description: 'We assess sources, quality, access, definitions and gaps.' }, { title: 'Measurement design', description: 'We create KPIs, models, dashboards and ownership rules.' }, { title: 'Adoption', description: 'We validate outputs and help teams use insights consistently.' }],
    faqs: [{ question: 'Do we need a large amount of data?', answer: 'No. Useful intelligence starts with reliable data and focused questions, even in a smaller organisation.' }, { question: 'Can you improve our existing dashboards?', answer: 'Yes. We can simplify metrics, resolve inconsistencies and align reports with decisions.' }, { question: 'What makes a good KPI?', answer: 'A good KPI has a clear definition, owner, data source, review rhythm and connection to a business outcome.' }],
    related: ['digital-marketing', 'sop-development', 'generative-engine-optimization'],
  },
  {
    slug: 'sop-development',
    name: 'SOP Development',
    keyword: 'SOP development services',
    metaDescription: 'Document repeatable business processes with clear SOP development services that improve quality, training and accountability.',
    intro: 'Aexvora develops standard operating procedures that make important work repeatable, trainable and easier to improve. We turn undocumented knowledge into clear, usable workflows.',
    what: 'SOP development captures the purpose, responsibilities, inputs, steps, controls and outputs of a recurring process. Effective procedures are written for the people doing the work and supported by checklists, templates or decision guidance where useful.',
    why: 'When critical work lives only in someone’s memory, quality changes with each person and growth becomes risky. Clear SOPs reduce ambiguity, speed up onboarding and create a baseline for accountability and continuous improvement.',
    benefits: ['More consistent quality and execution', 'Faster employee onboarding and delegation', 'Clear roles, controls and escalation points', 'Reduced dependence on individual memory', 'A documented base for process improvement'],
    process: [{ title: 'Process selection', description: 'We prioritise workflows by risk, frequency and business impact.' }, { title: 'Knowledge capture', description: 'We interview owners and observe how work is actually completed.' }, { title: 'Draft and validate', description: 'We document steps, roles, controls and supporting resources.' }, { title: 'Rollout and review', description: 'We support adoption and establish ownership for future updates.' }],
    faqs: [{ question: 'Which processes should be documented first?', answer: 'Start with frequent, high-risk or customer-critical work where inconsistency creates measurable cost.' }, { question: 'How detailed should an SOP be?', answer: 'Detailed enough for a trained user to complete the work confidently, without burying key actions in unnecessary text.' }, { question: 'How often should SOPs be updated?', answer: 'Review them when tools, roles or requirements change and on a regular schedule set by the process owner.' }],
    related: ['data-intelligence-consulting', 'website-development', 'digital-marketing'],
  },
]

export const serviceContentBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceContent>

export function getServiceContent(slug: string) {
  const normalizedSlug = slug.replace(/-\((seo|geo|aeo)\)$/i, '')
  return serviceContentBySlug[normalizedSlug]
}

export function serviceSlugFromName(name: string) {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
