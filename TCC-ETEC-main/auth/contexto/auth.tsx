import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  email_user: string;
  id_user: number
  id_cri: number
  nome_cri: string;
  senha_user: string
}
// interface Cri {
  
//   nome_cri: string;
  
// }

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email:string, senha:string): Promise<void>;
  signUp(email:string, senha:string, nome:string, data:string): Promise<void>;
  signOut(): void;
  setUpdateDados(user): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  // const [cri, setCri] = useState<Cri | null>(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@CrescaComigo:user');
      const storagedToken = await AsyncStorage.getItem('@CrescaComigo:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `${storagedToken}`;
      }

      setLoading(false);
    }
    console.log('aaba')
    loadStorageData();
  },[]);

  async function signIn(email:string, senha:string) {
    //const response = await auth.signIn();
    console.log(senha, email)
    try{
        const response = await api.post('/auth/login',{
            email:email,
            senha:senha
        })

        console.log(response.data)

        response.data.user.nome_cri = response.data.user.Crianca.nome_cri
        
        response.data.user.id_cri =   response.data.user.Crianca.id_crianca
        console.log( await response.data.user)
        setUser(response.data.user);
        api.defaults.headers.Authorization = response.data.token;

        await AsyncStorage.setItem('@CrescaComigo:user', JSON.stringify(response.data.user));
        await AsyncStorage.setItem('@CrescaComigo:token', response.data.token);
    }
    catch(e)
    {
        console.error(e)
    }
   
  }

  function setUpdateDados(data){
    let updateUser = user
    delete data.foto
    updateUser = data
    setUser(updateUser)
  }

  async function signUp(email: string, senha: string, nome: string, data: string) {
    
    try {
      await api.post('/auth/register', {
        email: email,
        senha: senha
      });
      
      const response = await api.post('/auth/login', {
        email: email,
        senha: senha
      });
  
      api.defaults.headers.Authorization = response.data.token; // Corrigido para 'Bearer'
      
      const cri = await api.post('/crianca', {
        nome: nome,
        dataNasc: data
      });
      

       signIn(email, senha); // Supondo que signIn esteja definido corretamente
    } catch (e) {
      console.log(e);
      // Aqui você pode adicionar lógica adicional para lidar com os erros
    }

  }

  


  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signUp, signOut, setUpdateDados}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};