import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage'
import NewsAct45 from '../../../../resources/img/act45/news-act45.png'



const Activity45 = (props) => {
   
   const tituloActividad =`
    <h2>Pide a tu acudiente que lean en familia la siguiente noticia. Al final   encontrarán unas peticiones de oración, las cuales se pueden repartir y orar por ellas. </h2>
    <h2>Realiza una mapa de India y tomate una foto con tu familia luego de haber orado por la situación de los perseguidos en ese país y súbela a la plataforma.</h2>
    
    <img src=${NewsAct45} alt="News" />
    
    <h2>Peticiones de oración<h2>
    <p>•	Ora para que los cristianos no se desanimen, sino que tengan la gracia de continuar sirviendo a Dios a pesar de la persecución, y estén llenos de esperanza.<p>
    <p>•	Pide que no se sientan tentados a renunciar a su fe en busca de una vida más fácil.<p>
    <p>•	Intercede para que el gobierno haga todo lo posible para proteger a las comunidades de la violencia futura.<p>

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
 
export default Activity45;