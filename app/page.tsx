import type { Metadata } from "next";
import { ArrowRight, CheckCircle, EnvelopeSimple, HouseLine, MapPin, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { EnquiryForm } from "./_components/EnquiryForm";
import { DirectorProfile } from "./_components/director/DirectorProfile";
import { FaqSection } from "./_components/faq/FaqSection";
import { HeroVideo } from "./_components/HeroVideo";
import { Pop, Reveal } from "./_components/Motion";
import { GoogleReviewsScroll } from "./_components/reviews/GoogleReviewsScroll";
import { careSteps, company, faqs, services } from "./_content/site";
import styles from "./home/HomePage.module.css";

export const metadata: Metadata = { title: "Allied Health at Home in Melbourne", description: "Physiotherapy, occupational therapy, NDIS and Support at Home services delivered across Melbourne." };

export default function Home() {
  const structuredData = { "@context": "https://schema.org", "@type": "MedicalBusiness", name: "Better Care Health Group", telephone: "+61 452 638 779", email: "info@bettercarehg.com", address: { "@type": "PostalAddress", streetAddress: "73 Larch Crescent", addressLocality: "Mount Waverley", addressRegion: "VIC", postalCode: "3149", addressCountry: "AU" }, areaServed: "Melbourne", url: process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com" };
  const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <main id="main-content" className={styles.home}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    <section className={`hero ${styles.hero}`}>
      <HeroVideo />
      <div className="hero-content"><Reveal className="hero-copy">
        <h1>Care that moves <span>with you.</span></h1>
        <p className="hero-lead">Allied health and practical support delivered at home and in the community across Melbourne.</p>
        <div className="hero-actions"><Link className="button button-white" href="#home-enquiry">Make an enquiry <ArrowRight size={18} /></Link><Link className="button button-ghost" href="/services">Explore services</Link></div>
        <p className="hero-note">NDIS, Support at Home, private and other eligible funding pathways.</p>
      </Reveal></div>
    </section>
    <section className={`trust-rail ${styles.trustRail}`} aria-label="Provider information"><div className="site-shell trust-grid">
      <div className="trust-item"><ShieldCheck className="trust-icon" size={25} /> Registered NDIS Provider</div>
      <div className="trust-item"><CheckCircle className="trust-icon" size={25} /> AHPRA-registered practitioners where required</div>
      <div className="trust-item"><HouseLine className="trust-icon" size={25} /> Home and community visits across Melbourne</div>
    </div></section>

    <section className={`page-section company-section ${styles.companySection}`}><div className="site-shell company-intro">
      <Reveal><p className="eyebrow">Better Care Health Group</p><h2 className="section-title">Allied health that fits into real life.</h2></Reveal>
      <Reveal delay={.1}><div className="company-copy"><p>Better Care Health Group is a Melbourne-based allied health and support provider working with participants, older people, families and referrers across Melbourne.</p><p>We bring care into homes and community settings so recommendations can connect with real routines, environments and goals. Our team values clear communication, informed choice and practical support that can adapt as needs change.</p><div className="company-promises"><span>Mobile and community-based care</span><span>Participant and client-led planning</span><span>Communication with families and referrers, with consent</span></div></div></Reveal>
    </div></section>

    <DirectorProfile />

    <section className={`page-section ${styles.servicesSection}`}><div className="site-shell">
      <div className={styles.servicesHeader}><Reveal><p className="eyebrow">Our services</p><h2 className="section-title">Support shaped around everyday life.</h2><p className="section-copy">Therapist-led care and practical support, planned around the places and routines that matter to you.</p></Reveal></div>
      <Pop className={styles.featuredService}>
        <Link href="/services/physiotherapy" aria-label="View physiotherapy at home">
          <img src="/media/home-physio-hero.png" alt="Physiotherapist supporting a person during a home visit" width="1792" height="1024" loading="lazy" />
          <div className={styles.featuredContent}><span>AHPRA-registered clinical leadership</span><h3>Physiotherapy at home</h3><p>Build movement, strength and confidence where everyday life happens.</p><span className={styles.featuredAction}>View physiotherapy <ArrowRight size={19} /></span></div>
        </Link>
      </Pop>
      <div className={styles.serviceGrid}>{services.slice(1,5).map((service, index) => { const Icon = service.icon; return <Pop key={service.slug} delay={index * .06}><Link className={styles.serviceCard} href={`/services/${service.slug}`}>
        <div className={styles.serviceMedia} role="img" aria-label={`Image placeholder: ${service.imageKeywords[0]}`}><span>IMAGE PLACEHOLDER</span><strong>{service.imageKeywords[0]}</strong></div>
        <div className={styles.serviceCardBody}><span className={styles.serviceIcon}><Icon size={22} /></span><div><h3>{service.title}</h3><p>{service.summary}</p></div><ArrowRight className={styles.cardArrow} size={19} /></div>
      </Link></Pop>; })}</div>
      <div className={styles.servicesAction}><Link className="button button-dark" href="/services">See all services <ArrowRight size={18} /></Link></div>
    </div></section>

    <section className={`page-section process-section ${styles.processSection}`}><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">How our services work</p><h2 className="section-title">A clear start, with room to adapt.</h2></Reveal><Reveal delay={.1}><p className="section-copy">Every person and referral is different. These steps keep the process understandable without forcing care into a one-size-fits-all pathway.</p></Reveal></div>
      <div className="process-grid">{careSteps.map((step, index) => { const Icon = step.icon; return <Reveal key={step.title} delay={index * .08}><article className="process-step"><div className="process-step-top"><span>0{index + 1}</span><Icon size={30} /></div><h3>{step.title}</h3><p>{step.description}</p></article></Reveal>; })}</div>
    </div></section>

    <GoogleReviewsScroll />

    <section className={`page-section location-section ${styles.locationSection}`}><div className="site-shell location-layout">
      <Reveal><div><p className="eyebrow">Where we work</p><h2 className="section-title">Based in Mount Waverley. Supporting Melbourne.</h2><p className="section-copy">Our administration base is in Mount Waverley, with mobile allied health and support delivered in homes and community settings across Melbourne. Availability depends on service type, clinician capacity and travel area.</p><address className="location-address"><MapPin size={25} /><span><strong>{company.name}</strong><br />{company.address}<br /><small>Please contact us before attending this address.</small></span></address><div className="location-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Mount+Waverley+VIC+3149" target="_blank" rel="noreferrer">View Mount Waverley <ArrowRight size={18} /></a><a className="button button-white" href={company.phoneHref}><Phone size={18} /> {company.phone}</a></div></div></Reveal>
      <Reveal delay={.1}><div className="map-frame"><iframe title="Mount Waverley service location" src="https://www.google.com/maps?q=Mount%20Waverley%20VIC%203149&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></Reveal>
    </div></section>

    <FaqSection />

    <section id="home-enquiry" className={`page-section home-enquiry-section ${styles.enquirySection}`}><div className="site-shell home-enquiry-layout">
      <Reveal><div className="home-enquiry-copy"><p className="eyebrow">Online enquiry</p><h2 className="section-title">Tell us what support you are looking for.</h2><p className="section-copy">A short introduction is enough. Our team will contact you to discuss service fit, availability and the next practical step.</p><div className="home-contact-list"><a href={company.phoneHref}><Phone size={21} /> {company.phone}</a><a href={`mailto:${company.email}`}><EnvelopeSimple size={21} /> {company.email}</a><p>We aim to respond within two business days. For urgent medical help, call 000.</p></div></div></Reveal>
      <Reveal delay={.1}><EnquiryForm /></Reveal>
    </div></section>
  </main>;
}
