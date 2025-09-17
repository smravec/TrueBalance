# Tiny Button App

A modern React application with a beautiful UI built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 🔄 React Query for data fetching and caching
- 🧭 React Router for navigation
- 📱 Responsive design

## 🏗️ Project Structure

```
tiny-button-app/
├── src/                    # React app source
│   ├── components/         # Reusable UI components
│   │   └── ui/            # shadcn/ui components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   └── assets/            # Static assets
├── public/                # Public assets
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd tiny-button-app
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The app will be available at http://localhost:8080

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 UI Components

This project uses shadcn/ui components with Tailwind CSS for styling. All components are located in `src/components/ui/`.

### Available Components
- Button, Card, Input, Select
- Dialog, Sheet, Toast
- Table, Tabs, Accordion
- And many more...

## 📊 Data

The application includes sample product data in `src/assets/products_100.csv` containing product information with VAT, pricing, descriptions, and company details.

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React SWC plugin for fast compilation and hot module replacement.

### Tailwind CSS
Tailwind CSS is configured with custom design tokens and animations for a modern look.

### TypeScript
Full TypeScript support with strict type checking and modern ES6+ features.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Preview Production Build
```bash
npm run preview
```

## 📝 LicenseMIT License