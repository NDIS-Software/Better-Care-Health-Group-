import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Pop, Reveal } from "../_components/Motion";
import { PageHero } from "../_components/page-hero/PageHero";
import { serviceGroups } from "./_content/catalogue";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Allied Health and NDIS Services",
  description: "Explore therapist-led allied health, early childhood, daily living and community supports across Melbourne.",
};

const supportGroups = [
  { title: "Early childhood", description: "Family-centred support for development, participation and everyday routines.", services: serviceGroups.earlyChildhood },
  { title: "Daily living", description: "Practical assistance for home life, routines, travel and independence.", services: serviceGroups.dailyLiving },
  { title: "Community", description: "Support for participation, interests, connection and community access.", services: serviceGroups.community },
];

export default function ServicesPage() {
  const [physiotherapy, ...otherClinical] = serviceGroups.clinical;
  const PhysiotherapyIcon = physiotherapy.icon;

  return <main id="main-content">
    <PageHero
      title="Our services"
      imageKeywords={["AHPRA physiotherapist home visit Melbourne", "participant-centred allied health care Australia"]}
    >Therapist-led allied health, early childhood intervention and practical NDIS support shaped around everyday life.</PageHero>

    <section className={`page-section ${styles.clinicalSection}`}>
      <div className="site-shell">
        <Reveal><p className={styles.sectionLabel}>Therapist-led services</p><h2 className={styles.sectionTitle}>Clinical thinking, grounded in real life.</h2><p className={styles.sectionIntro}>Our Director is an AHPRA-registered physiotherapist. That clinical perspective informs how support is assessed, communicated, delegated and reviewed.</p></Reveal>
        <div className={styles.clinicalGrid}>
          <Pop className={styles.primaryClinical}>
            <Link href={`/services/${physiotherapy.slug}`}>
              <div className={styles.featureTop}><span>AHPRA-registered clinical leadership</span><PhysiotherapyIcon size={36} weight="fill" /></div>
              <div><h3>{physiotherapy.title}</h3><p>{physiotherapy.summary}</p><span className={styles.inlineLink}>Explore physiotherapy <ArrowRight size={18} /></span></div>
            </Link>
          </Pop>
          <div className={styles.clinicalStack}>{otherClinical.map((service) => { const Icon = service.icon; return <Pop key={service.slug}><Link href={`/services/${service.slug}`} className={styles.clinicalRow}><span><Icon size={23} /></span><div><h3>{service.title}</h3><p>{service.summary}</p></div><ArrowRight size={18} /></Link></Pop>; })}</div>
        </div>
      </div>
    </section>

    <section className={`page-section ${styles.directorySection}`}>
      <div className="site-shell">
        <Reveal><h2 className={styles.sectionTitle}>More ways we can help.</h2><p className={styles.sectionIntro}>Browse our early childhood, daily living and community services by name.</p></Reveal>
        <div className={styles.directoryGrid}>
          {supportGroups.map((group) => <section className={styles.directoryGroup} key={group.title}>
            <div className={styles.directoryHeading}><h3>{group.title}</h3><p>{group.description}</p></div>
            <div className={styles.directoryLinks}>
              {group.services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}><span>{service.title}</span><ArrowRight size={18} /></Link>)}
            </div>
          </section>)}
        </div>
      </div>
    </section>
  </main>;
}
