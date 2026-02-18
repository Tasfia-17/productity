import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import archiver from 'archiver';

async function packageAssets(): Promise<void> {
  const assetsDir = path.join(process.cwd(), 'public', 'assets', 'generated');
  const outputPath = path.join(process.cwd(), 'temple-assets.zip');
  
  console.log('\n📦 Packaging Temple of Productivi-Tea Assets\n');
  console.log('=' .repeat(70));
  
  // Create output stream
  const output = createWriteStream(outputPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
  });
  
  // Listen for archive events
  output.on('close', () => {
    const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
    console.log(`\n✅ Archive created successfully!`);
    console.log(`📊 Total size: ${sizeInMB} MB (${archive.pointer()} bytes)`);
    console.log(`📍 Location: ${outputPath}\n`);
  });
  
  archive.on('error', (err) => {
    throw err;
  });
  
  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.warn('⚠️  Warning:', err);
    } else {
      throw err;
    }
  });
  
  // Pipe archive data to the file
  archive.pipe(output);
  
  // Add README.txt to archive root
  const readmePath = path.join(assetsDir, 'README.txt');
  if (fs.existsSync(readmePath)) {
    archive.file(readmePath, { name: 'README.txt' });
    console.log('📄 Added: README.txt');
  }
  
  // Add all assets preserving folder structure
  console.log('\n📁 Adding assets to archive...\n');
  
  const files = fs.readdirSync(assetsDir);
  let fileCount = 0;
  
  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile() && file !== 'README.txt') {
      // Add file with preserved path structure
      archive.file(filePath, { 
        name: `frontend/public/assets/generated/${file}` 
      });
      
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`  ✓ ${file.padEnd(55)} ${sizeKB} KB`);
      fileCount++;
    }
  }
  
  console.log(`\n📊 Total files added: ${fileCount}`);
  console.log('\n🔄 Finalizing archive...');
  
  // Finalize the archive
  await archive.finalize();
}

// Run packaging
packageAssets().catch((err) => {
  console.error('❌ Error packaging assets:', err);
  process.exit(1);
});
