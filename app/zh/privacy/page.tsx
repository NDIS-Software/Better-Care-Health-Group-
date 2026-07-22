import { localizedMetadata } from "../../_i18n/metadata";
import { PrivacyPageView } from "../../privacy/PrivacyPageView";

export const metadata = localizedMetadata({ locale: "zh", path: "/privacy", title: "隐私政策", description: "Better Care Health Group 如何收集、使用、储存和保护个人信息。" });

export default function ChinesePrivacyPage() { return <PrivacyPageView locale="zh" />; }
