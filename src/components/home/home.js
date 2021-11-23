import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/SideBar';
import TopBar from '../layout/TopBar';
import AuthContext from '../../context/autentication/authContext';

const Home = (props) => {


    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usertipo, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();        
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return ( 
        <div className="contenedor-app">
            {
                usertipo === 'user'
                    ? <div>{usertipo}</div>
                    : null
            }

            
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