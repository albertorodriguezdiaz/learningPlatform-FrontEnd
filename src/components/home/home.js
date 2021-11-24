import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autentication/authContext';
import HomeDocente from '../docentes/HomeDocente';
import HomeAdmin from '../admin/HomeAdmin';
import HomeAlumno from '../alumnos/HomeAlumno';
import { Container } from 'react-bootstrap';


const Home = (props) => {


    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usertipo, usuarioAutenticado } = authContext;


    useEffect(() => {
        usuarioAutenticado();        
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(usertipo);

    return ( 
        <div className="contenedor-app">

            <Container>
                { usertipo==='user' && <HomeAlumno />}
                { usertipo==='admin' && <HomeAdmin /> }
                { usertipo==='editor' && <HomeDocente /> }
                    
            </Container>

        </div>
     );
}
 
export default Home;