import React from 'react';
import MainUploadFiveImage from '../activity-components/MainUploadFiveImage';

const Activity41 = (props) => {
   
   const tituloActividad =`
   <h2>Elabora una historieta que ocurra en el contexto de la iglesia primitiva, donde se vean las características aprendidas en la lección. Esta deberá tener cinco escenas. Sube cada una de ella en cada uno de los siguientes recuadros. </h2>
   `;
   const textoTextArea =`
      Ingresa los comentarios de la actividad
   `;

     return ( 
        <div>
        <MainUploadFiveImage {...props} 
         textoTextArea={textoTextArea}
         tituloActividad={tituloActividad}
        />
        </div>
           
     );
}
 
export default Activity41;