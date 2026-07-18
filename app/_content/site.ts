import { ArrowsClockwise, ChatCircleDots, ClipboardText, HandHeart, HouseLine, PersonSimpleWalk, Pulse, PuzzlePiece, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const services = [
  { slug: "physiotherapy", title: "Physiotherapy", summary: "Practical support for movement, mobility, strength and confidence at home and in the community.", icon: PersonSimpleWalk },
  { slug: "occupational-therapy", title: "Occupational Therapy", summary: "Support with daily activities, home routines, independence and participation.", icon: PuzzlePiece },
  { slug: "allied-health-assistance", title: "Allied Health Assistance", summary: "Therapy support delivered under the guidance of your treating allied health professional.", icon: Pulse },
  { slug: "myotherapy", title: "Myotherapy", summary: "Individual care focused on muscle and soft tissue comfort, movement and function.", icon: HandHeart },
  { slug: "key-workers", title: "Key Workers", summary: "A coordinated point of support for children, families and their wider care team.", icon: UsersThree },
  { slug: "support-workers", title: "Support Workers", summary: "Reliable assistance with daily living, community access and the routines that matter to you.", icon: HouseLine },
];

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
