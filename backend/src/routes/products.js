import express from 'express';
import { ProductController } from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

// GET /api/products - Get all products with pagination and search
router.get('/', (req, res) => {
  productController.getProducts(req, res);
});

// GET /api/products/:id - Get a specific product by ID
router.get('/:id', (req, res) => {
  productController.getProductById(req, res);
});

// GET /api/products/search/:query - Search products
router.get('/search/:query', (req, res) => {
  productController.searchProducts(req, res);
});

// GET /api/products/stats - Get product statistics
router.get('/stats/overview', (req, res) => {
  productController.getProductStats(req, res);
});

export default router;
