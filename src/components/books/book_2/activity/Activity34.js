import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad34 from '../../../../resources/audio/libro2/actividad-34.mp3'


const Activity34 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el pasaje en audio de Lucas 23:32-43</h2>
                <audio controls="controls">
                <source src={AudioActividad34} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity34;