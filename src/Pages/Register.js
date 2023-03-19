import React ,{useState}from 'react'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content'
import '../Styles/Register.css'

function Register_page(){
    const navigate=useNavigate()

    const MySwal = withReactContent(Swal)

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData();
        formData.append("name", inputs.name);
        formData.append("surname", inputs.surname);
        formData.append("sid", inputs.sid);
        formData.append("password", inputs.password);
        formData.append("depart", inputs.depart);
        formData.append("year", inputs.year);
    
    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };
    
    fetch("http://localhost:5000/register", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.access_token) {
            MySwal.fire({
                html: <i>Registry complete!</i>,
                icon: 'success'
              }).then((value) => {
                console.log(result)
                navigate('/')
                localStorage.setItem('token',result.access_token)
                localStorage.setItem('username',result.role)
                window.location.reload();  //<== refres after logedin
                })
        }
        else if (result.msg){
          MySwal.fire({
              html: <i>{result.msg}</i>,
              icon: 'error'
            })
      }
        else {
          MySwal.fire({
              html: <i>{result.name}</i>,
              icon: 'error'
            })
      }
    
    })
      .catch(error => console.log('error', error));
    console.log(inputs);
}
    return (
        <div className ="container-Register">
            <form className ="form-Register" onSubmit={handleSubmit}>
                <h2 className='Register-header'>สมัครสมาชิก</h2>
                <div className="form-control-Register-Top">
                    <div class ='form-Name'>
                        <div className='form-input-Group'>
                            <label>ชื่อ</label>
                            <input                     type="text" 
                    name="name" 
                    placeholder='name'
                    value={inputs.name || ""} 
                    onChange={handleChange}/>
                        </div>
                        <div className='form-input-Group'>
                            <label>นามสกุล</label>
                            <input                     type="text" 
                    name="surname" 
                    placeholder='surname'
                    value={inputs.surname || ""} 
                    onChange={handleChange}/>
                        </div>
                    </div>
                    <div class ='form-Major'>
                        <div className='form-input-Group'>
                            <label>สาขา</label>
                            <input type="text" 
                    name="depart" 
                    placeholder='depart'
                    value={inputs.depart || ""} 
                    onChange={handleChange}/>
                        </div>
                        <div className='form-input-Group'>
                            <label>ชั้นปี</label>
                            <input                     
                    type="text" 
                    name="year" 
                    placeholder='year'
                    value={inputs.year || ""} 
                    onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className = "form-control-Register-Below">
                    <div className="form-input">
                        <label>รหัสประจำตัวนักศึกษา</label>
                        <input type="text" 
                    name="sid" 
                    placeholder='sid'
                    value={inputs.sid || ""} 
                    onChange={handleChange}/>
                    </div>
                    <div className="form-input">
                        <label>รหัสผ่าน</label>
                        <input                     type="password" 
                    name="password" 
                    placeholder='password'
                    value={inputs.password || ""} 
                    onChange={handleChange}/>
                    </div>
                    <button className='Register-btn' type="submit">ลงทะเบียน</button>
                </div>

            </form>   
        </div>
    );
}
export default Register_page