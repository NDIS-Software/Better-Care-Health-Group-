const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const brandLogoPath = "/brand/better-care-logo.png";
export const faviconPath = "/favicon.png";
export const brandSocialImagePath = "/brand/better-care-og.png";

export function absoluteSiteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}
