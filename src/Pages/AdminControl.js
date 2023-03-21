import React, { useState } from 'react';
import  '../Styles/AdminControl.css';
import axios from "axios";

function AdminControl() {
  const [inputs, setInputs] = useState({});
  const [isAddAdmin, setIsAddAdmin] = useState(true);
  //const [isDELAdmin, setIsDELAdmin] = useState(false);
  const [inputs, setInputs] = useState({});
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [deleteAdminId, setDeleteAdminId] = useState('');

  const handleAddAdminSubmit = (event) => {
    event.preventDefault();
    // Code to submit add admin form data to the server
    console.log(`Add admin form submitted with data: ${name}, ${lastName}, ${adminId}, ${password}`);
  };

  const handleDeleteAdminSubmit = (event) => {
    event.preventDefault();
    // Code to submit delete admin form data to the server
    console.log(`Delete admin form submitted with data: ${deleteAdminId}`);
  };

  const handleAddAdminClick = () => {
      setIsAddAdmin(true);//
  };

  const handleDeleteAdminClick = () => {
        setIsAddAdmin(false);
  };

  const handleSubmit_admin_bt = async (event) => {
    event.preventDefault();
    // Code to submit add admin form data to the server
    console.log(`Add admin form submitted with data: ${name}, ${lastName}, ${adminId}, ${password}`);
      // Create a new FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', lastName);
    formData.append('sid', adminId);
    formData.append('password', password);
    
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in first!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/'+localStorage.getItem('sid')+'/admin_control/add_admin',
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
      console.log(error);
      alert('Failed to add admin.');
    }
};



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   var formData = new FormData();
  //   formData.append("delete_id", inputs.delete_id); //Dont know
  

  //   var requestOptions = {
  //   method: 'DELETE',
  //   body: formData,
  //   redirect: 'follow'
  //   };
  //   fetch('http://localhost:5000/'+localStorage.getItem('sid')+'/admin_control/delete_admin', requestOptions)
  //   .then(response => response.json())
  // }


  return (
    <div className='container-groub-AdminControl'>
      {isAddAdmin ? (
        <form className='Container-ADDAdmin'  onSubmit={handleAddAdminSubmit}>
            <h1>Admin Manage</h1>
            <div className='top-btn'>
                <button className=''  id='addBTN' onClick={handleAddAdminClick}>Add Admin</button>
                <button className=''  id='delBTN' onClick={handleDeleteAdminClick} >Delete Admin</button>
            </div>
            <div className='form-control-Log-In'>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div className='form-control-AddAdmin'>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
            </div>
            <div className='form-control-AddAdmin'>
                <label>
                    Admin ID:
                    <input type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} />
                </label>
            </div>
            <div className='form-control-AddAdmin'>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
          <button className='Add-Admin' type="submit" onClick={handleSubmit_admin_bt}>Add Admin</button>
        </form>
      ) : (
        <form className='Container-DELAdmin' onSubmit={handleDeleteAdminSubmit}>
            <h1>Admin Manage</h1>
            <div className='top-btn'>
                <button id='addBTN' onClick={handleAddAdminClick} >Add Admin</button>
                <button id='delBTN'  onClick={handleDeleteAdminClick} >Delete Admin</button>
            </div>
            <div className='form-control-AddAdmin'>
                <label>
                    Admin ID:
                    <input type="text" value={inputs.delete_id} onChange={(e) => setDeleteAdminId(e.target.value)} />
                </label>
            </div>
          {/* <button className='Log-in-btn' type="submit" onClick={handleSubmit}>Delete Admin</button> */}
        </form>
      )}
    </div>
  );
}

export default AdminControl;