import React from 'react';
import ButtonUpdate from '../ButtonUpdate';

const Activity1 = (props, idActivity) => {
    return ( 
        <ButtonUpdate
            {...props}
            idActivity={idActivity}
            actividad={{actividad1: true}}
        />
     );
}
 
export default Activity1;