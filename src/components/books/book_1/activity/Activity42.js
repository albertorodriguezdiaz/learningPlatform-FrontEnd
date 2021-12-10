import React from 'react';
import ButtonUpdate from '../ButtonUpdate';
import HeaderActivity from '../HeaderActivity';

const Activity42 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity42;