import type { MetadataRoute } from "next";
import { services } from "./_content/site";
import { localizePath } from "./_i18n/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com").replace(/\/$/, "");
  const routes = ["", "/services", "/about", "/our-team", "/referrers", "/enquiry", "/privacy"];
  const paths = [...routes, ...services.map(({ slug }) => `/services/${slug}`)];

  return paths.flatMap((path) => {
    const route = path || "/";
    const englishUrl = `${base}${route === "/" ? "" : route}`;
    const chinesePath = localizePath(route, "zh");
    const chineseUrl = `${base}${chinesePath}`;
    const alternates = { languages: { "en-AU": englishUrl, "zh-Hans": chineseUrl } };
    const priority = route === "/" ? 1 : route.startsWith("/services/") ? .75 : .8;

    return [
      { url: englishUrl, changeFrequency: "monthly" as const, priority, alternates },
      { url: chineseUrl, changeFrequency: "monthly" as const, priority, alternates },
    ];
  });
}
