import React,{useEffect, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';
import ladrilloImg from '../../../../resources/img/act29/ladrillo.jpg';
import gramaImg from '../../../../resources/img/act29/grama.jpg';
import playerImg from '../../../../resources/img/act29/player.png';
import rocaImg from '../../../../resources/img/act29/roca.png';
import jesusImg from '../../../../resources/img/act29/jesus.png';
import winImg from '../../../../resources/img/act29/win-lazaro.png';
import metaImg from '../../../../resources/img/act29/meta.png';

import womSound from "../../../../resources/sounds/wom.mp3"

const Activity29 = (props) => {

    const [imgdisplay, setImgDisplay] = useState(false);

useEffect(() => {
    juegoAct29();

    imgdisplay===true
     && new Audio(womSound).play();
    
    
}, [imgdisplay])


// function disableScroll(){  
//     window.scrollTo(0, 500);
//     window.addEventListener('scroll', disableScroll);
//   }

    const juegoAct29 = () =>{

    let c = document.getElementById('canvas');
    let ctx = c.getContext('2d');
    let tileSize = 25;


let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 9, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 9, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let collBox = [];
let mapLength = map[0].length;
let mapHeight = map.length;

// Imagenes
let ladrillo = new Image();
ladrillo.src = ladrilloImg;

let grama = new Image();
grama.src = gramaImg;

let roca = new Image();
roca.src = rocaImg;

let jesus = new Image();
jesus.src = jesusImg;

let playerimg = new Image();
playerimg.src = playerImg;

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
                ctx.fillStyle = "#b354e8";
                ctx.fillRect(j*tileSize, i*tileSize, tileSize, tileSize);
            }
            else if(m[i][j]===9){
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
    y: tileSize*21,
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
                    console.log('Win');
                    setImgDisplay(true);
                    move(player.newX, player.newY);
                }else if(b.status === 3){
                    console.log('Pregunta');
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
    e.preventDefault();
    if (e.keyCode === 37) { player.newX = player.x-tileSize; player.newY = player.y; console.log('Izquierda');}
    if (e.keyCode === 38) { player.newY = player.y-tileSize; player.newX = player.x; console.log('Arriba');}
    if (e.keyCode === 39) { player.newX = player.x+tileSize; player.newY = player.y; console.log('Derecha');}
    if (e.keyCode === 40) { player.newY = player.y+tileSize; player.newX = player.x; console.log('Abajo');}
    checkColl();
}


function load(){
    drawMap(map);
    drawPlayer(0,tileSize*21);
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
                        imgdisplay===true
                            && <img className='imgPopUpWin' src={winImg} alt="Ganador" /> 
                    }
                 </div>
             
             </div>
            
            {
                imgdisplay===true &&
                <ButtonUpdate {...props} />
            }
             
         </div>
     );
}
 
export default Activity29;