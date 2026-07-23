import type { Metadata } from "next";
import { localizedMetadata } from "../../../_i18n/metadata";
import { services } from "../../../services/_content/catalogue";
import { getServices } from "../../../services/_content/translations";
import { ServiceDetailPageView } from "../../../services/[slug]/ServiceDetailPageView";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServices("zh").find((item) => item.slug === slug);
  return service ? localizedMetadata({
    locale: "zh",
    path: `/services/${slug}`,
    title: service.title,
    description: `${service.summary} Better Care Health Group 为墨尔本提供上门及社区服务。`,
  }) : {};
}

export default async function ChineseServicePage({ params }: PageProps) {
  const { slug } = await params;
  return <ServiceDetailPageView slug={slug} locale="zh" />;
}
