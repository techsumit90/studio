import type { LucideIcon } from 'lucide-react';
import { Code2, Smartphone, Cloud, LineChart, PenTool, Bot } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'We build responsive, high-performance websites and web applications tailored to your business needs, using the latest technologies for a seamless user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'From iOS to Android, we create intuitive and engaging mobile applications that connect you with your customers on the go, enhancing accessibility and brand loyalty.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Streamline your operations with our cloud and DevOps solutions. We optimize your infrastructure for scalability, reliability, and security, enabling faster deployment cycles.',
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Unlock the power of your data. Our experts provide insightful analytics and business intelligence solutions to help you make data-driven decisions and drive growth.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Our design team crafts beautiful and user-friendly interfaces that captivate your audience. We focus on creating a delightful user experience that boosts engagement.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Leverage the power of Artificial Intelligence. We integrate cutting-edge AI models into your products and workflows to automate tasks and deliver intelligent features.',
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web App' | 'Mobile App' | 'UI/UX' | 'Cloud';
  image: {
    id: string;
    hint: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Fintech E-commerce Platform',
    category: 'Web App',
    image: { id: 'portfolio-1', hint: 'website screenshot' },
  },
  {
    id: 'p2',
    title: 'Health & Wellness Mobile App',
    category: 'Mobile App',
    image: { id: 'portfolio-2', hint: 'mobile app' },
  },
  {
    id: 'p3',
    title: 'SaaS Analytics Dashboard',
    category: 'UI/UX',
    image: { id: 'portfolio-3', hint: 'dashboard analytics' },
  },
  {
    id: 'p4',
    title: 'Real Estate Corporate Site',
    category: 'Web App',
    image: { id: 'portfolio-4', hint: 'corporate website' },
  },
  {
    id: 'p5',
    title: 'Travel App UI/UX Overhaul',
    category: 'UI/UX',
    image: { id: 'portfolio-5', hint: 'design wireframes' },
  },
  {
    id: 'p6',
    title: 'Serverless Cloud Architecture',
    category: 'Cloud',
    image: { id: 'portfolio-6', hint: 'cloud infrastructure' },
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatar: {
    id: string;
    hint: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'AnnexSoft Digital Hub transformed our online presence. Their team delivered a stunning website that exceeded our expectations and drove a 200% increase in engagement. A truly professional and talented agency!',
    name: 'Sarah Johnson',
    company: 'CEO of Innovate Inc.',
    avatar: { id: 'avatar-1', hint: 'professional woman' },
  },
  {
    quote:
      'Working with AnnexSoft was a game-changer. Their expertise in mobile app development is unmatched. They were responsive, insightful, and delivered a product that our users love. Highly recommended.',
    name: 'Michael Chen',
    company: 'Founder of ConnectApp',
    avatar: { id: 'avatar-2', hint: 'professional man' },
  },
  {
    quote:
      'The cloud solutions provided by AnnexSoft have been critical to our scalability. Their DevOps practices have significantly improved our deployment speed and system reliability. An invaluable partner for any tech company.',
    name: 'Emily Rodriguez',
    company: 'CTO at ScaleFast',
    avatar: { id: 'avatar-3', hint: 'startup founder' },
  },
];
