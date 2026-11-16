/**
 * Iframe height rules. SmartSuite doesn't report its height, so each form's content height was
 * measured at several widths (it grows as the screen narrows). `maxWidth` is the viewport width
 * (px) up to which `height` applies; the rule without `maxWidth` is the default for wider screens.
 */
export type FrameHeight = { maxWidth?: number; height: number };

type Props = {
  /** Short unique id, used to scope the height rules. */
  id: string;
  src: string;
  title: string;
  heights: FrameHeight[];
};

function heightCss(id: string, heights: FrameHeight[]) {
  const sel = `.form-frame-${id}`;
  const base = heights.find((h) => h.maxWidth === undefined);
  const ranges = heights
    .filter((h): h is Required<FrameHeight> => h.maxWidth !== undefined)
    .sort((a, b) => b.maxWidth - a.maxWidth); // widest first, so narrower rules win
  return [
    base ? `${sel}{height:${base.height}px}` : "",
    ...ranges.map((h) => `@media (max-width:${h.maxWidth}px){${sel}{height:${h.height}px}}`),
  ].join("");
}

/** Embeds a SmartSuite public form under the page title. */
export default function FormEmbed({ id, src, title, heights }: Props) {
  return (
    <section className="form-section">
      <style>{heightCss(id, heights)}</style>
      <div className="wrap">
        <div className="form-card">
          <iframe className={`form-frame form-frame-${id}`} src={src} title={title} />
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
