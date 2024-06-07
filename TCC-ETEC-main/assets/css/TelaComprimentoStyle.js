import { StyleSheet } from "react-native";

export const css = StyleSheet.create({

        container: {
          flex: 1,
          backgroundColor: 'white',
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
        },


        iconContainer: {
        },


        titulo: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20, // Margem inferior do título
          marginTop: -380, // Margem superior do título, ajustada para alinhar com a borda superior
        },


        imageContainer: {
          marginBottom: 20, // Adicione margem inferior para separar da imagem
        },


        image: {
          width: 88,
          height: 55, // Largura e altura da imagem do ícone
        },


        dropdownContainer: {
          width: '80%',
          marginBottom: 20,
        },


        dropdown: {
          height: 50,
          borderColor: 'gray',
          backgroundColor: '#FFBABA',
          borderWidth: 0.5,
          borderRadius: 8,
          paddingHorizontal: 8,
        },


        dropdownItem: {
          justifyContent: 'flex-start',
          paddingHorizontal: 10,
        },


        dropdownMenu: {
          marginTop: 2,
        },


        inputContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        },


        input: {
          width: '48%',
          height: 40,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          paddingHorizontal: 10,
        },


        buttonContainer: { /*botao adicionar*/
          width: '60%',
          marginBottom: 20, // Ajuste a margem inferior conforme necessário
          marginTop: 80, // Mover o botão "Adicionar" um pouco para cima
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: '#30cfa9',
        },


        iconBack: { // ícone de voltar
          position: 'absolute', // Posicionamento absoluto
          top: -380, // Distância do topo
          left: -185, // Distância da esquerda
        },


      });