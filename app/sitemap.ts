import type { MetadataRoute } from "next";
import { services } from "./_content/site";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com"; const routes = ["", "/services", "/about", "/referrers", "/enquiry", "/privacy"]; return [...routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .8 })), ...services.map(({ slug }) => ({ url: `${base}/services/${slug}`, changeFrequency: "monthly" as const, priority: .75 }))]; }
