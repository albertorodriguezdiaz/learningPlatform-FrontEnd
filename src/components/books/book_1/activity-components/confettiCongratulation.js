import React,{useState, useRef, useEffect} from 'react';
import Confetti from "react-confetti";
import Calping from "../../../../resources/sounds/clapping.mp3"


const ConfettiCongratulation = (props) => {
    

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [show, setShow] = useState(false);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth((window.innerWidth-50));
        // setWidth(confettiRef.current.clientWidth);
        playSound();
    }, [])

   

    const handleShow = toggle => {
        setShow(toggle);
    }

    const handleClick = () =>{
        window.location.href = "/primero";
    }

    const playSound = () =>{
        new Audio(Calping).play();
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
                    <div className="js-container container containerConfetti"></div>
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