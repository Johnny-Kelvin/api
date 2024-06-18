import { StyleSheet } from "react-native";

export const css = StyleSheet.create({


    login__imageback:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover'
    },

    buttonsup:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '8%',
    },

    containerPerfil: {
        flex: 1,
       },
      foto_perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        bottom: '15%'
      },


      nome_perfil: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        bottom: '3%'

      },

      data_perfil: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#000',
        bottom: '3%'
      },


      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        bottom: '30%'
       
      },

      medidas_button: {
        padding: 6,
        backgroundColor: '#fff',
        borderRadius: 15,
      },

      medidas_texto: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 18
      },

      viewButtom:{
        position:"absolute",
        right:50,
        bottom:70
      },
})



