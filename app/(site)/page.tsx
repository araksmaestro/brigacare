import Image from "next/image";
import Link from "next/link";
import hero from "@/public/images/hero.jpg";
import session from "@/public/images/session.jpg";
import StaffList from "@/components/site/StaffList";
import { CONTACT, FEATURED_STAFF, STAFF } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="wrap hero">
          <div className="hero-copy">
            <h1 className="serif">BrigaCare</h1>
            <p className="tagline">
              For Anyone, Anywhere, at <span>Anytime.</span>
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <a href={CONTACT.phoneHref} className="btn btn-outline">
                <PhoneIcon />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src={hero}
              alt="A BrigaCare behavior professional working one-on-one with a child at a table"
              className="hero-img"
              sizes="(max-width: 900px) 100vw, 620px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="staff-section" aria-labelledby="staff-title">
        <div className="wrap">
          <div className="staff-head">
            <h2 id="staff-title" className="section-title serif">
              Our Staff.
            </h2>
            <div className="featured">
              <span className="avatar" aria-hidden="true">
                {FEATURED_STAFF.initials}
              </span>
              <span className="person">
                <strong>{FEATURED_STAFF.name}</strong>
                <span className="role">{FEATURED_STAFF.role}</span>
                <a href={`mailto:${FEATURED_STAFF.email}`}>{FEATURED_STAFF.email}</a>
              </span>
            </div>
          </div>
          <StaffList staff={STAFF} total={STAFF.length + 1} />
        </div>
      </section>

      <section className="how" aria-labelledby="how-title">
        <div className="wrap">
          <h2 id="how-title" className="serif">
            How It Works
          </h2>
          <p>
            Referrals to our group most commonly come from services coordinators, personal agents and regional
            case managers. Referrals are made using the linked referral forms on this site. If you are interested in
            finding out more please use our <Link href="/contact">contact form</Link>.
          </p>
        </div>
      </section>

      <section className="serve">
        <div className="wrap split">
          <p>
            We work with individuals from age 3 to 93, in homes and in residential care. We provide training in all
            physical interventions.
          </p>
          <Image
            src={session}
            alt="A behavior professional using a tablet with a young boy during a session"
            className="serve-img"
            sizes="(max-width: 900px) 100vw, 572px"
          />
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
