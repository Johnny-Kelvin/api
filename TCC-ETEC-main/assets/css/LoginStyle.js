import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        
    
        },



    // COMEÇO DA PAGINA DE LOGIN 
      

    logo__image:{ //Imagem do logo 
        
        marginBottom: -2,

        
    },


    login__msg:(text='none')=>({ //Mensgem de erro usuario/senha
        fontWeight:'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 10,
        marginBottom: 15,
        display: text 
    }),

    text_form:{  //Texto em cima dos inputs "Email / Senha etc"
        fontSize: 20,
        marginBottom: 5,
        color: '#000'
        
    },

    login__form:{ // Formulario como um todo (Texto, inputs e botão)
        width: "85%",
        

    },
    login__input:{ // Inputs dos formularios
        width: 350,
        borderWidth: 2, // Adiciona a borda para todas as direções
        borderColor: 'rgba(110, 216, 203, 0.75)',
        borderRadius: 15,
        fontSize:  19,
        padding: 7,
        marginBottom: 10,
        fontWeight: 'bold',
        color: "#000",
        backgroundColor: 'rgba(110, 216, 203, 0.50)'
    
    },
    login__button:{ // Botão de entrar
        padding: 12,
        backgroundColor: '#6ED8CB',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 50,
        
    },
    login__buttonText:{ // Texto do botão de entrar
        fontWeight:'bold',
        fontSize: 22,
        color: "#fff"

    },

    login__cadastro: { // Texto/link de cadastro no final da pagina
        marginTop: 70
    },



})
