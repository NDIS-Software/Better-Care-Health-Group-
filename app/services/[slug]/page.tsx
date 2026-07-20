import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "../_content/catalogue";
import {
  ServiceDetails,
  ServiceHero,
  ServiceIntro,
  ServiceProcess,
} from "./ServiceDetailSections";
import styles from "./service.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: `${service.summary} Mobile and community-based support across Melbourne.` } : {};
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const stepDescriptions = [
    service.approach[0],
    service.approach[1],
    service.approach[2],
    "We review progress together and adjust the plan as goals or circumstances change.",
  ];

  return <main id="main-content" className={styles.servicePage}>
    <ServiceHero title={service.title} summary={service.summary} photoPrompt={service.photoPrompts.hero} />
    <ServiceIntro title={service.title} intro={service.intro} photoPrompt={service.photoPrompts.supporting} />
    <ServiceDetails includes={service.includes} helps={service.helps} />
    <ServiceProcess descriptions={stepDescriptions} />
  </main>;
}
