import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { Col, Row } from 'react-bootstrap';

import img1 from '../../../../resources/img/act2/deforestacion.jpg.jpg';
import img2 from '../../../../resources/img/act2/caza.jpg';
import img3 from '../../../../resources/img/act2/agua-contaminada.jpg';
import img4 from '../../../../resources/img/act2/contaminacion-luminica.jpg';

import '../activity-components/css/activity2.css';


const Activity2 = (props) => {

    useEffect(() => {
        gameActivity2();
    }, [])


    const gameActivity2 = ()=>{
        const objArrastrableAct2s = document.querySelectorAll(".objArrastrableAct2");
const objColocables = document.querySelectorAll(".objColocable");

// Agregamos a cada elemento arrastrable el evento de ser escuchado para manipularlo
objArrastrableAct2s.forEach(elem => {
  elem.addEventListener("dragstart", iniciarObjArrastrableAct2); 
});

// Agregamos a cada elemento colocable los eventos
objColocables.forEach(elem => {
  elem.addEventListener("dragenter", entradaValidaObjArrastrableAct2); // Se ejecuta cuando entra a la caja valida
  elem.addEventListener("dragover", pasandoObjArrastrableAct2); // Se ejecuta cuenta es arrastrado y pasa por las cajas
  elem.addEventListener("dragleave", dejandoObjArrastrableAct2); // Se ejecuta cuando sale de la caja valida
  elem.addEventListener("drop", soltandoObjArrastrableAct2); // Se ejecuta cuando se deja caer en la caja valida
});

// Funciones para el Drag and Drop / Arrastrar y colocar

//Eventos ejecutados sobre el objetivo arrastrable 
function iniciarObjArrastrableAct2(event) {
  event.dataTransfer.setData("text", event.target.id); // "text/plain", recibimos el texto del objeto  
  
}


//Eventos ejejcutados en el objeto colocable

// Si no ha entrado el objeto valido en la caja valida entonces agregamos la clase hover para tener un efecto al pasar por el objeto
function entradaValidaObjArrastrableAct2(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.target.classList.add("objColocable-Hover");
  }
}

// Quitamos el evento por defecto para agregar la nueva clase si es objeto es valido
function pasandoObjArrastrableAct2(event) {
  if(!event.target.classList.contains("objColocableValido")) {
    event.preventDefault();
  }
}

// Quitamos la clase hover para que vuelva el objeto colocable como esta al inicio
function dejandoObjArrastrableAct2(event) {
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


function soltandoObjArrastrableAct2(event) {
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
    
    if(total===12) {
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

    // event.target.classList.add("objColocableValido");

    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;

    draggableElement.classList.add("objArrastrableAct2Valido");
    draggableElement.setAttribute("draggable", "false");

    // event.target.insertAdjacentHTML("afterbegin", `<i className="bg100 ${draggableElement.className}"></i>`);
  }
}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity'>
             <h2>¿Qué acciones ayudarían a mejorar las situaciones que muestran las imágenes?</h2>
            
             <section className="puntaje">
                <p className="infoPuntaje">Arrastra las acciones de solución y cuidado con la imagen correspondiente.</p>
                <p className='puntajePuntos'>Puntaje del juego: <span className="correctas">0</span></p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>
            
            <section className='figuras-arrastrables'>
                <div className="objArrastrableAct2" draggable="true" id="agua-1">
                    No tirar basuras al río
                </div>
                <div className="objArrastrableAct2" draggable="true" id="caza-1">
                    No comprar productos hechos de animales
                </div>
                <div className="objArrastrableAct2" draggable="true" id="contaminacion-3">
                    Desconectar los electrodomésticos que no se están utilizando 
                </div>
                <div className="objArrastrableAct2" draggable="true" id="deforestacion-2">
                    No ocasionar incendios
                </div>
                <div className="objArrastrableAct2" draggable="true" id="agua-2">
                    Mantener limpias las playas
                </div>
                <div className="objArrastrableAct2" draggable="true" id="caza-2">
                    No comprar especies de animales silvestres 
                </div>
                <div className="objArrastrableAct2" draggable="true" id="deforestacion-1">
                    Sembrar un árbol
                </div>
                <div className="objArrastrableAct2" draggable="true" id="contaminacion-2">
                    Usar luces ahorradoras de energía
                </div>
                <div className="objArrastrableAct2" draggable="true" id="deforestacion-3">
                    Cuidar los bosques
                </div>
                <div className="objArrastrableAct2" draggable="true" id="agua-3">
                    No arrojar productos químicos al agua
                </div>
                <div className="objArrastrableAct2" draggable="true" id="caza-3">
                    Apoyar la prohibición de caza de animales
                </div>
                <div className="objArrastrableAct2" draggable="true" id="contaminacion-1">
                    Apagar las luces cuando no las utilicemos
                </div>
            </section>


            <section className='caja-colocar'>
            <Row>
                <Col md={3}>
                <div className='contMultImge'>
                    <img src={img1} alt="" className="objColocable deforestacion" idObjColocable="deforestacion"/>
                </div>
                </Col>

                <Col md={3}>
                <div >
                    <img src={img2} alt="" className="objColocable caza" idObjColocable="caza" />
                </div>
                </Col>

                <Col md={3}>
                <div >
                    <img src={img3} alt="" className="objColocable agua" idObjColocable="agua"/>
                </div>
                </Col>

                <Col md={3}>
                <div >
                    <img src={img4} alt="" className="objColocable contaminacion" idObjColocable="contaminacion"/>
                </div>
                </Col>

            </Row>
            </section>
            </div>  
             
             
         </div>
     );
}
 
export default Activity2;