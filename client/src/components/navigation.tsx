import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-black">
              <span className="text-brand-green">Kenylson</span> Rent-Car
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: "Início", id: "home" },
                { name: "Serviços", id: "services" },
                { name: "Frota", id: "fleet" },
                { name: "Depoimentos", id: "testimonials" },
                { name: "Contato", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-brand-black hover:text-brand-green transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-white px-6 py-2 rounded-full font-semibold"
            >
              Reservar Agora
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-black hover:text-brand-green p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: "Início", id: "home" },
              { name: "Serviços", id: "services" },
              { name: "Frota", id: "fleet" },
              { name: "Depoimentos", id: "testimonials" },
              { name: "Contato", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-brand-black hover:text-brand-green"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="block mx-3 mt-4 btn-primary text-white px-6 py-2 rounded-full font-semibold text-center w-[calc(100%-1.5rem)]"
            >
              Reservar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
