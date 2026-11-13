import type { Metadata } from "next";
import FormEmbed from "@/components/site/FormEmbed";
import { FORMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work with BrigaCare",
  description: "Apply to join the BrigaCare team. We hire registered Oregon behavior professionals.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="serif">Apply to Join the BrigaCare Team</h1>
          <p className="page-intro">
            Use the form below to apply to become a member of our team. We hire registered Oregon behavior
            professionals. Start by completing our form and we will get back in touch with you.
          </p>
        </div>
      </section>
      <FormEmbed src={FORMS.work} title="BrigaCare employment application" height={1100} mobileHeight={1140} />
    </>
  );
}
