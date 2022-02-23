import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'



const Activity30 = (props) => {
   
   const tituloActividad =`
    <h2>Sube aquí las fotos de los lugares donde pegaste los carteles</h2>
    `;
   const textoTextArea =`
    Espacio para comentar acerca de la actividad
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
 
export default Activity30;