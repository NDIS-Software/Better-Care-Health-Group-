import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageCta } from "../../_components/PageCta";
import { PageHero } from "../../_components/PageHero";
import { services } from "../../_content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: `${service.summary} Mobile visits across Melbourne.` } : {};
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <main id="main-content"><PageHero title={service.title}>{service.summary}</PageHero><section className="page-section"><div className="site-shell content-grid"><h2>Support built around your goals and routines.</h2><div className="prose"><p>We start by listening to what matters to you, where daily life feels harder and what progress would look like in practical terms.</p><h3>What support may include</h3><ul><li>An initial conversation and assessment in your usual environment</li><li>Clear recommendations connected to everyday activities</li><li>A practical plan that can adapt as needs and goals change</li><li>Communication with family, coordinators and other professionals when you consent</li></ul><h3>Where we work</h3><p>Appointments may be available at home or in community settings across Melbourne. Availability depends on your location, needs and the right practitioner match.</p><h3>Funding</h3><p>We welcome enquiries from NDIS participants, Support at Home clients, private clients and people using other eligible funding pathways. We will confirm service suitability and fees before support begins.</p></div></div></section><PageCta title={`Ask about ${service.title.toLowerCase()}.`} /></main>;
}
