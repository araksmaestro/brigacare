import type { CSSProperties } from "react";

type Props = {
  src: string;
  title: string;
  /** Iframe height on desktop/tablet, in px. SmartSuite does not report its height, so this is fixed. */
  height: number;
  /** Iframe height under 700px wide, in px. */
  mobileHeight: number;
};

/** Embeds a SmartSuite public form inside the design's white form card. */
export default function FormEmbed({ src, title, height, mobileHeight }: Props) {
  const style = {
    "--frame-h": `${height}px`,
    "--frame-h-mobile": `${mobileHeight}px`,
  } as CSSProperties;

  return (
    <section className="form-section">
      <div className="wrap">
        <div className="form-card">
          <iframe className="form-frame" src={src} title={title} style={style} />
        </div>
        <p className="form-fallback">
          Trouble viewing the form?{" "}
          <a href={src} target="_blank" rel="noopener noreferrer">
            Open it in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}
