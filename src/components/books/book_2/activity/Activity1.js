import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad1 from '../../../../resources/audio/libro2/actividad-1.mp3'

const Activity1 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
            
            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Génesis 3:8-19</h2>
                <audio controls="controls">
                <source src={AudioActividad1} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
        
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity1;