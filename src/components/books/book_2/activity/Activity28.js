import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad28 from '../../../../resources/audio/actividad-28.mp3'


const Activity28 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de la historia de lázaro</h2>
                <audio controls="controls">
                <source src={AudioActividad28} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

                        
            <div className="containerActivity1">
                <h2>Observa el siguiente video sobre la historia de Lázaro</h2>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/wVPkXqYspj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity28;