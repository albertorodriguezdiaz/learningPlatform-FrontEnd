import React, { useState, useContext, useEffect } from 'react';

import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/autentication/authContext';

import logo from '../../resources/img/logo-soyvida-login.png'
import estrellas from '../../resources/img/estrellaslogin.png'



const Login = (props) => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;
    // en caso de que el usuario o password no existan
    useEffect( () =>{
        if (autenticado) {            
            props.history.push('/home');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[mensaje, autenticado, props.history])



    // State para iniciar Sesion
    const [user, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // Extraer de usuario
    const {email, password} = user;

    const onChange = (e) =>{
        guardarUsuario({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuarip quiera iniciar session
    const onSubmit = (e) =>{
        e.preventDefault();

        // Validar que no haya campos vacios
        if (email.trim()==='' || password.trim()==='') {
            mostrarAlerta('Todos los campos son requeridos', 'alerta-error');
        }

        // Pasarlo al action
        iniciarSesion({email, password});
    }



    return ( 
        <div className="form-usuario">
            { alerta 
                    ? (
                        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
                      )
                    : null
            }
            <div className="contenedor-form sombra-dark">
                <img className='logoLogin' src={logo} alt="SoyVida" />

                <h1 className='iniciarLogin'>
                    <img src={estrellas} alt="Estrellas" />
                    Iniciar Sesión
                </h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                    <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="email">Email</label>
                                    </div>
                                <div className="col-md-9">
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Tu Email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="campo-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <div className="col-md-9">
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Tu Contraseña"
                                    value={password}
                                    onChange={onChange}
                                />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>

                </form>

               
            </div>
        </div>
     );
}
 
export default Login;