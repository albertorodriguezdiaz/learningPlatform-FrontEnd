import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { Col, Container, Row } from 'react-bootstrap';

import img1 from '../../../../resources/img/act11/ataud.png';
import img2 from '../../../../resources/img/act11/balon.png';
import img3 from '../../../../resources/img/act11/cara-triste.png';
import img4 from '../../../../resources/img/act11/carro.png';
import img5 from '../../../../resources/img/act11/craneo.png';
import img6 from '../../../../resources/img/act11/rosa.png';
import img7 from '../../../../resources/img/act11/sol.png';
import img8 from '../../../../resources/img/act11/torta.png';

import '../activity-components/css/activity11.css';


const Activity11 = (props) => {

    useEffect(() => {
        gameActivity11();
    }, [])


    const gameActivity11 = ()=>{
        const objArrastrableAct11 = document.querySelectorAll(".objArrastrableAct11");
const objColocable = document.querySelectorAll(".objColocable");

// Agregamos a cada elemento arrastrable el evento de ser escuchado para manipularlo
objArrastrableAct11.forEach(elem => {
  elem.addEventListener("dragstart", iniciarObjArrastrableAct11); 
});

// Agregamos a cada elemento colocable los eventos
objColocable.forEach(elem => {
  elem.addEventListener("dragenter", entradaValidaObjArrastrableAct11); // Se ejecuta cuando entra a la caja valida
  elem.addEventListener("dragover", pasandoObjArrastrableAct11); // Se ejecuta cuenta es arrastrado y pasa por las cajas
  elem.addEventListener("dragleave", dejandoObjArrastrableAct11); // Se ejecuta cuando sale de la caja valida
  elem.addEventListener("drop", soltandoObjArrastrableAct11); // Se ejecuta cuando se deja caer en la caja valida
});

// Funciones para el Drag and Drop / Arrastrar y colocar

//Eventos ejecutados sobre el objetivo arrastrable 
function iniciarObjArrastrableAct11(event) {
  event.dataTransfer.setData("text", event.target.id); // "text/plain", recibimos el texto del objeto  
  
}


//Eventos ejejcutados en el objeto colocable

// Si no ha entrado el objeto valido en la caja valida entonces agregamos la clase hover para tener un efecto al pasar por el objeto
function entradaValidaObjArrastrableAct11(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.target.classList.add("objColocable-Hover");
  }
}

// Quitamos el evento por defecto para agregar la nueva clase si es objeto es valido
function pasandoObjArrastrableAct11(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.preventDefault();
  }
}

// Quitamos la clase hover para que vuelva el objeto colocable como esta al inicio
function dejandoObjArrastrableAct11(event) {
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


function soltandoObjArrastrableAct11(event) {
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
    
    if(total===5) {
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


    const score = document.getElementById('score');
    score.innerHTML = total;

    // event.target.classList.add("objColocableValido");

    // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;

    draggableElement.classList.add("objArrastrableAct11Valido");
    draggableElement.setAttribute("draggable", "false");

    // event.target.insertAdjacentHTML("afterbegin", `<i className="bg100 ${draggableElement.className}"></i>`);
  }
}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity1'>
             <h2>hablemos sobre la muerte </h2>
            
             <section className="puntaje">
                <p className="infoPuntaje">Observa muy bien los dibujos, arrastra hasta el círculo aquellos que tienen que ver con la clase de hoy. </p>
                <p className='puntajePuntos'>Puntaje del juego: <span className="correctas">0</span></p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>
            
            <section className='figuras-arrastrables'>

                <Container>
                    <Row>
                        <Col sm={3}><img src={img1} alt="" className="objArrastrableAct11" draggable="true" id="muerte-1"/></Col>
                        <Col sm={3}><img src={img2} alt="" className="objArrastrableAct11" draggable="true" id="vida-2"/></Col>
                        <Col sm={3}><img src={img3} alt="" className="objArrastrableAct11" draggable="true" id="muerte-3"/></Col>
                        <Col sm={3}><img src={img4} alt="" className="objArrastrableAct11" draggable="true" id="muerte-4"/></Col>
                        <Col sm={3}><img src={img5} alt="" className="objArrastrableAct11" draggable="true" id="muerte-5"/></Col>
                        <Col sm={3}><img src={img6} alt="" className="objArrastrableAct11" draggable="true" id="muerte-6"/></Col>
                        <Col sm={3}><img src={img7} alt="" className="objArrastrableAct11" draggable="true" id="vida-7"/></Col>
                        <Col sm={3}><img src={img8} alt="" className="objArrastrableAct11" draggable="true" id="vida-8"/></Col>
                    </Row>
                </Container>
            </section>


            <section className='caja-colocar'>
                <div className="objColocable" idObjColocable="muerte">Arrastra aquí <p>Correctas: <strong id="score">0</strong></p> </div>
            </section>


            </div>       
             
         </div>
     );
}
 
export default Activity11;