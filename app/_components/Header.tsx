"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localizePath } from "../_i18n/locale";
import { HeaderNavigation } from "./header/HeaderNavigation";

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  return <header className="site-header">
    <div className="site-shell header-inner">
      <Link className="brand-lockup" href={localizePath("/", locale)} aria-label={locale === "zh" ? "Better Care Health Group 中文首页" : "Better Care Health Group home"}>
        <Image className="brand-logo" src="/brand/better-care-logo.png" alt="" width={116} height={116} priority />
        <span className="brand-name"><strong>Better Care Health</strong><small>{locale === "zh" ? "联合健康与社区支持" : "Allied Health & Community Support"}</small></span>
      </Link>
      <HeaderNavigation />
    </div>
  </header>;
}
