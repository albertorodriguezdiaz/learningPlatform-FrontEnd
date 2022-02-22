import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad19 from '../../../../resources/audio/libro2/actividad-19.mp3'


const Activity19 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Proverbios 16:28; 17:17, 9</h2>
                <audio controls="controls">
                <source src={AudioActividad19} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}



export default Activity19;