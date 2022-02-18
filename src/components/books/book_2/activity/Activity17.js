import React,{useEffect} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';


import ImgNave from '../../../../resources/img/act17/nave.png';
import ImgCactus from '../../../../resources/img/act17/cactus.png';
import ImgFondo from '../../../../resources/img/act17/fondo.jpg';
import ImgSelect1 from '../../../../resources/img/act17/feto.png';
import ImgSelect2 from '../../../../resources/img/act17/asalto.png';
import ImgSelect3 from '../../../../resources/img/act17/bullying.png';
import ImgSelect4 from '../../../../resources/img/act17/ninaspeleando.png';
import ImgSelect5 from '../../../../resources/img/act17/reconciliacion.png';
import ImgSelect6 from '../../../../resources/img/act17/suicida.png';
import ImgSelect7 from '../../../../resources/img/act17/tapabocas.png';
import ImgSelect8 from '../../../../resources/img/act17/peleando.png';
import ImgSelect9 from '../../../../resources/img/act17/dulce.png';
import ImgSelectFoto from '../../../../resources/img/act17/selectfoto.png';
import ImgSelectFotoAll from '../../../../resources/img/act17/selectfotoall.png';
import ImgSelectFotoError from '../../../../resources/img/act17/selectfoto-error.png';

import ImgValor1 from '../../../../resources/img/act17/valor1.png';
import ImgValor2 from '../../../../resources/img/act17/valor2.png';
import ImgValor3 from '../../../../resources/img/act17/valor1.png';



const Activity17 = (props) => {


    useEffect(() => {
        juegoAct17()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    function juegoAct17(){
        console.log('Inicio de Juego');



document.addEventListener('keydown', function(evento){
 
    if(evento.keyCode === 38 ){
        evento.preventDefault();
        navePlayer.vy = navePlayer.salto;
        navePlayer.y -= navePlayer.vy;
    }
    if(evento.keyCode === 40){
        evento.preventDefault();
        navePlayer.vy = navePlayer.salto;
        navePlayer.y += navePlayer.vy;
    }
    if(evento.keyCode === 13){
        evento.preventDefault();
        imagenCorrecta();
    }

    verificar();
    
});




function detenerJuego(muerto){
    nivel.velocidad = 0;
    nivel.muerto = muerto;
    nivel.niveles = 1;
    imgPregunta1.x = ancho + 100;
    nivel.puntuacion = 0;
}


let imgNave, imgCactus, imgFondo;
let imgSelect1, imgSelect2, imgSelect3;
let imgSelect4, imgSelect5, imgSelect6;
let imgSelect7, imgSelect8, imgSelect9;
let imgSelectFoto, imgSelectFotoAll, imgSelectFotoError;
let imgSelectTrue1;
let imgSelectTrue2;
let imgSelectTrue3;
let imgSelect1c;
let imgSelect2c;
let imgSelect3c;

let imgValor1;
let imgValor2;
let imgValor3;

function cargarImagenes(){

    
    imgValor1 = new Image();
    imgValor2 = new Image();
    imgValor3 = new Image();
    
    imgValor1.src = ImgValor1;
    imgValor2.src = ImgValor2;
    imgValor3.src = ImgValor3;


    imgNave = new Image();
    imgCactus = new Image();
    imgFondo = new Image();

    imgSelect1 = new Image();
    imgSelect2 = new Image();
    imgSelect3 = new Image();
    imgSelect4 = new Image();
    imgSelect5 = new Image();
    imgSelect6 = new Image();
    imgSelect7 = new Image();
    imgSelect8 = new Image();
    imgSelect9 = new Image();

    imgSelectFoto = new Image();
    imgSelectFotoAll = new Image();
    imgSelectFotoError = new Image();

    imgNave.src = ImgNave;
    imgCactus.src = ImgCactus;
    imgFondo.src = ImgFondo;

    imgSelect1.src = ImgSelect1;
    imgSelect2.src = ImgSelect2;
    imgSelect3.src = ImgSelect3;

    imgSelect4.src = ImgSelect4;
    imgSelect5.src = ImgSelect5;
    imgSelect6.src = ImgSelect6;

    imgSelect7.src = ImgSelect7;
    imgSelect8.src = ImgSelect8;
    imgSelect9.src = ImgSelect9;

    imgSelectFoto.src = ImgSelectFoto;
    imgSelectFotoAll.src = ImgSelectFotoAll;
    imgSelectFotoError.src = ImgSelectFotoError;
}

let ancho = 900;
let alto = 600;
let canvas,ctx;
let naveImg = '';

function inicializa(){
    
 canvas = document.getElementById('canvasAct29');
 ctx = canvas.getContext('2d');
 cargarImagenes();
    naveImg = imgNave;
    imgSelectTrue1 = imgSelectFotoAll;
    imgSelectTrue2 = imgSelectFotoAll;
    imgSelectTrue3 = imgSelectFotoAll;
    imgSelect1c = imgSelect1;
    imgSelect2c = imgSelect2;
    imgSelect3c = imgSelect3;
}

function borraCanvas(){
    canvas.width = ancho;
    canvas.height = alto;
}


///////////////////////////////////////////////////////////////


let suelo = 600;


///////////////////////////////////////////////////////////////


let imgPregunta1 = {
    x: ancho + 2000,
    y: suelo - 600
}
let imgPregunta2 = {
    x: ancho + 2000,
    y: suelo - 400
}
let imgPregunta3 = {
    x: ancho + 2000,
    y: suelo - 200
}

function dibujaImg1(imgTrue, imgChanged){
    ctx.drawImage(imgChanged,0,0,270,200,imgPregunta1.x,imgPregunta1.y,270,200);
    ctx.drawImage(imgTrue,0,0,270,200,imgPregunta1.x,imgPregunta1.y,270,200);
}
function dibujaImg2(imgTrue, imgChanged){
    ctx.drawImage(imgChanged,0,0,270,200,imgPregunta2.x,imgPregunta2.y,270,200);
    ctx.drawImage(imgTrue,0,0,270,200,imgPregunta2.x,imgPregunta2.y,270,200);
}
function dibujaImg3(imgTrue, imgChanged){
    ctx.drawImage(imgChanged,0,0,270,200,imgPregunta3.x,imgPregunta3.y,270,200);
    ctx.drawImage(imgTrue,0,0,270,200,imgPregunta3.x,imgPregunta3.y,270,200);
}

function logicaImagenes(){
    if (imgPregunta1.x < -2000) {
        imgPregunta1.x = ancho+2000;
        imgPregunta2.x = ancho+2000;
        imgPregunta3.x = ancho+2000;
        // nivel.puntuacion ++;
    }
    else{
        imgPregunta1.x -= nivel.velocidad;
        imgPregunta2.x -= nivel.velocidad;
        imgPregunta3.x -= nivel.velocidad;
    }
}

///////////////////////////////////////////////////////////////


let suelog = {
    x: 0,
    y: 0
}

function dibujaFondo(){
    ctx.drawImage(imgFondo,suelog.x,0,2000,600,0,suelog.y,2000,600);
}

function logicaFondo(){
    if(suelog.x > 2000) {
        suelog.x = 0;
    }
    else{
        suelog.x += nivel.velocidad;
    }
}

///////////////////////////////////////////////////////////////


let navePlayer = {
    y:  (suelo/2)-50,
    vy: 0,
    gravedad: 2,
    salto: 30,
    vymax: 9,
    saltando: false
};

function dibujaNave(naveImg){ 
    ctx.drawImage(naveImg,0,0,150,94,50,navePlayer.y,150,94);
}


function niveles(){

    switch (nivel.puntuacion) {
        case 5: nivel.velocidad = 11;
        nivel.niveles = 2;
        break;

        case 10: nivel.velocidad = 13;
        nivel.niveles = 3;
        break;
        
        case 15: nivel.velocidad = 15;
        nivel.niveles = 4;
        break;

        case 20: nivel.velocidad = 17;
        nivel.niveles = 5;
        break;

        case 25: nivel.velocidad = 19;
        nivel.niveles = 6;
        break;

        case 30: 
        nivel.niveles = 7;

        break;
    
        default: 
        break;
    }

    ctx.font = "30px impact";
    ctx.fillStyle = "#fff";
    ctx.fillText("Nivel: "+nivel.niveles,50,50);

}

///////////////////////////////////////////////////////////////


let nivel = {
    velocidad: 9,
    puntuacion: 0,
    niveles: 1,
    muerto: false
}

function colision(){
    if (imgPregunta1.x >= 150 && imgPregunta1.x <= 210) {
        nivel.velocidad = 0;
        if (navePlayer.y > suelo-250) {
            imgSelectTrue1 = imgSelectFotoAll;
            imgSelectTrue2 = imgSelectFotoAll;

            if(imgSelectTrue3!==imgSelectFotoError ){imgSelectTrue3 = imgSelectFoto;}
        }else if (navePlayer.y < suelo-250 && navePlayer.y > suelo-450) {
            imgSelectTrue1 = imgSelectFotoAll;
            imgSelectTrue3 = imgSelectFotoAll;
            if(imgSelectTrue2!==imgSelectFotoError ){imgSelectTrue2 = imgSelectFoto;}
        }else if (navePlayer.y <= suelo-450 && navePlayer.y >= suelo-600) {
            imgSelectTrue2 = imgSelectFotoAll;
            imgSelectTrue3 = imgSelectFotoAll;
            if(imgSelectTrue1!==imgSelectFotoError ){imgSelectTrue1 = imgSelectFoto;}
        }else{
            imgSelectTrue1 = imgSelectFotoAll;
            imgSelectTrue2 = imgSelectFotoAll
            imgSelectTrue3 = imgSelectFotoAll
        }
    }
}

function inicializarNuevo(){
    nivel.puntuacion++;
    nivel.velocidad = 9;
    imgPregunta1.x = ancho +2000;
    imgPregunta2.x = ancho +2000;
    imgPregunta3.x = ancho +2000;

    imgSelectTrue1 = imgSelectFotoAll;
    imgSelectTrue2 = imgSelectFotoAll
    imgSelectTrue3 = imgSelectFotoAll

    if(nivel.puntuacion===1){
        imgSelect1 = imgSelect4;
        imgSelect2 = imgSelect5;
        imgSelect3 = imgSelect6;
    }
    if(nivel.puntuacion===2){
        imgSelect1 = imgSelect7;
        imgSelect2 = imgSelect8;
        imgSelect3 = imgSelect9;
    }

}


function imagenCorrecta(){
   
    if(nivel.puntuacion===0){
        if(imgSelectTrue1===imgSelectFoto){
            inicializarNuevo();
        }else{
            if(imgSelectTrue2===imgSelectFoto ){
                imgSelectTrue2=imgSelectFotoError;
            }else{
                imgSelectTrue3=imgSelectFotoError;
            }
        }
        
    }else if(nivel.puntuacion===1){
        if(imgSelectTrue2===imgSelectFoto){
            inicializarNuevo();
        }else{
            if(imgSelectTrue1===imgSelectFoto ){
                imgSelectTrue1=imgSelectFotoError;
            }else{
                imgSelectTrue3=imgSelectFotoError;
            }
        }
    }else if (nivel.puntuacion===2){
        if(imgSelectTrue1===imgSelectFoto){
            inicializarNuevo();
        }else{
            if(imgSelectTrue2===imgSelectFoto ){
                imgSelectTrue2=imgSelectFotoError;
            }else{
                imgSelectTrue3=imgSelectFotoError;
            }
        }
    }

 

}

function verificar(){
    // navePlayer.saltando = true;
    if((navePlayer.y - navePlayer.vy) >= suelo-80){
        navePlayer.y = suelo-80;
    }
    if( (navePlayer.y - navePlayer.vy) < 0){
        navePlayer.y = 0;
    }
}



function puntuacion(){
    ctx.font = "30px impact";
    ctx.fillStyle = "#fff";
    ctx.fillText("Puntos: "+nivel.puntuacion,700,50);

    if(nivel.muerto === true ){
        detenerJuego(true);
        ctx.font = "60px impact";
        ctx.fillText('GAME OVER',240,200);
    }


    if(nivel.puntuacion === 3){
        // detenerJuego(false);
        nivel.velocidad = 0;
        ctx.font = "60px impact";
        ctx.fillText('GANASTE',300,320);
        nivel.niveles = 7;
    }
}

///////////////////////////////////////////////////////////////

//Bucle principal
let FPS = 50;
//Cada cuanto tiempo tiene que ejecutarse una funcion
setInterval(function(){
    principal();
},1000/FPS); //  veces por segundo


function principal(){
    borraCanvas();

    logicaFondo();
    dibujaFondo();

    logicaImagenes();
    dibujaImg1(imgSelectTrue1, imgSelect1);
    dibujaImg2(imgSelectTrue2, imgSelect2);
    dibujaImg3(imgSelectTrue3, imgSelect3);

    dibujaNave(naveImg);

    colision();
    puntuacion();

    niveles();
    
    console.log("Principal");
}

// Mostrar el juego
window.onload = inicializa();

}



     return ( 
         <div>
             <HeaderActivity {...props} />
             <div className="containerActivity">
             <h2>Vamos a ver algunos deberes correspondientes con la vida. Escoge la imagen que se relaciona con cada uno de ellos.</h2>
                <canvas id="canvasAct29"></canvas>
              </div>
             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity17;