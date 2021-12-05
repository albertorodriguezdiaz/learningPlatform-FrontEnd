import React,{useContext} from 'react';
import BookContext from '../../../../context/books/bookContex';
import { Form, Button } from 'react-bootstrap';


const Activity1 = () => {

    // // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const {seleccionarActividadUser } = bookContext;


    const onSubmitBook = (e)=>{
        e.preventDefault();
        seleccionarActividadUser({actividad1: true});
    }


    return ( 
        <div>
            <h1>ACT #1</h1>
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
 
export default Activity1;