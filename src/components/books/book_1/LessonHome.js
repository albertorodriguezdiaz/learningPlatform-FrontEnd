import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Activity from './Activity';


const LessonHome = ({lecciones,numBook}) => {
    return ( 
        <div>
            <h1>Leccion {numBook}</h1>

        <Router>
            <ul className="lessonBook">
            {
                lecciones.map((act, key)=>
                    <li key={key}>
                        <Link to={"/primero/leccion/"+numBook+"/actividad/" + act.id}>
                            {act.name}
                        </Link>
                    </li>
                    
                )
            }
            </ul>

            <Route path={"/primero/leccion/:leccion/actividad/:id"}>
             <Activity/>
            </Route>
        </Router>

        </div>
     );
}
 
export default LessonHome;