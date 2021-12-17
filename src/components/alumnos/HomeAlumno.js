import React, { useContext, useState, useEffect } from 'react';
import ClienteAxios from 'axios';
import AuthContext from '../../context/autentication/authContext';
import BookContext from '../../context/books/bookContex';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import imgPrimero from '../../resources/img/primero-mapa.jpg';


const HomeAlumno = (props) => {

    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { bookuser, obtenerLibros } = bookContext;

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, userdata, usuarioAutenticado } = authContext;


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
        <h1>Home Alumno</h1>
        <h2>Libros</h2>

        <Row>
                {
                    bookuser.map( (r, key) => 
                    // Comparamos el id del libro con el id del usuario
                        r.usuario===userdata._id && 
                        books.map( (e) =>
                        // Compara el Id de libros con el id de libros de usuarios
                            e._id===r.libro                                
                            // Mostramos el link con el nombre del libro
                            && (
                                <Col md={4} key={key}>
                                    <Link to={"/" + e.nombre.toLowerCase()}>
                                        <p className='titleBookHome'>{e.nombre}</p><img className='imgBookHome' src={imgPrimero} alt="" />
                                    </Link>
                                </Col>
                                
                                )
                        )
                                
                    )
                }                
        </Row>    

     </div>

    );
}

export default HomeAlumno;