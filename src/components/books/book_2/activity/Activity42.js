import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'


const Activity42 = (props) => {
   
   const tituloActividad =`
    <h2>Sube aquí la evidencia de la actividad que realizaste en Vive la Vida</h2>
    `;
   const textoTextArea =`
    Espacio para dejar un comentario de la actividad
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
 
export default Activity42;