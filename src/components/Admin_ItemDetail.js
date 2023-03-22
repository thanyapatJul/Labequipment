import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
// ------------for test
import '../Styles/AdminEquipment.css';
// ------------for test

import {delteItem} from '../function/function'
import axios from "axios";


function Modal_popup({ id, name,title, type, status, department, year, location, image, category,studentid ,returndate }) {
  const [show, setShow] = useState(false);
  
  const [isChecked, setIsChecked] = useState({
    name: false,
    year: false,
    department: false
  });


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheckboxChange = () => setIsChecked(!isChecked);

  const [sid, setSid] = useState('');
  const [sidInputValue, setSidInputValue] = useState('');
  // const [name, setName] = useState('');
  // const [Lastname, setLastname] = useState('');
  // const [year, setYear] = useState('');
  // const [department, setDepartment] = useState('');
  
  // const [name_Avaliable, setName_Avaliable] = useState('');
  // const [year_Avaliable, setYear_Avaliable] = useState('');
  // const [department_Avaliable, setDepartment_Avaliable] = useState('');


  const [name_Unaliable, setName_Unaliable] = useState('');
  const [year_Unaliable, setYear_Unaliable] = useState('');
  const [department_Unaliable, setDepartment_Unaliable] = useState('');

  const [borrowDate_Unaliable, setBorrowDate_Unaliable] = useState('');
  const [returnDate_Unaliable, setReturnDate_Unaliable] = useState('');

  
 
  // JavaScript function to handle form submission
  const handleresetid = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setName_Unaliable('');
      setYear_Unaliable('')
      setDepartment_Unaliable('')}
  }

  // const handleInputChange = (event) => {
  //   setSidInputValue(event.target.value);
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSidInputValue(event.target.value);
    console.log(sidInputValue);

    // Submit Student Id 
    const formData = new FormData();
    formData.append('sid', sidInputValue);
    
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Please log in first!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/'+localStorage.getItem('sid')+'/admin_equipment',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
          },
        }
      );
      alert(response.data.msg);
    } catch (error) {
      if (error.response.status === 401) {
        alert('Please log in first!');
        return;
      } else if (error.response.data.msg) {
        alert(`Failed to add admin. ${error.response.data.msg}`);
        return;
      }
      alert('Failed to add admin.');
    }
    
    /// Mock Get Data If Click Submit_bt
    if (!isChecked) {
      console.log(type);
      setName_Unaliable('Sopon');
      setYear_Unaliable('4')
      setDepartment_Unaliable('teacher')
      setBorrowDate_Unaliable("2023-05-22")}
  }

  const handleDelete=()=>{
    setShow(false)
    console.log(id)
    delteItem(id)
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
      <Button variant="danger" onClick={handleDelete}>
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
                <Form.Label>Item Title : {title}</Form.Label>
                <Form.Control type="text" name="dob" 
                placeholder="Insert Item Title" />

                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
                >
                <Form.Label>Item Id : {id}</Form.Label>

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

                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea2">
                <Form.Label>Category</Form.Label>

                <Form.Control type="text" name="dob" placeholder=" Insert Category" />
                </Form.Group>

                {isChecked ?( //IsChecked means Avaliable 

                <div className='embedded-text-container'>
                    <NameGroup value={name}  />
                    <LastnameGroup value={name}/>
                    <YearGroup value={year} />
                    <DepartmentGroup value={department} />
                    {/* <BorrowDateGroup value={borrowDate} onChange={setBorrowDate} />
                    <ReturnDateGroup value={returnDate} onChange={setReturnDate} /> */}
                
                </div>
                  

                ):(//!IsChecked means Unavaliable 
                <div className='embedded-text-container'>
                  {/* Label for the input */}
                    <Form.Label style={{ fontWeight: 'bold' }}>Student ID:</Form.Label>
                    <input type="text" value={sidInputValue} onChange={(e) => setSidInputValue(e.target.value)} style={{ 
                      flex: 1, // Take up all available space
                      marginRight: '10px', // Add some space to the right
                      border: '2px solid #ccc', // Add a border
                      borderRadius: '5px', // Rounded corners
                      padding: '5px 10px' // Add some padding
                    }}/>
                    <StudentIdGroup onSubmit={handleSubmit} />
                    <NameGroup value={name_Unaliable} onChange={setName_Unaliable} />
                    {/* <LastnameGroup value={Lastname} onChange={setLastname} /> */}
                    <YearGroup value={year_Unaliable} onChange={setYear_Unaliable} />
                    <DepartmentGroup value={department_Unaliable} onChange={setDepartment_Unaliable} />
                    <BorrowDateGroup value={borrowDate_Unaliable} onChange={setBorrowDate_Unaliable} />
                    <ReturnDateGroup value={returnDate_Unaliable} onChange={setReturnDate_Unaliable} />
                  </div>
                  )}

                  {/*/////////////////////// */}
                  <Form.Group 
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea2"
                  >
                      <Form.Label>Item Image</Form.Label>
                      <Form.Control type="file" name="image" accept="image/*" />
                  </Form.Group>
                  {/* ///////////////////// */}

            </div>
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

  function StudentIdGroup({ value, onChange, onSubmit }) {
    return (
      // <Form.Group className="mb-3" controlId="studentId">
      //   <Form.Label>Student ID:</Form.Label>
      //   <div style={{ display: 'flex' }}>
      //     <Form.Control type="text" name="sid" placeholder="Insert SID" onChange={onChange} />
      //     <Button type="submit" onClick={onSubmit}>Submit</Button>
      //     <Button type="submit" onClick={handleresetid}>reset</Button>
      //   </div>
      // </Form.Group>
      <Form.Group className="mb-3" controlId="studentId">

          <div style={{ display: 'flex', alignItems: 'center' }}>
          
            {/* Input box */}

            
            
            {/* <Form.Control 
              type="text" 
              name="sidInputValue" 
              placeholder="Insert SID" 

              onChange={onChange} 
              style={{ 
                flex: 1, // Take up all available space
                marginRight: '10px', // Add some space to the right
                border: '2px solid #ccc', // Add a border
                borderRadius: '5px', // Rounded corners
                padding: '5px 10px' // Add some padding
              }} 
            /> */}

            {/* Submit button */}
            <Button 
              type="submit" 
              onClick={onSubmit} 
              style={{ 
                backgroundColor: '#007bff', // Blue background color
                color: 'white', // White text color
                border: 'none', // Remove border
                borderRadius: '5px', // Rounded corners
                padding: '5px 10px' // Add some padding
              }}
            >
              Submit
            </Button>

            {/* Reset button */}
            <Button 
              type="button" 
              onClick={handleresetid} 
              style={{ 
                backgroundColor: '#dc3545', // Red background color
                color: 'white', // White text color
                border: 'none', // Remove border
                borderRadius: '5px', // Rounded corners
                padding: '5px 10px', // Add some padding
                marginLeft: '10px' // Add some space to the left
              }}
            >
              Reset
            </Button>
            
          </div>
          
        </Form.Group>
        
    );
  }
  function NameGroup({ value, onChange }) {
    return (
      <Form.Group className="mb-3" controlId="studentName">
        <Form.Label>Name:</Form.Label>
        <p>{value}</p>
      </Form.Group>
    );
  }

  function LastnameGroup({ value, onChange }) {
    return (
      <Form.Group className="mb-3" controlId="studentName">
        <Form.Label>Lastname:</Form.Label>
        <p>{value}</p>
      </Form.Group>
    );
  }
  
  function YearGroup({ value, onChange }) {
    return (
      <Form.Group className="mb-3" controlId="studentYear">
        <Form.Label>Year:</Form.Label>
        <p>{value}</p>
      </Form.Group>
    );
  }
  
  function DepartmentGroup({ value, onChange }) {
    return (
      <Form.Group className="mb-3" controlId="studentDepartment">
        <Form.Label>Department:</Form.Label>
        <p>{value}</p>
      </Form.Group>
    );
  }
  
  function BorrowDateGroup({ value, onChange }) {
    return (
      <Form.Group className="mb-3" controlId="borrowDate">
        <Form.Label>Borrow Date:</Form.Label>
        <Form.Control type="date" name="borrowDate" value={value} onChange={onChange} />
      </Form.Group>
    );
  }
  
  function ReturnDateGroup({ value, onChange }) {
    return (
      <Form.Group className="mb-3" controlId="returnDate">
        <Form.Label>Return Date:</Form.Label>
        <Form.Control type="date" name="returnDate" value={value} onChange={onChange} />
      </Form.Group>
    );
  }
}   

export default Modal_popup;