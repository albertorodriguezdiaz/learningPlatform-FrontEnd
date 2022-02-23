import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

const Activity6 = (props) => {

   const tituloActividad =`
   Pon en práctica una de las estrategias habladas en clase con un compañero con el que te cueste relacionarte. Haz un video de un minuto o toma una foto y súbela aquí.    `;

   const textoTextArea =`
   Ingresa la url del video aquí:  
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
 
export default Activity6;