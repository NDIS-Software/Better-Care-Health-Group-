import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { PageCta } from "../_components/PageCta";
import { PageHero } from "../_components/PageHero";
import { Pop } from "../_components/Motion";
import { services } from "../_content/site";

export const metadata: Metadata = { title: "Allied Health Services", description: "Explore mobile physiotherapy, occupational therapy, allied health assistance, myotherapy, key worker and support worker services in Melbourne." };

export default function ServicesPage() {
  return <main id="main-content"><PageHero title="Allied health that fits real life.">Our mobile team delivers practical support at home and in the community across Greater Melbourne.</PageHero><section className="page-section"><div className="site-shell services-list">{services.map((service, index) => { const Icon = service.icon; return <Pop key={service.slug} delay={(index % 2) * .06}><Link className="service-list-card" href={`/services/${service.slug}`}><div><span className="icon-chip"><Icon size={24} /></span><h2>{service.title}</h2><p>{service.summary}</p></div><ArrowRight size={20} /></Link></Pop>; })}</div></section><PageCta /></main>;
}
