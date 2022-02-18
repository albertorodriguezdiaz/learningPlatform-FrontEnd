import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'



const Activity24 = (props) => {
   
   const tituloActividad =`
    <h2>Sube evidencia de cómo tú y tus padres ayudaron a otros a suplir una de sus necesidades.</h2>
   `;
   const textoTextArea =`
    Describan qué sentimientos experimentaron al realizar esta acción.
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
 
export default Activity24;