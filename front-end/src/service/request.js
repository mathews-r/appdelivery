import axios from 'axios';

const api = {
  post: {
    async newAdminRegister(userData, token) {
      const response = await axios.post(
        'http://localhost:3001/register/admin',
        userData,
        { headers: { authorization: token } },
      );
      return response;
    },
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

    async createSale(token, saleData) {
      const response = await axios.post(
        'http://localhost:3001/sales',
        saleData,
        { headers: { authorization: token } },
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
    async getSales(token) {
      const response = await axios.get('http://localhost:3001/sales/', {
        headers: {
          authorization: `${token}`,
        },
      });
      return response;
    },
    async getSaleById(id, token) {
      const response = await axios.get(`http://localhost:3001/sales/${id}`, {
        headers: {
          authorization: `${token}`,
        },
      });
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
  put: {
    async updateStatus(token, status, id) {
      const response = await axios.put(
        `http://localhost:3001/sales/${id}`,
        { status },
        { headers: {
          authorization: token,
        },
        },
      );
      return response;
    },
  },
};

export default api;
