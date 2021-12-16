import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autentication/authContext';
import HomeDocente from '../docentes/HomeDocente';
import TopBar from '../layout/TopBar';
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

    return ( 
        <div>
            <TopBar />
            <Container>
                { usertipo==='user' && <HomeAlumno {...props} />}
                { usertipo==='admin' && <HomeAdmin {...props} /> }
                { usertipo==='editor' && <HomeDocente {...props} /> }
            </Container>
        </div>
     );
}
 
export default Home;