import { localizedMetadata } from "../../_i18n/metadata";
import { ReferrersPageView } from "../../referrers/ReferrersPageView";

export const metadata = localizedMetadata({ locale: "zh", path: "/referrers", title: "转介服务", description: "转介墨尔本上门联合健康、NDIS 与 Support at Home 服务。" });

export default function ChineseReferrersPage() { return <ReferrersPageView locale="zh" />; }
