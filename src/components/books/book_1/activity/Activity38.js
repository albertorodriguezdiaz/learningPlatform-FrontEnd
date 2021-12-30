import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { Col, Container, Row } from 'react-bootstrap';



import '../activity-components/css/activity5.css';

const Activity38 = (props) => {

    useEffect(() => {
        gameActivity38();
    }, [])


    const gameActivity38 = ()=>{
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
    // let puntaje = document.querySelector(".puntaje");
    // let correctas = puntaje.querySelector(".correctas");
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
  let letraMostrar = draggableElementData.split('');

  const droppableElementData = event.target.getAttribute("idObjColocable");
  console.log(droppableElementData);


  setTimeout(() => {
    // correctas.textContent = total;
    
    if(total===66) {
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

    event.target.classList.add("objColocableValido");

    // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;

    draggableElement.classList.add("objArrastrableValido");
    draggableElement.setAttribute("draggable", "false");

    


    event.target.insertAdjacentHTML("afterbegin", `${letraMostrar[0]}`);

  }
}
    }


     return ( 
         <div>
             <HeaderActivity {...props} /> 

            <div className='containerActivity activity38'>
             <h2>Palabra clave </h2>
            
            <section className="puntaje">
                <p className="infoPuntaje">Llena las casillas con las palabras claves de la historia. En cada una de las pistas hay una serie de letras, debes arrastrar las correspondientes para formar la palabra correcta. </p>
                <div className='botonEnconder'><ButtonUpdate {...props} /></div>
            </section>

            <Container>
            <Row>
            <Col md={6}>
                <section className='caja-colocar'>
                <Container>
                <Row>

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>1</td>
                        <td><div className="objColocable boxColocar" idObjColocable="n_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="p_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="e_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="d_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="i_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="c_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_1"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_1b"></div></td>
                      </tr>
                    </table>
                </div>
                </Col>

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>2</td>
                        <td><div className="objColocable boxColocar" idObjColocable="c_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="n_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="t_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="l_2"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_2b"></div></td>
                     </tr>
                    </table>
                </div>
                </Col>

              

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>3</td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_3b"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="n_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="j_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="u_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="n_3b"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="t_3"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_3c"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="s_3"></div></td>
                     </tr>
                    </table>
                </div>
                </Col>

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>4</td>
                        <td><div className="objColocable boxColocar" idObjColocable="v_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="l_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="e_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="n_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="t_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="i_4"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_4b"></div></td>
                    </tr>
                    </table>
                </div>
                </Col>

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>5</td>
                        <td><div className="objColocable boxColocar" idObjColocable="t_5"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="e_5"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="m_5"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="b_5"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="l_5"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_5"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_5"></div></td>
                     </tr>
                    </table>
                </div>
                </Col>

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>6</td>
                        <td><div className="objColocable boxColocar" idObjColocable="e_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="s_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="p_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="i_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="i_6b"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="t_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="u_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="s_6b"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="n_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="t_6"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="o_6"></div></td>
                      </tr>
                    </table>
                </div>
                </Col>

                <Col sm={12}>
                <div className="boxFrase">
                    <table>
                      <tr>
                        <td className='numeroTitulo'>7</td>
                        <td><div className="objColocable boxColocar" idObjColocable="p_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="e_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="d_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="i_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="c_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="a_7"></div></td>
                        <td><div className="objColocable boxColocar" idObjColocable="r_7b"></div></td>
                      </tr>
                    </table>
                </div>
                </Col>

                </Row>
                </Container>
                </section>
            </Col>
            <Col md={6}>
                <section className='figuras-arrastrables'>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 1.	Lo que le pidieron los dirigentes judíos a Pedro y Juan.  </p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='n_1'>n</div></td>
                            <td><div className='objArrastrable' draggable="true" id='p_1'>p</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_1'>o</div></td>
                            <td><div className='objArrastrable' draggable="true" id='e_1'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_1'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_1'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='d_1'>d</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='a_1'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='f_1'>f</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_1'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_1b'>r</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='c_1'>c</div></td>  
                        </tr>
                    </table>
                    </div>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 2.	Lo que hicieron Pedro y Juan inmediatamente salieron de la cárcel. </p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='n_2'>n</div></td>
                            <td><div className='objArrastrable' draggable="true" id='c_2'>c</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_2'>o</div></td>
                            <td><div className='objArrastrable' draggable="true" id='e_2'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_2'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_2'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='l_2'>l</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='a_2'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='f_2'>f</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_2'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='o_2b'>o</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='c_2b'>c</div></td> 
                            </tr>
                    </table>
                    </div>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 3.	Al oír las noticias estos hicieron los creyentes.</p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='n_3'>n</div></td>
                            <td><div className='objArrastrable' draggable="true" id='p_3'>p</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_3'>o</div></td>
                            <td><div className='objArrastrable' draggable="true" id='e_3'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_3'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_3'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_3b'>o</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='a_3'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='j_3'>j</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_3'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_3'>r</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='u_3'>u</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='s_3'>s</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_3c'>o</div></td>
                            <td><div className='objArrastrable' draggable="true" id='v_3'>v</div></td>
                            <td><div className='objArrastrable' draggable="true" id='n_3b'>n</div></td>
                        </tr>
                    </table>
                    </div>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 4.	Esto pidieron los creyentes a Dios en oración. </p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='n_4'>n</div></td>
                            <td><div className='objArrastrable' draggable="true" id='p_4'>p</div></td>
                            <td><div className='objArrastrable' draggable="true" id='l_4'>l</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='e_4'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_4'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_4'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='d_4'>d</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='a_4'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='j_4'>j</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_4'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_4'>r</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='s_4'>s</div></td>
                            <td><div className='objArrastrable' draggable="true" id='a_4b'>a</div></td>
                            <td><div className='objArrastrable' draggable="true" id='v_4'>v</div></td>
                        </tr>
                    </table>
                    </div>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 5.	Sucedió luego que los creyentes oraron.  </p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='l_5'>l</div></td>
                            <td><div className='objArrastrable' draggable="true" id='p_5'>p</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_5'>o</div></td>
                            <td><div className='objArrastrable' draggable="true" id='e_5'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_5'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_5'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='d_5'>d</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='a_5'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='m_5'>m</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_5'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_5'>r</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='u_5'>u</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='b_5'>b</div></td> 
                        </tr>
                    </table>
                    </div>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 6.	De esto fueron llenos los creyentes.  </p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='n_6'>n</div></td>
                            <td><div className='objArrastrable' draggable="true" id='p_6'>p</div></td>
                            <td><div className='objArrastrable' draggable="true" id='o_6'>o</div></td>
                            <td><div className='objArrastrable' draggable="true" id='e_6'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_6'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_6'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='i_6'>i</div></td>  
                            <td><div className='objArrastrable' draggable="true" id='a_6'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='j_6'>j</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_6b'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_6'>r</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='u_6'>u</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='s_6'>s</div></td>
                            <td><div className='objArrastrable' draggable="true" id='r_6'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_6'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='s_6b'>s</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='n_6'>n</div></td>
                        </tr>
                    </table>
                    </div>

                    <div className="boxPalabras">
                       <p className='titlePalabraBox'> 7.	Lo que hicieron con valentía como resultado de haber orado.  </p>
                    <table>
                        <tr>
                            <td><div className='objArrastrable' draggable="true" id='n_7'>n</div></td>
                            <td><div className='objArrastrable' draggable="true" id='p_7'>p</div></td>
                            <td><div className='objArrastrable' draggable="true" id='a_7'>a</div></td>
                            <td><div className='objArrastrable' draggable="true" id='e_7'>e</div></td>
                            <td><div className='objArrastrable' draggable="true" id='t_7'>t</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_7'>r</div></td>
                            <td><div className='objArrastrable' draggable="true" id='d_7'>d</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='a_7'>a</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='j_7'>j</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='i_7'>i</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='r_7'>r</div></td> 
                            <td><div className='objArrastrable' draggable="true" id='c_7'>c</div></td>  
                            <td><div className='objArrastrable' draggable="true" id='s_7'>s</div></td>
                            <td><div className='objArrastrable' draggable="true" id='r_7b'>r</div></td>
                        </tr>
                    </table>
                    </div>

                </section>
            </Col>
            </Row>
            </Container>



            </div>  
             
             
         </div>
     );
}
 
export default Activity38;