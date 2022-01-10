import React,{useContext, useState, useEffect} from 'react';
import { Container, Accordion, Tab, Row, Nav, Col } from 'react-bootstrap';
import TopBar from '../layout/TopBar';
import MainTable from './tablenotas/MainTable';

import AuthContext from '../../context/autentication/authContext';
import BookContext from '../../context/books/bookContex';

const Notas = (props) => {

        const {idUsuario, idLibro} = props;
        const libroPrimero = '61a6f392d99e00fe045445e1';

        // Extraer la informacion de autenticacion
        const authContext = useContext(AuthContext);
        const {userdata, usuarioAutenticado, usuario } = authContext;
        
        const [render, setRender] = useState(false);
        
        const bookContext = useContext(BookContext);
        const {actividades, obtenerActivity, activityRealizadas, actividadeslibro} = bookContext;
        
        useEffect(() => {
          usuarioAutenticado();
          setRender(true);
          
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        
        
        useEffect(() => {  
            if (!idUsuario && !idLibro) {
                obtenerActivity(userdata._id, libroPrimero);  
            }
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [usuario]) 
        
        useEffect(() => {  
            if (idLibro) {
                obtenerActivity(idUsuario, idLibro); 
            }
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [idLibro, idUsuario]) 
        
          
          useEffect(() => {
            
            activityRealizadas(); 
            console.log(`ACTIVIDADES ${JSON.stringify(actividadeslibro)}`);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [actividades]) 
   

    return ( 
        
    <div className='notasMain'>
        <TopBar />
        <Container className='marginTop150 width700'>      
        <div className='titleBox'>
            <h1 className='titleActivity'>Notas Libro</h1>
        </div>      

            <div className='containerActivity tableNotas'>
            <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header><i class="fas fa-angle-double-right colorVerde"></i> Periodo #1</Accordion.Header>
                <Accordion.Body>
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="leccion1-1">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="leccion1-1">Lección 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion2-1">Lección 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-3-1">Lección 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-4-1">Lección 4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="leccion1-1">

                            { <MainTable 
                                leccion={1} periodo={1} 
                                actividadeslibro={actividadeslibro}
                                id={1} 
                            {...props} />}
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion2-1">

                            { <MainTable 
                                leccion={2} periodo={1} 
                                actividadeslibro={actividadeslibro}
                                id={2} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-3-1">

                            { <MainTable 
                                leccion={3} periodo={1} 
                                actividadeslibro={actividadeslibro}
                                id={3} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-4-1">

                            { <MainTable 
                                leccion={4} periodo={1} 
                                actividadeslibro={actividadeslibro}
                                id={4} 
                            {...props} />}

                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>

                </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                <Accordion.Header><i class="fas fa-angle-double-right colorVerde"></i> Periodo #2</Accordion.Header>
                <Accordion.Body>
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="leccion1-2">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="leccion1-2">Lección 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion2-2">Lección 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-3-2">Lección 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-4-2">Lección 4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="leccion1-2">

                            { <MainTable 
                                leccion={1} periodo={2} 
                                actividadeslibro={actividadeslibro}
                                id={5} 
                            {...props} />}
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion2-2">

                            { <MainTable 
                                leccion={2} periodo={2} 
                                actividadeslibro={actividadeslibro}
                                id={6} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-3-2">

                            { <MainTable 
                                leccion={3} periodo={2} 
                                actividadeslibro={actividadeslibro}
                                id={7} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-4-2">

                            { <MainTable 
                                leccion={4} periodo={2} 
                                actividadeslibro={actividadeslibro}
                                id={8} 
                            {...props} />}

                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                <Accordion.Header><i class="fas fa-angle-double-right colorVerde"></i> Periodo #3</Accordion.Header>
                <Accordion.Body>
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="leccion1-3">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="leccion1-3">Lección 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion2-3">Lección 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-3-3">Lección 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-4-3">Lección 4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="leccion1-3">

                            { <MainTable 
                                leccion={1} periodo={3} 
                                actividadeslibro={actividadeslibro}
                                id={9} 
                            {...props} />}
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion2-3">

                            { <MainTable 
                                leccion={2} periodo={3} 
                                actividadeslibro={actividadeslibro}
                                id={10} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-3-3">

                            { <MainTable 
                                leccion={3} periodo={3} 
                                actividadeslibro={actividadeslibro}
                                id={11} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-4-3">

                            { <MainTable 
                                leccion={4} periodo={3} 
                                actividadeslibro={actividadeslibro}
                                id={12} 
                            {...props} />}

                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                <Accordion.Header><i class="fas fa-angle-double-right colorVerde"></i> Periodo #4</Accordion.Header>
                <Accordion.Body>
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="leccion1-4">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="leccion1-4">Lección 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion2-4">Lección 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-3-4">Lección 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="leccion-4-4">Lección 4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="leccion1-4">

                            { <MainTable 
                                leccion={1} periodo={4} 
                                actividadeslibro={actividadeslibro}
                                id={13} 
                            {...props} />}
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion2-4">

                            { <MainTable 
                                leccion={2} periodo={4} 
                                actividadeslibro={actividadeslibro}
                                id={14} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-3-4">

                            { <MainTable 
                                leccion={3} periodo={4} 
                                actividadeslibro={actividadeslibro}
                                id={15} 
                            {...props} />}

                        </Tab.Pane>
                        <Tab.Pane eventKey="leccion-4-4">

                            { <MainTable 
                                leccion={4} periodo={4} 
                                actividadeslibro={actividadeslibro}
                                id={16} 
                            {...props} />}

                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>

                </Accordion.Body>
                </Accordion.Item>

                </Accordion>
            </div>
            </Container>
        </div>
     );
}
 
export default Notas;