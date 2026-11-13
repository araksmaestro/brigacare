"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import logoDark from "@/public/images/logo-dark.png";
import { CONTACT, CONTACT_NAV, NAV } from "@/lib/site";

/** `year` is rendered on the server (see CopyrightYear) and passed in. */
export default function Footer({ year }: { year: ReactNode }) {
  const pathname = usePathname();
  const links = [...NAV, CONTACT_NAV];

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div className="foot-col">
            <Image src={logoDark} alt="BrigaCare" className="foot-logo" />
          </div>
          <nav className="foot-col" aria-label="Quick links">
            <h2>Quick links</h2>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flink"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="foot-col">
            <h2>Contact info</h2>
            <a className="flink" href={CONTACT.phoneHref}>
              {CONTACT.phoneDashed}
            </a>
            <span>{CONTACT.fax} FAX</span>
            <address style={{ fontStyle: "normal", lineHeight: 1.5, marginTop: 8 }}>
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </address>
          </div>
        </div>
        <div className="copyright">
          © Copyright {year} © Brigacare, Inc.
        </div>
      </div>
    </footer>
  );
}
