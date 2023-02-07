import { node } from 'prop-types';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context';
import api from '../services/request';

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const storageUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post.login({ email, password });
      setUserData(data);
      storageUser(data);
      if (data.role === 'customer') navigate('/customer/products');
      if (data.role === 'seller') navigate('/seller/orders');
      if (data.role === 'administrator') navigate('/admin/manage');
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const logOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
    setUserData(null);
  };

  const context = useMemo(() => ({
    userData,
    signIn,
    logOut,
  }), []);

  return (
    <userContext.Provider value={ context }>
      {children}
    </userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: node.isRequired,
};
