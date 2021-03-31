import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Footer5 from './Footer5';

function Login() {
    return (
        <div className='login-place'>
            <div className='padding' />
        <form  className='contactContainer-login' data-aos='fade-up'>
        <div className='contactForm-register'>
            <h2 className='login'>Login</h2>
        <input type="text" className="form-control-login" name="name" autocomplete="off" required/>
                    <label for='name' className='label-name-register'>
                        <span class='content-name-register'>Name</span>
                    </label>
                      <input type="password" className="form-control-login" name="password" autocomplete="off" required/>
                    <label for='password' className='label-name-register'>
                        <span class='content-name-register'>Password</span>
                    </label>
                      
                    <p className='have-account-login'>Do not have an account?</p><Link to='/Register'><a className='already-login'>Create Account!</a></Link>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="loginn-btn" value="Create Account!"></input>
                    </div>
            </div> 
    </form>
    <img className='login-particles' src='/particlesColor.png' alt='particles' />
    <img className='login-particles2' src='/particlesColor.png' alt='particles' />
    <img className='login-particles3' src='/particlesColor.png' alt='particles' />
    <Footer5/>
    </div>
    )
}

export default Login
