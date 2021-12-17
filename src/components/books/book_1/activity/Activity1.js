import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../HeaderActivity';
import AudioActividad1 from '../../../../resources/audio/actividad-1.mp3'

const Activity1 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
            
            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Génesis 1:1-25.</h2>
                <audio controls="controls">
                <source src={AudioActividad1} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
            
            <div className="containerActivity1">
                <h2>Observa el siguiente video sobre la historia bíblica de la creación. </h2>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/Wz9mIBlzVx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity1;