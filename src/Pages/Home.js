import React from 'react'
import backgroundImage from '../img/KMUTNB_BG.jpg';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
          {/* <h1>Home page</h1> */}
          <div className='Bg-img'>
              <img className="pic-mid" src={backgroundImage} alt ="bg"/>
          </div>
          <Footer/>
        </div>
    </div>
  );
}

export default Home