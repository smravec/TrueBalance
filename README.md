# Tiny Button App

A modern React + Express.js full-stack application with a beautiful UI and REST API.

## 🚀 Features

### Frontend (React + Vite)
- ⚡ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 🔄 React Query for data fetching and caching
- 🧭 React Router for navigation
- 📱 Responsive design

### Backend (Express.js)
- 🚀 Express.js REST API
- 🛡️ Security middleware (Helmet, CORS, Rate Limiting)
- 📊 Product management with CSV data source
- 🔍 Search, pagination, and sorting
- 📈 Statistics endpoints
- 🏥 Health monitoring

## 🏗️ Project Structure

```
tiny-button-app/
├── src/                    # Frontend React app
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utilities
├── backend/               # Express.js API
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   └── middleware/    # Custom middleware
│   └── data/              # Data files
└── package.json           # Root workspace config
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

2. **Install backend dependencies:**
```bash
npm run install:backend
```

3. **Start development servers:**
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3001

### Individual Commands

**Frontend only:**
```bash
npm run dev:frontend
```

**Backend only:**
```bash
npm run dev:backend
```

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Basic health check
- `GET /api/health/detailed` - Detailed system info

### Products
- `GET /api/products` - Get products (with pagination, search, sorting)
- `GET /api/products/:id` - Get specific product
- `GET /api/products/search/:query` - Search products
- `GET /api/products/stats/overview` - Product statistics

### Example API Usage

```javascript
// Get products with pagination
fetch('http://localhost:3001/api/products?page=1&limit=10&search=laptop')

// Search products
fetch('http://localhost:3001/api/products/search/smartphone')

// Get product statistics
fetch('http://localhost:3001/api/products/stats/overview')
```

## 🛠️ Development

### Frontend Development
The frontend uses Vite for fast development with hot module replacement.

### Backend Development
The backend uses nodemon for automatic restart during development.

### Adding New Features

1. **Frontend**: Add components in `src/components/` and pages in `src/pages/`
2. **Backend**: Add routes in `backend/src/routes/` and controllers in `backend/src/controllers/`

## 🚀 Deployment

### Frontend
```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend
```bash
cd backend
npm start
# Deploy to your server or cloud platform
```

## 📦 Available Scripts

- `npm run dev` - Start both frontend and backend
- `npm run dev:frontend` - Start only frontend
- `npm run dev:backend` - Start only backend
- `npm run build` - Build frontend for production
- `npm run start:backend` - Start backend in production mode
- `npm run install:backend` - Install backend dependencies

## 🎨 UI Components

This project uses shadcn/ui components with Tailwind CSS for styling. All components are located in `src/components/ui/`.

## 📊 Data

The application uses CSV data from `backend/src/data/products_100.csv` containing product information with VAT, pricing, descriptions, and company details.

## 🔧 Configuration

### Environment Variables

**Backend** (`backend/.env`):
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment
- `FRONTEND_URL` - Frontend URL for CORS

## 📝 License

MIT License