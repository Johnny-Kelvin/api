import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Perfil, TelaAlimento, TelaComprimento, TelaSaude, TelaSono } from '../../views';
import { useAuth } from '../contexto/auth';

const AuthStack = createNativeStackNavigator();


const AppRoutes = () => {
    
    return( 
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Perfil" options={{ headerShown: false }} component={Perfil} />
          <AuthStack.Screen name="TelaAlimento" options={{ headerShown: false }} component={TelaAlimento} />
          <AuthStack.Screen name="TelaComprimento" options={{ headerShown: false }} component={TelaComprimento} />
          <AuthStack.Screen name="TelaSaude" options={{ headerShown: false }} component={TelaSaude} />
          <AuthStack.Screen name="TelaSono" options={{ headerShown: false }} component={TelaSono} />
        </AuthStack.Navigator>
)};


export default AppRoutes



        