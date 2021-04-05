import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useGlobalProvider from '../context'

function Navbar() {
    const {currentUser} = useGlobalProvider();

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      let currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
          document.getElementById('navbar').style.top = '0';
      } else {
          document.getElementById('navbar').style.top = '-125px';
      }
      prevScrollpos = currentScrollpos;
      }


    const [open, setOpen] = useState(false);

    return (
        <>
        <div className='navbar' id='navbar'>
            <div className='nav-list'>
                <ul className='list-items' data-aos='fade-right'>
                <Link to='/AboutUs' className='list-item '><li >About us</li></Link>
                <Link to='/Services' className='list-item'><li>Courses</li></Link>
                <Link to='/Hire' className='list-item'><li>Hire</li></Link>
                </ul>
                <Link to='/'><h2 className='logo' data-aos='fade-down'>EZ</h2><span className='subLogo' data-aos='fade-down'>English Center</span></Link>
                <ul className='list-items' data-aos='fade-left'>
                <Link to='/Contact' className='list-item'><li>Contact</li></Link>
                {currentUser? <Link to='/Dashboard' className='list-item'><li>Account</li></Link> : <Link to='/Register' className='list-item'><li>Account</li></Link>}
                <Link to='/Login' className='list-item'><li>Login</li></Link>
                </ul>
            </div> 


            <Link to='/'><h2 className='logo-burger'>EZ</h2><span className='subLogo-burger'>English Center</span></Link>
            <FaBars className='bars' onClick={() => setOpen(!open)} />
            <div className='overlay' onClick={() => setOpen(!open)} style={{display: open ? 'block' : 'none'}}/>

            <div className='nav-burger' style={{transform: open ? 'translate(0px)' : '' }}>
            <AiOutlineClose className='bars' onClick={() => setOpen(!open)} />
            <ul className='list-items-burger'>
            <Link to='/AboutUs' className='list-item-burgerFirst' onClick={() => setOpen(!open)}><li >About us</li></Link>
            <Link to='/Services' className='list-item-burger' onClick={() => setOpen(!open)}><li>Services</li></Link>
            <Link to='/Hire' className='list-item-burger' onClick={() => setOpen(!open)}><li>Hire</li></Link>
            <Link to='/Contact' className='list-item-burger' onClick={() => setOpen(!open)}><li>Contact</li></Link>
            <Link to='/Login' className='list-item-burger' onClick={() => setOpen(!open)}><li>Login</li></Link>
                </ul>
                <div className='burger-social-list'>
                <a href='https://www.facebook.com/ezhalong/'><AiOutlineFacebook  className='burger-social'/></a>
                <a href=''><AiOutlineMail  className='burger-social'/></a>
                <a href=''><AiOutlinePhone  className='burger-social'/></a>
                </div>
            </div>
        </div>

<div id="wave-container">
<div id="wave">
</div>
</div>
</>
    )
}

export default Navbar
