import { cacheLife } from "next/cache";

/** Cached so the static shell keeps the year without reading the clock on every request. */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
