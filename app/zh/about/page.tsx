import { AboutPageView } from "../../about/AboutPageView";
import { localizedMetadata } from "../../_i18n/metadata";

export const metadata = localizedMetadata({ locale: "zh", path: "/about", title: "关于我们", description: "了解 Better Care Health Group——服务墨尔本的上门联合健康与支持服务机构。" });

export default function ChineseAboutPage() { return <AboutPageView locale="zh" />; }
