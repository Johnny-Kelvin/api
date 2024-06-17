import React, { useContext } from 'react';

import AuthRoutes from './auth.rotas';
import AppRoutes from './app.rotas';

import {useAuth} from '../contexto/auth';
import {  View } from 'react-native';



const Routes = () => {
    const {signed, loading} = useAuth();
    if (loading) {
        return <>
        <View style={{backgroundColor: '#fff'}}></View>
        </>
    }
  
    return signed ? <AppRoutes /> : <AuthRoutes />;
}


export default Routes;