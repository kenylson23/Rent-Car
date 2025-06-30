import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Car, Shield, Clock, Headphones, CreditCard } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Serviço Premium",
    description: "Atendimento personalizado com entrega e retirada no local de sua escolha. Experiência única para clientes exigentes.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: Car,
    title: "Frota Renovada",
    description: "Veículos novos e seminovos das melhores marcas, sempre revisados e em perfeito estado de conservação.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Todos os veículos com seguro completo e assistência 24h. Sua tranquilidade é nossa prioridade.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description: "Planos de aluguel flexíveis: diário, semanal, mensal ou por período personalizado. Adapte-se às suas necessidades."
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento disponível 24 horas por dia, 7 dias por semana. Estamos sempre prontos para te ajudar."
  },
  {
    icon: CreditCard,
    title: "Preços Justos",
    description: "Tarifas competitivas sem taxas ocultas. Transparência total em todos os nossos serviços."
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Nossos <span className="text-brand-green">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em aluguel de veículos com qualidade premium e atendimento excepcional
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.image && (
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-xl mb-6 w-full h-48 object-cover"
                />
              )}
              <div className="text-brand-green text-4xl mb-4">
                <service.icon />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
