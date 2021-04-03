import React, {useState, useRef} from 'react'
import './MyProfile.css'
import useGlobalProvider from '../context'
import {useHistory, Link} from 'react-router-dom'

function MyProfile() {

    const {currentUser, logout, updatePassword, updateEmail} = useGlobalProvider();
    const [error, setError] = useState('');
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const emailRef = useRef();
    const [loading, setLoading] = useState('');

    async function handleLogout() {
  
        setError("")
  
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }

      function handleUpdate(e) {
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          return setError("Passwords do not match")
        }
    
        const promises = []
        setLoading(true)
        setError("")
    
        if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value))
        }
    
        Promise.all(promises)
          .then(() => {
            history.push("/")
          })
          .catch(() => {
            setError("Failed to update account")
          })
          .finally(() => {
            setLoading(false)
          })
      }
  
      setTimeout(() => {
        setError('')
    }, 3000);

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

            <div className='profile-container'>
              <h1 className='profile-title'>My Profile</h1>
              

              <form  className='contactContainer-dashboard' data-aos='fade-up' type='submit' onSubmit={handleUpdate}>
            <div className='contactForm-registerr'>
            <input className="form-control-register" name="name" autocomplete="off" type="email" ref={emailRef} defaultValue={currentUser.email} required/>
                        <label for='name' className='label-name-register'>
                            <span class='content-name-register'>Email</span>
                        </label>
                          <input className="form-control-register" name="password" autocomplete="off" type='password' ref={passwordRef} required />
                        <label for='password' className='label-name-register'>
                            <span class='content-name-register'>New_Password</span>
                        </label>
                          <input type="text" className="form-control-register" name="subject" autocomplete="off" type='password' ref={confirmPasswordRef} required/>
                        <label for='subject' className='label-name-register'>
                            <span class='content-name-register'>Confirm_New_Password</span>
                        </label>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="contactt-btn-dashboard " value="Update Account!"  onSubmit={handleUpdate}></input>
                            {error ? <h3 className='error'>{error}</h3> : ''}
                        </div>
                </div> 
        </form>
      
            </div>

            <div className='dashboard-nav2'>
            <img src='/profile1.png' alt='welcome' className='dashboard-image2'/>
            </div>
        </div>
    )
}

export default MyProfile
