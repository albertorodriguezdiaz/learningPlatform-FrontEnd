import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

const Activity18 = (props) => {
   
   const tituloActividad =`
    Sube aquí tus fotos o videos de las tres acciones que ejecutaron como una forma de respetar y valorar la vida
   `;
   const textoTextArea =`
      Ingresa el link del video aquí
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
 
export default Activity18;