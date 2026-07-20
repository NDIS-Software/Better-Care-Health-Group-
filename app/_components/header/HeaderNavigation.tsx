"use client";

import { CaretDown } from "@phosphor-icons/react/dist/csr/CaretDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const primaryLinks = [
  ["Services", "/services"],
  ["About", "/about"],
  ["For Referrers", "/referrers"],
];

const serviceNavigation = [
  {
    label: "Therapy",
    links: [
      ["Physiotherapy", "/services/physiotherapy"],
      ["Occupational Therapy", "/services/occupational-therapy"],
      ["Allied Health Assistance", "/services/allied-health-assistance"],
      ["Myotherapy", "/services/myotherapy"],
    ],
  },
  {
    label: "Early childhood",
    links: [["Early Childhood Supports", "/services/early-childhood-supports"]],
  },
  {
    label: "Daily living",
    links: [
      ["Personal Care", "/services/personal-care"],
      ["Travel & Transport", "/services/travel-transport"],
      ["Daily Tasks & Shared Living", "/services/daily-tasks-shared-living"],
      ["Supported Independent Living", "/services/supported-independent-living"],
      ["Development of Daily Living & Life Skills", "/services/development-life-skills"],
      ["Household Tasks", "/services/household-tasks"],
    ],
  },
  {
    label: "Community",
    links: [
      ["Innovative Community Participation", "/services/innovative-community-participation"],
      ["Community Participation", "/services/community-participation"],
      ["Group & Centre Activities", "/services/group-centre-activities"],
      ["Support Workers", "/services/support-workers"],
    ],
  },
];

export function HeaderNavigation() {
  const pathname = usePathname();
  const servicesMenu = useRef<HTMLDetailsElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  const closeMenus = () => {
    servicesMenu.current?.removeAttribute("open");
    mobileMenu.current?.removeAttribute("open");
  };

  useEffect(() => {
    servicesMenu.current?.removeAttribute("open");
    mobileMenu.current?.removeAttribute("open");
  }, [pathname]);

  return <>
    <nav className="desktop-nav" aria-label="Primary navigation">
      <details className="nav-services-menu" ref={servicesMenu}>
        <summary>Services <CaretDown size={14} weight="bold" /></summary>
        <div className="nav-services-panel">
          <div className="nav-services-heading">
            <span>Our services</span>
            <strong>Care organised around everyday needs.</strong>
            <Link href="/services" onClick={closeMenus}>View all services</Link>
          </div>
          {serviceNavigation.map((group) => <div className="nav-services-group" key={group.label}>
            <span>{group.label}</span>
            {group.links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenus}>{label}</Link>)}
          </div>)}
        </div>
      </details>
      {primaryLinks.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      <Link className="nav-cta" href="/enquiry">Online enquiry</Link>
    </nav>
    <details className="mobile-menu" ref={mobileMenu}>
      <summary>Menu</summary>
      <nav aria-label="Mobile navigation">
        {primaryLinks.map(([label, href]) => <Link key={href} href={href} onClick={closeMenus}>{label}</Link>)}
        {serviceNavigation.map((group) => <div className="mobile-service-group" key={group.label}>
          <span>{group.label}</span>
          {group.links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenus}>{label}</Link>)}
        </div>)}
        <Link href="/enquiry" onClick={closeMenus}>Online enquiry</Link>
      </nav>
    </details>
  </>;
}
