import React from 'react';

const HeaderActivity = (props) => {

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    return ( 
        <h1>Actividad #{idActivity}</h1>
     );
}
 
export default HeaderActivity;