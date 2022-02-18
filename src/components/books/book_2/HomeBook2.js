import React, {useState, useContext, useRef, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BookContext from '../../../context/books/bookContex';
import AuthContext from '../../../context/autentication/authContext';
import TopBar from '../../layout/TopBar';
import Lesson from './Lessons';
import mapbook from '../../../resources/img/mapbook-primero.jpg';

import imgAvatar from '../../../resources/img/img-avatar.png'
import foto from '../../../resources/img/foto1.png'

import star0 from '../../../resources/img/0star.png'
import star1 from '../../../resources/img/1star.png'
import star2 from '../../../resources/img/2star.png'
import star2a from '../../../resources/img/2star-a.png'
import star2b from '../../../resources/img/2star-b.png'
import star3 from '../../../resources/img/3star.png'

import { gsap } from "gsap";


const HomeBook1 = (props) => {


  // Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {userdata, usuario, usuarioAutenticado } = authContext;

  const [render, setRender] = useState(false);

 

  const bookContext = useContext(BookContext);
  const { bookmain, books, actividades, obtenerActivity, activityRealizadas, 
          actividadeslibro, obtenerBooksSoyVida} = bookContext;

  let actTotal = actividadesTotal();

  useEffect(() => {
    usuarioAutenticado();
    setRender(true);   
    obtenerBooksSoyVida();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  useEffect(() => {  
    let libroActual = buscarLibroActual();

    if (libroActual.length>0) {
      obtenerActivity(userdata._id, libroActual);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render, books, usuario]) 
 

  useEffect(() => {
    activityRealizadas(); 
    actividadesTotal(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actividades]) 

  
function buscarLibroActual(){

  if(books){
    let libroActual = props.location.pathname.split('/');
    let libroActualEncontrado = '';

    books.forEach(e =>{
      if(e.nombre.toLowerCase()===libroActual[1]) {
        libroActualEncontrado = e._id;
      } 
    })
    

    return libroActualEncontrado;
  }
}


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


  
  function actividadesTotal(){
      let puntos = 0;

      actividadeslibro.forEach(e => {
          e.act1===true && puntos++
          e.act2===true && puntos++
          e.act3===true && puntos++
      });

      return puntos;

    }
    


    return (  
      
        <div className='bgHomeBook'>
        <TopBar {...props} actTotal={actTotal} />    
        <div>
          
            <Router >
                           
                {
                    bookmain===true &&
                    <Container>
                    <ul className="lessonBook">

                  <div className="mapBook" ref={scrl} onScroll={scrollCheck}>
                        <div className="gridscroll">
                            <img src={mapbook} alt="" />

                        </div>

                        <div className="jugador">
                          <img className='imgFotoTop' src={foto} alt="foto" />
                          <img className='imgMarcoTop' src={imgAvatar} alt="marco" />
                        </div>

                        <div className="iconsActivity">
                          <ul>
                            
                          {
                            actividadeslibro.map((actividad, key) =>
                            // Muestra los iconos segun las actividades completadas y no completadas
                                
                                    <li key={key} className={`actividadIcon${actividad.id}`}>
                                      <Link 
                                        to={{
                                          pathname:`/segundo/leccion/${actividad.id}`,
                                          state: actividadeslibro
                                        }}
                                      >

                                      { 
                                      // Mostramos las estrellas segun las actividades completadas en el mapa
                                      actividad.act1===true && actividad.act2===true && actividad.act3===true 
                                      ? <img src={star3} alt="3 Estrellas" /> 
                                      : actividad.act1===true && actividad.act2===true
                                        ?<img src={star2} alt="2 Estrellas" /> 
                                        : actividad.act1===true && actividad.act3===true
                                          ?<img src={star2b} alt="2 Estrellas" /> 
                                          : actividad.act2===true && actividad.act3===true
                                            ?<img src={star2a} alt="2 Estrellas" /> 
                                            : actividad.act1===true || actividad.act2===true || actividad.act3===true
                                              ? <img src={star1} alt="1 Estrella" /> 
                                              : <img src={star0} alt="0 Estrella" /> 
                                      }
                                        
                                      </Link>
                                    </li> 
                            )
                          }
                          </ul>
                        </div>

                   </div>
                    {scrollX !== 0 && (
                        <button
                        className="prev"
                        onClick={() => slide(-300)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                        >
                        <i className="fa fa-angle-left"></i>
                        </button>
                    )}

                    {!scrolEnd && (
                        <button
                        className="next"
                        onClick={() => slide(+300)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                        >
                        <i className="fa fa-angle-right"></i>
                        </button>
                    )}

                    
                    </ul>
                  </Container>

                }

                <Route path="/segundo/leccion/:id">
                  <Lesson {...props} actividades={actividades}  />
                </Route>
            </Router>
            
        </div>
        
        </div>

     );



}
 
export default HomeBook1;