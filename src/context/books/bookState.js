import React, { useState, useReducer, useContext } from 'react';
import BookReducer from './bookReducer';
import BookContext from './bookContex';
import clienteAxios from '../../config/axios';
import AuthContext from '../autentication/authContext';

import { 
    LIBRO_ACTUAL
 } from '../../types';

const BookState = props => {

    const initialState = {

    }

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario } = authContext;

    const [state, dispatch] = useReducer(BookReducer, initialState);


    return ( 
        <AuthContext.Provider
            value={{
                bookUsuario: usuario,
            }}
        >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default BookState;