import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad16 from '../../../../resources/audio/libro2/actividad-16.mp3'


const Activity16 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Éxodo 40:34-38</h2>
                <audio controls="controls">
                <source src={AudioActividad16} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity16;