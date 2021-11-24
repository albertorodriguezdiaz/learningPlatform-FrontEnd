import React, {useContext} from 'react';
import AuthContext from '../../context/autentication/authContext';


const SideBar = () => {
        // Extraer la informacion de autenticacion
        const authContext = useContext(AuthContext);
        const { usertipo } = authContext;

    return ( 
        <div>
            { usertipo==='user' && 
                <p>Menu Alumno</p>
            }

            { usertipo==='admin' && 
                <p>Menu Admin</p>
            }

            { usertipo==='editor' && 
                <p>Menu Docente</p>
            }
            
        </div>
     );
}
 
export default SideBar;