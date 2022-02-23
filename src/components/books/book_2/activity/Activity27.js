import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'


const Activity27 = (props) => {
   
   const tituloActividad =`
    <h2>Junto a tus cuidadores realiza en cartón paja u otro material varias cruces como las de la imagen, píntalas, decóralas y escribe sobre ellas el versículo Juan 3:16. La idea es que con ayuda de tus cuidadores escojas un día para salir a la calle, al parque, o a casa de algunos familiares que no conozcan a Jesús. Cuéntales que Él los ama y quiere ser su amigo, regálale una cruz. </h2>
    Toma fotos como evidencia cuando estén haciéndolo y súbela a aquí. 
    `;
   const textoTextArea =`
    Escribe algún comentario de la actividad
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
 
export default Activity27;