import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';


const Activity13 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />

                        
             <div className="containerActivity1">
                <h2>Observa el video don Bueno</h2>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/iSzDlQ_l1Uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity13;