import React, { useContext, useState, useEffect } from 'react';
import { Table, Col, Container, Row, Button, Form } from 'react-bootstrap';
import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/autentication/authContext';
import TopBar from '../layout/TopBar';

import BookContext from '../../context/books/bookContex';

const NuevaCuenta = (props) => {

    // Extraer la informacion de autenticacion
    const bookContext = useContext(BookContext);
    const { colegios, usuariosByColegio, colegiosRefresh, obtenerUsuariosByColegio,
        actualizarUsuario, eliminarUsuario, obtenerColegios} = bookContext;

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario, userdata } = authContext;


    // Seleccion Usuario Para editar
    const [selectUser, guardarSelectUser] = useState(false);


    // State para iniciar Sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        colegio: '',
        tipo: '',
        password: '',
        confirmarpassword: ''
    });

    // Extraer de usuario
    const {nombre, email, colegio, tipo, password, confirmarpassword, colegioFiltro} = usuario;


    // en caso de que el usuario se haya autenticado o registrado o sea un registr duplicado
    useEffect( () =>{
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        
        obtenerColegios();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[mensaje, autenticado, colegioFiltro])


    useEffect( () =>{
        obtenerUsuariosByColegio(colegioFiltro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[colegiosRefresh, userdata])


    

    const onChange = (e) =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }


    // Cuando el usuarip quiera iniciar session
    const onSubmit = (e) =>{
        e.preventDefault();

        // Validar que no haya campos vacios
        if( nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmarpassword.trim() === ''){
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('El password debe ser minimo de 6 caracteres', 'alerta-error');
            return;
        }

        // Validar contrase??as iguales
        if (password !== confirmarpassword) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        

        // Validar si es edicion o es tarea nueva
        if (selectUser === false) {
            // agregar el nuevo usuario
            registrarUsuario({
                nombre,
                email,
                colegio,
                tipo,
                password
            });
            

        } else {
            // actualizar usuario existente
            actualizarUsuario(usuario);
            guardarSelectUser(false);

        }

        guardarUsuario({
            nombre: '',
            email: '',
            colegio: '',
            tipo: '',
            password: '',
            confirmarpassword: ''
        }
        );

        
    }


    // Seleccionar usuario para editar
    const seleccionarUsuario = usuario =>{
        guardarSelectUser(true);

        // Enviamos una copia del usuario a editar y le pasamos el password vacio
        guardarUsuario({
            ...usuario,
            password: ''
        })

    }




    return ( 
        <div className='homebookBoxAdmin'>
        <TopBar />
            { alerta 
                    ? (
                        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
                      )
                    : null
            }

            <Container>
                <h2>Crear cuenta de usuario</h2>

                <Form
                    onSubmit={onSubmit}
                >

            <Row>
                <Col>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                </Col>
                <Col>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="campo-form">
                        <label htmlFor="colegio">Colegio</label>

                        <div className="selectBox">
                            <select
                                defaultValue={colegio}
                                id="colegio"
                                name="colegio"
                                onChange={onChange}
                            >
                        

                            <option>Seleccionar un Colegio</option>                            
                                {
                                    colegios.map((colegio, key)=>
                                        usuario.colegio===colegio._id
                                        ? <option selected="selected" key={key} value={colegio._id}>{colegio.nombre}</option>
                                        : <option key={key} value={colegio._id}>{colegio.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="campo-form">
                        <label htmlFor="tipo">Tipo</label>

                        <div className="selectBox">
                            <select
                                defaultValue={tipo}
                                id="tipo"
                                name="tipo"
                                onChange={onChange}
                            >
                                <option>Tipo de usuario</option>
                                <option value="user">Alumno</option>
                                <option value="editor">Docente</option>
                            </select>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="campo-form">
                        <label htmlFor="password">Contrase??a</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contrase??a"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                </Col>
                <Col>
                    <div className="campo-form">
                        <label htmlFor="confirmarpassword">Confirmar Contrase??a</label>
                        <input 
                            type="password"
                            id="confirmarpassword"
                            name="confirmarpassword"
                            placeholder="Tu Contrase??a Nuevamente"
                            value={confirmarpassword}
                            onChange={onChange}
                        />
                    </div>
                </Col>
            </Row>
                    

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value={ selectUser ? 'Editar Usuario' : 'Agregar Usuario' }
                        />
                    </div>

                </Form>


                
                {/* Formulario Filtro por Colegio */}
                <Form className='filtrosTop'>
                
                <Row>
                <Col lg="6">
                    <div className="campo-form">
                        <div className="selectBox">
                            <select
                                defaultValue={colegio}
                                id="colegioFiltro"
                                name="colegioFiltro"
                                onChange={onChange}
                            >
                                <option value="">Seleccionar un Colegio</option>
                                {
                                    colegios.map((colegio, key)=>
                                        <option key={key} value={colegio._id}>{colegio.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="campo-form">
                        <div className="selectBox">
                            <select
                                defaultValue={tipo}
                                id="tipoFiltro"
                                name="tipoFiltro"
                                onChange={onChange}
                            >
                                <option>Tipo de usuario</option>
                                <option value="user">Alumno</option>
                                <option value="editor">Docente</option>
                            </select>
                        </div>
                    </div>
                </Col>
                
                </Row>
                </Form>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Colegio</th>
                            <th>Tipo</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            usuariosByColegio.map( (alumno, key) => 
                            <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.email}</td>
                                    <td>
                                    {   
                                        colegios.map( (colegio) =>
                                        // Compara el Id de libros con el id de libros de usuariosByColegio para mostrar el nombre
                                            colegio._id===alumno.colegio
                                            && colegio.nombre
                                        )
                                    }
                                    </td>
                                    <td>{alumno.tipo}</td>
                                    <td>
                                        <Button 
                                            variant="outline-primary"
                                            type="button"
                                            onClick={ () => seleccionarUsuario(alumno)}
                                            >Editar
                                        </Button>
                                    </td>
                                    <td>
                                        <Button 
                                            variant="danger"
                                            type="button"
                                            onClick={ () => eliminarUsuario(alumno._id)}
                                            >Eliminar
                                        </Button>

                                    </td>
                            </tr>  
                            )
                        }
                    </tbody>
                </Table>

            </Container>
        </div>
     );
}
 
export default NuevaCuenta;