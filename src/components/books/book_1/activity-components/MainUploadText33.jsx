import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button, Table } from 'react-bootstrap';


const MainUploadText33 = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagenInfo, obtenerImagenInfo, photoExiste, photoInfo} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades, tituloActividad, textoTextArea} = props;
    const actividadUser = actividades[0];

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false)

    const [textoact, guardarTextoAct] = useState({
        texto2: '',
        texto1: '',
        video: ''
    });

    let {texto1, texto2, video} = textoact;
    
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario, idActivity);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
         
        if (tituloActividad.length>0 && photoExiste===false) {
            titleActividad(tituloActividad);
            textTextArea(textoTextArea);
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

    const textTextArea = (textA)=>{
        const titleActUpload = document.querySelector('#tituloActividadBox2');
        titleActUpload.innerHTML = textA;
    }
    

    const textoActividad = ()=>{
        // console.log(photoInfo);
        // const filtered = photoInfo.filter(e => {
        //     return e.actividad;
        const textoActUpload = document.querySelector('#textoActividadBox');
        textoActUpload.innerHTML = photoInfo[0].texto;
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
            <h3>¿Qué observaste en el video?</h3>
            <p>${texto1}</p>

            <h3>¿Cómo crees que debemos mirar o tratar a los demás sabiendo que también tienen dignidad?</h3>
            <p>${texto2}</p>

            <h3>Enlace Video:</h3>
            <p>${video}</p>
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
                        <Table striped bordered hover className='tableTextArea'>
                            <thead>
                                <tr>
                                    <td>¿Qué observaste en el video?</td>
                                    <td>¿Cómo crees que debemos mirar o tratar a los demás sabiendo que también tienen dignidad?</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Espacio para escribir"
                                            name="texto1"
                                            id="texto1"
                                            value={texto1}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Espacio para escribir"
                                            name="texto2"
                                            id="texto2"
                                            value={texto2}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                        <div id='tituloActividadBox2'></div>
                            <textarea 
                                className="inputW100"
                                placeholder="Link del video aquí"
                                name="video"
                                id="video"
                                value={video}
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
 
export default MainUploadText33;