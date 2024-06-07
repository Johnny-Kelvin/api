// authContext.js
import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    let usertoken =
    setUser(userData);
  };

  const register = async (userData) => {
    const {nome, email, senha} = userData
    

    await axios.post(' https://3ec7-45-191-138-6.ngrok-free.app/auth/register',
      {
        nome:nome,
        email:email,
        senha:senha
      }
    ).then(res => console.log(res))
     .catch(e => console.log(e))
  }

  const logout = () => {
    // Lógica de logout aqui
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login,register,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
