import React,{ Fragment } from 'react';
import MainUploadText15 from '../activity-components/MainUploadText15';


const Activity33 = (props) => {
   
   const tituloActividad =`
    <h2>¿Quiénes trabajan para que más niños y niñas conozcan a Jesús?</h2>

    `;
   const textoTextArea =`
    <h2>Cualquier opción que elijas, deja una evidencia aquí.</h2>
    `;


     return ( 
       <Fragment>
            <div>
                <MainUploadText15 {...props} 
                tituloActividad={tituloActividad}
                textoTextArea={textoTextArea}
                />
            </div>
        </Fragment>
     );
}
 
export default Activity33;