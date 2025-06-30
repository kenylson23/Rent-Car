#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Construindo para implantação com diretório dist...');

try {
  // Build the client using the deployment config
  console.log('Construindo frontend...');
  execSync('npx vite build --config vite.config.deploy.ts', { stdio: 'inherit' });

  // Build the backend
  console.log('Construindo backend...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist/server', { stdio: 'inherit' });

  // Create package.json for production
  const prodPackage = {
    name: "kenylson-rent-car",
    version: "1.0.0",
    type: "module",
    scripts: {
      start: "node server/index.js"
    }
  };
  
  fs.writeFileSync('dist/package.json', JSON.stringify(prodPackage, null, 2));

  console.log('✅ Build completo! Diretório dist criado com sucesso.');
  console.log('Arquivos gerados:');
  console.log('- dist/index.html (frontend)');
  console.log('- dist/assets/ (recursos estáticos)');
  console.log('- dist/server/index.js (backend)');
  console.log('- dist/package.json (configuração de produção)');

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}