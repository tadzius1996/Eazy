import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import useGlobalProvider from '../context'
import {useHistory, Link} from 'react-router-dom'
import './Gallery.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Gallery() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

    const {logout} = useGlobalProvider();
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogout() {
  
        setError("")
  
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <div className='dashboard-background'>
            <div className='padding' />
            <div className='dashboard-nav'>
            <div className='padding' />
                <ul className='dashboard-list'>
                <Link to='/MyProfile' className='dashboard-item'><li className='dashboard-item'>My Profile</li></Link>
                <Link to='/StudentReport' className='dashboard-item'><li className='dashboard-item'>Student Report</li></Link>
                <Link to='/Calender' className='dashboard-item'><li className='dashboard-item'>Calender</li></Link>
                <Link to='/Gallery' className='dashboard-item'><li className='dashboard-item'>Gallery</li></Link>
                <li className='dashboard-item'  onClick={handleLogout}>Log out</li>
                </ul>
            </div>
            <div className='gallery-section'>
            <div className='course-holder-gallery' data-aos='fade-down'>
            <img src='about3.jpg' alt='about' className='course-image-gallery'/>
            <div className='course-info' id='course-info'>
                <div className='course-title-gallery' id='course-title'>Out Door Activities</div>
                
                </div>
                <div className='course-overlay-gallery' id='course-overlay'/>
            </div>

            <div className='course-holder-gallery2' data-aos='fade-down'>
            <img src='about1.jpg' alt='about' className='course-image-gallery'/>
            <div className='course-info' id='course-info'>
                <div className='course-title-gallery' id='course-title'>Class Photos</div>
          
                </div>
                <div className='course-overlay-gallery' id='course-overlay'/>
            </div>
            </div>
            <div className='dashboard-nav2'>
            <img src='/gallery9.png' alt='gallery' className='dashboard-image3' data-aos='fade-left'/>
            </div>
        </div>
    )
}

export default Gallery
