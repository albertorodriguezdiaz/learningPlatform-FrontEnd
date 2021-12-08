import React, {useState, useContext, useRef, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BookContext from '../../../context/books/bookContex';
import AuthContext from '../../../context/autentication/authContext';
import TopBar from '../../layout/TopBar';
import Lesson from './Lessons';
import mapbook from '../../../img/mapbook-primero.jpg';

import { gsap } from "gsap";


const HomeBook1 = (props) => {


  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {usuario, usuarioAutenticado } = authContext;

  const bookContext = useContext(BookContext);
  const {bookmain, actividades, obtenerActivity} = bookContext;

  const [actividadeslibro, guardarActividadeslibro] = useState([]);

  useEffect(() => {
      obtenerActivity();
      usuarioAutenticado();
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
      activityRealizadas();        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario]) 


  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
      };
      const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
      };

      const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
      };

         
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



      const activityRealizadas = ()=>{

          actividades.map(act =>
            act.usuario===usuario._id &&
              guardarActividadeslibro([
                {id: 1, name: 'Actividad 1', realizado: act.actividad1 },
                {id: 2, name: 'Actividad 2', realizado: act.actividad2 },
                {id: 3, name: 'Actividad 3', realizado: act.actividad3 },
                {id: 4, name: 'Actividad 4', realizado: act.actividad4 },
                {id: 5, name: 'Actividad 5', realizado: act.actividad5 },
                {id: 6, name: 'Actividad 6', realizado: act.actividad6 },
                {id: 7, name: 'Actividad 7', realizado: act.actividad7 },
                {id: 8, name: 'Actividad 8', realizado: act.actividad8 },
                {id: 9, name: 'Actividad 9', realizado: act.actividad9 },
                {id: 10, name: 'Actividad 10', realizado: act.actividad10 },
                {id: 11, name: 'Actividad 11', realizado: act.actividad11 },
                {id: 12, name: 'Actividad 12', realizado: act.actividad12 },
                {id: 13, name: 'Actividad 13', realizado: act.actividad13 },
                {id: 14, name: 'Actividad 14', realizado: act.actividad14 },
                {id: 15, name: 'Actividad 15', realizado: act.actividad15 },
                {id: 16, name: 'Actividad 16', realizado: act.actividad16 },
                {id: 17, name: 'Actividad 17', realizado: act.actividad17 },
                {id: 18, name: 'Actividad 18', realizado: act.actividad18 },
                {id: 19, name: 'Actividad 19', realizado: act.actividad19 },
                {id: 20, name: 'Actividad 20', realizado: act.actividad20 },
                {id: 21, name: 'Actividad 21', realizado: act.actividad21 },
                {id: 22, name: 'Actividad 22', realizado: act.actividad22 },
                {id: 23, name: 'Actividad 23', realizado: act.actividad23 },
                {id: 24, name: 'Actividad 24', realizado: act.actividad24 },
                {id: 25, name: 'Actividad 25', realizado: act.actividad25 },
                {id: 26, name: 'Actividad 26', realizado: act.actividad26 },
                {id: 27, name: 'Actividad 27', realizado: act.actividad27 },
                {id: 28, name: 'Actividad 28', realizado: act.actividad28 },
                {id: 29, name: 'Actividad 29', realizado: act.actividad29 },
                {id: 30, name: 'Actividad 30', realizado: act.actividad30 },
                {id: 31, name: 'Actividad 31', realizado: act.actividad31 },
                {id: 32, name: 'Actividad 32', realizado: act.actividad32 },
                {id: 33, name: 'Actividad 33', realizado: act.actividad33 },
                {id: 34, name: 'Actividad 34', realizado: act.actividad34 },
                {id: 35, name: 'Actividad 35', realizado: act.actividad35 },
                {id: 36, name: 'Actividad 36', realizado: act.actividad36 },
                {id: 37, name: 'Actividad 37', realizado: act.actividad37 },
                {id: 38, name: 'Actividad 38', realizado: act.actividad38 },
                {id: 39, name: 'Actividad 39', realizado: act.actividad39 },
                {id: 40, name: 'Actividad 40', realizado: act.actividad40 },
                {id: 41, name: 'Actividad 41', realizado: act.actividad41 },
                {id: 42, name: 'Actividad 42', realizado: act.actividad42 },
                {id: 43, name: 'Actividad 43', realizado: act.actividad43 },
                {id: 44, name: 'Actividad 44', realizado: act.actividad44 },
                {id: 45, name: 'Actividad 45', realizado: act.actividad45 },
                {id: 46, name: 'Actividad 46', realizado: act.actividad46 },
                {id: 47, name: 'Actividad 47', realizado: act.actividad47 },
                {id: 48, name: 'Actividad 48', realizado: act.actividad48 }
              ])       
             
          )

      }

      

    return ( 
      
        <div>
        <TopBar />    
        <Container>
            <Router>

                

            
                {
                    bookmain===true &&
                    <ul className="lessonBook">

                  <div className="mapBook" ref={scrl} onScroll={scrollCheck}>
                        <div className="gridscroll">
                            <img src={mapbook} alt="" />

                        </div>

                        <div className="jugador">
                          <p>Lección #1</p> 
                          <i className="far fa-laugh-wink"></i>
                        </div>

                        <div className="iconsActivity">
                          <ul>
                          {
                            actividadeslibro.map((actividad, key) =>
                            // Muestra los iconos segun las actividades completadas y no completadas
                                actividad.realizado===true
                                ? (
                                    <li key={key} className={`actividadIcon${actividad.id}`}>
                                      <Link to={"/primero/leccion/" + actividad.id}>
                                        <i className="fas fa-star"></i>
                                      </Link>
                                    </li>
                                  )
                                
                                : (
                                    <li key={key} className={`actividadIcon${actividad.id}`}>
                                      <Link to={"/primero/leccion/" + actividad.id}>
                                        <i className="fas fa-lock"></i>
                                      </Link>
                                    </li>
                                  )
                                
                                
                            )
                          }
                          </ul>
                        </div>

                   </div>
                    {scrollX !== 0 && (
                        <button
                        className="prev"
                        onClick={() => slide(-235)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                        >
                        <i className="fa fa-angle-left"></i>
                        </button>
                    )}

                    {!scrolEnd && (
                        <button
                        className="next"
                        onClick={() => slide(+235)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                        >
                        <i className="fa fa-angle-right"></i>
                        </button>
                    )}

                    
                    

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