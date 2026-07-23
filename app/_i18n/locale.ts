export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export function localeFromPath(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function stripLocale(pathname: string) {
  if (pathname === "/zh") return "/";
  return pathname.startsWith("/zh/") ? pathname.slice(3) || "/" : pathname;
}

export function localizePath(pathname: string, locale: Locale) {
  const basePath = stripLocale(pathname);
  if (locale === "en") return basePath;
  return basePath === "/" ? "/zh" : `/zh${basePath}`;
}

export function localeAlternates(pathname: string, locale: Locale = "en") {
  const englishPath = localizePath(pathname, "en");
  return {
    canonical: localizePath(pathname, locale),
    languages: {
      "en-AU": englishPath,
      "zh-Hans": localizePath(pathname, "zh"),
      "x-default": englishPath,
    },
  };
}
