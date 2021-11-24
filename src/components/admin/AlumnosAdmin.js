import React, { useState, useEffect } from 'react';
import clienteAxios from 'axios';

const AlumnosAdmin = () => {

    const [usuarios, getUsuarios] = useState([]);

    useEffect(() => {

        obtenerUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

       // Obtener los usuarios
    // const obtenerUsuarios = () => {

    //         clienteAxios.get('/api/users')
    //             .then( res => {
    //                 const alumnos = res.data.alumnos;
    //                 getUsuarios(alumnos);
    //             })
    //             .catch(error => console.log(`Error: ${error}`));        
    // }


    const obtenerUsuarios = async () => {
        try {
            const resultado = await clienteAxios.get('/api/users');
            getUsuarios(resultado.data.alumnos);
        } catch (error) {
            console.log(`Error Aqui: ${error}`);
        }
                        
    }   


    return ( 
        <div>
            <h1>Admin Alumnos</h1>
            <ul>
                {
                    usuarios.map( (alumno, key) => 
                        <li key={key}>
                            {alumno.nombre}
                            {alumno.email}
                            {alumno.registro}
                        </li>
                    )
                }
            </ul>
        </div>
     );
}
 
export default AlumnosAdmin;