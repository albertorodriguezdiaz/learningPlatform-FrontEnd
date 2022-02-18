import React,{ Fragment } from 'react';
import MainUploadAudio from '../activity-components/MainUploadAudio';


const Activity36 = (props) => {
   
   const tituloActividad =`
    <h2>Sube aquí la evidencia de la actividad descrita en el punto Vive la vida de la cartilla Soy Vida.</h2>
    `;
   const textoTextArea =`
    Espacio para escribir algún comentario de la actividad realizada
    `;


     return ( 
       <Fragment>
            <div>
                <MainUploadAudio {...props} 
                    tituloActividad={tituloActividad}
                    textoTextArea={textoTextArea}
                />
            </div>
        </Fragment>
     );
}
 
export default Activity36;