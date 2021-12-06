import React from 'react';
import LessonHome from '../LessonHome';

const Lesson2 = () => {


    const lecciones = [
        {name: 'Actividad 1', id: 1},
        {name: 'Actividad 2', id: 2},
        {name: 'Actividad 3', id: 3}
    ]

    return ( 
        <LessonHome
            lecciones={lecciones}
            numBook={2}
        />
        
     );
}
 
export default Lesson2;