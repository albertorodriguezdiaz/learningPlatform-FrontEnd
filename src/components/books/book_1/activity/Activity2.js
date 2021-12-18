import React from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../HeaderActivity';
import './activity.css';


import img1 from '../../../../resources/img/act2/deforestacion.jpg.jpg'
import img2 from '../../../../resources/img/act2/caza.jpg'
import img3 from '../../../../resources/img/act2/agua-contaminada.jpg'
import img4 from '../../../../resources/img/act2/contaminacion-luminica.jpg'
import { Col, Row } from 'react-bootstrap';

const Activity2 = (props) => {

     return ( 
         <div>
             <HeaderActivity {...props} />
            
            <section className='figuras-arrastrables'>
                <div className="objArrastrable deforestacion" draggable="true">Sembrar un árbol</div>
                <div className="objArrastrable deforestacion" draggable="true">
                    No tirar basuras al río
                </div>
                <div className="objArrastrable deforestacion" draggable="true">
                    No comprar productos hechos de animales
                </div>
                <div className="objArrastrable caza" draggable="true">
                    No ocasionar incendios
                </div>
                <div className="objArrastrable caza" draggable="true">
                    Mantener limpias las playas
                </div>
                <div className="objArrastrable caza" draggable="true">
                    No comprar especies de animales silvestres 
                </div>
                <div className="objArrastrable agua" draggable="true">
                    Cuidar los bosques
                </div>
                <div className="objArrastrable agua" draggable="true">
                    No arrojar productos químicos al agua
                </div>
                <div className="objArrastrable agua" draggable="true">
                    Apoyar la prohibición de caza de animales
                </div>
                <div className="objArrastrable contaminacion" draggable="true">
                    Apagar las luces cuando no las utilicemos
                </div>
                <div className="objArrastrable contaminacion" draggable="true">
                    Usar luces ahorradoras de energía
                </div>
                <div className="objArrastrable contaminacion" draggable="true">
                    Desconectar los electrodomésticos que no se están utilizando 
                </div>
            </section>

            
            <section className='figuras-colocar'>
            <Row>
                <Col md={3}>
                <div className="objColocable deforestacion" idObjColocable="deforestacion">
                    <img src={img1} alt="" />
                </div>
                </Col>

                <Col md={3}>
                <div className="objColocable caza" idObjColocable="caza">
                    <img src={img2} alt="" />
                </div>
                </Col>

                <Col md={3}>
                <div className="objColocable agua" idObjColocable="agua">
                    <img src={img3} alt="" />
                </div>
                </Col>

                <Col md={3}>
                <div className="objColocable contaminacion" idObjColocable="contaminacion">
                    <img src={img4} alt="" />
                </div>
                </Col>

            </Row>
            </section>
             
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity2;