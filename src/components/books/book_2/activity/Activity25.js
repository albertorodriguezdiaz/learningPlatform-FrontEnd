import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad25 from '../../../../resources/audio/libro2/actividad-25.mp3'
import AudioActividad252 from '../../../../resources/audio/libro2/actividad-25-2.mp3'


const Activity25 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Mateo 4:18-22</h2>
                <audio controls="controls">
                <source src={AudioActividad25} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Marcos 3:13-19</h2>
                <audio controls="controls">
                <source src={AudioActividad252} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity25;