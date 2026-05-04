const PREFIX =
  process.env.NODE_ENV === "production" ? "/portfolio-skynopy" : "";

/**
 * Prepends the GitHub Pages basePath to a public-asset path in production.
 * Use for every <Image src> that points at /projects/... (Next.js does not
 * apply basePath to next/image src when images.unoptimized is true).
 */
export function asset(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${PREFIX}${path}`;
}
