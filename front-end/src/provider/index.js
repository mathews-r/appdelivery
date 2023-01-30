import { node } from 'prop-types';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context';
import api from '../service/request';

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  function storageUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post.login({ email, password });
      setUserData(data);
      storageUser(data);
      navigate('/customer/products');
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  function logOut() {
    localStorage.removeItem('user');
    setUserData(null);
    navigate('/login');
  }

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
