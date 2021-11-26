import React, {useState, useEffect} from 'react';
import ClienteAxios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const ColegiosAdmin = () => {

    useEffect(() => {

        obtenerColegios();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // state para colegio
    const [colegio, guardarColegio] = useState({
        nombre: '',
    });

    // state buscar colegios
    const [colegios, guardarColegios] = useState([]);

    // Extraer nombre de colegio
    const {nombre} = colegio;


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

    // agregar al state
    agregarColegio(colegio);

    

    // Reiniciar el form
    guardarColegio({
        nombre: ''
    })

    obtenerColegios();
    
}


const agregarColegio = async colegio => {
    try {
        const resultado = await ClienteAxios.post('/api/schools', colegio);
        guardarColegio(resultado.data);

    } catch (error) {
        console.log(error);
    }
}



const obtenerColegios = async () => {
    try {
        const resultado = await ClienteAxios.get('/api/schools');
        guardarColegios(resultado.data.colegios);
        console.log(colegios);
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
                            placeholder="Nombre colegio"
                            name="nombre"
                            value={nombre}
                            onChange={onChangecolegio}
                        />

                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar colegio"
                    />
                    
                    
                    </form>
                </Col>
                
            </Row>


            <Row>
                <h2>Colegios</h2>
                <ul>
                {
                    colegios.map( (colegio, key) => 
                        <li key={key}>
                            {colegio.nombre}
                        </li>
                    )
                }
                </ul>
            </Row>
        </Container>




     );
}
 
export default ColegiosAdmin;