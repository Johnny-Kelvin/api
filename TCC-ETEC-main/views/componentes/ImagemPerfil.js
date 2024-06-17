import { Image } from "react-native";
import { useAuth } from "../../auth/contexto/auth";
import api from "../../auth/services/api";
import { useEffect, useState } from "react";

export default function ImageViewer({ imagemPadrao, imagemSelecionada, style }) {
  const { user } = useAuth();
  const [imagem, setImagem] = useState(imagemPadrao);

  useEffect(() => {
    async function getImageDb() {
      const img = await api.get(`/crianca/${user.id_cliente}`);
      const data = img.data.user.foto.data;
      const base64String = data.map(byte => String.fromCharCode(byte)).join('');
      return base64String;
    }

    async function setImage() {
      if (imagemSelecionada) {
        // Se uma imagem foi selecionada, atualize o estado 'imagem' com a nova URI
        setImagem({ uri: imagemSelecionada });
      } else {
        // Caso contrário, obtenha a imagem do banco de dados
        const res = await getImageDb();
        setImagem({ uri: res });
      }
    }

    setImage();
  }, [imagemSelecionada, user.id_cliente]);

  useEffect(() => {
    if (imagemSelecionada) {
      try {
        // Atualize a imagem no banco de dados
        api.patch(`crianca/${user.id_cliente}`, {
          foto: imagemSelecionada
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [imagemSelecionada, user.id_cliente]);

  return <Image source={imagem} style={style} />;
}





















// import React, { useState, useEffect } from "react";
// import { Image } from "react-native";
// import { useAuth } from "../../auth/contexto/auth";
// import api from "../../auth/services/api";

// export default function ImageViewer({ imagemPadrao, imagemSelecionada, style }) {
//   const { user } = useAuth();
//   const [imagem, setImagem] = useState(null);

//   useEffect(() => {
//     async function getImageDb() {
//       try {
//         const img = await api.get(`/crianca/${user.id_cliente}`);
//         const data = img.data.user.foto.data;
//         const base64String = data.map(byte => String.fromCharCode(byte)).join('');
//         return base64String;
//       } catch (error) {
//         console.error("Erro ao obter imagem do banco de dados:", error);
//         return null;
//       }
//     }

//     async function setImage() {
//       try {
//         const res = await getImageDb();
//         if (res) {
//           console.log(res)
//           setImagem(imagemSelecionada ? { uri: res } : imagemPadrao);
//           if (imagemSelecionada) {
//             await api.patch(`crianca/${user.id_cliente}`, {
//               foto: imagemSelecionada
//             });
//           }
//         } else {
//           setImagem(imagemPadrao); // Define a imagem padrão se não houver imagem do banco de dados
//         }
//       } catch (error) {
//         console.error("Erro ao definir imagem:", error);
//         setImagem(imagemPadrao); // Define a imagem padrão em caso de erro
//       }
//     }

//     setImage();
//   }, [user.id_cliente, imagemPadrao, imagemSelecionada]);

//   if (!imagem) {
//     return null; // ou algum indicador de carregamento enquanto a imagem está sendo carregada
//   }
//   console.log(imagem)
//   return <Image source={imagem} style={style} />;
// }


























// import { Image } from "react-native";
// import { useAuth } from "../../auth/contexto/auth";
// import api from "../../auth/services/api";
// import { useEffect } from "react";

// export default function ImageViewer({ imagemPadrao, imagemSelecionada, style }) {
//   const { user } = useAuth();

//   // Adicione um console.log para verificar o objeto user
//   console.log('Usuário atual:', user);

  
//   async function getImageDb(){
//     const img = await api.get(`/crianca/${user.id_cliente}`)

//     const data = img.data.user.foto.data
    
    
//       // Passo 1: Converter o array de números em uma string base64
//       const base64String = data.map(byte => String.fromCharCode(byte)).join('');
//       console.log(base64String)
//       // // Passo 2: Criar o URI de dados
//       // const imageSrc = `data:image/png;base64,${base64Data.slice(19)}`.split(',')[1];
//       // // Agora 'imageSrc' pode ser usado como a fonte de um elemento de imagem
//       // console.log(imageSrc)
//        return base64String
//   }
//   let imagem
//   async function setImage(){
//     const res = await getImageDb()
//     console.log(res)
//     imagem =  imagemSelecionada ?  {uri: res}  : imagemPadrao;

    
//   }
  

//   setImage()
  


//   try {
//     if(imagemSelecionada){
//       api.patch(`crianca/${(user.id_cliente)}`, {
//         foto: imagemSelecionada
//       })
//     }
//   } catch (error) {
//     console.log(error)
//   }
//   console.log(imagem)
//   return <Image source={imagem} style={style} />;
// }

















// import { Image } from "react-native"
// import { useAuth } from "../../auth/contexto/auth";
// import api from "../../auth/services/api";

// export default function ImageViewer({imagemPadrao, imagemSelecionada, style})
// {
//   const {user} = useAuth();

//   const imagem = imagemSelecionada ? {uri: imagemSelecionada} : imagemPadrao
  
  
//   if(imagemSelecionada){

//   async function loadImageBuffer(image) {
//     try {
//       console.log( user?.id_user)
//       const buffer = Buffer.from(image)
//       return buffer
//     } catch (error) {
//       console.log(error)
//       return null
//     }
//   }
      
//        try {
//         api.patch(`/crianca/${(user.id_user)}`, loadImageBuffer(imagem))
//       } catch (error) {
//         console.log(error)
//       }
//     }

//   return <Image source={imagem} style={style}/> 
// }
