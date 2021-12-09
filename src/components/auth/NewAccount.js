import React, { useContext, useState, useEffect } from 'react';
import { Table, Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClienteAxios from 'axios';
import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/autentication/authContext';
import TopBar from '../layout/TopBar';

const NuevaCuenta = (props) => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    const [usuarios, getUsuarios] = useState([]);

    const [colegios, guardarColegios] = useState([]);

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
        
        obtenerUsuariosByColegio(colegioFiltro);
                
        obtenerColegios();

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[mensaje, autenticado, colegioFiltro])


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
            }

        // Password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('El password debe ser minimo de 6 caracteres', 'alerta-error');
            return;
        }

        // Validar contraseñas iguales
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
                password,
                colegio,
                tipo
            });

        } else {
            // actualizar usuario existente
            actualizarUsuario(usuario);
            guardarSelectUser(false);
        }



        
    }



    // const obtenerUsuarios = async () => {
    //     try {
    //         const resultado = await ClienteAxios.get('/api/users');
    //         getUsuarios(resultado.data.alumnos);
    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //     }
                        
    // }
    
    
    
    const obtenerUsuariosByColegio = async (colegio) => {
        try {
        
            const resultado = await ClienteAxios.get('/api/users', { params: { colegio }});
            getUsuarios(resultado.data.alumnos);
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }
                        
    }

    const obtenerColegios = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/schools');
            guardarColegios(resultado.data.colegios);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }



    // Seleccionar usuario para editar
    const seleccionarUsuario = usuario =>{
        guardarSelectUser(true);

        guardarUsuario({
            ...usuario
        })

    }

    // Editar o modificar usuario
    const actualizarUsuario = async usuario => {
        
        try {
            await ClienteAxios.put(`/api/users/${usuario._id}`, usuario);
            obtenerUsuariosByColegio();
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

        

    // Eliminar proyecto
    const eliminarUsuario = async usuarioId =>{
        try {
            await ClienteAxios.delete(`/api/users/${usuarioId}`);
            obtenerUsuariosByColegio(colegioFiltro);
            
        } catch (error) {
            console.log(`Error: ${error}`);
        }

    }


    // // Buscar nombre de ID de colegio
    // const buscarIdColegio = () =>{

    //     colegio.map((col)=>{
    //         if(col._id===usuario._id){
    //             console.log(usuario._id);
    //         }
    //      }                                    
    //     )
    // }




    return ( 
        <div>
            <TopBar />
            { alerta 
                    ? (
                        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
                      )
                    : null
            }

            <Container>
                <Row>
                    <Col lg="12">
                    
                <h1>Crear cuenta de usuario</h1>

                <Form
                    onSubmit={onSubmit}
                >

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

                    <div className="campo-form">
                        <label htmlFor="colegio">Colegio</label>
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

                    <div className="campo-form">
                        <label htmlFor="tipo">Tipo</label>
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

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmarpassword">Confirmar Contraseña</label>
                        <input 
                            type="password"
                            id="confirmarpassword"
                            name="confirmarpassword"
                            placeholder="Tu Contraseña Nuevamente"
                            value={confirmarpassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value={ selectUser ? 'Editar Usuario' : 'Agregar Usuario' }
                        />
                    </div>

                </Form>

                <Link to={'/usuarios'}  className="enlace-cuenta text-center">
                    Volver a lista de usuarios
                </Link>

                </Col>
                </Row>

                



                {/* Formulario Filtro por Colegio */}
                <Form >
                
                <Row>
                <Col lg="6">
                    <div className="campo-form">
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
                </Col>
                <Col lg="6">
                    <div className="campo-form">
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
                </Col>
                
                </Row>
                </Form>



                
                

                <Table>
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
                            usuarios.map( (alumno, key) => 
                            <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.email}</td>
                                    <td>{alumno.colegio}</td>
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