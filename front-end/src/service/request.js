import axios from 'axios';

// require('dotenv').config();

const api = {
  post: {
    async login(userData) {
      const response = await axios.post(
        'http://localhost:3001/login',
        userData,
      );
      return response;
    },
  },
};

export default api;
