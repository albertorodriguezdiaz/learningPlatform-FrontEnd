import React, {useContext} from 'react';
import AuthContext from '../../context/autentication/authContext';


const TopBar = () => {
        // Extraer la informacion de autenticacion
        const authContext = useContext(AuthContext);
        const { usertipo } = authContext;

    return ( 
        <div>
            { usertipo==='user' && 
                <p>Topbar Alumno</p>
            }

            { usertipo==='admin' && 
                <p>Topbar Admin</p>
            }

            { usertipo==='editor' && 
                <p>Topbar Docente</p>
            }
            
        </div>
     );
}
 
export default TopBar;