import { ReactNode } from "react";
import { Reveal } from "./Motion";

export function PageHero({ title, children }: { title: string; children: ReactNode }) {
  return <section className="inner-hero"><div className="site-shell"><Reveal><h1>{title}</h1><p>{children}</p></Reveal></div></section>;
}
