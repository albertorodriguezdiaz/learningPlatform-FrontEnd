import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

import triangulo from '../../../../resources/img/act32/triangulo.png';

import abogado from '../../../../resources/img/act32/abogado.png';
import albanil from '../../../../resources/img/act32/albanil.png';
import campesino from '../../../../resources/img/act32/campesino.png';
import ebrio from '../../../../resources/img/act32/ebrio.png';
import embarazada from '../../../../resources/img/act32/embarazada.png';
import graduado from '../../../../resources/img/act32/graduado.png';
import hombre from '../../../../resources/img/act32/hombre.png';
import medico from '../../../../resources/img/act32/medico.png';
import mendigo from '../../../../resources/img/act32/mendigo.png';
import mujer from '../../../../resources/img/act32/mujer.png';
import necesidad from '../../../../resources/img/act32/necesidad.png';
import panadero from '../../../../resources/img/act32/panadero.png';
import policia from '../../../../resources/img/act32/policia.png';
import presidente from '../../../../resources/img/act32/presidente.png';
import profesora from '../../../../resources/img/act32/profesora.png';


const Activity32 = (props) => {

    
    useEffect(() => {
        imgDD();
    }, [])

 const imgDD = ()=>{

//Hacer que el elemento DIV se mueva: 
let offset = 5;
let mydivs = document.getElementsByClassName("figuraMovible");

for (let i = 0; i < mydivs.length; i++) {
  dragElement(mydivs[i]);
  mydivs[i].style.left = offset + "px";
  offset = offset + mydivs[i].offsetWidth + 5;
}

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.getElementsByClassName("headerMover")[0]) {

    // si está presente, el encabezado es desde donde mueve el DIV
    elmnt.getElementsByClassName(
      "headerMover"
    )[0].onmousedown = dragMouseDown;
  } else {
    // De lo contrario, mueva el DIV desde cualquier lugar dentro del DIV
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // obtener la posición del cursor del mouse al inicio: 
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // llamar a una función siempre que el cursor se mueva: 
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calcular la nueva posición del cursor: 
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // establecer la nueva posición del elemento: 
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // dejar de moverse cuando se suelta el botón del mouse: 
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

}
    
     return ( 
         <div>
             <HeaderActivity {...props} />

        <div className="containerActivity1">
             <h2>Pirámide social</h2>
             <p>Observa cada uno de los personajes, ubícalos en la pirámide según tu opinión.</p>

        <div className="piramideAct32">

            <div className="figurasDiv">
            <div class="figuraMovible">
                {/* <div class="headerMover">Mover desde Aquí</div> */}
                <img src={abogado} alt="abogado" />
            </div>

            <div class="figuraMovible">
                <img src={albanil} alt="albanil" />
            </div>
            <div class="figuraMovible">
                <img src={campesino} alt="campesino" />
            </div>
            <div class="figuraMovible">
                <img src={ebrio} alt="ebrio" />
            </div>
            <div class="figuraMovible">
                <img src={embarazada} alt="embarazada" />
            </div>
            <div class="figuraMovible">
                <img src={graduado} alt="graduado" />
            </div>
            <div class="figuraMovible">
                <img src={hombre} alt="hombre" />
            </div>
            <div class="figuraMovible">
                <img src={medico} alt="medico" />
            </div>
            <div class="figuraMovible">
                <img src={mendigo} alt="mendigo" />
            </div>
            <div class="figuraMovible">
                <img src={mujer} alt="mujer" />
            </div>
            <div class="figuraMovible">
                <img src={necesidad} alt="necesidad" />
            </div>
            <div class="figuraMovible">
                <img src={panadero} alt="panadero" />
            </div>
            <div class="figuraMovible">
                <img src={policia} alt="policia" />
            </div>
            <div class="figuraMovible">
                <img src={presidente} alt="presidente" />
            </div>
            <div class="figuraMovible">
                <img src={profesora} alt="profesora" />
            </div>
            </div>


            <img src={triangulo} alt="Triangulo" />
        </div>
            
            </div>

            <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity32;