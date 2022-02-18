import React,{useEffect, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import MyModal from '../activity-components/ModalAct29';

import ladrilloImg from '../../../../resources/img/act29/ladrillo.jpg';
import gramaImg from '../../../../resources/img/act29/grama.jpg';
import playerImg from '../../../../resources/img/act29/player.png';
import rocaImg from '../../../../resources/img/act29/roca.png';
import jesusImg from '../../../../resources/img/act29/jesus.png';
import winImg from '../../../../resources/img/act29/win-lazaro.png';
import metaImg from '../../../../resources/img/act29/meta.png';

import womSound from "../../../../resources/sounds/wom.mp3"

const Activity29 = (props) => {

const [imgdisplay, setImgDisplay] = useState(0);
const [mapaRoca, setMapaRoca] = useState(0);
const [modalShow, setModalShow] = useState(false);
const [dataPregunta, setDataPregunta] = useState({});

let map='';


useEffect(() => {
    juegoAct29();
    cargar();
}, [])

useEffect(() => {
    juegoAct29();
    imgdisplay===1 && new Audio(womSound).play();
    console.log('mapaRoca', mapaRoca);

        mapaRoca===1 && preguntasModal(preguntas);
        mapaRoca===2 && preguntasModal(preguntas);
        mapaRoca===3 && preguntasModal(preguntas);
        mapaRoca===4 && preguntasModal(preguntas);
        mapaRoca===5 && preguntasModal(preguntas); 

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [imgdisplay, mapaRoca])



// function disableScroll(){  
//     window.scrollTo(0, 500);
//     window.addEventListener('scroll', disableScroll);
//   }

const preguntasModal = (preguntas) =>{
    mapaRoca===1 &&  setDataPregunta(preguntas[0]); setModalShow(true);
    mapaRoca===2 &&  setDataPregunta(preguntas[1]); setModalShow(true);
    mapaRoca===3 &&  setDataPregunta(preguntas[2]); setModalShow(true);
    mapaRoca===4 &&  setDataPregunta(preguntas[3]); setModalShow(true);
    mapaRoca===5 &&  setDataPregunta(preguntas[4]); setModalShow(true); 
}

const cargar = () =>{
    setImgDisplay(3);
}


const preguntas = [
    {
        id: 1,
        pregunta: '1. ¿Jesús afirma que él es…?',
        respuesta: 2,
        p1: 'Muy feliz',
        p2: 'La vida',
        p3: 'Las dos anteriores son correctas'
    },
    {
        id: 2,
        pregunta: '2. ¿Jesús está dispuesto en todo momento a…?',
        respuesta: 1,
        p1: 'Cuidarnos y darnos vida',
        p2: 'Darnos todo lo que queramos',
        p3: 'No hacer nada por nosotros'
    },
    {
        id: 3,
        pregunta: '3. ¿Cómo se sintió Jesús con la muerte de Lázaro?',
        respuesta: 1,
        p1: 'Muy triste y lloró',
        p2: 'No le importó',
        p3: 'Feliz porque se fue a descansar'
    },
    {
        id: 4,
        pregunta: '4. ¿En una situación en que se pierden las esperanzas en quién puedes poner tu fe para que te ayude?',
        respuesta: 2,
        p1: 'En tus amigos',
        p2: 'En Jesús',
        p3: 'En tus vecinos'
    },
    {
        id: 5,
        pregunta: '5. ¿Quién es la única persona que tiene la autoridad para quitar o devolver la vida?',
        respuesta: 2,
        p1: 'Las autoridades',
        p2: 'Jesús el Hijo de Dios',
        p3: 'Nosotros mismos'
    },
]


function mapa(num){
    let map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    if(num===1){ map[21][4]=0; }
    if(num===2){ map[21][4]=0; map[11][7]=0;}
    if(num===3){ map[21][4]=0; map[11][7]=0; map[22][11]=0; }
    if(num===4){ map[21][4]=0; map[11][7]=0; map[22][11]=0; map[13][17]=0; }
    if(num===5){ map[21][4]=0; map[11][7]=0; map[22][11]=0; map[13][17]=0; map[8][25]=0; }

    return map;
}


function juegoAct29(){
    let c = document.getElementById('canvas');
    let ctx = c.getContext('2d');
    let tileSize = 25;
    
map = mapa(mapaRoca);
let collBox = [];
let mapLength = map[0].length;
let mapHeight = map.length;


let ladrillo, grama, roca, jesus, playerimg;


function cargarImagenes(){
    // Imagenes
    ladrillo = new Image();
    ladrillo.src = ladrilloImg;

    grama = new Image();
    grama.src = gramaImg;

    roca = new Image();
    roca.src = rocaImg;

    jesus = new Image();
    jesus.src = jesusImg;

    playerimg = new Image();
    playerimg.src = playerImg
}





// Dibujamos el Mapa
function drawMap(m){
    for (let i = 0; i < m.length; i++) {
        collBox.push([]);
        for (let j = 0; j < m[i].length; j++) {
            if(m[i][j]===0){
                ctx.beginPath();
                ctx.drawImage(grama, j*tileSize, i*tileSize, tileSize, tileSize);
            }else if(m[i][j]===1){
                ctx.beginPath();
                // ctx.fillStyle = "#000";
                // ctx.fillRect(j*tileSize, i*tileSize, tileSize, tileSize);
                ctx.drawImage(ladrillo, j*tileSize, i*tileSize, tileSize, tileSize);

            }else if(m[i][j]===2){
                ctx.beginPath();
                ctx.drawImage(grama, j*tileSize, i*tileSize, tileSize, tileSize);
                ctx.drawImage(jesus, j*tileSize, i*tileSize, tileSize, tileSize);
            }
            else if(m[i][j]===3){
                ctx.beginPath();
                ctx.drawImage(grama, j*tileSize, i*tileSize, tileSize, tileSize);
                ctx.drawImage(roca, j*tileSize, i*tileSize, tileSize, tileSize);

            }

            collBox[i].push({
                x: j*tileSize, 
                y: i*tileSize, 
                status: m[i][j]===1 
                    ? 1 
                    : (m[i][j]===2
                        ? 2
                        : (m[i][j]===3
                            ? 3
                            : 0
                           )
                       )
            });
        }
        
    }
}

// Dibujamos el Jugador
function drawPlayer(x,y){
    ctx.beginPath();
    // ctx.fillStyle = "#ff0000";
    // ctx.fillRect(x, y, tileSize, tileSize);
    ctx.drawImage(playerimg, x, y, tileSize, tileSize);
    
}

let player = {
    x: 0,
    y: 0,
    newX: 0,
    newY: 0
}

// Funcion para mover el jugador
function move(x,y){
    ctx.clearRect(0, 0, mapLength*tileSize, mapHeight*tileSize);

    drawMap(map);
    drawPlayer(x,y);

    player.x = player.newX;
    player.y = player.newY;
}



// Validar movimientos del jugador 
function checkColl(){
    for (let i = 0; i < mapHeight; i++) {
        for (let j = 0; j < mapLength; j++) {
            let b = collBox[i][j];

            if(player.newX === b.x && player.newY === b.y){
                if(b.status === 1){
                    console.log('Hit Rock');
                }else if(b.status === 2){
                    setMapaRoca(10);
                    console.log('Win');
                    setImgDisplay(1);
                    move(player.newX, player.newY);
                }else if(b.status === 3){
                    setMapaRoca(mapaRoca+1);
                    map = mapa(mapaRoca);
                }else{
                    move(player.newX, player.newY);
                }
            }else if(player.newX < 0 || player.newX >= mapLength*tileSize || player.newY < 0 || player.newY >= mapHeight*tileSize){
                console.log('Hit Wall');
            }
            
        }
        
    }
}

// Acciones al precionar las teclas
window.onkeydown = function(e){
    
    if (e.keyCode === 37) { e.preventDefault(); player.newX = player.x-tileSize; player.newY = player.y; console.log('Izquierda');}
    if (e.keyCode === 38) { e.preventDefault(); player.newY = player.y-tileSize; player.newX = player.x; console.log('Arriba');}
    if (e.keyCode === 39) { e.preventDefault(); player.newX = player.x+tileSize; player.newY = player.y; console.log('Derecha');}
    if (e.keyCode === 40) { e.preventDefault(); player.newY = player.y+tileSize; player.newX = player.x; console.log('Abajo');}
    checkColl();
}


function load(){
    cargarImagenes();
    drawMap(map);
    let t = tileSize;
    if (mapaRoca===0) { drawPlayer(0,t*21); player.x = 0; player.y = t*21;}
    if (mapaRoca===1) { drawPlayer(t*4,t*21); player.x = t*4; player.y = t*21;}
    if (mapaRoca===2) { drawPlayer(t*7,t*11); player.x = t*7; player.y = t*11;}
    if (mapaRoca===3) { drawPlayer(t*11,t*22); player.x = t*11; player.y = t*22;}
    if (mapaRoca===4) { drawPlayer(t*17,t*13); player.x = t*17; player.y = t*13;}
    if (mapaRoca===5) { drawPlayer(t*25,t*8); player.x = t*25; player.y = t*8;}
    checkColl();
}

// Mostrar el juego
window.onload = load();

}

     return ( 
         <div>
             <HeaderActivity {...props} />

             <div className="containerActivity">

                 <div className="containerCanvas">
                    <img src={metaImg} alt="meta" className='imgMeta' />
                    <canvas id="canvas" width="775" height="775"></canvas>
                    {
                        imgdisplay===1
                            && <img className='imgPopUpWin' src={winImg} alt="Ganador" /> 
                    }
                    {  
                        <MyModal
                            size="sm"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            backdrop="static"
                            keyboard={false}
                            dataPregunta={dataPregunta}
                        />
                    }
                 </div>
             
             </div>
            
            {
                imgdisplay===1 &&
                <ButtonUpdate {...props} />
            }
             
         </div>
     );
}
 
export default Activity29;