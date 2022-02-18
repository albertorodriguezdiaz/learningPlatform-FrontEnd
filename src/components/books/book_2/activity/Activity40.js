import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad40 from '../../../../resources/audio/actividad-40.mp3'
import AudioActividad40b from '../../../../resources/audio/actividad-40b.mp3'


const Activity40 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Hechos 4:31-37</h2>
                <audio controls="controls">
                <source src={AudioActividad40} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Hechos 2:47</h2>
                <audio controls="controls">
                <source src={AudioActividad40b} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity40;