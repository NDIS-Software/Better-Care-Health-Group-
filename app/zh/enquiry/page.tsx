import { localizedMetadata } from "../../_i18n/metadata";
import { EnquiryPageView } from "../../enquiry/EnquiryPageView";

export const metadata = localizedMetadata({ locale: "zh", path: "/enquiry", title: "在线咨询", description: "咨询 Better Care Health Group 在墨尔本提供的联合健康、NDIS 与 Support at Home 服务。" });

export default function ChineseEnquiryPage() { return <EnquiryPageView locale="zh" />; }
