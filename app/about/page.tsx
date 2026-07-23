import { localizedMetadata } from "../_i18n/metadata";
import { AboutPageView } from "./AboutPageView";

export const metadata = localizedMetadata({ locale: "en", path: "/about", title: "About Us", description: "Meet Better Care Health Group, a mobile allied health and support provider serving Melbourne." });

export default function AboutPage() { return <AboutPageView locale="en" />; }
