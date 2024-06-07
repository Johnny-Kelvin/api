/* TouchableWithoutFeedback : sem visual para o usuario*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
/*importando Ant+enty para utilizar como icon, funcao animated, anima o botao*/
import {AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'




class Botaomenu  extends Component { 

  animation = new Animated.Value(0);
/*criando a funcao togglemenu,    const toValue para abrir e fechar, coloca os valores  0 e 1 pois se for 0 ele vai abrir senão ele fecha os botoes*/
  toggleMenu = () =>{
    const toValue = this.open ? 0 : 1
    Animated.spring(this.animation,{
      toValue,
      friction: 10, 
      useNativeDriver: true    
    }).start();
    this.open = !this.open;
  }
  
  

  render(){

    //Funcão para o botão saúde
      const heartStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-85]
              
            })
          }
        ]
      }
    
      //Funcão para o botão sono
      const moonStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-145]
            })
          }
        ]
      }

      //Funcão para o botão alimentação
      const drinkStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-205]
            })
          }
        ]
      }
      
      //Funcão para o botão medidas
      const rulerStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-265]
            })
          }
        ]
      }



    //Funcão de rotação do botão + 
    const rotation ={
      transform:[
        {
          rotate: this.animation.interpolate({
            inputRange:[0,1],
            outputRange:["0deg", "45deg"]
          })
        }
      ]
    }
  return(


    /*criando os botões*/
  
    
    <View style={[style.container, this.props.style]}>

      {/* BOTÃO MEDIDAS*/}
          {/* chama a o navigation pelas propriedades que ele recebeu   */}
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('TelaComprimento')}> 
        <Animated.View style={[style.button, style.submenu, style.medidabutton, rulerStyle]}>
          <Entypo name= "ruler" size={23} color= "#000"/>
        </Animated.View> 
      </TouchableWithoutFeedback>


      {/* BOTÃO ALIMENTAÇÃO*/}
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('TelaAlimento')} > 
        <Animated.View style={[style.button, style.submenu, style.alimentobutton, drinkStyle]}>
          <MaterialCommunityIcons name="baby-bottle" size={26} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
      

      {/* BOTÃO SONO*/}
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('TelaSono')}> 
        <Animated.View style={[style.button, style.submenu, style.sonobutton, moonStyle]}>
          <MaterialCommunityIcons name="cradle" size={27} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>


      {/* BOTÃO SAÚDE*/}
      <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate('TelaSaude')} > 
        <Animated.View style={[style.button, style.submenu, style.saudebutton, heartStyle]}>
          <MaterialIcons name= "medication-liquid" size={26} color={"#000"}/>
        </Animated.View>
      </TouchableWithoutFeedback>


      {/* BOTÃO +*/}
      <TouchableWithoutFeedback onPress={this.toggleMenu} >
        <Animated.View style={[style.button, style.menu, rotation]}>
          <AntDesign name= "plus" size={24} color={"#fff"}/>
        </Animated.View>
      </TouchableWithoutFeedback>

    </View>
    
  );
}
}
/*utilizei o onpress para quando clicar em cima do botao + aparecer as opçoes*/
    const style = StyleSheet.create({
    container:{
    alignItems:'center',
    position: 'absolute'
  },


 // Todos os botões 
button:{
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  //shadowRadius:10,
  //shadowColor:'#00213B',
  //shadowOpacity:0.3,
  //shadowOffset:{
    //height: 10,
  //}
},


  // Botão +
menu:{        
  backgroundColor:'#91EADF', 
  width: 60,
  height:60,
  borderRadius: 60 / 2,              
},


// Botões que "sobem" após clicar no +
submenu:{
  width:55,
  height:55,
  borderRadius: 55 / 2,
  
},


  // Botão medidas
medidabutton:{  
  backgroundColor: '#FFBABA'
},    


  // Botão alimentação
alimentobutton:{
  backgroundColor: '#F8FFA5'
},


  // Botão sono
sonobutton:{
  backgroundColor: '#D9E8FF'
},


  // Botão saúde
saudebutton:{
  backgroundColor: '#CEFFBD'
},




});

export default Botaomenu