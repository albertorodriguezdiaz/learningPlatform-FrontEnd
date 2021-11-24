import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/SideBar';
import TopBar from '../layout/TopBar';
import AuthContext from '../../context/autentication/authContext';
import HomeDocente from '../docentes/HomeDocente';
import HomeAdmin from '../admin/HomeAdmin';
import HomeAlumno from '../alumnos/HomeAlumno';

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

            { usertipo==='user' && <HomeAlumno />}
            { usertipo==='admin' && <HomeAdmin /> }
            { usertipo==='editor' && <HomeDocente /> }
            
            <Sidebar />

            <div className="seccion-principal">
                <TopBar />
                <main>
                    <div className="contenedor-tareas">
                        <h1>Home</h1>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Home;