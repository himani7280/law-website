import siteData from "./siteData.json";

// Root-level exports from JSON
export const siteDataJson = siteData;
export const variants = siteData.variants;
export const components = siteData.components;

// Template Architecture exports
export const templateData = siteData.Law;
export const templateComponents = templateData.templateComponents;
export const lawTemplate = templateComponents["template-1"];
export const investmentTemplate = lawTemplate;
export const sections = templateData.sections;

// Structured content matching Investment template structure
export const lawContent = {
  heroes: {
    about: sections.Hero.variants.LawAboutHero1,
    contact: sections.Hero.variants.LawContactHero1,
    blog: sections.Hero.variants.LawBlogHero1,
    services: sections.Hero.variants.LawServicesHero1,
    portfolio: sections.Hero.variants.LawPortfolioHero1,
    blogDetail: {
      ...sections.Hero.variants.LawBlogDetailHero1,
      parent: { label: "Legal Insights", href: "/legal-insights" },
    },
    serviceDetail: {
      ...sections.Hero.variants.LawServiceDetailHero1,
      parent: { label: "Practice Areas", href: "/practice-areas" },
    },
    whyChooseUs: sections.Hero.variants.LawWhyChooseUsHero1,
    ourTeam: sections.Hero.variants.LawOurTeamHero1,
    teamDetails: sections.Hero.variants.LawTeamDetailsHero1,
    testimonials: sections.Hero.variants.LawTestimonialsHero1,
    faq: sections.Hero.variants.LawFaqHero1,
    privacyPolicy: sections.Hero.variants.LawPrivacyHero1,
    consultation: sections.Hero.variants.LawConsultationHero1,
    sitemap: sections.Hero.variants.LawSitemapHero1,
    disclaimer: sections.Hero.variants.LawDisclaimerHero1,
    termsConditions: sections.Hero.variants.LawTermsHero1,
    thankyou: sections.Hero.variants.LawThankYouHero1,
  },
  homeHero: sections.HomeHero.variants.LawHomeHero1,
  about: sections.About.variants.LawAbout1,
  aboutPage: sections.AboutPage.variants.LawAboutPage1,
  services: sections.Services.variants.LawServices1,
  serviceDetail: sections.ServiceDetailContent.variants.LawServiceDetail1,
  howItWorks: sections.HowItWorks.variants.LawHowItWorks1,
  trusted: sections.Trusted.variants.LawTrusted1,
  whyChooseUs: sections.WhyChooseUs.variants.LawWhyChooseUs1,
  testimonials: sections.Testimonials.variants.LawTestimonials1,
  reviews: sections.Reviews.variants.LawReviews1,
  blog: sections.Blog.variants.LawBlog1,
  blogPage: sections.BlogPage.variants.LawBlogPage1,
  blogDetail: sections.BlogDetailContent.variants.LawBlogDetail1,
  partners: sections.Partners.variants.LawPartners1,
  faq: sections.Faq.variants.LawFaq1,
  team: sections.Team.variants.LawTeam1,
  teamProfile: sections.TeamProfileContent.variants.LawTeamProfile1.members,
  portfolio: sections.Portfolio.variants.LawPortfolio1,
  privacyPolicy: sections.PrivacyPolicy.variants.LawPrivacyPolicy1,
  contactForm: sections.ContactFormContent.variants.LawContactForm1,
  consultation: sections.ConsultationContent.variants.LawConsultation1,
  thankYouPage: sections.ThankYouContent.variants.LawThankYou1,
  siteChrome: sections.SiteChromeContent.variants.LawSiteChrome1,
  cta: sections.Cta.variants.LawCta1,
  marquee: sections.Marquee.variants.LawMarquee1,
  gallery: sections.Gallery.variants.LawGallery1,
  photoStrip: sections.PhotoStrip.variants.LawPhotoStrip1,
  timeline: sections.Timeline.variants.LawTimeline1,
  industries: sections.Industries.variants.LawIndustries1,
  band: sections.Band.variants.LawBand1,
};

export const investmentContent = lawContent;

// Direct named component data exports for 100% backward compatibility
export const site = siteData.components.site;
export const nav = siteData.components.nav;
export const footer = siteData.components.footer;
export const pageHeads = siteData.components.pageHeads;
export const hero = siteData.components.hero;
export const marquee = siteData.components.marquee;
export const stats = siteData.components.stats;
export const about = siteData.components.about;
export const services = siteData.components.services;
export interface ServiceDetailData {
  overview: string;
  features: string[];
  benefits: { title: string; text: string }[];
  steps: string[];
  faq?: { q: string; a: string }[];
}

export const serviceDetails: Record<string, ServiceDetailData> =
  siteData.components.serviceDetails;
export const process = siteData.components.process;
export const portfolio = siteData.components.portfolio;
export const team = siteData.components.team;
export const testimonials = siteData.components.testimonials;
export const blog = siteData.components.blog;
export const faq = siteData.components.faq;
export const quote = siteData.components.quote;
export const thanks = siteData.components.thanks;
export const cta = siteData.components.cta;
export const whyUs = siteData.components.whyUs;
export const timeline = siteData.components.timeline;
export const industries = siteData.components.industries;
export const nextSteps = siteData.components.nextSteps;
export const budgets = siteData.components.budgets;
export const timelines = siteData.components.timelines;
export const gallery = siteData.components.gallery;
export const photoStrip = siteData.components.photoStrip;
export const band = siteData.components.band;

// Helper: Slugify utility
export const slugify = (t: string): string =>
  t
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Typed Team helper accessors
export type TeamMember = (typeof enrichedMembersType)[0];
type EnrichedMember = (typeof siteData.components.team.members)[0];
declare const enrichedMembersType: EnrichedMember[];

export const getAllTeamSlugs = (): string[] => {
  const members = sections.TeamProfileContent.variants.LawTeamProfile1.members;
  return members ? Object.keys(members) : [];
};

export const getTeamBySlug = (slug: string): EnrichedMember | null => {
  const members = sections.TeamProfileContent.variants.LawTeamProfile1.members as Record<string, EnrichedMember> | undefined;
  if (!members) return null;
  const normalized = slug.toLowerCase();
  return normalized in members ? members[normalized] : null;
};

// Typed Service helper accessors
export type ServiceDetailItem = typeof siteData.components.serviceDetails["corporate-commercial-law"];

export const getAllServiceSlugs = (): string[] => {
  const servicesMap = sections.ServiceDetailContent.variants.LawServiceDetail1.services;
  return servicesMap ? Object.keys(servicesMap) : [];
};

export const getServiceBySlug = (slug: string): ServiceDetailItem | null => {
  const servicesMap = sections.ServiceDetailContent.variants.LawServiceDetail1.services as Record<string, ServiceDetailItem> | undefined;
  if (!servicesMap) return null;
  const normalized = slug.toLowerCase();
  return normalized in servicesMap ? servicesMap[normalized] : null;
};

// Typed Blog helper accessors
export type BlogDetailItem = typeof sections.BlogDetailContent.variants.LawBlogDetail1.blogs[keyof typeof sections.BlogDetailContent.variants.LawBlogDetail1.blogs];

export const getAllBlogSlugs = (): string[] => {
  const blogs = sections.BlogDetailContent.variants.LawBlogDetail1.blogs;
  return blogs ? Object.keys(blogs) : [];
};

export const getBlogBySlug = (slug: string): BlogDetailItem | null => {
  const blogs = sections.BlogDetailContent.variants.LawBlogDetail1.blogs as Record<string, BlogDetailItem> | undefined;
  if (!blogs) return null;
  const normalized = slug.toLowerCase();
  return normalized in blogs ? blogs[normalized] : null;
};

export default siteData;
