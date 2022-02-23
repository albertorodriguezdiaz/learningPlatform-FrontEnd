import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'

import biblia from '../../../../resources/img/act48/biblia.png';


const Activity48 = (props) => {
   
   const tituloActividad =`
    <h2>Elabora una cruz en cartón paja la cual puedes decorar a tu gusto con muchos colores y escribir una frase de gratitud por la obra de Jesús. Con esa manualidad reúnete con tu familia y comparte con ellos la obra reconciliadora de Jesús en la cruz. Para eso puedes realizar las siguientes actividades: </h2>
    <ul>
        <li>• Oración </li>
        <li>• Canción </li>
        <li>• Leer texto bíblico</li>
        <li>• Dar gracias a Dios por reconciliarnos con Él a través de Jesús. </li>
    </ul>

    <h2>Toma una fotografía de la cruz que realizaste junto a los miembros de tu familia y súbela como evidencia en la plataforma. </h2>
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