import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, createContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Registro, Perfil, TelaAlimento, TelaComprimento, TelaSaude, TelaSono} from './views';
import Botaomenu from './views/componentes/Botaomenu';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Registro" options={{headerShown: false}} component={Registro} />
        <Stack.Screen name="Perfil" options={{headerShown: false}} component={Perfil} />
        <Stack.Screen name="Botaomenu" component={Botaomenu} />
        <Stack.Screen name="TelaAlimento" options={{headerShown: false}} component={TelaAlimento} />
        <Stack.Screen name="TelaComprimento" options={{headerShown: false}} component={TelaComprimento} />
        <Stack.Screen name="TelaSaude" options={{headerShown: false}} component={TelaSaude} />
        <Stack.Screen name="TelaSono" options={{headerShown: false}} component={TelaSono} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  ) };
