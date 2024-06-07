// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './auth/autenticacao';
import { Home, Login, Registro, Perfil, TelaAlimento, TelaComprimento, TelaSaude, TelaSono } from './views';
import Botaomenu from './views/componentes/Botaomenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Perfil" options={{ headerShown: false }} component={Perfil} />
          <Stack.Screen name="Botaomenu" component={Botaomenu} />
          <Stack.Screen name="TelaAlimento" options={{ headerShown: false }} component={TelaAlimento} />
          <Stack.Screen name="TelaComprimento" options={{ headerShown: false }} component={TelaComprimento} />
          <Stack.Screen name="TelaSaude" options={{ headerShown: false }} component={TelaSaude} />
          <Stack.Screen name="TelaSono" options={{ headerShown: false }} component={TelaSono} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Registro" options={{ headerShown: false }} component={Registro} />
        </>
      )}
    </Stack.Navigator>
  );
};
