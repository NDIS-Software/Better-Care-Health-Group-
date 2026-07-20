import Link from "next/link";
import { HeaderNavigation } from "./header/HeaderNavigation";

export function Header() {
  return <header className="site-header">
    <div className="site-shell header-inner">
      <Link className="brand-lockup" href="/" aria-label="Better Care Health Group home">
        <img className="brand-logo" src="/brand/better-care-logo.png" alt="" width="116" height="116" />
        <span className="brand-name"><strong>Better Care Health</strong><small>Allied Health &amp; Community Support</small></span>
      </Link>
      <HeaderNavigation />
    </div>
  </header>;
}
