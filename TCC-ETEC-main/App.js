// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthProvider} from './auth/contexto/auth';
import Routes from './auth/rotas';
// import { AuthProvider, useAuth } from './auth.old/autenticacao';
import { Home, Login, Registro, Perfil, TelaAlimento, TelaComprimento, TelaSaude, TelaSono } from './views';
import Botaomenu from './views/componentes/Botaomenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
  );
}

