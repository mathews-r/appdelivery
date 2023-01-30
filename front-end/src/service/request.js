import axios from 'axios';

const api = {
  post: {
    async login(userData) {
      const response = await axios.post(
        'http://localhost:3001/login',
        userData,
      );
      return response;
    },
    async register(userData) {
      const response = await axios.post(
        'http://localhost:3001/register',
        userData,
      );
      return response;
    },

    async createSale(authorization, saleData) {
      const response = await axios.post(
        'http://localhost:3001/sales',
        saleData,
        { headers: { authorization } },
      );
      return response;
    },
  },
  get: {
    async getAllProducts() {
      const response = await axios.get('http://localhost:3001/products');
      return response;
    },
    async getById(id) {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      return response;
    },
    async getAllUsers() {
      const response = await axios.get('http://localhost:3001/users');
      return response;
    },
    async getAllSaleOrders() {
      const response = await axios.get('http://localhost:3001/seller/orders');
      return response;
    },
  },
};

export default api;
