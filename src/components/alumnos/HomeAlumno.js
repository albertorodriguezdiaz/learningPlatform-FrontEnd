import React, { useContext, useState, useEffect } from 'react';
import ClienteAxios from 'axios';
import AuthContext from '../../context/autentication/authContext';
import BookContext from '../../context/books/bookContex';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const HomeAlumno = (props) => {

    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { bookuser, obtenerLibros } = bookContext;

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;


    // state buscar bookuser
    const [books, guardarBooks] = useState([]);


    useEffect(() => {
        usuarioAutenticado();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        
        obtenerBooksSoyVida();
        obtenerLibros();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario])


 

    
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
        
        <Container>

                <h1>Home Alumno</h1>
                <h2>Libros</h2>

                {
                    bookuser.map( (r, key) => 
                    // Comparamos el id del libro con el id del usuario
                        r.usuario===usuario._id && 
                        books.map( (e) =>
                        // Compara el Id de libros con el id de libros de usuarios
                            e._id===r.libro
                            // Mostramos el link con el nombre del libro
                            && <Link key={key}  to={"/" + e.nombre.toLowerCase()}><p>{e.nombre}</p></Link>
                        )
                                
                    )
                }                
                
        </Container>
     </div>

    );
}

export default HomeAlumno;