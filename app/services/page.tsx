import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Pop, Reveal } from "../_components/Motion";
import { PageHero } from "../_components/page-hero/PageHero";
import { serviceGroups } from "./_content/catalogue";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Allied Health and NDIS Services",
  description: "Explore therapist-led allied health, 0118 early childhood and NDIS daily living and community supports across Melbourne.",
};

function ServiceLink({ service }: { service: (typeof serviceGroups.dailyLiving)[number] | (typeof serviceGroups.community)[number] }) {
  const Icon = service.icon;
  return <Pop><Link className={styles.serviceCard} href={`/services/${service.slug}`}>
    <span className={styles.cardIcon}><Icon size={24} /></span>
    <div>
      {"code" in service && <span className={styles.code}>{service.code}</span>}
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
    </div>
    <ArrowRight size={20} />
  </Link></Pop>;
}

export default function ServicesPage() {
  const [physiotherapy, ...otherClinical] = serviceGroups.clinical;
  const [earlyChildhood, keyWorker] = serviceGroups.earlyChildhood;
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

    <section className={`page-section ${styles.earlySection}`}>
      <div className={`site-shell ${styles.earlyLayout}`}>
        <Reveal className={styles.earlyCopy}>
          <span className={styles.code}>Registration group 0118</span>
          <h2>{earlyChildhood.title}</h2>
          <p>{earlyChildhood.intro}</p>
          <div className={styles.earlyPoints}>{earlyChildhood.approach.map((item) => <span key={item}><CheckCircle size={20} weight="fill" /> {item}</span>)}</div>
          <Link className="button button-dark" href={`/services/${earlyChildhood.slug}`}>Explore early childhood support <ArrowRight size={18} /></Link>
        </Reveal>
        <Pop className={styles.earlyMedia}>
          <div role="img" aria-label={`Image placeholder: ${earlyChildhood.imageKeywords[0]}`}><span>Image placeholder</span><strong>{earlyChildhood.imageKeywords[0]}</strong></div>
          <Link href={`/services/${keyWorker.slug}`}><span>Related service</span><h3>{keyWorker.title}</h3><p>{keyWorker.summary}</p><ArrowRight size={20} /></Link>
        </Pop>
      </div>
    </section>

    <section className="page-section">
      <div className="site-shell">
        <Reveal><h2 className={styles.sectionTitle}>Daily living support</h2><p className={styles.sectionIntro}>Clear, practical assistance planned around preferences, routines, worker competence and continuity.</p></Reveal>
        <div className={styles.catalogueGrid}>{serviceGroups.dailyLiving.map((service) => <ServiceLink key={service.slug} service={service} />)}</div>
      </div>
    </section>

    <section className={`page-section ${styles.communitySection}`}>
      <div className="site-shell">
        <Reveal><h2 className={styles.sectionTitle}>Community participation</h2><p className={styles.sectionIntro}>Support to build skills, pursue interests and take part in community life in ways that feel meaningful.</p></Reveal>
        <div className={styles.catalogueGrid}>{serviceGroups.community.map((service) => <ServiceLink key={service.slug} service={service} />)}</div>
      </div>
    </section>
  </main>;
}
