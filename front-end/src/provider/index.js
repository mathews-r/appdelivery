import { node } from 'prop-types';
import { useState } from 'react';
import { userContext } from '../context';

export default function UserProvider({ children }) {
  const { userData, setUserData } = useState({});
  const context = {
    userData,
    setUserData,
  };
  return (
    <userContext.Provider value={ context }>
      {children}
    </userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: node.isRequired,
};
