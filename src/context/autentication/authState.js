import React, { useState, useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';

const AuthState = props => {

    const initialState = {

        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true

    }

    const [usertipo, getUsertipo] = useState();

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/users', datos);
            // console.log(`Respuesta.Data ${respuesta.data}`);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });
            // Obtener usuario
            usuarioAutenticado();
            

        } catch (error) {
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retornar el usuario autenticado
    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if (token) {
            // funcion para enviar el token por header
            tokenAuth(token);
            
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });

            getUsertipo(respuesta.data.usuario.tipo);
            

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            });
        }
        
    }


    //   Cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            console.log(`Respuesta.Data ${respuesta}`);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            // Obtener usuario
            usuarioAutenticado();
            

        } catch (error) {

            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }


    // Cerrar la sesion del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
    }
    


    return ( 
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                usertipo: usertipo,
                registrarUsuario,
                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthState;