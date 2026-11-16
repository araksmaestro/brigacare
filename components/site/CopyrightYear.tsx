import { cacheLife } from "next/cache";

/** Current year, cached so it can be part of the prerendered page and refreshed daily. */
export default async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
