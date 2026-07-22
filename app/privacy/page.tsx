import { localizedMetadata } from "../_i18n/metadata";
import { PrivacyPageView } from "./PrivacyPageView";

export const metadata = localizedMetadata({ locale: "en", path: "/privacy", title: "Privacy Policy", description: "How Better Care Health Group collects, uses, stores and protects personal information." });

export default function PrivacyPage() { return <PrivacyPageView locale="en" />; }
