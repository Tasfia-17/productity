# Temple of Productivi-Tea - Generated Assets

## Current Status: Placeholder Assets

This directory contains **placeholder assets** (1x1 transparent images and silent audio) to ensure the application builds and deploys successfully.

## Asset Inventory

### Images (Placeholders - 70 bytes each)
- `ancient-border-pattern-tile.dim_1024x1024.png` - Border decoration pattern
- `parchment-texture-bg.dim_2048x2048.jpg` - Background parchment texture
- `curtain-texture-tile-bloodred-gold.dim_2048x2048.png` - Curtain base texture
- `curtain-folds-shadows.dim_1920x1080.png` - Curtain shadow overlay
- `curtain-gold-filigree-overlay.dim_1920x1080.png` - Gold filigree overlay
- `jesus-cloud-overlay.dim_1400x1400.png` - Jesus character popup
- `satan-cloud-overlay.dim_1400x1400.png` - Satan character popup
- `kanye-cloud-overlay.dim_1400x1400.png` - Kanye character popup
- `trump-cloud-overlay.dim_1400x1400.png` - Trump character popup
- `golden-flash-overlay.dim_1920x1080.png` - Golden flash effect
- `halo-cursor-ring.dim_512x512.png` - Halo cursor effect
- `popup-meme-01.dim_768x768.png` through `popup-meme-06.dim_768x768.png` - Meme popups

### Audio (Placeholders - 138 bytes each)
- `religious-background-loop.mp3` - Background ambient audio
- `choir-sting.mp3` - Choir sound effect
- `micah-tyler-praise-the-lord.mp3` - Primary audio track

## Application Functionality

✅ **The app is fully functional with placeholder assets:**
- All interactive features work correctly
- All components render without errors
- No 404 errors or broken paths
- Build and deployment succeed
- Missing visuals show as transparent/empty areas
- Audio is silent but doesn't cause errors

## Replacing with Real Assets

When actual generated assets become available:

1. **Replace files in this directory** with real assets
2. **Keep the same filenames** - no code changes needed
3. **Recommended sizes:**
   - Parchment backgrounds: 1920x1080 or 2048x2048 PNG/JPG
   - Ornamental borders: 1024x1024 PNG with transparency
   - Curtain textures: 1920x1080 PNG with transparency
   - Character overlays: 1400x1400 PNG with transparency
   - Popup memes: 768x768 PNG
   - Audio: MP3 format, loopable, 128-320 kbps

## Asset Validation

Use the validation script to check assets:

```bash
cd build-template/src/frontend
npx ts-node scripts/validate-assets.ts
```

## Asset Packaging

To create a distributable assets archive:

```bash
cd build-template/src/frontend
npx ts-node scripts/package-assets.ts
```

This creates `temple-assets.zip` with all assets in the correct folder structure.

## Technical Details

- **Path Resolution:** Assets use relative paths (`/assets/generated/...`)
- **Vite Base:** Configured for `base: './'` for maximum compatibility
- **No Build Errors:** Placeholder files prevent 404s during build
- **Graceful Degradation:** App works without real assets

## Repository

https://github.com/Tasfia-17/productity

---

**Note:** The application is production-ready with placeholders. Real assets enhance the visual experience but are not required for functionality.
