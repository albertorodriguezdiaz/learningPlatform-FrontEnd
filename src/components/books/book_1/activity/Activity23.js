import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

import abogado from '../../../../resources/img/act23/abogado.png';
import abrigo from '../../../../resources/img/act23/abrigo.png';
import agua from '../../../../resources/img/act23/agua.png';
import botellagua from '../../../../resources/img/act23/botellagua.png';
import casa from '../../../../resources/img/act23/casa.png';
import doctora from '../../../../resources/img/act23/doctora.png';
import jarabe from '../../../../resources/img/act23/jarabe.png';
import jeringa from '../../../../resources/img/act23/jeringa.png';
import lapices from '../../../../resources/img/act23/lapices.png';
import libro from '../../../../resources/img/act23/libro.png';
import mazorca from '../../../../resources/img/act23/mazorca.png';
import pastillas from '../../../../resources/img/act23/pastillas.png';
import pina from '../../../../resources/img/act23/pina.png';
import policia from '../../../../resources/img/act23/policia.png';
import uniforme from '../../../../resources/img/act23/uniforme.png';
import uva from '../../../../resources/img/act23/uva.png';
import zapatos from '../../../../resources/img/act23/zapatos.png';




import imgDiosProvee from '../../../../resources/img/act23/Diosprovee.jpg';

import '../activity-components/css/activity23.css';
import { Col, Container, Row } from 'react-bootstrap';


const Activity23 = (props) => {

    useEffect(() => {
        gameActivity23();
    }, [])


    const gameActivity23 = ()=>{

    const objArrastrableAct23 = document.querySelectorAll(".objArrastrableAct23");
    const objColocableAct23 = document.querySelectorAll(".objColocableAct23");

// Agregamos a cada elemento arrastrable el evento de ser escuchado para manipularlo
objArrastrableAct23.forEach(elem => {
  elem.addEventListener("dragstart", iniciarObjArrastrableAct23); 
});

// Agregamos a cada elemento colocable los eventos
objColocableAct23.forEach(elem => {
  elem.addEventListener("dragenter", entradaValidaObjArrastrableAct23); // Se ejecuta cuando entra a la caja valida
  elem.addEventListener("dragover", pasandoObjArrastrableAct23); // Se ejecuta cuenta es arrastrado y pasa por las cajas
  elem.addEventListener("dragleave", dejandoObjArrastrableAct23); // Se ejecuta cuando sale de la caja valida
  elem.addEventListener("drop", soltandoObjArrastrableAct23); // Se ejecuta cuando se deja caer en la caja valida
});

// Funciones para el Drag and Drop / Arrastrar y colocar

//Eventos ejecutados sobre el objetivo arrastrable 
function iniciarObjArrastrableAct23(event) {
  event.dataTransfer.setData("text", event.target.id); // "text/plain", recibimos el texto del objeto  
  
}


//Eventos ejejcutados en el objeto colocable

// Si no ha entrado el objeto valido en la caja valida entonces agregamos la clase hover para tener un efecto al pasar por el objeto
function entradaValidaObjArrastrableAct23(event) {
  if(!event.target.classList.contains("objColocableAct23Valido")) {
    event.target.classList.add("objColocableAct23-Hover");
  }
}

// Quitamos el evento por defecto para agregar la nueva clase si es objeto es valido
function pasandoObjArrastrableAct23(event) {
  if(!event.target.classList.contains("objColocableAct23Valido")) {
    event.preventDefault();
  }
}

// Quitamos la clase hover para que vuelva el objeto colocable como esta al inicio
function dejandoObjArrastrableAct23(event) {
  if(!event.target.classList.contains("objColocableAct23Valido")) {
    event.target.classList.remove("objColocableAct23-Hover"); 
  }
}



// PUNTAJE JUEGO /////////////////////////////////////////////////////////////////
    let total = 0;
    let puntaje = document.querySelector(".puntaje");
    let correctas = puntaje.querySelector(".correctas");
    let infoPuntaje = document.querySelector(".infoPuntaje");
// PUNTAJE FIN /////////////////////////////////////////////////////////////////


function soltandoObjArrastrableAct23(event) {
  // Esto es para evitar que el navegador ejecute el evento por defecto
  event.preventDefault(); 
  
  // Eliminamos la clase hover si el objeto que solamos no es valido, para que vuelva la caja como estaba al inicio   
  event.target.classList.remove("objColocableAct23-Hover");


  // Obteniendo los datos del objeto arrastrable. Este método devolverá los datos que se establecieron en el mismo tipo en el método setData () 
  let draggableElementData = event.dataTransfer.getData("text"); 
  let draggableElementDataSplit = draggableElementData.split("-");

  const droppableElementData = event.target.getAttribute("idObjColocableAct23");
  console.log(droppableElementData);


  setTimeout(() => {
    correctas.textContent = total;
    
    if(total===17) {
      infoPuntaje.classList.add("ganaste"); 
      infoPuntaje.textContent = 'Ganaste :)';

      const botonEnconder = document.querySelector(".botonEnconder");
      botonEnconder.classList.add("botonMostrar");

      window.scrollTo(0, 400)
    }

  }, 200);

  if(draggableElementDataSplit[0] === droppableElementData) {

    total++;
    console.log(total);
    const draggableElement = document.getElementById(draggableElementData);

    // event.target.classList.add("objColocableAct23Valido");

    // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;

    draggableElement.classList.add("objArrastrableAct23Valido");
    draggableElement.setAttribute("draggable", "false");

    // event.target.insertAdjacentHTML("afterbegin", `<i className="bg100 ${draggableElement.className}"></i>`);
  }
}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity1'>
             <h2>¿Qué acciones ayudarían a mejorar las situaciones que muestran las imágenes?</h2>
            
             <section className="puntaje">
                <p className="infoPuntaje">Arrastra las acciones de solución y cuidado con la imagen correspondiente.</p>
                <p>Puntaje del juego: <span className="correctas">0</span></p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>


            <section className='caja-colocarAct23'>
                <div className="objColocableAct23 objAct23-1" idObjColocableAct23="alimento"></div>
                <div className="objColocableAct23 objAct23-2" idObjColocableAct23="salud"></div>
                <div className="objColocableAct23 objAct23-3" idObjColocableAct23="educacion"></div>
                <div className="objColocableAct23 objAct23-4" idObjColocableAct23="empleo"></div>
                <div className="objColocableAct23 objAct23-5" idObjColocableAct23="vestido"></div>
                <div className="objColocableAct23 objAct23-6" idObjColocableAct23="agua"></div>
                <div className="objColocableAct23 objAct23-7" idObjColocableAct23="vivienda"></div>
             <img src={imgDiosProvee} alt="Dios Provee" />
            </section>
            
            
            <section className='figuras-arrastrables'>
                <Container>
                    <Row>
                                            
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="empleo-2"  src={abogado} alt="abogado" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="vestido-2"  src={abrigo} alt="abrigo" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="agua-2"  src={agua} alt="agua" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="agua-1"  src={botellagua} alt="botellagua" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="vivienda-1"  src={casa} alt="casa" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="empleo-1"  src={doctora} alt="doctora" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="salud-3"  src={jarabe} alt="jarabe" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="salud-2"  src={jeringa} alt="jeringa" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="educacion-3"  src={lapices} alt="lapices" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="educacion-2"  src={libro} alt="libro" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="alimento-1"  src={mazorca} alt="mazorca" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="salud-1"  src={pastillas} alt="pastillas" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="alimento-2"  src={pina} alt="pina" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="empleo-3"  src={policia} alt="policia" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="educacion-1"  src={uniforme} alt="uniforme" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="alimento-3"  src={uva} alt="uva" />
                </Col>
                <Col>
                   <img className='objArrastrableAct23' draggable="true" id="vestido-1"  src={zapatos} alt="zapatos" />
                </Col>
                </Row>
                </Container>
            </section>


            </div>  
             
             
         </div>
     );
}
 
export default Activity23;