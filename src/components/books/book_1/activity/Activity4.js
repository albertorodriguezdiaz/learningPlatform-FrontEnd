import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad4 from '../../../../resources/audio/actividad-4.mp3'


const Activity4 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

             <div className="containerActivity1">
                <h2>Escucha el pasaje en audio Génesis 1:26–27.</h2>
                <audio controls="controls">
                <source src={AudioActividad4} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
        

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity4;