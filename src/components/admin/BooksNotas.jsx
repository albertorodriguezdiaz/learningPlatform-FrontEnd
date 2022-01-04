import React,{useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ClienteAxios from 'axios';
import TopBar from '../layout/TopBar';




const BookNotas = (props) => {


    // state para BookSoyvida
    const [bookuser, guardarBookUser] = useState({});
    const {libro, colegio} = bookuser;

    // Obtener Libros de usuarios
    const [bookuserGet, guardarBookUserGet] = useState([]);


    // state buscar bookuser
    const [books, guardarBooks] = useState([]);


    const [colegios, guardarColegios] = useState([]);


    const [usuarios, guardarUsuario] = useState([]);



    useEffect(() => {
        obtenerColegios();
        obtenerBooksSoyVida();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        obtenerBookUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colegio, libro]);



    // Lee los contenidos del input
    const onChangeBooks = (e) =>{
        guardarBookUser({
            ...bookuser,
            [e.target.name] : e.target.value
        })
    }

        

    const obtenerBookUser = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/books', { params: { libro, colegio }});
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


    const onSubmitNotas = (e)=>{
        e.preventDefault();
        obtenerUsuariosByColegio(colegio);
    }

    return ( 

    <div className='homebookBoxAdmin'>
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

        <Container>
            <Row>
                <Col md={6}>
                {   
                    bookuserGet.map((book, key)=>
                        usuarios.map(us =>
                            us._id===book.usuario &&
                                <div key={key}>{us.nombre}</div>
                        )
                    )
                 }
                </Col>
                <Col md={6}>
                    Notas Usuario
                </Col>
            </Row>
        </Container>
    </div>

     );
}
 
export default BookNotas;