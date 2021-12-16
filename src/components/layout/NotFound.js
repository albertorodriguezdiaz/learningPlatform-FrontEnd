import React,{useEffect} from 'react';
import TopBar from './TopBar';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();

    useEffect(() => {
        history.push("/home");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div>
            <TopBar />
            <h2>Página no encontrada - Error: 404</h2>
        </div>
     );
}
 
export default NotFound;