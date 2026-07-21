import type { MetadataRoute } from "next";
import { brandLogoPath } from "./_config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Better Care Health Group",
    short_name: "Better Care",
    description: "Mobile allied health and community support across Melbourne.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf0",
    theme_color: "#083b58",
    icons: [
      {
        src: brandLogoPath,
        sizes: "214x214",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
