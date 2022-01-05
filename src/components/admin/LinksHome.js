import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import userImg from '../../resources/img/usuario.png'
import activityImg from '../../resources/img/activity.png'
import schoolImg from '../../resources/img/school.png'
import bookImg from '../../resources/img/book.png'
import estadisticasImg from '../../resources/img/results.png'
import notaImg from '../../resources/img/exam.png'

const LinksHome = () => {


    return ( 
        <div className="boxAdminIcon">
            <Container>
                <Row>
                    <Col md={4}>
                        <Link to='/usuarios'>
                            <div className="iconBox">
                                <img src={userImg} alt="SoyVida" />
                                <h3>Usuarios</h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to='/colegios'>
                            <div className="iconBox">
                                <img src={schoolImg} alt="SoyVida" />                            
                                <h3>Colegios</h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to='/libros'>
                            <div className="iconBox">
                                <img src={bookImg} alt="SoyVida" />
                                <h3>Libros SoyVida</h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to='/usuariolibro'>
                            <div className="iconBox">
                                <img src={activityImg} alt="SoyVida" />
                                <h3>Actividades Libro</h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to='/usuarionotas'>
                            <div className="iconBox">
                                <img src={notaImg} alt="SoyVida" />
                                <h3>Notas Usuarios</h3>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to='/usuariolibro'>
                            <div className="iconBox">
                                <img src={estadisticasImg} alt="SoyVida" />
                                <h3>Estadística</h3>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>

        
     );
}
 
export default LinksHome;