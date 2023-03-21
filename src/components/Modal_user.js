import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function Modal_popup({ id, title, type, status, department, year, location, image, category,studentid }) {
  const [inputs,setInputs]=useState([])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
}
  const [show, setShow] = useState(false);

  const navigate=useNavigate()

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const Islogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login')
    } else {
      handleShow();
    }
  };
  return (
    <>
      <Button variant="primary" onClick={Islogin}>
        Borrow
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>id = {id}</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name='email'
                type="email"
                placeholder="StudentID@kmutnb.ac.th"
                value={inputs.email || ""} 
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Borrow date</Form.Label>
              <Form.Control 
              type="date" 
              name="borrowdate"
              placeholder="Date " 
              value={inputs.borrowdate || ""} 
              onChange={handleChange}/>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sent request
          </Button >
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_popup;