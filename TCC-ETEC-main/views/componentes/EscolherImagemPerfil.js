import { manipulateAsync } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';




export default function EscolherImagem(imagem) {


  

  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      base64:true,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {

      const manipImage = await manipulateAsync(result.assets[0].uri,[],{base64:true})
      imagem(manipImage)
      
    } else {
      alert('You did not select any image.');
    }

    
  }
  pickImageAsync()
}

