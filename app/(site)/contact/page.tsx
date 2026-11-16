import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactForm from "@/components/site/ContactForm";
import { CONTACT, LINKEDIN_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about BrigaCare services? Call, email or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="serif">Contact</h1>
          <p className="page-intro">For any questions about our services please reach out using the form below.</p>
        </div>
      </section>

      <section className="form-section">
        <div className="wrap">
          <div className="fsec">
            <div className="fsec-head">
              <h2 className="serif">Let&apos;s Chat</h2>
            </div>
            <div className="fbody">
              <div className="g3c">
                <ContactCard href={CONTACT.phoneHref} label="Phone" value={CONTACT.phoneDashed} icon={<PhoneIcon />} />
                <ContactCard href={`mailto:${CONTACT.email}`} label="Email" value={CONTACT.email} icon={<MailIcon />} />
                {/* TODO: LinkedIn URL not supplied yet; the card appears once LINKEDIN_URL is set in lib/site.ts. */}
                {LINKEDIN_URL && (
                  <ContactCard
                    href={LINKEDIN_URL}
                    label="Social Media"
                    value="LinkedIn"
                    icon={<LinkedInIcon />}
                    ariaLabel="BrigaCare on LinkedIn"
                    external
                  />
                )}
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard(props: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  ariaLabel?: string;
  external?: boolean;
}) {
  return (
    <a
      className="ccard"
      href={props.href}
      aria-label={props.ariaLabel}
      {...(props.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="cic" aria-hidden="true">
        {props.icon}
      </span>
      <span className="ctx">
        <span className="ckey">{props.label}</span>
        <span className="cval">{props.value}</span>
      </span>
    </a>
  );
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
