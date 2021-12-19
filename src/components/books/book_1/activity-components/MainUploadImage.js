import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button } from 'react-bootstrap';

const MainUploadImage = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagen, agregarImagenInfo, obtenerImagenInfo, photo, photoInfo, photoExiste} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades} = props;
    const actividadUser = actividades[0];

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false)

    const [textoact, guardarTextoAct] = useState({
        texto: ''
    });

    const {texto} = textoact;

    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    // Recargamos cuando suvimos una imagen nueva
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario);

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
                       (    <div key={key} className="imgEnviada">
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${e.image}`} alt="" />
                                <p>{e.texto}</p>
                            </div>
                        ) 
                    )
                : ( 
                    <div className="imgPhotoNone"><p>Sube tu imagen</p>
                    {
                        photo.length > 0 && <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${photo}`} alt="" />
                    }
                    
                    <input 
                        type="file" 
                        name="file" 
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                        onChange={onSubmitUploadImage}
                    />

                    <form
                        className="formulario-nuevo-colegio"
                        onSubmit={onSubmitUploadImageInfo}
                    >

                        <textarea 
                            className="input-text"
                            placeholder="Comentarios"
                            name="texto"
                            id="texto"
                            value={texto}
                            onChange={onChangePhotoTexto}
                        >
                        </textarea>

                        <div className="d-grid gap-2">
                            <Button 
                                as="input" variant="primary" size="lg" 
                                type="submit" 
                                value={'Cargar imagen'}>
                            </Button>     
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
 
export default MainUploadImage;