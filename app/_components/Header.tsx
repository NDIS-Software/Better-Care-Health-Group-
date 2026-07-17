import Link from "next/link";

const links = [
  ["Services", "/services"], ["NDIS", "/ndis"], ["Support at Home", "/support-at-home"],
  ["About", "/about"], ["For Referrers", "/referrers"],
];

export function Header() {
  return <header className="site-header">
    <div className="site-shell header-inner">
      <Link href="/" aria-label="Better Care Health Group home"><img className="brand-logo" src="/brand/better-care-logo.png" alt="Better Care Health Group" width="352" height="116" /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link className="nav-cta" href="/enquiry">Online enquiry</Link>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/enquiry">Online enquiry</Link></nav>
      </details>
    </div>
  </header>;
}
