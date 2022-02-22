import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad46 from '../../../../resources/audio/libro2/actividad-46.mp3'


const Activity46 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Colosenses 2:11-15</h2>
                <audio controls="controls">
                <source src={AudioActividad46} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity46;