#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building static version for Vercel deployment...');

// Build the client
execSync('npx vite build', { stdio: 'inherit' });

// Create a simple index.html in root for Vercel
const indexContent = fs.readFileSync('dist/public/index.html', 'utf8');
fs.writeFileSync('index.html', indexContent);

// Copy assets
if (fs.existsSync('dist/public/assets')) {
  fs.cpSync('dist/public/assets', 'assets', { recursive: true });
}

console.log('Static build complete! Ready for Vercel deployment.');