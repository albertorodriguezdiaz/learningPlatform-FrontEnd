import React,{useContext} from 'react';
import BookContext from '../../../context/books/bookContex';
import AuthContext from '../../../context/autentication/authContext';
import { Form, Button } from 'react-bootstrap';


const ButtonUpdate = (props) => {

    const idactividad = parseInt(props.match.params.id);
    const idleccion = parseInt(props.match.params.leccion);
    const idActivity = (((idleccion-1)*3)+idactividad);

    // Creamos el objeto como string con el id y Convertimos el 
    // JSON.parse el string en bojeto 
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
        <div>
            
            <Form
                onSubmit={onSubmitBook}
            >

                <Button 
                    as="input" variant="primary" size="lg" 
                    type="submit" 
                    value="Finalizar">
                </Button> 
            </Form>

         
        </div>
     );
}
 
export default ButtonUpdate;