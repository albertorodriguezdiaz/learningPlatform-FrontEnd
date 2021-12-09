import React, {useState, useEffect} from 'react';
import ClienteAxios from 'axios';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import TopBar from '../layout/TopBar';

const BooksAdmin = () => {
    
    // Seleccion BookSoyvida Para editar
    const [selectbook, guardarSelectBook] = useState(false);

    // state para BookSoyvida
    const [bookuser, guardarBookUser] = useState({});
    const {libro, usuario, colegio} = bookuser;

    // Obtener Libros de usuarios
    const [bookuserGet, guardarBookUserGet] = useState([]);


    // state buscar bookuser
    const [books, guardarBooks] = useState([]);


    const [colegios, guardarColegios] = useState([]);


    const [usuarios, guardarUsuario] = useState([]);


    useEffect(() => {

        obtenerBooksSoyVida();
        obtenerUsuariosByColegio(colegio);
        obtenerColegios();
        obtenerBookUser();
           
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colegio]);



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
    
    // Reiniciar el form
    // guardarBookUser({
    //     libro: '',
    //     usuario: '',
    //     colegio: ''
    // })

    
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
        console.log(resultado.data);

    } catch (error) {
        console.log(error);
    }

}


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





    // Seleccionar booksoyvida para editar
    // const seleccionarBook = booksoyvida =>{
    //     guardarSelectBook(true);

    //     guardarBookUser({
    //         ...booksoyvida
    //     })

    // }

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
        <div>
            <TopBar />
        <Container>

            <Row>
            <Col>
            <Form
                onSubmit={onSubmitBook}
            >
                    <div className="campo-form">
                        <select
                            defaultValue={colegio}
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


                    <div className="campo-form">
                        <select
                            defaultValue={usuario}
                            id="usuario"
                            name="usuario"
                            onChange={onChangeBooks}
                        >
                            <option value="">Seleccionar un Colegio</option>
                            {
                                usuarios.map((usuario, key)=>
                                    <option key={key} value={usuario._id}>{usuario.nombre}</option>
                                )
                            }
                        </select>
                    </div>

                    <div className="campo-form">
                        <select
                            defaultValue={libro}
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

                    <div className="d-grid gap-2">
                        <Button 
                            as="input" variant="primary" size="lg" 
                            type="submit" 
                            value={ selectbook ? 'Editar Book SoyVida' : 'Agregar Book SoyVida' }>
                        </Button>  
                    </div>

                </Form>
                </Col>
            </Row>
            


            <Row>
            <Col>
                <h2>books</h2>
                <Table>
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
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>
                            {   
                                books.map( (book) =>
                                // Compara el Id de libros con el id de libros de usuarios
                                    book._id===bookus.libro
                                    && book.nombre
                                )
                            }
                            </td>
                            <td>
                            {
                                usuarios.map( (user) =>
                                // Compara el Id de usurios con el id de usuarios con libros
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