import { localizedMetadata } from "../../_i18n/metadata";
import { OurTeamPageView } from "../../our-team/OurTeamPageView";

export const metadata = localizedMetadata({
  locale: "zh",
  path: "/our-team",
  title: "专业团队",
  description: "认识 Better Care Health Group 在墨尔本提供物理治疗和社会工作支持的专业团队。",
});

export default function ChineseOurTeamPage() { return <OurTeamPageView locale="zh" />; }
