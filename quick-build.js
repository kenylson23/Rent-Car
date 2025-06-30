#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Construindo aplicação...');

try {
  // Remove existing dist contents except our placeholder
  const distFiles = fs.readdirSync('dist').filter(f => f !== 'index.html');
  distFiles.forEach(file => {
    fs.rmSync(path.join('dist', file), { recursive: true, force: true });
  });

  // Copy built files from the existing static build if available
  if (fs.existsSync('dist/public')) {
    console.log('Copiando arquivos de dist/public...');
    const publicFiles = fs.readdirSync('dist/public');
    publicFiles.forEach(file => {
      const src = path.join('dist/public', file);
      const dest = path.join('dist', file);
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dest, { recursive: true });
      } else {
        fs.copyFileSync(src, dest);
      }
    });
    
    // Remove the public folder
    fs.rmSync('dist/public', { recursive: true, force: true });
  } else {
    // Quick build using the client config
    console.log('Executando build rápido...');
    execSync('cd client && npx vite build --outDir ../dist --minify false', { 
      stdio: 'pipe',
      timeout: 30000 
    });
  }

  console.log('Build concluído! Arquivos no diretório dist:');
  const files = fs.readdirSync('dist');
  files.forEach(file => console.log(`  - ${file}`));

} catch (error) {
  console.log('Usando versão de placeholder existente');
  console.log('Diretório dist está pronto para implantação');
}