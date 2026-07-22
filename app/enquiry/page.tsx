import { localizedMetadata } from "../_i18n/metadata";
import { EnquiryPageView } from "./EnquiryPageView";

export const metadata = localizedMetadata({ locale: "en", path: "/enquiry", title: "Online Enquiry", description: "Enquire about Better Care Health Group allied health, NDIS and Support at Home services in Melbourne." });

export default function EnquiryPage() { return <EnquiryPageView locale="en" />; }
