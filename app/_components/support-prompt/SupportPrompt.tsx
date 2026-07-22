"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPath, localizePath } from "../../_i18n/locale";
import styles from "./SupportPrompt.module.css";

export function SupportPrompt() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const zh = locale === "zh";
  const [footerVisible, setFooterVisible] = useState(false);
  const hiddenOnServiceDetail = pathname.startsWith("/services/") || pathname.startsWith("/zh/services/");

  useEffect(() => {
    if (hiddenOnServiceDetail) return;
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: .02 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [hiddenOnServiceDetail]);

  if (hiddenOnServiceDetail) return null;

  return <aside className={`${styles.prompt} ${footerVisible ? styles.hidden : ""}`} aria-label={zh ? "服务咨询" : "Support enquiry"}>
    <div>
      <strong>{zh ? "告诉我们您正在寻找哪类支持。" : "Tell us what support you are looking for."}</strong>
      <span>{zh ? "简单介绍情况即可。" : "A short introduction is enough."}</span>
    </div>
    <Link href={localizePath("/enquiry", locale)}>{zh ? "开始填写" : "Start the form"} <ArrowRight size={18} /></Link>
  </aside>;
}
