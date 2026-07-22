import { Clock, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import { EnquiryForm } from "../_components/EnquiryForm";
import { PageHero } from "../_components/page-hero/PageHero";
import { company } from "../_content/site";
import type { Locale } from "../_i18n/locale";

const copy = {
  en: {
    title: "Tell us how we can help.",
    lead: "Share a few initial details and our team will contact you to discuss service fit, availability and the next step.",
    label: "Contact details",
    heading: "Prefer to call or email?",
    response: "We aim to respond within two business days.",
    urgent: "If someone is in immediate danger or needs urgent medical help, call 000.",
  },
  zh: {
    title: "告诉我们可以如何帮助您。",
    lead: "请提供一些基本信息，团队会联系您讨论服务适配、可用时间及下一步安排。",
    label: "联系方式",
    heading: "希望通过电话或邮件联系？",
    response: "我们通常会在两个工作日内回复。",
    urgent: "如有人面临即时危险或需要紧急医疗协助，请拨打 000。",
  },
} as const;

export function EnquiryPageView({ locale }: { locale: Locale }) {
  const content = copy[locale];
  return <main id="main-content"><PageHero title={content.title} locale={locale} imageKeywords={["care coordinator phone conversation Australia", "participant family allied health enquiry home"]}>{content.lead}</PageHero><section className="page-section"><div className="site-shell form-layout"><aside><p className="eyebrow">{content.label}</p><h2 className="standalone-page-heading">{content.heading}</h2><div className="prose"><p><Phone size={22} className="inline-contact-icon" /><a href={company.phoneHref}>{company.phone}</a></p><p><Envelope size={22} className="inline-contact-icon" /><a href={`mailto:${company.email}`}>{company.email}</a></p><p><Clock size={22} className="inline-contact-icon" />{content.response}</p><p>{content.urgent}</p></div></aside><EnquiryForm locale={locale} /></div></section></main>;
}
