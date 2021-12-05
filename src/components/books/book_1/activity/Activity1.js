import React,{useContext, useEffect, useState} from 'react';
import ClienteAxios from 'axios';
import BookContext from '../../../../context/books/bookContex';
import AuthContext from '../../../../context/autentication/authContext';
import { Form, Button } from 'react-bootstrap';


const Activity1 = (props) => {

    // // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { bookuser, actividades, obtenerLibros, obtenerActivity } = bookContext;

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario } = authContext;


    const [ idlibro, guardarIdLibro] = useState([]);


    useEffect(() => {
        console.log(usuario);
        obtenerLibros();
        obtenerActivity();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const actualizarActivity = async booksoyvida => {
        try {
            await ClienteAxios.put(`/api/activity/${booksoyvida._id}`, booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    const seleccionarActividadUser = () =>{
 
        actividades.map((act)=>
            act.usuario===usuario._id
            && guardarIdLibro({
                _id: act._id,
                usuario: act.usuario,
                actividad1: true
            })
        );
        console.log(idlibro);
        actualizarActivity(idlibro);
    }


    const onSubmitBook = (e)=>{
        e.preventDefault();
        console.log(bookuser);
        seleccionarActividadUser();

        // actualizarActivity(
        //     {
                
        //     }
        // );
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

            {
                bookuser.map((book) =>
                    <p>{book._id}</p>
                )
            }
                
        </div>
     );
}
 
export default Activity1;