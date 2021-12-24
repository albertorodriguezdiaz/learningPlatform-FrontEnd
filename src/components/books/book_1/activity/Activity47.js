import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { Col, Row } from 'react-bootstrap';

import cena from '../../../../resources/img/act47/cena-1.png'
import Dios from '../../../../resources/img/act47/Dios-5.png'
import jesus from '../../../../resources/img/act47/jesus-6.png'
import jesuscrusificado from '../../../../resources/img/act47/jesus-crusificado-3.png'
import jesusresureccion from '../../../../resources/img/act47/jesus-resureccion-4.png'
import pan from '../../../../resources/img/act47/pan-2.png'

import '../activity-components/css/activity5.css';

const Activity47 = (props) => {

    useEffect(() => {
        gameActivity47();
    }, [])


    const gameActivity47 = ()=>{
        const objArrastrables = document.querySelectorAll(".objArrastrable");
const objColocables = document.querySelectorAll(".objColocable");

// Agregamos a cada elemento arrastrable el evento de ser escuchado para manipularlo
objArrastrables.forEach(elem => {
  elem.addEventListener("dragstart", iniciarObjArrastrable); 
});

// Agregamos a cada elemento colocable los eventos
objColocables.forEach(elem => {
  elem.addEventListener("dragenter", entradaValidaObjArrastrable); // Se ejecuta cuando entra a la caja valida
  elem.addEventListener("dragover", pasandoObjArrastrable); // Se ejecuta cuenta es arrastrado y pasa por las cajas
  elem.addEventListener("dragleave", dejandoObjArrastrable); // Se ejecuta cuando sale de la caja valida
  elem.addEventListener("drop", soltandoObjArrastrable); // Se ejecuta cuando se deja caer en la caja valida
});

// Funciones para el Drag and Drop / Arrastrar y colocar

//Eventos ejecutados sobre el objetivo arrastrable 
function iniciarObjArrastrable(event) {
  event.dataTransfer.setData("text", event.target.id); // "text/plain", recibimos el texto del objeto  
  
}


//Eventos ejejcutados en el objeto colocable

// Si no ha entrado el objeto valido en la caja valida entonces agregamos la clase hover para tener un efecto al pasar por el objeto
function entradaValidaObjArrastrable(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.target.classList.add("objColocable-Hover");
  }
}

// Quitamos el evento por defecto para agregar la nueva clase si es objeto es valido
function pasandoObjArrastrable(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.preventDefault();
  }
}

// Quitamos la clase hover para que vuelva el objeto colocable como esta al inicio
function dejandoObjArrastrable(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.target.classList.remove("objColocable-Hover"); 
  }
}



// PUNTAJE JUEGO /////////////////////////////////////////////////////////////////
    let total = 0;
    let puntaje = document.querySelector(".puntaje");
    let correctas = puntaje.querySelector(".correctas");
    let infoPuntaje = document.querySelector(".infoPuntaje");
// PUNTAJE FIN /////////////////////////////////////////////////////////////////


function soltandoObjArrastrable(event) {
  // Esto es para evitar que el navegador ejecute el evento por defecto
  event.preventDefault(); 
  
  // Eliminamos la clase hover si el objeto que solamos no es valido, para que vuelva la caja como estaba al inicio   
  event.target.classList.remove("objColocable-Hover");


  // Obteniendo los datos del objeto arrastrable. Este método devolverá los datos que se establecieron en el mismo tipo en el método setData () 
  let draggableElementData = event.dataTransfer.getData("text"); 
  let draggableElementDataSplit = draggableElementData.split("-");

  const droppableElementData = event.target.getAttribute("idObjColocable");
  console.log(droppableElementData);


  setTimeout(() => {
    correctas.textContent = total;
    
    if(total===6) {
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

    // const bg = document.getElementById('img.objArrastrable').src;

    // event.target.classList.add("objColocableValido");

    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;

    draggableElement.classList.add("objArrastrableValido");
    draggableElement.setAttribute("draggable", "false");

    let imgAct = "";
    if (droppableElementData==='cena') {imgAct = cena;}
    if (droppableElementData==='Dios') {imgAct = Dios;}
    if (droppableElementData==='jesus') {imgAct = jesus;}
    if (droppableElementData==='jesuscrusificado') {imgAct = jesuscrusificado;}
    if (droppableElementData==='jesusresureccion') {imgAct = jesusresureccion;}
    if (droppableElementData==='pan') {imgAct = pan;}

    event.target.insertAdjacentHTML("afterbegin", `<img src="${imgAct}" />`);

  }
}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity'>
             <h2>Rasgos que nos hacen únicos</h2>
            
            <section className="puntaje">
                <p className="infoPuntaje">Arrastra las imágenes hasta la casilla correspondiente. </p>
                <p>Puntaje del juego: <span className="correctas">0</span></p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>
            
            <section className='figuras-arrastrables'>
            <Row>

              <Col md={2}>
                  <img src={cena} alt="cena" className='objArrastrable' draggable="true" id='cena' />
              </Col>
              <Col md={2}>
                  <img src={Dios} alt="Dios" className='objArrastrable' draggable="true" id='Dios' />
              </Col>
              <Col md={2}>
                  <img src={jesus} alt="jesus" className='objArrastrable' draggable="true" id='jesus' />
              </Col>
              <Col md={2}>
                  <img src={jesuscrusificado} alt="jesuscrusificado" className='objArrastrable' draggable="true" id='jesuscrusificado' />
              </Col>
              <Col md={2}>
                  <img src={jesusresureccion} alt="jesusresureccion" className='objArrastrable' draggable="true" id='jesusresureccion' />
              </Col>
              <Col md={2}>
                  <img src={pan} alt="pan" className='objArrastrable' draggable="true" id='pan' />
              </Col>

            </Row>
            </section>


            <section className='caja-colocar'>
           <div className='container'>   
            <div className='row'>
   
                <Col md={2}>
                  <div className="objColocable" idObjColocable="cena">
                    <p className='textFont1'>cena</p>
                  </div>
                  <p className='boxTexto'>Cuerpo de Cristo entregado por nuestros pecados.</p>
                </Col>
                
                <Col md={2}>
                <div className="objColocable" idObjColocable="pan">
                    <p className='textFont1'>pan</p>
                  </div>
                  <p className='boxTexto'>Sacrificio de Jesús por el que tenemos perdón de pecado y vida eterna.</p>
                </Col>
                
                <Col md={2}>
                  <div className="objColocable" idObjColocable="jesuscrusificado">
                    <p className='textFont1'>jesuscrusificado</p>
                  </div>
                  <p className='boxTexto'>Sangre de Cristo que limpia nuestros pecados.</p>
                </Col>
                
                <Col md={2}>
                  <div className="objColocable" idObjColocable="jesusresureccion">
                    <p className='textFont1'>jesusresureccion</p>
                  </div>
                  <p className='boxTexto'>Con su muerte nos da vida.</p>
                </Col>
                
                <Col md={2}>
                  <div className="objColocable" idObjColocable="Dios">
                    <p className='textFont1'>Dios</p>
                  </div>
                  <p className='boxTexto'>Venció a la muerte y ascendió al Padre.</p>
                </Col>
                
                <Col md={2}>
                <div className="objColocable" idObjColocable="jesus">
                    <p className='textFont1'>jesus</p>
                  </div>
                  <p className='boxTexto'>Él vendrá nuevamente.</p>
                </Col>


            </div>
            </div>  
            </section>
            </div>  
             
             
         </div>
     );
}
 
export default Activity47;