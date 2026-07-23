import { notFound } from "next/navigation";
import type { Locale } from "../../_i18n/locale";
import { getServices } from "../_content/translations";
import { ServiceDetails, ServiceHero, ServiceIntro, ServiceProcess } from "./ServiceDetailSections";
import styles from "./service.module.css";

export function ServiceDetailPageView({ slug, locale }: { slug: string; locale: Locale }) {
  const service = getServices(locale).find((item) => item.slug === slug);
  if (!service) notFound();

  const stepDescriptions = [
    service.approach[0],
    service.approach[1],
    service.approach[2],
    locale === "zh"
      ? "我们会共同复查进展，并在目标或情况变化时调整计划。"
      : "We review progress together and adjust the plan as goals or circumstances change.",
  ];

  return <main id="main-content" className={styles.servicePage}>
    <ServiceHero title={service.title} summary={service.summary} photoPrompt={service.photoPrompts.hero} photoSrc={service.photos.hero} locale={locale} />
    <ServiceIntro title={service.title} intro={service.intro} photoPrompt={service.photoPrompts.supporting} photoSrc={service.photos.supporting} locale={locale} />
    <ServiceDetails includes={service.includes} helps={service.helps} locale={locale} />
    <ServiceProcess descriptions={stepDescriptions} locale={locale} />
  </main>;
}
