import { localizedMetadata } from "../../_i18n/metadata";
import { ServicesPageView } from "../../services/ServicesPageView";

export const metadata = localizedMetadata({
  locale: "zh",
  path: "/services",
  title: "联合健康与 NDIS 服务",
  description: "了解 Better Care Health Group 在墨尔本提供的治疗师主导联合健康、幼儿、日常生活与社区支持服务。",
});

export default function ChineseServicesPage() {
  return <ServicesPageView locale="zh" />;
}
