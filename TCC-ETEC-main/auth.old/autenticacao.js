// authContext.js
import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  let data

  const login = (userData) => {
    let usertoken =
    setUser(userData);
  };


  const register = async (userData) => {
    const {email, senha} = userData
    
    
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        email: email,
        senha: senha
      });
      data = response; // Não precisa de await aqui
      await registerLogin(data.data?.email_user, senha);
    } catch (e) {
      console.log(e);
    }
  }
  	const registerLogin = async (email, senha) => {
      console.log(data)
      await axios.post('http://localhost:3000/auth/login',
        {
          email:email,
          senha:senha
        }).then(res => console.log(res.data.token))
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
