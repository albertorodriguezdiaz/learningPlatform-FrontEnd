import React from 'react'
import { Modal, Button } from 'react-bootstrap';


const MyModal = (props) => {

    const {titulo, puntaje, texto} = props;
    return (
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {titulo}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{texto}</h4>
            <p>
              Tu puntaje es: {puntaje}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      );
}
 
export default MyModal;