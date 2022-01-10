import React, {useState, useEffect, useContext} from 'react';
import ClienteAxios from 'axios';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import TopBar from '../layout/TopBar';
import BookContext from '../../context/books/bookContex';

const BookSoyVidaAdmin = () => {
    
    // Extraer la informacion de autenticacion
    const bookContext = useContext(BookContext);
    const { books, obtenerBooksSoyVida, agregarBook} = bookContext;

    // Seleccion BookSoyvida Para editar
    const [selectbook, guardarSelectBook] = useState(false);

    // state para BookSoyvida
    const [booksoyvida, guardarBooksoyvida] = useState({
        nombre: '',
    });


    // Extraer nombre de book BookSoyvida
    const {nombre} = booksoyvida;


    useEffect(() => {

        obtenerBooksSoyVida();
           
    }, []);


    // Lee los contenidos del input
    const onChangeBookSoyVida = (e) =>{
        guardarBooksoyvida({
            ...booksoyvida,
            [e.target.name] : e.target.value
        })
    }

    
   // Cuando el admin envia un BookSoyvida
   const onSubmitBook = e => {
    e.preventDefault();

    // Validar si es edicion o es tarea nueva
    if (selectbook === false) {
        // agregar el nuevo booksoyvida
        agregarBook(booksoyvida);
    } else {
        // actualizar booksoyvida existente
        actualizarBook(booksoyvida);
        guardarSelectBook(false);
    }
    
    // Reiniciar el form
    guardarBooksoyvida({
        nombre: ''
    })

    
}





      



    // Eliminar proyecto
    // const eliminarBook = async booksoyvidaId =>{
    //     try {
    //         await ClienteAxios.delete(`/api/booksoyvida/${booksoyvidaId}`);
    //         obtenerBooksSoyVida();
            
    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //     }

    // }



    // Seleccionar booksoyvida para editar
    const seleccionarBook = booksoyvida =>{
        guardarSelectBook(true);

        guardarBooksoyvida({
            ...booksoyvida
        })

    }

    // Editar o modificar booksoyvida
    const actualizarBook = async booksoyvida => {
        try {
            await ClienteAxios.put(`/api/booksoyvida/${booksoyvida._id}`, booksoyvida);
            obtenerBooksSoyVida();
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }



    return ( 
        <div className='homebookBoxAdmin'>
       <TopBar />
        <Container >
            <Row>
                <Col lg="12">

                    <h2>Agregar Libro SoyVida</h2>
                    <form
                        onSubmit={onSubmitBook}
                    >
                            <label htmlFor="nombre">Nombre del Libro SoyVida</label>
                            <input 
                                type="text" 
                                className="input-text"
                                placeholder="Ingresar nuevo libro..."
                                name="nombre"
                                value={nombre || ''}
                                onChange={onChangeBookSoyVida}
                            />
                    <div className="d-grid gap-2">
                    <Button 
                        as="input" variant="primary" size="lg" 
                        type="submit" 
                        value={ selectbook ? 'Editar Book SoyVida' : 'Agregar Book SoyVida' }>
                    </Button>     
                    </div>                    
                    
                    
                    </form>
                </Col>
                
            </Row>


            <Row>
                <h2>Libros Soy Vida</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Editar</th>
                            {/* <th>Eliminar</th> */}
                        </tr>
                    </thead>

                    <tbody>

                {
                    books.map( (book, key) => 
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{book.nombre}</td>
                            <td>
                                <Button 
                                    variant="outline-primary"
                                    type="button"
                                    onClick={ () => seleccionarBook(book)}
                                    >Editar
                                </Button>
                            </td>
                            {/* <td>
                                <Button 
                                    variant="danger"
                                    type="button"
                                    onClick={ () => eliminarBook(book._id)}
                                    >Eliminar
                                </Button>
                            </td> */}
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
 
export default BookSoyVidaAdmin;