import React,{useContext, useEffect} from 'react';
import ClienteAxios from 'axios';
import AuthContext from '../../../../context/autentication/authContext';
import { Form, Button } from 'react-bootstrap';
    


const Activity1 = () => {

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario } = authContext;

    useEffect(() => {
        console.log(usuario);
    }, [])

    const actualizarActivity = async booksoyvida => {
        try {
            await ClienteAxios.put(`/api/activity/${booksoyvida._id}`, booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }


    const onSubmitBook = (e)=>{
        e.preventDefault();
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