import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaHome from '../../views/Home';
import TelaRegistro from '../../views/Registro';
import TelaLogin from '../../views/Login';
import { useAuth } from '../contexto/auth';

const AuthStack = createNativeStackNavigator();


const AuthRoutes = () => {
    const {signed, loading} = useAuth();
    
    return( 
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Home" component={TelaHome} options={{ headerShown: false }} />
            <AuthStack.Screen name="Login" component={TelaLogin} options={{animationTypeForReplace: loading? 'push' : 'push'}}/>
            <AuthStack.Screen name="Registro" options={{ headerShown: false }} component={TelaRegistro} />
        </AuthStack.Navigator>
)};


export default AuthRoutes
