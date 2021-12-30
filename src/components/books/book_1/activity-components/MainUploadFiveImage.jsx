import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button, Col, Container, Row } from 'react-bootstrap';

const MainUploadFiveImage = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagen, agregarImagenInfo, obtenerImagenInfo, photo, photoInfo, photoExiste} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades, textoTextArea, tituloActividad} = props;
    const actividadUser = actividades[0];

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false);
    const [contadorFoto, guardarcontadorFoto] = useState(1);

    const [fotosJsonP, setFotosJsonP] = useState([]);

    const [fotos, guardarFotos] = useState({
        foto1: '',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
    });


    const [textoact, guardarTextoAct] = useState({
        texto: ''
    });
    

    const {texto} = textoact;


    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario, idActivity);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        getImagesJson();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photoInfo])
    


       // Recargamos cuando suvimos una imagen nueva
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario, idActivity);
        guardarFotosCargadas();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photo])
 
    // Recargamos cuando suvimos una imagen nueva
    useEffect(() => {
        let fotosString = JSON.stringify(fotos);
        guardarTextoAct({
            ...textoact,
            photo: fotosString
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fotos])
 


    const getImagesJson = ()=>{
        // Convertir a JSON dentro del map
        const getImage = photoInfo.map(p =>{
            return JSON.parse(p.image);
        })
        setFotosJsonP(getImage);
    }


    const addTitleAndPhoto = ()=>{
        if (tituloActividad.length>0 && photoExiste===false) {
            titleActividad(tituloActividad);
            let fotosJSON = JSON.parse(photoInfo[0].image);
            console.log(fotosJSON);
        }
    }


    const titleActividad = (title)=>{
        const titleActUpload = document.querySelector('#tituloActividadBox');
        titleActUpload.innerHTML = title;
        
    }
    
    
 

    const guardarFotosCargadas = () =>{
        if(photo.length>0){
            guardarcontadorFoto(contadorFoto+1);

            contadorFoto===1 && guardarFotos({...fotos, foto1: photo})
            contadorFoto===2 && guardarFotos({...fotos, foto2: photo})
            contadorFoto===3 && guardarFotos({...fotos, foto3: photo})
            contadorFoto===4 && guardarFotos({...fotos, foto4: photo})
            contadorFoto===5 && guardarFotos({...fotos, foto5: photo})

            
        }
    }

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
        // guardarMostrarBoton(true);
    }
    

    
     return ( 
         <div>
             <HeaderActivity {...props} />
             
            {   
                (photoExiste===true)
                ?
                    fotosJsonP.map(p=>
                    <div className="containerActivity imgEnviada">
                        <table>
                            <tr>
                                <td><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${p.foto1}`} alt='foto1' /></td>
                                <td><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${p.foto2}`} alt='foto2' /></td>
                                <td><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${p.foto3}`} alt='foto3' /></td>
                                <td><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${p.foto4}`} alt='foto4' /></td>
                                <td><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${p.foto5}`} alt='foto5' /></td>
                            </tr>
                        </table>
                     </div>
                    )
                        
                    
                : ( 
                    <div className="containerActivity imgPhotoNone">

                        <div id='tituloActividadBox'></div>

                        <p className='subeImagen'>Sube tu imagen</p>
                    {
                        photo.length > 0 && <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/img/${photo}`} alt="" />
                    }



                    <Container>
                        <Row>
                            <Col md={2}>
                                <h3>1. Primera Escena</h3>
                                <input className='formularioUploadImageFive'
                                type="file" name="file" 
                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                onChange={onSubmitUploadImage}/>
                            </Col>
                            <Col md={2}>
                                <h3>2. Segunda Escena</h3>
                                <input className='formularioUploadImageFive'
                                type="file" name="file" 
                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                onChange={onSubmitUploadImage}/>
                            </Col>
                            <Col md={2}>
                                <h3>3. Tercera Escena</h3>
                                <input className='formularioUploadImageFive'
                                type="file" name="file" 
                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                onChange={onSubmitUploadImage}/>
                            </Col>
                            <Col md={2}>
                                <h3>4. Cuarta Escena</h3>
                                <input className='formularioUploadImageFive'
                                type="file" name="file" 
                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                onChange={onSubmitUploadImage}/>
                            </Col>
                            <Col md={2}>
                                <h3>5. Quinta Escena</h3>
                                <input className='formularioUploadImageFive'
                                type="file" name="file" 
                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                onChange={onSubmitUploadImage}/>
                            </Col>
                        </Row>
                    </Container>
                    
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
 
export default MainUploadFiveImage;