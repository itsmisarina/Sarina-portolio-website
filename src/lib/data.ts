import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  LineChart,
  MailCheck,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Digital Sarina",
  owner: "Sarina Potrel",
  title: "AI Marketing Expert & Consultant",
  email: "itsmisarina@gmail.com",
  phone: "9818508188",
  location: "Tahachal, Kathmandu, Nepal",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  process: string[];
  tools: string[];
  audience: string[];
};

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    short: "Turn AI opportunities into a clear growth roadmap.",
    description:
      "A practical AI marketing plan that connects customer journeys, content systems, automation, analytics, and revenue goals into one focused strategy.",
    icon: BrainCircuit,
    benefits: ["Sharper positioning", "Faster campaign planning", "Better channel focus", "Measurable AI adoption"],
    process: ["Audit current marketing", "Map AI opportunities", "Prioritize growth experiments", "Build a 90-day roadmap"],
    tools: ["ChatGPT", "Claude", "Perplexity", "Google Analytics", "Meta Business Suite"],
    audience: ["Founders", "Consultants", "Service brands", "Small teams ready to scale"],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    short: "Expert guidance for choosing and applying AI tools.",
    description:
      "Hands-on consulting to help your business use AI confidently, ethically, and profitably across marketing and operations.",
    icon: Bot,
    benefits: ["Tool clarity", "Reduced manual work", "Team confidence", "Lower experimentation waste"],
    process: ["Discovery call", "Workflow diagnosis", "Tool recommendations", "Implementation support"],
    tools: ["ChatGPT", "Claude", "Gemini", "Notion AI", "Zapier"],
    audience: ["Business owners", "Marketing teams", "Creators", "Agencies"],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    short: "Reusable prompt systems for consistent output.",
    description:
      "Custom prompt libraries and workflows for content, research, ads, customer support, sales, and internal productivity.",
    icon: Code2,
    benefits: ["Consistent outputs", "Faster content creation", "Reusable systems", "Less trial and error"],
    process: ["Define use cases", "Design prompt frameworks", "Test real scenarios", "Train your team"],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    audience: ["Content teams", "Consultants", "Educators", "Solo founders"],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    short: "Automated journeys that nurture leads and save time.",
    description:
      "Smart automation for lead capture, email sequences, CRM updates, reporting, and campaign follow-up.",
    icon: Workflow,
    benefits: ["Less manual follow-up", "Higher conversion consistency", "Cleaner operations", "Better lead nurturing"],
    process: ["Map customer journey", "Design triggers", "Build automations", "Measure and refine"],
    tools: ["Zapier", "Make", "HubSpot", "Mailchimp", "Google Sheets"],
    audience: ["Service providers", "Coaches", "Consultants", "Local businesses"],
  },
  {
    slug: "ai-content-creation",
    title: "AI Content Creation",
    short: "High-quality content systems powered by AI.",
    description:
      "Content strategy, idea generation, writing workflows, repurposing systems, and brand voice guides that keep your content engine moving.",
    icon: PenTool,
    benefits: ["Stronger content velocity", "Clearer brand voice", "More repurposing", "Lower creative friction"],
    process: ["Define content pillars", "Create AI workflows", "Build templates", "Publish and optimize"],
    tools: ["ChatGPT", "Canva AI", "Midjourney", "Notion AI"],
    audience: ["Personal brands", "Small businesses", "Creators", "Marketing teams"],
  },
  {
    slug: "seo-strategy",
    title: "SEO Strategy",
    short: "Search visibility built around intent and authority.",
    description:
      "A search strategy that blends keyword research, content architecture, technical foundations, and AI-assisted publishing.",
    icon: Search,
    benefits: ["Better organic visibility", "Content that matches intent", "Technical clarity", "Long-term lead flow"],
    process: ["Research demand", "Plan content clusters", "Optimize pages", "Track rankings and conversions"],
    tools: ["Google Search Console", "Google Analytics", "Ahrefs", "Semrush"],
    audience: ["Blogs", "Service websites", "SaaS teams", "Local brands"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Strategic social systems for reach and trust.",
    description:
      "Platform strategy, campaign calendars, creative direction, and AI-assisted production for consistent social growth.",
    icon: Megaphone,
    benefits: ["Consistent posting", "Stronger positioning", "Better creative testing", "Higher engagement quality"],
    process: ["Audit platforms", "Define content mix", "Build calendar", "Analyze and improve"],
    tools: ["Meta Business Suite", "Canva AI", "Notion", "ChatGPT"],
    audience: ["Personal brands", "Local businesses", "Consultants", "Creators"],
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    short: "Build a memorable expert presence online.",
    description:
      "Positioning, messaging, content pillars, profile optimization, and authority-building systems for experts and founders.",
    icon: Sparkles,
    benefits: ["Clear authority", "Better audience trust", "Sharper offers", "Content confidence"],
    process: ["Clarify positioning", "Design content pillars", "Optimize profiles", "Launch authority content"],
    tools: ["LinkedIn", "Canva AI", "ChatGPT", "Notion AI"],
    audience: ["Consultants", "Coaches", "Founders", "Experts"],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    short: "Nurture campaigns that turn attention into action.",
    description:
      "Email strategy, lead magnets, automated sequences, newsletters, and conversion-focused copy for warmer client relationships.",
    icon: MailCheck,
    benefits: ["Warmer leads", "Better retention", "Automated nurture", "Clearer offers"],
    process: ["Plan list growth", "Write sequences", "Set up automations", "Improve performance"],
    tools: ["Mailchimp", "ConvertKit", "HubSpot", "Zapier"],
    audience: ["Service businesses", "Creators", "Course sellers", "Consultants"],
  },
  {
    slug: "business-growth-consulting",
    title: "Business Growth Consulting",
    short: "A focused plan for offers, funnels, and conversion.",
    description:
      "Consulting for growth bottlenecks across offers, funnels, messaging, customer acquisition, and repeatable marketing operations.",
    icon: Rocket,
    benefits: ["Clearer growth priorities", "Better offer-market fit", "Higher conversion focus", "Actionable next steps"],
    process: ["Diagnose bottlenecks", "Prioritize improvements", "Build growth plan", "Review progress"],
    tools: ["Analytics dashboards", "CRM data", "AI research tools", "Funnel mapping"],
    audience: ["Growing service brands", "Startups", "Consultants", "SMBs"],
  },
  {
    slug: "ai-workflow-design",
    title: "AI Workflow Design",
    short: "Repeatable AI systems for everyday business tasks.",
    description:
      "Design and document AI-assisted workflows for research, content, reporting, lead management, and client delivery.",
    icon: Cpu,
    benefits: ["Documented processes", "Faster delivery", "Quality control", "Scalable operations"],
    process: ["Choose workflows", "Design system steps", "Create templates", "Test and hand over"],
    tools: ["ChatGPT", "Zapier", "Make", "Notion AI", "Google Workspace"],
    audience: ["Lean teams", "Agency owners", "Operations leads", "Consultants"],
  },
  {
    slug: "training-workshops",
    title: "Training & Workshops",
    short: "Practical AI marketing training for teams.",
    description:
      "Interactive training sessions that help teams understand tools, prompts, workflows, and responsible AI use in marketing.",
    icon: GraduationCap,
    benefits: ["Team alignment", "Practical skills", "Tool confidence", "Immediate implementation"],
    process: ["Assess team needs", "Design workshop", "Run live training", "Share resources"],
    tools: ["ChatGPT", "Claude", "Canva AI", "Zapier", "Analytics tools"],
    audience: ["Marketing teams", "Founders", "Educational groups", "Community organizations"],
  },
];

export const whyWork = [
  { title: "AI-Driven Strategy", text: "Smart marketing plans built around modern AI workflows.", icon: Compass },
  { title: "Data-Based Decisions", text: "Campaign choices guided by signals, not guesswork.", icon: BarChart3 },
  { title: "Personalized Solutions", text: "Systems shaped around your brand, goals, and bandwidth.", icon: Target },
  { title: "Business Growth", text: "Every recommendation connects back to revenue and momentum.", icon: Rocket },
  { title: "Latest AI Tools", text: "Practical use of current tools without hype overload.", icon: Zap },
  { title: "ROI Focused", text: "Lean experiments, measurable outcomes, and sharper execution.", icon: LineChart },
];

export const skills = [
  ["AI Marketing", 96],
  ["ChatGPT", 98],
  ["Prompt Engineering", 94],
  ["Automation", 90],
  ["SEO", 88],
  ["Meta Ads", 86],
  ["Google Ads", 84],
  ["Content Marketing", 93],
  ["Email Marketing", 87],
  ["Analytics", 89],
  ["Personal Branding", 92],
  ["Business Consulting", 91],
] as const;

export const tools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "Midjourney",
  "Canva AI",
  "Notion AI",
  "Zapier",
  "Make",
  "HubSpot",
  "Google Analytics",
  "Meta Business Suite",
];

export const testimonials = [
  {
    name: "Anisha K.",
    role: "Founder, Wellness Brand",
    quote:
      "Sarina turned our scattered marketing ideas into a practical AI workflow. We now create content faster and make decisions with more confidence.",
  },
  {
    name: "Rohit M.",
    role: "Managing Director, Local Services",
    quote:
      "The automation strategy saved our team hours every week and helped us follow up with leads at the right moment.",
  },
  {
    name: "Priya S.",
    role: "Consultant",
    quote:
      "Her guidance made AI feel useful instead of overwhelming. The prompt systems alone changed how I plan and publish content.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-marketing-roadmap-for-small-businesses",
    title: "How Small Businesses Can Start With AI Marketing",
    excerpt: "A practical roadmap for using AI without overwhelming your team or diluting your brand voice.",
    category: "AI Strategy",
    date: "2026-06-18",
    readTime: "6 min read",
    tags: ["AI Marketing", "Strategy", "Small Business"],
    image: "/blog/ai-roadmap.svg",
    content: [
      {
        heading: "Start With Business Bottlenecks",
        body: "The best AI use cases come from real friction. Look for repetitive research, content, reporting, lead follow-up, and customer support work before choosing tools.",
      },
      {
        heading: "Build One Workflow at a Time",
        body: "A focused workflow is easier to adopt than a broad transformation plan. Start with a weekly content workflow, a lead response workflow, or a reporting workflow.",
      },
      {
        heading: "Measure the Right Outcomes",
        body: "Track time saved, content quality, conversion lift, and team adoption. AI marketing should make growth clearer, not just faster.",
      },
    ],
  },
  {
    slug: "prompt-engineering-for-brand-voice",
    title: "Prompt Engineering for a Consistent Brand Voice",
    excerpt: "Learn how to turn brand guidelines into reusable prompts that keep content polished and recognizable.",
    category: "Prompting",
    date: "2026-05-29",
    readTime: "5 min read",
    tags: ["Prompt Engineering", "Brand Voice", "Content"],
    image: "/blog/brand-voice.svg",
    content: [
      {
        heading: "Define the Voice Before the Prompt",
        body: "A good prompt cannot rescue an unclear brand. Document tone, audience, offers, phrases to use, and phrases to avoid.",
      },
      {
        heading: "Create Modular Prompt Blocks",
        body: "Use reusable blocks for role, audience, format, examples, constraints, and quality checks. This makes output easier to control.",
      },
      {
        heading: "Review Like an Editor",
        body: "AI-assisted content still needs editorial judgment. Use prompts for momentum and use your expertise for taste, nuance, and trust.",
      },
    ],
  },
  {
    slug: "automation-that-improves-customer-experience",
    title: "Automation That Improves Customer Experience",
    excerpt: "Marketing automation works best when it feels helpful, timely, and human rather than robotic.",
    category: "Automation",
    date: "2026-04-21",
    readTime: "7 min read",
    tags: ["Automation", "Customer Journey", "Growth"],
    image: "/blog/automation.svg",
    content: [
      {
        heading: "Map the Human Moment",
        body: "Every automation should support a customer moment: a first inquiry, a booking, a purchase, a question, or a renewal.",
      },
      {
        heading: "Use Timing Carefully",
        body: "Fast follow-up is powerful, but relevance matters more than speed. Segment messages by behavior and intent whenever possible.",
      },
      {
        heading: "Keep Improving",
        body: "Review open rates, replies, conversions, and support feedback so automation becomes more useful over time.",
      },
    ],
  },
];

export const faqs = [
  {
    question: "Do I need existing AI tools before booking?",
    answer: "No. Sarina can help you choose the right tools, set up workflows, or improve what you already use.",
  },
  {
    question: "Can services be customized?",
    answer: "Yes. Every engagement is shaped around your goals, team capacity, current marketing stage, and budget.",
  },
  {
    question: "Is this only for large companies?",
    answer: "No. The approach is especially useful for founders, consultants, small teams, and growing service brands.",
  },
];

export const timeline = [
  { year: "2021", title: "Digital Growth Foundation", text: "Built expertise across SEO, content, paid campaigns, and analytics." },
  { year: "2023", title: "AI Marketing Shift", text: "Integrated generative AI into research, content, workflows, and strategy." },
  { year: "2025", title: "Consulting Focus", text: "Helped brands turn AI adoption into practical marketing systems." },
  { year: "Now", title: "Digital Sarina", text: "A premium consultancy for AI-powered business growth." },
];

export const certifications = ["AI Marketing Strategy", "Prompt Engineering", "Digital Marketing", "SEO & Analytics", "Automation Systems"];

export const values = [
  "Clarity before complexity",
  "Practical innovation",
  "Trustworthy communication",
  "Measurable growth",
  "Human-centered AI",
];

export const stats = [
  { value: "30+", label: "AI workflows designed" },
  { value: "12+", label: "Marketing specialties" },
  { value: "95%", label: "Performance target" },
  { value: "1:1", label: "Consultative attention" },
];

export const featuredChecklist = [
  { title: "AI-ready marketing audit", icon: ClipboardList },
  { title: "Growth roadmap and quick wins", icon: CheckCircle2 },
  { title: "Automation and prompt systems", icon: Workflow },
  { title: "Measurement and optimization", icon: LineChart },
  { title: "Channel strategy and content engine", icon: Share2 },
  { title: "Consulting support for execution", icon: BriefcaseBusiness },
];
