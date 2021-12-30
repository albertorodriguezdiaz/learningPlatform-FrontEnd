import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { Col, Row } from 'react-bootstrap';

import img1 from '../../../../resources/img/act5/iris.jpg'
import img2 from '../../../../resources/img/act5/lengua.jpg'
import img3 from '../../../../resources/img/act5/huella.jpg'
import img4 from '../../../../resources/img/act5/oreja.jpg'

import '../activity-components/css/activity5.css';


const Activity5 = (props) => {

    useEffect(() => {
        gameActivity5();
    }, [])


    const gameActivity5 = ()=>{
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
    
    if(total===4) {
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
    if (droppableElementData==='iris') {imgAct = img1;}
    if (droppableElementData==='lengua') {imgAct = img2;}
    if (droppableElementData==='huella') {imgAct = img3;}
    if (droppableElementData==='oreja') {imgAct = img4;}

    event.target.insertAdjacentHTML("afterbegin", `<img src="${imgAct}" />`);

  }
}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity1'>
             <h2>Rasgos que nos hacen únicos</h2>
            
             <section className="puntaje">
                <p className="infoPuntaje">Arrastra las imágenes hasta la casilla correspondiente. </p>
                <p className='puntajePuntos'>Puntaje del juego: <span className="correctas">0</span></p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>
            
            <section className='figuras-arrastrables'>
            <Row>
                
                <Col md={3}>
                    <img src={img2} alt="" className="objArrastrable" draggable="true" id="lengua"/>
                </Col>
                <Col md={3}>
                    <img src={img3} alt="" className="objArrastrable" draggable="true" id="huella"/>
                </Col>
                <Col md={3}>
                    <img src={img4} alt="" className="objArrastrable" draggable="true" id="oreja"/>
                </Col>
                <Col md={3}>
                    <img src={img1} alt="" className="objArrastrable" draggable="true" id="iris"/>
                </Col>
            </Row>
            </section>


            <section className='caja-colocar'>
           <div className='container'>   
            <div className='row'>
                <Col md={3}>
                <div className="objColocable" idObjColocable="iris" >
                    iris
                </div>
                </Col>

                <Col md={3}>
                <div className="objColocable" idObjColocable="lengua">
                    lengua
                </div>
                </Col>

                <Col md={3}>
                <div className="objColocable" idObjColocable="huella">
                    huella
                </div>
                </Col>

                <Col md={3}>
                <div className="objColocable" idObjColocable="oreja">
                    oreja
                </div>
                </Col>

            </div>
            </div>  
            </section>
            </div>  
             
             
         </div>
     );
}
 
export default Activity5;