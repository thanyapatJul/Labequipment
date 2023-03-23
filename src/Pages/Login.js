import React ,{useState}from 'react'
import {Link,useNavigate} from "react-router-dom";
import '../Styles/Login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login_page(){
    const navigate=useNavigate()

    const MySwal = withReactContent(Swal)
    // get input from sid and password 
    const [inputs, setInputs] = useState({});


    // show value in cole.log and change thee value real time 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=token");

    var formdata = new FormData();
    formdata.append("sid", inputs.sid);
    formdata.append("password", inputs.password);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/login", requestOptions)
    .then(response => response.json())
    .then(result => {
        if (result.access_token) {
            localStorage.setItem('sid', result.id);
            localStorage.setItem('token', result.access_token);
            localStorage.setItem('username', result.role);
            
            MySwal.fire({
                html: <i>You have logged in!</i>,
                icon: 'success'
            }).then(() => {
                navigate('/');
                window.location.reload();
            });

        }
        else {
            MySwal.fire({
                html: <i>Username or passsword is incorrect!</i>,
                icon: 'error'
              })
        }
    
    })
    .catch(error => console.log('error', error));
            console.log(inputs);
        }


    return (
        <div className ="container-Log-In">
            <form className ="form-Log-In" onSubmit={handleSubmit}>
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