"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import logo from "@/public/images/logo.png";
import logoDark from "@/public/images/logo-dark.png";
import { CONTACT, CONTACT_NAV, NAV } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  const close = useCallback(() => {
    setOpen(false);
    openBtnRef.current?.focus();
  }, []);

  // Lock body scroll, close on Esc, trap focus while the menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("menu-open");
    const menu = menuRef.current;
    menu?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !menu) return;
      const items = menu.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" aria-label="BrigaCare home">
          <Image src={logo} alt="BrigaCare" className="logo" priority />
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="navlink" aria-current={current(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link href={CONTACT_NAV.href} className="nav-cta" aria-current={current(CONTACT_NAV.href)}>
            {CONTACT_NAV.label}
          </Link>
        </nav>

        <button
          ref={openBtnRef}
          type="button"
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mobile-menu-head">
            <Link href="/" aria-label="BrigaCare home" onClick={() => setOpen(false)}>
              <Image src={logoDark} alt="BrigaCare" className="logo" />
            </Link>
            <button type="button" className="menu-close" aria-label="Close menu" onClick={close}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Main">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} aria-current={current(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <Link href={CONTACT_NAV.href} className="mm-contact" aria-current={current(CONTACT_NAV.href)} onClick={() => setOpen(false)}>
              {CONTACT_NAV.label}
            </Link>
            <a href={CONTACT.phoneHref} className="mm-call">
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
