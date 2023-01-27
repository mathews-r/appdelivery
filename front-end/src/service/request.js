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
    async getSales() {
      const response = await axios.get('http://localhost:3001/sales/');
      return response;
    },
    async getSaleById(id) {
      const response = await axios.get(`http://localhost:3001/sales/${id}`);
      return response;
    },
  },
};

export default api;
