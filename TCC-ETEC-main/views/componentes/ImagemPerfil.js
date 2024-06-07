import { Image } from "react-native"

export default function ImageViewer({imagemPadrao, imagemSelecionada, style})
{
  const imagem = imagemSelecionada ? {uri: imagemSelecionada} : imagemPadrao
  
  return <Image source={imagem} style={style}/> 
}
