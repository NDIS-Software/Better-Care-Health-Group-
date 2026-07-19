import type { Metadata } from "next";
import { CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { PageHero } from "../../_components/page-hero/PageHero";
import { Reveal } from "../../_components/Motion";
import { services } from "../_content/catalogue";
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
  const Icon = service.icon;

  return <main id="main-content">
    <PageHero title={service.title} imageKeywords={service.imageKeywords}>{service.summary}</PageHero>
    <section className="page-section">
      <div className={`site-shell ${styles.introLayout}`}>
        <Reveal className={styles.introHeading}>
          <span><Icon size={28} /> {service.category}</span>
          {"code" in service && <small>NDIS registration group {service.code}</small>}
          <h2>Support built around the person, not a template.</h2>
        </Reveal>
        <Reveal delay={.08} className={styles.introCopy}>
          <p>{service.intro}</p>
          <p>We begin with a clear conversation about goals, preferences, communication, funding, service fit and any risks or adjustments that matter. Information is shared with family, referrers or other providers only with consent or where law requires it.</p>
        </Reveal>
      </div>
    </section>

    <section className={`page-section ${styles.detailsSection}`}>
      <div className="site-shell">
        <Reveal><h2 className={styles.sectionTitle}>What support may include</h2></Reveal>
        <div className={styles.detailGrid}>
          <Reveal className={styles.listPanel}>{service.includes.map((item) => <span key={item}><CheckCircle size={21} weight="fill" />{item}</span>)}</Reveal>
          <Reveal delay={.08} className={styles.whoPanel}><h3>Who this may help</h3>{service.helps.map((item) => <p key={item}>{item}</p>)}</Reveal>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-shell">
        <Reveal><h2 className={styles.sectionTitle}>How we work</h2><p className={styles.sectionCopy}>Our process follows the same operating principles across clinical, daily living and community support.</p></Reveal>
        <div className={styles.approachGrid}>{service.approach.map((item, index) => <Reveal key={item} delay={index * .06}><article><span>0{index + 1}</span><h3>{item}</h3></article></Reveal>)}</div>
        <Reveal className={styles.assurance}><ShieldCheck size={30} weight="fill" /><div><h3>Safe scope and clear expectations</h3><p>Service suitability, practitioner or worker availability, fees, travel, responsibilities and review arrangements are confirmed before support begins. Outcomes depend on individual assessment and circumstances.</p></div></Reveal>
      </div>
    </section>
  </main>;
}
