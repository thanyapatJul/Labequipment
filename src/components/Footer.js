import React from "react"
import '../Styles/Footer.css';
import {Link} from "react-router-dom";
import {BsFacebook , BsInstagram, BsTwitter} from "react-icons/bs";


const Footer=()=>{ 
return(
    <div className="footer-container">
        <div className="footer-container-group">
            <div className="about-us"> 
                <h1>เกี่ยวกับเรา</h1>
                <p>#KMUTNB_LabEquipment</p>
                <Link to='/login'   className=""><p>Let's find out!</p></Link>
            </div>
            <div className="contract-us"> 
                <h1>ติดต่อเรา</h1>
                <p>เบอร์โทร:02x-xxx-xxxx</p>
                <p>เวลาทำการ:จันทร์-ศุกร์ 8.00-18.00น.</p>
                <p>AdminECE_laboratory@email.kmutnb.ac.th</p>
            </div>
            <div className="follow-us"> 
                <h1>ติดตามเรา</h1>
                <div className="Logo-container">
                    <Link to="#" className="fb-logo"><BsFacebook/></Link>
                    <Link to="#" className="in-logo"><BsInstagram/></Link>
                    <Link to="#" className="tw-logo"><BsTwitter/></Link> 
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;