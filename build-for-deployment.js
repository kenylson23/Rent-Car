#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Construindo aplicação para implantação...');

try {
  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }

  // Build frontend directly into dist using the client vite config
  console.log('📦 Construindo frontend...');
  process.chdir('client');
  execSync('npx vite build --outDir ../dist', { stdio: 'inherit' });
  process.chdir('..');

  console.log('✅ Build concluído com sucesso!');
  console.log('📁 Arquivos criados no diretório dist:');
  
  // List contents of dist directory
  const distContents = fs.readdirSync('dist');
  distContents.forEach(file => {
    console.log(`   - ${file}`);
  });

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}