import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const links = [
  ["Services", "/services"], ["NDIS", "/ndis"], ["Support at Home", "/support-at-home"],
  ["About", "/about"], ["For Referrers", "/referrers"],
];

export function Header() {
  return <header className="site-header">
    <div className="site-shell header-inner">
      <Link className="brand-lockup" href="/" aria-label="Better Care Health Group home">
        <img className="brand-logo" src="/brand/better-care-logo.png" alt="" width="116" height="116" />
        <span className="brand-name"><strong>Better Care Health</strong><small>Allied Health &amp; NDIS Support</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <details className="nav-services-menu">
          <summary>Services <CaretDown size={14} weight="bold" /></summary>
          <div className="nav-services-panel">
            <div><span>Therapist-led</span><Link href="/services/physiotherapy">Physiotherapy</Link><Link href="/services/occupational-therapy">Occupational Therapy</Link><Link href="/services/myotherapy">Myotherapy</Link></div>
            <div><span>Early childhood</span><Link href="/services/early-childhood-supports">0118 Early Childhood</Link><Link href="/services/key-workers">Key Worker Support</Link></div>
            <div><span>Explore</span><Link href="/services">All services</Link><Link href="/ndis">NDIS</Link><Link href="/support-at-home">Support at Home</Link></div>
          </div>
        </details>
        {links.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link className="nav-cta" href="/enquiry">Online enquiry</Link>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/services/early-childhood-supports">0118 Early Childhood</Link><Link href="/enquiry">Online enquiry</Link></nav>
      </details>
    </div>
  </header>;
}
