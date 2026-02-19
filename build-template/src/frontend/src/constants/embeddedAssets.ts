/**
 * Centralized asset paths using Vite's BASE_URL for proper deployment resolution.
 * All generated media files are referenced from the public/assets/generated directory.
 * This ensures assets work correctly in both Vercel deployments and local/static builds.
 */

const BASE_URL = import.meta.env.BASE_URL || '/';

// Helper to build asset URLs
const assetUrl = (path: string) => `${BASE_URL}assets/generated/${path}`;

// Parchment Background Textures (1200x800)
export const PARCHMENT_TEXTURE_1 = assetUrl('parchment-texture-1.dim_1200x800.png');
export const PARCHMENT_TEXTURE_2 = assetUrl('parchment-texture-2.dim_1200x800.png');
export const PARCHMENT_TEXTURE_3 = assetUrl('parchment-texture-3.dim_1200x800.png');
export const PARCHMENT_TEXTURE_4 = assetUrl('parchment-texture-4.dim_1200x800.png');
export const PARCHMENT_TEXTURE_5 = assetUrl('parchment-texture-5.dim_1200x800.png');
export const PARCHMENT_TEXTURE_6 = assetUrl('parchment-texture-6.dim_1200x800.png');

// Legacy parchment backgrounds (1920x1080)
export const PARCHMENT_BG_1 = assetUrl('parchment-bg-1.dim_1920x1080.png');
export const PARCHMENT_BG_2 = assetUrl('parchment-bg-2.dim_1920x1080.png');
export const PARCHMENT_BG_3 = assetUrl('parchment-bg-3.dim_1920x1080.png');
export const PARCHMENT_OVERLAY_TILE = assetUrl('parchment-overlay-tile.dim_1024x1024.png');

// Array of all parchment textures for variety
export const PARCHMENT_BACKGROUNDS = [
  PARCHMENT_TEXTURE_1,
  PARCHMENT_TEXTURE_2,
  PARCHMENT_TEXTURE_3,
  PARCHMENT_TEXTURE_4,
  PARCHMENT_TEXTURE_5,
  PARCHMENT_TEXTURE_6,
];

// Ornamental Borders (800x200)
export const ORNATE_BORDER_1 = assetUrl('ornate-border-1.dim_800x200.png');
export const ORNATE_BORDER_2 = assetUrl('ornate-border-2.dim_800x200.png');
export const ORNATE_BORDER_3 = assetUrl('ornate-border-3.dim_800x200.png');
export const ORNATE_BORDER_4 = assetUrl('ornate-border-4.dim_800x200.png');
export const ORNATE_BORDER_5 = assetUrl('ornate-border-5.dim_800x200.png');
export const ORNATE_BORDER_6 = assetUrl('ornate-border-6.dim_800x200.png');
export const ORNATE_BORDER_7 = assetUrl('ornate-border-7.dim_800x200.png');
export const ORNATE_BORDER_8 = assetUrl('ornate-border-8.dim_800x200.png');

// Floral side borders (200x1200)
export const ORNATE_FLORAL_BORDER_LEFT = assetUrl('ornate-floral-border-left.dim_200x1200.png');
export const ORNATE_FLORAL_BORDER_RIGHT = assetUrl('ornate-floral-border-left.dim_200x1200.png'); // Reuse left, flip in CSS

// Array of all ornamental borders
export const ORNAMENTAL_BORDERS = [
  ORNATE_BORDER_1,
  ORNATE_BORDER_2,
  ORNATE_BORDER_3,
  ORNATE_BORDER_4,
  ORNATE_BORDER_5,
  ORNATE_BORDER_6,
  ORNATE_BORDER_7,
  ORNATE_BORDER_8,
  ORNATE_FLORAL_BORDER_LEFT,
  ORNATE_FLORAL_BORDER_RIGHT,
];

// Curtain Textures (1920x1080)
export const CURTAIN_BASE = assetUrl('curtain-base.dim_1920x1080.png');
export const CURTAIN_SHADOWS = assetUrl('curtain-shadows.dim_1920x1080.png');
export const CURTAIN_GOLD_PATTERN = assetUrl('curtain-gold-filigree.dim_1920x1080.png');

// Curtain textures object
export const CURTAIN_TEXTURES = {
  curtainBase: CURTAIN_BASE,
  curtainShadows: CURTAIN_SHADOWS,
  curtainGoldFiligree: CURTAIN_GOLD_PATTERN,
};

// Character Memes (800x800)
export const JESUS_MEME = assetUrl('jesus-meme.dim_800x800.png');
export const SATAN_MEME = assetUrl('satan-meme.dim_800x800.png');
export const KANYE_MEME = assetUrl('kanye-meme.dim_800x800.png');
export const TRUMP_MEME = assetUrl('trump-meme.dim_800x800.png');

// Character memes object
export const CHARACTER_MEMES = {
  jesusMeme: JESUS_MEME,
  satanMeme: SATAN_MEME,
  kanyeMeme: KANYE_MEME,
  trumpMeme: TRUMP_MEME,
};

// Character Cloud Overlays (1400x1400)
export const JESUS_CLOUD_OVERLAY = assetUrl('jesus-cloud-overlay.dim_1400x1400.png');
export const SATAN_CLOUD_OVERLAY = assetUrl('satan-cloud-overlay.dim_1400x1400.png');
export const KANYE_CLOUD_OVERLAY = assetUrl('kanye-cloud-overlay.dim_1400x1400.png');
export const TRUMP_CLOUD_OVERLAY = assetUrl('trump-cloud-overlay.dim_1400x1400.png');

// Popup Memes (400x400)
export const POPUP_MEME_1 = assetUrl('popup-meme-1.dim_400x400.png');
export const POPUP_MEME_2 = assetUrl('popup-meme-2.dim_400x400.png');
export const POPUP_MEME_3 = assetUrl('popup-meme-3.dim_400x400.png');
export const POPUP_MEME_4 = assetUrl('popup-meme-4.dim_400x400.png');
export const POPUP_MEME_5 = assetUrl('popup-meme-5.dim_400x400.png');
export const POPUP_MEME_6 = assetUrl('popup-meme-6.dim_400x400.png');

// Export all popup memes as an array for convenience
export const POPUP_MEME_IMAGES = [
  POPUP_MEME_1,
  POPUP_MEME_2,
  POPUP_MEME_3,
  POPUP_MEME_4,
  POPUP_MEME_5,
  POPUP_MEME_6,
];

// Golden Flash Overlays (1920x1080)
export const GOLDEN_FLASH_OVERLAY = assetUrl('golden-flash-overlay.dim_1920x1080.png');
export const GOLDEN_LIGHT_BURST = assetUrl('golden-flash-overlay.dim_1920x1080.png'); // Reuse same asset

// Cameo overlays object
export const CAMEO_OVERLAYS = {
  jesusCameoBright: JESUS_CLOUD_OVERLAY,
  goldenFlashOverlay: GOLDEN_FLASH_OVERLAY,
  goldenLightBurst: GOLDEN_LIGHT_BURST,
};

// Character Badge (500x650 + 320x220)
export const TEMPLE_GUIDE = assetUrl('temple-guide.dim_500x650.png');
export const BADGE_PLAQUE = assetUrl('badge-plaque.dim_320x220.png');

// Character badge constant
export const CHARACTER_BADGE = TEMPLE_GUIDE;

// Decorative Elements
export const ANCIENT_BORDER_PATTERN_TILE = assetUrl('ancient-border-pattern-tile.dim_1024x1024.png');
export const ANCIENT_BORDER_CORNERS_SET = assetUrl('ancient-border-corners-set.dim_2048x2048.png');
export const RELIGIOUS_DOODLE_TILE = assetUrl('religious-doodle-tile.dim_1024x1024.png');
export const SIDE_BORDER = assetUrl('side-border.dim_200x1200.png');
export const ORNATE_SECTION_DIVIDER = assetUrl('ornate-section-divider.dim_2400x300.png');
export const MEGA_FLORAL_BORDER = assetUrl('mega-floral-border.dim_2400x400.png');
export const SCROLL_BG = assetUrl('scroll-bg.dim_1400x900.png');
export const BUREAUCRACY_FORM_BG = assetUrl('bureaucracy-form-bg.dim_1800x1200.png');

// Audio Tracks (MP3)
export const PRIMARY_AUDIO_TRACK = assetUrl('praise-the-lord-style-loop.dim_audio.mp3');
export const SECONDARY_AUDIO_TRACK = assetUrl('unnecessary-religious-song-loop.dim_audio.mp3');

// Background music constants
export const PRIMARY_BACKGROUND_MUSIC = PRIMARY_AUDIO_TRACK;
export const SECONDARY_BACKGROUND_MUSIC = SECONDARY_AUDIO_TRACK;
