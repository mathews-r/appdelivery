import { node } from 'prop-types';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context';
import api from '../service/request';

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();
  /*
  useEffect(() => {
    async function loadUser() {
      const storage = localStorage.getItem('user');

      if (storage) {
        setUserData(JSON.parse(storage));
      }
    }

    loadUser();
  }, []);
*/
  function storageUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post.login({ email, password });
      setUserData(data);
      console.log(data);
      storageUser(data);
      setIsLogged(true);
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
      setIsLogged(false);
    }
  };
  function logOut() {
    localStorage.removeItem('user');
    setUserData(null);
    navigate('/login');
  }

  const context = useMemo(() => ({
    isLogged,
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
