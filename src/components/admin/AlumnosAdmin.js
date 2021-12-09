import React, { useState, useEffect } from 'react';
import clienteAxios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Table } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import TopBar from '../layout/TopBar';

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
            console.log(`Error: ${error}`);
        }
                        
    }   


    return ( 
        <div>
            <TopBar />
        <Container>
            <Row>            

                <h1>Admin Alumnos</h1>
                <Link to='/nueva-cuenta'>
                    Crear nuevo usuario
                </Link>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Colegio</th>
                            <th>Tipo</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            usuarios.map( (alumno, key) => 
                            <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.email}</td>
                                    <td>{alumno.colegio}</td>
                                    <td>{alumno.tipo}</td>
                                    <td>
                                        <Button 
                                            variant="outline-primary"
                                            type="button"
                                            // onClick={ () => seleccionarColegio(colegio)}
                                            >Editar
                                        </Button>
                                    </td>
                                    <td>
                                        <Button 
                                            variant="danger"
                                            type="button"
                                            // onClick={ () => eliminarColegio(colegio._id)}
                                            >Eliminar
                                        </Button>

                                    </td>
                            </tr>  
                            )
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
        </div>
     );
}
 
export default AlumnosAdmin;