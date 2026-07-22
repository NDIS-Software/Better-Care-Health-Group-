import type { Metadata } from "next";
import { localizedMetadata } from "../../_i18n/metadata";
import { services } from "../_content/catalogue";
import { ServiceDetailPageView } from "./ServiceDetailPageView";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? localizedMetadata({
    locale: "en",
    path: `/services/${slug}`,
    title: service.title,
    description: `${service.summary} Mobile and community-based support across Melbourne.`,
  }) : {};
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  return <ServiceDetailPageView slug={slug} locale="en" />;
}
