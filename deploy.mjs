import { copyFileSync, mkdirSync, readdirSync, statSync, rmSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, 'dist');
const rootDir = __dirname;

// Files/folders to copy from dist to root
const filesToCopy = ['index.html', 'favicon.png', 'placeholder.svg', 'robots.txt'];
const foldersToCopy = ['assets'];

// Files/folders to preserve in root (don't overwrite)
const preserveInRoot = [
  'package.json',
  'package-lock.json',
  'bun.lockb',
  'node_modules',
  'src',
  'public',
  'dist',
  '.git',
  '.gitignore',
  'README.md',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'tailwind.config.ts',
  'postcss.config.js',
  'eslint.config.js',
  'components.json',
  'index.html' // We'll copy this from dist, but preserve the source
];

function copyRecursive(src, dest) {
  const stat = statSync(src);
  
  if (stat.isDirectory()) {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    const entries = readdirSync(src);
    for (const entry of entries) {
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      copyRecursive(srcPath, destPath);
    }
  } else {
    copyFileSync(src, dest);
  }
}

console.log('🚀 Deploying built files to root...\n');

// Backup source index.html before overwriting
const sourceIndexPath = join(rootDir, 'index.html');
const backupSourcePath = join(rootDir, 'index.html.source');
if (existsSync(sourceIndexPath)) {
  // Check if it's the source version (has entry script)
  const content = readFileSync(sourceIndexPath, 'utf-8');
  if (content.includes('/src/main.tsx')) {
    copyFileSync(sourceIndexPath, backupSourcePath);
    console.log('📝 Backed up source index.html\n');
  }
}

// Copy individual files
for (const file of filesToCopy) {
  const srcPath = join(distDir, file);
  const destPath = join(rootDir, file);
  
  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file}`);
  }
}

// Copy folders
for (const folder of foldersToCopy) {
  const srcPath = join(distDir, folder);
  const destPath = join(rootDir, folder);
  
  if (existsSync(srcPath)) {
    // Remove existing folder if it exists
    if (existsSync(destPath)) {
      rmSync(destPath, { recursive: true, force: true });
    }
    copyRecursive(srcPath, destPath);
    console.log(`✓ Copied ${folder}/ folder`);
  }
}

console.log('\n✅ Deployment complete! Files are ready for GitHub Pages.');
console.log('   The root index.html now has built paths for GitHub Pages.');
if (existsSync(backupSourcePath)) {
  console.log('   Source index.html backed up to index.html.source');
  console.log('   To restore for next build: cp index.html.source index.html');
}
console.log('\n📝 Next steps:');
console.log('   1. Review the changes');
console.log('   2. git add .');
console.log('   3. git commit -m "Deploy to GitHub Pages"');
console.log('   4. git push');

