import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/autentication/authContext';
import TopBar from '../layout/TopBar';
import ClienteAxios from 'axios';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const HomeAlumno = () => {

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario, usuarioAutenticado } = authContext;

    // state buscar bookuser
    const [books, guardarBooks] = useState([]);


    // Obtener Libros de usuarios
    const [bookuserGet, guardarBookUserGet] = useState([]);


    useEffect(() => {
        usuarioAutenticado();  
        obtenerBookUser();
        obtenerBooksSoyVida();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const obtenerBookUser = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/books');
            guardarBookUserGet(resultado.data.bookuser);    
        } catch (error) {
            console.log(error);
        }
    }

    
    const obtenerBooksSoyVida = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/booksoyvida');
            guardarBooks(resultado.data.booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    
        
    return (
    
    <div>
        <TopBar />
        <Container>

                <h1>Home Alumno</h1>
                <h2>Libros</h2>

                {
                    bookuserGet.map((book, key) =>
                        book.usuario===usuario._id
                        && 
                        books.map( (e) =>
                        // Compara el Id de libros con el id de libros de usuarios
                            e._id===book.libro
                            && <p>{e.nombre}</p>
                        )
                                
                    )
                }
            
        </Container>
     </div>

    );
}

export default HomeAlumno;