import React, {useState} from 'react'
import './Dashboard.css'
import useGlobalProvider from '../context'
import {useHistory, Link} from 'react-router-dom'
import './Gallery.css'

function Gallery() {

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
            <div className='dashboard-nav2'>
            <img src='/gallery9.png' alt='gallery' className='dashboard-image3'/>
            </div>
        </div>
    )
}

export default Gallery
