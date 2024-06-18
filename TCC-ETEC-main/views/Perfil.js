import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar,ImageBackground, TouchableOpacity, Pressable, Alert } from 'react-native';
import Botaomenu,{Aa}  from './componentes/Botaomenu';
import { css } from '../assets/css/PerfilStyle';
import {Entypo, MaterialIcons} from '@expo/vector-icons'
import EscolherImagem from './componentes/EscolherImagemPerfil';
import ImageViewer from './componentes/ImagemPerfil';
import { useAuth } from '../auth/contexto/auth';
import api from '../auth/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { calcularIdade } from './componentes/CalcularIdade';
import EventosView from './componentes/EventosView';




 export default  Perfil = ({navigation}) => {

  const [imgSelecionada, setImgSelecionada] = useState(null)/*guardando a imagem de perfil*/ 
  const {user, setUpdateDados} = useAuth();
  const [idade, setIdade] = useState({ meses: 0, dias: 0})
  const [eventos, setEventos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if(user?.Crianca?.datanasc)
        {
          const idadeCalculada = calcularIdade(user?.Crianca?.datanasc)
          setIdade(idadeCalculada)
        }

      

        async function fetchEventos() {
          try {
            const resEventos = await api.get(`/crianca/eventos`);
            setEventos(resEventos.data); // Atualiza o estado com os eventos recebidos
          } catch (error) {
            console.error('Erro ao buscar eventos:', error);
          }
        }
  
        
        
      async function updateDados(){
        try {
          const res = await api.get(`/crianca/${user.id_cliente}`)
          setUpdateDados(res.data.user)
          // console.log(res.data.cri)
        } catch (error) {
          console.error('Erro ao atualizar os dados:', error);
        }
      }
      updateDados()
      fetchEventos();
    },[])
    
  )


  return (

    <ImageBackground style={css.login__imageback}  /*imagem da nuvem*/
    source={require('../assets/img/fundonuvem.png')}>

    <View style={css.containerPerfil}>
      <View>
        <View style={css.buttonsup}>
        <MaterialIcons name="settings" size={26} color="#000"/>
        <Entypo name="bar-graph" size={26} color="#000"/>
        </View>
        <Pressable onPress={() => EscolherImagem(setImgSelecionada)}>
          <ImageViewer imagemPadrao={require('../assets/img/icon.png')} imagemSelecionada={imgSelecionada} style={css.foto_perfil}/>
        </Pressable>
      </View>
      <Text style={css.nome_perfil}>{`${(user?.Crianca?.nome_cri)?.charAt(0).toUpperCase() + (user?.Crianca.nome_cri)?.slice(1)}`}</Text>
      <Text style={css.data_perfil}>{`${idade.meses} meses e ${idade.dias} dias`}</Text>
      <View style={css.row}>

      <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
      <Text style={css.medidas_texto}>{`${user?.Crianca?.altura || 'Altura + '}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
          <Text style={css.medidas_texto}>{`${user?.Crianca?.peso || 'Peso + '}`}</Text>
        </TouchableOpacity>
      </View>
      <EventosView eventos={eventos} />

     

      <View style={css.viewButtom}>
        {/* coloca a propriedade de navegação dentro do botão */}
        <Botaomenu style={css.botao_menu} navigation={navigation} /> 
      </View>

        
        </View>

      </ImageBackground>
       
        );
};