"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeFromPath } from "../_i18n/locale";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = localeFromPath(pathname) === "zh" ? "zh-Hans" : "en-AU";
  }, [pathname]);

  return null;
}
