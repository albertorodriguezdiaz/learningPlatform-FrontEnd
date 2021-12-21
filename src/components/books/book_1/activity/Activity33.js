import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'


const Activity33 = (props) => {
   
   const tituloActividad =`
    <h2>2. Reúnete con tu familia, piensen y realicen una acción con la que crean pueden ayudar a que una persona se sienta digna.</h2>
    <h3>Por ejemplo: 
    <br>Preparar comida para un habitante de la calle y llevársela, si es posible comer junto a él.
    <br>Preparar un almuerzo o cena especial para la persona que ayuda en la casa e invitarla a comer con ustedes en la mesa.
    <br>Regalar un abrigo o ropa en buen estado a una persona que tenga necesidad de ella. 
    </h3>
    `;
   const textoTextArea =`
    Graba este momento, especialmente la reacción de la persona y sube el link aquí
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
 
export default Activity33;