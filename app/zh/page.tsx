import { localizedMetadata } from "../_i18n/metadata";
import { HomePageView } from "../home/HomePageView";

export const metadata = localizedMetadata({
  locale: "zh",
  path: "/",
  title: "墨尔本上门联合健康与 NDIS 支持",
  description: "Better Care Health Group 在墨尔本提供物理治疗、职业治疗、NDIS 与 Support at Home 服务。",
});

export default function ChineseHome() {
  return <HomePageView locale="zh" />;
}
