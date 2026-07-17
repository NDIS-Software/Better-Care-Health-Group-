import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "./Motion";

export function PageCta({ title = "Ready to talk about support?", copy = "Send us an online enquiry and our team will help you work out the next step." }: { title?: string; copy?: string }) {
  return <section className="page-section" style={{ paddingTop: 0 }}><div className="site-shell"><Reveal><div className="cta-panel"><div><h2>{title}</h2><p>{copy}</p></div><Link className="button button-white" href="/enquiry">Make an enquiry <ArrowRight size={18} /></Link></div></Reveal></div></section>;
}
