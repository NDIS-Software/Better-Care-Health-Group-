import { ArrowsClockwise, ChatCircleDots, ClipboardText } from "@phosphor-icons/react/dist/ssr";

export { services } from "../services/_content/catalogue";

export const careSteps = [
  {
    title: "Start with a conversation",
    description: "We listen to what matters to you, the routines around daily life, the support being considered and who you would like involved in the conversation.",
    icon: ChatCircleDots,
  },
  {
    title: "Shape the right support",
    description: "Together we clarify service fit, goals, funding, timing and the practical details needed to make support safe, understandable and useful.",
    icon: ClipboardText,
  },
  {
    title: "Review and adapt",
    description: "Once support begins, we keep communication open and review progress, priorities and practical arrangements as circumstances change.",
    icon: ArrowsClockwise,
  },
];

export const faqs = [
  {
    question: "Where are services available?",
    answer: "Better Care Health Group is based in Mount Waverley and provides mobile, home and community-based services across Melbourne. Availability depends on your suburb, the service required and practitioner capacity, so please contact us to confirm your location.",
  },
  {
    question: "Which funding pathways do you work with?",
    answer: "We welcome enquiries from NDIS participants, Support at Home clients, private clients and people using other eligible funding arrangements. We confirm service suitability, funding requirements, fees and travel arrangements before support begins.",
  },
  {
    question: "Do I need a referral?",
    answer: "Many allied health enquiries can begin without a GP referral, but referral and approval requirements can vary between funding pathways and services. Send us a brief enquiry and we can explain what may be needed for your situation.",
  },
  {
    question: "What happens after I submit an enquiry?",
    answer: "Our team reviews the information you provide and contacts you to discuss your goals, location, preferred service, funding and availability. If the service appears suitable, we explain the next intake or assessment step before anything is booked.",
  },
  {
    question: "Can a family member, support coordinator or referrer contact you?",
    answer: "Yes. Family members, nominees, support coordinators, care partners and health professionals can make an enquiry. We confirm the person’s authority and involve the participant or client in decisions and information sharing wherever required.",
  },
  {
    question: "How quickly will you respond?",
    answer: "We aim to respond to online enquiries within two business days. Appointment timing depends on location, practitioner availability, service fit and any required funding or referral information.",
  },
];

export const company = {
  name: "Better Care Health Group",
  legalName: "Better Care Health Group Pty Ltd",
  phone: "0452 638 779",
  phoneHref: "tel:+61452638779",
  email: "info@bettercarehg.com",
  address: "73 Larch Crescent, Mount Waverley VIC 3149",
  abn: "20 697 989 594",
};
