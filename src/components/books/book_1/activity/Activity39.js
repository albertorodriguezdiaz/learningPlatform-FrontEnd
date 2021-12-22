import React from 'react';
import MainUploadVideo from '../activity-components/MainUploadVideo'


const Activity39 = (props) => {
   
   const tituloActividad =`
    <h3>Como una forma de poner en práctica lo aprendido, organiza junto a tu familia una pequeña reunión de oración en tu casa (virtual o presencial). Pueden invitar a sus amigos y vecinos. Debe ser algo corto y ameno, pueden compartir una pequeña merienda y orar por las necesidades de todos los presentes. Graben un pequeño video del momento y súbanlo aquí como evidencia. </h3>
    `;

     return ( 
            <div>
                <MainUploadVideo {...props} 
                tituloActividad={tituloActividad}
                />
            </div>
     );
}
 
export default Activity39;