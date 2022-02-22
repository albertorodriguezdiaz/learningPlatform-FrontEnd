import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import AudioActividad40 from '../../../../resources/audio/libro2/actividad-40.mp3'


const Activity40 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

            <div className="containerActivity1">
                <h2>Escucha el audio del pasaje de Hechos 16: 11-15</h2>
                <audio controls="controls">
                <source src={AudioActividad40} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>

            <div className="containerActivity1">
                <h2>Observa la historia de la comunidad de Filipos en el siguiente video</h2>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/HZjiixrXaPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity40;