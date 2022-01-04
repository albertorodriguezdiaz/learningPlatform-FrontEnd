import React, {useState, useEffect} from 'react';
import ClienteAxios from 'axios';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import TopBar from '../layout/TopBar';

const BooksAdmin = () => {
    
    // Seleccion BookSoyvida Para editar
    const [selectbook, guardarSelectBook] = useState(false);

    // state para BookSoyvida
    const [bookuser, guardarBookUser] = useState({
        libro:'', usuario: '', colegio: ''
    });
    const {libro, usuario, colegio} = bookuser;

    // Obtener Libros de usuarios
    const [bookuserGet, guardarBookUserGet] = useState([]);


    // state buscar bookuser
    const [books, guardarBooks] = useState([]);


    const [colegios, guardarColegios] = useState([]);


    const [usuarios, guardarUsuario] = useState([]);

    useEffect(() => {
        obtenerColegios();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        obtenerBookUser();
        obtenerBooksSoyVida();
        obtenerUsuariosByColegio(colegio);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [libro, colegio, bookuser]);


  

    // Lee los contenidos del input
    const onChangeBooks = (e) =>{

        
        guardarBookUser({
            ...bookuser,
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
        agregarBookUser(bookuser);
        agregarActivity(bookuser);

    } else {
        // actualizar bookuser existente
        actualizarBook(bookuser);
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




const agregarBookUser = async bookuser => {
    try {
        const resultado = await ClienteAxios.post('/api/books', bookuser);
        guardarBookUser(resultado.data);

    } catch (error) {
        console.log(error);
    }

    obtenerBookUser();
}


const agregarActivity = async bookuser => {
    try {
        const resultado = await ClienteAxios.post('/api/activity', bookuser);
        guardarBookUser(resultado.data);

    } catch (error) {
        console.log(error);
    }

}


const obtenerBookUser = async () => {
    try {
        const resultado = await ClienteAxios.get('/api/books', { params: { libro, colegio }});
        guardarBookUserGet(resultado.data.bookuser);
        console.log('obtenerBookUser');
        console.log(resultado.data.bookuser);

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


    // Eliminar book
    // const eliminarBook = async booksoyvidaId =>{
    //     try {
    //         await ClienteAxios.delete(`/api/booksoyvida/${booksoyvidaId}`);
    //         obtenerBooksSoyVida();
            
    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //     }

    // }


    const obtenerUsuariosByColegio = async (colegio) => {
        try {
            
            const resultado = await ClienteAxios.get('/api/users', { params: { colegio }});
            guardarUsuario(resultado.data.alumnos);
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }
                        
    }

    const obtenerColegios = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/schools');
            guardarColegios(resultado.data.colegios);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
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
                                    usuarios.map((usuario, key)=>
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
                                usuarios.map( (user) =>
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