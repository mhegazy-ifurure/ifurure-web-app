/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NavItem {
  label: string;
  path: string;
}
export interface NavItems {
  [x: string]: any;
  items: NavItem[];
}

export interface ContentSection {
  title?: string;
  contentList1?: string[];
  contentList2?: string[];
  contentEnd?: string;
  links?: NavItems;
  subtext?: string[];
  subContent?: { title: string; text: string }[];
  label?: string;
}

export interface Hero {
  title: string;
  subTitle: string;
  links: NavItems;
}
export interface HomePage {
  hero: Hero;
  content: ContentSection;
}
export interface HomeHeroProps {
  hero: Hero;
}
export interface ContentSectionProps {
  content: ContentSection;
}

export interface ServiceItem {
  title: string;
  text: string;
  links: NavItems;
}
export interface WhyUsData {
  title: string;
  text: string;
}

export interface WhyUsSection {
  label: string;
  title: string;
  links: NavItems;
  whyUsData: WhyUsData[];
}

export interface ServicesData {
  label: string;
  SectionTitle: string;
  serviceItems: ServiceItem[];
  WhyUs: WhyUsSection;
}

export interface ProjectItem {
  title: string;
  description: string;
  features: string[];
  link: NavItem;
}

export interface ProjectsData {
  label: string;
  SectionTitle: string;
  projectItems: ProjectItem[];
}

export interface Author {
  name: string;
  position: string;
  companyName: string;
}

export interface FeedbackData {
  rate: string;
  description: string;
  author: Author;
}
export interface endContent {
  intro: string;
  text: string;
  link: NavItem;
}

export interface TestimonialsData {
  label: string;
  SectionTitle: string;
  feedbackData: FeedbackData[];
  howItWorks: HowItWorksData;
  endContent: endContent;
}
export interface HowItWorksItem {
  title: string;
  description: string;
}

export interface HowItWorksData {
  label: string;
  title: string;
  listItems: HowItWorksItem[];
}

export interface FormField {
  label: string;
  placeholder: string;
}

export interface ContactForm {
  [x: string]: any |null |undefined;
  businessField?: any |null |undefined;
  phone?: any |null |undefined;
  companyName?: any |null |undefined;
  name?: FormField |null |undefined;
  email?: FormField |null |undefined;
  message?: FormField |null |undefined;
  checkItem?: string|null |undefined;
  submit?: string|null |undefined;
}
export interface ContactData {
  SectionTitle: string;
  subText: string;
  form: ContactForm;
  contactCard: ContactCard;
}

export interface ContactCard {
  label: string;
  text: string;
  info?: string;
}
[];

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  terms: boolean;
}
