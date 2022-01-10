import React, { useState, useContext, useRef, useEffect} from 'react';
import BookContext from '../../context/books/bookContex';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { gsap } from "gsap";
import TopBar from '../layout/TopBar';


import mapbookGeneral from '../../resources/img/mapbook-general.jpg';
import star from '../../resources/img/icono-estrella-libros.png'


const HomeAlumno = (props) => {

    let usuario = props.usuario;
    
    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { bookuser, books, obtenerLibros, obtenerBooksSoyVida } = bookContext;


    useEffect(() => {
        obtenerBooksSoyVida();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    useEffect(() => {
         obtenerLibros(usuario);
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [books])



    
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
    
    <div className='homeBook'>
        <TopBar />  
        
    <Container>

    <ul className="lessonBook">

    <div className="mapBook" ref={scrl} onScroll={scrollCheck}>
        <div className="gridscroll">
            <img src={mapbookGeneral} alt="" />
        </div>


        <div className="iconsActivity">
        <ul>

        {
                    bookuser.map( (r, key) => 
                        books.map( (e) =>
                        // Compara el Id de libros con el id de libros de usuarios, para mostrar los que tiene activos
                            e._id===r.libro                                
                            // Mostramos el link con el nombre del libro
                            && (
                                <li key={key} className={`iconHomeBook icon${e.nombre}`}>
                                    <Link 
                                        // Pasamos el id del libro por el Link
                                        to={{
                                            pathname:  "/" + e.nombre.toLowerCase()
                                        }}
                                    >
                                        <img src={star} alt="3 Estrellas" /> 
                                    </Link>
                                </li>
                                )
                        )
                    )
            }              

        </ul>
        </div>

    </div>
    {scrollX !== 0 && (
        <button
        className="prev"
        onClick={() => slide(-350)}
        onMouseEnter={(e) => anim(e)}
        onMouseLeave={(e) => anim2(e)}
        >
        <i className="fa fa-angle-left"></i>
        </button>
    )}

    {!scrolEnd && (
        <button
        className="next"
        onClick={() => slide(+350)}
        onMouseEnter={(e) => anim(e)}
        onMouseLeave={(e) => anim2(e)}
        >
        <i className="fa fa-angle-right"></i>
        </button>
    )}


    </ul>
    </Container>


     </div>

    );
}

export default HomeAlumno;



  

