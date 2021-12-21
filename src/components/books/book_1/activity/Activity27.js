import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'


const Activity27 = (props) => {
   
   const tituloActividad =`
    <h2>Sube evidencia del video en el que junto a tus padres expresas aprecio a Jesús por ser Hijo de Dios y nacer de manera asombrosa.</h2>
   `;
   const textoTextArea =`
    Espacio para subir el enlace del video:
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