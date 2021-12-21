import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

import biblia from '../../../../resources/img/act48/biblia.png';
import camara from '../../../../resources/img/act48/camara.png';
import familia from '../../../../resources/img/act48/familia.png';
import manos from '../../../../resources/img/act48/manos.png';
import panvino from '../../../../resources/img/act48/pan-vino.png';



const Activity48 = (props) => {
   
   const tituloActividad =`
    <h2>Realiza la siguiente actividad y sube la evidencia en este espacio.</h2>

    <table>
        <tr>
            <td><img src=${familia} alt="" /></td>
            <td><p>1. Convocar a los miembros de la familia en un horario en el que todos puedan estar reunidos. </p></td>
            <td><img src=${panvino} alt="" /></td>
            <td><p>4. Compartir entre todos el pan y el jugo de uvas. </p></td>
        </tr>
        <tr>
            <td><img src=${panvino} alt="" /></td>
            <td><p>2. Conseguir pan y jugo de uva, como elementos principales para dar a conocer a la familia la importancia de la cena del Señor. </p></td>
            <td><img src=${camara} alt="" /></td>
            <td><p>5. Puedes tomar una fotografía compartiendo el pan y el jugo para que la subas como evidencia en la plataforma Soy vida. </p></td>       
        </tr>
        <tr>
        <td><img src=${biblia} alt="" /></td>
        <td><p>3. Leer el texto de 1 Corintios 11:23-26 y explicar lo que representan los elementos y el por qué se celebra este acto en las iglesias. </p></td>
             <td><img src=${manos} alt="" /></td>
            <td><p>6. Para finalizar, hacer una oración dando gracias a Dios por los beneficios que nos otorgó a través de su muerte en la cruz. </p></td>
         </tr>
    </table>
    *Todos los emojis han sido tomados de emojiterra.com
    `;
   const textoTextArea =`
    Espacio para dejar un comentario de la actividad
   `;




     return ( 
            <div>
                <MainUploadImage {...props} 
                textoTextArea={textoTextArea}
                tituloActividad={tituloActividad}
                />
            </div>
            
        
     );
}
 
export default Activity48;