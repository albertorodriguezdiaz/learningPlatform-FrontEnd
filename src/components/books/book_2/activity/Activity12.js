import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage';


const Activity12 = (props) => {

    const tituloActividad =`
        <h2>Piensa en tu mejor amigo o amiga y envíale un mensaje por medio de una carta donde expreses tu agradecimiento por su amistad con palabras sinceras y respetuosas, si es necesario, discúlpate por un mal momento que hayan tenido. Si tienes la oportunidad puedes invitarlo a tu casa a tomar una merienda para compartir un buen momento. </h2>
        Recuerda enviar evidencia tu actividad, puedes anexar la carta realizada o una fotografía con tu amigo. 
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
 
export default Activity12;