import React,{ Fragment } from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'


const Activity36 = (props) => {
   
   const tituloActividad =`
    <h2>Realiza un colga puerta (picaporte) de cartón con el molde que se deja a continuación (link), en la parte de atrás escribe un mensaje donde le cuentes a un vecino que viva cerca de tu casa que Jesús quiere ser su amigo y dáselo como obsequio para que decore su casa.</h2>
    Si deseas puedes hacer un diseño diferente o realizar tu propio molde del picaporte. Envía una foto de la manualidad como evidencia
    <p>Link del Molde: <a target="_blank" href="https://co.pinterest.com/eangelespea/picaportes/"> Ver los moldes - Click Aquí</a></p>
    `;
   const textoTextArea =`
    Espacio para escribir algún comentario de la actividad realizada
    `;


     return ( 
       <Fragment>
            <div>
                <MainUploadImage {...props} 
                    tituloActividad={tituloActividad}
                    textoTextArea={textoTextArea}
                />
            </div>
        </Fragment>
     );
}
 
export default Activity36;