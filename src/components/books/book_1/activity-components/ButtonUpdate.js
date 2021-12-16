import React,{useContext, useState, useEffect} from 'react';
import BookContext from '../../../../context/books/bookContex';
import AuthContext from '../../../../context/autentication/authContext';
import { Form, Button } from 'react-bootstrap';
import ConfettiCongratulation from './confettiCongratulation';



const ButtonUpdate = (props) => {

    const [showCongratPopup, setShowCongratPopup] = useState(false);
    const [enviarActividad, setEnviarActividad] = useState(false);

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const {acticurrent} = props;

    // Creamos el objeto como string con el id y Convertimos el 
    // JSON.parse el string en ojeto 
    const objActividadString=`{"actividad${idActivity}": true}`;
    const objActividad = JSON.parse(objActividadString);
  
    // // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { seleccionarActividadUser } = bookContext;

     // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {userdata } = authContext;


    useEffect(() => {
        if (enviarActividad===true) {
            setShowCongratPopup(true);
        }
    }, [enviarActividad])


    const onSubmitBook = (e)=>{
        e.preventDefault();
        seleccionarActividadUser(objActividad, userdata);
        setEnviarActividad(true);
    }


    return ( 
        <div className='formEnviarActividad'>
            {
                acticurrent===false
                ?(
                <div>
                    <Form
                        onSubmit={onSubmitBook}
                    >

                        <Button 
                            className='botonEnviarActividad'
                            as="input" variant="primary" size="lg" 
                            type="submit" 
                            value="Enviar Actividad">
                        </Button> 
                    </Form>


                 </div>

                )
                :<p className='actividadEnviada'>Avtividad completada</p>
            }
         
         {
            showCongratPopup===true && 
            ( <ConfettiCongratulation {...props}/>
            )
        }
       </div>
         
     );
}
 
export default ButtonUpdate;