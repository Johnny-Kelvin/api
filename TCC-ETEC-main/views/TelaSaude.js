import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { css } from "../assets/css/TelaSaudeStyle";

const TelaSaude = () => {
  const navigation = useNavigation(); /* usenavigation navegar entre as telas do aplicativo, primero instalar o pacote.*/

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); /*visibilidade do seletor de data.*/
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null); /*armazenar o item selecionado no primeiro dropdown.*/
  const [open1, setOpen1] = useState(false); /*primeiro dropdown está aberto ou fechado.*/
  const [selectedItem2, setSelectedItem2] = useState(null); /*comentario acima*/
  const [open2, setOpen2] = useState(false); /*comentario acima*/
  const [temperature, setTemperature] = useState(''); /* armazenar a temperatura inserida pelo usuário.*/

  const handleConfirm = (date) => { /*funcao que confirma  uma data no botao de data e hora*/
    setSelectedDate(date); /*apos selecionar a data ela é confirmada no handleConfirm = (date)*/
    setDatePickerVisibility(false); /*oculta o seletor de data e hora após a selecinar*/
  };

  const handleAdicionar = () => { /*quando clicar na botao adicionar*/
    
    navigation.navigate('Perfil');
  };
/*opçoes ao aperta o botao por favor, selecione*/
  const optionsForConsulta = [
    { label: 'Pediatra', value: 'Pediatra' },
    { label: 'Emergência', value: 'Emergência' },
    { label: 'Dentista', value: 'Dentista' },
    { label: 'Neurologista', value: 'Neurologista' },
    { label: 'Ortopedista', value: 'Ortopedista' }
  ];

  const optionsForVacina = [
    { label: 'BCG - ID - Dose única', value: 'BCG - ID - Dose única' },
    { label: 'HEPATITE B - 1° dose', value: 'HEPATITE B - 1° dose' },
    { label: 'HEPATITE B - 2° dose', value: 'HEPATITE B - 2° dose' },
    { label: 'TETRAVALENTE (DTP + HIB) - 1° dose', value: 'TETRAVALENTE (DTP + HIB) - 1° dose' },
    { label: 'VOP (CONTRA PÓLIO) - 1° dose', value: 'VOP (CONTRA PÓLIO) - 1° dose' },
    { label: 'VORH (ROTAVÍRUS) - 1° dose', value: 'VORH (ROTAVÍRUS) - 1° dose' },
    { label: 'TETRAVALENTE (DTP + HIB) - 2° dose', value: 'TETRAVALENTE (DTP + HIB) - 2° dose' },
    { label: 'VOP (CONTRA PÓLIO) - 2° dose', value: 'VOP (CONTRA PÓLIO) - 2° dose' },
    { label: 'VORH (ROTAVÍRUS) - 2° dose', value: 'VORH (ROTAVÍRUS) - 2° dose' },
    { label: 'TETRAVALENTE (DTP + HIB) - 3° dose', value: 'TETRAVALENTE (DTP + HIB) - 3° dose' },
    { label: 'VOP (CONTRA PÓLIO) - 3° dose', value: 'VOP (CONTRA PÓLIO) - 3° dose' },
    { label: 'HEPATITE B - 3° dose', value: 'HEPATITE B - 3° dose' },
    { label: 'FEBRE AMARELA - Dose Inicial', value: 'FEBRE AMARELA - Dose Inicial' },
    { label: 'SRC (TRÍPLICE VIRAL) - Dose única', value: 'SRC (TRÍPLICE VIRAL) - Dose única' },
    { label: 'VOP (CONTRA PÓLIO) - Reforço', value: 'VOP (CONTRA PÓLIO) - Reforço' },
    { label: 'DTP (TRÍPLICE BACTERIANA) - 1° dose', value: 'DTP (TRÍPLICE BACTERIANA) - 1° dose' },
    { label: 'DTP (TRÍPLICE BACTERIANA) - 2° dose', value: 'DTP (TRÍPLICE BACTERIANA) - 2° dose' },






  ];

  const optionsForMedicamento = [
    { label: 'Analgésico', value: 'Analgésico' },
    { label: 'Anti inflamatório', value: 'Anti inflamatório' },
    { label: 'Antibiótico', value: 'Antibiótico' },
    { label: 'Vitaminas', value: 'Vitaminas' },
    { label: 'Antitérmico', value: 'Antitérmico' }
  ];

  return (
    <View style={css.container}>
      {/* Ícone de voltar */}
      <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={css.iconBack} />

   
      <Image
          source={require('../assets/img/saude.png')}
          style={{ width: 90, height: 80, marginBottom: 100 }} //  largura e altura do imagem do icon
        />
            {/* Primeiro BOTAO SELECIONE */}
      <DropDownPicker /*seria o pacote */
        items={[
          { label: 'Vacina', value: 'vacina' },
          { label: 'Consulta', value: 'consulta' },
          { label: 'Medicamento', value: 'medicamento' },
          { label: 'Temperatura', value: 'temperatura' }
        ]}
        defaultValue={null}  /*ainda não foi selecionado nenhum item, por isso o null*/
        placeholder="Selecione" /*titulo do botao*/
        containerStyle={css.dropdownContainer} // Adicionando margem inferior
        style={css.dropdown} /*estilo do botao, cor de fundo ou borda*/
        itemStyle={css.dropdownItem}
        dropDownStyle={css.dropdownMenu} /*estilo do botao, cor de fundo ou borda*/
        open={open1}
        setOpen={setOpen1} /* atualizar o estado de abertura do botao*/
        value={selectedItem1} // Valor selecionado no seletor
        setValue={setSelectedItem1} // Função para atualizar o valor selecionado, por exemplo vacina
        zIndex={2000}
        zIndexInverse={2000} /*sobreposição dos botoes*/
      />

      <DropDownPicker
        items={
          selectedItem1 === 'consulta' ? optionsForConsulta : 
          selectedItem1 === 'vacina' ? optionsForVacina :
          selectedItem1 === 'medicamento' ? optionsForMedicamento :
          []
          /*Se selectedItem1 for igual a 'consulta, vacina, ou medicamento', o botao exibirá os itens contidos em optionsForConsulta,vacina,medicamento
          por exemplo em selectedItem1 === 'consulta' ? optionsForConsulta : vamos ter a opção de pediatra, dentista... */
        }
        defaultValue={null}
        placeholder="Por favor, escolha"
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
        /*comentarios acima*/
      />

      {selectedItem1 === 'temperatura' && /*verica se pertence a temperatura, o selected verifica, apos verificar vai aparecer a opção do text input*/
        <TextInput
          style={css.input} /*css*/
          placeholder="Insira a temperatura" /*titulo */
          keyboardType="numeric" /*inserir a temperatura em numeros*/
          value={temperature}
          onChangeText={setTemperature}
        />
      }

     {/* Botão para selecionar data e hora */}
      <Button
        title="Data e Hora"
        color='#90ee90'
        onPress={() => setDatePickerVisibility(true)}
      />
    

      <View style={css.buttonContainer}>
        <Button /*BOTAO ADICIONAR*/
          title="Adicionar" /*TITULO*/
          color='#30cfa9' /*COR*/
          onPress={handleAdicionar} /*AO PRESSIONAR O BOTAO , ADICIONA AS OPÇOES QUE SELECIONEI*/
        />
      </View>
    </View>
  );
};



export default TelaSaude;