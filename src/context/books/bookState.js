import React, { useReducer, useState } from 'react';
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

    // state buscar bookuser
    const [books, guardarBooks] = useState([]);

    const [colegios, guardarColegios] = useState([]);
    const [colegiosRefresh, guardarColegiosRefresh] = useState([]);


    const [usuariosByColegio, setUsuariosByColegio] = useState([]);


    const [bookuserGet, guardarBookUserGet] = useState([]);


    // state para BookSoyvida
    const [bookusersv, guardarBookUser] = useState({
        libro:'', usuario: '', colegio: ''
    });




    // Fotos de la actividad
    const [photo, guardarPhoto] = useState([]);
    const [photoInfo, guardarPhotoInfo] = useState([]);
    const [photoExiste, guardarPhotoExiste] = useState(false);




    // Retornar el usuario autenticado
    const obtenerLibros = async (usuario) =>{

        try {
            const respuesta = await ClienteAxios.get('/api/books', { params: { usuario }});
            dispatch({
                type: LIBRO_ACTUAL,
                payload: respuesta.data.bookuser
            });

        } catch (error) {
            console.log(`Error al obtener libros`);
            console.log(error);
 
        }
        
    }



    const obtenerActivity = async (usuario, libro) =>{
        
        try {
            const respuesta = await ClienteAxios.get('/api/activity', { params: { usuario, libro }});
            // console.log(`RESPUESTA ACTIVITY ${JSON.stringify(respuesta.data.actividad)}`); 
            

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
            console.log('resAct');
            console.log(resAct);
            

            resAct.length > 0 
            ? guardarPhotoExiste(true)
            : guardarPhotoExiste(false)
            
            
        } catch (error) {
            console.log(`Error al obtener Imagen`);
            console.log(error);

        }
        
    }

    const obtenerBooksSoyVida = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/booksoyvida');
            guardarBooks(resultado.data.booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }


    const agregarBook = async booksoyvida => {
        try {
            await ClienteAxios.post('/api/booksoyvida', booksoyvida);
    
        } catch (error) {
            console.log(error);
        }
    
        obtenerBooksSoyVida();
    }
    



    const obtenerColegios = async () => {
        console.log('resultado.data.colegios');
        try {
            const resultado = await ClienteAxios.get('/api/schools');
            guardarColegios(resultado.data.colegios);
            console.log('resultado.data.colegios', resultado.data.colegios);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
                        
    }


    
    const agregarColegio = async colegio => {
        try {
            const resultado =  await ClienteAxios.post('/api/schools', colegio);
            guardarColegiosRefresh(resultado.data)
        } catch (error) {
            console.log(error);
        }
    }

    // Editar o modificar Colegio
    const actualizarColegio = async colegio => {
        try {
            const resultado = await ClienteAxios.put(`/api/schools/${colegio._id}`, colegio);
            guardarColegiosRefresh(resultado.data)
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }



    // Eliminar proyecto
    const eliminarColegio = async colegioId =>{
        try {
            const resultado = await ClienteAxios.delete(`/api/schools/${colegioId}`);
            guardarColegiosRefresh(resultado.data)

        } catch (error) {
            console.log(`Error: ${error}`);
        }

    }


    const obtenerUsuariosByColegio = async (colegio) => {
        try {
            if (colegio) {
                const resultado = await ClienteAxios.get('/api/users', { params: { colegio }});
                setUsuariosByColegio(resultado.data.alumnos);
            }else{
                const resultado = await ClienteAxios.get('/api/users');
                setUsuariosByColegio(resultado.data.alumnos);
            }
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }
                        
    }

    
    // Editar o modificar usuario
    const actualizarUsuario = async usuario => {
        
        try {
            const resultado = await ClienteAxios.put(`/api/users/${usuario._id}`, usuario);
            guardarColegiosRefresh(resultado.data);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

        

    // Eliminar proyecto
    const eliminarUsuario = async usuarioId =>{
        try {
            const resultado = await ClienteAxios.delete(`/api/users/${usuarioId}`);
            guardarColegiosRefresh(resultado.data);
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }

    }




    // actividades
    


const agregarBookUser = async bookuser => {
    try {
        const resultado = await ClienteAxios.post('/api/books', bookuser);
        guardarBookUser(resultado.data);

    } catch (error) {
        console.log(error);
    }
}


const agregarActivity = async bookuser => {
    try {
        const resultado = await ClienteAxios.post('/api/activity', bookuser);
        guardarBookUser(resultado.data);

    } catch (error) {
        console.log(error);
    }

}


const obtenerBookUser = async (libro, colegio) => {
    try {
        const resultado = await ClienteAxios.get('/api/books', { params: { libro, colegio }});
        guardarBookUserGet(resultado.data.bookuser);

    } catch (error) {
        console.log(error);
    }
}



    // Eliminar book
    // const eliminarBook = async booksoyvidaId =>{
    //     try {
    //         await ClienteAxios.delete(`/api/booksoyvida/${booksoyvidaId}`);
    //         obtenerBooksSoyVida();
            
    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //     }

    // }



    // Editar o modificar booksoyvida
    const actualizarBook = async booksoyvida => {
        try {
            await ClienteAxios.put(`/api/booksoyvida/${booksoyvida._id}`, booksoyvida);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }



    return ( 
        <BookContext.Provider
            value={{
                bookuser: state.bookuser,
                actividades: state.actividades,
                bookmain: state.bookmain,
                obtenerLibros,
                books: books,
                colegios: colegios,
                actividadeslibro: actividadeslibro,
                photo: photo,
                bookuserGet: bookuserGet,
                bookusersv: bookusersv,
                usuariosByColegio: usuariosByColegio,
                colegiosRefresh: colegiosRefresh,
                photoInfo: photoInfo,
                photoExiste: photoExiste,
                activityRealizadas,
                obtenerActivity,
                obtenerBooksSoyVida,
                obtenerColegios,
                seleccionarActividadUser,
                cambiarMainLesson,
                agregarImagen,
                obtenerImagenInfo,
                agregarImagenInfo,
                agregarColegio,
                actualizarColegio,
                eliminarColegio,
                actualizarUsuario,
                eliminarUsuario,
                obtenerUsuariosByColegio,
                agregarBook,
                actualizarBook,
                agregarActivity,
                agregarBookUser,
                guardarBookUser,
                obtenerBookUser
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;