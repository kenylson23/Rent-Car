import fs from 'fs';
import { execSync } from 'child_process';

try {
  console.log('Criando deploy do design original React...');
  
  // Ensure dist directory exists
  fs.mkdirSync('dist', { recursive: true });
  
  // Build the React app using Vite
  console.log('Construindo aplicação React...');
  execSync('cd client && npm run build', { stdio: 'inherit' });
  
  // Copy built files to dist
  console.log('Copiando arquivos construídos...');
  execSync('cp -r client/dist/* dist/', { stdio: 'inherit' });
  
  // Create package.json for deployment
  const packageJson = {
    "name": "kenylson-rent-car",
    "version": "1.0.0",
    "description": "Aluguel de carros premium em Luanda, Angola",
    "main": "index.html",
    "scripts": {
      "start": "echo 'Static site ready for deployment'"
    },
    "keywords": ["car rental", "luanda", "angola", "premium cars"],
    "author": "Kenylson Rent-Car",
    "license": "MIT"
  };
  
  fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));
  
  // Create robots.txt
  fs.writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /');
  
  console.log('Deploy do design original React finalizado!');
  console.log('Arquivos criados no diretório dist/');
  
} catch (error) {
  console.error('Erro no build:', error.message);
  process.exit(1);
}