import React,{useEffect, useContext, useState} from 'react';
import ButtonUpdate from '../activity-components/ButtonUpdate';
import HeaderActivity from './HeaderActivity';
import BookContext from '../../../../context/books/bookContex';
import { Button, Table } from 'react-bootstrap';

import grita from '../../../../resources/img/act18/grita.png';
import pacifica from '../../../../resources/img/act18/pacifica.png';
import peleando from '../../../../resources/img/act18/peleando.png';
import palabras from '../../../../resources/img/act18/palabras.png';


const MainUploadText = (props) => {

    // 
    const bookContext = useContext(BookContext);
    const {agregarImagenInfo, obtenerImagenInfo, photo, photoInfo, photoExiste} = bookContext;

    // Seleccionamos las actividades del usuario con y nos ubicamos en la pisicion [0]
    const{actividades, tituloActividad} = props;
    const actividadUser = actividades[0];

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const [mostrarBoton, guardarMostrarBoton] = useState(false)

    const [textoact, guardarTextoAct] = useState({
        texto1a: '',
        texto1b: '',
        texto2a: '',
        texto2b: '',
        texto3a: '',
        texto3b: '',
        texto4a: '',
        texto4b: ''
    });

    let {texto1a, texto1b, texto2a, texto2b, texto3a, texto3b, texto4a, texto4b} = textoact;
    
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
    }, [photoExiste])



    const titleActividad = (title)=>{
        const titleActUpload = document.querySelector('#tituloActividadBox');
        titleActUpload.innerHTML = title;
    }

    const textoActividad = ()=>{
        const filtered = photoInfo.filter(e => {
            return e.actividad;
        });

        const textoActUpload = document.querySelector('#textoActividadBox');
        textoActUpload.innerHTML = filtered[0].texto;
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
            <h3>Gritando fuerte:</h3>
            <p>Descripción: ${texto1a}</p>
            <p>Consecuencias: ${texto1b}</p>

            <h3>Peleando:</h3>
            <p>Descripción: ${texto2a}</p>
            <p>Consecuencias: ${texto2b}</p>

            <h3>Con palabras groseras:</h3>
            <p>Descripción: ${texto3a}</p>
            <p>Consecuencias: ${texto3b}</p>

            <h3>Pacíficamente:</h3>
            <p>Descripción: ${texto4a}</p>
            <p>Consecuencias: ${texto4b}</p>
        `}; 

        agregarImagenInfo(textoAll, idActivity, actividadUser);
        guardarMostrarBoton(true);
    }
    

    
     return ( 
         <div>
             <HeaderActivity {...props} />
            {   
                (photoExiste===true)
                 ?(  <div className="imgEnviada">
                        <div id='textoActividadBox'></div>
                     </div>
                 )
                : ( 
                    <div className="imgPhotoNone">
                        <div id='tituloActividadBox'></div>
                    <form
                        className="formularioUploadText"
                        onSubmit={onSubmitUploadImageInfo}
                    >
                        <Table striped bordered hover className='tableTextArea'>
                            <thead>
                                <tr>
                                    <td>Actitud </td>
                                    <td>Descripción de la situación</td>
                                    <td>Consecuencias </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gritando fuerte 
                                        <br /><img src={grita} alt="grita" />
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Descripción de la situación"
                                            name="texto1a"
                                            id="texto1a"
                                            value={texto1a}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Consecuencias"
                                            name="texto1b"
                                            id="texto1b"
                                            value={texto1b}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Peleando  
                                        <br /><img src={peleando} alt="peleando" />
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Descripción de la situación"
                                            name="texto2a"
                                            id="texto2a"
                                            value={texto2a}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Consecuencias"
                                            name="texto2b"
                                            id="texto2b"
                                            value={texto2b}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Con palabras groseras  
                                        <br /><img src={palabras} alt="palabras" />
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Descripción de la situación"
                                            name="texto3a"
                                            id="texto3a"
                                            value={texto3a}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Consecuencias"
                                            name="texto3b"
                                            id="texto3b"
                                            value={texto3b}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pacíficamente 
                                        <br /><img src={pacifica} alt="pacifica" />
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Descripción de la situación"
                                            name="texto4a"
                                            id="texto4a"
                                            value={texto4a}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                    <td>
                                        <textarea 
                                            className="inputW100"
                                            placeholder="Consecuencias"
                                            name="texto4b"
                                            id="texto4b"
                                            value={texto4b}
                                            onChange={onChangePhotoTexto}
                                        >
                                        </textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    
                    

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
 
export default MainUploadText;