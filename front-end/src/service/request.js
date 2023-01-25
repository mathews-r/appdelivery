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
    async allProducts() {
      const response = await axios.get(
        'http://localhost:3001/products',
      );
      return response;
    },
  },
};

export default api;
