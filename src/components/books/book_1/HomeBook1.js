import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Lesson from './Lessons';


const HomeBook1 = (props) => {

    // const [display, guardarDisplay] =  useState(false);

    // useEffect(() => {
    //     urlGet();
    // }, [display])

    
    // const urlGet = () =>{
    //     let url = window.location.href.includes('leccion');
    //     console.log(url);
    //     guardarDisplay(url);
    // }

    const lecciones = [
        {name: 'Lección 1', id: 1},
        {name: 'Lección 2', id: 2},
        {name: 'Lección 3', id: 3},
        {name: 'Lección 4', id: 4},
        {name: 'Lección 5', id: 5},
        {name: 'Lección 6', id: 6},
        {name: 'Lección 7', id: 7},
        {name: 'Lección 8', id: 8},
        {name: 'Lección 9', id: 9},
        {name: 'Lección 10', id: 10},
        {name: 'Lección 11', id: 11},
        {name: 'Lección 12', id: 12},
        {name: 'Lección 13', id: 13},
        {name: 'Lección 14', id: 14},
        {name: 'Lección 15', id: 15},
        {name: 'Lección 16', id: 16}
    ]

    return ( 
        <div>
        <h1>Libro #1</h1>

        <Router>
        {
            lecciones.map((act)=>
            <Link to={"/primero/leccion/" + act.id}>
                <p>{act.name}</p>
            </Link>
                
            )
        }

            <Route path="/primero/leccion/:id">
             <Lesson/>
            </Route>
        </Router>

        </div>

     );
}
 
export default HomeBook1;