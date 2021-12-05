import React, { useReducer, useState, useContext, useEffect } from 'react';
import AuthContext from '../autentication/authContext';
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

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario } = authContext;
    

    const [state, dispatch] = useReducer(BookReducer, initialState);

    const [ idlibro, guardarIdLibro] = useState([]);


    useEffect(() => {
        obtenerLibros();
        obtenerActivity();
        seleccionarActividadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


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



    const actualizarActivity = async booksoyvida => {
        try {
            await ClienteAxios.put(`/api/activity/${booksoyvida._id}`, booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }


    
    const seleccionarActividadUser = (actividadBook) =>{
        
        state.actividades.map((act)=>
            act.usuario===usuario._id
            && guardarIdLibro({
                _id: act._id, 
                usuario: act.usuario
            })
        );

        // Fusionamos los dos objetos para formar uno y enviar actualizar la actividad
        const objActBook = Object.assign(idlibro, actividadBook);


        actualizarActivity(objActBook);             

    }


    return ( 
        <BookContext.Provider
            value={{
                bookuser: state.bookuser,
                actividades: state.actividades,
                usuario,
                obtenerLibros,
                obtenerActivity,
                seleccionarActividadUser
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;