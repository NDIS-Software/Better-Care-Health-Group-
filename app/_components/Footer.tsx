"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "../_content/site";
import { localeFromPath, localizePath } from "../_i18n/locale";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const zh = locale === "zh";
  const path = (href: string) => localizePath(href, locale);

  return <footer className="site-footer"><div className="site-shell">
    <div className="footer-grid">
      <div><Image className="footer-logo" src="/brand/better-care-logo.png" alt="Better Care Health Group" width={214} height={214} /><p className="footer-copy">{zh ? "为墨尔本提供上门联合健康与支持服务，让照护贴近日常家庭、生活习惯与个人目标。" : "Mobile allied health and support across Melbourne. Care that fits around real homes, routines and goals."}</p></div>
      <div><div className="footer-title">{zh ? "浏览" : "Explore"}</div><div className="footer-links"><Link href={path("/services")}>{zh ? "服务项目" : "Services"}</Link><Link href={path("/about")}>{zh ? "关于我们" : "About us"}</Link><Link href={path("/our-team")}>{zh ? "专业团队" : "Our team"}</Link></div></div>
      <div><div className="footer-title">{zh ? "联系" : "Connect"}</div><div className="footer-links"><Link href={path("/referrers")}>{zh ? "转介服务" : "For referrers"}</Link><Link href={path("/enquiry")}>{zh ? "在线咨询" : "Online enquiry"}</Link><Link href={path("/privacy")}>{zh ? "隐私政策" : "Privacy"}</Link></div></div>
      <div><div className="footer-title">{zh ? "联系方式" : "Contact"}</div><div className="footer-links"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><span>{company.address}</span></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.name}. {company.legalName} · ABN {company.abn}</span><span>{zh ? "注册 NDIS 服务提供商。服务由具备相应资质的专业人员提供，并在适用情况下由 AHPRA 注册专业人员提供。" : "Registered NDIS Provider. Services are delivered by appropriately qualified practitioners, including AHPRA-registered practitioners where required."}</span></div>
  </div></footer>;
}
