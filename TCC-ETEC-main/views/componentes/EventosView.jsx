import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const icone = {
  '1': require('../../assets/img/saudeEvent.png')
}

const EventosView = ({ eventos }) => {

  return (
    <View style={styles.container}>
      {eventos.length > 0 ? (
        eventos.map((evento, index) => (
          <View key={index} style={styles.eventoContainer}>
            <Image source={icone[evento.Detalhes.tipo_id] || icone[1]} style={styles.eventoImagem}/>
            <Text style={styles.eventoNome}>{evento.Detalhes.descricao}</Text>
            {/* Adicione mais detalhes do evento aqui se necessário */}
          </View>
        ))
      ) : (
        <Text style={styles.semEventosTexto}>Adicione eventos usando o seletor</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  eventoImagem: {
    resizeMode: 'contain',
    alignSelf: 'center', // Alinha a imagem ao centro verticalmente
    width: '11%',
    left: 20
  },
  container: {
    // Estilos para o container dos eventos
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E2F7F3',
    padding:15 // Alinha os filhos ao centro horizontalmente
  },
  eventoContainer: {
    // Estilos para o container de cada evento
    height: '13%',
    borderRadius: 40,
    borderColor: '#B1FF96',
    borderWidth: 2,
    backgroundColor: 'rgba(206, 255, 189, 0.42)',
    flexDirection: 'row',
    alignItems: 'center', // Alinha os filhos ao centro verticalmente
    marginBottom: 10, // Adiciona espaço entre os eventos
  },
  eventoNome: {
    // Estilos para o nome do evento
    color: 'black',
    fontSize: 18,
    textAlign: 'center', // Alinha o texto ao centro verticalmente
    marginLeft: 10, // Adiciona espaço entre a imagem e o texto
    left: 30
  },
  semEventosTexto: {
    // Estilos para o texto exibido quando não há eventos
    color: 'white',
    textAlign: 'center',
  },
});

export default EventosView;