import { StyleSheet } from "react-native";




export const css = StyleSheet.create({
    
    //COMEÇO DA PAGINA INICIAL (HOME)


    //IMAGEM DE FUNDO 
    imagemFundo:{

        //Em vez de usar "Flex" que atua como uma separação da tela
        //criando um espaço na tela caso outro item n se alinhe.
        //apenas usei "altura e largura em 100% por ser apenas a imagem de fundo"
        //ajustando ela a qualquer dispositivo , mas ainda é preciso troca-la!
        width:'100%',
        height:'100%',
        
        // Mantive pois é essencial 
        resizeMode: 'cover'// ou 'stretch' para esticar a imagem
      },



    containerHome: {   //Botões de cadastro e entrar
        flex:1,
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        bottom:'10%'
      },

      cadastroButton:{ //Botão de cadastro
        padding: 8,
        backgroundColor: '#6ED8CB',
        borderRadius: 15,
        elevation: 3,
        shadowColor: '#58aca2'
      },

      TextButton:{ //Texto do botão de cadastro
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20, // Diminui 5pt da fonte, achei exagerado
          
      },

      entrarButton:{  //Botão de entrar
        backgroundColor: 'rgba(110, 216, 203, 0.75)',
        padding: 8,
        paddingHorizontal:25,
        borderRadius: 15

      },

  

      //FIM DA PAGINA INICIAL




});