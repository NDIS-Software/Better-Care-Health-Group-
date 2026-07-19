import type { Metadata } from "next";
import { PageHero } from "../_components/page-hero/PageHero";
import { company } from "../_content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Better Care Health Group collects, uses, stores and protects personal information.",
};

const sections = [
  {
    title: "1. About this policy",
    paragraphs: [
      `This Privacy Policy explains how ${company.name} manages personal information collected through this website and in connection with enquiries about our services. ${company.legalName} is the legal entity responsible for this website.`,
      "We aim to manage personal information openly and in accordance with applicable Australian privacy requirements, including the Privacy Act 1988 (Cth) and the Australian Privacy Principles where they apply.",
    ],
  },
  {
    title: "2. Information we may collect",
    paragraphs: [
      "Depending on how you interact with us, we may collect your name, contact details, suburb, preferred communication method, relationship to the person seeking support, requested services and funding pathway.",
      "If an enquiry progresses, we may also collect information about goals, daily routines, disability, health, mobility, support needs, risks, service history, NDIS or aged care arrangements, authorised representatives and other people involved in care. Health and disability information is sensitive information and is handled with additional care.",
      "Our website may also receive limited technical information such as browser type, device information, pages visited and cookie data used for security, performance and basic website functionality.",
    ],
  },
  {
    title: "3. How we collect information",
    paragraphs: [
      "We generally collect information directly from you through the enquiry form, phone, email or later intake conversations.",
      "With appropriate consent or authority, information may also be provided by a family member, carer, nominee, support coordinator, health professional, aged care provider, plan manager or another referrer. We may confirm authority before discussing personal information.",
    ],
  },
  {
    title: "4. Why we collect and use information",
    paragraphs: [
      "We use personal information to respond to enquiries, assess service fit and availability, arrange appointments, plan and deliver services, communicate with authorised people, manage funding and administration, maintain service records, improve quality and safety, and meet legal or regulatory obligations.",
      "We do not sell personal information. We do not use detailed health or disability information for unrelated direct marketing.",
    ],
  },
  {
    title: "5. When information may be shared",
    paragraphs: [
      "Information may be shared with practitioners, support workers and authorised team members who need it to respond to an enquiry or deliver services. With consent or where otherwise permitted, we may also communicate with family members, nominees, referrers, treating professionals, NDIS or aged care organisations, plan managers and relevant funding bodies.",
      "We may use service providers for website hosting, email, secure record systems, technology support and professional advice. We may also disclose information where required or authorised by law, or where necessary to address a serious threat to health or safety.",
    ],
  },
  {
    title: "6. Website enquiries and cookies",
    paragraphs: [
      "Please keep the public enquiry form brief and do not include detailed medical histories, diagnostic reports or clinical documents. If further information is required, our team will explain a more appropriate way to provide it.",
      "Cookies and similar technologies may be used for essential website operation, security and performance. If analytics, Google Business or other optional services are introduced, this policy and any consent controls should be updated to reflect their use.",
    ],
  },
  {
    title: "7. Storage, security and overseas processing",
    paragraphs: [
      "We take reasonable steps to protect personal information from misuse, interference, loss and unauthorised access, modification or disclosure. Safeguards may include access controls, secure systems, staff procedures and careful selection of technology providers.",
      "Some website, email or technology providers may store or process information outside Australia. Provider locations can change, so you may contact us for current information about the systems relevant to your enquiry. We review provider arrangements and take reasonable steps appropriate to the information and service involved.",
    ],
  },
  {
    title: "8. Access and correction",
    paragraphs: [
      "You may ask to access personal information we hold about you or request that inaccurate, out-of-date, incomplete, irrelevant or misleading information be corrected. We may need to verify your identity or authority before responding. In some circumstances an exception may apply, and if we refuse a request we will explain the reason and available complaint options where required.",
      `Requests can be made by emailing ${company.email}, calling ${company.phone}, or writing to ${company.address}.`,
    ],
  },
  {
    title: "9. Privacy questions and complaints",
    paragraphs: [
      `If you have a privacy question or complaint, contact us at ${company.email}, ${company.phone}, or ${company.address}. Please describe your concern and how you would like us to respond. We will review it, may ask for further information, and aim to respond within a reasonable period, generally within 30 days.`,
      "If you are not satisfied after giving us an opportunity to respond, you may contact the Office of the Australian Information Commissioner at oaic.gov.au.",
    ],
  },
  {
    title: "10. Changes to this policy",
    paragraphs: [
      "We may update this policy when our services, systems, providers or legal obligations change. The current version will be published on this page with its last updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return <main id="main-content">
    <PageHero title="Privacy Policy" imageKeywords={["secure health information privacy Australia", "accessible consent conversation allied health"]}>How Better Care Health Group handles personal information provided through this website, service enquiries and early intake.</PageHero>
    <section className="page-section"><div className="site-shell privacy-layout">
      <aside className="privacy-summary"><p className="eyebrow">Last updated</p><p>17 July 2026</p><p>This website policy should be read alongside any service-specific privacy notices, consent forms and record-handling procedures provided during intake.</p><a className="button button-white" href={`mailto:${company.email}`}>Ask a privacy question</a></aside>
      <div className="privacy-sections">{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
    </div></section>
  </main>;
}
