import React, {useEffect, useContext} from 'react';
import { withRouter } from 'react-router-dom';
import BookContext from '../../../context/books/bookContex';
import Lesson1 from './lesson/Lesson1';
import Lesson2 from './lesson/Lesson2';
import Lesson3 from './lesson/Lesson3';
import Lesson4 from './lesson/Lesson4';
import Lesson5 from './lesson/Lesson5';
import Lesson6 from './lesson/Lesson6';
import Lesson7 from './lesson/Lesson7';
import Lesson8 from './lesson/Lesson8';
import Lesson9 from './lesson/Lesson9';
import Lesson10 from './lesson/Lesson10';
import Lesson11 from './lesson/Lesson11';
import Lesson12 from './lesson/Lesson12';
import Lesson13 from './lesson/Lesson13';
import Lesson14 from './lesson/Lesson14';
import Lesson15 from './lesson/Lesson15';
import Lesson16 from './lesson/Lesson16';
import Button from '@restart/ui/esm/Button';


const ActivityBook1 = (props) => {

    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const {bookmain, cambiarMainLesson} = bookContext;

    let idPage = props.match.params.id;


    useEffect(() => {
        cambiarMainLesson(false);
        console.log(bookmain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookmain])




    const seleccionarLeccion = (id)=>{

        switch (id) {
            case '1': return <Lesson1 />
            case '2': return <Lesson2 />
            case '3': return <Lesson3 />
            case '4': return <Lesson4 />
            case '5': return <Lesson5 />
            case '6': return <Lesson6 />
            case '7': return <Lesson7 />
            case '8': return <Lesson8 />
            case '9': return <Lesson9 />
            case '10': return <Lesson10 />
            case '11': return <Lesson11 />
            case '12': return <Lesson12 />
            case '13': return <Lesson13 />
            case '14': return <Lesson14 />
            case '15': return <Lesson15 />
            case '16': return <Lesson16 />

            default: break;
        }

    }

    return ( 
        <div>
            <a href="/primero">Voler a las lecciones</a>
            
            {
                seleccionarLeccion(idPage)
            }
        </div>
     );
}
 
export default withRouter(ActivityBook1);