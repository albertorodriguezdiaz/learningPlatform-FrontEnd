import React, {useContext} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BookContext from '../../../context/books/bookContex';
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

    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const {bookmain} = bookContext;

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
            
        <Container>
            <Router>
                {
                    bookmain===true &&
                    
                    <ul className="lessonBook">
                    <h1>Libro #1</h1>
                    {
                        lecciones.map((act, key)=>
                        <li key={key}>
                        <Link to={"/primero/leccion/" + act.id}>
                                {act.name}
                            </Link>
                        </li>
                            
                        )
                    }
                    </ul>
                }

                <Route path="/primero/leccion/:id">
                <Lesson/>
                </Route>
            </Router>
        </Container>
        

        </div>

     );
}
 
export default HomeBook1;