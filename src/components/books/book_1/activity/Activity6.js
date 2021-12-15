import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../HeaderActivity';

const Activit6 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activit6;