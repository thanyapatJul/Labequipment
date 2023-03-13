import React ,{useEffect}from 'react'
import colorsthemes from '../img/Group 40.svg';
// import '../Styles/About.css'
import Someimage from '../img/Group 35.svg';
// import { Typewriter } from 'react-simple-typewriter'
// import Api from'../img/Api.png'
// import Typ from'../img/Typ.png'
import {Link} from "react-router-dom";
import '../Styles/Login.css'

function Login_page(){


    return (
        <div className ="container-Log-In">
            <form className ="form-Log-In">
                <h2 className='Log-in-header'>เข้าสู่ระบบ</h2>
                <div className="form-control-Log-In">
                    <label>รหัสประจำตัวนักศึกษา/Admin</label>
                    <input type="text" placeholder="กรุณากรอกรหัสประจำตัวนักศึกษา/Admin" />
                </div>
                <div className="form-control-Log-In">
                    <label>รหัสผ่าน</label>
                    <input type="password" placeholder="กรุณากรอกรหัสผ่าน" />
                </div>
                <button className='Log-in-btn' type="submit">เข้าสู่ระบบ</button>
                <Link to='/register'>สมัครสมาชิก</Link>
            </form>   
        </div>
    );
}
export default Login_page