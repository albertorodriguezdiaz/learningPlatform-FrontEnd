import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

const Activity6 = (props) => {

    const tituloActividad =`
    Sube la evidencia de la entrega de la tarjeta al familiar que deseas decirle que es creación especial de Dios. 
    `;

   const textoTextArea =`
      Ingresa la siguiente información: 1) Nombre del familiar. 2) Fecha de la entrega de la tarjeta
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