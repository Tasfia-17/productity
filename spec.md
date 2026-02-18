# Specification

## Summary
**Goal:** Fix blank-load issues on Vercel by switching the Vite base path per environment so assets resolve correctly in both Vercel (root) and downloadable/static subdirectory deployments (relative).

**Planned changes:**
- Update Vite configuration to build with `base: "/"` for Vercel deployments and `base: "./"` for downloadable/static subdirectory builds.
- Verify asset URL generation continues to work via `import.meta.env.BASE_URL` (as used by `publicAssetUrl(...)`) in both build modes.
- Ensure the app remains a single-page experience and requires no backend changes.

**User-visible outcome:** The app loads correctly on Vercel (no blank screen, no 404s for JS/CSS/assets), while downloadable/static subdirectory builds continue to function with correctly resolved assets.
