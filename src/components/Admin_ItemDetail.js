import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
// ------------for test
import '../Styles/AdminEquipment.css';
// ------------for test

function Modal_popup({ id, title, type, status, department, year, location, image, category,studentid ,name}) {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <>
      <Button variant="primary" onClick={handleClose}>
        Delete
      </Button>
      <Button variant="primary" onClick={handleShow}>
        More Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='Form-Container'>
            <div>
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
                <Form.Group className="mb-3" id='check-box-ItemDetail' controlId="exampleForm.ControlCheckbox1">
                    <Form.Label>Status:</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Available" 
                        checked={isChecked}
                        onChange={handleCheckboxChange} 
                    />
                    <Form.Check
                        type="checkbox"
                        label="Unavailable" 
                        checked={!isChecked}
                        onChange={handleCheckboxChange} 
                    />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
                >
                <Form.Label>Type : {type}</Form.Label>
                <Form.Control type="text" name="dob" placeholder="Insert Type" />

                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
                >
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" name="dob" placeholder=" Insert Category" />

                </Form.Group>
                {isChecked ?( //IsChecked means Avaliable 
                  <div className='embedded-text-container'>
                    <Form.Group
                    className="mb-3"
                    id='embedded-text-Ava'
                    controlId="exampleForm.ControlTextarea2"
                    >
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" name="dob" placeholder=" Insert First Name" />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    id='embedded-text-Ava'
                    controlId="exampleForm.ControlTextarea2"
                    >
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" name="dob" placeholder=" Insert Last Name" />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    id='embedded-text-Ava'
                    controlId="exampleForm.ControlTextarea2"
                    >
                        <Form.Label>Year: </Form.Label>
                        <Form.Control type="text" name="dob" placeholder=" Insert Year" />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    id='embedded-text-Ava'
                    controlId="exampleForm.ControlTextarea2"
                    >
                        <Form.Label>Student ID: </Form.Label>
                        <Form.Control type="text" name="dob" placeholder=" Insert SID" />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    id='embedded-text-Ava'
                    controlId="exampleForm.ControlTextarea2"
                    >
                        <Form.Label>Major: </Form.Label>
                        <Form.Control type="text" name="dob" placeholder=" Insert Major" />
                    </Form.Group>
                  </div>
                ):(//!IsChecked means Unavaliable 
                  <div className='embedded-text-container'>
                      <Form.Group
                      className="mb-3"
                      id='embedded-text'
                      controlId="exampleForm.ControlTextarea2"
                      >
                          <Form.Label>Name: </Form.Label>
                          <p>{name}</p>
                      </Form.Group>
                      <Form.Group
                      className="mb-3"
                      id='embedded-text'
                      controlId="exampleForm.ControlTextarea2"
                      >
                          <Form.Label>Year: </Form.Label>
                          <p>{year}</p>
                      </Form.Group>
                      <Form.Group
                      className="mb-3"
                      id='embedded-text'
                      controlId="exampleForm.ControlTextarea2"
                      >
                          <Form.Label>Student ID: </Form.Label>
                          <p>{studentid}</p>
                      </Form.Group>
                      <Form.Group
                      className="mb-3"
                      id='embedded-text'
                      controlId="exampleForm.ControlTextarea2"
                      >
                          <Form.Label>Major: </Form.Label>
                          <p>{department}</p>
                      </Form.Group>
                  </div>
                )}
              <Form.Group 
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea2"
              >
                  <Form.Label>Item Image</Form.Label>
                  <Form.Control type="file" name="image" accept="image/*" />
              </Form.Group>
            </div>
            {/* <div>
                <img src={image} alt=""/>
            </div> */}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}   

export default Modal_popup;