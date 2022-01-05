import React,{useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import Notas from '../alumnos/Notas';

const AlumnoNotas = (props, route ) => {
    const {nombre, id, libro, libroNombre} = props.location.query;
    
useEffect(() => {
    
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [nombre])

    return ( 
        <div>
            <h2>{nombre}</h2>
            <h3>Libro: {libroNombre}</h3>
        <Notas 
            {...props}
            idUsuario={id}
            idLibro={libro}
        />
        </div>
     );
}
 
// export default AlumnoNotas;
export default withRouter(AlumnoNotas);