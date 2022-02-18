import React from 'react';
import MainCrucigrama from '../activity-components/MainCrucigrama';
import { Col, Container, Row } from 'react-bootstrap';



const Activity26 = (props) => {

    const tableroX = 10;
    const tableroY = 14;

  //   const objCrucigrama = [
  //     { id: 1,
  //       palabra: 'perfecto',
  //       ubicacion:  [ {fila: 'fila11C13'},{fila: 'fila11C14'},{fila: 'fila11C15'},{fila: 'fila11C16'},{fila: 'fila11C17'},{fila: 'fila11C18'},{fila: 'fila11C19'},{fila: 'fila11C20'} ]
  //     },
  //     { id: 2,
  //       palabra: 'disminuyeron',
  //       ubicacion:  [ {fila: 'fila1C20'},{fila: 'fila2C20'},{fila: 'fila3C20'},{fila: 'fila4C20'},{fila: 'fila5C20'},{fila: 'fila6C20'},{fila: 'fila7C20'},{fila: 'fila8C20'},{fila: 'fila9C20'},{fila: 'fila10C20'},{fila: 'fila11C20'},{fila: 'fila12C20'} ]
  //     },
  //     { id: 3,
  //       palabra: 'superficie',
  //       ubicacion:  [ {fila: 'fila5C12'},{fila: 'fila5C13'},{fila: 'fila5C14'},{fila: 'fila5C15'},{fila: 'fila5C16'},{fila: 'fila5C17'},{fila: 'fila5C18'},{fila: 'fila5C19'},{fila: 'fila5C20'},{fila: 'fila5C21'}]
  //     },
  //     { id: 4,
  //       palabra: 'destruir',
  //       ubicacion:  [ {fila: 'fila7C11'},{fila: 'fila7C12'},{fila: 'fila7C13'},{fila: 'fila7C14'},{fila: 'fila7C15'},{fila: 'fila7C16'},{fila: 'fila7C17'},{fila: 'fila7C18'}]
  //     },
  //     { id: 5,
  //       palabra: 'alzaron',
  //       ubicacion:  [ {fila: 'fila2C3'},{fila: 'fila3C3'},{fila: 'fila4C3'},{fila: 'fila5C3'},{fila: 'fila6C3'},{fila: 'fila7C3'},{fila: 'fila8C3'},]
  //     },
  //     { id: 6,
  //       palabra: 'paloma',
  //       ubicacion:  [ {fila: 'fila3C6'},{fila: 'fila3C7'},{fila: 'fila3C8'},{fila: 'fila3C9'},{fila: 'fila3C10'},{fila: 'fila3C11'},]
  //     },
  //     { id: 7,
  //       palabra: 'corrompio',
  //       ubicacion:  [ {fila: 'fila6C1'},{fila: 'fila6C2'},{fila: 'fila6C3'},{fila: 'fila6C4'},{fila: 'fila6C5'},{fila: 'fila6C6'},{fila: 'fila6C7'},{fila: 'fila6C8'},{fila: 'fila6C9'},]
  //     },
  //     { id: 8,
  //       palabra: 'perpetuo',
  //       ubicacion:  [ {fila: 'fila2C14'},{fila: 'fila3C14'},{fila: 'fila4C14'},{fila: 'fila5C14'},{fila: 'fila6C14'},{fila: 'fila7C14'},{fila: 'fila8C14'},{fila: 'fila9C14'},]
  //     },
  //     { id: 9,
  //       palabra: 'cerraron',
  //       ubicacion:  [ {fila: 'fila9C8'},{fila: 'fila9C9'},{fila: 'fila9C10'},{fila: 'fila9C11'},{fila: 'fila9C12'},{fila: 'fila9C13'},{fila: 'fila9C14'},{fila: 'fila9C15'},]
  //     },
  //     { id: 10,
  //       palabra: 'conforme',
  //       ubicacion:  [ {fila: 'fila2C9'},{fila: 'fila3C9'},{fila: 'fila4C9'},{fila: 'fila5C9'},{fila: 'fila6C9'},{fila: 'fila7C9'},{fila: 'fila8C9'},{fila: 'fila9C9'},]
  //     },
  
  // ];

    const objCrucigrama = [
        { id: 1,
          palabra: 'asombro',
          ubicacion:  [ {fila: 'fila11C3'},{fila: 'fila11C4'},{fila: 'fila11C5'},{fila: 'fila11C6'},{fila: 'fila11C7'},{fila: 'fila11C8'},{fila: 'fila11C9'},]
        },
        { id: 2,
          palabra: 'ovulo',
          ubicacion:  [ {fila: 'fila3C2'},{fila: 'fila4C2'},{fila: 'fila5C2'},{fila: 'fila6C2'},{fila: 'fila7C2'}, ]
        },
        { id: 3,
          palabra: 'mujer',
          ubicacion:  [ {fila: 'fila5C1'},{fila: 'fila5C2'},{fila: 'fila5C3'},{fila: 'fila5C4'},{fila: 'fila5C5'},]
        },
        { id: 4,
          palabra: 'espermatozoide',
          ubicacion:  [ {fila: 'fila1C5'},{fila: 'fila2C5'},{fila: 'fila3C5'},{fila: 'fila4C5'},{fila: 'fila5C5'},{fila: 'fila6C5'},{fila: 'fila7C5'},{fila: 'fila8C5'},{fila: 'fila9C5'},{fila: 'fila10C5'},{fila: 'fila11C5'},{fila: 'fila12C5'},{fila: 'fila13C5'},{fila: 'fila14C5'},]
        },
        { id: 5,
          palabra: 'dios',
          ubicacion:  [ {fila: 'fila9C3'},{fila: 'fila9C4'},{fila: 'fila9C5'},{fila: 'fila9C6'},]
        }
    
    ];


    function TextoPreguntas(){
        return(
            
          <Container className='tablaCricigrama'>
            <Row>
                <Col md={6}><div className="boxPregunta"> 1. Célula femenina que se necesita para que se produzca vida.</div></Col>
                <Col md={6}><div className="boxPregunta"> 2. Jesús vino a la vida a través de una__?__.</div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 3. ¿De quién es hijo Jesús?</div></Col>
                <Col md={6}><div className="boxPregunta"> 4. El nacimiento de Jesús es único y __?__ </div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 5. Célula masculina que se necesita para que se produzca vida</div></Col>
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
 
export default Activity26;