import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class ProductService {
  constructor() {
    this.products = [];
    this.csvPath = path.join(__dirname, '../data/products_100.csv');
    this.loadProducts();
  }

  loadProducts() {
    try {
      const csvData = fs.readFileSync(this.csvPath, 'utf-8');
      const lines = csvData.split('\n').filter(line => line.trim());
      const headers = lines[0].split(',').map(header => header.trim());
      
      this.products = lines.slice(1).map((line, index) => {
        const values = line.split(',').map(value => value.trim());
        return {
          id: index,
          vat: values[0] || '',
          price: values[1] || '',
          product: values[2] || '',
          description: values[3] || '',
          company: values[4] || ''
        };
      });
      
      console.log(`✅ Loaded ${this.products.length} products from CSV`);
    } catch (error) {
      console.error('❌ Error loading products:', error);
      this.products = [];
    }
  }

  async getProducts({ page = 1, limit = 10, search = '', sort = 'product', order = 'asc' }) {
    let filteredProducts = [...this.products];

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.product.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.company.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    filteredProducts.sort((a, b) => {
      let aValue = a[sort] || '';
      let bValue = b[sort] || '';
      
      // Handle numeric sorting for price
      if (sort === 'price') {
        aValue = parseFloat(aValue.replace(/[^\d.-]/g, '')) || 0;
        bValue = parseFloat(bValue.replace(/[^\d.-]/g, '')) || 0;
      } else {
        aValue = aValue.toString().toLowerCase();
        bValue = bValue.toString().toLowerCase();
      }

      if (order === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      } else {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      }
    });

    // Apply pagination
    const total = filteredProducts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      filters: {
        search,
        sort,
        order
      }
    };
  }

  async getProductById(id) {
    return this.products.find(product => product.id === id) || null;
  }

  async searchProducts({ query, page = 1, limit = 10 }) {
    const searchLower = query.toLowerCase();
    const filteredProducts = this.products.filter(product =>
      product.product.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.company.toLowerCase().includes(searchLower)
    );

    const total = filteredProducts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      search: {
        query,
        results: total
      }
    };
  }

  async getProductStats() {
    const totalProducts = this.products.length;
    
    // Calculate price statistics
    const prices = this.products
      .map(p => parseFloat(p.price.replace(/[^\d.-]/g, '')))
      .filter(price => !isNaN(price));
    
    const avgPrice = prices.length > 0 ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

    // Company statistics
    const companies = [...new Set(this.products.map(p => p.company))];
    
    // VAT statistics
    const vatRates = [...new Set(this.products.map(p => p.vat))];

    return {
      totalProducts,
      priceStats: {
        average: Math.round(avgPrice * 100) / 100,
        min: minPrice,
        max: maxPrice,
        currency: 'EUR'
      },
      companies: {
        total: companies.length,
        list: companies
      },
      vatRates: {
        total: vatRates.length,
        rates: vatRates
      },
      lastUpdated: new Date().toISOString()
    };
  }
}
