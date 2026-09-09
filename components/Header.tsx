"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Luminous Design home">
          <span>LUMINOUS</span><span>DESIGN</span>
        </Link>
        <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <Link className={pathname === item.href ? "active" : ""} href={item.href}>{item.label}</Link>
              {item.children && (
                <div className="nav-submenu">
                  {item.children.map((child) => <Link href={child.href} key={child.label}>{child.label}</Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link href="/contact" className="consult-link">상담신청</Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="메뉴 열기" aria-expanded={open}>
          <span /><span />
        </button>
      </div>
      {open && <div className="mobile-nav">
        {navItems.flatMap((item) => [<Link key={item.label} href={item.href}>{item.label}</Link>, ...(item.children ?? []).map((child) => <Link key={child.label} className="mobile-sub" href={child.href}>{child.label}</Link>)] )}
        <Link href="/contact">상담신청</Link>
      </div>}
    </header>
  );
}
