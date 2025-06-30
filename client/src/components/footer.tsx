import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-green">Kenylson</span> Rent-Car
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Sua melhor escolha em aluguel de veículos premium. 
              Qualidade, confiança e excelência em cada quilômetro.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-brand-green transition-colors duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Início", id: "home" },
                { name: "Serviços", id: "services" },
                { name: "Nossa Frota", id: "fleet" },
                { name: "Depoimentos", id: "testimonials" },
                { name: "Contato", id: "contact" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-brand-green transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MapPin className="text-brand-green mr-2" size={16} />
                <span className="text-sm">Rua Amílcar Cabral, 85 - Luanda, Angola</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-brand-green mr-2" size={16} />
                <span className="text-sm">+244 949 639 932</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-brand-green mr-2" size={16} />
                <span className="text-sm">info@kenylsonrentcar.ao</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kenylson Rent-Car. Todos os direitos reservados. 
            <span className="text-brand-green"> Desenvolvido com excelência.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
