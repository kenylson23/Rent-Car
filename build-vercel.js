#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for Vercel with proper CSS processing...');

try {
  // Clean dist directory completely
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  fs.mkdirSync('dist', { recursive: true });

  console.log('Building client with Vite (this processes CSS correctly)...');
  
  // First, build the client properly with Vite
  // This will process the Tailwind CSS and generate the proper CSS files
  process.chdir('client');
  execSync('npx vite build', { stdio: 'inherit' });
  process.chdir('..');

  // Copy the built files from client/dist to root dist
  if (fs.existsSync('client/dist')) {
    console.log('Copying built files to dist directory...');
    
    // Copy all files from client/dist to root dist
    const clientDistFiles = fs.readdirSync('client/dist');
    clientDistFiles.forEach(file => {
      const srcPath = path.join('client/dist', file);
      const destPath = path.join('dist', file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
    
    console.log('Files copied successfully!');
  } else {
    throw new Error('client/dist directory not found after build');
  }

  // Create package.json for Vercel
  const packageJson = {
    name: "kenylson-rentcar",
    version: "1.0.0",
    type: "module"
  };
  fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));

  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://kenylson-rentcar.vercel.app/sitemap.xml
`;
  fs.writeFileSync('dist/robots.txt', robotsTxt);

  // Verify the build
  console.log('\nVerifying build files...');
  const distFiles = fs.readdirSync('dist', { withFileTypes: true });
  distFiles.forEach(file => {
    const type = file.isDirectory() ? '[DIR]' : '[FILE]';
    const filePath = path.join('dist', file.name);
    const size = file.isDirectory() ? '' : ` (${fs.statSync(filePath).size} bytes)`;
    console.log(`  ${type} ${file.name}${size}`);
  });

  console.log('\n✅ Build completo! Pronto para deploy no Vercel.');
  
} catch (error) {
  console.error('❌ Erro durante o build:', error);
  process.exit(1);
}