#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

console.log('🔄 Forçando atualização completa do Vercel...');

try {
  // Limpar completamente o diretório dist
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
    console.log('🧹 Diretório dist limpo');
  }
  
  fs.mkdirSync('dist', { recursive: true });

  // Versão com timestamp para forçar atualização
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  // HTML completo com todos os estilos e animações processados
  const fullHTML = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kenylson Rent-Car - Aluguel de Carros Premium em Luanda</title>
  <meta name="description" content="Aluguel de carros premium em Luanda, Angola. Frota moderna, preços competitivos e atendimento 24h. Reserve já pelo WhatsApp!" />
  <meta name="timestamp" content="${timestamp}" />
  
  <!-- Fontes -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'brand-green': '#26A69A',
            'brand-green-dark': '#00695C',
            'brand-black': '#1A1A2E',
            'brand-black-light': '#16213E',
          },
          fontFamily: {
            'sans': ['Inter', 'system-ui', 'sans-serif'],
          },
          animation: {
            'fade-in': 'fadeIn 0.8s ease-out forwards',
            'slide-in-left': 'slideInLeft 1s ease-out forwards',
            'slide-in-right': 'slideInRight 1s ease-out forwards',
            'scale-in': 'scaleIn 0.6s ease-out forwards',
            'float': 'float 3s ease-in-out infinite',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-50px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translateX(50px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            scaleIn: {
              '0%': { opacity: '0', transform: 'scale(0.8)' },
              '100%': { opacity: '1', transform: 'scale(1)' }
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          }
        }
      }
    }
  </script>
  
  <style>
    /* Reset e configurações base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --brand-green: #26A69A;
      --brand-green-dark: #00695C;
      --brand-black: #1A1A2E;
      --brand-black-light: #16213E;
      --gradient-primary: linear-gradient(135deg, #26A69A 0%, #00695C 100%);
      --gradient-overlay: linear-gradient(135deg, rgba(38, 166, 154, 0.9) 0%, rgba(26, 26, 46, 0.8) 100%);
    }
    
    body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      scroll-behavior: smooth;
    }
    
    /* Backgrounds e overlays */
    .hero-bg {
      background-image: url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
    
    .gradient-overlay {
      background: var(--gradient-overlay);
    }
    
    /* Botões customizados */
    .btn-primary {
      background: var(--gradient-primary);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(38, 166, 154, 0.3);
    }
    
    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(38, 166, 154, 0.4);
      filter: brightness(1.1);
    }
    
    .btn-secondary {
      background: white;
      color: var(--brand-black);
      border: 2px solid var(--brand-green);
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .btn-secondary:hover {
      background: var(--brand-green);
      color: white;
      transform: translateY(-2px);
    }
    
    /* Cards com animações */
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .card-hover:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    /* Animações de entrada */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }
    
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Cores personalizadas */
    .text-brand-green { color: var(--brand-green); }
    .text-brand-black { color: var(--brand-black); }
    .bg-brand-green { background-color: var(--brand-green); }
    .bg-brand-black { background-color: var(--brand-black); }
    
    /* Navegação fixa */
    .navbar-blur {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.95);
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
      .hero-bg {
        background-attachment: scroll;
      }
    }
    
    /* Scrollbar personalizada */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: var(--brand-green);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: var(--brand-green-dark);
    }
  </style>
</head>
<body class="antialiased">
  <!-- Navegação -->
  <nav class="fixed top-0 w-full navbar-blur shadow-lg z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-brand-green">Kenylson</h1>
            <p class="text-xs text-gray-600 -mt-1">Rent-Car</p>
          </div>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#inicio" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors duration-200">Início</a>
            <a href="#servicos" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors duration-200">Serviços</a>
            <a href="#frota" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors duration-200">Frota</a>
            <a href="#depoimentos" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors duration-200">Depoimentos</a>
            <a href="#contato" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors duration-200">Contato</a>
          </div>
        </div>
        
        <div class="hidden md:block">
          <a href="https://wa.me/244949639932" class="btn-primary text-sm">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </a>
        </div>
        
        <!-- Menu mobile -->
        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-gray-900 hover:text-brand-green">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="inicio" class="relative min-h-screen flex items-center justify-center hero-bg">
    <div class="absolute inset-0 gradient-overlay"></div>
    <div class="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div class="animate-fade-in">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Aluguel de Carros <span class="text-brand-green">Premium</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Explore Luanda com conforto e estilo. Frota moderna, preços competitivos e atendimento 24h.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#frota" class="btn-primary text-lg px-8 py-4">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Ver Nossa Frota
          </a>
          <a href="https://wa.me/244949639932" class="btn-secondary text-lg px-8 py-4">
            Reservar Agora
          </a>
        </div>
      </div>
    </div>
    
    <!-- Seta para baixo -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#servicos" class="text-white hover:text-brand-green transition-colors">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  </section>

  <!-- Serviços -->
  <section id="servicos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
          Nossos Serviços
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Oferecemos soluções completas de aluguel de carros para todas as suas necessidades
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover animate-on-scroll">
          <div class="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-black">Atendimento 24h</h3>
          <p class="text-gray-600 leading-relaxed">Suporte completo 24 horas por dia, 7 dias por semana para sua total tranquilidade.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover animate-on-scroll" style="animation-delay: 0.1s">
          <div class="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-black">Seguro Incluído</h3>
          <p class="text-gray-600 leading-relaxed">Todos os nossos veículos possuem seguro completo para sua máxima proteção.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover animate-on-scroll" style="animation-delay: 0.2s">
          <div class="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-black">Entrega Gratuita</h3>
          <p class="text-gray-600 leading-relaxed">Entregamos seu carro onde você estiver em Luanda, sem custo adicional.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover animate-on-scroll" style="animation-delay: 0.3s">
          <div class="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-black">Preços Competitivos</h3>
          <p class="text-gray-600 leading-relaxed">Oferecemos os melhores preços do mercado com qualidade garantida.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover animate-on-scroll" style="animation-delay: 0.4s">
          <div class="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-black">Reserva Rápida</h3>
          <p class="text-gray-600 leading-relaxed">Processo de reserva simples e rápido via WhatsApp ou telefone.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover animate-on-scroll" style="animation-delay: 0.5s">
          <div class="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-black">Frota Moderna</h3>
          <p class="text-gray-600 leading-relaxed">Veículos novos e bem conservados para sua segurança e conforto.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Frota -->
  <section id="frota" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
          Nossa Frota Premium
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Veículos de alta qualidade para todas as ocasiões e necessidades
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-on-scroll">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="SUV Premium" class="w-full h-56 object-cover">
            <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              Premium
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-brand-black">SUV Premium</h3>
            <p class="text-gray-600 mb-4">Ideal para famílias e viagens longas com máximo conforto</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-brand-green">45.000 Kz<span class="text-sm text-gray-500">/dia</span></span>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
            <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o SUV Premium por 45.000 Kz/dia" class="btn-primary w-full justify-center">
              Reservar Agora
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-on-scroll" style="animation-delay: 0.1s">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sedan Executivo" class="w-full h-56 object-cover">
            <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              Executivo
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-brand-black">Sedan Executivo</h3>
            <p class="text-gray-600 mb-4">Perfeito para eventos corporativos e negócios</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-brand-green">35.000 Kz<span class="text-sm text-gray-500">/dia</span></span>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
            <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o Sedan Executivo por 35.000 Kz/dia" class="btn-primary w-full justify-center">
              Reservar Agora
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-on-scroll" style="animation-delay: 0.2s">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Hatchback Econômico" class="w-full h-56 object-cover">
            <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              Econômico
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-brand-black">Hatchback Econômico</h3>
            <p class="text-gray-600 mb-4">Excelente opção para uso urbano e economia</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-brand-green">25.000 Kz<span class="text-sm text-gray-500">/dia</span></span>
              <div class="flex text-yellow-400">
                ★★★★☆
              </div>
            </div>
            <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o Hatchback Econômico por 25.000 Kz/dia" class="btn-primary w-full justify-center">
              Reservar Agora
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-on-scroll" style="animation-delay: 0.3s">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1551830820-330a71b0cd04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pickup Resistente" class="w-full h-56 object-cover">
            <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              Trabalho
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-brand-black">Pickup Resistente</h3>
            <p class="text-gray-600 mb-4">Ideal para trabalho pesado e aventuras</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-brand-green">50.000 Kz<span class="text-sm text-gray-500">/dia</span></span>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
            <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar a Pickup Resistente por 50.000 Kz/dia" class="btn-primary w-full justify-center">
              Reservar Agora
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-on-scroll" style="animation-delay: 0.4s">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Minivan Familiar" class="w-full h-56 object-cover">
            <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              Familiar
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-brand-black">Minivan Familiar</h3>
            <p class="text-gray-600 mb-4">Amplo espaço para toda a família</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-brand-green">55.000 Kz<span class="text-sm text-gray-500">/dia</span></span>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
            <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar a Minivan Familiar por 55.000 Kz/dia" class="btn-primary w-full justify-center">
              Reservar Agora
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-on-scroll" style="animation-delay: 0.5s">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1567810359778-97be1ba5c92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Conversível Luxo" class="w-full h-56 object-cover">
            <div class="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              Luxo
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-brand-black">Conversível Luxo</h3>
            <p class="text-gray-600 mb-4">Para ocasiões especiais e momentos únicos</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-brand-green">75.000 Kz<span class="text-sm text-gray-500">/dia</span></span>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
            <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o Conversível Luxo por 75.000 Kz/dia" class="btn-primary w-full justify-center">
              Reservar Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Depoimentos -->
  <section id="depoimentos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
          O que nossos clientes dizem
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Depoimentos reais de clientes satisfeitos com nossos serviços
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 animate-on-scroll">
          <div class="flex items-center mb-6">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="João Silva" class="w-16 h-16 rounded-full mr-4 object-cover">
            <div>
              <h4 class="font-bold text-brand-black">João Silva</h4>
              <p class="text-gray-500 text-sm">Empresário</p>
              <div class="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic leading-relaxed">"Excelente serviço! Carro impecável e atendimento nota 10. Já virei cliente fiel da Kenylson!"</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 animate-on-scroll" style="animation-delay: 0.1s">
          <div class="flex items-center mb-6">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b5ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Maria Santos" class="w-16 h-16 rounded-full mr-4 object-cover">
            <div>
              <h4 class="font-bold text-brand-black">Maria Santos</h4>
              <p class="text-gray-500 text-sm">Advogada</p>
              <div class="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic leading-relaxed">"Processo simples e rápido. Entregaram o carro na minha casa sem demora. Super recomendo!"</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 animate-on-scroll" style="animation-delay: 0.2s">
          <div class="flex items-center mb-6">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Carlos Mendes" class="w-16 h-16 rounded-full mr-4 object-cover">
            <div>
              <h4 class="font-bold text-brand-black">Carlos Mendes</h4>
              <p class="text-gray-500 text-sm">Engenheiro</p>
              <div class="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic leading-relaxed">"Preços justos e veículos de excelente qualidade. Já é minha terceira vez alugando aqui!"</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contato -->
  <section id="contato" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
          Entre em Contato
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Pronto para reservar seu carro? Entre em contato conosco agora mesmo!
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="animate-on-scroll">
          <h3 class="text-2xl font-bold mb-8 text-brand-black">Informações de Contato</h3>
          
          <div class="space-y-6">
            <div class="flex items-center p-4 bg-gray-50 rounded-xl">
              <div class="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-brand-black">Endereço</h4>
                <p class="text-gray-600">Rua Marechal Brás Tito, Luanda, Angola</p>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-gray-50 rounded-xl">
              <div class="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-brand-black">Telefone</h4>
                <p class="text-gray-600">+244 949 639 932</p>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-gray-50 rounded-xl">
              <div class="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-brand-black">Horário</h4>
                <p class="text-gray-600">24h por dia, 7 dias por semana</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <a href="https://wa.me/244949639932" class="btn-primary text-lg px-6 py-4">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
        
        <div class="animate-on-scroll">
          <form id="contactForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-brand-black mb-2">Nome Completo</label>
                <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all">
              </div>
              
              <div>
                <label for="email" class="block text-sm font-semibold text-brand-black mb-2">Email</label>
                <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all">
              </div>
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-semibold text-brand-black mb-2">Telefone</label>
              <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="startDate" class="block text-sm font-semibold text-brand-black mb-2">Data de Início</label>
                <input type="date" id="startDate" name="startDate" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all">
              </div>
              <div>
                <label for="endDate" class="block text-sm font-semibold text-brand-black mb-2">Data de Término</label>
                <input type="date" id="endDate" name="endDate" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all">
              </div>
            </div>
            
            <div>
              <label for="carType" class="block text-sm font-semibold text-brand-black mb-2">Tipo de Carro</label>
              <select id="carType" name="carType" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all">
                <option value="">Selecione um tipo</option>
                <option value="suv">SUV Premium - 45.000 Kz/dia</option>
                <option value="sedan">Sedan Executivo - 35.000 Kz/dia</option>
                <option value="hatchback">Hatchback Econômico - 25.000 Kz/dia</option>
                <option value="pickup">Pickup Resistente - 50.000 Kz/dia</option>
                <option value="minivan">Minivan Familiar - 55.000 Kz/dia</option>
                <option value="convertible">Conversível Luxo - 75.000 Kz/dia</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-semibold text-brand-black mb-2">Mensagem (Opcional)</label>
              <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="Conte-nos mais sobre suas necessidades..."></textarea>
            </div>
            
            <button type="submit" class="w-full btn-primary text-lg py-4 justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-brand-black text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-2">
          <h3 class="text-3xl font-bold text-brand-green mb-6">Kenylson Rent-Car</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Sua melhor escolha para aluguel de carros em Luanda. Oferecemos veículos de qualidade superior, 
            atendimento excepcional e preços competitivos para todas as suas necessidades.
          </p>
          <div class="flex space-x-4">
            <a href="https://wa.me/244949639932" class="text-brand-green hover:text-white transition-colors duration-200 transform hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-xl font-bold mb-6 text-brand-green">Links Rápidos</h4>
          <ul class="space-y-3">
            <li><a href="#inicio" class="text-gray-300 hover:text-brand-green transition-colors duration-200">Início</a></li>
            <li><a href="#servicos" class="text-gray-300 hover:text-brand-green transition-colors duration-200">Serviços</a></li>
            <li><a href="#frota" class="text-gray-300 hover:text-brand-green transition-colors duration-200">Frota</a></li>
            <li><a href="#depoimentos" class="text-gray-300 hover:text-brand-green transition-colors duration-200">Depoimentos</a></li>
            <li><a href="#contato" class="text-gray-300 hover:text-brand-green transition-colors duration-200">Contato</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xl font-bold mb-6 text-brand-green">Contato</h4>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +244 949 639 932
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Rua Marechal Brás Tito, Luanda
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              24h por dia, 7 dias por semana
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-12 pt-8 text-center">
        <p class="text-gray-300">
          &copy; 2025 Kenylson Rent-Car. Todos os direitos reservados. | Desenvolvido com ❤️ em Angola
        </p>
      </div>
    </div>
  </footer>

  <!-- JavaScript -->
  <script>
    // Contact form handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Format WhatsApp message
      const message = \`🚗 *Solicitação de Reserva - Kenylson Rent-Car*

📝 *Nome:* \${data.name}
📧 *Email:* \${data.email}
📱 *Telefone:* \${data.phone}
📅 *Data de Início:* \${data.startDate}
📅 *Data de Término:* \${data.endDate}
🚙 *Tipo de Carro:* \${data.carType}

💬 *Mensagem:*
\${data.message || 'Nenhuma mensagem adicional'}

Aguardo retorno para confirmar a reserva. Obrigado!\`;
      
      // Redirect to WhatsApp
      const whatsappUrl = \`https://wa.me/244949639932?text=\${encodeURIComponent(message)}\`;
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      alert('Redirecionando para o WhatsApp! Sua solicitação será enviada automaticamente.');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function() {
        // Add mobile menu functionality here if needed
        alert('Menu mobile em desenvolvimento');
      });
    }

    // Add some dynamic effects
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  </script>
</body>
</html>`;

  // Escrever o arquivo HTML com timestamp único
  fs.writeFileSync('dist/index.html', fullHTML);
  console.log('📄 HTML atualizado com timestamp:', timestamp);

  // Criar package.json com versão atualizada
  const packageJson = {
    name: "kenylson-rentcar",
    version: "2.0.0",
    type: "module",
    timestamp: timestamp
  };
  fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));

  // Criar robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://kenylson-rentcar.vercel.app/sitemap.xml
`;
  fs.writeFileSync('dist/robots.txt', robotsTxt);

  // Verificar o build
  const stats = fs.statSync('dist/index.html');
  console.log('📊 index.html: ' + stats.size + ' bytes');
  console.log('✅ Versão atualizada criada com sucesso!');
  console.log('🚀 Nova versão pronta para deploy no Vercel!');
  
} catch (error) {
  console.error('❌ Erro ao criar versão atualizada:', error);
  process.exit(1);
}