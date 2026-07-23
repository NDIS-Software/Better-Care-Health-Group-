import { localizedMetadata } from "../_i18n/metadata";
import { ReferrersPageView } from "./ReferrersPageView";

export const metadata = localizedMetadata({ locale: "en", path: "/referrers", title: "For Referrers", description: "Refer to mobile allied health, NDIS and Support at Home services across Melbourne." });

export default function ReferrersPage() { return <ReferrersPageView locale="en" />; }
