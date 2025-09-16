import { ProductService } from '../models/productService.js';

export class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  // GET /api/products
  getProducts = async (req, res) => {
    try {
      const { page = 1, limit = 10, search = '', sort = 'product', order = 'asc' } = req.query;
      
      // Validate parameters
      const pageNum = parseInt(page);
      const limitNum = parseInt(limit);
      
      if (isNaN(pageNum) || pageNum < 1) {
        return res.status(400).json({
          error: 'Invalid page parameter. Must be a positive integer.'
        });
      }
      
      if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
        return res.status(400).json({
          error: 'Invalid limit parameter. Must be between 1 and 100.'
        });
      }

      const result = await this.productService.getProducts({
        page: pageNum,
        limit: limitNum,
        search: search.toString(),
        sort: sort.toString(),
        order: order.toString()
      });

      res.json(result);
    } catch (error) {
      console.error('Error in getProducts:', error);
      res.status(500).json({
        error: 'Internal server error while fetching products'
      });
    }
  };

  // GET /api/products/:id
  getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const productId = parseInt(id);
      
      if (isNaN(productId)) {
        return res.status(400).json({
          error: 'Invalid product ID. Must be a number.'
        });
      }

      const product = await this.productService.getProductById(productId);
      
      if (!product) {
        return res.status(404).json({
          error: 'Product not found'
        });
      }

      res.json(product);
    } catch (error) {
      console.error('Error in getProductById:', error);
      res.status(500).json({
        error: 'Internal server error while fetching product'
      });
    }
  };

  // GET /api/products/search/:query
  searchProducts = async (req, res) => {
    try {
      const { query } = req.params;
      const { page = 1, limit = 10 } = req.query;
      
      if (!query || query.trim().length === 0) {
        return res.status(400).json({
          error: 'Search query is required'
        });
      }

      const pageNum = parseInt(page);
      const limitNum = parseInt(limit);
      
      if (isNaN(pageNum) || pageNum < 1) {
        return res.status(400).json({
          error: 'Invalid page parameter. Must be a positive integer.'
        });
      }
      
      if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
        return res.status(400).json({
          error: 'Invalid limit parameter. Must be between 1 and 100.'
        });
      }

      const result = await this.productService.searchProducts({
        query: query.trim(),
        page: pageNum,
        limit: limitNum
      });

      res.json(result);
    } catch (error) {
      console.error('Error in searchProducts:', error);
      res.status(500).json({
        error: 'Internal server error while searching products'
      });
    }
  };

  // GET /api/products/stats/overview
  getProductStats = async (req, res) => {
    try {
      const stats = await this.productService.getProductStats();
      res.json(stats);
    } catch (error) {
      console.error('Error in getProductStats:', error);
      res.status(500).json({
        error: 'Internal server error while fetching product statistics'
      });
    }
  };
}
