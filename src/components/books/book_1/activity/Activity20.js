import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

import '../activity-components/css/activity20.css';


const Activity20 = (props) => {

useEffect(() => {
    crucigramaJuego();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


const objCrucigrama = [
    { id: 1,
      palabra: 'perfecto',
      ubicacion:  [ {fila: 'fila11C13'},{fila: 'fila11C14'},{fila: 'fila11C15'},{fila: 'fila11C16'},{fila: 'fila11C17'},{fila: 'fila11C18'},{fila: 'fila11C19'},{fila: 'fila11C20'} ]
    },
    { id: 2,
      palabra: 'disminuyeron',
      ubicacion:  [ {fila: 'fila1C20'},{fila: 'fila2C20'},{fila: 'fila3C20'},{fila: 'fila4C20'},{fila: 'fila5C20'},{fila: 'fila6C20'},{fila: 'fila7C20'},{fila: 'fila8C20'},{fila: 'fila9C20'},{fila: 'fila10C20'},{fila: 'fila11C20'},{fila: 'fila12C20'} ]
    },
    { id: 3,
      palabra: 'superficie',
      ubicacion:  [ {fila: 'fila5C12'},{fila: 'fila5C13'},{fila: 'fila5C14'},{fila: 'fila5C15'},{fila: 'fila5C16'},{fila: 'fila5C17'},{fila: 'fila5C18'},{fila: 'fila5C19'},{fila: 'fila5C20'},{fila: 'fila5C21'}]
    },
    { id: 4,
      palabra: 'destruir',
      ubicacion:  [ {fila: 'fila7C11'},{fila: 'fila7C12'},{fila: 'fila7C13'},{fila: 'fila7C14'},{fila: 'fila7C15'},{fila: 'fila7C16'},{fila: 'fila7C17'},{fila: 'fila7C18'}]
    },
    { id: 5,
      palabra: 'alzaron',
      ubicacion:  [ {fila: 'fila2C3'},{fila: 'fila3C3'},{fila: 'fila4C3'},{fila: 'fila5C3'},{fila: 'fila6C3'},{fila: 'fila7C3'},{fila: 'fila8C3'},]
    },
    { id: 6,
      palabra: 'paloma',
      ubicacion:  [ {fila: 'fila3C6'},{fila: 'fila3C7'},{fila: 'fila3C8'},{fila: 'fila3C9'},{fila: 'fila3C10'},{fila: 'fila3C11'},]
    },
    { id: 7,
      palabra: 'corrompio',
      ubicacion:  [ {fila: 'fila6C1'},{fila: 'fila6C2'},{fila: 'fila6C3'},{fila: 'fila6C4'},{fila: 'fila6C5'},{fila: 'fila6C6'},{fila: 'fila6C7'},{fila: 'fila6C8'},{fila: 'fila6C9'},]
    },
    { id: 8,
      palabra: 'perpetuo',
      ubicacion:  [ {fila: 'fila2C14'},{fila: 'fila3C14'},{fila: 'fila4C14'},{fila: 'fila5C14'},{fila: 'fila6C14'},{fila: 'fila7C14'},{fila: 'fila8C14'},{fila: 'fila9C14'},]
    },
    { id: 9,
      palabra: 'cerraron',
      ubicacion:  [ {fila: 'fila9C8'},{fila: 'fila9C9'},{fila: 'fila9C10'},{fila: 'fila9C11'},{fila: 'fila9C12'},{fila: 'fila9C13'},{fila: 'fila9C14'},{fila: 'fila9C15'},]
    },
    { id: 10,
      palabra: 'conforme',
      ubicacion:  [ {fila: 'fila2C9'},{fila: 'fila3C9'},{fila: 'fila4C9'},{fila: 'fila5C9'},{fila: 'fila6C9'},{fila: 'fila7C9'},{fila: 'fila8C9'},{fila: 'fila9C9'},]
    },

];

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
    

    // objCrucigrama.forEach((pal) =>{
    //     if(pal.id===palabra){
    //         let maxL = pal.ubicacion.length;
    //         let letra = Math.floor(Math.random() * (maxL - min)) + min;
            
    //         pal.ubicacion.forEach((letr, key) =>{
    //             if (letra===key+1) {
    //                 document.getElementById(letr.fila).value = 'A';
    //             }
    //         })
    //     }
        
    // })

}





const crucigramaJuego = ()=>{

const tableroX = 12;
const tableroY = 21;
 

// Creamos las variables con los valores de cada palabra ingresadas por el jugador
const crearVariablePalabra = (objPalabra, palabraExiste)=>{
    let palabra = '';

    objPalabra.forEach((objC, fila)=>{
        objC.ubicacion.map((ubi, col)=>{
            // Comparamos la palabra a volver variable por la palabra en el objeto
            if (palabraExiste===objC.palabra){
                // Le añadimos a cada variable el valor de su casilla
                palabra += document.getElementById(ubi.fila).value;
            } 
            
        })
    })

    return palabra;
}



// Creamos el tablero
const crearTablero = (x,y) =>{

    let table = '<table class="crucigrama">';
    
    for (let fila = 1; fila <= x; fila++) {
        table += `
        <tr>`;
        
        for (let col = 1; col <= y; col++) {
            table +=`
            <td>
                <input class="casilla" type="text" maxlength="1" id="fila${fila}C${col}" />
            </td> `;
        }
        table += `
        </tr>`;
    }
    
    table += '</table>';


    return table;
}


// Deshabilitamos todos los campos del tablero
const deshabilitarCampos = (x, y) =>{
    for (let fila = 1; fila <= x; fila++) {
        for (let col = 1; col <= y; col++) {
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



// setInterval(() => {
//     const palabra_fuego = crearVariablePalabra(objCrucigrama,'fuego');
//     const palabra_oso = crearVariablePalabra(objCrucigrama,'oso');
//     const palabra_gato = crearVariablePalabra(objCrucigrama,'gato');
//     const palabra_loro = crearVariablePalabra(objCrucigrama,'loro');

    
//     console.log(palabra_fuego);

//     if(palabra_fuego==='fuego' && palabra_oso==='oso' && palabra_gato==='gato' && palabra_loro==='loro'){
//         console.log(`GANASTE :) - ${palabra_fuego} + ${palabra_oso} + ${palabra_gato} + ${palabra_loro}`);
//     }

//   }, 5000);


// Instanciamos el tablero y se lo añadimos al la clase html .crucigramaTablero
const tablero = crearTablero(tableroX,tableroY);
const crucigramaTablero = document.querySelector('.crucigramaTablero');
crucigramaTablero.insertAdjacentHTML("afterbegin", tablero);

// Deshabilitamos todos los campos del tablero
deshabilitarCampos(tableroX,tableroY);

// Creamos las varibalas a partir del JSON con la ubicacion de las casillas
// crearVariables(objCrucigrama);

// Habilitamos los campos necesarios para hacer el juego
habilitarCampos(objCrucigrama);

}


     return ( 
         <div className='containerActivity1'>
             <HeaderActivity {...props} />
                <div className="crucigramaTablero"></div>

                <button className='botonPista' onClick={mostrarPista}>Mostrar Pista</button>
                
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity20;