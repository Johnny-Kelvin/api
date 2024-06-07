import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { css } from "../assets/css/TelaAlimentoStyle";
import { TouchableOpacity } from 'react-native-web';

const TelaAlimento = () => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [quantidade, setQuantidade] = useState('');
  const [nomePapinha, setNomePapinha] = useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  const navigation = useNavigation();  /*permite a navegação entra as telas*/

  const handleAdicionar = () => {
    // Aqui você pode adicionar a lógica para registrar os valores
  };

  // Função para formatar a entrada de horas e minutos
  const formatarHoraMinuto = (text) => {
    // Remover caracteres não numéricos
    const formattedText = text.replace(/\D/g, '');
    // Adicionar ":" entre os dois primeiros dígitos, se necessário
    if (formattedText.length > 2) {
      return `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
    } else {
      return formattedText;
    }
  };

  return (
    <View style={css.container}>
      {/* Ícone de voltar */}
      <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={css.iconBack} />
      <Text style={css.titulo}>Alimento</Text>  
      <View>
        <Image
          source={require('../assets/img/icon.png')}
          style={{ width: 45, height: 55 }} //  largura e altura do imagem do icon
        />
      </View>

      <DropDownPicker
        items={[
          { label: 'Mamadeira', value: 'Mamadeira' },
          { label: 'Papinha', value: 'Papinha' },
        ]}
        defaultValue={null}
        placeholder="Selecione o Tipo de Alimento"
        containerStyle={css.dropdownContainer}
        style={css.dropdown}
        itemStyle={css.dropdownItem}
        dropDownStyle={css.dropdownMenu}
        open={open1}
        setOpen={setOpen1}
        value={selectedItem1}
        setValue={setSelectedItem1}
        zIndex={2000}
        zIndexInverse={2000} /*sobreposição dos botoes*/
      />

      {(selectedItem1 === 'Mamadeira') && ( 
        <View>
          <DropDownPicker
            items={[
              { label: 'Leite em pó', value: 'Leite em pó' },
              { label: 'Leite materno', value: 'Leite materno' },
            ]}
            defaultValue={null}
            placeholder="Selecione o Tipo de Leite"
            containerStyle={css.dropdownContainer}
            style={css.dropdown}
            itemStyle={css.dropdownItem}
            dropDownStyle={css.dropdownMenu}
            open={open2}
            setOpen={setOpen2}
            value={selectedItem2}
            setValue={setSelectedItem2}
            zIndex={1000}
            zIndexInverse={3000}
          />
          {(selectedItem2 === 'Leite em pó' || selectedItem2 === 'Leite materno') && (
            <TextInput
            style={[css.input, { alignSelf: 'center' }]} /*input centralizado*/
              placeholder="Quantidade (ml)"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
            />
          )}
        </View>
      )}

      {selectedItem1 === 'Papinha' && (
        <View style={css.inputContainer}>
          <TextInput
            style={css.input}
            placeholder="Nome da Papinha"
            value={nomePapinha}
            onChangeText={setNomePapinha}
          />
          <TextInput
            style={css.input}
            placeholder="Quantidade (g)"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />
        </View>
      )}

      <View style={css.inputContainer}>
        <TextInput
          style={css.input}
          placeholder="Início (hh:mm)"
          value={inicio}
          onChangeText={(text) => setInicio(formatarHoraMinuto(text))}
          keyboardType="numeric"
          maxLength={5}
        />
        <TextInput
          style={css.input}
          placeholder="Fim (hh:mm)"
          value={fim}
          onChangeText={(text) => setFim(formatarHoraMinuto(text))}
          keyboardType="numeric"
          maxLength={5}
        />
      </View>

      <View style={css.buttonContainer}>
        <Button /*BOTAO ADICIONAR*/
          title="Adicionar" /*TITULO*/
          color='#fff' /*COR*/
          
          onPress={handleAdicionar} /*AO PRESSIONAR O BOTAO , ADICIONA AS OPÇOES QUE SELECIONEI*/
        />
    
      </View>
    </View>
  );
};

export default TelaAlimento;