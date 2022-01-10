import React,{useState, useEffect, useContext} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import TopBar from '../layout/TopBar';
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import AlumnoNotas from './AlumnoNotas';
import BookContext from '../../context/books/bookContex';




const BookNotas = (props) => {

    // Extraer la informacion de autenticacion
    const bookContext = useContext(BookContext);
    const { obtenerBookUser, books, colegios, obtenerColegios, 
            obtenerUsuariosByColegio, obtenerBooksSoyVida, usuariosByColegio, bookuserGet } = bookContext;

    // state para BookSoyvida
    const [bookuser, guardarBookUser] = useState({});
    const {libro, colegio} = bookuser;



    useEffect(() => {
        obtenerColegios();
        obtenerBooksSoyVida();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        obtenerBookUser(libro, colegio);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colegio, libro]);



    // Lee los contenidos del input
    const onChangeBooks = (e) =>{
        guardarBookUser({
            ...bookuser,
            [e.target.name] : e.target.value
        })
    }

        

    const onSubmitNotas = (e)=>{
        e.preventDefault();
        obtenerUsuariosByColegio(colegio);
    }

    return ( 

    <div className='homebookBoxAdmin notasAdminPage'>
       <TopBar />
        <Container>      
            <h1>Notas</h1>

            <Form
                onSubmit={onSubmitNotas}
            >
            <Row>
                <Col>
                
                    <div className="campo-form">
                        <div className="selectBox">
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
                    </div>
                </Col>
                <Col>
                    <div className="campo-form">
                        <div className="selectBox">
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
                    </div>
                </Col>
            </Row>
                    <div className="d-grid gap-2">
                        <Button 
                            as="input" variant="primary" size="lg" 
                            type="submit" 
                            value="Buscar">
                        </Button>  
                    </div>

                </Form>

        </Container>

        <Router>
        <Container>
            <Row>
                
                <Col md={2}>

                <p >Selecciona un Alumno</p>
                <ul>
                {   
                    bookuserGet.map((book, key)=>
                        usuariosByColegio.map(us =>
                        us._id===book.usuario &&
                            books.map(bo =>
                            bo._id===book.libro &&
                            <Link 
                                key={key}  
                                to={{
                                    pathname:`/alumno/notas/${us.nombre}-${bo.nombre}`,
                                    query:{nombre: us.nombre, id: us._id, libro: bo._id, libroNombre: bo.nombre}
                                }}
                            >                          
                                <li>{us.nombre} </li>
                            </Link>
                            )
                        )
                    )
                 }
                 </ul>

                </Col>

                <Col md={10} className='notasAdmin'>
                    <Route path={"/alumno/notas/:id"} component={AlumnoNotas}>
                        <AlumnoNotas {...props}  />
                    </Route>
                </Col>

            </Row>
        </Container>
        </Router>
    </div>

     );
}
 






export default BookNotas;