# Kenylson Rent-Car - Landing Page

Uma landing page moderna e elegante para empresa de aluguel de carros em Angola (Luanda).

## Características

- Design responsivo com animações espetaculares
- Esquema de cores verde e preto
- Integração com WhatsApp para reservas
- Formulário de contato otimizado
- Preços em Kwanza angolano
- Adaptado para mercado angolano

## Tecnologias

- React 18 com TypeScript
- Vite para build e desenvolvimento
- Tailwind CSS para estilização
- Framer Motion para animações
- React Hook Form com validação Zod
- Componentes shadcn/ui

## Deploy no Vercel

Este projeto está configurado para deploy estático no Vercel:

1. Conecte o repositório ao Vercel
2. O `vercel.json` já está configurado
3. Build automático da pasta `client/`
4. Deploy direto para produção

### Estrutura para Deploy

```
client/
├── src/               # Código fonte React
├── package.json       # Dependências standalone
├── vite.config.ts     # Configuração Vite
└── dist/             # Build final (gerado automaticamente)
```

### Comandos

```bash
cd client
npm install
npm run build    # Build para produção
npm run dev      # Desenvolvimento local
```

## Funcionalidades

- **Hero Section**: Banner principal com call-to-action
- **Serviços**: Showcase dos serviços premium
- **Frota**: Catálogo de veículos com preços
- **Depoimentos**: Reviews de clientes
- **Contato**: Formulário integrado com WhatsApp

## WhatsApp Integration

Formulário redireciona automaticamente para WhatsApp (+244 949639932) com dados formatados:
- Nome do cliente
- Email e telefone
- Datas de retirada/devolução  
- Tipo de veículo
- Mensagem opcional

## Preços

- Carros Econômicos: 58.000 Kz/dia
- Carros Premium: 95.000 Kz/dia
- SUVs Luxo: 165.000 Kz/dia

## Contato

- **Endereço**: Rua Amílcar Cabral, 123, Luanda, Angola
- **WhatsApp**: +244 949639932
- **Email**: info@kenylsonrentcar.ao