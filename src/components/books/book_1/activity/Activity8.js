import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { Col, Row } from 'react-bootstrap';

import main from '../../../../resources/img/act8/ciudad-activity8.jpg'

import img1 from '../../../../resources/img/act8/imgActivity8-1.png'
import img2 from '../../../../resources/img/act8/imgActivity8-2.png'
import img3 from '../../../../resources/img/act8/imgActivity8-3.png'
import img4 from '../../../../resources/img/act8/imgActivity8-4.png'
import img5 from '../../../../resources/img/act8/imgActivity8-5.png'
import img6 from '../../../../resources/img/act8/imgActivity8-6.png'
import img7 from '../../../../resources/img/act8/imgActivity8-7.png'
import img8 from '../../../../resources/img/act8/imgActivity8-8.png'
import img9 from '../../../../resources/img/act8/imgActivity8-9.png'
import img10 from '../../../../resources/img/act8/imgActivity8-10.png'


import '../activity-components/css/activity8.css';


const Activity8 = (props) => {

    useEffect(() => {
        gameActivity8();
    }, [])


    const gameActivity8 = ()=>{
    const objArrastrablesAct8 = document.querySelectorAll(".objArrastrableAct8");
    const objColocablesAct8 = document.querySelectorAll(".objColocableAct8");

// Agregamos a cada elemento arrastrable el evento de ser escuchado para manipularlo
objArrastrablesAct8.forEach(elem => {
  elem.addEventListener("dragstart", iniciarObjArrastrableAct8); 
});

// Agregamos a cada elemento colocable los eventos
objColocablesAct8.forEach(elem => {
  elem.addEventListener("dragenter", entradaValidaObjArrastrableAct8); // Se ejecuta cuando entra a la caja valida
  elem.addEventListener("dragover", pasandoObjArrastrableAct8); // Se ejecuta cuenta es arrastrado y pasa por las cajas
  elem.addEventListener("dragleave", dejandoObjArrastrableAct8); // Se ejecuta cuando sale de la caja valida
  elem.addEventListener("drop", soltandoObjArrastrableAct8); // Se ejecuta cuando se deja caer en la caja valida
});

// Funciones para el Drag and Drop / Arrastrar y colocar

//Eventos ejecutados sobre el objetivo arrastrable 
function iniciarObjArrastrableAct8(event) {
  event.dataTransfer.setData("text", event.target.id); // "text/plain", recibimos el texto del objeto  
  
}


//Eventos ejejcutados en el objeto colocable

// Si no ha entrado el objeto valido en la caja valida entonces agregamos la clase hover para tener un efecto al pasar por el objeto
function entradaValidaObjArrastrableAct8(event) {
  if(!event.target.classList.contains("objColocableAct8Valido")) {
    event.target.classList.add("objColocableAct8-Hover");
  }
}

// Quitamos el evento por defecto para agregar la nueva clase si es objeto es valido
function pasandoObjArrastrableAct8(event) {
  if(!event.target.classList.contains("objColocableAct8Valido")) {
    event.preventDefault();
  }
}

// Quitamos la clase hover para que vuelva el objeto colocable como esta al inicio
function dejandoObjArrastrableAct8(event) {
  if(!event.target.classList.contains("objColocableAct8Valido")) {
    event.target.classList.remove("objColocableAct8-Hover"); 
  }
}



// PUNTAJE JUEGO /////////////////////////////////////////////////////////////////
    let total = 0;
    let puntaje = document.querySelector(".puntaje");
    let correctas = puntaje.querySelector(".correctas");
    let infoPuntaje = document.querySelector(".infoPuntaje");
// PUNTAJE FIN /////////////////////////////////////////////////////////////////


function soltandoObjArrastrableAct8(event) {
  // Esto es para evitar que el navegador ejecute el evento por defecto
  event.preventDefault(); 
  
  // Eliminamos la clase hover si el objeto que solamos no es valido, para que vuelva la caja como estaba al inicio   
  event.target.classList.remove("objColocableAct8-Hover");


  // Obteniendo los datos del objeto arrastrable. Este método devolverá los datos que se establecieron en el mismo tipo en el método setData () 
  let draggableElementData = event.dataTransfer.getData("text"); 
  let draggableElementDataSplit = draggableElementData.split("-");

  const droppableElementData = event.target.getAttribute("idObjColocableAct8");
  console.log(droppableElementData);


  setTimeout(() => {
    correctas.textContent = total;
    
    if(total===10) {
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


    // event.target.classList.add("objColocableAct8Valido");


    draggableElement.classList.add("objArrastrableAct8Valido");
    console.log(draggableElement);

    draggableElement.setAttribute("draggable", "false");
 
    let imgAct = "";
    if (droppableElementData==='img1') {imgAct = img1;}
    if (droppableElementData==='img2') {imgAct = img2;}
    if (droppableElementData==='img3') {imgAct = img3;}
    if (droppableElementData==='img4') {imgAct = img4;}
    if (droppableElementData==='img5') {imgAct = img5;}
    if (droppableElementData==='img6') {imgAct = img6;}
    if (droppableElementData==='img7') {imgAct = img7;}
    if (droppableElementData==='img8') {imgAct = img8;}
    if (droppableElementData==='img9') {imgAct = img9;}
    if (droppableElementData==='img10') {imgAct = img10;}

    event.target.insertAdjacentHTML("afterbegin", `<img src="${imgAct}" />`);

  }

}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity'>
             <h2>Construyamos sociedad</h2>
            
             <section className="puntaje">
                <p className="infoPuntaje">Construyamos una sociedad con las personas que se aman, se cuidan y se protegen. <br />Arrastra las imágenes hasta la casilla correspondiente. </p>
                <p>Puntaje del juego: <span className="correctas">0</span></p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>

            
            <section className='caja-colocarAct8'>
                <div className='imgCiudad'>
                    <img src={main} alt="Ciudad" />
                    <div className="objColocableAct8" id="img1Box" idObjColocableAct8="img1">img1</div>
                    <div className="objColocableAct8" id="img2Box" idObjColocableAct8="img2">img2</div>
                    <div className="objColocableAct8" id="img3Box" idObjColocableAct8="img3">img3</div>
                    <div className="objColocableAct8" id="img4Box" idObjColocableAct8="img4">img4</div>
                    <div className="objColocableAct8" id="img5Box" idObjColocableAct8="img5">img5</div>
                    <div className="objColocableAct8" id="img6Box" idObjColocableAct8="img6">img6</div>
                    <div className="objColocableAct8" id="img7Box" idObjColocableAct8="img7">img7</div>
                    <div className="objColocableAct8" id="img8Box" idObjColocableAct8="img8">img8</div>
                    <div className="objColocableAct8" id="img9Box" idObjColocableAct8="img9">img9</div>
                    <div className="objColocableAct8" id="img10Box" idObjColocableAct8="img10">img10</div>
                </div>
                
            </section>
            
            <section className='figuras-arrastrablesAct8'>
            <Row>
                <Col>
                    <img src={img1} alt="" className="objArrastrableAct8" draggable="true" id="img1"/>
                </Col>
                <Col>
                    <img src={img2} alt="" className="objArrastrableAct8" draggable="true" id="img2"/>
                </Col>
                <Col>
                    <img src={img3} alt="" className="objArrastrableAct8" draggable="true" id="img3"/>
                </Col>
                <Col>
                    <img src={img4} alt="" className="objArrastrableAct8" draggable="true" id="img4"/>
                </Col>
                <Col>
                    <img src={img5} alt="" className="objArrastrableAct8" draggable="true" id="img5"/>
                </Col>
                <Col>
                    <img src={img6} alt="" className="objArrastrableAct8" draggable="true" id="img6"/>
                </Col>
                <Col>
                    <img src={img7} alt="" className="objArrastrableAct8" draggable="true" id="img7"/>
                </Col>
                <Col>
                    <img src={img8} alt="" className="objArrastrableAct8" draggable="true" id="img8"/>
                </Col>
                <Col>
                    <img src={img9} alt="" className="objArrastrableAct8" draggable="true" id="img9"/>
                </Col>
                <Col>
                    <img src={img10} alt="" className="objArrastrableAct8" draggable="true" id="img10"/>
                </Col>
            </Row>
            </section>


            </div>  
             
             
         </div>
     );
}
 
export default Activity8;