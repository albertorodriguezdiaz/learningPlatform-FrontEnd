import React,{useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../activity-components/HeaderActivity';

import CorrectSound from "../../../../resources/sounds/correct.mp3"
import ErrorSound from "../../../../resources/sounds/error.mp3"

const Activity14 = (props) => {


    const [puntaje, setPuntaje] = useState(0);

    useEffect(() => {
        if (puntaje>=5) {
            const puntajeBox = document.getElementById('puntaje');
            puntajeBox.innerHTML = 'Ganaste :)'
        }
    }, [puntaje])


    const playAudioError = () => {
        new Audio(ErrorSound).play();
    }
    const playAudioCorrect = () => {
        new Audio(CorrectSound).play();
        setPuntaje(puntaje+1);
    }

     return ( 
         <div>
             <HeaderActivity {...props} />

             <div className="containerActivity1">
                 <h2>Respeto por la vida</h2>
                 <p>Lee cada una de las situaciones a continuación. Si consideras que se trata de una ocasión en la que se irrespeta y no valora la vida, marca el círculo rojo. Si por el contrario, se trata de una situación en la que se muestra valor y respeto por la vida, marca el círculo verde. </p>
             
             <div className="puntaje">
                 <p className='puntajePuntos'>Puntaje <strong id="puntaje">{puntaje}</strong></p>
             </div>
             <Table striped bordered hover className='tableAct14'>
             <tbody>
                 <tr>
                     <td><div className='botonActColor botonVerde' onClick={playAudioCorrect}></div></td>
                     <td><div className='botonActColor botonRojo' onClick={playAudioError}></div></td>
                     <td><p>Una ancianita está a punto de cruzar la calle. Un caballero la ayuda para que no sea arrollada por un carro. ¿Verde o rojo?</p></td>
                 </tr>
                 <tr>
                     <td><div className='botonActColor botonVerde' onClick={playAudioError}></div></td>
                     <td><div className='botonActColor botonRojo' onClick={playAudioCorrect}></div></td>
                     <td><p>Un ladrón amenaza a un joven con una navaja para poderle robar su celular. Como este no se lo quiere dar, lo hiere en su brazo derecho. ¿Verde o rojo?</p></td>
                 </tr>
                 <tr>
                     <td><div className='botonActColor botonVerde' onClick={playAudioCorrect}></div></td>
                     <td><div className='botonActColor botonRojo' onClick={playAudioError}></div></td>
                     <td><p>Una mujer está a punto de dar a luz a su bebé. Sus familiares la llevan de inmediato al hospital para que reciba la atención que necesita. ¿Verde o rojo?</p></td>
                 </tr>
                 <tr>
                     <td><div className='botonActColor botonVerde' onClick={playAudioError}></div></td>
                     <td><div className='botonActColor botonRojo' onClick={playAudioCorrect}></div></td>
                     <td><p>Un motociclista recorre las calles de su cuidad a gran velocidad y sin casco. ¿Verde o rojo?</p></td>
                 </tr>
                 <tr>
                     <td><div className='botonActColor botonVerde' onClick={playAudioError}></div></td>
                     <td><div className='botonActColor botonRojo' onClick={playAudioCorrect}></div></td>
                     <td><p>Una señora pesa 140 kilos, a pesar de que el médico le ha dicho que debe cuidar su dieta, ella solo come lo que se le antoja sin seguir instrucciones. ¿Verde o rojo?</p></td>
                 </tr>
            </tbody>
             </Table>
             </div>

             <ButtonUpdate {...props} />
         </div>
     );
}
 
export default Activity14;