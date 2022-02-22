import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad43 from '../../../../resources/audio/libro2/actividad-43.mp3'


const Activity43 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Santiago 5:13-16</h2>
                <audio controls="controls">
                <source src={AudioActividad43} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity43;