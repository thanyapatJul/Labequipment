import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function Modal_popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Form.Control type="text" name="dob" 
              placeholder="Insert Item Title" />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Item Id</Form.Label>
              <Form.Control type="text" name="dob" placeholder="Insert ItemId " />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" name="dob" placeholder="Insert Type" />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="dob" placeholder=" Insert Category" />

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="dob" placeholder="Insert Location" />

            </Form.Group>
            <Form.Group 
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
            >
                <Form.Label>Item Image</Form.Label>
                <Form.Control type="file" name="image" accept="image/*" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_popup;