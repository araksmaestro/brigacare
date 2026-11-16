import type { Metadata } from "next";
import FormEmbed from "@/components/site/FormEmbed";
import { FORMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "APD Client Referral Form",
  description: "Oregon APD submission form for BrigaCare referrals.",
};

export default function ApdReferralPage() {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="serif">APD Client Referral Form</h1>
          <span className="page-subtitle">Oregon APD Submission Form</span>
        </div>
      </section>
      <FormEmbed src={FORMS.apd} title="APD Client Referral Form" height={920} mobileHeight={920} />
    </>
  );
}
