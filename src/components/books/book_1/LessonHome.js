import React from 'react';
import { Collapse, ProgressBar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import Activity from './Activity';

import estrella from '../../../resources/img/estrellaAmarillo.png';
import estrellaNo from '../../../resources/img/estrellaBlanco.png';


const LessonHome = (props) => {


    const {lecciones, location, match} = props;

    const numBook = match.params.id;
    
    // Llamamos al state con el avance de las actividades y buscamos las del la leccion actual
    const actLec = location.state[numBook-1];
    
    
    return ( 
    <div className='bgBook'>
        <div className="headerActivity">

        
            <div className='volverInicio'>                 
                <a href='/primero'>
                    <div className='iconHome'>
                        <i className="fas fa-house-user"></i> 
                    </div>
                    Inicio
                </a>
            </div>

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
                    ((actLec.act1===true && actLec.act2===true) || 
                    (actLec.act2===true && actLec.act3===true) || 
                    (actLec.act1===true && actLec.act3===true))
                    ? <ProgressBar animated striped variant="info" now={66} label={`66%`} />
                    : (
                        actLec.act1===true || actLec.act2===true || actLec.act3===true
                        ? <ProgressBar animated striped variant="info" now={33} label={`33%`} />
                        : <ProgressBar animated striped variant="info" now={0} label={`0%`} />
                      )
                   )
            }

            </div>
            <ul className="listHorizontal text-center">
                <li>{
                        actLec.act1===true 
                        ? <p><img src={estrella} alt="Completada" />Actividad 1</p>
                        : <p><img src={estrellaNo} alt="No Completada" />Actividad 1</p>
                    }
                </li>
                <li>{
                        actLec.act2===true 
                        ? <p><img src={estrella} alt="Completada" />Actividad 2</p>
                        : <p><img src={estrellaNo} alt="No Completada" />Actividad 2</p>
                    }
                </li>
                <li>{
                        actLec.act3===true 
                        ? <p><img src={estrella} alt="Completada" />Actividad 3</p>
                        : <p><img src={estrellaNo} alt="No Completada" />Actividad 3</p>
                    }
                </li>
            </ul>

            
        </div>


        <Router>
            <p className='seleccionarActividadTitle'>Selecciona una actividad</p>
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