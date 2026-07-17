import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Heart, HouseLine, PlayCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FilmPreview } from "./_components/FilmPreview";
import { AmbientMedia, Pop, Reveal } from "./_components/Motion";
import { services } from "./_content/site";

export const metadata: Metadata = { title: "Allied Health at Home in Melbourne", description: "Physiotherapy, occupational therapy, NDIS and Support at Home services delivered across Greater Melbourne." };

export default function Home() {
  const structuredData = { "@context": "https://schema.org", "@type": "MedicalBusiness", name: "Better Care Health Group", telephone: "+61 452 638 779", email: "info@bettercarehg.com", address: { "@type": "PostalAddress", streetAddress: "73 Larch Crescent", addressLocality: "Mount Waverley", addressRegion: "VIC", postalCode: "3149", addressCountry: "AU" }, areaServed: "Greater Melbourne", url: process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com" };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="hero">
      <AmbientMedia><img src="/media/home-physio-hero.png" alt="Physiotherapist supporting an older woman with a resistance-band exercise at home" width="1792" height="1024" fetchPriority="high" /></AmbientMedia>
      <div className="hero-content"><Reveal className="hero-copy">
        <h1>Care that moves <span>with you.</span></h1>
        <p className="hero-lead">Allied health and practical support delivered at home and in the community across Greater Melbourne.</p>
        <div className="hero-actions"><Link className="button button-white" href="/enquiry">Make an enquiry <ArrowRight size={18} /></Link><Link className="button button-ghost" href="/services">Explore services</Link></div>
        <p className="hero-note">NDIS, Support at Home, private and other eligible funding pathways.</p>
      </Reveal></div>
    </section>
    <section className="trust-rail" aria-label="Provider information"><div className="site-shell trust-grid">
      <div className="trust-item"><ShieldCheck className="trust-icon" size={25} /> Registered NDIS Provider</div>
      <div className="trust-item"><CheckCircle className="trust-icon" size={25} /> AHPRA-registered practitioners where required</div>
      <div className="trust-item"><HouseLine className="trust-icon" size={25} /> Home and community visits across Greater Melbourne</div>
    </div></section>

    <section className="page-section"><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">Our services</p><h2 className="section-title">Support shaped around everyday life.</h2></Reveal><Reveal delay={.1}><p className="section-copy">We work with participants, older people, families and referrers to make care practical, coordinated and easier to access.</p></Reveal></div>
      <div className="service-layout">
        <Pop className="service-feature"><img src="/media/home-physio-hero.png" alt="Home physiotherapy visit" width="1792" height="1024" loading="lazy" /><div><Heart size={38} weight="fill" /></div><div><h3>Physiotherapy at home</h3><p>Build movement, strength and confidence in the place where daily life happens.</p><Link className="button button-white" href="/services/physiotherapy">View physiotherapy <ArrowRight size={18} /></Link></div></Pop>
        <div className="service-stack">{services.slice(1,5).map((service, index) => { const Icon = service.icon; return <Pop key={service.slug} delay={index * .06}><Link className="service-card" href={`/services/${service.slug}`}><span className="icon-chip"><Icon size={23} /></span><div><h3>{service.title}</h3><p>{service.summary}</p><ArrowRight size={19} /></div></Link></Pop>; })}</div>
      </div>
      <div style={{ marginTop: 24 }}><Link className="button button-dark" href="/services">See all services <ArrowRight size={18} /></Link></div>
    </div></section>

    <section className="film-section page-section"><div className="site-shell film-layout">
      <Reveal><p className="eyebrow">Our approach on film</p><h2 className="section-title">Small moments. Real progress.</h2><p className="section-copy">Our short film follows care from the front door to the everyday moments that matter. Until filming is complete, you can view the production storyboard.</p><div className="button button-white" style={{ width: "fit-content" }}><PlayCircle size={20} /> Warm, accessible and captioned</div></Reveal>
      <Pop delay={.12}><FilmPreview /></Pop>
    </div></section>

    <section className="page-section"><div className="site-shell">
      <div className="services-head"><Reveal><p className="eyebrow">Ways to access care</p><h2 className="section-title">Clear pathways. One caring team.</h2></Reveal><Reveal delay={.1}><p className="section-copy">We help you understand the next practical step without adding more complexity.</p></Reveal></div>
      <div className="pathways"><Pop><article className="pathway"><div><h3>NDIS support</h3><p>Participant-led allied health and support that works with your goals, plan and wider care team.</p></div><Link className="button button-white" href="/ndis">Explore NDIS support <ArrowRight size={18} /></Link></article></Pop><Pop delay={.1}><article className="pathway"><div><h3>Support at Home</h3><p>Practical allied health support designed to help older people stay active, safe and connected at home.</p></div><Link className="button button-white" href="/support-at-home">Explore Support at Home <ArrowRight size={18} /></Link></article></Pop></div>
    </div></section>

    <section className="page-section" style={{ paddingTop: 0 }}><div className="site-shell"><Reveal><div className="cta-panel"><div><h2>Let&apos;s make the next step feel simple.</h2><p>Tell us what support you are looking for. Our team will respond and help you work out what happens next.</p></div><Link className="button button-white" href="/enquiry">Start an online enquiry <ArrowRight size={18} /></Link></div></Reveal></div></section>
  </main>;
}
