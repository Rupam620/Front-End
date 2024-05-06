// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const setUserData = (token) => {
    // Extract username from the token and set it in the context
    const decodedToken = decodeToken(token);
    setUsername(decodedToken.username);
  };

  const decodeToken = (token) => {
    // Decode JWT token (implementation may vary based on your token format)
    return JSON.parse(atob(token.split('.')[1]));
  };

  return (
    <UserContext.Provider value={{ username, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
