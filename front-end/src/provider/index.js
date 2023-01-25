import { node } from 'prop-types';
import { useMemo, useState } from 'react';
import { userContext } from '../context';

export default function UserProvider({ children }) {
  const { userData, setUserData } = useState({});

  function storageUser(data) {
    localStorage.setItem('@userdata', JSON.stringify(data));
  }

  const context = useMemo(() => ({
    userData,
    setUserData,
    storageUser,
  }), [userData, setUserData]);

  return (
    <userContext.Provider value={ context }>
      {children}
    </userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: node.isRequired,
};
