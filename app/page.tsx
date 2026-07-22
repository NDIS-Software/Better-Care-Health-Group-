import { localizedMetadata } from "./_i18n/metadata";
import { HomePageView } from "./home/HomePageView";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/",
  title: "Allied Health at Home in Melbourne",
  description: "Physiotherapy, occupational therapy, NDIS and Support at Home services delivered across Melbourne.",
});

export default function Home() {
  return <HomePageView locale="en" />;
}
