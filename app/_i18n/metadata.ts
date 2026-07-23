import type { Metadata } from "next";
import { brandSocialImagePath } from "../_config/seo";
import type { Locale } from "./locale";
import { localeAlternates, localizePath } from "./locale";

type LocalizedMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
};

export function localizedMetadata({ locale, path, title, description }: LocalizedMetadataInput): Metadata {
  const localizedPath = localizePath(path, locale);
  const imageAlt = locale === "zh"
    ? "Better Care Health Group 墨尔本上门联合健康服务"
    : "Better Care Health Group mobile allied health in Melbourne";

  return {
    title,
    description,
    alternates: localeAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_AU",
      url: localizedPath,
      siteName: "Better Care Health Group",
      title,
      description,
      images: [{ url: brandSocialImagePath, width: 1731, height: 909, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brandSocialImagePath],
    },
  };
}
