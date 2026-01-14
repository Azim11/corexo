import { BarChart2 } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Shield } from "lucide-react";
import { Flag } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Package } from "lucide-react";
import { Award } from "lucide-react";
import { Search } from "lucide-react";
import { Rocket } from "lucide-react";
import { Zap } from "lucide-react";
import { BarChart3, Megaphone, Target, TrendingUp, Users } from "lucide-react";
import contactInfo from "./contactInfo";
import { User } from "lucide-react";
import { Building2 } from "lucide-react";

export const data = {
  company: {
    name: contactInfo.companyName,
    tagline: contactInfo.tagline,
    description: contactInfo.description,
  },
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact-us" },
  ],
  services: [
    {
      id: 1,
      title: "SEO Optimization",
      description:
        "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
      icon: TrendingUp,
      // Image: Laptop with analytics charts
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Link Building",
        "Analytics",
      ],
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "Engage your audience and build brand loyalty across all major social platforms.",
      icon: Users,
      // Image: Smartphone displaying social media apps
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Campaigns",
        "Influencer Marketing",
      ],
    },
    {
      id: 3,
      title: "PPC Advertising",
      description:
        "Maximize ROI with targeted pay-per-click campaigns across Google and social media.",
      icon: Target,
      // Image: Digital marketing graphs and growth
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
      features: [
        "Campaign Setup",
        "A/B Testing",
        "Conversion Tracking",
        "Budget Optimization",
      ],
    },
    {
      id: 4,
      title: "Content Marketing",
      description:
        "Create compelling content that resonates with your audience and drives conversions.",
      icon: Megaphone,
      // Image: Creative workspace, writing, typing
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
      features: [
        "Blog Writing",
        "Video Production",
        "Infographics",
        "Email Campaigns",
      ],
    },
    {
      id: 5,
      title: "Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive analytics and performance insights.",
      icon: BarChart3,
      // Image: Data visualization dashboard on tablet
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      features: [
        "Custom Dashboards",
        "Monthly Reports",
        "Competitor Analysis",
        "KPI Tracking",
      ],
    },
    {
      id: 6,
      title: "Brand Strategy",
      description:
        "Develop a cohesive brand identity that stands out in the digital marketplace.",
      icon: Zap,
      // Image: Brainstorming, notes, strategy planning
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      features: [
        "Brand Positioning",
        "Visual Identity",
        "Messaging Framework",
        "Market Research",
      ],
    },
  ],
  whyUs: [
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Over 10+ years of experience delivering successful digital marketing campaigns across diverse industries.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "A passionate team of marketing specialists, designers, and strategists committed to your success.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Results",
      description:
        "We leverage advanced analytics and insights to optimize campaigns and maximize your ROI.",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description:
        "Tailored strategies designed specifically for your business goals and target audience.",
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description:
        "Clear, comprehensive reports that keep you informed every step of the way.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tools",
      description:
        "We use the latest technology and platforms to stay ahead of the competition.",
    },
  ],

  successStories: [
    {
      company: "TechFlow Solutions",
      industry: "SaaS Technology",
      challenge:
        "Struggling with low organic visibility and minimal lead generation despite having a great product.",
      solution:
        "Implemented comprehensive SEO strategy combined with targeted content marketing and PPC campaigns.",
      // Image: Modern startup team collaborating/meeting
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      metrics: [
        { value: "245%", label: "Traffic Growth" },
        { value: "180%", label: "Lead Increase" },
        { value: "320%", label: "ROI Boost" },
      ],
    },
    {
      company: "Urban Fitness Co",
      industry: "Health & Wellness",
      challenge:
        "Low social media engagement and difficulty reaching younger demographics in competitive market.",
      solution:
        "Developed multi-platform social strategy with influencer partnerships and community-driven content.",
      // Image: Active fitness/gym setting
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      metrics: [
        { value: "500%", label: "Engagement Up" },
        { value: "12K", label: "New Followers" },
        { value: "85%", label: "Brand Recall" },
      ],
    },
  ],

  featuredServices: [
    {
      category: "Search Engine Optimization",
      title: "Dominate Search Rankings",
      description:
        "Our comprehensive SEO strategies help you rank higher, attract more qualified traffic, and convert visitors into customers. We focus on sustainable, white-hat techniques that deliver long-term results.",
      // Image: Analytics data on a screen, representing ranking and growth
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      benefits: [
        {
          title: "Technical SEO Excellence",
          description:
            "Optimize site structure, speed, and mobile responsiveness for better search performance.",
        },
        {
          title: "Content Optimization",
          description:
            "Create and optimize compelling content that ranks well and engages your audience.",
        },
        {
          title: "Authority Building",
          description:
            "Build high-quality backlinks and establish your brand as an industry authority.",
        },
      ],
      stat: { value: "3.2x", label: "Average Traffic Increase" },
    },
    {
      category: "Social Media Marketing",
      title: "Build Meaningful Connections",
      description:
        "Transform your social media presence into a powerful business asset. We create engaging content, build communities, and drive real business results across all major platforms.",
      // Image: Person holding a smartphone, representing connection and social apps
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
      benefits: [
        {
          title: "Strategic Content Planning",
          description:
            "Develop content calendars that resonate with your audience and align with business goals.",
        },
        {
          title: "Community Engagement",
          description:
            "Foster authentic relationships and turn followers into brand advocates.",
        },
        {
          title: "Performance Analytics",
          description:
            "Track metrics that matter and continuously optimize for better results.",
        },
      ],
      stat: { value: "450%", label: "Avg Engagement Boost" },
    },
  ],

  process: [
    {
      icon: Search,
      title: "Discovery & Research",
      description:
        "We analyze your business, competitors, and target audience to understand what drives success in your market.",
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description:
        "Create a customized roadmap with clear objectives, KPIs, and tactical plans aligned with your goals.",
    },
    {
      icon: Rocket,
      title: "Implementation",
      description:
        "Execute campaigns with precision, leveraging best practices and cutting-edge tools for maximum impact.",
    },
    {
      icon: BarChart2,
      title: "Optimize & Scale",
      description:
        "Continuously monitor performance, refine strategies, and scale what works to drive exponential growth.",
    },
  ],

  testimonials: [
    {
      quote: `${contactInfo.companyNameShort} transformed our digital presence completely. Their strategic approach and dedication resulted in a 300% increase in qualified leads within just six months.`,
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFlow Solutions",
    },
    {
      quote: `Working with ${contactInfo.companyNameShort} has been a game-changer. Their team's expertise in social media marketing helped us build an engaged community of over 50K followers.`,
      author: "Michael Chen",
      position: "CEO",
      company: "Urban Fitness Co",
    },
    {
      quote: `The ROI we've seen from our campaigns with ${contactInfo.companyNameShort} is incredible. They truly understand how to drive results that matter to our bottom line.`,
      author: "Emily Rodriguez",
      position: "Founder",
      company: "GreenLeaf Organics",
    },
    {
      quote: `Professional, responsive, and results-driven. ${contactInfo.companyNameShort} exceeded our expectations in every way. Highly recommend their services!`,
      author: "David Park",
      position: "VP of Marketing",
      company: "FinanceHub",
    },
  ],
  footer: {
    quickLinks: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Refund Policy", path: "/refund-policy" },
    ],
  },
  about: {
    hero: {
      title: " reshaping the digital landscape",
      subtitle: `About ${contactInfo.companyNameShort}`,
      description:
        "Founded on the belief that data and creativity are not mutually exclusive, we build digital ecosystems that allow businesses to thrive in an ever-changing world.",
    },
    identity: [
      {
        title: "Who We Are",
        description:
          "A collective of strategists, designers, and data analysts obsessed with growth.",
        icon: Users,
      },
      {
        title: "Who We Serve",
        description:
          "Ambitious startups and established enterprises looking to scale their digital footprint.",
        icon: Target,
      },
      {
        title: "What We Deliver",
        description:
          "Measurable ROI, transparent reporting, and creative assets that turn heads.",
        icon: Package,
      },
      {
        title: "Our Mission",
        description:
          "To democratize access to enterprise-grade marketing strategies for businesses of all sizes.",
        icon: Flag,
      },
    ],
    narrative: [
      {
        title: "Our Story",
        content:
          " started in a small coffee shop with two laptops and a vision. We saw a gap in the market for agencies that actually cared about the bottom line, not just vanity metrics. Today, we are a global team driving millions in revenue for our clients.",
      },
      {
        title: "Our Vision",
        content:
          "We envision a digital world where authentic connection drives commerce. We strive to be the global standard for ethical, high-performance digital marketing, setting the benchmark for how brands interact with their audiences.",
      },
      {
        title: "Our Goal",
        content:
          "To help 1,000 businesses double their revenue through digital channels by 2030. We are committed to continuous learning, adapting to algorithms, and staying ahead of the curve so our clients never fall behind.",
      },
    ],
    leadership: {
      name: contactInfo.contactPerson,
      position: "Founder & CEO",
      bio: "With over 15 years of experience in digital strategy, Alex has led campaigns for Fortune 500 companies and disruptive startups alike. He believes in leadership through transparency and innovation.",
      image: "",
      contact: {
        email: contactInfo.email,
        phone: contactInfo.phone,
      },
    },
  },
  contactPage: {
    header: {
      title: "Contact Us",
      breadcrumb: "Contact",
    },
    section: {
      subtitle: "Get in Touch",
      title: "Let's Start a Conversation",
      description:
        "Have a project in mind or just want to say hi? We'd love to hear from you. Fill out the form or reach out directly.",
    },
    info: [
      // add company name and contact person
      {
        id: 1,
        title: "Company Name",
        value: contactInfo.companyName,
        subtext: "",
        icon: Building2,
        link: "#",
      },
      {
        id: 2,
        title: "Contact Person",
        value: contactInfo.contactPerson,
        subtext: "",
        icon: User,
        link: "#",
      },
      {
        id: 3,
        title: "Chat with us",
        value: contactInfo.email,
        subtext: "We respond within 24 hours",
        icon: Mail,
        link: `mailto:${contactInfo.email}`,
      },
      {
        id: 4,
        title: "Call us",
        value: contactInfo.phone,
        subtext: "Mon-Fri from 9am to 6pm",
        icon: Phone,
        link: `tel:${contactInfo.phone}`,
      },
      {
        id: 5,
        title: "Visit us",
        value: contactInfo.address,
        subtext: "",
        icon: MapPin,
        link: "#map",
      },
    ],
  },
  servicePage: {
    header: {
      title: "Services",
      breadcrumb: "Services",
    },
  },
  pricing: {
    header: {
      subtitle: "Transparent Pricing",
      title: "Invest in Your Growth",
      description:
        "Choose a plan that fits your current stage. No hidden fees, just measurable results.",
    },
    tiers: [
      {
        id: 1,
        name: "Starter",
        price: "1,500",
        period: "/mo",
        description:
          "Perfect for small businesses looking to establish a solid digital foundation.",
        isPopular: false,
        buttonText: "Start Basic",
        features: [
          "Social Media Management (2 Platforms)",
          "Basic SEO Optimization",
          "Monthly Performance Report",
          "Email Support",
          "1 Blog Post Per Month",
        ],
      },
      {
        id: 2,
        name: "Growth",
        price: "3,500",
        period: "/mo",
        description:
          "Accelerate your market presence with paid ads and advanced content strategies.",
        isPopular: true,
        buttonText: "Start Growing",
        features: [
          "Everything in Starter",
          "PPC Campaign Management ($5k spend limit)",
          "Advanced SEO & Backlinking",
          "Content Marketing (4 Blogs/mo)",
          "Bi-Weekly Strategy Calls",
          "24/7 Priority Support",
        ],
      },
      {
        id: 3,
        name: "Enterprise",
        price: "Custom",
        period: "",
        description:
          "Full-service digital transformation for large organizations and franchises.",
        isPopular: false,
        buttonText: "Contact Sales",
        features: [
          "Dedicated Account Manager",
          "Unlimited Ad Spend Management",
          "Custom Brand Strategy",
          "Video Production & Motion Graphics",
          "Custom Dashboard Development",
          "Daily Slack Access",
        ],
      },
    ],
  },
};
