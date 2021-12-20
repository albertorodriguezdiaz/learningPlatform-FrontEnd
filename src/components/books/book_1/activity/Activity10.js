import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad10 from '../../../../resources/audio/actividad-10.mp3'


const Activity10 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

             <div className="containerActivity1">
                <h2>Escucha el pasaje en audio Génesis 3:1-19</h2>
                <audio controls="controls">
                <source src={AudioActividad10} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
        

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity10;