import * as ImagePicker from 'expo-image-picker';

export default function EscolherImagem(imagem) {

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      imagem(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  }
  pickImageAsync()
}

