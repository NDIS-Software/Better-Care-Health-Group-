import { ArrowRight, CheckCircle, EnvelopeSimple, HouseLine, MapPin, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "../_components/EnquiryForm";
import { FaqSection, getFaqs } from "../_components/faq/FaqSection";
import { HeroVideo } from "../_components/HeroVideo";
import { Pop, Reveal } from "../_components/Motion";
import { GoogleReviewsScroll } from "../_components/reviews/GoogleReviewsScroll";
import { absoluteSiteUrl, brandLogoPath, brandSocialImagePath, siteUrl } from "../_config/seo";
import { careSteps, company } from "../_content/site";
import type { Locale } from "../_i18n/locale";
import { localizePath } from "../_i18n/locale";
import { getServices } from "../services/_content/translations";
import styles from "./HomePage.module.css";
import { TeamPreview } from "./team-preview/TeamPreview";

const copy = {
  en: {
    heroTitle: <>Care that moves <span>with you.</span></>,
    heroLead: "Allied health and practical support delivered at home and in the community across Melbourne.",
    makeEnquiry: "Make an enquiry",
    exploreServices: "Explore services",
    heroNote: "NDIS, Support at Home, private and other eligible funding pathways.",
    trust: ["Registered NDIS Provider", "AHPRA-registered practitioners where required", "Home and community visits across Melbourne"],
    companyLabel: "Better Care Health Group",
    companyTitle: "Allied health that fits into real life.",
    companyParagraphs: ["Better Care Health Group is a Melbourne-based allied health and support provider working with participants, older people, families and referrers across Melbourne.", "We bring care into homes and community settings so recommendations can connect with real routines, environments and goals. Our team values clear communication, informed choice and practical support that can adapt as needs change."],
    promises: ["Mobile and community-based care", "Participant and client-led planning", "Communication with families and referrers, with consent"],
    servicesLabel: "Our services",
    servicesTitle: "Support shaped around everyday life.",
    servicesIntro: "Therapist-led care and practical support, planned around the places and routines that matter to you.",
    clinicalLeadership: "AHPRA-registered clinical leadership",
    physioHome: "Physiotherapy at home",
    physioBody: "Build movement, strength and confidence where everyday life happens.",
    viewPhysio: "View physiotherapy",
    photoDirection: "PHOTO DIRECTION",
    allServices: "See all services",
    processLabel: "How our services work",
    processTitle: "A clear start, with room to adapt.",
    processIntro: "Every person and referral is different. These steps keep the process understandable without forcing care into a one-size-fits-all pathway.",
    processSteps: ["Start with a conversation", "Shape the right support", "Review and adapt"],
    processDescriptions: careSteps.map((step) => step.description),
    locationLabel: "Where we work",
    locationTitle: "Based in Mount Waverley. Supporting Melbourne.",
    locationBody: "Our administration base is in Mount Waverley, with mobile allied health and support delivered in homes and community settings across Melbourne. Availability depends on service type, clinician capacity and travel area.",
    visitNote: "Please contact us before attending this address.",
    viewLocation: "View Mount Waverley",
    enquiryLabel: "Online enquiry",
    enquiryTitle: "Tell us what support you are looking for.",
    enquiryBody: "A short introduction is enough. Our team will contact you to discuss service fit, availability and the next practical step.",
    responseTime: "We aim to respond within two business days. For urgent medical help, call 000.",
  },
  zh: {
    heroTitle: <>让照护与您<span>同行。</span></>,
    heroLead: "在墨尔本为您提供上门及社区联合健康与实用支持服务。",
    makeEnquiry: "在线咨询",
    exploreServices: "查看服务",
    heroNote: "适用于 NDIS、Support at Home、自费及其他符合条件的资金渠道。",
    trust: ["注册 NDIS 服务提供商", "在适用情况下由 AHPRA 注册专业人员提供服务", "覆盖墨尔本的上门与社区服务"],
    companyLabel: "Better Care Health Group",
    companyTitle: "融入真实生活的联合健康服务。",
    companyParagraphs: ["Better Care Health Group 是一家位于墨尔本的联合健康与支持服务机构，为参与者、长者、家庭及转介人员提供服务。", "我们把照护带到家庭和社区，让专业建议能够联系真实的生活习惯、环境与目标。团队重视清晰沟通、知情选择，以及能够随需要变化而调整的实用支持。"],
    promises: ["上门及社区照护", "由参与者和客户主导的服务规划", "在获得同意后与家庭及转介人员沟通"],
    servicesLabel: "我们的服务",
    servicesTitle: "围绕日常生活安排支持。",
    servicesIntro: "由治疗师主导的照护与实用支持，围绕对您真正重要的地点和生活习惯规划。",
    clinicalLeadership: "AHPRA 注册专业人员临床领导",
    physioHome: "上门物理治疗",
    physioBody: "在日常生活发生的地方，提升活动能力、力量和信心。",
    viewPhysio: "了解物理治疗",
    photoDirection: "图片方向",
    allServices: "查看全部服务",
    processLabel: "服务流程",
    processTitle: "清晰开始，灵活调整。",
    processIntro: "每个人和每次转介都不同。以下步骤让过程清楚易懂，同时保留根据个人情况调整的空间。",
    processSteps: ["从沟通开始", "共同制定合适支持", "复查并调整"],
    processDescriptions: ["我们会聆听您重视的事情、日常生活安排、正在考虑的支持，以及您希望哪些人参与讨论。", "我们共同确认服务是否适合、目标、资金、时间及确保支持安全、清晰和实用的具体安排。", "服务开始后，我们保持沟通，并随着情况变化复查进展、重点和实际安排。"],
    locationLabel: "服务地区",
    locationTitle: "立足 Mount Waverley，服务墨尔本。",
    locationBody: "我们的行政办公室位于 Mount Waverley，并在墨尔本各地的家庭及社区环境提供上门联合健康和支持服务。实际服务范围取决于服务类型、专业人员安排及出行距离。",
    visitNote: "前往此地址前请先联系我们。",
    viewLocation: "查看 Mount Waverley",
    enquiryLabel: "在线咨询",
    enquiryTitle: "告诉我们您正在寻找哪类支持。",
    enquiryBody: "简单介绍情况即可。团队会联系您，讨论服务适配、可用时间及下一步安排。",
    responseTime: "我们通常会在两个工作日内回复。如需紧急医疗协助，请拨打 000。",
  },
} as const;

export function HomePageView({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const services = getServices(locale);
  const faqs = getFaqs(locale);
  const path = (href: string) => localizePath(href, locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    description: locale === "zh" ? "为墨尔本提供上门联合健康与社区支持服务。" : "Mobile allied health and community support provider serving Melbourne.",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: absoluteSiteUrl(brandLogoPath), contentUrl: absoluteSiteUrl(brandLogoPath), width: 214, height: 214, caption: `${company.name} logo` },
    image: absoluteSiteUrl(brandSocialImagePath),
    telephone: "+61 452 638 779",
    email: company.email,
    address: { "@type": "PostalAddress", streetAddress: "73 Larch Crescent", addressLocality: "Mount Waverley", addressRegion: "VIC", postalCode: "3149", addressCountry: "AU" },
    areaServed: { "@type": "City", name: "Melbourne" },
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return <main id="main-content" className={styles.home}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    <section className={`hero ${styles.hero}`}>
      <HeroVideo />
      <div className="hero-content"><Reveal className="hero-copy">
        <h1>{content.heroTitle}</h1>
        <p className="hero-lead">{content.heroLead}</p>
        <div className="hero-actions"><Link className="button button-white" href="#home-enquiry">{content.makeEnquiry} <ArrowRight size={18} /></Link><Link className="button button-ghost" href={path("/services")}>{content.exploreServices}</Link></div>
        <p className="hero-note">{content.heroNote}</p>
      </Reveal></div>
    </section>
    <section className={`trust-rail ${styles.trustRail}`} aria-label={locale === "zh" ? "服务机构信息" : "Provider information"}><div className="site-shell trust-grid">
      <div className="trust-item"><ShieldCheck className="trust-icon" size={25} /> {content.trust[0]}</div>
      <div className="trust-item"><CheckCircle className="trust-icon" size={25} /> {content.trust[1]}</div>
      <div className="trust-item"><HouseLine className="trust-icon" size={25} /> {content.trust[2]}</div>
    </div></section>

    <section className={`page-section company-section ${styles.companySection}`}><div className="site-shell company-intro">
      <Reveal><p className="eyebrow">{content.companyLabel}</p><h2 className="section-title">{content.companyTitle}</h2></Reveal>
      <Reveal delay={.1}><div className="company-copy"><p>{content.companyParagraphs[0]}</p><p>{content.companyParagraphs[1]}</p><div className="company-promises">{content.promises.map((promise) => <span key={promise}>{promise}</span>)}</div></div></Reveal>
    </div></section>

    <TeamPreview locale={locale} />

    <section className={`page-section ${styles.servicesSection}`}><div className="site-shell">
      <div className={styles.servicesHeader}><Reveal><p className="eyebrow">{content.servicesLabel}</p><h2 className="section-title">{content.servicesTitle}</h2><p className="section-copy">{content.servicesIntro}</p></Reveal></div>
      <Pop className={styles.featuredService}>
        <Link href={path("/services/physiotherapy")} aria-label={locale === "zh" ? "查看上门物理治疗" : "View physiotherapy at home"}>
          <Image src="/media/home-physio-hero.png" alt={locale === "zh" ? "物理治疗师在上门服务中协助客户" : "Physiotherapist supporting a person during a home visit"} width={1792} height={1024} />
          <div className={styles.featuredContent}><span>{content.clinicalLeadership}</span><h3>{content.physioHome}</h3><p>{content.physioBody}</p><span className={styles.featuredAction}>{content.viewPhysio} <ArrowRight size={19} /></span></div>
        </Link>
      </Pop>
      <div className={styles.serviceGrid}>{services.slice(1, 5).map((service, index) => { const Icon = service.icon; return <Pop key={service.slug} delay={index * .06}><Link className={styles.serviceCard} href={path(`/services/${service.slug}`)}>
        <div className={styles.serviceMedia} data-photo-prompt={service.photoPrompts.hero}><Image src={service.photos.hero} alt={`${service.title} support in the community`} fill sizes="(max-width: 680px) 100vw, (max-width: 1040px) 34vw, 20vw" /></div>
        <div className={styles.serviceCardBody}><span className={styles.serviceIcon}><Icon size={22} /></span><div><h3>{service.title}</h3><p>{service.summary}</p></div><ArrowRight className={styles.cardArrow} size={19} /></div>
      </Link></Pop>; })}</div>
      <div className={styles.servicesAction}><Link className="button button-dark" href={path("/services")}>{content.allServices} <ArrowRight size={18} /></Link></div>
    </div></section>

    <section className={`page-section process-section ${styles.processSection}`}><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">{content.processLabel}</p><h2 className="section-title">{content.processTitle}</h2></Reveal><Reveal delay={.1}><p className="section-copy">{content.processIntro}</p></Reveal></div>
      <div className="process-grid">{careSteps.map((step, index) => { const Icon = step.icon; return <Reveal key={content.processSteps[index]} delay={index * .08}><article className="process-step"><div className="process-step-top"><span>0{index + 1}</span><Icon size={30} /></div><h3>{content.processSteps[index]}</h3><p>{content.processDescriptions[index]}</p></article></Reveal>; })}</div>
    </div></section>

    <GoogleReviewsScroll locale={locale} />

    <section className={`page-section location-section ${styles.locationSection}`}><div className="site-shell location-layout">
      <Reveal><div><p className="eyebrow">{content.locationLabel}</p><h2 className="section-title">{content.locationTitle}</h2><p className="section-copy">{content.locationBody}</p><address className="location-address"><MapPin size={25} /><span><strong>{company.name}</strong><br />{company.address}<br /><small>{content.visitNote}</small></span></address><div className="location-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Mount+Waverley+VIC+3149" target="_blank" rel="noreferrer">{content.viewLocation} <ArrowRight size={18} /></a><a className="button button-white" href={company.phoneHref}><Phone size={18} /> {company.phone}</a></div></div></Reveal>
      <Reveal delay={.1}><div className="map-frame"><iframe title={locale === "zh" ? "Mount Waverley 服务地点" : "Mount Waverley service location"} src="https://www.google.com/maps?q=Mount%20Waverley%20VIC%203149&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></Reveal>
    </div></section>

    <FaqSection locale={locale} />

    <section id="home-enquiry" className={`page-section home-enquiry-section ${styles.enquirySection}`}><div className="site-shell home-enquiry-layout">
      <Reveal><div className="home-enquiry-copy"><p className="eyebrow">{content.enquiryLabel}</p><h2 className="section-title">{content.enquiryTitle}</h2><p className="section-copy">{content.enquiryBody}</p><div className="home-contact-list"><a href={company.phoneHref}><Phone size={21} /> {company.phone}</a><a href={`mailto:${company.email}`}><EnvelopeSimple size={21} /> {company.email}</a><p>{content.responseTime}</p></div></div></Reveal>
      <Reveal delay={.1}><EnquiryForm locale={locale} /></Reveal>
    </div></section>
  </main>;
}
