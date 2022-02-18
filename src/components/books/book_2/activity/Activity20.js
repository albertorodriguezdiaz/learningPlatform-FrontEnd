import React from 'react';
import MainCrucigrama from '../activity-components/MainCrucigrama';
import { Col, Container, Row } from 'react-bootstrap';



const Activity20 = (props) => {

    const tableroX = 21;
    const tableroY = 12;

    const objCrucigrama = [
        { id: 1,
          palabra: 'perfecto',
          ubicacion:  [ {fila: 'fila11C13'},{fila: 'fila11C14'},{fila: 'fila11C15'},{fila: 'fila11C16'},{fila: 'fila11C17'},{fila: 'fila11C18'},{fila: 'fila11C19'},{fila: 'fila11C20'} ]
        },
        { id: 2,
          palabra: 'disminuyeron',
          ubicacion:  [ {fila: 'fila1C20'},{fila: 'fila2C20'},{fila: 'fila3C20'},{fila: 'fila4C20'},{fila: 'fila5C20'},{fila: 'fila6C20'},{fila: 'fila7C20'},{fila: 'fila8C20'},{fila: 'fila9C20'},{fila: 'fila10C20'},{fila: 'fila11C20'},{fila: 'fila12C20'} ]
        },
        { id: 3,
          palabra: 'superficie',
          ubicacion:  [ {fila: 'fila5C12'},{fila: 'fila5C13'},{fila: 'fila5C14'},{fila: 'fila5C15'},{fila: 'fila5C16'},{fila: 'fila5C17'},{fila: 'fila5C18'},{fila: 'fila5C19'},{fila: 'fila5C20'},{fila: 'fila5C21'}]
        },
        { id: 4,
          palabra: 'destruir',
          ubicacion:  [ {fila: 'fila7C11'},{fila: 'fila7C12'},{fila: 'fila7C13'},{fila: 'fila7C14'},{fila: 'fila7C15'},{fila: 'fila7C16'},{fila: 'fila7C17'},{fila: 'fila7C18'}]
        },
        { id: 5,
          palabra: 'alzaron',
          ubicacion:  [ {fila: 'fila2C3'},{fila: 'fila3C3'},{fila: 'fila4C3'},{fila: 'fila5C3'},{fila: 'fila6C3'},{fila: 'fila7C3'},{fila: 'fila8C3'},]
        },
        { id: 6,
          palabra: 'paloma',
          ubicacion:  [ {fila: 'fila3C6'},{fila: 'fila3C7'},{fila: 'fila3C8'},{fila: 'fila3C9'},{fila: 'fila3C10'},{fila: 'fila3C11'},]
        },
        { id: 7,
          palabra: 'corrompio',
          ubicacion:  [ {fila: 'fila6C1'},{fila: 'fila6C2'},{fila: 'fila6C3'},{fila: 'fila6C4'},{fila: 'fila6C5'},{fila: 'fila6C6'},{fila: 'fila6C7'},{fila: 'fila6C8'},{fila: 'fila6C9'},]
        },
        { id: 8,
          palabra: 'perpetuo',
          ubicacion:  [ {fila: 'fila2C14'},{fila: 'fila3C14'},{fila: 'fila4C14'},{fila: 'fila5C14'},{fila: 'fila6C14'},{fila: 'fila7C14'},{fila: 'fila8C14'},{fila: 'fila9C14'},]
        },
        { id: 9,
          palabra: 'cerraron',
          ubicacion:  [ {fila: 'fila9C8'},{fila: 'fila9C9'},{fila: 'fila9C10'},{fila: 'fila9C11'},{fila: 'fila9C12'},{fila: 'fila9C13'},{fila: 'fila9C14'},{fila: 'fila9C15'},]
        },
        { id: 10,
          palabra: 'conforme',
          ubicacion:  [ {fila: 'fila2C9'},{fila: 'fila3C9'},{fila: 'fila4C9'},{fila: 'fila5C9'},{fila: 'fila6C9'},{fila: 'fila7C9'},{fila: 'fila8C9'},{fila: 'fila9C9'},]
        },
    
    ];


    function TextoPreguntas(){
        return(
            
            <Container className='tablaCricigrama'>
            <Row>
                <Col md={6}><div className="boxPregunta"> 1. Génesis 6:9. Noé era __?__ en sus generaciones.</div></Col>
                <Col md={6}><div className="boxPregunta"> 2. Génesis 8:1 Dios envió un viento sobre la tierra, y __?__las aguas.</div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 3. Génesis 7:18 y flotaba el arca sobre la __?__ de las aguas</div></Col>
                <Col md={6}><div className="boxPregunta"> 4. Génesis 9:11 ni habrá más diluvio para __?__ la tierra</div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 5. Génesis 7:17  las aguas crecieron, y __?__ el arca, y se elevó sobre la tierra.</div></Col>
                <Col md={6}><div className="boxPregunta"> 6. Génesis 8:12 y envió la __?__ , la cual no volvió ya más a él.</div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 7. Génesis 6:11 Y se __?__  la tierra delante de Dios,</div></Col>
                <Col md={6}><div className="boxPregunta"> 8. Génesis 9:16 Estará el arco en las nubes, y lo veré, y me acordaré del pacto __?__ </div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 9. Génesis 8:2 Y se __?__ las fuentes del abismo y las cataratas de los cielos.</div></Col>
                <Col md={6}><div className="boxPregunta"> 10. Génesis 7: 5 E hizo Noé __?__ a todo lo que le mandó Jehová.</div></Col>
            </Row>
        </Container>
        )
    }

    

     return ( 
         <div>
            <MainCrucigrama {...props} 

                objCrucigrama={objCrucigrama}
                tableroX={tableroX}
                tableroY={tableroY}
                TextoPreguntas={TextoPreguntas}
            
            />
         </div>
     );
}
 
export default Activity20;