import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CopyrightYear from "@/components/site/CopyrightYear";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "BrigaCare | Behavior Professional Services Group",
    template: "%s | BrigaCare",
  },
  description:
    "Brigacare Behavior Professional Services Group, Sherwood, Oregon. Behavior professionals serving individuals from age 3 to 93, in homes and residential care.",
};

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={`site ${fraunces.variable} ${nunito.variable}`} style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="topbar">
        <div className="wrap">Brigacare Behavior Professional Services Group</div>
      </div>
      <Header />
      <main id="main">{children}</main>
      <Footer year={<CopyrightYear />} />
    </div>
  );
}
