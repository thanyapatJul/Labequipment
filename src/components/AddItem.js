import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddItem } from '../function/function';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Modal_popup() {
  const [show, setShow] = useState(false);
  const MySwal = withReactContent(Swal)
  const [inputs, setInputs] = useState({});


  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
  }

  // const handleSubmit=()=>{
  //   var formdata = new FormData();
  //   formdata.append("title", inputs.title);
  //   formdata.append("eqm_id", inputs.eqm_id);
  //   formdata.append("eqm_type", inputs.eqm_type);
  //   formdata.append("category", inputs.category);
  //   formdata.append("location", inputs.location);
  //   console.log(formdata)

  const handleSubmit=()=>{
    var formdata = new FormData();
    const fileInput = document.getElementById("image-input");
    const imageFile = fileInput.files[0];

    formdata.append("title", inputs.title);
    formdata.append("eqm_id", inputs.eqm_id);
    formdata.append("eqm_type", inputs.eqm_type);
    formdata.append("category", inputs.category);
    formdata.append("location", inputs.location);
    formdata.append("image", imageFile); 
    console.log(formdata)

    AddItem(formdata)
    .then((res) => {
      console.log(res.data);
      MySwal.fire({
        icon:
          res.data.msg == "This equipment added successfully."
            ? "success"
            : "error",
        title: res.data.msg,
      }).then(() => {
        if (res.data.msg == "This equipment added successfully.") {
          window.location.reload();
        }
      })
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 500) {
            MySwal.fire({
            html: <i> {err.response.data.msg}</i>,
            icon: "fail",})
          return;
        }
      window.location.reload();
    });
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
                <Form.Control  id="image-input" type="file" name="image" accept="image/*" value={inputs.value} onChange={handleChange}/>
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