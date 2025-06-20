# Manuel de Deus Portfolio - Replit.md

## Overview

This is a modern fullstack portfolio website built for Manuel de Deus, showcasing his skills as a Fullstack Developer and Network Specialist. The application features a React frontend with a Node.js/Express backend, designed to present his professional experience and enable contact through a functional contact form.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system and CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API architecture
- **Data Validation**: Zod for schema validation
- **Development**: Hot reload with custom Vite integration

### Data Storage Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Development Storage**: In-memory storage for contact messages
- **Production Ready**: PostgreSQL database schema defined but not yet connected
- **Migration System**: Drizzle migrations in `/migrations` directory

## Key Components

### 1. Portfolio Sections
- **Hero Section**: Introduction with call-to-action buttons
- **Skills Section**: Categorized display of technical and soft skills
- **Projects Section**: Showcase of 6 key projects with descriptions and technologies
- **Contact Section**: Functional contact form with validation

### 2. Contact System
- **Form Validation**: Client-side and server-side validation using Zod
- **API Endpoint**: `/api/contact` for form submissions
- **Error Handling**: Comprehensive error handling with user feedback
- **Toast Notifications**: User feedback for form submission status

### 3. UI Components
- **Design System**: shadcn/ui component library with custom theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom scroll animations and fade-in effects
- **Navigation**: Smooth scrolling navigation with active section highlighting

### 4. Database Schema
```typescript
contactMessages table:
- id (serial, primary key)
- name (text, required)
- email (text, required)  
- subject (text, required)
- message (text, required)
- createdAt (timestamp, auto-generated)
```

## Data Flow

1. **Client Interaction**: User navigates portfolio sections and fills contact form
2. **Form Submission**: React form validates data client-side using Zod schema
3. **API Request**: TanStack Query sends validated data to `/api/contact` endpoint
4. **Server Processing**: Express route validates data again and stores in memory/database
5. **Response Handling**: Client receives success/error response and shows toast notification
6. **Data Persistence**: Contact messages stored for future review (currently in-memory)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **State Management**: TanStack Query for API state
- **Styling**: Tailwind CSS, class-variance-authority
- **Utilities**: date-fns, clsx, embla-carousel

### Backend Dependencies
- **Core**: Express.js, Drizzle ORM
- **Database**: @neondatabase/serverless (configured but not active)
- **Validation**: Zod with drizzle-zod integration
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type coverage with strict configuration
- **Linting**: ESNext modules with bundler resolution
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, PostgreSQL 16 modules
- **Port Configuration**: Backend runs on port 5000, mapped to external port 80
- **Hot Reload**: Vite development server with custom middleware integration
- **File Serving**: Static files served from `/dist/public` in production

### Production Build Process
1. **Frontend Build**: Vite compiles React app to `/dist/public`
2. **Backend Build**: esbuild bundles server code to `/dist/index.js`
3. **Asset Optimization**: Automatic optimization and minification
4. **Deployment**: Autoscale deployment target on Replit

### Environment Configuration
- **Development**: `npm run dev` - runs development server with hot reload
- **Production**: `npm run build && npm run start` - builds and runs production server
- **Database**: `npm run db:push` - pushes schema changes to database

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```