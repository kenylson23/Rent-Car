#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('Fixing Vercel deployment with proper CSS processing...');

try {
  // Clean dist directory completely
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  fs.mkdirSync('dist', { recursive: true });

  // Read the original CSS
  const originalCSS = fs.readFileSync('client/src/index.css', 'utf8');

  // Process the CSS - convert Tailwind directives to actual CSS
  const processedCSS = `
/* Processed CSS for Vercel deployment */
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(222, 84%, 4.9%);
  --muted: hsl(210, 40%, 98%);
  --muted-foreground: hsl(215.4, 16.3%, 46.9%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(222, 84%, 4.9%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(222, 84%, 4.9%);
  --border: hsl(214.3, 31.8%, 91.4%);
  --input: hsl(214.3, 31.8%, 91.4%);
  --primary: hsl(158, 64%, 52%);
  --primary-foreground: hsl(210, 40%, 98%);
  --secondary: hsl(210, 40%, 96%);
  --secondary-foreground: hsl(222.2, 84%, 4.9%);
  --accent: hsl(210, 40%, 96%);
  --accent-foreground: hsl(222.2, 84%, 4.9%);
  --destructive: hsl(0, 84.2%, 60.2%);
  --destructive-foreground: hsl(210, 40%, 98%);
  --ring: hsl(222.2, 84%, 4.9%);
  --radius: 0.5rem;
  
  /* Brand colors */
  --brand-green: hsl(158, 64%, 52%);
  --brand-green-dark: hsl(158, 64%, 42%);
  --brand-black: hsl(222, 84%, 4.9%);
  --brand-black-light: hsl(222, 47%, 11%);
}

.dark {
  --background: hsl(222, 84%, 4.9%);
  --foreground: hsl(210, 40%, 98%);
  --muted: hsl(217.2, 32.6%, 17.5%);
  --muted-foreground: hsl(215, 20.2%, 65.1%);
  --popover: hsl(222, 84%, 4.9%);
  --popover-foreground: hsl(210, 40%, 98%);
  --card: hsl(222, 84%, 4.9%);
  --card-foreground: hsl(210, 40%, 98%);
  --border: hsl(217.2, 32.6%, 17.5%);
  --input: hsl(217.2, 32.6%, 17.5%);
  --primary: hsl(158, 64%, 52%);
  --primary-foreground: hsl(222, 84%, 4.9%);
  --secondary: hsl(217.2, 32.6%, 17.5%);
  --secondary-foreground: hsl(210, 40%, 98%);
  --accent: hsl(217.2, 32.6%, 17.5%);
  --accent-foreground: hsl(210, 40%, 98%);
  --destructive: hsl(0, 62.8%, 30.6%);
  --destructive-foreground: hsl(210, 40%, 98%);
  --ring: hsl(212.7, 26.8%, 83.9%);
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

/* Custom utility classes */
.brand-green {
  color: var(--brand-green);
}

.bg-brand-green {
  background-color: var(--brand-green);
}

.bg-brand-green-dark {
  background-color: var(--brand-green-dark);
}

.bg-brand-black {
  background-color: var(--brand-black);
}

.bg-brand-black-light {
  background-color: var(--brand-black-light);
}

.text-brand-green {
  color: var(--brand-green);
}

.text-brand-black {
  color: var(--brand-black);
}

.gradient-overlay {
  background: linear-gradient(135deg, hsl(158, 64%, 52%, 0.9) 0%, hsl(222, 84%, 4.9%, 0.8) 100%);
}

.hero-bg {
  background-image: url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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

/* Fade in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Slide in from left */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

/* Slide in from right */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

/* Scale animation */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out;
}
`;

  // Read the HTML template and update it with processed CSS
  const htmlTemplate = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kenylson Rent-Car - Aluguel de Carros Premium em Luanda</title>
  <meta name="description" content="Aluguel de carros premium em Luanda, Angola. Frota moderna, preços competitivos e atendimento 24h. Reserve já pelo WhatsApp!" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'brand-green': 'hsl(158, 64%, 52%)',
            'brand-green-dark': 'hsl(158, 64%, 42%)',
            'brand-black': 'hsl(222, 84%, 4.9%)',
            'brand-black-light': 'hsl(222, 47%, 11%)',
          },
          animation: {
            'fade-in': 'fadeIn 0.6s ease-out',
            'slide-in-left': 'slideInLeft 0.8s ease-out',
            'slide-in-right': 'slideInRight 0.8s ease-out',
            'scale-in': 'scaleIn 0.5s ease-out',
          }
        }
      }
    }
  </script>
  <style>
    ${processedCSS}
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-brand-green">Kenylson</h1>
            <p class="text-xs text-gray-600">Rent-Car</p>
          </div>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#inicio" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">Início</a>
            <a href="#servicos" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">Serviços</a>
            <a href="#frota" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">Frota</a>
            <a href="#depoimentos" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">Depoimentos</a>
            <a href="#contato" class="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">Contato</a>
          </div>
        </div>
        
        <div class="hidden md:block">
          <a href="https://wa.me/244949639932" class="btn-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="inicio" class="relative min-h-screen flex items-center justify-center hero-bg">
    <div class="absolute inset-0 gradient-overlay"></div>
    <div class="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Aluguel de Carros <span class="text-brand-green">Premium</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Explore Luanda com conforto e estilo. Frota moderna, preços competitivos e atendimento 24h.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#frota" class="btn-primary px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all">
          Ver Frota
        </a>
        <a href="https://wa.me/244949639932" class="bg-white text-brand-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all">
          Reservar Agora
        </a>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="servicos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-brand-black mb-4">
          Nossos Serviços
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Oferecemos soluções completas de aluguel de carros para todas as suas necessidades
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-lg shadow-lg p-6 card-hover animate-scale-in">
          <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Atendimento 24h</h3>
          <p class="text-gray-600">Suporte completo 24 horas por dia, 7 dias por semana para sua tranquilidade.</p>
        </div>
        
        <!-- Service Card 2 -->
        <div class="bg-white rounded-lg shadow-lg p-6 card-hover animate-scale-in" style="animation-delay: 0.1s">
          <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Seguro Incluído</h3>
          <p class="text-gray-600">Todos os nossos veículos possuem seguro completo para sua proteção.</p>
        </div>
        
        <!-- Service Card 3 -->
        <div class="bg-white rounded-lg shadow-lg p-6 card-hover animate-scale-in" style="animation-delay: 0.2s">
          <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Entrega Gratuita</h3>
          <p class="text-gray-600">Entregamos seu carro onde você estiver em Luanda, sem custo adicional.</p>
        </div>
        
        <!-- Service Card 4 -->
        <div class="bg-white rounded-lg shadow-lg p-6 card-hover animate-scale-in" style="animation-delay: 0.3s">
          <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Preços Competitivos</h3>
          <p class="text-gray-600">Oferecemos os melhores preços do mercado com qualidade garantida.</p>
        </div>
        
        <!-- Service Card 5 -->
        <div class="bg-white rounded-lg shadow-lg p-6 card-hover animate-scale-in" style="animation-delay: 0.4s">
          <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Reserva Rápida</h3>
          <p class="text-gray-600">Processo de reserva simples e rápido via WhatsApp ou telefone.</p>
        </div>
        
        <!-- Service Card 6 -->
        <div class="bg-white rounded-lg shadow-lg p-6 card-hover animate-scale-in" style="animation-delay: 0.5s">
          <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Frota Moderna</h3>
          <p class="text-gray-600">Veículos novos e bem conservados para sua segurança e conforto.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Fleet Section -->
  <section id="frota" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-brand-black mb-4">
          Nossa Frota
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Veículos premium para todas as ocasiões e necessidades
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Car 1 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-in-left">
          <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="SUV Premium" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">SUV Premium</h3>
            <p class="text-gray-600 mb-4">Ideal para famílias e viagens longas</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-brand-green">45.000 Kz/dia</span>
              <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o SUV Premium por 45.000 Kz/dia" class="btn-primary px-4 py-2 rounded text-white hover:shadow-lg">
                Reservar
              </a>
            </div>
          </div>
        </div>
        
        <!-- Car 2 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-in-left" style="animation-delay: 0.1s">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sedan Executivo" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Sedan Executivo</h3>
            <p class="text-gray-600 mb-4">Perfeito para eventos e negócios</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-brand-green">35.000 Kz/dia</span>
              <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o Sedan Executivo por 35.000 Kz/dia" class="btn-primary px-4 py-2 rounded text-white hover:shadow-lg">
                Reservar
              </a>
            </div>
          </div>
        </div>
        
        <!-- Car 3 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-in-left" style="animation-delay: 0.2s">
          <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Hatchback Econômico" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Hatchback Econômico</h3>
            <p class="text-gray-600 mb-4">Ótima opção para uso urbano</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-brand-green">25.000 Kz/dia</span>
              <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o Hatchback Econômico por 25.000 Kz/dia" class="btn-primary px-4 py-2 rounded text-white hover:shadow-lg">
                Reservar
              </a>
            </div>
          </div>
        </div>
        
        <!-- Car 4 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-in-right">
          <img src="https://images.unsplash.com/photo-1551830820-330a71b0cd04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pickup Resistente" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Pickup Resistente</h3>
            <p class="text-gray-600 mb-4">Para trabalho e aventuras</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-brand-green">50.000 Kz/dia</span>
              <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar a Pickup Resistente por 50.000 Kz/dia" class="btn-primary px-4 py-2 rounded text-white hover:shadow-lg">
                Reservar
              </a>
            </div>
          </div>
        </div>
        
        <!-- Car 5 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-in-right" style="animation-delay: 0.1s">
          <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Minivan Familiar" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Minivan Familiar</h3>
            <p class="text-gray-600 mb-4">Espaço para toda a família</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-brand-green">55.000 Kz/dia</span>
              <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar a Minivan Familiar por 55.000 Kz/dia" class="btn-primary px-4 py-2 rounded text-white hover:shadow-lg">
                Reservar
              </a>
            </div>
          </div>
        </div>
        
        <!-- Car 6 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-in-right" style="animation-delay: 0.2s">
          <img src="https://images.unsplash.com/photo-1567810359778-97be1ba5c92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Conversível Luxo" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Conversível Luxo</h3>
            <p class="text-gray-600 mb-4">Para ocasiões especiais</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-brand-green">75.000 Kz/dia</span>
              <a href="https://wa.me/244949639932?text=Olá! Gostaria de reservar o Conversível Luxo por 75.000 Kz/dia" class="btn-primary px-4 py-2 rounded text-white hover:shadow-lg">
                Reservar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="depoimentos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-brand-black mb-4">
          O que nossos clientes dizem
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Depoimentos reais de clientes satisfeitos
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-lg shadow-lg p-6 animate-scale-in">
          <div class="flex items-center mb-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="João Silva" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h4 class="font-semibold">João Silva</h4>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
          <p class="text-gray-600">"Excelente serviço! Carro impecável e atendimento nota 10. Recomendo a todos!"</p>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="bg-white rounded-lg shadow-lg p-6 animate-scale-in" style="animation-delay: 0.1s">
          <div class="flex items-center mb-4">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b5ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Maria Santos" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h4 class="font-semibold">Maria Santos</h4>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
          <p class="text-gray-600">"Processos simples e rápido. Entregaram o carro na minha casa sem demora!"</p>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="bg-white rounded-lg shadow-lg p-6 animate-scale-in" style="animation-delay: 0.2s">
          <div class="flex items-center mb-4">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Carlos Mendes" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h4 class="font-semibold">Carlos Mendes</h4>
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
          <p class="text-gray-600">"Preços justos e veículos de qualidade. Já é minha segunda vez alugando!"</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contato" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-brand-black mb-4">
          Entre em Contato
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Pronto para reservar seu carro? Entre em contato conosco agora mesmo!
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="animate-slide-in-left">
          <h3 class="text-2xl font-semibold mb-6">Informações de Contato</h3>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">Endereço</h4>
                <p class="text-gray-600">Rua Marechal Brás Tito, Luanda, Angola</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">Telefone</h4>
                <p class="text-gray-600">+244 949 639 932</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">Horário</h4>
                <p class="text-gray-600">24h por dia, 7 dias por semana</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <a href="https://wa.me/244949639932" class="btn-primary inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="animate-slide-in-right">
          <form id="contactForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
              <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
              <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="startDate" class="block text-sm font-medium text-gray-700 mb-2">Data de Início</label>
                <input type="date" id="startDate" name="startDate" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
              </div>
              <div>
                <label for="endDate" class="block text-sm font-medium text-gray-700 mb-2">Data de Término</label>
                <input type="date" id="endDate" name="endDate" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
              </div>
            </div>
            
            <div>
              <label for="carType" class="block text-sm font-medium text-gray-700 mb-2">Tipo de Carro</label>
              <select id="carType" name="carType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
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
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Mensagem (Opcional)</label>
              <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"></textarea>
            </div>
            
            <button type="submit" class="w-full btn-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-brand-black text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-brand-green mb-4">Kenylson Rent-Car</h3>
          <p class="text-gray-300 mb-4">
            Sua melhor escolha para aluguel de carros em Luanda. Oferecemos veículos de qualidade, 
            atendimento excepcional e preços competitivos.
          </p>
          <div class="flex space-x-4">
            <a href="https://wa.me/244949639932" class="text-brand-green hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Links Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="#inicio" class="text-gray-300 hover:text-brand-green transition-colors">Início</a></li>
            <li><a href="#servicos" class="text-gray-300 hover:text-brand-green transition-colors">Serviços</a></li>
            <li><a href="#frota" class="text-gray-300 hover:text-brand-green transition-colors">Frota</a></li>
            <li><a href="#depoimentos" class="text-gray-300 hover:text-brand-green transition-colors">Depoimentos</a></li>
            <li><a href="#contato" class="text-gray-300 hover:text-brand-green transition-colors">Contato</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contato</h4>
          <ul class="space-y-2 text-gray-300">
            <li>+244 949 639 932</li>
            <li>Rua Marechal Brás Tito</li>
            <li>Luanda, Angola</li>
            <li>24h por dia</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-300">
          &copy; 2025 Kenylson Rent-Car. Todos os direitos reservados.
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
      const message = \`Olá! Gostaria de fazer uma reserva:

📝 Nome: \${data.name}
📧 Email: \${data.email}
📱 Telefone: \${data.phone}
📅 Data de Início: \${data.startDate}
📅 Data de Término: \${data.endDate}
🚗 Tipo de Carro: \${data.carType}
💬 Mensagem: \${data.message || 'Nenhuma mensagem adicional'}\`;
      
      // Redirect to WhatsApp
      const whatsappUrl = \`https://wa.me/244949639932?text=\${encodeURIComponent(message)}\`;
      window.open(whatsappUrl, '_blank');
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
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  </script>
</body>
</html>`;

  // Write the HTML file
  fs.writeFileSync('dist/index.html', htmlTemplate);

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

  console.log('✅ Fixed Vercel deployment with proper CSS and animations!');
  
  // Verify the build
  const stats = fs.statSync('dist/index.html');
  console.log(`📄 index.html: ${stats.size} bytes`);
  console.log('🚀 Ready for Vercel deployment!');
  
} catch (error) {
  console.error('❌ Error fixing deployment:', error);
  process.exit(1);
}