# Specification

## Summary
**Goal:** Fix the onboarding curtain overlay layering/visit behavior, restore reliable scrolling through morphing-border sections, and make the single-page experience repeat infinitely as the user scrolls.

**Planned changes:**
- Ensure the blood-red/gold curtain onboarding overlay always renders above all other overlays on app entry, blocks interaction/scroll until dismissed, shows once per active visit, and reappears on a later return visit.
- Fix mid-page morphing/geometric border sections so they never trap/stop scrolling across all border shapes while keeping in-section pointer interactions working.
- Implement infinite page repeat by appending additional copies of the full long-page content in the same order as the user nears the bottom, without breaking existing overlays (cameos, micro-cameos, flash bursts, popups, audio) and with basic mitigation to avoid immediate runaway DOM growth.
- Preserve all existing cameo behaviors exactly as they currently work while implementing the above fixes.

**User-visible outcome:** On each new visit, users see and dismiss the curtain to enter; the page scrolls smoothly through all morphing-border areas without getting stuck; and the page never ends because full content blocks keep repeating as they scroll.
