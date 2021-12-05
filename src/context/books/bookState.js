import React, { useState, useReducer, useContext } from 'react';
import BookReducer from './bookReducer';
import BookContext from './bookContex';
import ClienteAxios from '../../config/axios';

import { 
    LIBRO_ACTUAL
 } from '../../types';

const BookState = props => {

    const initialState = {
        bookUser: null
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
            
        }
        
    }



    return ( 
        <BookContext.Provider
            value={{
                bookUser: state.bookUser,
                obtenerLibros              
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;