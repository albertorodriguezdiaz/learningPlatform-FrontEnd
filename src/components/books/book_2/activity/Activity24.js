import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'



const Activity24 = (props) => {
   
   const tituloActividad =`
    <h2>Realiza una cartelera que tenga como título “un amigo fiel es un tesoro valioso”.  La cartelera llevará fotos de tu mejor amigo que contengan experiencias que hayan compartido en el pasado o actualmente. Recuerda los gratos momentos que han compartido juntos, con el fin de hacer un reconocimiento por su amistad. Después le entregarás la cartelera a tu amigo.</h2>
    Sube foto de tu cartelera como evidencia de tu actividad.
    `;
    
   const textoTextArea =`
    Escribe algún comentario de la actividad
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