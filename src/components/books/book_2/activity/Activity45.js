import React from 'react';
import MainUploadAudio from '../activity-components/MainUploadAudio'



const Activity45 = (props) => {
   
   const tituloActividad =`
    <h2>Haz una de las siguientes preguntas a alguien de tu iglesia; graba su respuesta en audio o vídeo y sube la evidencia aquí. </h2>

    <p>- ¿Qué es lo que más le gusta de hacer parte de su iglesia?</p>
    <p>- ¿Qué cosas disfruta en compañía de otras personas de su iglesia?</p>
    <p>- ¿En qué aspectos debe mejorar la iglesia a la que pertenece?</p>
    <p>- ¿Cómo llegó a ser parte de esa comunidad cristiana?</p>
    <p>- ¿De qué manera especificas sirve en su iglesia?</p>
    <p>- ¿Qué cosas no le gustan de su iglesia?</p>
    <p>- ¿Cómo celebran los cultos en su iglesia?</p>
    <p>- ¿De qué manera su iglesia atiende algunas necesidades como la enfermedad de algún miembro?</p>
    <p>- ¿Qué consejos nos da para poder disfrutar de una comunidad de fe?</p>

    `;
   const textoTextArea =`
    Espacio para dejar un comentario de la actividad
   `;

     return ( 
            <div>
                <MainUploadAudio {...props} 
                textoTextArea={textoTextArea}
                tituloActividad={tituloActividad}
                />
            </div>
            
     );
}
 
export default Activity45;