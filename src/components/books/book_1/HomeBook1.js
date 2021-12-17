import React, {useState, useContext, useRef, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BookContext from '../../../context/books/bookContex';
import AuthContext from '../../../context/autentication/authContext';
import TopBar from '../../layout/TopBar';
import Lesson from './Lessons';
import mapbook from '../../../resources/img/mapbook-primero.jpg';

import { gsap } from "gsap";


const HomeBook1 = (props) => {

  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {userdata, usuario, usuarioAutenticado } = authContext;

  const [render, setRender] = useState(false);

  const bookContext = useContext(BookContext);
  const {bookmain, actividades, obtenerActivity, activityRealizadas, actividadeslibro} = bookContext;

  

  useEffect(() => {
    usuarioAutenticado();
    setRender(true);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  useEffect(() => {  
    obtenerActivity(userdata._id);  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [render, usuario]) 
 
    
    useEffect(() => {
      
      activityRealizadas(); 
      // console.log(`ACTIVIDADES ${JSON.stringify(actividades)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actividades]) 

  



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


  

    


    return ( 
      
        <div>
        <TopBar />    
        <div>
            <Router >
                           
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
                                      <Link 
                                        to={{
                                          pathname:`/primero/leccion/${actividad.id}`,
                                          state: actividadeslibro
                                        }}
                                      >
                                        <i className="fas fa-star"></i>
                                      </Link>
                                    </li> 
                                  )
                                
                                : (
                                    <li key={key} className={`actividadIcon${actividad.id}`}>
                                      <Link 
                                        to={{
                                          pathname:`/primero/leccion/${actividad.id}`,
                                          state: actividadeslibro
                                        }}
                                      >
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
                        onClick={() => slide(-245)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                        >
                        <i className="fa fa-angle-left"></i>
                        </button>
                    )}

                    {!scrolEnd && (
                        <button
                        className="next"
                        onClick={() => slide(+245)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                        >
                        <i className="fa fa-angle-right"></i>
                        </button>
                    )}

                    
                  
                    </ul>

                }

                <Route path="/primero/leccion/:id">
                  <Lesson {...props} actividades={actividades} />
                </Route>
            </Router>
            
        </div>
        

        </div>

     );



}
 
export default HomeBook1;