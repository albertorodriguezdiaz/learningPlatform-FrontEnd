import React,{useState, useRef, useEffect} from 'react';
import Confetti from "react-confetti";
import { Link, Router, useHistory } from 'react-router-dom';


const ConfettiCongratulation = (props) => {

    const history = useHistory();

    const [cambios, setcambios] = useState(false);

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [show, setShow] = useState(false);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
    }, [])

    useEffect(() => {
        
    }, [cambios])

    const handleShow = toggle => {
        setShow(toggle);
    }

    const handleClick = () =>{
        setcambios(true);
        history.push("/primero/");
    }


    return ( 
        <div className="congratulationPopup">
            <div
                    onMouseEnter={() => handleShow(true)}
                    onMouseLeave={() => handleShow(false)}
                    className="confetti-wrap"
                    ref={confettiRef}
            >
            <div className="containerCongrat">
                    <div className="js-container container"></div>
                    <div className='contenedorCongrat'>
                        <div className="checkmark-circle">
                            <div className="background"></div>
                            <div className="checkmark draw"></div>
                        </div>
                        <h1>Felcitaciones!</h1>
                        <p>Actividad completada. ¡Bien hecho! </p>
                          <button onClick={handleClick} className="submit-btn">Continuar</button>
                    </div>  
            </div>
            </div>
                <Confetti
                    recycle={show}
                    numberOfPieces={80}
                    width={width}
                    height={height}
                />
        </div>
     );
}
 
export default ConfettiCongratulation;