import React ,{useState,useEffect}from 'react'
import colorsthemes from '../img/Group 40.svg';
// import '../Styles/About.css'
import Someimage from '../img/Group 35.svg';
// import { Typewriter } from 'react-simple-typewriter'
// import Api from'../img/Api.png'
// import Typ from'../img/Typ.png'
import '../Styles/Register.css'

function Register_page(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
  }
    return (
        <div className ="container-Register">
            <form className ="form-Register">
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