import React, { useState } from 'react';
import  '../Styles/AdminControl.css';
import axios from "axios";
import { delteAdmin } from '../function/function';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

function AdminControl() {
  
  const [isAddAdmin, setIsAddAdmin] = useState(true);
  //const [isDELAdmin, setIsDELAdmin] = useState(false);
  const MySwal = withReactContent(Swal)
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [deleteId, setDeleteAdminId] = useState('');
  const [depart, setDepart] = useState('');

  const handleAddAdminSubmit = (event) => {
    event.preventDefault();
    // Code to submit add admin form data to the server
    // console.log(`Add admin form submitted with data: ${name}, ${lastName}, ${adminId}, ${password}`);
  };

  const handleDeleteAdminSubmit = (event) => {
    event.preventDefault();
    // Code to submit delete admin form data to the server
    // console.log(`Delete admin form submitted with data: ${deleteId}`);
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
    console.log(`Add admin form submitted with data: ${name}, ${lastName}, ${adminId}, ${password} ,${depart}`);
      // Create a new FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', lastName);
    formData.append('sid', adminId);
    formData.append('password', password);
    formData.append('depart', depart);
    
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
      MySwal.fire({ html: <i>{response.data.msg}</i>,icon: "success",showConfirmButton: false,timer: 1000,})
    } catch (error) {
      if (error.response.status === 401) {
        alert('Please log in first!');
        return;
      } 
      else if (error.response.status === 404) {
        MySwal.fire({ html: <i>{error.response.data.msg}</i>,icon: "error",showConfirmButton: false,timer: 1000,})
        return;
      }
      else if (error.response.data.msg) {
        alert(`Failed to add admin. ${error.response.data.msg}`);
        return;
      }
      alert('Failed to add admin.');
    }
};

const handleSubmit_delete_bt = async (event) => {
  event.preventDefault();

  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please log in first!');
    return;
  }

//   try {
//     const response = await axios.delete(
//       `http://localhost:5000/${localStorage.getItem('sid')}/admin_control/delete_admin/${deleteId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     alert(response.data.msg);
//   } catch (error) {
//     console.log(error);
//     if (error.response.status === 401) {
//       alert('Please log in first!');
//       return;
//     }
//     else {
//       alert('Failed to delete admin.');
//       return;
//     }
//   }
// };

delteAdmin(deleteId)
  .then(res=>{
    console.log(res.data)
    MySwal.fire({
      html: <i>{res.data.msg}</i>,
      icon: 'success'
  }).then(() => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });
  })
  .catch((err) => {
    console.log(err);
    if (err.response.status === 404) {
          MySwal.fire({
          html: <i> {err.response.data.msg}</i>,
          icon: "error",})
        return;
    }
    else if (err.response.status === 500) {
        MySwal.fire({
        html: <i> {err.response.data.msg}</i>,
        icon: "error",})
      return;
      }
    setTimeout(() => {
        window.location.reload();
      }, 1000);
  });
};

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
                    Depart:
                    <input type="text" value={depart} onChange={(e) => setDepart(e.target.value)} />
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
                    <input type="text" value={deleteId} onChange={(e) => setDeleteAdminId(e.target.value)} />
                </label>
            </div>
          <button className='Log-in-btn' type="submit" onClick={handleSubmit_delete_bt}>Delete Admin</button>
        </form>
      )}
    </div>
  );
}

export default AdminControl;