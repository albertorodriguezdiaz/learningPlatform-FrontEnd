import React, { Fragment } from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'


const Activity39 = (props) => {
   
   const tituloActividad =`
    <h2>Escoge un amigo de los que ubicaste en la pirámide, alguno al que le quieras ayudar a que él hable de Jesús a otros. Reúnete con él y piensen juntos cómo pueden hablar de Jesús a otros, traten de idear algo bastante creativo (puede ser una postal, una carta, un video, una charla, entre otros). Busquen un familiar o un amigo, y hablen de Jesús mediante la forma que decidieron usar. </h2>
    Toma una foto o evidencia del momento en que hablaron de Jesús a la otra persona. 
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
 
export default Activity39;