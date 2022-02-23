import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

const Activity6 = (props) => {

   const tituloActividad =`
   Con ayuda de tus padres escribe una carta para un amigo donde expreses la importancia de su amistad para ti, puedes decorarla de forma llamativa y si deseas, compra un regalo para él o ella y entrégaselo junto con la carta. Debes tomar una foto cuando lo estés entregando y subirla aquí como evidencia. 
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
 
export default Activity6;