import fs from 'fs';

try {
  console.log('Forçando deploy do design original React...');
  
  // Clean dist directory completely
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  fs.mkdirSync('dist', { recursive: true });

  // Read the original CSS from React components
  const originalCSS = fs.readFileSync('client/src/index.css', 'utf8');

  // Create HTML with EXACT original React component code - zero modifications
  const htmlContent = `<!DOCTYPE html>
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
          }
        }
      }
    }
  </script>
  <style>
    /* Original CSS from client/src/index.css - UNMODIFIED */
    ${originalCSS}
  </style>
</head>
<body>
  <!-- EXACT COPY of original React components structure -->
  <div class="min-h-screen overflow-x-hidden">
    <!-- Navigation Component -->
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
            <a href="#contact" class="btn-primary text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
              Reservar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section Component -->
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
            <button onclick="document.getElementById('fleet').scrollIntoView({behavior: 'smooth'})" class="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center hover:scale-105 transition-transform">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0"/>
              </svg>
              Ver Nossa Frota
            </button>
            <button onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})" class="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Fazer Reserva
            </button>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <svg class="text-white w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Services Section Component -->
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
                 alt="Serviço Premium" class="rounded-xl mb-6 w-full h-48 object-cover">
            <div class="text-brand-green text-4xl mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-black mb-4">Serviço Premium</h3>
            <p class="text-gray-600 leading-relaxed">
              Atendimento personalizado com entrega e retirada no local de sua escolha. Experiência única para clientes exigentes.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                 alt="Frota Renovada" class="rounded-xl mb-6 w-full h-48 object-cover">
            <div class="text-brand-green text-4xl mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-black mb-4">Frota Renovada</h3>
            <p class="text-gray-600 leading-relaxed">
              Veículos novos e seminovos das melhores marcas, sempre revisados e em perfeito estado de conservação.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                 alt="Segurança Total" class="rounded-xl mb-6 w-full h-48 object-cover">
            <div class="text-brand-green text-4xl mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-black mb-4">Segurança Total</h3>
            <p class="text-gray-600 leading-relaxed">
              Todos os veículos com seguro completo e assistência 24h. Sua tranquilidade é nossa prioridade.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="text-brand-green text-4xl mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-black mb-4">Flexibilidade Total</h3>
            <p class="text-gray-600 leading-relaxed">
              Planos de aluguel flexíveis: diário, semanal, mensal ou por período personalizado. Adapte-se às suas necessidades.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="text-brand-green text-4xl mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-black mb-4">Suporte 24/7</h3>
            <p class="text-gray-600 leading-relaxed">
              Atendimento disponível 24 horas por dia, 7 dias por semana. Estamos sempre prontos para te ajudar.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="text-brand-green text-4xl mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-black mb-4">Preços Justos</h3>
            <p class="text-gray-600 leading-relaxed">
              Tarifas competitivas sem taxas ocultas. Transparência total em todos os nossos serviços.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Section Component -->
    <section id="fleet" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Nossa <span class="text-brand-green">Frota</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Veículos premium cuidadosamente selecionados para oferecer máximo conforto, segurança e estilo
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                 alt="Sedan Executivo" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-brand-black mb-2">Sedan Executivo</h3>
              <p class="text-3xl font-bold text-brand-green mb-4">85.000 Kz/dia</p>
              <p class="text-gray-600 mb-4">Perfeito para executivos e ocasiões especiais. Conforto e elegância em cada detalhe.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                  5 lugares
                </span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Automático</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Ar Condicionado</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                 alt="SUV Premium" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-brand-black mb-2">SUV Premium</h3>
              <p class="text-3xl font-bold text-brand-green mb-4">105.000 Kz/dia</p>
              <p class="text-gray-600 mb-4">Ideal para famílias e viagens. Espaço, segurança e performance em um só veículo.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">7 lugares</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Automático</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">4x4</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                 alt="Compacto Econômico" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-brand-black mb-2">Compacto Econômico</h3>
              <p class="text-3xl font-bold text-brand-green mb-4">58.000 Kz/dia</p>
              <p class="text-gray-600 mb-4">Economia e praticidade para o dia a dia. Perfeito para a cidade e viagens curtas.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">5 lugares</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Econômico</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Ar Condicionado</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                 alt="Esportivo Luxury" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-brand-black mb-2">Esportivo Luxury</h3>
              <p class="text-3xl font-bold text-brand-green mb-4">165.000 Kz/dia</p>
              <p class="text-gray-600 mb-4">Para ocasiões especiais que merecem um carro único. Potência e sofisticação.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">2 lugares</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Performance</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Premium</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                 alt="Van Executiva" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-brand-black mb-2">Van Executiva</h3>
              <p class="text-3xl font-bold text-brand-green mb-4">125.000 Kz/dia</p>
              <p class="text-gray-600 mb-4">Ideal para grupos grandes e eventos corporativos. Conforto e praticidade combinados.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">8 lugares</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Wi-Fi</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Poltronas</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1617469165786-8007eda377b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                 alt="Pickup Premium" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-brand-black mb-2">Pickup Premium</h3>
              <p class="text-3xl font-bold text-brand-green mb-4">95.000 Kz/dia</p>
              <p class="text-gray-600 mb-4">Robustez e elegância para trabalho e lazer. Versatilidade para qualquer situação.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">5 lugares</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">4x4</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Caçamba</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section Component -->
    <section id="testimonials" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            O que nossos <span class="text-brand-green">clientes dizem</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiências reais de clientes satisfeitos com nossos serviços premium de aluguel de carros
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                   alt="João Silva" class="w-12 h-12 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-brand-black">João Silva</h4>
                <p class="text-gray-600 text-sm">Empresário</p>
              </div>
            </div>
            <div class="flex mb-4">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
              "Excelente serviço! O carro estava impecável e o atendimento foi excepcional. Recomendo a todos que precisam de um aluguel premium em Luanda."
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                   alt="Maria Santos" class="w-12 h-12 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-brand-black">Maria Santos</h4>
                <p class="text-gray-600 text-sm">Advogada</p>
              </div>
            </div>
            <div class="flex mb-4">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
              "Profissionalismo do início ao fim. O SUV que aluguei estava perfeito para nossa viagem em família. Voltarei sempre!"
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                   alt="Carlos Mendes" class="w-12 h-12 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-brand-black">Carlos Mendes</h4>
                <p class="text-gray-600 text-sm">Consultor</p>
              </div>
            </div>
            <div class="flex mb-4">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
              "Atendimento 24h realmente funciona! Tive um pequeno problema tarde da noite e foram super prestativos. Empresa de confiança!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section Component -->
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Reserve seu <span class="text-brand-green">veículo</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp para finalizar sua reserva
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <form class="bg-gray-50 rounded-2xl p-8 shadow-lg" onsubmit="handleWhatsAppRedirect(); return false;">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" placeholder="+244 9XX XXX XXX">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Veículo *</label>
                <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
                  <option value="">Selecione o veículo</option>
                  <option value="Sedan Executivo">Sedan Executivo - 85.000 Kz/dia</option>
                  <option value="SUV Premium">SUV Premium - 105.000 Kz/dia</option>
                  <option value="Compacto Econômico">Compacto Econômico - 58.000 Kz/dia</option>
                  <option value="Esportivo Luxury">Esportivo Luxury - 165.000 Kz/dia</option>
                  <option value="Van Executiva">Van Executiva - 125.000 Kz/dia</option>
                  <option value="Pickup Premium">Pickup Premium - 95.000 Kz/dia</option>
                </select>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Data de Retirada *</label>
                <input type="date" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Data de Devolução *</label>
                <input type="date" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent">
              </div>
            </div>
            
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Observações</label>
              <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent" placeholder="Informações adicionais sobre sua reserva..."></textarea>
            </div>
            
            <button type="submit" class="w-full btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
              Enviar Reserva via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <footer class="bg-brand-black text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4">
              <span class="text-brand-green">Kenylson</span> Rent-Car
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Sua empresa de confiança para aluguel de carros premium em Luanda. 
              Oferecemos veículos de qualidade com atendimento excepcional desde 2020.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-brand-green transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-brand-green transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-brand-green transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-xl font-bold mb-4">Contato</h4>
            <div class="space-y-2 text-gray-300">
              <p class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Luanda, Angola
              </p>
              <p class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +244 949 639 932
              </p>
              <p class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contato@kenylsonrentcar.ao
              </p>
            </div>
          </div>
          
          <div>
            <h4 class="text-xl font-bold mb-4">Horário</h4>
            <div class="space-y-2 text-gray-300">
              <p>Segunda - Sexta: 8:00 - 18:00</p>
              <p>Sábado: 8:00 - 14:00</p>
              <p>Domingo: Fechado</p>
              <p class="text-brand-green font-semibold">Emergência: 24h</p>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
          <p class="text-gray-300">
            © 2024 Kenylson Rent-Car. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Float Button Component -->
    <a 
      href="https://wa.me/244949639932" 
      target="_blank" 
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
      </svg>
    </a>
  </div>

  <script>
    // EXACT functionality from original React components
    function handleWhatsAppRedirect() {
      const form = document.querySelector('form');
      
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
    }
  </script>
</body>
</html>`;

  fs.writeFileSync('dist/index.html', htmlContent);
  
  // Create package.json
  const packageJson = {
    "name": "kenylson-rent-car-original",
    "version": "1.0.0",
    "description": "Aluguel de carros premium em Luanda, Angola - Design Original React",
    "main": "index.html",
    "scripts": {
      "start": "echo 'Original React design deployed'"
    },
    "keywords": ["car rental", "luanda", "angola", "premium cars", "original"],
    "author": "Kenylson Rent-Car",
    "license": "MIT"
  };
  
  fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));
  
  // Create robots.txt
  fs.writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /');
  
  console.log('Forçando deploy do design original React - CONCLUÍDO!');
  console.log('Cache limpo e design original aplicado com força total.');
  
} catch (error) {
  console.error('Erro no deploy forçado:', error.message);
  process.exit(1);
}