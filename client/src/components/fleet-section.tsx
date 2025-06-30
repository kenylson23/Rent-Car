import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Settings, Snowflake, Leaf, Zap, Construction, Gauge, Star, Wifi, Armchair } from "lucide-react";

const cars = [
  {
    name: "Sedan Executivo",
    price: "R$ 180/dia",
    description: "Perfeito para executivos e ocasiões especiais. Conforto e elegância em cada detalhe.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      { icon: Users, text: "5 lugares" },
      { icon: Settings, text: "Automático" },
      { icon: Snowflake, text: "Ar Condicionado" }
    ]
  },
  {
    name: "SUV Premium",
    price: "R$ 220/dia",
    description: "Ideal para famílias e viagens. Espaço, segurança e performance em um só veículo.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      { icon: Users, text: "7 lugares" },
      { icon: Settings, text: "Automático" },
      { icon: Construction, text: "4x4" }
    ]
  },
  {
    name: "Compacto Econômico",
    price: "R$ 120/dia",
    description: "Economia e praticidade para o dia a dia. Perfeito para a cidade e viagens curtas.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      { icon: Users, text: "5 lugares" },
      { icon: Leaf, text: "Econômico" },
      { icon: Snowflake, text: "Ar Condicionado" }
    ]
  },
  {
    name: "Esportivo Luxury",
    price: "R$ 350/dia",
    description: "Para ocasiões especiais que merecem um carro único. Potência e sofisticação.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      { icon: Users, text: "2 lugares" },
      { icon: Gauge, text: "Performance" },
      { icon: Star, text: "Premium" }
    ]
  },
  {
    name: "Van Executiva",
    price: "R$ 280/dia",
    description: "Máximo conforto para grupos grandes. Ideal para viagens corporativas e familiares.",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      { icon: Users, text: "12 lugares" },
      { icon: Wifi, text: "Wi-Fi" },
      { icon: Armchair, text: "Conforto" }
    ]
  },
  {
    name: "Elétrico Eco",
    price: "R$ 200/dia",
    description: "Sustentabilidade e tecnologia avançada. O futuro da mobilidade disponível hoje.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      { icon: Users, text: "5 lugares" },
      { icon: Zap, text: "Elétrico" },
      { icon: Leaf, text: "Sustentável" }
    ]
  }
];

export default function FleetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fleet" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Nossa <span className="text-brand-green">Frota</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa seleção exclusiva de veículos premium para todas as ocasiões
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-brand-black">{car.name}</h3>
                  <div className="text-brand-green font-bold text-xl">{car.price}</div>
                </div>
                <p className="text-gray-600 mb-4">
                  {car.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium flex items-center"
                    >
                      <feature.icon size={14} className="mr-1" />
                      {feature.text}
                    </span>
                  ))}
                </div>
                <button
                  onClick={scrollToContact}
                  className="btn-primary text-white px-6 py-3 rounded-full font-semibold w-full text-center hover:scale-105 transition-transform"
                >
                  Reservar Agora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
