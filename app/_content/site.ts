import { HandHeart, HouseLine, PersonSimpleWalk, Pulse, PuzzlePiece, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const services = [
  { slug: "physiotherapy", title: "Physiotherapy", summary: "Practical support for movement, mobility, strength and confidence at home and in the community.", icon: PersonSimpleWalk },
  { slug: "occupational-therapy", title: "Occupational Therapy", summary: "Support with daily activities, home routines, independence and participation.", icon: PuzzlePiece },
  { slug: "allied-health-assistance", title: "Allied Health Assistance", summary: "Therapy support delivered under the guidance of your treating allied health professional.", icon: Pulse },
  { slug: "myotherapy", title: "Myotherapy", summary: "Individual care focused on muscle and soft tissue comfort, movement and function.", icon: HandHeart },
  { slug: "key-workers", title: "Key Workers", summary: "A coordinated point of support for children, families and their wider care team.", icon: UsersThree },
  { slug: "support-workers", title: "Support Workers", summary: "Reliable assistance with daily living, community access and the routines that matter to you.", icon: HouseLine },
];

export const company = {
  name: "Better Care Health Group Pty Ltd",
  phone: "0452 638 779",
  phoneHref: "tel:+61452638779",
  email: "info@bettercarehg.com",
  address: "73 Larch Crescent, Mount Waverley VIC 3149",
  abn: "20 697 989 594",
};
