import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

const Activity18 = (props) => {
   
   const tituloActividad =`
      <h2>Ten un acto de amor con tus amigos o con tu amigo más cercano, puede ser:</h2>
      <ul>
         <li>Una invitación a comer un helado.</li>
         <li>Una invitación a cenar a tu casa.</li>
         <li>Hacerle un regalo sin que lo espere.</li>
         <li>Tener una video llamada con él/ella.</li>
         <li>Entre otros…</li>
      </ul>
      <h2>Debes tomar una foto del momento y subirla aquí como evidencia. </h2>
   `;
   const textoTextArea =`
      Describe cómo te fue:
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