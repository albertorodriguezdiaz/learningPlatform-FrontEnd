import React from 'react';
import MainCrucigrama from '../activity-components/MainCrucigrama';
import { Col, Container, Row } from 'react-bootstrap';



const Activity44 = (props) => {

    const tableroX = 13;
    const tableroY = 17;

    const objCrucigrama = [
        { id: 1,
          palabra: 'saulo',
          ubicacion:  [ {fila: 'fila15C7'},{fila: 'fila15C8'},{fila: 'fila15C9'},{fila: 'fila15C10'},{fila: 'fila15C11'}, ]
        },
        { id: 2,
          palabra: 'cruzadas',
          ubicacion:  [ {fila: 'fila8C4'},{fila: 'fila9C4'},{fila: 'fila10C4'},{fila: 'fila11C4'},{fila: 'fila12C4'},{fila: 'fila13C4'},{fila: 'fila14C4'},{fila: 'fila15C4'}, ]
        },
        { id: 3,
          palabra: 'protestante',
          ubicacion:  [ {fila: 'fila6C3'},{fila: 'fila6C4'},{fila: 'fila6C5'},{fila: 'fila6C6'},{fila: 'fila6C7'},{fila: 'fila6C8'},{fila: 'fila6C9'},{fila: 'fila6C10'},{fila: 'fila6C11'},{fila: 'fila6C12'},{fila: 'fila6C13'},]
        },
        { id: 4,
          palabra: 'jerusalen',
          ubicacion:  [ {fila: 'fila1C1'},{fila: 'fila1C2'},{fila: 'fila1C3'},{fila: 'fila1C4'},{fila: 'fila1C5'},{fila: 'fila1C6'},{fila: 'fila1C7'},{fila: 'fila1C8'},{fila: 'fila1C9'},]
        },
        { id: 5,
          palabra: 'musulmanes',
          ubicacion:  [ {fila: 'fila10C3'},{fila: 'fila10C4'},{fila: 'fila10C5'},{fila: 'fila10C6'},{fila: 'fila10C7'},{fila: 'fila10C8'},{fila: 'fila10C9'},{fila: 'fila10C10'},{fila: 'fila10C11'},{fila: 'fila10C12'},]
        },
        { id: 6,
          palabra: 'lideresreligiosos',
          ubicacion:  [ {fila: 'fila1C7'},{fila: 'fila2C7'},{fila: 'fila3C7'},{fila: 'fila4C7'},{fila: 'fila5C7'},{fila: 'fila6C7'},{fila: 'fila7C7'},{fila: 'fila8C7'},{fila: 'fila9C7'},{fila: 'fila10C7'},{fila: 'fila11C7'},{fila: 'fila12C7'},{fila: 'fila13C7'},{fila: 'fila14C7'},{fila: 'fila15C7'},{fila: 'fila16C7'},{fila: 'fila17C7'},]
        },
    
    ];


    function TextoPreguntas(){
        return(
            
            <Container className='tablaCricigrama'>
            <Row>
                <Col md={6}><div className="boxPregunta"> 1. ¿Quién perseguía a los cristianos en el libro de Hechos de los Apóstoles?</div></Col>
                <Col md={6}><div className="boxPregunta"> 2. ¿Cómo se llamaron las expediciones militares a Tierra Santa?</div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 3. ¿A quiénes persiguieron los cristianos católicos en el siglo XVIII al XX?</div></Col>
                <Col md={6}><div className="boxPregunta"> 4. ¿Qué ciudad principalmente se quería recuperar con las cruzadas?</div></Col>
            </Row>
            <Row>
                <Col md={6}><div className="boxPregunta"> 5. ¿A quiénes atacaron mediante las cruzadas?</div></Col>
                <Col md={6}><div className="boxPregunta"> 6. ¿Por quién es perseguido Pablo después de haber sido perseguidor de la iglesia?</div></Col>
            </Row>
        </Container>
        )
    }

    

     return ( 
         <div>
             {/* Ver Video */}
             
            <MainCrucigrama {...props} 

                objCrucigrama={objCrucigrama}
                tableroX={tableroX}
                tableroY={tableroY}
                TextoPreguntas={TextoPreguntas}
            
            />
         </div>
     );
}
 
export default Activity44;