import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad16 from '../../../../resources/audio/actividad-16.mp3'
import AudioActividad16b from '../../../../resources/audio/actividad-16b.mp3'


const Activity16 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Génesis 4:1-16 </h2>
                <audio controls="controls">
                <source src={AudioActividad16} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Éxodo 20:13</h2>
                <audio controls="controls">
                <source src={AudioActividad16b} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity16;