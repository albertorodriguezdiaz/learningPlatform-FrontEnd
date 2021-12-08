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


      const activityRealizadas = ()=>{

        actividades.map(act =>
          act.usuario===usuario._id &&
            guardarActividadeslibro([
              ...actividadeslibro,
              {id: 1, name: 'Lección 1', act1: act.actividad1, act2: act.actividad2, act3: act.actividad3 },
              {id: 2, name: 'Lección 2', act1: act.actividad4, act2: act.actividad5, act3: act.actividad6 },
              {id: 3, name: 'Lección 3', act1: act.actividad7, act2: act.actividad8, act3: act.actividad9 },
              {id: 4, name: 'Lección 4', act1: act.actividad10, act2: act.actividad11, act3: act.actividad12 },
              {id: 5, name: 'Lección 5', act1: act.actividad13, act2: act.actividad14, act3: act.actividad15 },
              {id: 6, name: 'Lección 6', act1: act.actividad16, act2: act.actividad17, act3: act.actividad18 },
              {id: 7, name: 'Lección 7', act1: act.actividad19, act2: act.actividad20, act3: act.actividad21 },
              {id: 8, name: 'Lección 8', act1: act.actividad22, act2: act.actividad23, act3: act.actividad24 },
              {id: 9, name: 'Lección 9', act1: act.actividad25, act2: act.actividad26, act3: act.actividad27 },
              {id: 10, name: 'Lección 10', act1: act.actividad28, act2: act.actividad29, act3: act.actividad30 },
              {id: 11, name: 'Lección 11', act1: act.actividad31, act2: act.actividad32, act3: act.actividad33 },
              {id: 12, name: 'Lección 12', act1: act.actividad34, act2: act.actividad35, act3: act.actividad36 },
              {id: 13, name: 'Lección 13', act1: act.actividad37, act2: act.actividad38, act3: act.actividad39 },
              {id: 14, name: 'Lección 14', act1: act.actividad40, act2: act.actividad41, act3: act.actividad42 },
              {id: 15, name: 'Lección 15', act1: act.actividad43, act2: act.actividad44, act3: act.actividad45 },
              {id: 16, name: 'Lección 16', act1: act.actividad46, act2: act.actividad47, act3: act.actividad48 }
              
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
                                actividad.act1===true && actividad.act2===true && actividad.act3===true
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