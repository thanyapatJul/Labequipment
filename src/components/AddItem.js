import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddItem } from '../function/function';


function Modal_popup() {
  const [show, setShow] = useState(false);
  
  const [inputs, setInputs] = useState({});


  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
  }

  const handleSubmit=()=>{
    var formdata = new FormData();
    formdata.append("title", inputs.title);
    formdata.append("eqm_id", inputs.eqm_id);
    formdata.append("eqm_type", inputs.eqm_type);
    formdata.append("category", inputs.category);
    formdata.append("location", inputs.location);
    console.log(formdata)
    AddItem(formdata)
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group 
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Item Title</Form.Label>
              <Form.Control type="text" name="title" 
              placeholder="Insert Item Title" value={inputs.title || ""} onChange={handleChange}/>

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Item Id</Form.Label>
              <Form.Control type="text" name="eqm_id" placeholder="Insert ItemId " value={inputs.eqm_id || ""} onChange={handleChange}/>

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" name="eqm_type" placeholder="Insert Type" value={inputs.eqm_type || ""} onChange={handleChange} />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" placeholder=" Insert Category" value={inputs.category || ""} onChange={handleChange} />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="location" placeholder="Insert Location" value={inputs.location ||""} onChange={handleChange} />

            </Form.Group>
            <Form.Group 
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
            >

            <Form.Label>Item Image</Form.Label>
                <Form.Control type="file" name="image" accept="image/*" value={inputs.value} onChange={handleChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_popup;