import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'
import pdfDownload from '../../../../resources/pdf/libro2/pdf-L2.pdf'


const Activity42 = (props) => {
   
   const tituloActividad =`
    <h2>Comparto sobre Jesús</h2>
    <ul>
      <li>1.	Recuerda a un amigo que haya sido generoso contigo en el pasado, escríbele una carta agradeciendo por sus actos de amistad y generosidad.</li>
      <li>2.	Descarga el siguiente PDF <a href="{pdfDownload}">(Descargar PDF Aquí)</a>, colorea con el color indicado y recorta las imágenes, puedes pegarlas en cartulina para que queden más resistentes. </li>
      <li>3.	Comparte con estas imágenes a un vecino que viva cerca a tu casa sobre Jesús de una manera muy sencilla y también puedes empezar a hacerlo tu nuevo amigo.</li>
      <li>4.	Envía evidencia de las actividades de la carta y la manualidad terminada.</li>
    </ul>
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
 
export default Activity42;