import React,{useEffect, useState, Fragment} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import { useStopwatch  } from 'react-timer-hook';

import '../activity-components/css/crucigrama.css';
import MyModal from '../activity-components/Modal';


const MainCrucigrama = (props) => {

    const {objCrucigrama, tableroX, tableroY, TextoPreguntas} = props;

    const [modalShow, setModalShow] = useState(false);

    const [contMinutos, setCountMinutos] = useState({
        minutosPista: 0,
        mostrarPista: true
    });

    const [puntosPalabra, setPuntosPalabra] = useState([]);


    const [puntosJuego, setPuntosJuego] = useState({
        puntajeJuego: '0',
        mensajePuntajeJuego: 'Cargando...',
    });

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
      } = useStopwatch ({ autoStart: false });

      
useEffect(() => {
    crucigramaJuego();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

      

useEffect(() => {
    tiempoEsperaPistaFunction();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [minutes])
 


const tiempoEsperaPistaFunction = () =>{

    let tiempoEsperaPista = contMinutos.minutosPista-minutes;

    tiempoEsperaPista<=-2
        &&setCountMinutos({
            minutosPista: minutes,
            mostrarPista: true
        });
}


const contadorMinutosPista = () =>{
    // Mostramos la Pista
    mostrarPista();

    setCountMinutos({
        minutosPista: minutes,
        mostrarPista: false
    });

}


// Mostrar letra aletoria
const mostrarPista = ()=>{

    let cont = 0;
    while(cont <= 100){
        
        // Seleccionamos la palabra aletoriamente
        let max = objCrucigrama.length;
        let palabraS = Math.floor(Math.random() * (max));
        
        // Seleccionamos la palabra aletoriamente
        let maxL = objCrucigrama[palabraS].ubicacion.length;
        let letraS = Math.floor(Math.random() * (maxL));

        // Encontramos nuestra campo para mostrar la letra
        const l = objCrucigrama[palabraS].ubicacion[letraS];

        let letraBuscar = document.getElementById(l.fila).value;

        if (letraBuscar.length<=0) {
            // Buscamos la letra de la palabra en el JSON
            let letraDePalabra = objCrucigrama[palabraS].palabra;
            document.getElementById(l.fila).value = letraDePalabra[letraS];
            return 0;
        }

        cont++;
        // Si tiene muchas busquedas salimos
        if(cont>=100) {return 0};
    }
    

}


const validarJuego = ()=>{

    let palabrapuntos = '';
    let palabraObjet = [];

    objCrucigrama.forEach(objC=>{

        palabrapuntos = '';

        objC.ubicacion.forEach(ubi=>{
            // Le añadimos a cada variable el valor de su casilla
            palabrapuntos += String(document.getElementById(ubi.fila).value);
            // console.log(`palabrapuntos ${palabrapuntos}`);
        })

        // palabrapuntos===objC.palabra
        // &&    // JSON value Dynamic, agregar []
        //     setPuntosPalabra({
        //         ...puntosPalabra,
        //         [palabrapuntos]: 'true'
        // })

        // Agregamos al state las palabras completadas
        if(palabrapuntos===objC.palabra){

            // value Dynamic, agregar [] para que muestre el nombre de la variable
            palabraObjet.push({[palabrapuntos]: 'true', validado: false});
            setPuntosPalabra(palabraObjet);


                    // Asignar El puntaje
                    // let minG = minutes-puntosJuego.minutosPalabra;
                    // let segG = seconds-puntosJuego.segundosPalabra;
                    // if ( (minutes<=1 && seconds<=59 && (minG===1 || minG===0)) || 
                    //     (minG===2 && segG>=0)){
                    //     let puntosG = puntosJuego.puntos+20;
                    //     setPuntosJuego({
                    //         minutosPalabra: minutes,
                    //         segundosPalabra: seconds,
                    //         puntos: puntosG
                    //     })
                    // }
                    // else if((minG===2 && segG>=0 )){
                    //     let puntosG = puntosJuego.puntos+10;
                    //     setPuntosJuego({
                    //         minutosPalabra: minutes,
                    //         segundosPalabra: seconds,
                    //         puntos: puntosG
                    //     })
                    // }
  
         }
            
    })

    let mJuego = '...';
    let pJuego = '0'

    if (objCrucigrama.length===puntosPalabra.length) {


        let porcentaje = (puntosPalabra.length*100)/puntosPalabra.length;
        let puntajeFinal = (  porcentaje - (((minutes-20)*100)/60)/2);
        
        if(minutes<=20){
            pJuego = '100Pts';
            mJuego = 'GANASTE :)';
            setPuntosJuego({
                ...puntosJuego,
                puntajeJuego: pJuego,
                mensajePuntajeJuego: mJuego
            })
        }
        if(minutes>20){
            pJuego=`Obtuviste ${parseInt(puntajeFinal)}Pts de 100Pts`
            mJuego = 'GANASTE :)';
            setPuntosJuego({
                ...puntosJuego,
                puntajeJuego: pJuego,
                mensajePuntajeJuego: mJuego
            })
        }

    }else{
        mJuego = 'Faltan palabras por completar o corregir. \nContinuar jugando...';
        pJuego='...';
        setPuntosJuego({
            ...puntosJuego,
            mensajePuntajeJuego: mJuego,
            puntajeJuego: pJuego
        })
    }

    setModalShow(true);
    
    

    // if(palabra_fuego==='fuego' && palabra_oso==='oso' && palabra_gato==='gato' && palabra_loro==='loro'){
    //     console.log(`GANASTE :) - ${palabra_fuego} + ${palabra_oso} + ${palabra_gato} + ${palabra_loro}`);
    // }

}


const crucigramaJuego = ()=>{



// Creamos el tablero
const crearTablero = (x,y) =>{

    let table = '<form><table class="crucigrama">';
    
    for (let fila = 1; fila <= y; fila++) {
        table += `
        <tr>`;
        
        for (let col = 1; col <= x; col++) {
            table += `
        <td>
            <input class="casilla" type="text" maxlength="1" id="fila${fila}C${col}" />
        </td>`
        }
        table += `
        </tr>`;
    }
    
    table += '</table></form>';


    return table;

}


// Deshabilitamos todos los campos del tablero
const deshabilitarCampos = (x, y) =>{
    for (let fila = 1; fila <= y; fila++) {
        for (let col = 1; col <= x; col++) {
            document.getElementById(`fila${fila}C${col}`).readOnly = true;
        }        
    }
}

// Habilitar casillas
const habilitarCampos = (objCru)=>{
    objCru.forEach((objC, fila)=>{
        objC.ubicacion.forEach((ubi, col)=>{
            let palabra = document.getElementById(ubi.fila);

            // Habilitamos las casillas asignadas
            palabra.readOnly = false;

            // Agregamos color al fondo de los campos 
            palabra.classList.add("bgCammpo");

            // si es la primera letra asignar el numero
            col===0  
                && palabra.insertAdjacentHTML("beforebegin", `<p class="numFila">${objC.id}</p>`)
        })
    })
}




// Instanciamos el tablero y se lo añadimos al la clase html .crucigramaTablero
const tablero = crearTablero(tableroX,tableroY);
const crucigramaTablero = document.querySelector('.crucigramaTablero');
crucigramaTablero.insertAdjacentHTML("afterbegin", tablero);

// Deshabilitamos todos los campos del tablero
deshabilitarCampos(tableroX,tableroY);


// Habilitamos los campos necesarios para hacer el juego
habilitarCampos(objCrucigrama);

}


// Creamos el tablero
// function CrearTableroHTML(){

//     const items = [];

//     for (let fila = 1; fila <= tableroX; fila++) {
//              items.push(<tr/>);
        
//         for (let col = 1; col <= tableroY; col++) {
//             items.push(
//                 <td>
//                     <input class="casilla" type="text" maxlength="1" id={`fila${fila}C${col}`} />
//                 </td>
            
//             );
//         }

//         items.push(<tr/>);
//     }
 

//     return(
//         <form>
//             <table className='crucigrama'>
//                 {items}
//             </table>

//         </form>
//     )
// }

     return ( 
         <div className='containerActivity1'>
             {/* <CrearTableroHTML /> */}
             
             <HeaderActivity 
             {...props}/>
             
            <MyModal
                size="sm"
                show={modalShow}
                onHide={() => setModalShow(false)}
                titulo={'Puntaje del Juego'}
                puntaje={puntosJuego.puntajeJuego}
                texto={puntosJuego.mensajePuntajeJuego}
            />
            
             
             <div style={{textAlign: 'center'}}>
                
        
                <p>{isRunning 
                    ? (
                        <div className="preguntasCruc">
                            <h3>Preguntas</h3> 

                            <TextoPreguntas />

                            <div style={{fontSize: '50px', color:'#0064ff'}}>
                                <span>Tiempo: {days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                            </div>

                            {
                                contMinutos.mostrarPista===true
                                && <button className='botonBlue colorAmarillo' onClick={contadorMinutosPista}>Mostrar Pista</button>
                                
                            }
                            <button className='botonBlue colorVerde' onClick={validarJuego}>Validar Respuesta</button>
                        </div>
                        )
                
                    : <button className='botonBlue' onClick={start} on>Iniciar Juego</button>}</p>

                
                <div className="crucigramaTablero"></div>
                

            </div>



            {
                puntosJuego.puntajeJuego.length>3
                &&<ButtonUpdate {...props} />
            }
            

         </div>
     );
}
 
export default MainCrucigrama;