import React, {useState, useEffect, useContext} from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import TopBar from '../layout/TopBar';
import BookContext from '../../context/books/bookContex';


const BooksAdmin = () => {

    // Extraer la informacion de autenticacion
    const bookContext = useContext(BookContext);
    const { usuariosByColegio, bookusersv, books, colegios, obtenerColegios, bookuserGet, 
            obtenerUsuariosByColegio, actualizarBook, obtenerBooksSoyVida,  
            obtenerBookUser, agregarBookUser, agregarActivity, guardarBookUser } = bookContext;
    
    // Seleccion BookSoyvida Para editar
    const [selectbook, guardarSelectBook] = useState(false);


    const {libro, usuario, colegio} = bookusersv;



    useEffect(() => {
        obtenerColegios();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        obtenerBookUser(libro, colegio);
        obtenerBooksSoyVida();
        obtenerUsuariosByColegio(colegio);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [libro, colegio, bookusersv]);


  

    // Lee los contenidos del input
    const onChangeBooks = (e) =>{

        
        guardarBookUser({
            ...bookusersv,
            [e.target.name] : e.target.value
        })

    }
    
    
   // Cuando el admin asigna un nuevo libro
   const onSubmitBook = e => {
    e.preventDefault();

        // Validar que no haya campos vacios
        if( libro.trim() === '' ||
            colegio.trim() === '' ||
            !usuario || usuario.trim() === ''){
        console.log('Todos los campos son obligatorios', 'alerta-error');
        return;
    }


    // Validar si es edicion o es nuevo
    if (selectbook === false) {
        // agregar el nuevo libro al usuario
        agregarBookUser(bookusersv);
        agregarActivity(bookusersv);

    } else {
        // actualizar bookuser existente
        actualizarBook(bookusersv);
        guardarSelectBook(false);
    }

    // Refrecar page
    // window.location.reload();
    
    // Reiniciar el form
    guardarBookUser({
        libro: '',
        usuario: '',
        colegio: ''
    })

    
}



    return ( 
        <div className='homebookBoxAdmin'>
       <TopBar />
        <Container>
            
            <h2>Añadir Actividades del Libro</h2>

            <Form
                onSubmit={onSubmitBook}
                >
            <Row>
                <Col>
                
                    <div className="campo-form">
                        <div className="selectBox">
                            <select
                                defaultValue={colegio}
                                value={colegio}
                                id="colegio"
                                name="colegio"
                                onChange={onChangeBooks}
                            >
                                <option value="">Seleccionar un Colegio</option>
                                {
                                    colegios.map((colegio, key)=>
                                        <option key={key} value={colegio._id}>{colegio.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="campo-form">
                        <div className="selectBox">
                            <select
                                defaultValue={libro}
                                value={libro}
                                id="libro"
                                name="libro"
                                onChange={onChangeBooks}
                            >
                                <option value="">Seleccionar un Libro</option>
                                {
                                    books.map((book, key)=>
                                        <option key={key} value={book._id}>{book.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="campo-form">
                        <div className="selectBox">
                            <select
                                defaultValue={usuario}
                                value={usuario}
                                id="usuario"
                                name="usuario"
                                onChange={onChangeBooks}
                            >
                                <option value="">Seleccionar un Estudiante</option>
                                {
                                    usuariosByColegio.map((usuario, key)=>
                                        <option key={key} value={usuario._id}>{usuario.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </Col>
            </Row>
                    <div className="d-grid gap-2">
                        <Button 
                            as="input" variant="primary" size="lg" 
                            type="submit" 
                            value={ selectbook ? 'Editar Actividades Libro' : 'Agregar Actividades Libro' }>
                        </Button>  
                    </div>

                </Form>
            


            <Row>
            <Col>
                <h2>Usuarios</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Libro</th>
                            <th>Usuario</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>

                {   
                    bookuserGet.map( (bookus, key) => 
                    // (colegio && libro) &&
                    
                            <tr key={key}>
                            <td>{key+1}</td>
                            <td>
                            {   
                                books.map( (book) =>
                                // Compara el Id de libros con el id de libros de usuarios para mostrar el nombre
                                    book._id===bookus.libro
                                    && book.nombre
                                )
                            }
                            </td>
                            <td>
                            {
                                usuariosByColegio.map( (user) =>
                                // Compara el Id de usurios con el id de usuarios con libros para mostrar el nombre
                                    user._id===bookus.usuario
                                    && user.nombre
                                )
                            }
                            </td>
                            <td>
                                <Button 
                                    variant="outline-primary"
                                    type="button"
                                    // onClick={ () => seleccionarBook(bookus)}
                                    >Editar
                                </Button>
                            </td>
                            <td>
                                <Button 
                                    variant="danger"
                                    type="button"
                                    // onClick={ () => eliminarBook(bookus._id)}
                                    >Eliminar
                                </Button>

                            </td>
                        </tr>   
                        
                                                 
                    )
                }

                    </tbody>
                </Table>
            </Col>
            </Row>
        </Container>
        </div>



     );
}
 
export default BooksAdmin;