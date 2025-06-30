import { motion } from "framer-motion";
import { Car, Phone, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative">
      <div className="gradient-overlay absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Aluguel de Carros
            <span className="text-brand-green block">Premium</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experimente o luxo e conforto com nossa frota exclusiva de veículos premium em Luanda. 
            Atendimento personalizado para uma experiência inesquecível em Angola.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={() => scrollToSection("fleet")}
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Car className="mr-3" size={20} />
              Ver Nossa Frota
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="mr-3" size={20} />
              Fazer Reserva
            </button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
}
