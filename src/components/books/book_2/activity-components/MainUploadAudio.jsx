import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button } from 'react-bootstrap';

const MainUploadAudio = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagen, agregarImagenInfo, obtenerImagenInfo, photo, photoInfo, photoExiste} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades, textoTextArea, tituloActividad} = props;
    let actividadUser = actividades;

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false)

    const [textoact, guardarTextoAct] = useState({
        texto: ''
    });

    const {texto} = textoact;

    useEffect(() => {
        
        obtenerImagenInfo(actividadUser.usuario, idActivity);
         
        if (tituloActividad.length>0 && photoExiste===false) {
            titleActividad(tituloActividad);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const titleActividad = (title)=>{
        const titleActUpload = document.querySelector('#tituloActividadBox');
        titleActUpload.innerHTML = title;
    }
    
    
    // Recargamos cuando suvimos una imagen nueva
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario, idActivity);

        if(photo.length>0){
            guardarTextoAct({
                ...textoact,
                photo: photo
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photo])

    // Lee los contenidos del input
    const onChangePhotoTexto = (e) =>{
        guardarTextoAct({
            ...textoact,
            [e.target.name] : e.target.value
        })
    }

// Enviamos imagen para cargar al servidor
    const onSubmitUploadImage = (e) =>{ 
        agregarImagen(e, idActivity, actividadUser);
    }
    
// Enviamos datos a la BD con la URL de la imagen cargada e info del usuario
    const onSubmitUploadImageInfo = (e) =>{ 
        e.preventDefault();
        agregarImagenInfo(textoact, idActivity, actividadUser);
        guardarMostrarBoton(true);
    }
    



     return ( 
         <div>
             <HeaderActivity {...props} />
            {   
                (photoExiste===true)
                 ?   photoInfo.map((e, key)=>
                    (  parseInt(e.actividad) === idActivity) && 
                       (    <div key={key} className="containerActivity imgEnviada">
                                <audio controls="controls">
                                    <source src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${e.image}`} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <p>{e.texto}</p>
                            </div>
                        ) 
                    )
                : ( 
                    <div className="containerActivity imgPhotoNone">

                        <div id='tituloActividadBox'></div>

                        <p className='subeImagen'>Sube tu audio .mp3</p>
                    {
                        (photo.length > 0) && (
                        <div className='audioBox'>
                            <audio controls="controls">
                                <source src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${photo}`} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>)
                    }
                    
                    <input 
                        className='formularioUploadImage'
                        type="file" 
                        name="file" 
                        accept="audio/mp3"
                        onChange={onSubmitUploadImage}
                    />

                    <form
                        className="formularioUploadText"
                        onSubmit={onSubmitUploadImageInfo}
                    >
                        
                        <p className='textTextArea'>{textoTextArea}:</p>
                        <textarea 
                            className="input-text"
                            placeholder="Escribe aquí..."
                            name="texto"
                            id="texto"
                            value={texto}
                            onChange={onChangePhotoTexto}
                        >
                        </textarea>

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
 
export default MainUploadAudio;