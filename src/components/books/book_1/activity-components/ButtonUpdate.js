import React,{useContext} from 'react';
import BookContext from '../../../../context/books/bookContex';
import AuthContext from '../../../../context/autentication/authContext';
import { Form, Button } from 'react-bootstrap';


const ButtonUpdate = (props) => {

    
    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    const {acticurrent} = props;


    // const a = 'actividad3'
    // const actividadCurrent2 = eval(`${actividadCurrent}.${a}`);
    // console.log(actividadCurrent2);

    // const actiTrue = `${actividades}.${idActivity}`;
    // const activTrueCurrent = eval(actiTrue);
    // console.log(activTrueCurrent);
    
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


    const onSubmitBook = (e)=>{
        e.preventDefault();

        seleccionarActividadUser(objActividad, userdata);
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

                    <div className="congratulationPopup">
                        <div className="js-container container"></div>

                        <div className='contenedorCongrat'>
                        <div className="checkmark-circle">
                            <div className="background"></div>
                            <div className="checkmark draw"></div>
                        </div>
                        <h1>Congratulations!</h1>
                        <p>You are all set. Well done!</p>
                        <button className="submit-btn" type="submit">Continue</button>
                        </div>  

                    </div>

                 </div>

                )
                :<p className='actividadEnviada'>Avtividad completada</p>
            }
         
        </div>
     );
}
 
export default ButtonUpdate;