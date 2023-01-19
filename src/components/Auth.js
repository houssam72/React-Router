import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>{
    return useContext(AuthContext)
}