# Tiny Button App - Backend API

Express.js REST API backend for the Tiny Button App.

## Features

- 🚀 Express.js server with modern ES6+ syntax
- 🛡️ Security middleware (Helmet, CORS, Rate Limiting)
- 📊 Product management API with CSV data source
- 🔍 Search and pagination functionality
- 📈 Product statistics endpoint
- 🏥 Health check endpoints
- ⚡ Error handling and logging

## API Endpoints

### Health Check
- `GET /api/health` - Basic health check
- `GET /api/health/detailed` - Detailed system information

### Products
- `GET /api/products` - Get all products (with pagination, search, sorting)
- `GET /api/products/:id` - Get specific product by ID
- `GET /api/products/search/:query` - Search products
- `GET /api/products/stats/overview` - Get product statistics

### Query Parameters

#### GET /api/products
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10, max: 100)
- `search` - Search term
- `sort` - Sort field (product, price, company, etc.)
- `order` - Sort order (asc, desc)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

### Production

```bash
npm start
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Data models and services
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── data/            # Data files (CSV)
│   └── app.js           # Main application file
├── package.json
└── README.md
```

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:8080)

## Development

The backend uses nodemon for automatic restart during development. Any changes to the source files will automatically restart the server.
