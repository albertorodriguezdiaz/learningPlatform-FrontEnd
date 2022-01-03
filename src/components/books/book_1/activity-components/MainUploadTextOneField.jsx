import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button } from 'react-bootstrap';



const MainUploadTextOneField = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagenInfo, obtenerImagenInfo, photoInfo, photoExiste} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades, tituloActividad} = props;
    const actividadUser = actividades[0];

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false)

    const [textoact, guardarTextoAct] = useState({
        texto: '',
    });

    let {texto} = textoact;
    
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario, idActivity);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
         
        if (tituloActividad.length>0 && photoExiste===false) {
            titleActividad(tituloActividad);
        }

        if (photoExiste===true) {
            textoActividad();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photoExiste, photoInfo])



    const titleActividad = (title)=>{
        const titleActUpload = document.querySelector('#tituloActividadBox');
        titleActUpload.innerHTML = title;
    }

    const textoActividad = ()=>{
        // const filtered = photoInfo.filter(e => {
        //     return e.actividad;
        // });

        if(photoInfo.length>0){
            const textoActUpload = document.querySelector('#textoActividadBox');
            textoActUpload.innerHTML = photoInfo[0].texto;
        }
        
    }
    

    // Lee los contenidos del input
    const onChangePhotoTexto = (e) =>{
        guardarTextoAct({
            ...textoact,
            [e.target.name] : e.target.value
        })  

    }

    
// Enviamos datos a la BD con la URL de la imagen cargada e info del usuario
    const onSubmitUploadImageInfo = (e) =>{ 
        e.preventDefault();

        let textoAll = {texto: `
            <h3>Texto escrito:</h3>
            <p>${texto}</p>
        `}; 

        agregarImagenInfo(textoAll, idActivity, actividadUser);
        guardarMostrarBoton(true);
    }
    

    
     return ( 
         <div>
             <HeaderActivity {...props} />
            {   
                (photoExiste===true)
                 ?(  <div className="containerActivity imgEnviada">
                        <div id='textoActividadBox'></div>
                     </div>
                 )
                : ( 
                    <div className="containerActivity imgPhotoNone">
                        <div id='tituloActividadBox'></div>
                    <form
                        className="formularioUploadText"
                        onSubmit={onSubmitUploadImageInfo}
                    >
                        <textarea 
                            className="inputW100"
                            placeholder="Espacio para escribir"
                            name="texto"
                            id="texto"
                            value={texto}
                            onChange={onChangePhotoTexto}
                        ></textarea>
                        
                    
                    

                        <div className="d-grid gap-2">
                            {
                                (mostrarBoton===false)
                                && 
                                <Button 
                                    as="input" variant="primary" size="lg" 
                                    className='botonEnviarFoto'
                                    type="submit" 
                                    value={'Enviar'}>
                                </Button> 
                            }
                                
                        </div>                    
                    
                    </form>

                    </div>
                 )
                }

            {
                (mostrarBoton===true || photoExiste===true)
                    && <ButtonUpdate {...props} />
            }
         </div>
     );
}
 
export default MainUploadTextOneField;