import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

function Modal_popup({ id, title, type, status, department, year, location, image, category,studentid }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <Button variant="primary" onClick={handleShow} style={{ fontSize: "22px" }} className="card__btn Kanit">
      Return
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>id = {id}</p>
            <p>Status = {status}</p>
          <Form>
            <Form.Group 
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Borrow date</Form.Label>
              <Form.Control type="date" name="dob" 
              placeholder="Date of Birth" />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Return date</Form.Label>
              <Form.Control type="date" name="dob" placeholder="Date of Birth" />

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Sent Return
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_popup;