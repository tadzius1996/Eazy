import React, {useState} from 'react'
import './Dashboard.css'
import useGlobalProvider from '../context'
import {useHistory, Link} from 'react-router-dom'

function Dashboard() {

    const {logout, currentUser} = useGlobalProvider();
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

            <div className='dashboard-container'>
              <h1 className='dashboard-title'>Hi, <br/></h1>
              <span className='dashboard-span'>{currentUser.email}</span>
              <p className='dashboard-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam, inventore sapiente neque rem dolore! Fugit eligendi amet voluptatem ab debitis. Provident culpa sint aperiam ipsa illum alias necessitatibus! Aut?</p>
            </div>

            <div className='dashboard-nav2'>
              <img src='/welcome 1.png' alt='welcome' className='dashboard-image'/>
            </div>
        </div>
    )
}

export default Dashboard
