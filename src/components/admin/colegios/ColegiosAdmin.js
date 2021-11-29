import React, {useState, useEffect} from 'react';
import ClienteAxios from 'axios';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const ColegiosAdmin = () => {
    
    // Seleccion Colegio Para editar
    const [selectcol, guardarSelectcol] = useState(false);

    // state para colegio
    const [colegio, guardarColegio] = useState({
        nombre: '',
    });

    // state buscar colegios
    const [colegios, guardarColegios] = useState([]);

    // Extraer nombre de colegio
    const {nombre} = colegio;


    useEffect(() => {

        obtenerColegios();
           
    }, []);


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


const agregarColegio = async colegio => {
    try {
        const resultado = await ClienteAxios.post('/api/schools', colegio);
        guardarColegio(resultado.data);

    } catch (error) {
        console.log(error);
    }

    obtenerColegios();
}




const obtenerColegios = async () => {
    try {
        const resultado = await ClienteAxios.get('/api/schools');
        guardarColegios(resultado.data.colegios);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
                    
}


    // Eliminar proyecto
    const eliminarColegio = async colegioId =>{
        try {
            await ClienteAxios.delete(`/api/schools/${colegioId}`);
            obtenerColegios();
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }

    }



    // Seleccionar colegio para editar
    const seleccionarColegio = colegio =>{
        guardarSelectcol(true);

        guardarColegio({
            ...colegio
        })

    }

    // Editar o modificar Colegio
    const actualizarColegio = async colegio => {
        try {
            await ClienteAxios.put(`/api/schools/${colegio._id}`, colegio);
            obtenerColegios();
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }



    return ( 
        <Container>
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
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>

                {
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




     );
}
 
export default ColegiosAdmin;