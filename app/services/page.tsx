import { localizedMetadata } from "../_i18n/metadata";
import { ServicesPageView } from "./ServicesPageView";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/services",
  title: "Our Allied Health and NDIS Services",
  description: "Explore therapist-led allied health, early childhood, daily living and community supports across Melbourne.",
});

export default function ServicesPage() {
  return <ServicesPageView locale="en" />;
}
