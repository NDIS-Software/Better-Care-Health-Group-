import type { Metadata } from "next";
import { ArrowRight, CheckCircle, EnvelopeSimple, Heart, HouseLine, MapPin, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { EnquiryForm } from "./_components/EnquiryForm";
import { DirectorProfile } from "./_components/director/DirectorProfile";
import { FaqSection } from "./_components/faq/FaqSection";
import { HeroVideo } from "./_components/HeroVideo";
import { Pop, Reveal } from "./_components/Motion";
import { ReviewsPlaceholder } from "./_components/reviews/ReviewsPlaceholder";
import { careSteps, company, faqs, services } from "./_content/site";

export const metadata: Metadata = { title: "Allied Health at Home in Melbourne", description: "Physiotherapy, occupational therapy, NDIS and Support at Home services delivered across Melbourne." };

export default function Home() {
  const structuredData = { "@context": "https://schema.org", "@type": "MedicalBusiness", name: "Better Care Health Group", telephone: "+61 452 638 779", email: "info@bettercarehg.com", address: { "@type": "PostalAddress", streetAddress: "73 Larch Crescent", addressLocality: "Mount Waverley", addressRegion: "VIC", postalCode: "3149", addressCountry: "AU" }, areaServed: "Melbourne", url: process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com" };
  const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    <section className="hero">
      <HeroVideo />
      <div className="hero-content"><Reveal className="hero-copy">
        <h1>Care that moves <span>with you.</span></h1>
        <p className="hero-lead">Allied health and practical support delivered at home and in the community across Melbourne.</p>
        <div className="hero-actions"><Link className="button button-white" href="#home-enquiry">Make an enquiry <ArrowRight size={18} /></Link><Link className="button button-ghost" href="/services">Explore services</Link></div>
        <p className="hero-note">NDIS, Support at Home, private and other eligible funding pathways.</p>
      </Reveal></div>
    </section>
    <section className="trust-rail" aria-label="Provider information"><div className="site-shell trust-grid">
      <div className="trust-item"><ShieldCheck className="trust-icon" size={25} /> Registered NDIS Provider</div>
      <div className="trust-item"><CheckCircle className="trust-icon" size={25} /> AHPRA-registered practitioners where required</div>
      <div className="trust-item"><HouseLine className="trust-icon" size={25} /> Home and community visits across Melbourne</div>
    </div></section>

    <section className="page-section company-section"><div className="site-shell company-intro">
      <Reveal><p className="eyebrow">Better Care Health Group</p><h2 className="section-title">Allied health that fits into real life.</h2></Reveal>
      <Reveal delay={.1}><div className="company-copy"><p>Better Care Health Group is a Melbourne-based allied health and support provider working with participants, older people, families and referrers across Melbourne.</p><p>We bring care into homes and community settings so recommendations can connect with real routines, environments and goals. Our team values clear communication, informed choice and practical support that can adapt as needs change.</p><div className="company-promises"><span>Mobile and community-based care</span><span>Participant and client-led planning</span><span>Communication with families and referrers, with consent</span></div></div></Reveal>
    </div></section>

    <DirectorProfile />

    <section className="page-section"><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">Our services</p><h2 className="section-title">Support shaped around everyday life.</h2></Reveal><Reveal delay={.1}><p className="section-copy">We work with participants, older people, families and referrers to make care practical, coordinated and easier to access.</p></Reveal></div>
      <div className="service-layout">
        <Pop className="service-feature"><img src="/media/home-physio-hero.png" alt="Home physiotherapy visit" width="1792" height="1024" loading="lazy" /><div><Heart size={38} weight="fill" /></div><div><h3>Physiotherapy at home</h3><p>Build movement, strength and confidence in the place where daily life happens.</p><Link className="button button-white" href="/services/physiotherapy">View physiotherapy <ArrowRight size={18} /></Link></div></Pop>
        <div className="service-stack">{services.slice(1,5).map((service, index) => { const Icon = service.icon; return <Pop key={service.slug} delay={index * .06}><Link className="service-card" href={`/services/${service.slug}`}><span className="icon-chip"><Icon size={23} /></span><div><h3>{service.title}</h3><p>{service.summary}</p><ArrowRight size={19} /></div></Link></Pop>; })}</div>
      </div>
      <div style={{ marginTop: 24 }}><Link className="button button-dark" href="/services">See all services <ArrowRight size={18} /></Link></div>
    </div></section>

    <section className="page-section process-section"><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">How our services work</p><h2 className="section-title">A clear start, with room to adapt.</h2></Reveal><Reveal delay={.1}><p className="section-copy">Every person and referral is different. These steps keep the process understandable without forcing care into a one-size-fits-all pathway.</p></Reveal></div>
      <div className="process-grid">{careSteps.map((step, index) => { const Icon = step.icon; return <Reveal key={step.title} delay={index * .08}><article className="process-step"><div className="process-step-top"><span>0{index + 1}</span><Icon size={30} /></div><h3>{step.title}</h3><p>{step.description}</p></article></Reveal>; })}</div>
    </div></section>

    <section className="page-section"><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">Ways to access care</p><h2 className="section-title">Clear pathways. One caring team.</h2></Reveal><Reveal delay={.1}><p className="section-copy">We help you understand the next practical step without adding more complexity.</p></Reveal></div>
      <div className="pathways"><Pop><article className="pathway"><div><h3>NDIS support</h3><p>Participant-led allied health and support that works with your goals, plan and wider care team.</p></div><Link className="button button-white" href="/ndis">Explore NDIS support <ArrowRight size={18} /></Link></article></Pop><Pop delay={.1}><article className="pathway"><div><h3>Support at Home</h3><p>Practical allied health support designed to help older people stay active, safe and connected at home.</p></div><Link className="button button-white" href="/support-at-home">Explore Support at Home <ArrowRight size={18} /></Link></article></Pop></div>
    </div></section>

    <ReviewsPlaceholder />

    <section className="page-section location-section"><div className="site-shell location-layout">
      <Reveal><div><p className="eyebrow">Where we work</p><h2 className="section-title">Based in Mount Waverley. Supporting Melbourne.</h2><p className="section-copy">Our administration base is in Mount Waverley, with mobile allied health and support delivered in homes and community settings across Melbourne. Availability depends on service type, clinician capacity and travel area.</p><address className="location-address"><MapPin size={25} /><span><strong>{company.name}</strong><br />{company.address}<br /><small>Please contact us before attending this address.</small></span></address><div className="location-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Mount+Waverley+VIC+3149" target="_blank" rel="noreferrer">View Mount Waverley <ArrowRight size={18} /></a><a className="button button-white" href={company.phoneHref}><Phone size={18} /> {company.phone}</a></div></div></Reveal>
      <Reveal delay={.1}><div className="map-frame"><iframe title="Mount Waverley service location" src="https://www.google.com/maps?q=Mount%20Waverley%20VIC%203149&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></Reveal>
    </div></section>

    <FaqSection />

    <section id="home-enquiry" className="page-section home-enquiry-section"><div className="site-shell home-enquiry-layout">
      <Reveal><div className="home-enquiry-copy"><p className="eyebrow">Online enquiry</p><h2 className="section-title">Tell us what support you are looking for.</h2><p className="section-copy">A short introduction is enough. Our team will contact you to discuss service fit, availability and the next practical step.</p><div className="home-contact-list"><a href={company.phoneHref}><Phone size={21} /> {company.phone}</a><a href={`mailto:${company.email}`}><EnvelopeSimple size={21} /> {company.email}</a><p>We aim to respond within two business days. For urgent medical help, call 000.</p></div></div></Reveal>
      <Reveal delay={.1}><EnquiryForm /></Reveal>
    </div></section>
  </main>;
}
