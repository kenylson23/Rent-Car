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

  // Create optimized index.html with original styling
  const htmlContent = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kenylson Rent-Car - Aluguel de Carros Premium em Luanda</title>
  <meta name="description" content="Aluguel de carros premium em Luanda, Angola. Frota moderna, preços competitivos e atendimento 24h. Reserve já pelo WhatsApp!" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand-green: hsl(158, 64%, 52%);
      --brand-green-dark: hsl(158, 64%, 42%);
      --brand-black: hsl(222, 84%, 4.9%);
      --brand-black-light: hsl(222, 47%, 11%);
    }
    
    body {
      font-family: "Inter", sans-serif;
    }
    
    .hero-bg {
      background-image: url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
    
    .gradient-overlay {
      background: linear-gradient(135deg, hsl(158, 64%, 52%, 0.9) 0%, hsl(222, 84%, 4.9%, 0.8) 100%);
    }
    
    .btn-primary {
      background: linear-gradient(135deg, var(--brand-green) 0%, var(--brand-green-dark) 100%);
      transition: all 0.3s ease;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 35px hsl(158, 64%, 52%, 0.4);
    }
    
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .text-brand-green { color: var(--brand-green); }
    .text-brand-black { color: var(--brand-black); }
    .bg-brand-green { background-color: var(--brand-green); }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .animate-float {
      animation: float 2s ease-in-out infinite;
    }
    
    .scroll-smooth { scroll-behavior: smooth; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
    // Kenylson Rent-Car Application
    document.addEventListener('DOMContentLoaded', function() {
      const root = document.getElementById('root');
      
      root.innerHTML = \`
        <div class="min-h-screen overflow-x-hidden scroll-smooth">
          <!-- Navigation -->
          <nav class="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                  <h1 class="text-2xl font-bold text-brand-black">
                    <span class="text-brand-green">Kenylson</span> Rent-Car
                  </h1>
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-8">
                    <a href="#home" class="text-brand-black hover:text-brand-green transition-colors duration-300 font-medium">Início</a>
                    <a href="#services" class="text-brand-black hover:text-brand-green transition-colors duration-300 font-medium">Serviços</a>
                    <a href="#fleet" class="text-brand-black hover:text-brand-green transition-colors duration-300 font-medium">Frota</a>
                    <a href="#testimonials" class="text-brand-black hover:text-brand-green transition-colors duration-300 font-medium">Depoimentos</a>
                    <a href="#contact" class="text-brand-black hover:text-brand-green transition-colors duration-300 font-medium">Contato</a>
                  </div>
                </div>
                <div class="hidden md:block">
                  <a href="#contact" class="btn-primary text-white px-6 py-2 rounded-full font-semibold">
                    Reservar Agora
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <!-- Hero Section -->
          <section id="home" class="hero-bg min-h-screen flex items-center relative">
            <div class="gradient-overlay absolute inset-0"></div>
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div class="text-center">
                <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Aluguel de Carros
                  <span class="text-brand-green block">Premium</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Experimente o luxo e conforto com nossa frota exclusiva de veículos premium em Luanda. 
                  Atendimento personalizado para uma experiência inesquecível em Angola.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#fleet" class="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center hover:scale-105 transition-transform">
                    🚗 Ver Nossa Frota
                  </a>
                  <a href="#contact" class="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center">
                    📞 Fazer Reserva
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
              <svg class="text-white w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </section>

          <!-- Services Section -->
          <section id="services" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  Nossos <span class="text-brand-green">Serviços</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                  Oferecemos soluções completas em aluguel de veículos com qualidade premium e atendimento excepcional
                </p>
              </div>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                       alt="Serviço Premium" 
                       class="rounded-xl mb-6 w-full h-48 object-cover" />
                  <div class="text-brand-green text-4xl mb-4">👑</div>
                  <h3 class="text-2xl font-bold text-brand-black mb-4">Serviço Premium</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Atendimento personalizado com entrega e retirada no local de sua escolha. Experiência única para clientes exigentes.
                  </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                       alt="Frota Renovada" 
                       class="rounded-xl mb-6 w-full h-48 object-cover" />
                  <div class="text-brand-green text-4xl mb-4">🚗</div>
                  <h3 class="text-2xl font-bold text-brand-black mb-4">Frota Renovada</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Veículos novos e seminovos das melhores marcas, sempre revisados e em perfeito estado de conservação.
                  </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                       alt="Segurança Total" 
                       class="rounded-xl mb-6 w-full h-48 object-cover" />
                  <div class="text-brand-green text-4xl mb-4">🛡️</div>
                  <h3 class="text-2xl font-bold text-brand-black mb-4">Segurança Total</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Todos os veículos com seguro completo e assistência 24h. Sua tranquilidade é nossa prioridade.
                  </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <div class="text-brand-green text-4xl mb-4">⏰</div>
                  <h3 class="text-2xl font-bold text-brand-black mb-4">Flexibilidade Total</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Planos de aluguel flexíveis: diário, semanal, mensal ou por período personalizado. Adapte-se às suas necessidades.
                  </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <div class="text-brand-green text-4xl mb-4">🎧</div>
                  <h3 class="text-2xl font-bold text-brand-black mb-4">Suporte 24/7</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Atendimento disponível 24 horas por dia, 7 dias por semana. Estamos sempre prontos para te ajudar.
                  </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <div class="text-brand-green text-4xl mb-4">💳</div>
                  <h3 class="text-2xl font-bold text-brand-black mb-4">Preços Justos</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Tarifas competitivas sem taxas ocultas. Transparência total em todos os nossos serviços.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Fleet Section -->
          <section id="fleet" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  Nossa <span class="text-brand-green">Frota</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                  Conheça nossa seleção exclusiva de veículos premium para todas as ocasiões
                </p>
              </div>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                       alt="Sedan Executivo" 
                       class="w-full h-64 object-cover" />
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-brand-black">Sedan Executivo</h3>
                      <div class="text-brand-green font-bold text-xl">85.000 Kz/dia</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Perfeito para executivos e ocasiões especiais. Conforto e elegância em cada detalhe.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">👥 5 lugares</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">⚙️ Automático</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">❄️ Ar Condicionado</span>
                    </div>
                    <a href="#contact" class="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform block">
                      Reservar Agora
                    </a>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                       alt="SUV Premium" 
                       class="w-full h-64 object-cover" />
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-brand-black">SUV Premium</h3>
                      <div class="text-brand-green font-bold text-xl">105.000 Kz/dia</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Ideal para famílias e viagens. Espaço, segurança e performance em um só veículo.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">👥 7 lugares</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">⚙️ Automático</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">🏗️ 4x4</span>
                    </div>
                    <a href="#contact" class="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform block">
                      Reservar Agora
                    </a>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                       alt="Compacto Econômico" 
                       class="w-full h-64 object-cover" />
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-brand-black">Compacto Econômico</h3>
                      <div class="text-brand-green font-bold text-xl">58.000 Kz/dia</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Economia e praticidade para o dia a dia. Perfeito para a cidade e viagens curtas.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">👥 5 lugares</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">🍃 Econômico</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">❄️ Ar Condicionado</span>
                    </div>
                    <a href="#contact" class="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform block">
                      Reservar Agora
                    </a>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                       alt="Esportivo Luxury" 
                       class="w-full h-64 object-cover" />
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-brand-black">Esportivo Luxury</h3>
                      <div class="text-brand-green font-bold text-xl">165.000 Kz/dia</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Para ocasiões especiais que merecem um carro único. Potência e sofisticação.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">👥 2 lugares</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">⚡ Performance</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">⭐ Premium</span>
                    </div>
                    <a href="#contact" class="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform block">
                      Reservar Agora
                    </a>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                       alt="Van Executiva" 
                       class="w-full h-64 object-cover" />
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-brand-black">Van Executiva</h3>
                      <div class="text-brand-green font-bold text-xl">135.000 Kz/dia</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Máximo conforto para grupos grandes. Ideal para viagens corporativas e familiares.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">👥 12 lugares</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">📶 Wi-Fi</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">🪑 Conforto</span>
                    </div>
                    <a href="#contact" class="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform block">
                      Reservar Agora
                    </a>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                  <img src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                       alt="Elétrico Eco" 
                       class="w-full h-64 object-cover" />
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-brand-black">Elétrico Eco</h3>
                      <div class="text-brand-green font-bold text-xl">95.000 Kz/dia</div>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Sustentabilidade e tecnologia avançada. O futuro da mobilidade disponível hoje.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">👥 5 lugares</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">⚡ Elétrico</span>
                      <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">🍃 Sustentável</span>
                    </div>
                    <a href="#contact" class="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform block">
                      Reservar Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Testimonials Section -->
          <section id="testimonials" class="py-20 bg-brand-black text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">
                  O que nossos <span class="text-brand-green">clientes</span> dizem
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experiências reais de quem confia na Kenylson Rent-Car para suas necessidades de mobilidade
                </p>
              </div>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div class="flex items-center mb-6">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                         alt="António Mendes" 
                         class="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <h4 class="text-xl font-bold">António Mendes</h4>
                      <p class="text-brand-green">Empresário</p>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p class="text-gray-200">
                    "Serviço excepcional em Luanda! O carro estava impecável e o atendimento foi profissional do início ao fim. Recomendo a Kenylson para quem busca qualidade em Angola."
                  </p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div class="flex items-center mb-6">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                         alt="Maria João" 
                         class="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <h4 class="text-xl font-bold">Maria João</h4>
                      <p class="text-brand-green">Advogada</p>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p class="text-gray-200">
                    "Já aluguei carros em várias empresas em Luanda, mas a Kenylson se destaca pela transparência nos preços e pela qualidade dos veículos. Virei cliente fiel!"
                  </p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div class="flex items-center mb-6">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                         alt="Dr. Paulo Afonso" 
                         class="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <h4 class="text-xl font-bold">Dr. Paulo Afonso</h4>
                      <p class="text-brand-green">Médico</p>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p class="text-gray-200">
                    "O atendimento 24h salvou minha viagem por Angola! Tive um pequeno problema e foram super rápidos para resolver. Empresa de confiança total."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Contact Section -->
          <section id="contact" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  Entre em <span class="text-brand-green">Contato</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                  Faça sua reserva agora e experimente o melhor em aluguel de carros premium em Luanda
                </p>
              </div>
              
              <div class="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 class="text-2xl font-bold text-brand-black mb-6">Informações de Contato</h3>
                  <div class="space-y-6">
                    <div class="flex items-start">
                      <div class="bg-brand-green text-white p-3 rounded-lg mr-4">
                        📍
                      </div>
                      <div>
                        <h4 class="font-semibold text-brand-black">Endereço</h4>
                        <p class="text-gray-600">Luanda, Angola</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="bg-brand-green text-white p-3 rounded-lg mr-4">
                        📞
                      </div>
                      <div>
                        <h4 class="font-semibold text-brand-black">Telefone</h4>
                        <p class="text-gray-600">+244 949 639 932</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="bg-brand-green text-white p-3 rounded-lg mr-4">
                        ⏰
                      </div>
                      <div>
                        <h4 class="font-semibold text-brand-black">Horário</h4>
                        <p class="text-gray-600">24 horas por dia, 7 dias por semana</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-8">
                    <a href="https://wa.me/244949639932?text=Olá! Gostaria de fazer uma reserva na Kenylson Rent-Car." 
                       class="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center hover:scale-105 transition-transform">
                      💬 Reservar via WhatsApp
                    </a>
                  </div>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 class="text-2xl font-bold text-brand-black mb-6">Faça sua Reserva</h3>
                  <form class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-brand-black mb-2">Nome Completo</label>
                        <input type="text" 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" 
                               placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-brand-black mb-2">Email</label>
                        <input type="email" 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" 
                               placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-brand-black mb-2">Telefone</label>
                        <input type="tel" 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" 
                               placeholder="+244 000 000 000" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-brand-black mb-2">Tipo de Veículo</label>
                        <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
                          <option>Selecione o tipo</option>
                          <option>Sedan Executivo</option>
                          <option>SUV Premium</option>
                          <option>Compacto Econômico</option>
                          <option>Esportivo Luxury</option>
                          <option>Van Executiva</option>
                          <option>Elétrico Eco</option>
                        </select>
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-brand-black mb-2">Data de Retirada</label>
                        <input type="date" 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-brand-black mb-2">Data de Devolução</label>
                        <input type="date" 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-brand-black mb-2">Mensagem (Opcional)</label>
                      <textarea rows="4" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" 
                                placeholder="Informações adicionais sobre sua reserva..."></textarea>
                    </div>
                    <button type="button" 
                            onclick="submitForm()"
                            class="btn-primary text-white px-8 py-4 rounded-full font-semibold w-full hover:scale-105 transition-transform">
                      📧 Enviar Solicitação
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <!-- Footer -->
          <footer class="py-12 bg-brand-black text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 class="text-2xl font-bold mb-4">
                    <span class="text-brand-green">Kenylson</span> Rent-Car
                  </h3>
                  <p class="text-gray-300">
                    Sua melhor opção em aluguel de carros premium em Luanda, Angola.
                  </p>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-4">Links Rápidos</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li><a href="#home" class="hover:text-brand-green transition-colors">Início</a></li>
                    <li><a href="#services" class="hover:text-brand-green transition-colors">Serviços</a></li>
                    <li><a href="#fleet" class="hover:text-brand-green transition-colors">Frota</a></li>
                    <li><a href="#contact" class="hover:text-brand-green transition-colors">Contato</a></li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-4">Contato</h4>
                  <ul class="space-y-2 text-gray-300">
                    <li>📍 Luanda, Angola</li>
                    <li>📞 +244 949 639 932</li>
                    <li>⏰ 24h por dia</li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-4">Redes Sociais</h4>
                  <div class="flex space-x-4">
                    <a href="#" class="text-gray-300 hover:text-brand-green transition-colors">📘</a>
                    <a href="#" class="text-gray-300 hover:text-brand-green transition-colors">📷</a>
                    <a href="#" class="text-gray-300 hover:text-brand-green transition-colors">🐦</a>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Kenylson Rent-Car. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>

          <!-- WhatsApp Float Button -->
          <a href="https://wa.me/244949639932" 
             target="_blank" 
             rel="noopener noreferrer"
             class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
            </svg>
          </a>
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

      // Form submission function for WhatsApp integration
      window.submitForm = function() {
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input, select, textarea');
        
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const carType = form.querySelector('select').value;
        const pickupDate = form.querySelectorAll('input[type="date"]')[0].value;
        const returnDate = form.querySelectorAll('input[type="date"]')[1].value;
        const message = form.querySelector('textarea').value;

        if (!name || !phone || !carType || !pickupDate || !returnDate) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return;
        }

        const whatsappMessage = \`Olá! Gostaria de fazer uma reserva na Kenylson Rent-Car:

📝 *Dados da Reserva:*
• Nome: \${name}
• Email: \${email}
• Telefone: \${phone}
• Tipo de Veículo: \${carType}
• Data de Retirada: \${pickupDate}
• Data de Devolução: \${returnDate}
\${message ? \`• Observações: \${message}\` : ''}

Aguardo confirmação da disponibilidade e valores. Obrigado!\`;

        const whatsappUrl = \`https://wa.me/244949639932?text=\${encodeURIComponent(whatsappMessage)}\`;
        window.open(whatsappUrl, '_blank');
      };
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