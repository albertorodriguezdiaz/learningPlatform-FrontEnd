import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from './ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button, Table } from 'react-bootstrap';


const MainUploadText33 = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagenInfo, obtenerImagenInfo, photoExiste, photoInfo} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades, tituloActividad, textoTextArea} = props;
    let actividadUser = actividades;

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false)

    const [textoact, guardarTextoAct] = useState({
        texto3: '',
        texto2: '',
        texto1: '',
        video: ''
    });

    let {texto1, texto2, texto3 ,  video} = textoact;
    
    useEffect(() => {
        obtenerImagenInfo(actividadUser.usuario, idActivity);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        
        if (photoExiste===true && photoInfo.length > 0) {
            textoActividad();
        }else{
            titleActividad(tituloActividad);
            textTextArea(textoTextArea);
        }

             // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photoExiste, photoInfo])


    const titleActividad = ()=>{
        const titleActUpload = document.querySelector('#tituloActividadBox');
        if (tituloActividad.length>0 && titleActUpload ) {
             titleActUpload.innerHTML = tituloActividad;
        }
        
    }

    const textTextArea = ()=>{
        const titleActUpload2 = document.querySelector('#tituloActividadBox2');
        if (textoTextArea.length>0 && titleActUpload2) {
            titleActUpload2.innerHTML = textoTextArea;
        }
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
            <h3>El mandamiento que más me cuesta</h3>
            <p>${texto1}</p>

            <h3>¿Cómo lo podré en práctica?</h3>
            <p>${texto2}</p>

            <h3>¿Qué sucedió cuando lo hice?</h3>
            <p>${texto3}</p>
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
                                    <td>El mandamiento que más me cuesta</td>
                                    <td>¿Cómo lo podré en práctica?</td>
                                    <td>¿Qué sucedió cuando lo hice?</td>
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
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Espacio para escribir"
                                            name="texto3"
                                            id="texto3"
                                            value={texto3}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                        <div id='tituloActividadBox2'></div>
                           
                    

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