import * as fs from 'fs';
import * as path from 'path';

interface AssetInfo {
  filename: string;
  category: string;
  required: boolean;
}

const REQUIRED_ASSETS: AssetInfo[] = [
  // Parchment backgrounds
  { filename: 'parchment-bg.dim_1920x1080.png', category: 'Parchment Textures', required: true },
  { filename: 'parchment-bg-2.dim_1920x1080.png', category: 'Parchment Textures', required: true },
  { filename: 'parchment-bg-3.dim_1920x1080.png', category: 'Parchment Textures', required: true },
  
  // Ornamental borders
  { filename: 'ornate-border-1.dim_800x200.png', category: 'Ornamental Borders', required: true },
  { filename: 'ornate-border-2.dim_800x200.png', category: 'Ornamental Borders', required: true },
  { filename: 'ornate-border-3.dim_800x200.png', category: 'Ornamental Borders', required: true },
  
  // Curtain textures
  { filename: 'curtain-base.dim_1920x1080.png', category: 'Curtain Textures', required: true },
  { filename: 'curtain-shadows.dim_1920x1080.png', category: 'Curtain Textures', required: true },
  { filename: 'curtain-gold-filigree.dim_1920x1080.png', category: 'Curtain Textures', required: true },
  
  // Character memes
  { filename: 'jesus-meme.dim_800x800.png', category: 'Character Memes', required: true },
  { filename: 'satan-meme.dim_800x800.png', category: 'Character Memes', required: true },
  { filename: 'kanye-meme.dim_800x800.png', category: 'Character Memes', required: true },
  { filename: 'trump-meme.dim_800x800.png', category: 'Character Memes', required: true },
  
  // Popup memes
  { filename: 'popup-meme-1.dim_400x400.png', category: 'Popup Memes', required: true },
  { filename: 'popup-meme-2.dim_400x400.png', category: 'Popup Memes', required: true },
  { filename: 'popup-meme-3.dim_400x400.png', category: 'Popup Memes', required: true },
  { filename: 'popup-meme-4.dim_400x400.png', category: 'Popup Memes', required: true },
  { filename: 'popup-meme-5.dim_400x400.png', category: 'Popup Memes', required: true },
  { filename: 'popup-meme-6.dim_400x400.png', category: 'Popup Memes', required: true },
  
  // Audio tracks
  { filename: 'praise-the-lord-style-loop.dim_audio.mp3', category: 'Audio Tracks', required: true },
  { filename: 'unnecessary-religious-song-loop.dim_audio.mp3', category: 'Audio Tracks', required: true },
  
  // Additional assets
  { filename: 'golden-flash-overlay.dim_1920x1080.png', category: 'Effects', required: true },
];

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function validateAssets(): boolean {
  const assetsDir = path.join(process.cwd(), 'public', 'assets', 'generated');
  
  console.log('\n🔍 Temple of Productivi-Tea Asset Validation\n');
  console.log('=' .repeat(70));
  
  let allValid = true;
  const categorizedResults: Record<string, Array<{ filename: string; size: number; valid: boolean }>> = {};
  
  // Check each required asset
  for (const asset of REQUIRED_ASSETS) {
    const filePath = path.join(assetsDir, asset.filename);
    
    if (!categorizedResults[asset.category]) {
      categorizedResults[asset.category] = [];
    }
    
    try {
      const stats = fs.statSync(filePath);
      const isValid = stats.size > 0;
      
      categorizedResults[asset.category].push({
        filename: asset.filename,
        size: stats.size,
        valid: isValid,
      });
      
      if (!isValid && asset.required) {
        allValid = false;
      }
    } catch (err) {
      categorizedResults[asset.category].push({
        filename: asset.filename,
        size: 0,
        valid: false,
      });
      
      if (asset.required) {
        allValid = false;
      }
    }
  }
  
  // Display results by category
  for (const [category, results] of Object.entries(categorizedResults)) {
    console.log(`\n📁 ${category}`);
    console.log('-'.repeat(70));
    
    for (const result of results) {
      const status = result.valid ? '✅' : '❌';
      const sizeStr = result.size > 0 ? formatBytes(result.size) : 'MISSING/EMPTY';
      console.log(`  ${status} ${result.filename.padEnd(50)} ${sizeStr}`);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(70));
  const totalAssets = REQUIRED_ASSETS.length;
  const validAssets = Object.values(categorizedResults)
    .flat()
    .filter(r => r.valid).length;
  
  console.log(`\n📊 Validation Summary: ${validAssets}/${totalAssets} assets valid`);
  
  if (allValid) {
    console.log('✅ All required assets are present and have non-zero file sizes!\n');
    return true;
  } else {
    console.log('❌ Some required assets are missing or empty. Build cannot proceed.\n');
    return false;
  }
}

// Run validation
const isValid = validateAssets();
process.exit(isValid ? 0 : 1);
