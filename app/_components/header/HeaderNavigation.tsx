"use client";

import { CaretDown } from "@phosphor-icons/react/dist/csr/CaretDown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef } from "react";
import { localeFromPath, localizePath } from "../../_i18n/locale";

const navigation = {
  en: {
    services: "Services",
    about: "About",
    referrers: "For Referrers",
    enquiry: "Online enquiry",
    menu: "Menu",
    navigationLabel: "Primary navigation",
    ourServices: "Our services",
    servicesIntro: "Care organised around everyday needs.",
    viewAll: "View all services",
    language: "中文",
    switchLabel: "切换至中文",
    groups: [
      {
        label: "Therapy",
        links: [
          ["Physiotherapy", "/services/physiotherapy"],
          ["Occupational Therapy", "/services/occupational-therapy"],
          ["Allied Health Assistance", "/services/allied-health-assistance"],
          ["Myotherapy", "/services/myotherapy"],
        ],
      },
      { label: "Early childhood", links: [["Early Childhood Supports", "/services/early-childhood-supports"]] },
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
    ],
  },
  zh: {
    services: "服务项目",
    about: "关于我们",
    referrers: "转介服务",
    enquiry: "在线咨询",
    menu: "菜单",
    navigationLabel: "主导航",
    ourServices: "我们的服务",
    servicesIntro: "围绕每个人的日常需要安排支持。",
    viewAll: "查看全部服务",
    language: "EN",
    switchLabel: "Switch to English",
    groups: [
      {
        label: "治疗服务",
        links: [
          ["物理治疗", "/services/physiotherapy"],
          ["职业治疗", "/services/occupational-therapy"],
          ["联合健康助理", "/services/allied-health-assistance"],
          ["肌肉治疗", "/services/myotherapy"],
        ],
      },
      { label: "幼儿支持", links: [["幼儿支持服务", "/services/early-childhood-supports"]] },
      {
        label: "日常生活",
        links: [
          ["个人护理", "/services/personal-care"],
          ["出行与交通", "/services/travel-transport"],
          ["日常任务与共享生活", "/services/daily-tasks-shared-living"],
          ["支持式独立生活", "/services/supported-independent-living"],
          ["日常生活与生活技能培养", "/services/development-life-skills"],
          ["家务支持", "/services/household-tasks"],
        ],
      },
      {
        label: "社区参与",
        links: [
          ["创新社区参与", "/services/innovative-community-participation"],
          ["社区参与", "/services/community-participation"],
          ["团体与中心活动", "/services/group-centre-activities"],
          ["支持工作者", "/services/support-workers"],
        ],
      },
    ],
  },
} as const;

export function HeaderNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = localeFromPath(pathname);
  const copy = navigation[locale];
  const targetLocale = locale === "en" ? "zh" : "en";
  const languageHref = localizePath(pathname, targetLocale);
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

  useEffect(() => {
    if (pathname !== "/" || window.localStorage.getItem("better-care-language") !== "zh") return;
    router.replace("/zh");
  }, [pathname, router]);

  const switchLanguage = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenus();
    window.localStorage.setItem("better-care-language", targetLocale);
    const navigate = () => router.push(languageHref);
    const viewTransitionDocument = document as Document & { startViewTransition?: (callback: () => void) => void };
    if (viewTransitionDocument.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      viewTransitionDocument.startViewTransition(navigate);
    } else {
      navigate();
    }
  };

  const path = (href: string) => localizePath(href, locale);

  return <>
    <nav className="desktop-nav" aria-label={copy.navigationLabel}>
      <details className="nav-services-menu" ref={servicesMenu}>
        <summary>{copy.services} <CaretDown size={14} weight="bold" /></summary>
        <div className="nav-services-panel">
          <div className="nav-services-heading">
            <span>{copy.ourServices}</span>
            <strong>{copy.servicesIntro}</strong>
            <Link href={path("/services")} onClick={closeMenus}>{copy.viewAll}</Link>
          </div>
          {copy.groups.map((group) => <div className="nav-services-group" key={group.label}>
            <span>{group.label}</span>
            {group.links.map(([label, href]) => <Link key={href} href={path(href)} onClick={closeMenus}>{label}</Link>)}
          </div>)}
        </div>
      </details>
      <Link href={path("/about")}>{copy.about}</Link>
      <Link href={path("/referrers")}>{copy.referrers}</Link>
      <Link className="language-switch" href={languageHref} hrefLang={targetLocale === "zh" ? "zh-Hans" : "en-AU"} aria-label={copy.switchLabel} onClick={switchLanguage}>{copy.language}</Link>
      <Link className="nav-cta" href={path("/enquiry")}>{copy.enquiry}</Link>
    </nav>
    <details className="mobile-menu" ref={mobileMenu}>
      <summary>{copy.menu}</summary>
      <nav aria-label={copy.navigationLabel}>
        <Link href={path("/services")} onClick={closeMenus}>{copy.services}</Link>
        <Link href={path("/about")} onClick={closeMenus}>{copy.about}</Link>
        <Link href={path("/referrers")} onClick={closeMenus}>{copy.referrers}</Link>
        {copy.groups.map((group) => <div className="mobile-service-group" key={group.label}>
          <span>{group.label}</span>
          {group.links.map(([label, href]) => <Link key={href} href={path(href)} onClick={closeMenus}>{label}</Link>)}
        </div>)}
        <Link href={path("/enquiry")} onClick={closeMenus}>{copy.enquiry}</Link>
        <Link className="mobile-language-switch" href={languageHref} hrefLang={targetLocale === "zh" ? "zh-Hans" : "en-AU"} aria-label={copy.switchLabel} onClick={switchLanguage}>{copy.language}</Link>
      </nav>
    </details>
  </>;
}
