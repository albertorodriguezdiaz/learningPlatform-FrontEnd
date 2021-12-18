import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

const Activity30 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity30;