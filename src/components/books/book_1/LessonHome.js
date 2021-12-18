import React from 'react';
import { Collapse, ProgressBar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import Activity from './Activity';


const LessonHome = (props) => {


    const {lecciones, location, match} = props;

    const numBook = match.params.id;
    
    // Llamamos al state con el avance de las actividades y buscamos las del la leccion actual
    const actLec = location.state[numBook-1];
    
    
    return ( 
    <div>
        <div className="headerActivity">

            
            <h1>{actLec.name}</h1>
            {
                actLec.act1===true && actLec.act2===true && actLec.act3===true 
                    ? <h3 className="text-center">Lección Finalizada</h3>
                    : <h3 className="text-center">Lección en proceso</h3>
            }
            <div>
            {
                actLec.act1===true && actLec.act2===true && actLec.act3===true
                ? <ProgressBar animated striped variant="info" now={100} label={`100%`} />
                : ( 
                    actLec.act1===true && actLec.act2===true
                    ? <ProgressBar animated striped variant="info" now={66} label={`66%`} />
                    : (
                        actLec.act1===true
                        ? <ProgressBar animated striped variant="info" now={33} label={`33%`} />
                        : <ProgressBar animated striped variant="info" now={0} label={`0%`} />
                      )
                   )
            }

            </div>
            <ul className="listHorizontal text-center">
                <li>{
                        actLec.act1===true 
                        ? <p><i className="fas fa-star"></i>Actividad 1</p>
                        : <p><i className="far fa-star"></i>Actividad 1</p>
                    }
                </li>
                <li>{
                        actLec.act2===true 
                        ? <p><i className="fas fa-star"></i>Actividad 2</p>
                        : <p><i className="far fa-star"></i>Actividad 2</p>
                    }
                </li>
                <li>{
                        actLec.act3===true 
                        ? <p><i className="fas fa-star"></i>Actividad 3</p>
                        : <p><i className="far fa-star"></i>Actividad 3</p>
                    }
                </li>
            </ul>

            
        </div>


        <Router>
            <ul className="lessonBookActivity">
            {
                lecciones.map((act, key)=>
                    <Link 
                        key={key}  
                        to={{
                            pathname:`/primero/leccion/${numBook}/actividad/${act.id}`,
                        }}
                    >                          
                        <li>{act.name} </li>
                    </Link>
                    
                )
            }
            </ul>

            <Route path={"/primero/leccion/:leccion/actividad/:id"}>
             <Activity {...props}  />
            </Route>
        </Router>

        
    </div>
     );
}
 
export default LessonHome;