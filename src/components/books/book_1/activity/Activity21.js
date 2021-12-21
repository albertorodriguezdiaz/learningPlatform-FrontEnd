import React,{Fragment} from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'
import prisma from '../../../../resources/img/act21/prisma.png'



const Activity21 = (props) => {
   
   const tituloActividad =`
    <h1>Testimonio</h1>
    <h2>Escribe un testimonio donde nos cuentes si tu vida, la de un familiar o amigo alguna vez ha estado en peligro y narra cómo Dios milagrosamente la ha preservado</h2>
    <h2>Reúnete en familia y saca un momento para agradecer a Dios en oración por cuidar de nuestras vidas. </h2>
    <h2>Sube una foto a la plataforma de tu encuentro familiar como evidencia.</h2>
   `;
   const textoTextArea =`
      Escribe algún comentario de la actividad
   `;

     return ( 
        <Fragment>
            <div>
                <MainUploadImage {...props} 
                textoTextArea={textoTextArea}
                tituloActividad={tituloActividad}
                />
            </div>
            <div className="containerActivity1">
                <h1>Experimento</h1>
                <h2>Procedimiento:</h2>


                <div className="textoActivity1">
                    <p>1. Llena un vaso casi hasta arriba, con aproximadamente 3/4 partes de agua. </p>
                    <p>2. Debes colocar el espejo dentro del vaso con cuidado para que quede en ángulo en la parte inferior, mirando ligeramente hacia arriba. Si te es posible, oscurece un poco la habitación y enciende la linterna en dirección al espejo que está sumergido.</p>
                    <p>3. Mueve la luz para que el arcoíris se refleje en todo el espacio. Si utilizas la luz solar, debes colocar el vaso de manera que quede a la mitad del borde de una mesa y que el sol brille directamente a través del agua, sobre una hoja de papel blanco.</p>
                </div>
                <img src={prisma} alt="prisma" />
            </div>
        </Fragment>
           
     );
}
 
export default Activity21;