import React , {useState} from 'react';
import Logo from '../img/Logo.png';
import {Link,useNavigate} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css'



function Navbar() {
    const auth =localStorage.getItem('username');
    const nevigate = useNavigate();
    const logout = ()=>{
      localStorage.clear();
      nevigate('/login')
      
    }
    const [openLinks, setOpenLinks]=useState(false);
    const toggleNavbar =() =>{
      setOpenLinks(!openLinks);
    };
  return (
    <div className='mynavbar'>
        <div className='leftSide' id={openLinks ?"open" : "close"}> 
          <Link to='/'>
          <img src={Logo} />
          </Link>
          <div className='hiddenLinks'>
                  <Link to='/'> Home</Link>
                  <Link to='/equipment'> Equipment</Link>
                  <Link to='/login'> Login</Link>
          </div>
        </div>
        {
              auth ? 
                <div className='rightSide' >
                  <Link to='/'> Home</Link>
                  <Link to='/equipment'> Equipment</Link>
                  <Link to='/borrowing'> Borrow List</Link>
                  <Link onClick={logout} to='/login'>  Logout   </Link>
                  <button onClick={toggleNavbar}>
                  <ReorderIcon />
                  </button>
                
                </div>
                : 
                <div className='rightSide'>
                  <Link to='/'> Home</Link>
                  <Link to='/equipment'> Equipment</Link>
                  <Link to='/login'> Login</Link>
                  <button onClick={toggleNavbar}>
                  <ReorderIcon />
                  </button>
                </div>
                
                
        }
    </div>
  );
}

export default Navbar