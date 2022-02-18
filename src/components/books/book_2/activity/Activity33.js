import React,{ Fragment } from 'react';
import MainUploadText33 from '../activity-components/MainUploadText33';


const Activity33 = (props) => {
   
   const tituloActividad =`
    <h2>Los invisibles</h2>
    <h2>1. En compañía de tus padres o cuidadores observa el siguiente video: “The invisibles” y responde las preguntas a continuación: </h2>
    <iframe width="100%" height="600" src="https://www.youtube.com/embed/0hI-usddnhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    `;
   const textoTextArea =`
    <h2>2. Reúnete con tu familia, piensen y realicen una acción con la que crean pueden ayudar a que una persona se sienta digna.</h2>
    <p>Por ejemplo: 
    <br />A) Preparar comida para un habitante de la calle y llevársela, si es posible comer junto a él.
    <br />B)	Preparar un almuerzo o cena especial para la persona que ayuda en la casa e invitarla a comer con ustedes en la mesa.
    <br />C)	Regalar un abrigo o ropa en buen estado a una persona que tenga necesidad de ella. 
    
    <h2>Graba este momento, especialmente la reacción de la persona y súbela el link aquí.</h2>
    </p>
   
    `;


     return ( 
       <Fragment>
            <div>
                <MainUploadText33 {...props} 
                tituloActividad={tituloActividad}
                textoTextArea={textoTextArea}
                />
            </div>
        </Fragment>
     );
}
 
export default Activity33;