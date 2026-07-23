import Image from "next/image";
import { PageHero } from "../_components/page-hero/PageHero";
import type { Locale } from "../_i18n/locale";

const copy = {
  en: {
    title: "Better care begins with listening.",
    lead: "We are a Melbourne-based allied health and support provider focused on practical care, clear communication and genuine respect.",
    imageAlt: "A warm home physiotherapy appointment with family involvement",
    heading: "Care should make sense in daily life.",
    intro: "Better Care Health Group works with participants, older people, families and referrers across Melbourne. Our mobile model helps us understand the real environments, routines and relationships around each person.",
    howTitle: "How we work",
    howBody: "We listen first, explain recommendations clearly and keep support connected to meaningful goals. When you consent, we collaborate with the people already involved in your care.",
    standardsTitle: "Professional standards",
    standardsBody: "We are a Registered NDIS Provider. Our practitioners hold the qualifications and professional registrations required for their roles, including AHPRA registration where applicable.",
  },
  zh: {
    title: "更好的照护，从聆听开始。",
    lead: "我们是位于墨尔本的联合健康与支持服务机构，重视实用照护、清晰沟通和真诚尊重。",
    imageAlt: "物理治疗师在家中与客户及家人进行温暖的治疗沟通",
    heading: "照护应当真正适合日常生活。",
    intro: "Better Care Health Group 为墨尔本各地的参与者、长者、家庭及转介人员提供服务。上门服务让我们能够了解每个人真实的生活环境、日常习惯与支持关系。",
    howTitle: "我们的工作方式",
    howBody: "我们先聆听，再清楚说明建议，并让支持始终与有意义的目标保持联系。在获得您的同意后，我们会与已经参与照护的人员合作。",
    standardsTitle: "专业标准",
    standardsBody: "我们是注册 NDIS 服务提供商。专业人员具备其岗位所需的资质与专业注册，并在适用情况下持有 AHPRA 注册。",
  },
} as const;

export function AboutPageView({ locale }: { locale: Locale }) {
  const content = copy[locale];
  return <main id="main-content"><PageHero title={content.title} locale={locale} imageKeywords={["allied health director portrait Melbourne natural", "care team participant planning home Australia"]}>{content.lead}</PageHero><section className="page-section"><div className="site-shell film-layout"><div className="film-frame"><Image src="/media/home-physio-hero.png" alt={content.imageAlt} width={1792} height={1024} /></div><div className="prose"><h2>{content.heading}</h2><p>{content.intro}</p><h3>{content.howTitle}</h3><p>{content.howBody}</p><h3>{content.standardsTitle}</h3><p>{content.standardsBody}</p></div></div></section></main>;
}
