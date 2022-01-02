import React, { useContext, useEffect } from 'react';
import BookContext from '../../context/books/bookContex';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import imgPrimero from '../../resources/img/primero-mapa.jpg';


const HomeAlumno = (props) => {
    let usuario = props.usuario;
    
    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { bookuser, books, obtenerLibros, obtenerBooksSoyVida } = bookContext;


    useEffect(() => {
        obtenerBooksSoyVida();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    useEffect(() => {
         obtenerLibros(usuario);
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [books])


    return (
    
    <div>
        <h1>Home Alumno</h1>
        <h2>Libros</h2>

        <Row>
                {
                    bookuser.map( (r, key) => 
                        books.map( (e) =>
                        // Compara el Id de libros con el id de libros de usuarios, para mostrar los que tiene activos
                            e._id===r.libro                                
                            // Mostramos el link con el nombre del libro
                            && (
                                <Col md={4} key={key}>
                                    <Link 
                                    // Pasamos el id del libro por el Link
                                    to={
                                        {
                                            pathname:  "/" + e.nombre.toLowerCase()
                                        }
                                    }>
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