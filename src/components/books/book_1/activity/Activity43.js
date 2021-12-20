import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad43 from '../../../../resources/audio/actividad-43.mp3'
import AudioActividad43b from '../../../../resources/audio/actividad-43b.mp3'


const Activity43 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Hechos 8:1-3</h2>
                <audio controls="controls">
                <source src={AudioActividad43} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Hechos 22:3-5</h2>
                <audio controls="controls">
                <source src={AudioActividad43b} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity43;