import React ,{useEffect}from 'react'
import colorsthemes from '../img/Group 40.svg';
// import '../Styles/About.css'
import Someimage from '../img/Group 35.svg';
// import { Typewriter } from 'react-simple-typewriter'
// import Api from'../img/Api.png'
// import Typ from'../img/Typ.png'
import '../Styles/About.css'
function About_page(){


    return (
        <div className='body-container'>
            <div className='Container-About'>
                <h1>About page</h1>
                <div className='Block-Content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc euismod, dignissim enim ac, consectetur dolor. Nullam eget est id orci dignissim fringilla in sed lacus. Integer at nisl vel lectus tristique vehicula. Sed dignissim hendrerit lacus, ac rhoncus risus imperdiet eu. Suspendisse in elit in elit rhoncus elementum a eu arcu. Nullam dictum lobortis nulla, non aliquam enim venenatis sit amet. Morbi maximus tincidunt magna vel tincidunt. Duis eget nisl vitae odio convallis molestie id id nisl.</p>
                    <p>Suspendisse convallis, nulla nec aliquet maximus, nibh metus mattis enim, ac interdum neque enim sit amet nibh. Nullam bibendum pellentesque lacus, eu fermentum magna lacinia ut. Aenean porttitor sapien sed dolor bibendum viverra. Proin convallis, magna eu sollicitudin venenatis, nisi sapien euismod nibh, non pulvinar enim tortor vitae dui. Sed fringilla ac lorem vel tristique. Etiam id lacus sit amet purus tincidunt eleifend. Vivamus vel magna urna. Etiam fringilla, metus a volutpat vestibulum, justo est malesuada ante, vitae tempor tellus mi in libero. </p>
                    <p class="highlighted-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc euismod, dignissim enim ac, consectetur dolor. Nullam eget est id orci dignissim fringilla in sed lacus.</p>
                </div>
            </div>
        </div>
    );
}
export default About_page