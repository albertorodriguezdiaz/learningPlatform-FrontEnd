import React, { useReducer } from 'react';
import BookReducer from './bookReducer';
import BookContext from './bookContex';
import ClienteAxios from '../../config/axios';

import { 
    LIBRO_ACTUAL,
    ACTIVIDAD_LIBRO
    
 } from '../../types';

const BookState = props => {

    const initialState = {
        bookuser: [],
        actividades: []
    }

    const [state, dispatch] = useReducer(BookReducer, initialState);



    // Retornar el usuario autenticado
    const obtenerLibros = async () =>{

        try {
            const respuesta = await ClienteAxios.get('/api/books');
            dispatch({
                type: LIBRO_ACTUAL,
                payload: respuesta.data.bookuser
            });

        } catch (error) {
            console.log(`Error al obtener libros`);
            console.log(error);

        }
        
    }



    const obtenerActivity = async () =>{

        try {
            const respuesta = await ClienteAxios.get('/api/activity');
            dispatch({
                type: ACTIVIDAD_LIBRO,
                payload: respuesta.data.activity
            });

        } catch (error) {
            console.log(`Error al obtener Activity`);
            console.log(error);

        }
        
    }



    return ( 
        <BookContext.Provider
            value={{
                bookuser: state.bookuser,
                actividades: state.actividades,
                obtenerLibros,
                obtenerActivity,
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;