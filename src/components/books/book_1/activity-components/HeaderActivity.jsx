import React from 'react';

const HeaderActivity = (props) => {

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    return ( 
        <div className='titleBox'>
            <h1 className='titleActivity'>Actividad #{idActivity}</h1>
        </div>
     );
}
 
export default HeaderActivity;