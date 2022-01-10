import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autentication/authContext';
import HomeDocente from '../docentes/HomeDocente';
import HomeAdmin from '../admin/HomeAdmin';
import HomeAlumno from '../alumnos/HomeAlumno';


const Home = (props) => {


    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { userdata_id, usertipo, usuarioAutenticado } = authContext;


    useEffect(() => {
        usuarioAutenticado();        
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return ( 
        <div>
                { usertipo==='user' && <HomeAlumno {...props} usuario={userdata_id} />}
                { usertipo==='admin' && <HomeAdmin {...props} usuario={userdata_id} /> }
                { usertipo==='editor' && <HomeDocente {...props} /> }
        </div>
     );
}
 
export default Home;