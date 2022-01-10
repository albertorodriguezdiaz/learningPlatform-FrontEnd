import React, {useState, useEffect, useContext} from 'react';
import ClienteAxios from 'axios';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import TopBar from '../../layout/TopBar';
import BookContext from '../../../context/books/bookContex';

const ColegiosAdmin = (props) => {

      // Extraer la informacion de autenticacion
    const bookContext = useContext(BookContext);
    const { colegios, obtenerColegios, agregarColegio, 
            actualizarColegio, eliminarColegio, colegiosRefresh} = bookContext;
        
    // Seleccion Colegio Para editar
    const [selectcol, guardarSelectcol] = useState(false);

    // state para colegio
    const [colegio, guardarColegio] = useState({
        nombre: '',
    });
    
    // Extraer nombre de colegio
    const {nombre} = colegio;


    useEffect(() => {
        obtenerColegios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colegiosRefresh]);


    // Lee los contenidos del input
    const onChangecolegio = (e) =>{
        guardarColegio({
            ...colegio,
            [e.target.name] : e.target.value
        })
    }

    
   // Cuando el usuario envia un colegio
   const onSubmitcolegio = e => {
    e.preventDefault();

    // Validar si es edicion o es tarea nueva
    if (selectcol === false) {
        // agregar el nuevo colegio
        agregarColegio(colegio);
    } else {
        // actualizar colegio existente
        actualizarColegio(colegio);
        guardarSelectcol(false);
    }
    
    // Reiniciar el form
    guardarColegio({
        nombre: ''
    })

    
}




    // Seleccionar colegio para editar
    const seleccionarColegio = colegio =>{
        guardarSelectcol(true);

        guardarColegio({
            ...colegio
        })

    }




    return ( 
        <div className='homebookBoxAdmin'>
       <TopBar />
        <Container >
            <Row>
                <Col lg="12">

                    <h2>Agregar Colegio</h2>
                    <form
                        className="formulario-nuevo-colegio"
                        onSubmit={onSubmitcolegio}
                    >
                        <input 
                            type="text" 
                            className="input-text"
                            placeholder="Nombre colegio..."
                            name="nombre"
                            value={nombre || ''}
                            onChange={onChangecolegio}
                            
                        />
                    <div className="d-grid gap-2">
                    <Button 
                        as="input" variant="primary" size="lg" 
                        type="submit" 
                        value={ selectcol ? 'Editar Colegio' : 'Agregar Colegio' }>
                    </Button>     
                    </div>                    
                    
                    
                    </form>
                </Col>
                
            </Row>


            <Row>
                <h2>Colegios</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>



                    { colegios &&
                        colegios.map( (colegio, key) => 
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{colegio.nombre}</td>
                                <td>
                                    <Button 
                                        variant="outline-primary"
                                        type="button"
                                        onClick={ () => seleccionarColegio(colegio)}
                                        >Editar
                                    </Button>
                                </td>
                                <td>
                                    <Button 
                                        variant="danger"
                                        type="button"
                                        onClick={ () => eliminarColegio(colegio._id)}
                                        >Eliminar
                                    </Button>

                                </td>
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
 
export default ColegiosAdmin;