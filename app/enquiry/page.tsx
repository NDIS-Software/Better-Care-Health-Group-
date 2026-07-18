import type { Metadata } from "next";
import { Clock, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "../_components/PageHero";
import { EnquiryForm } from "../_components/EnquiryForm";
import { company } from "../_content/site";

export const metadata: Metadata = { title: "Online Enquiry", description: "Enquire about Better Care Health Group allied health, NDIS and Support at Home services in Melbourne." };

export default function EnquiryPage() { return <main id="main-content"><PageHero title="Tell us how we can help.">Share a few initial details and our team will contact you to discuss service fit, availability and the next step.</PageHero><section className="page-section"><div className="site-shell form-layout"><aside><p className="eyebrow">Contact details</p><h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-.05em", lineHeight: 1 }}>Prefer to call or email?</h2><div className="prose"><p><Phone size={22} style={{ display: "inline", marginRight: 10, verticalAlign: "middle" }} /><a href={company.phoneHref}>{company.phone}</a></p><p><Envelope size={22} style={{ display: "inline", marginRight: 10, verticalAlign: "middle" }} /><a href={`mailto:${company.email}`}>{company.email}</a></p><p><Clock size={22} style={{ display: "inline", marginRight: 10, verticalAlign: "middle" }} />We aim to respond within two business days.</p><p>If someone is in immediate danger or needs urgent medical help, call 000.</p></div></aside><EnquiryForm /></div></section></main>; }
