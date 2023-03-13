import React from 'react'
// import decoration from '../img/Group 37.svg';
// import '../Styles/Home.css'
// import {Link} from 'react-router-dom';
import backgroundImage from '../img/KMUTNB_BG.jpg';


function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
          {/* <h1>Home page</h1> */}
          <div className='Bg-img'>
              <img className="pic-mid" src={backgroundImage} alt ="bg"/>
          </div>
        </div>
    </div>
  );
}

export default Home