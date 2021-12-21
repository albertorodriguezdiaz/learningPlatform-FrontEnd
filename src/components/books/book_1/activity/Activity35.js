import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

const Activity35 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
            
            <div className="containerActivity1">
                <h2>¿Por qué murió Jesús?</h2>
                <h2>Mira el siguiente video y responde las preguntas que están en tu cartilla Soy vida. Prepárate para socializar tus respuestas en la próxima clase.</h2>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/5s7_OT8kcxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity35;