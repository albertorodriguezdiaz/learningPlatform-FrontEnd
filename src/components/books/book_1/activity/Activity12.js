import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage';


const Activity12 = (props) => {

    const tituloActividad =`
        <h2>Sube aquí la foto de la carta que escribiste en Vive la vida</h2>
    `;

    const textoTextArea =`
    Describe cómo te fue
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
 
export default Activity12;