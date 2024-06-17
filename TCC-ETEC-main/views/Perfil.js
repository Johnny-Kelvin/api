import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar,ImageBackground, TouchableOpacity, Pressable, Alert } from 'react-native';
import Botaomenu,{Aa}  from './componentes/Botaomenu';
import { css } from '../assets/css/PerfilStyle';
import {Entypo, MaterialIcons} from '@expo/vector-icons'
import EscolherImagem from './componentes/EscolherImagemPerfil';
import ImageViewer from './componentes/ImagemPerfil';
import { useAuth } from '../auth/contexto/auth';




 export default  Perfil = ({navigation}) => {

  const [imgSelecionada, setImgSelecionada] = useState(null)/*guardando a imagem de perfil*/ 
  const {user} = useAuth();
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
      <Text style={css.nome_perfil}>{`${(user?.nome_cri)?.charAt(0).toUpperCase() + (user?.nome_cri)?.slice(1)}`}</Text>
      <Text style={css.data_perfil}>2 meses e 5 dias</Text>
      <View style={css.row}>

      <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
      <Text style={css.medidas_texto}> Peso + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
          <Text style={css.medidas_texto}> Altura + </Text>
        </TouchableOpacity>

      </View>

     

      <View style={css.viewButtom}>
        {/* coloca a propriedade de navegação dentro do botão */}
        <Botaomenu style={css.botao_menu} navigation={navigation} /> 
      </View>

        
        </View>

      </ImageBackground>
       
        );
};