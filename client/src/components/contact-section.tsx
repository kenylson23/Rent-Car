import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  pickupDate: z.string().min(1, "Data de retirada é obrigatória"),
  returnDate: z.string().min(1, "Data de devolução é obrigatória"),
  carType: z.string().min(1, "Tipo de veículo é obrigatório"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pickupDate: "",
      returnDate: "",
      carType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response, variables) => {
      // Construir mensagem para WhatsApp
      const message = `Olá! Gostaria de fazer uma reserva na Kenylson Rent-Car:

📝 *Dados da Reserva:*
• Nome: ${variables.name}
• Email: ${variables.email}
• Telefone: ${variables.phone}
• Data de Retirada: ${variables.pickupDate}
• Data de Devolução: ${variables.returnDate}
• Tipo de Veículo: ${variables.carType}
${variables.message ? `• Mensagem: ${variables.message}` : ''}

Aguardo retorno para finalizar a reserva. Obrigado!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/244949639932?text=${encodedMessage}`;
      
      toast({
        title: "Sucesso!",
        description: "Redirecionando para WhatsApp para finalizar sua reserva...",
      });
      
      // Aguardar um pouco para mostrar o toast e então redirecionar
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
      
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao enviar solicitação. Tente novamente.",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Entre em <span className="text-brand-green">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Faça sua reserva ou tire suas dúvidas conosco
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-black mb-6">Faça sua Reserva</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(11) 99999-9999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="pickupDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de Retirada</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="returnDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de Devolução</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="carType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Veículo</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo de veículo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="compact">Compacto Econômico</SelectItem>
                            <SelectItem value="sedan">Sedan Executivo</SelectItem>
                            <SelectItem value="suv">SUV Premium</SelectItem>
                            <SelectItem value="sports">Esportivo Luxury</SelectItem>
                            <SelectItem value="van">Van Executiva</SelectItem>
                            <SelectItem value="electric">Elétrico Eco</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos mais sobre suas necessidades..." 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="btn-primary text-white px-8 py-4 rounded-lg font-semibold w-full transition-all duration-300"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="mr-2" size={20} />
                    {contactMutation.isPending ? "Enviando..." : "Enviar Solicitação"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-8">
              <div className="bg-brand-green rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Endereço</h4>
                      <p>Rua Amílcar Cabral, 85 - Luanda, Angola</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Telefone</h4>
                      <p>+244 949 639 932</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">E-mail</h4>
                      <p>info@kenylsonrentcar.ao</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Horário de Funcionamento</h4>
                      <p>24 horas por dia, 7 dias por semana</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-brand-black mb-6">Siga-nos nas Redes Sociais</h3>
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
                      className="bg-brand-green hover:bg-brand-green-dark text-white p-4 rounded-lg transition-all duration-300 card-hover"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
