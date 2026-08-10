import { localizedMetadata } from "../_i18n/metadata";
import { OurTeamPageView } from "./OurTeamPageView";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/our-team",
  title: "Our Team",
  description: "Meet the qualified practitioners supporting Better Care Health Group participants across Melbourne, including physiotherapy and social work.",
});

export default function OurTeamPage() { return <OurTeamPageView locale="en" />; }
