import React, { useReducer, useEffect, useState } from 'react';
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

    const [actividadeslibro, guardarActividadeslibro] = useState([]);


    // Fotos de la actividad
    const [photo, guardarPhoto] = useState([]);
    const [photoInfo, guardarPhotoInfo] = useState([]);
    const [photoExiste, guardarPhotoExiste] = useState(false);



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
        const {_id, usuario} = booksoyvida;
        console.log(`booksoyvida: ${JSON.stringify(booksoyvida)}`);
        console.log(`_id: ${JSON.stringify(_id)}`);
        console.log(`usuario: ${JSON.stringify(usuario)}`);
        try {
            await ClienteAxios.put(`/api/activity/${booksoyvida._id}`, booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }


    
    const seleccionarActividadUser = (actividadBook, usuario) =>{
        console.log(`actividadBook: ${JSON.stringify(actividadBook)}`);
        console.log(`usuario: ${JSON.stringify(usuario)}`);
        console.log(`state.actividades: ${JSON.stringify(state.actividades)}`);
        
        let obj = {};

        state.actividades.forEach((act) =>{
            console.log(`usuario: ${JSON.stringify(act.usuario)}`);
            console.log(`ID: ${JSON.stringify(usuario._id)}`);
                obj={
                    _id: act._id, 
                    usuario: act.usuario
                }
        });

        // Fusionamos los dos objetos para formar uno y enviar actualizar la actividad
        const objActBook = Object.assign(obj, actividadBook);
        console.log(`objActBook: ${JSON.stringify(objActBook)}`);

        actualizarActivity(objActBook);             

    }



    const activityRealizadas = ()=>{

        state.actividades.map(act =>
            guardarActividadeslibro([
              {id: 1, name: 'Lección 1', act1: act.actividad1, act2: act.actividad2, act3: act.actividad3 },
              {id: 2, name: 'Lección 2', act1: act.actividad4, act2: act.actividad5, act3: act.actividad6 },
              {id: 3, name: 'Lección 3', act1: act.actividad7, act2: act.actividad8, act3: act.actividad9 },
              {id: 4, name: 'Lección 4', act1: act.actividad10, act2: act.actividad11, act3: act.actividad12 },
              {id: 5, name: 'Lección 5', act1: act.actividad13, act2: act.actividad14, act3: act.actividad15 },
              {id: 6, name: 'Lección 6', act1: act.actividad16, act2: act.actividad17, act3: act.actividad18 },
              {id: 7, name: 'Lección 7', act1: act.actividad19, act2: act.actividad20, act3: act.actividad21 },
              {id: 8, name: 'Lección 8', act1: act.actividad22, act2: act.actividad23, act3: act.actividad24 },
              {id: 9, name: 'Lección 9', act1: act.actividad25, act2: act.actividad26, act3: act.actividad27 },
              {id: 10, name: 'Lección 10', act1: act.actividad28, act2: act.actividad29, act3: act.actividad30 },
              {id: 11, name: 'Lección 11', act1: act.actividad31, act2: act.actividad32, act3: act.actividad33 },
              {id: 12, name: 'Lección 12', act1: act.actividad34, act2: act.actividad35, act3: act.actividad36 },
              {id: 13, name: 'Lección 13', act1: act.actividad37, act2: act.actividad38, act3: act.actividad39 },
              {id: 14, name: 'Lección 14', act1: act.actividad40, act2: act.actividad41, act3: act.actividad42 },
              {id: 15, name: 'Lección 15', act1: act.actividad43, act2: act.actividad44, act3: act.actividad45 },
              {id: 16, name: 'Lección 16', act1: act.actividad46, act2: act.actividad47, act3: act.actividad48 }
              
            ])       
           
        )
        
    }


    const cambiarMainLesson = (visble) =>{
        dispatch({
            type: VISIBLE_BOOKMAIN,
            payload: visble
        });
    }




    const agregarImagen = async (photo, idActivity, actividadUser, textoAct ) => {
        const data = new FormData();
        data.append('file', photo.target.files[0]);

        try {
            const resultado = await ClienteAxios.post('/api/uploadimage', data);

            const path = resultado.data.path;
            const pathImage = path.substr(path.lastIndexOf('\\') + 1);
            
            guardarPhoto(pathImage);

        } catch (error) {
            console.log(error);
        }

    }

    const agregarImagenInfo = async (textoAct, idActivity, actividadUser) => {

        const {texto, photo} = textoAct;
        console.log(textoAct);
        try {

            let objImgInfo = {
                actividad: idActivity,
                activity: actividadUser._id,
                usuario: actividadUser.usuario,
                libro: actividadUser.libro,
                texto: texto,
                image: photo
            }

            const resultado = await ClienteAxios.post('/api/uploadimageinfo', objImgInfo);
            console.log(resultado);

        } catch (error) {
            console.log(error);
        }

    }

    
    const obtenerImagenInfo = async (usuario, actividad) =>{
        
        try {
            
            const respuesta = await ClienteAxios.get('/api/uploadimageinfo', { params: { usuario, actividad }});
            const resAct = respuesta.data.imageActivity;
            guardarPhotoInfo(resAct);
            console.log(resAct);
            
            resAct.length > 0
               && guardarPhotoExiste(true)
            
            
        } catch (error) {
            console.log(`Error al obtener Imagen`);
            console.log(error);

        }
        
    }


    return ( 
        <BookContext.Provider
            value={{
                bookuser: state.bookuser,
                actividades: state.actividades,
                bookmain: state.bookmain,
                obtenerLibros,
                actividadeslibro: actividadeslibro,
                photo: photo,
                photoInfo: photoInfo,
                photoExiste: photoExiste,
                activityRealizadas,
                obtenerActivity,
                seleccionarActividadUser,
                cambiarMainLesson,
                agregarImagen,
                obtenerImagenInfo,
                agregarImagenInfo
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;