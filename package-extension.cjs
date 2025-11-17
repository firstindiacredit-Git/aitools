const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files and folders to include in the extension package
const extensionFiles = [
  'manifest.json',
  'src/bg.js',
  'src/content.js',
  'src/content_all.js',
  'idd.js',
  'is.js',
  'icons/icon.png'
];

const outputZip = 'Toolzbuy-Extension-V3.zip';
const tempDir = 'extension-package';

try {
  // Create temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  // Copy files
  extensionFiles.forEach(file => {
    const srcPath = file;
    const destPath = path.join(tempDir, file);
    
    if (fs.existsSync(srcPath)) {
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied: ${file}`);
    } else {
      console.warn(`⚠ File not found: ${file}`);
    }
  });

  // Create zip file
  console.log('\nCreating zip file...');
  
  // Use PowerShell on Windows to create zip
  if (process.platform === 'win32') {
    const files = extensionFiles.filter(f => fs.existsSync(f)).join(' ');
    execSync(`powershell Compress-Archive -Path ${tempDir}\\* -DestinationPath ${outputZip} -Force`, { stdio: 'inherit' });
  } else {
    // Use zip command on Unix/Linux/Mac
    execSync(`cd ${tempDir} && zip -r ../${outputZip} .`, { stdio: 'inherit' });
  }

  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log(`\n✅ Extension packaged successfully: ${outputZip}`);
  console.log(`📦 File size: ${(fs.statSync(outputZip).size / 1024).toFixed(2)} KB`);
  
} catch (error) {
  console.error('❌ Error packaging extension:', error.message);
  process.exit(1);
}

