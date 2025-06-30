#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('Verificando estrutura de build...');

const requiredFiles = [
  'dist/index.html',
  'dist/robots.txt',
  'dist/package.json'
];

const requiredDirs = [
  'dist'
];

let allGood = true;

// Check directories
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✓ Diretório encontrado: ${dir}`);
  } else {
    console.log(`✗ Diretório faltando: ${dir}`);
    allGood = false;
  }
});

// Check files
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`✓ Arquivo encontrado: ${file} (${stats.size} bytes)`);
  } else {
    console.log(`✗ Arquivo faltando: ${file}`);
    allGood = false;
  }
});

// List all files in dist
if (fs.existsSync('dist')) {
  console.log('\nConteúdo do diretório dist:');
  const files = fs.readdirSync('dist', { withFileTypes: true });
  files.forEach(file => {
    const type = file.isDirectory() ? '[DIR]' : '[FILE]';
    console.log(`  ${type} ${file.name}`);
  });
}

if (allGood) {
  console.log('\n✅ Build verificado com sucesso! Pronto para deployment.');
} else {
  console.log('\n❌ Problemas encontrados na estrutura de build.');
  process.exit(1);
}