import { node } from 'prop-types';
import { useMemo, useState } from 'react';
import { userContext } from '../context';

export default function UserProvider({ children }) {
  const { userData, setUserData } = useState(null);

  function storageUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  function logOut() {
    localStorage.removeItem('user');
    setUserData(null);
    navigate('/login');
  }

  const context = useMemo(() => ({
    userData,
    storageUser,
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
