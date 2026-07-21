import Link from "next/link";
import { company } from "../_content/site";

export function Footer() {
  return <footer className="site-footer"><div className="site-shell">
    <div className="footer-grid">
      <div><img className="footer-logo" src="/brand/better-care-logo.png" alt="Better Care Health Group" width="214" height="214" loading="lazy" /><p className="footer-copy">Mobile allied health and support across Melbourne. Care that fits around real homes, routines and goals.</p></div>
      <div><div className="footer-title">Explore</div><div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About us</Link></div></div>
      <div><div className="footer-title">Connect</div><div className="footer-links"><Link href="/referrers">For referrers</Link><Link href="/enquiry">Online enquiry</Link><Link href="/privacy">Privacy</Link></div></div>
      <div><div className="footer-title">Contact</div><div className="footer-links"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><span>{company.address}</span></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.name}. {company.legalName} · ABN {company.abn}</span><span>Registered NDIS Provider. Services are delivered by appropriately qualified practitioners, including AHPRA-registered practitioners where required.</span></div>
  </div></footer>;
}
