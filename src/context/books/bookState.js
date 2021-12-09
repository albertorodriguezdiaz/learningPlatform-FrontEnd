import React, { useReducer, useEffect } from 'react';
// import AuthContext from '../autentication/authContext';
import ClienteAxios from '../../config/axios';
import BookReducer from './bookReducer';
import BookContext from './bookContex';

import { 
    LIBRO_ACTUAL,
    ACTIVIDAD_LIBRO,
    VISIBLE_BOOKMAIN,    
 } from '../../types';

const BookState = props => {

    const initialState = {
        bookuser: [],
        actividades: [],
        bookmain: true,
        libroid: []
    }

    // // Extraer la informacion de autenticacion
    // const authContext = useContext(AuthContext);
    // const {usuario } = authContext;


    const [state, dispatch] = useReducer(BookReducer, initialState);


    useEffect(() => {

        // obtenerLibros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // Retornar el usuario autenticado
    const obtenerLibros = async () =>{

        try {
            const respuesta = await ClienteAxios.get('/api/books/');
            dispatch({
                type: LIBRO_ACTUAL,
                payload: respuesta.data.bookuser
            });

        } catch (error) {
            console.log(`Error al obtener libros`);
            console.log(error);
 
        }
        
    }



    const obtenerActivity = async (usuario) =>{
        
        try {
            const respuesta = await ClienteAxios.get('/api/activity', { params: { usuario }});
            console.log(`RESPUESTA ACTIVITY ${JSON.stringify(respuesta.data.actividad)}`); 
            

            dispatch({ 
                type: ACTIVIDAD_LIBRO,
                payload: respuesta.data.actividad
            });

        } catch (error) {
            console.log(`Error al obtener Activity`);
            console.log(error);

        }
        
    }



    const actualizarActivity = async booksoyvida => {
        console.log(`booksoyvida: ${JSON.stringify(booksoyvida)}`);
        try {
            await ClienteAxios.put(`/api/activity/${booksoyvida._id}`, booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }


    
    const seleccionarActividadUser = (actividadBook, usuario) =>{
        // console.log(`actividadBook: ${JSON.stringify(actividadBook)}`);
        
        let obj = {};

        state.actividades.forEach((act) =>{
        if (act.usuario===usuario._id) {
                obj={
                    _id: act._id, 
                    usuario: act.usuario
                }
            }
        });


        // Fusionamos los dos objetos para formar uno y enviar actualizar la actividad
        const objActBook = Object.assign(obj, actividadBook);

        actualizarActivity(objActBook);             

    }


    const cambiarMainLesson = (visble) =>{
        dispatch({
            type: VISIBLE_BOOKMAIN,
            payload: visble
        });
    }



    return ( 
        <BookContext.Provider
            value={{
                bookuser: state.bookuser,
                actividades: state.actividades,
                bookmain: state.bookmain,
                obtenerLibros,
                obtenerActivity,
                seleccionarActividadUser,
                cambiarMainLesson
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;