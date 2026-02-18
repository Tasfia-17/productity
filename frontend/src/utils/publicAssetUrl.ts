/**
 * Builds a public asset URL using Vite's runtime base path.
 * This ensures assets load correctly whether the app is served from
 * the domain root or a subdirectory.
 * 
 * @param assetPath - Path relative to frontend/public (e.g., "assets/generated/image.png")
 * @returns Full URL with correct base path
 */
export function publicAssetUrl(assetPath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from assetPath if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  // Ensure base ends with slash
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
