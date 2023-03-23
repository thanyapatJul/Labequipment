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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { loadUser_parth } from '../function/function';



function Modal_popup({ id, name,title, type, status, department, year, location, image, category,studentid ,returndate }) {
  const [show, setShow] = useState(false);
  const MySwal = withReactContent(Swal)
  const [isChecked, setIsChecked] = useState({
    name: false,
    year: false,
    department: false
  });

  const [loadUserData, setloadUserData] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheckboxChange = () => setIsChecked(!isChecked);
  const [new_status_Availble, setNew_status_Availble] = useState('Available');
  const [new_status_Unavailable, setNew_status_Unavailable] = useState('Unavailable');
  
  // const [name, setName] = useState('');
  // const [Lastname, setLastname] = useState('');
  // const [year, setYear] = useState('');
  // const [department, setDepartment] = useState('');
  
  // const [name_Avaliable, setName_Avaliable] = useState('');
  // const [year_Avaliable, setYear_Avaliable] = useState('');
  // const [department_Avaliable, setDepartment_Avaliable] = useState('');

  const [sidInputValue, setSidInputValue] = useState('');
  const [sidInputnow, setSidInputnow] = useState('');
  const [name_Unaliable, setName_Unaliable] = useState('');
  const [year_Unaliable, setYear_Unaliable] = useState('');
  const [department_Unaliable, setDepartment_Unaliable] = useState('');

  const [borrowDate_Unaliable, setBorrowDate_Unaliable] = useState('');
  const [returnDate_Unaliable, setReturnDate_Unaliable] = useState('');

  
  // JavaScript function to handle form submission
  const handleresetid = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setSidInputnow('');
      setName_Unaliable('');
      setYear_Unaliable('');
      setDepartment_Unaliable('')}
  }

  function handleBorrowDateChange(event) {
    setBorrowDate_Unaliable(event.target.value);
    console.log('Borrow Date:', borrowDate_Unaliable);
  }

  function handleReturnDateChange(event) {
    setReturnDate_Unaliable(event.target.value);
    console.log('Return Date:', returnDate_Unaliable);
  }

  function Inputnow(event) {
    setSidInputnow(event.target.value);
    console.log('SidInputnow:', sidInputnow);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSidInputValue(event.target.value);
    setSidInputnow(sidInputValue)
    console.log(sidInputValue);

    // Submit Student Id 
    const formData = new FormData();
    formData.append('sid', sidInputValue);
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Please log in first!');
      return;
    }

    loadUser_parth(formData)
      .then((res) => {
        console.log(res.data);
        MySwal.fire({
          // title: "User find",
          html: <i>{res.data[0]["msg"]}</i>,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(
          res.data[0]["Name"],
          res.data[0]["major"],
          res.data[0]["year"]
        );
        setName_Unaliable(res.data[0]["Name"]);
        setDepartment_Unaliable(res.data[0]["major"]);
        setYear_Unaliable(res.data[0]["year"]);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          MySwal.fire({
            title: <i> {err.response.data.msg}</i>,
            icon: "error",
          });
          return;
        }
        
      });

    // try {
    //   const response = await axios.post("https://backend-sql-yypd53ub4q-et.a.run.app/sid", formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    //     },
    //   });

    //  console.log(response.data[0]["Name"],response.data[0]["major"],response.data[0]["year"])
    //  setName_Unaliable(response.data[0]["Name"])
    //  setDepartment_Unaliable(response.data[0]["major"])
    //  setYear_Unaliable(response.data[0]["year"])

    //   } catch (error) {
    //     if (error.response.status === 401) {
    //       alert('Please log in first!');
    //       return;
    //     } else if (error.response.data.msg) {
    //       alert(`Failed to add admin. ${error.response.data.msg}`);
    //       return;
    //     }
    //     alert('Failed to add admin.');
    //   }

    }

  const handleAvailble = async (event) => {
      event.preventDefault();
      console.log(status);
      
      const token = localStorage.getItem('token');
      // Submit 
      const formData = new FormData();
      formData.append('status', new_status_Availble);
      // formData.append('title', title);
      formData.append('eqm_id', id);
      formData.append('s_id', studentid);

      // formData.append('type', type);
      // formData.append('category', category);
      // formData.append('location', location);
      console.log(new_status_Unavailable,studentid,id); // will output "Available" to the console

      if (!token) {
        alert('Please log in first!');
        return;
      }
  
      try {
        const response = await axios.put(
          'https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/admin_equipment',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
            },
          }
        );
        MySwal.fire({ html: <i>{response.data.msg}</i>,icon: "success",showConfirmButton: false,timer: 1000,})
      } catch (error) {
        if (error.response.status === 401) {
          alert('Please log in first!');
          return;
        } else if (error.response.data.msg) {
          alert(`No Response data. ${error.response.data.msg}`);
          return;
        }
        alert("Failed to submit.");
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
  }

  const handleUnvailble = async (event) => {
      event.preventDefault();
      console.log(status);
      
      const token = localStorage.getItem('token');
      // Submit 
      const formData = new FormData();
      formData.append('status', new_status_Unavailable);
      formData.append('eqm_id', id);
      formData.append('s_id', sidInputnow);
      formData.append('borrow_id', borrowDate_Unaliable);
      formData.append('return_id', returnDate_Unaliable);
      formData.append('admin_id', localStorage.getItem('sid'));
      
      console.log(new_status_Unavailable,sidInputnow,id,borrowDate_Unaliable,returnDate_Unaliable,localStorage.getItem('sid')); // will output "Available" to the console

      if (!token) {
        alert('Please log in first!');
        return;
      }
  
      try {
        const response = await axios.put(
          'https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/admin_equipment',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
            },
          }
        );
        MySwal.fire({ html: <i>{response.data.msg}</i>,icon: "success",showConfirmButton: false,timer: 1000,})
      } catch (error) {
        if (error.response.status === 401) {
          alert('Please log in first!');
          return;
        } 
        else if (error.response.status === 404) {
          MySwal.fire({ html: <i>{error.response.data.msg}</i>,icon: "error",showConfirmButton: false,timer: 1000,})
          // alert(error.response.data.msg);
          return;
        }
        else if (error.response.data.msg) {
          alert(`No Response data. ${error.response.data.msg}`);
          return;
        }
        alert("Failed to submit.");
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setShow(false)
        console.log(id)
        delteItem(id)
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success',
        // )
        setTimeout(() => {
          window.location.reload();
        }, 1000); // delay of 1 seconds
      }
    })
  

    // const result = window.confirm('Are you sure you want to delete?');
    // if (result) {
    //   console.log('User clicked Delete');
    //   setShow(false)
    //   console.log(id)
    //   delteItem(id)
    //   .then(res=>{
    //     console.log(res.data)
    //     window.location.reload();
    //     })
    //   .catch(err=>{
    //     console.log(err)
    //     })
        
    // } else {
    //   console.log('User clicked Cancel');
    //   setIsDeleting(false);
    // }
    
  // const handleDelete=()=>{
  //   setShow(false)
  //   console.log(id)
  //   delteItem(id)
  //   .then(res=>{
  //     console.log(res.data)
  //     MySwal.fire({
  //       html: <i>Delete complete!</i>,
  //       icon: 'success'
  //   }).then(() => {
  //       window.location.reload();
  //   });
  //   }).catch(err=>{
  //     console.log(err)
  //     MySwal.fire({
  //       html: <i>Delete complete!</i>,
  //       icon: 'fail'
  //   })
  //   })
  }

  return (
    <>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
      <Button variant="primary" onClick={handleShow}>
        More Detail
      </Button>

      <Modal className = "modalcard" show={show} onHide={handleClose}>
        <Modal.Body className = "modalbody" >
        <Modal.Header closeButton>
          <Modal.Title>Item Detail</Modal.Title>
        </Modal.Header>

          <Form className='modalinbody Form-Container'>
            <div>
                <Form.Group 
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Item Title : {title}</Form.Label>
                {/* <Form.Control type="text" name="dob" 
                placeholder="Insert Item Title" /> */}

                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea2"
                >
                <Form.Label>Item Id : {id}</Form.Label>

                {/* <Form.Control type="text" name="dob" placeholder="Insert ItemId " /> */}
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
                {/* <Form.Control type="text" name="dob" placeholder="Insert Type" /> */}

                </Form.Group>

                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea2">
                <Form.Label>Category : {category}</Form.Label>

                {/* <Form.Control type="text" name="dob" placeholder=" Insert Category" /> */}
                </Form.Group>

                {isChecked ?( //IsChecked means Avaliable 

                <div className='embedded-text-container'>
                    <NameGroup value={name}  />
                    {/* <LastnameGroup value={name}/> */}
                    <YearGroup value={year} />
                    <DepartmentGroup value={department} />
                    {/* <BorrowDateGroup value={borrowDate} onChange={setBorrowDate} />
                    <ReturnDateGroup value={returnDate} onChange={setReturnDate} /> */}

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Back
                        </Button>
                        <Button variant="primary" onClick={handleAvailble}>
                          Confirm
                        </Button>
                      </Modal.Footer>
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
                    <BorrowDateGroup value={borrowDate_Unaliable} onChange={handleBorrowDateChange} />
                    <ReturnDateGroup value={returnDate_Unaliable} onChange={handleReturnDateChange} />
                    
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Back
                    </Button>
                    <Button variant="primary" disabled={status == new_status_Unavailable} onClick={handleUnvailble}>
                      Confirm
                    </Button>
                    </Modal.Footer>
                  </div>
                  )}
            </div>
          </Form>
        </Modal.Body>
        
        
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