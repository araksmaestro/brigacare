import type { Metadata } from "next";
import FormEmbed from "@/components/site/FormEmbed";
import { FORMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "ODDS Client Referral Form",
  description: "Refer an ODDS client to BrigaCare behavior professional services.",
};

export default function OddsReferralPage() {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="serif">ODDS Client Referral Form</h1>
          <span className="badge">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            HIPAA Secure
          </span>
        </div>
      </section>
      {/* Height covers the form with Guardian/Residential closed; opening them scrolls inside the frame. */}
      <FormEmbed src={FORMS.odds} title="ODDS Client Referral Form" height={2450} mobileHeight={2620} />
    </>
  );
}
