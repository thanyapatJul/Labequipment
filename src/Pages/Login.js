import React ,{useNavigate,useState,useEffect}from 'react'
import colorsthemes from '../img/Group 40.svg';

import Someimage from '../img/Group 35.svg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Link} from "react-router-dom";
import '../Styles/Login.css'

function Login_page(){

    // const navigate=useNavigate()
    // const MySwal = withReactContent(Swal)
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
  }

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Cookie", "jwt=token");

//     var raw = JSON.stringify({
//     "password": inputs.password,
//     "email": inputs.sid
//     });

//     var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//     };

//     fetch("http://127.0.0.1:8000/api/login", requestOptions)
//     .then(response => response.json())

//     .then(result => {
//         console.log(result)
//         if (result.jwt) {
//             MySwal.fire({
//                 html: <i>You have logged in!</i>,
//                 icon: 'success'
//               }).then((value) => {
//             console.log(result)
//             localStorage.setItem('token',result.jwt)
//             localStorage.setItem('userid',result.id) //<-- When logic there's no id
//             localStorage.setItem('username',result.username)
//             navigate('/equipment')
//             window.location.reload();  //<== refres after logedin
//             })

//         }
//         else {
//             MySwal.fire({
//                 html: <i>Username or passsword is incorrect!</i>,
//                 icon: 'error'
//               })
//         }
    
//     })
//     .catch(error => console.log('error', error));
//             console.log(inputs);
//         }

    return (
        <div className ="container-Log-In">
            <form className ="form-Log-In">
                <h2 className='Log-in-header'>เข้าสู่ระบบ</h2>
                <div className="form-control-Log-In">
                    <label>รหัสประจำตัวนักศึกษา/Admin</label>
                    <input 
                    type="text" 
                    name="sid" 
                    placeholder='sid'
                    value={inputs.sid || ""} 
                    onChange={handleChange}/>
                </div>
                <div className="form-control-Log-In">
                    <label>รหัสผ่าน</label>
                    <input 
                    type="password" 
                    name="password" 
                    placeholder='password'
                    value={inputs.password || ""} 
                    onChange={handleChange}/>
                </div>
                <button className='Log-in-btn' type="submit">เข้าสู่ระบบ</button>
                <Link to='/register'>สมัครสมาชิก</Link>
            </form>   
        </div>
    );
}
export default Login_page