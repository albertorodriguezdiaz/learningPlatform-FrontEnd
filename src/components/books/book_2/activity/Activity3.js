import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

const Activity3 = (props) => {
   
   const tituloActividad =`
      Como un aporte tuyo hacia el bienestar de nuestro planeta, siembra una planta en casa y sube evidencia sobre su proceso de crecimiento en la plataforma
   `;
   const textoTextArea =`
      Ingresa los comentarios para la imagen
   `;

     return ( 
        <div>
        <MainUploadImage {...props} 
         textoTextArea={textoTextArea}
         tituloActividad={tituloActividad}
        />
        </div>
           
     );
}
 
export default Activity3;