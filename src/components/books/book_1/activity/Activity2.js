import React from 'react';
import ButtonUpdate from '../ButtonUpdate';

const Activity2 = (props, {idActivity}) => {
    return ( 
        <ButtonUpdate
        {...props}
            idActivity={idActivity}
            actividad={{actividad2: true}}
        />
     );
}
 
export default Activity2;