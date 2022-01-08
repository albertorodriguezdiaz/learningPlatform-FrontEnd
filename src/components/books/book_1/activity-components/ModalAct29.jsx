import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import ErrorSound from "../../../../resources/sounds/error.mp3"
import CorrectSound from "../../../../resources/sounds/correct.mp3"


const MyModal = (props) => {

    const playAudioError = () => {
        new Audio(ErrorSound).play();
        
    }
    const playAudioCorrect = () => {
        new Audio(CorrectSound).play();
        props.onHide();
    }
    const {dataPregunta} = props;

    const respuesta = dataPregunta.respuesta;
    
    return (
        <Modal
          {...props}
          size="sm"
          className="centerActivity"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Pregunta Número {dataPregunta.id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3>{dataPregunta.pregunta}</h3>
          <ul>
              <li><Button onClick={
                  respuesta===1
                  ? playAudioCorrect
                  : playAudioError
                  }>{dataPregunta.p1}</Button></li>
              <li><Button onClick={
                  respuesta===2
                  ? playAudioCorrect
                  : playAudioError
                  }>{dataPregunta.p2}</Button></li>
              <li><Button onClick={
                  respuesta===3
                  ? playAudioCorrect
                  : playAudioError
                  }>{dataPregunta.p3}</Button></li>
          </ul>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      );
}
 
export default MyModal;