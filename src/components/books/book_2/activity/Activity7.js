import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad7 from '../../../../resources/audio/actividad-7.mp3'


const Activity7 = (props) => {

     return ( 
        <div>
        <HeaderActivity {...props} />

        <div className="containerActivity1">
           <h2>Escucha el pasaje en audio Génesis 2:18-25</h2>
           <audio controls="controls">
           <source src={AudioActividad7} type="audio/mpeg" />
           Your browser does not support the audio element.
           </audio>
        </div>

        <ButtonUpdate {...props} />
    </div>
     );
}
 
export default Activity7;