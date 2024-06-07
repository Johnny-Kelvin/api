import { StyleSheet } from "react-native";

export const css = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor:'white',
    padding:16,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza horizontalmente todos os itens 
    
    
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Margem inferior do título
    marginTop: -220, // Margem superior do título, ajustada para alinhar com a borda superior
},
icone: {
  marginBottom: 200
   
},
dropdownContainer: {
    width: '85%',
    marginBottom: 20,
},
dropdown: { /*estilo dos botoes 1 e 2*/
    height:50,
    borderColor:'gray',
    backgroundColor: '#CEFFBD',
    borderWidth:0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
},
dropdownItem: {
    justifyContent: 'flex-start', //  itens do BOTAO à esquerda
    paddingHorizontal: 10, // horizontal dos itens do BOTAO
},
dropdownMenu: {
    marginTop: 2, // 
},
input: { /*botao de temperatura*/
  height: 40,
  width: '80%',
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 15,
  marginBottom: 20,
  paddingHorizontal: 10,
},

buttonContainer: { /*botao adicionar*/
  width: '80%',
  marginBottom: 20, // Ajuste a margem inferior conforme necessário
  marginTop: 100, // Mover o botão "Adicionar" um pouco para cima
  borderRadius: 5,
  overflow: 'hidden',
  backgroundColor: '#30cfa9',
},
iconBack: { // ícone de voltar
  position: 'absolute', // Posicionamento absoluto
  top: 56, // Distância do topo
  left: 16, // Distância da esquerda
},

});
