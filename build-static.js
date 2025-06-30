#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building static files for deployment...');

try {
  // Ensure clean dist directory
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  fs.mkdirSync('dist', { recursive: true });
  fs.mkdirSync('dist/assets', { recursive: true });

  // Create optimized index.html
  const htmlContent = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kenylson Rent-Car - Aluguel de Carros Premium em Luanda</title>
  <meta name="description" content="Aluguel de carros premium em Luanda, Angola. Frota moderna, preços competitivos e atendimento 24h. Reserve já pelo WhatsApp!" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .hero-gradient { background: linear-gradient(135deg, #1a1a1a 0%, #2d5a27 100%); }
    .card-glass { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
    // Kenylson Rent-Car Application
    document.addEventListener('DOMContentLoaded', function() {
      const root = document.getElementById('root');
      
      root.innerHTML = \`
        <div class="min-h-screen hero-gradient">
          <!-- Navigation -->
          <nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div class="container mx-auto px-4 py-4">
              <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-green-400">Kenylson Rent-Car</h1>
                <a href="https://wa.me/244949639932" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
                  Contato
                </a>
              </div>
            </div>
          </nav>

          <!-- Hero Section -->
          <div class="pt-20 pb-16">
            <div class="container mx-auto px-4 text-center">
              <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Aluguel de Carros
                  <span class="text-green-400">Premium</span>
                  em Luanda
                </h1>
                <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                  Frota moderna, preços competitivos e atendimento 24h. 
                  Sua jornada começa aqui com segurança e conforto.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/244949639932?text=Olá! Gostaria de alugar um carro." 
                     class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                    📱 Reserve pelo WhatsApp
                  </a>
                  <a href="#frota" 
                     class="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all">
                    Ver Frota
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Services Section -->
          <div class="py-16 bg-black/20">
            <div class="container mx-auto px-4">
              <h2 class="text-4xl font-bold text-center mb-12 text-white">Nossos Serviços</h2>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center p-6 card-glass rounded-lg">
                  <div class="text-4xl mb-4">🚗</div>
                  <h3 class="text-xl font-bold mb-4 text-white">Carros Executivos</h3>
                  <p class="text-gray-300">Veículos premium para executivos e eventos especiais</p>
                </div>
                <div class="text-center p-6 card-glass rounded-lg">
                  <div class="text-4xl mb-4">🛡️</div>
                  <h3 class="text-xl font-bold mb-4 text-white">Seguro Completo</h3>
                  <p class="text-gray-300">Proteção total para sua tranquilidade</p>
                </div>
                <div class="text-center p-6 card-glass rounded-lg">
                  <div class="text-4xl mb-4">⏰</div>
                  <h3 class="text-xl font-bold mb-4 text-white">Atendimento 24h</h3>
                  <p class="text-gray-300">Suporte completo a qualquer hora do dia</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Fleet Section -->
          <div id="frota" class="py-16">
            <div class="container mx-auto px-4">
              <h2 class="text-4xl font-bold text-center mb-12 text-white">Nossa Frota</h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card-glass rounded-lg overflow-hidden">
                  <div class="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span class="text-6xl">🚙</span>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-white">Toyota RAV4</h3>
                    <p class="text-gray-300 mb-4">SUV confortável para família</p>
                    <p class="text-2xl font-bold text-green-400">15.000 Kz/dia</p>
                  </div>
                </div>
                <div class="card-glass rounded-lg overflow-hidden">
                  <div class="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span class="text-6xl">🚗</span>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-white">BMW Série 3</h3>
                    <p class="text-gray-300 mb-4">Sedan executivo premium</p>
                    <p class="text-2xl font-bold text-green-400">25.000 Kz/dia</p>
                  </div>
                </div>
                <div class="card-glass rounded-lg overflow-hidden">
                  <div class="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span class="text-6xl">🏎️</span>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-white">Mercedes-Benz C-Class</h3>
                    <p class="text-gray-300 mb-4">Luxo e performance</p>
                    <p class="text-2xl font-bold text-green-400">35.000 Kz/dia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="py-16 bg-black/20">
            <div class="container mx-auto px-4 text-center">
              <h2 class="text-4xl font-bold mb-8 text-white">Entre em Contato</h2>
              <div class="max-w-2xl mx-auto card-glass rounded-lg p-8">
                <p class="text-lg mb-6 text-gray-300">
                  📍 Luanda, Angola<br>
                  📞 +244 949 639 932<br>
                  ⏰ Atendimento 24 horas
                </p>
                <a href="https://wa.me/244949639932?text=Olá! Gostaria de mais informações sobre aluguel de carros." 
                   class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-block">
                  💬 Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <footer class="py-8 bg-black/40">
            <div class="container mx-auto px-4 text-center">
              <p class="text-gray-400">© 2025 Kenylson Rent-Car. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      \`;

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    });
  </script>
</body>
</html>`;

  fs.writeFileSync('dist/index.html', htmlContent);
  
  // Create a simple robots.txt
  fs.writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /');
  
  console.log('Static build complete!');
  console.log('Files created:');
  console.log('- dist/index.html');
  console.log('- dist/robots.txt');

} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}