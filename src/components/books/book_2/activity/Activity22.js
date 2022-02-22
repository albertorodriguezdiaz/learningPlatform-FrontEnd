import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

const Activity22 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

             <div className="containerActivity1">
                <h2>Observa el siguiente video sobre la historia de David, Saúl y Jonatán narrada en 1 Samuel 18-20</h2>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/OxLvS_y1vp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity22;