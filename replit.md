# Kenylson Rent-Car Web Application

## Overview

This is a modern car rental web application built with React and Express.js, featuring a premium car rental business landing page with contact form functionality. The application uses a monorepo structure with shared TypeScript schemas, modern UI components from shadcn/ui, and a PostgreSQL database for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components based on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and responsive design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth page transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API with JSON responses
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless connection
- **Fallback**: In-memory storage implementation for development

## Key Components

### Landing Page Sections
1. **Hero Section**: Full-screen banner with call-to-action buttons
2. **Services Section**: Premium services showcase with animations
3. **Fleet Section**: Car catalog with detailed vehicle information
4. **Testimonials Section**: Customer reviews and ratings
5. **Contact Section**: Contact form with validation and submission
6. **Footer**: Company information and social media links

### Contact Management System
- Contact form with comprehensive validation (name, email, phone, dates, car type)
- Form submissions stored in PostgreSQL database
- Admin endpoint to retrieve all contact requests
- Toast notifications for user feedback

### UI Component Library
- Complete shadcn/ui component set including forms, dialogs, navigation
- Responsive design components with mobile-first approach
- Accessible components following ARIA guidelines
- Custom brand theming with green accent color

## Data Flow

1. **User Interaction**: Users navigate the landing page and fill out contact forms
2. **Form Validation**: Client-side validation using Zod schemas before submission
3. **API Request**: Form data sent to Express.js backend via TanStack Query
4. **Data Processing**: Backend validates data and stores in PostgreSQL
5. **Response Handling**: Success/error responses displayed via toast notifications
6. **Admin Access**: Separate endpoint allows retrieval of all contact requests

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Web Framework**: Express.js
- **Database**: Drizzle ORM with Neon Database serverless
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production builds

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server with HMR and Replit integration
- **ESLint**: Code quality and consistency
- **Replit Integration**: Development banner and cartographer plugin

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- Express server with TypeScript execution via tsx
- In-memory storage fallback for rapid prototyping
- Replit-specific development tools and banners

### Production Build
- Frontend built with Vite to static assets in `dist/public`
- Backend compiled with esbuild to single ESM bundle
- Static file serving from Express for SPA routing
- PostgreSQL database via Neon serverless connection

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development mode switching via `NODE_ENV`
- Flexible deployment supporting various hosting platforms

## Changelog

- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.