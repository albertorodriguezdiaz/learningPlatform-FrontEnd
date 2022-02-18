import React from 'react';
import MainUploadText from '../activity-components/MainUploadText'
import newsAct18 from '../../../../resources/img/act18/news-actividad18.png';

const Activity18 = (props) => {
   
   const tituloActividad =`
    <h2>Con la ayuda de tu familia:</h2>
    <h3>Lean la siguiente noticia y respondan las preguntas a continuación</h3>
    <img src=${newsAct18} alt="newsAct18" />
   `;


     return ( 
        <div>
        <MainUploadText {...props} 
         tituloActividad={tituloActividad}
        />
        </div>
           
     );
}
 
export default Activity18;