import React ,{useEffect}from 'react'
import colorsthemes from '../img/Group 40.svg';
// import '../Styles/About.css'
import Someimage from '../img/Group 35.svg';
// import { Typewriter } from 'react-simple-typewriter'
// import Api from'../img/Api.png'
// import Typ from'../img/Typ.png'
import '../Styles/Register.css'

function Register_page(){


    return (
        <div className ="container-Register">
            <form className ="form-Register">
                <h2 className='Register-header'>สมัครสมาชิก</h2>
                <div className="form-control-Register-Top">
                    <div class ='form-Name'>
                        <div className='form-input-Group'>
                            <label>ชื่อ</label>
                            <input type="text" placeholder="กรุณากรอกชื่อ" />
                        </div>
                        <div className='form-input-Group'>
                            <label>นามสกุล</label>
                            <input type="text" placeholder="กรุณากรอกนามสกุล" /> 
                        </div>
                    </div>
                    <div class ='form-Major'>
                        <div className='form-input-Group'>
                            <label>สาขา</label>
                            <input type="text" placeholder="กรุณากรอกสาขา" />  
                        </div>
                        <div className='form-input-Group'>
                            <label>ชั้นปี</label>
                            <input type="text" placeholder="กรุณากรอกชั้นปี" /> 
                        </div>
                    </div>
                </div>
                <div className = "form-control-Register-Below">
                    <div className="form-input">
                        <label>รหัสประจำตัวนักศึกษา</label>
                        <input type="text" placeholder="กรุณากรอกรหัสประจำตัวนักศึกษา" />
                    </div>
                    <div className="form-input">
                        <label>รหัสผ่าน</label>
                        <input type="password" placeholder="กรุณากรอกรหัสผ่าน" />
                    </div>
                    <button className='Register-btn' type="submit">ลงทะเบียน</button>
                </div>

            </form>   
        </div>
    );
}
export default Register_page