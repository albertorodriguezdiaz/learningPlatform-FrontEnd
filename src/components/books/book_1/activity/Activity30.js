import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'
import plegable from '../../../../resources/img/act30/plegable.png'



const Activity30 = (props) => {
   
   const tituloActividad =`
    <h2>Crea un plegable en papel o cartulina (como lo muestra la imagen, con dibujos y texto) donde compartas a otros sobre Jesús, cuéntales que Él es la vida y cómo tiene autoridad sobre la muerte. Toma una foto de tu plegable y sube la evidencia.</h2>
    <img src=${plegable} alt="Plegable" />
    `;
   const textoTextArea =`
    Espacio para comentar acerca de la actividad
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
 
export default Activity30;