import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Pop, Reveal } from "../_components/Motion";
import { PageHero } from "../_components/page-hero/PageHero";
import type { Locale } from "../_i18n/locale";
import { localizePath } from "../_i18n/locale";
import { getServiceGroups } from "./_content/translations";
import { serviceOverviewPhotos } from "./_content/photo-assets";
import styles from "./services.module.css";

const copy = {
  en: {
    heroTitle: "Our services",
    heroBody: "Therapist-led allied health, early childhood intervention and practical NDIS support shaped around everyday life.",
    clinicalLabel: "Therapist-led services",
    clinicalTitle: "Clinical thinking, grounded in real life.",
    clinicalIntro: "Our Director is an AHPRA-registered physiotherapist. That clinical perspective informs how support is assessed, communicated, delegated and reviewed.",
    leadership: "AHPRA-registered clinical leadership",
    explorePhysio: "Explore physiotherapy",
    directoryTitle: "More ways we can help.",
    directoryIntro: "Browse our early childhood, daily living and community services by name.",
    groups: {
      earlyChildhood: ["Early childhood", "Family-centred support for development, participation and everyday routines."],
      dailyLiving: ["Daily living", "Practical assistance for home life, routines, travel and independence."],
      community: ["Community", "Support for participation, interests, connection and community access."],
    },
  },
  zh: {
    heroTitle: "我们的服务",
    heroBody: "以治疗师为主导的联合健康、幼儿早期介入及实用 NDIS 支持，围绕真实日常生活安排。",
    clinicalLabel: "治疗师主导的服务",
    clinicalTitle: "专业临床判断，落实于日常生活。",
    clinicalIntro: "我们的负责人是 AHPRA 注册物理治疗师。临床专业视角贯穿支持评估、沟通、授权与复查过程。",
    leadership: "AHPRA 注册专业人员临床领导",
    explorePhysio: "了解物理治疗",
    directoryTitle: "更多支持方式。",
    directoryIntro: "按类别查看幼儿、日常生活和社区参与服务。",
    groups: {
      earlyChildhood: ["幼儿支持", "以家庭为中心，支持孩子的发展、参与及日常生活。"],
      dailyLiving: ["日常生活", "为居家生活、日常习惯、出行与独立能力提供实用协助。"],
      community: ["社区参与", "支持参与活动、发展兴趣、建立联系及融入社区。"],
    },
  },
} as const;

export function ServicesPageView({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const serviceGroups = getServiceGroups(locale);
  const [physiotherapy, ...otherClinical] = serviceGroups.clinical;
  const PhysiotherapyIcon = physiotherapy.icon;
  const path = (href: string) => localizePath(href, locale);
  const supportGroups = [
    { title: content.groups.earlyChildhood[0], description: content.groups.earlyChildhood[1], services: serviceGroups.earlyChildhood },
    { title: content.groups.dailyLiving[0], description: content.groups.dailyLiving[1], services: serviceGroups.dailyLiving },
    { title: content.groups.community[0], description: content.groups.community[1], services: serviceGroups.community },
  ];

  return <main id="main-content">
    <PageHero
      title={content.heroTitle}
      locale={locale}
      images={serviceOverviewPhotos}
      imageKeywords={["AHPRA physiotherapist home visit Melbourne", "participant-centred allied health care Australia"]}
    >{content.heroBody}</PageHero>

    <section className={`page-section ${styles.clinicalSection}`}>
      <div className="site-shell">
        <Reveal><p className={styles.sectionLabel}>{content.clinicalLabel}</p><h2 className={styles.sectionTitle}>{content.clinicalTitle}</h2><p className={styles.sectionIntro}>{content.clinicalIntro}</p></Reveal>
        <div className={styles.clinicalGrid}>
          <Pop className={styles.primaryClinical}>
            <Link href={path(`/services/${physiotherapy.slug}`)}>
              <div className={styles.featureTop}><span>{content.leadership}</span><PhysiotherapyIcon size={36} weight="fill" /></div>
              <div><h3>{physiotherapy.title}</h3><p>{physiotherapy.summary}</p><span className={styles.inlineLink}>{content.explorePhysio} <ArrowRight size={18} /></span></div>
            </Link>
          </Pop>
          <div className={styles.clinicalStack}>{otherClinical.map((service) => { const Icon = service.icon; return <Pop key={service.slug}><Link href={path(`/services/${service.slug}`)} className={styles.clinicalRow}><span><Icon size={23} /></span><div><h3>{service.title}</h3><p>{service.summary}</p></div><ArrowRight size={18} /></Link></Pop>; })}</div>
        </div>
      </div>
    </section>

    <section className={`page-section ${styles.directorySection}`}>
      <div className="site-shell">
        <Reveal><h2 className={styles.sectionTitle}>{content.directoryTitle}</h2><p className={styles.sectionIntro}>{content.directoryIntro}</p></Reveal>
        <div className={styles.directoryGrid}>
          {supportGroups.map((group) => <section className={styles.directoryGroup} key={group.title}>
            <div className={styles.directoryHeading}><h3>{group.title}</h3><p>{group.description}</p></div>
            <div className={styles.directoryLinks}>
              {group.services.map((service) => <Link key={service.slug} href={path(`/services/${service.slug}`)}><span>{service.title}</span><ArrowRight size={18} /></Link>)}
            </div>
          </section>)}
        </div>
      </div>
    </section>
  </main>;
}
