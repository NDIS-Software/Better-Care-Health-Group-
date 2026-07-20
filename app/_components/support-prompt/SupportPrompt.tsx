"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SupportPrompt.module.css";

export function SupportPrompt() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);
  const hiddenOnServiceDetail = pathname.startsWith("/services/");

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

  return <aside className={`${styles.prompt} ${footerVisible ? styles.hidden : ""}`} aria-label="Support enquiry">
    <div>
      <strong>Tell us what support you are looking for.</strong>
      <span>A short introduction is enough.</span>
    </div>
    <Link href="/enquiry">Start the form <ArrowRight size={18} /></Link>
  </aside>;
}
