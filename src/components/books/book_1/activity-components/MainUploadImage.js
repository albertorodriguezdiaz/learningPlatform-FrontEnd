import React,{useEffect, useContext} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from '../HeaderActivity';
import BookContext from '../../../../context/books/bookContex';

const MainUploadImage = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagen, obtenerImagenInfo, photo, photoInfo, photoExiste} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades} = props;
    const actividadUser = actividades[0];

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);


    const uploadImage = (e) =>{ 
        agregarImagen(e, idActivity, actividadUser);
    }

    
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    // Recargamos cuando suvimos una imagen nueva
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photo])

   
    
    
     return ( 
         <div>
             <HeaderActivity {...props} />
            {   
                (photoExiste===true)
                 ?   photoInfo.map((e, key)=>
                    (  parseInt(e.actividad) === idActivity) && 
                       (    <div key={key} className="imgEnviada">
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${e.image}`} alt="" />
                            </div>
                        ) 
                    )
                : ( 
                    <div className="imgPhotoNone"><p>Sube tu imagen</p>
                        <input 
                            type="file" 
                            name="file"
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                            onChange={uploadImage}
                        />
                    </div>
                 )
                }
           
                <ButtonUpdate {...props} />
         </div>
     );
}
 
export default MainUploadImage;