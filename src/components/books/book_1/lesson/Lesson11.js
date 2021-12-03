import React from 'react';
import LessonHome from './LessonHome';

const Lesson11 = () => {


    const lecciones = [
        {name: 'Actividad 1', id: 1},
        {name: 'Actividad 2', id: 2},
        {name: 'Actividad 3', id: 3}
    ]

    return ( 
        <LessonHome
            lecciones={lecciones}
            numBook={11}
        />
        
     );
}
 
export default Lesson11;