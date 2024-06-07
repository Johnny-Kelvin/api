import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, Text, Image, View, TouchableOpacity, Platform, Button, StatusBar} from 'react-native';
import { css } from '../assets/css/RegistroStyle';
import { useAuth } from '../auth/autenticacao';


export default function Registro()
{

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {register} = useAuth()

    const handleRegister = () =>{
        register({nome, email, senha})
    }

    return(
    
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}> 


        
        <View>
            <Image style={css.logo__image} source={require('../assets/img/logomenor.png')}/>
        </View>


        <View style={css.login__form}> 

        <Text style={css.text_form}> Seu E-mail:</Text>
        <TextInput style={css.login__input} placeholder='exemplo@gmail.com' onChangeText={setEmail}/>

        <Text  style={css.text_form}>Crie uma senha:</Text>
        <TextInput style={css.login__input} placeholder='Abcd1234' onChangeText={setSenha} secureTextEntry={true}/>

        <Text style={{alignSelf:'flex-start', marginTop: 30}}> Dados do(a) bebê:</Text>

        <Text  style={css.text_form}>Nome:</Text>
        <TextInput style={css.login__input} placeholder='Digite o nome do(a) bebê' onChangeText={setNome}/>

        <Text  style={css.text_form}>Data de nascimento:</Text>
        <TextInput style={css.login__input} placeholder='01/01/2000' />
         
    
                <TouchableOpacity style={css.cadastrar__button} onPress={() => handleRegister()}>
                    <Text style={css.login__buttonText}>Cadastrar</Text>
                </TouchableOpacity>
             
           </View>
           
        </KeyboardAvoidingView>
         
    )
}