import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad28 from '../../../../resources/audio/libro2/actividad-28.mp3'


const Activity28 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Lucas 19:1-10</h2>
                <audio controls="controls">
                <source src={AudioActividad28} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

                        

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity28;