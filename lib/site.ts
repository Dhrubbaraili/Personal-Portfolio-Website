export const site = {
  name: "Dhrub Baraili",
  title: "AI Marketing Expert & Consultant",
  description:
    "Premium AI-inspired portfolio where I help businesses grow with AI-powered marketing, automation, SEO, branding, and digital transformation.",
  url: "https://dhrubbaraili.com",
  email: "dmsmbaraili@gmail.com",
  phone: "9841879782",
  location: "Kathmandu, Nepal",
  social: {
    youtube: "https://www.youtube.com/@efootballgalacticos./featured",
    instagram:
      "https://www.instagram.com/efootballgalacticos?igsh=MWNycXhicmM4cDhjNQ%3D%3D&utm_source=qr",
    tiktok: "https://tiktok.com/@efootball.galcticos?_t=ZS-8wSEVUa7Xpi&_r=1",
  },
};

export const visuals = {
  hero: "/Hero.png",
  contact: "/Contact.png",
  aiFirst: "/ai-first.png",
  focused: "/ai-focused.png",
  growthLed: "/ai-growth.png",
  strategy: "/AI%20Marketing%20Strategy.png",
  automation: "/Lead%20Generation.png",
  seo: "/SEO.png",
  social: "/Content%20marketing.png",
  content: "/social%20media%20marketing.png",
} as const;

export const stats = [
  { label: "Clients Served", value: 25 },
  { label: "Projects", value: 55 },
  { label: "AI Campaigns", value: 10 },
] as const;

export const skills = [
  { label: "AI Marketing Strategy", value: 96 },
  { label: "Automation Workflows", value: 92 },
  { label: "SEO & Growth", value: 94 },
  { label: "Brand Positioning", value: 90 },
  { label: "Lead Generation", value: 95 },
] as const;

export const timeline = [
  {
    year: "2024 Nov",
    title: "Digital Marketing Foundation",
    description:
      "Started building brand and lead generation systems for growing businesses.",
  },
  {
    year: "AI-first Workflows",
    title: "AI-first Workflows",
    description:
      "Integrated automation, analytics, and content systems to scale campaigns.",
  },
  {
    year: "Consulting Expansion",
    title: "Consulting Expansion",
    description:
      "Helped founders and teams adopt premium positioning and AI-powered demand generation.",
  },
  {
    year: "Premium Strategic Partner",
    title: "Premium Strategic Partner",
    description:
      "Focused on high-trust consulting for modern brands looking for measurable growth.",
  },
] as const;

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  image?: string;
  benefits: string[];
  process: string[];
  tools: string[];
  faqs: { question: string; answer: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI-first Strategy",
    short: "Build intelligent growth systems aligned with business goals.",
    description:
      "A premium strategic roadmap combining audience insight, positioning, AI-assisted planning, and performance frameworks.",
    icon: "sparkles",
    image: visuals.strategy,
    benefits: [
      "Clear growth roadmap",
      "Better targeting",
      "Faster execution",
      "Higher ROI",
    ],
    process: [
      "Audit your current funnel and assets",
      "Map audience segments and intent",
      "Create AI-guided campaign architecture",
      "Measure, refine, and scale",
    ],
    tools: ["ChatGPT", "GA4", "Search Console", "Notion"],
    faqs: [
      {
        question: "Who is this for?",
        answer: "Founders, SMEs, and teams who want structured AI-enabled growth.",
      },
      {
        question: "Do you customize the strategy?",
        answer: "Yes. Each roadmap is tailored to business stage, goals, and market.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    short: "Remove repetitive work and improve speed across operations.",
    description:
      "Automations for lead capture, nurturing, internal workflows, reporting, and content operations that save time and reduce friction.",
    icon: "workflow",
    image: visuals.automation,
    benefits: ["Save time", "Reduce manual errors", "Improve speed", "Scale reliably"],
    process: [
      "Identify repetitive tasks",
      "Design workflow logic",
      "Integrate the right tools",
      "Test and optimize",
    ],
    tools: ["Zapier", "Make", "OpenAI", "Airtable"],
    faqs: [
      {
        question: "Can this work with my current tools?",
        answer: "Usually yes. I design workflows around your existing stack first.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Grow organic visibility with technical and content SEO.",
    description:
      "Search strategy, technical health, content architecture, and authority building built for long-term discoverability.",
    icon: "search",
    image: visuals.seo,
    benefits: ["More visibility", "Better rankings", "Qualified traffic", "Long-term growth"],
    process: ["Research", "Optimize", "Publish", "Measure"],
    tools: ["Ahrefs", "GSC", "Screaming Frog", "GA4"],
    faqs: [
      {
        question: "How fast can results appear?",
        answer: "It depends on competition, but strong foundations begin compounding quickly.",
      },
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    short: "Turn traffic into qualified opportunities.",
    description:
      "Lead magnets, landing pages, funnels, nurturing systems, and conversion improvements designed to increase pipeline quality.",
    icon: "target",
    image: visuals.growthLed,
    benefits: ["More leads", "Higher quality", "Lower acquisition cost", "Better conversion"],
    process: ["Analyze offers", "Build funnel", "Launch tests", "Scale winners"],
    tools: ["HubSpot", "Mailchimp", "Webflow", "Forms"],
    faqs: [
      {
        question: "Is this B2B or B2C?",
        answer: "Both can work. The funnel architecture is adapted to the audience.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    short: "Premium content systems that build trust and attention.",
    description:
      "Content pillars, creative direction, scheduling, and engagement strategy that make social presence feel polished and intentional.",
    icon: "users",
    benefits: ["Stronger brand", "Consistent content", "Higher engagement", "Better awareness"],
    process: ["Define pillars", "Create assets", "Schedule consistently", "Review data"],
    tools: ["Canva", "Buffer", "Meta Suite", "Figma"],
    image: "/Content%20marketing.png",
    faqs: [
      {
        question: "Do you create the content?",
        answer: "I can provide the strategy, systems, and execution support you need.",
      },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    short: "Thoughtful content that educates and converts.",
    description:
      "Articles, landing page copy, campaign messaging, and content frameworks aligned with positioning and SEO.",
    icon: "pen",
    image: "/social%20media%20marketing.png",
    benefits: ["More authority", "Better search value", "Stronger conversion", "Clear messaging"],
    process: ["Clarify message", "Plan topics", "Write premium content", "Optimize and publish"],
    tools: ["Notion", "Google Docs", "Surfer", "ChatGPT"],
    faqs: [
      {
        question: "Can this support my brand voice?",
        answer: "Yes, the content system is shaped around your tone and audience.",
      },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Elevate perception with a polished brand system.",
    description:
      "Positioning, messaging, identity direction, and visual consistency that make your business feel premium and memorable.",
    icon: "badge",
    benefits: ["More trust", "Clearer message", "Premium feel", "Better recall"],
    process: ["Assess brand", "Refine positioning", "Define visual rules", "Implement consistently"],
    tools: ["Figma", "Adobe", "Notion", "Moodboards"],
    faqs: [
      {
        question: "Do you redesign logos?",
        answer: "I focus on strategic brand direction and system consistency.",
      },
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    short: "Expert advice for growth, AI adoption, and digital clarity.",
    description:
      "A premium consulting session to identify bottlenecks, opportunities, and the next highest-impact move.",
    icon: "message-circle",
    benefits: ["Expert perspective", "Actionable clarity", "Fast decisions", "Risk reduction"],
    process: ["Discovery", "Diagnosis", "Recommendations", "Next steps"],
    tools: ["Meet", "Docs", "Slack", "Notion"],
    faqs: [
      {
        question: "Can I book just one session?",
        answer: "Yes. The consultation can be a one-off session or part of an ongoing engagement.",
      },
    ],
  },
];

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rahul Verma",
    company: "Verma Consulting",
    quote: "Dhrub ke saath kaam karke humein kaafi fayda hua. Unki AI marketing strategy se online presence aur customer engagement dono better hue.",
    rating: 5,
  },
  {
    name: "Priya Koirala",
    company: "Hamro Home Handicraft",
    quote:
      "Working with Dhrub was a very positive experience. The strategy was practical, clear, and helped us improve our digital presence with confidence.",
    rating: 5,
  },
];

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  body: BlogBlock[];
  seoTitle: string;
  seoDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-is-changing-marketing-strategy",
    title: "How AI Is Changing Marketing Strategy",
    excerpt:
      "A practical look at how modern brands can use AI to move faster without losing quality or trust.",
    category: "AI Marketing",
    date: "2026-06-08",
    readingTime: "6 min read",
    seoTitle: "How AI Is Changing Marketing Strategy | Dhrub Baraili",
    seoDescription:
      "Discover how AI changes marketing strategy, from research and content to automation and growth systems.",
    body: [
      {
        type: "paragraph",
        text: "AI helps teams compress the time between insight and execution. The best marketing teams use it to support research, planning, iteration, and reporting.",
      },
      {
        type: "paragraph",
        text: "The real advantage is not more noise. It is faster clarity. When your team understands who the audience is, what the offer means, and where the bottlenecks live, AI becomes a strategic amplifier.",
      },
      {
        type: "paragraph",
        text: "The strongest results come from pairing automation with taste, judgment, and a well-defined brand system.",
      },
    ],
  },
  {
    slug: "building-premium-automation-workflows",
    title: "Building Premium Automation Workflows",
    excerpt:
      "Automation should feel invisible to the customer and effortless for the team. Here is how to build it well.",
    category: "Automation",
    date: "2026-05-16",
    readingTime: "5 min read",
    seoTitle: "Building Premium Automation Workflows | Dhrub Baraili",
    seoDescription:
      "Learn how premium automation workflows improve speed, consistency, and client experience.",
    body: [
      {
        type: "paragraph",
        text: "Great automation starts by removing friction from repeatable processes.",
      },
      {
        type: "paragraph",
        text: "Map the workflow first, then choose the tool. That order matters because tools should support the process, not define it.",
      },
      {
        type: "paragraph",
        text: "Use automation to create consistency in handoffs, lead capture, follow-up, and reporting.",
      },
    ],
  },
  {
    slug: "seo-for-ai-first-brands",
    title: "SEO for AI-First Brands",
    excerpt:
      "Search visibility is still essential. The difference is that AI-first brands need stronger structure and clearer signals.",
    category: "SEO",
    date: "2026-04-20",
    readingTime: "7 min read",
    seoTitle: "SEO for AI-First Brands | Dhrub Baraili",
    seoDescription:
      "An SEO framework for AI-first brands that want structure, authority, and sustainable growth.",
    body: [
      {
        type: "paragraph",
        text: "AI-first brands often publish faster, but speed only helps when the information architecture is strong.",
      },
      {
        type: "paragraph",
        text: "Focus on topic clusters, intent clarity, metadata, internal linking, and content that is genuinely useful.",
      },
      {
        type: "paragraph",
        text: "Search rewards structure and relevance. AI can help with the workflow, but strategy still wins.",
      },
    ],
  },
  {
    slug: "how-ai-marketing-can-grow-your-business-faster",
    title: "How AI Marketing Can Grow Your Business Faster",
    excerpt:
      "A simple guide to using AI marketing to attract better leads, convert more customers, and scale with confidence.",
    category: "AI Marketing",
    date: "2026-07-04",
    readingTime: "10 min read",
    seoTitle: "How AI Marketing Can Grow Your Business Faster | Dhrub Baraili",
    seoDescription:
      "Learn what AI marketing is, how it helps growth, and how to use it across ads, SEO, automation, lead generation, and conversion optimization.",
    body: [
      {
        type: "paragraph",
        text: "AI marketing is the use of artificial intelligence to improve how businesses plan, create, target, automate, and optimize their marketing. It combines data, automation, and smart decision-making so teams can work faster and make better choices.",
      },
      {
        type: "paragraph",
        text: "For modern businesses, AI marketing is not about replacing people. It is about helping people do better work with less waste. When used well, AI can reduce repetitive tasks, improve targeting, and uncover growth opportunities that are easy to miss manually.",
      },
      {
        type: "heading",
        text: "How AI Helps Businesses Grow",
      },
      {
        type: "paragraph",
        text: "Growth happens when the right message reaches the right audience at the right time. AI helps businesses do this more efficiently by analyzing behavior, identifying patterns, and improving campaign decisions.",
      },
      {
        type: "list",
        items: [
          "It saves time by automating repetitive marketing tasks.",
          "It improves targeting by analyzing customer data and behavior.",
          "It helps create content faster while keeping the brand message consistent.",
          "It supports smarter budgeting by showing which channels perform best.",
          "It makes reporting and optimization more accurate and more frequent.",
        ],
      },
      {
        type: "heading",
        text: "Facebook Ads",
      },
      {
        type: "paragraph",
        text: "Facebook Ads remain powerful because they allow detailed audience targeting. AI can help write better ad copy, test multiple creative angles, and identify which audiences respond best. This reduces guesswork and improves return on ad spend.",
      },
      {
        type: "heading",
        text: "Instagram Ads",
      },
      {
        type: "paragraph",
        text: "Instagram is visual, fast, and highly engaging. AI can help brands create better visuals, recommend content ideas, and personalize campaigns for different audience segments. For businesses with strong visuals or lifestyle products, this can lead to faster awareness and better conversions.",
      },
      {
        type: "heading",
        text: "YouTube Ads",
      },
      {
        type: "paragraph",
        text: "YouTube is ideal for brands that want to educate, build trust, and reach people through video. AI can support script ideas, audience research, title testing, and even video editing workflows. This makes video marketing more efficient for businesses of any size.",
      },
      {
        type: "heading",
        text: "TikTok Ads",
      },
      {
        type: "paragraph",
        text: "TikTok is one of the fastest-moving platforms for attention. AI can help generate creative hooks, suggest short-form video concepts, and test messaging quickly. Brands that move fast on TikTok often learn what their audience wants much earlier than competitors.",
      },
      {
        type: "heading",
        text: "SEO",
      },
      {
        type: "paragraph",
        text: "Search engine optimization is still one of the best long-term growth channels. AI helps with keyword research, content outlines, meta descriptions, topic planning, and internal linking suggestions. When combined with human strategy, SEO becomes more scalable and more consistent.",
      },
      {
        type: "heading",
        text: "AI Automation",
      },
      {
        type: "paragraph",
        text: "AI automation is useful for lead capture, follow-up, email nurturing, reporting, CRM updates, and content workflows. It helps teams respond faster, stay organized, and reduce manual work. This means more time can be spent on strategy and customer relationships.",
      },
      {
        type: "heading",
        text: "Lead Generation",
      },
      {
        type: "paragraph",
        text: "AI marketing helps businesses generate more leads by improving landing pages, forms, offers, and nurturing systems. It can identify which messages convert best and which channels bring the highest-quality prospects.",
      },
      {
        type: "list",
        items: [
          "Use AI to test landing page headlines.",
          "Use AI to write lead magnet ideas and email sequences.",
          "Use AI to score leads and prioritize follow-up.",
          "Use AI to discover where people drop off in the funnel.",
        ],
      },
      {
        type: "heading",
        text: "Customer Targeting",
      },
      {
        type: "paragraph",
        text: "Customer targeting becomes stronger when AI analyzes behavior, interests, and buying signals. This allows businesses to speak to the right people with more relevant offers, which usually improves engagement and lowers wasted ad spend.",
      },
      {
        type: "heading",
        text: "Conversion Optimization",
      },
      {
        type: "paragraph",
        text: "Conversion optimization means improving the percentage of visitors who take action. AI can support A/B testing, heatmap analysis, copy suggestions, and user journey improvements. Even small changes can lead to meaningful growth when the traffic volume is consistent.",
      },
      {
        type: "heading",
        text: "Why Every Modern Business Should Use AI Marketing",
      },
      {
        type: "paragraph",
        text: "Every modern business should use AI marketing because the market is moving too fast to rely on manual effort alone. Customers expect speed, personalization, and clarity. AI helps businesses deliver those things with more consistency.",
      },
      {
        type: "list",
        items: [
          "It helps small teams do the work of much larger teams.",
          "It improves the quality of decisions through better data analysis.",
          "It supports faster testing, learning, and optimization.",
          "It creates a stronger bridge between strategy and execution.",
          "It makes growth more scalable and more measurable.",
        ],
      },
      {
        type: "paragraph",
        text: "The businesses that win in the next few years will not be the ones that simply use more tools. They will be the ones that use AI with a clear strategy, a strong brand, and a focus on real customer value.",
      },
      {
        type: "paragraph",
        text: "If you want to grow faster, start by improving the way you attract attention, nurture leads, and convert interest into action. AI marketing can help you do that with more confidence and less friction.",
      },
      {
        type: "paragraph",
        text: "Call to action: If you want help building an AI marketing system for your business, get in touch and let us create a smarter growth plan together.",
      },
    ],
  },
];
