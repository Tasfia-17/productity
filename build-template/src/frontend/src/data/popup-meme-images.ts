/**
 * Registry of locally served popup meme images for the random background popup system.
 * All images are generated originals matching the religious-humorous temple aesthetic.
 * See frontend/public/assets/generated/popup-meme-asset-sources.md for provenance.
 */

import { publicAssetUrl } from '@/utils/publicAssetUrl';

export const POPUP_MEME_IMAGES = [
  publicAssetUrl('assets/generated/popup-meme-01.dim_768x768.png'), // Generated: Temple scroll with "I'll start Monday" text
  publicAssetUrl('assets/generated/popup-meme-02.dim_768x768.png'), // Generated: Ancient tablet with "5 more minutes" inscription
  publicAssetUrl('assets/generated/popup-meme-03.dim_768x768.png'), // Generated: Holy parchment with "Tomorrow is a gift" message
  publicAssetUrl('assets/generated/popup-meme-04.dim_768x768.png'), // Generated: Sacred scroll with "Blessed are the procrastinators"
  publicAssetUrl('assets/generated/popup-meme-05.dim_768x768.png'), // Generated: Religious icon with "Snack first, work later"
  publicAssetUrl('assets/generated/popup-meme-06.dim_768x768.png'), // Generated: Temple banner with "The deadline can wait"
] as const;
